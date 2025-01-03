"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { registerAction } from "@/app/app/actions/authActions";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await registerAction(formData);
            toast.success("Registration successful!", { position: "top-left" });
            setTimeout(() => router.push("/"), 2500);
        } catch (error: any) {
            toast.error(error.message || "An unexpected error occurred.", { position: "top-left" });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>
            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
            >
                Register
            </button>
            <ToastContainer />
        </form>
    );
};

export default RegisterForm;
