"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

type FormData = {
    name: string;
    color: string;
    description: string;
};

interface CreateEventFormProps {
    authToken: string;
}

const CreateEventForm: React.FC<CreateEventFormProps> = ({ authToken }) => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        color: "",
        description: ""
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
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

                setTimeout(() => router.push("/event/list"), 2500);
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
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Event Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>
            <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                    Chose Your Preffered Color
                </label>
                <input
                    type="text"
                    name="color"
                    id="color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
            >
                Submit
            </button>
            <ToastContainer />
        </form>
    );
};

export default CreateEventForm;
