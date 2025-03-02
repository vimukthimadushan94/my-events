"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { ColorPicker, Hue, useColor } from "react-color-palette";
import "react-color-palette/css";
import {
    Modal,
    ModalContent,
    Input,
    Form,
    Button,
    useDisclosure,
    Textarea,
} from "@nextui-org/react";

type FormData = {
    name: string;
    color: string;
    description: string;
};

interface CreateEventFormProps {
    authToken: string;
}

const CreateEventForm: React.FC<CreateEventFormProps> = ({ authToken }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        color: "",
        description: ""
    });

    const [color, setColor] = useColor("rgb(86 30 203)");

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleColorChange = (newColor: any) => {
        setColor(newColor);
        setFormData((prevData) => ({
            ...prevData,
            color: newColor.hex,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const appUrl = process.env.NEXT_PUBLIC_APP_URL;
            const response = await fetch(appUrl + "/api/Events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Event created successful!", {
                    position: "top-left"
                });

                setFormData({
                    name: "",
                    color: "",
                    description: ""
                });

                setTimeout(() => {
                    onClose()
                    router.push("/event/list")
                }, 2500);
            } else {
                const errorData = await response.json();
                const errorMessage = `Error: ${errorData[0].description || "Event Create failed"}`;
                toast.error(errorMessage, {
                    position: "top-left"
                });
            }
        } catch (error) {
            toast.error("An unexpected error occurred.", {
                position: "top-left"
            });
        }
    };

    return (
        <>
            <Button onPress={onOpen}>Create Event</Button>
            <Modal id="create-model-popup" backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md p-8 rounded shadow-lg">
                                <h2 className="mb-6 text-2xl font-bold text-center ">
                                    Create Your Event Here
                                </h2>
                                <Form validationBehavior="native" onSubmit={handleSubmit}>

                                    <Input
                                        value={formData.name}
                                        onChange={handleChange}
                                        isRequired
                                        errorMessage="Please enter a valid name"
                                        label="Name"
                                        placeholder="Enter your name"
                                        type="text"
                                        labelPlacement="outside"
                                        name="name"
                                    />
                                    <div>
                                        <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                                            Chose Your Preffered Color
                                        </label>
                                        <ColorPicker height={100} color={color} onChange={handleColorChange} />
                                    </div>
                                    <Textarea
                                        value={formData.description}
                                        onChange={handleChange}
                                        name="description"
                                        label="Description"
                                        labelPlacement="outside"
                                        minRows={2}
                                        placeholder="Enter your description"
                                    />
                                    <Button type="submit" variant="bordered">
                                        Submit
                                    </Button>
                                    <ToastContainer />
                                </Form>
                            </div>
                        </div>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreateEventForm;
