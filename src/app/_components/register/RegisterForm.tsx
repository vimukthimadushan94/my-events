"use client";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { registerAction } from "@/app/app/actions/authActions";
import { Form, Input } from "@nextui-org/react";

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
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-sm rounded-lg shadow-md">
                <h2 className="text-center text-2xl font-bold mb-4">Register</h2>
                <Form onSubmit={handleSubmit} >
                    <Input
                        isRequired
                        name="firstName"
                        label="First Name"
                        labelPlacement="outside"
                        placeholder="Enter your first name"
                    />
                    <Input
                        name="lastName"
                        label="Last Name"
                        labelPlacement="outside"
                        placeholder="Enter your last name"
                    />
                    <Input
                        isRequired
                        name="email"
                        label="Email"
                        labelPlacement="outside"
                        placeholder="Enter your email"
                    />
                    <Input
                        isRequired
                        name="password"
                        label="Parssword"
                        type="password"
                        labelPlacement="outside"
                        placeholder="Enter your password"
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
                    >
                        Register
                    </button>
                    <ToastContainer />
                </Form>
            </div>
        </div>
    );
};

export default RegisterForm;
