"use client";

import React, { useState } from "react";
import { Button, Input, Avatar, Spacer, Form, form } from "@nextui-org/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UpdateProfileForm = ({ authToken }) => {
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const router = useRouter();


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);



        formData.append("FirstName", formData.get("firstname") as string);
        formData.append("LastName", formData.get("lastname") as string);



        try {
            const appUrl = process.env.NEXT_PUBLIC_APP_URL;
            const response = await fetch(`${appUrl}/api/Auth/update-profile`, {
                method: "PUT",
                headers: {
                    accept: "*/*",
                    "Authorization": `Bearer ${authToken}`
                },
                body: formData,
            });

            if (response.ok) {
                toast.success("Event created successfully!");
                router.push("/");
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message || "Something went wrong"}`);
            }
        } catch (error) {
            console.error("Error creating event:", error);
            toast.error("Failed to create event. Please try again.");
        }
    };

    return (
        <Form validationBehavior="native" onSubmit={handleSubmit}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                    src={profileImage || "/default-avatar.png"}
                    alt="Profile Image"
                    size="lg"
                />
            </div>
            <Spacer y={1} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    id="upload-image"
                />
                <label htmlFor="upload-image">
                    <Button as="span">
                        Upload Image
                    </Button>
                </label>
            </div>
            <Spacer y={1.5} />
            <Input
                fullWidth
                label="First Name"
                placeholder="Enter your first name"
                name="firstname"
            />
            <Spacer y={1} />
            <Input
                fullWidth
                label="Last Name"
                placeholder="Enter your last name"
                name="lastname"
            />
            <Spacer y={1.5} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" color="primary">
                    Save Changes
                </Button>
            </div>
        </Form>
    );
};

export default UpdateProfileForm;
