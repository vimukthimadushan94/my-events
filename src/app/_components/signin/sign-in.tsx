"use client";
import { loginAction } from "@/app/app/actions/authActions";
import { Form, Input } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";

export function SignIn() {
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
            await loginAction(formData);
            toast.success("Login successful!", { position: "top-left" });
            setTimeout(() => router.push("/event/create"), 2500);
        } catch (error: any) {
            toast.error("Login failed!", { position: "top-left" });
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-sm p-6 rounded-lg shadow-md">
                <h2 className="text-center text-2xl font-bold mb-4">Sign In</h2>
                <div className="flex justify-center mb-5">
                    <div className="flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-lg">
                        <Image
                            src="/logo/Eventtifi-logo.png"
                            className="w-36 h-16 object-contain drop-shadow-lg"
                            width={150}
                            height={100}
                            alt="Eventtifi Logo"
                        />
                    </div>
                </div>
                <Form onSubmit={handleSubmit}>
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
                        className="w-full px-4 mt-5 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
                    >
                        Sign In
                    </button>
                </Form>
                <ToastContainer />
            </div>
        </div>
    );
}
