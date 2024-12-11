"use client";
import { loginAction } from "@/app/app/actions/authActions";
import { signIn } from "@/app/auth"
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify"


export function SignIn() {
    const router = useRouter();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        try {
            await loginAction(formData)
            // toast.success("Login successful!", { position: "top-left" });
            // setTimeout(() => router.push("/event/create"), 2500);
        } catch (error: any) {
            toast.error("Login fail!", { position: "top-left" });
        }


    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>
            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    name="password"
                    type="password"
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>

            <button
                type="submit"
                className="w-full px-4 mt-5 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
            >
                Sign In
            </button>
            <ToastContainer />
        </form>
    )
}