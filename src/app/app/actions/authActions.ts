"use server";

import { signIn } from "@/app/auth";
import { cache } from "react";
import { toast } from "react-toastify";

export async function registerAction(formData: { [key: string]: any }) {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const response = await fetch(`${appUrl}/api/Auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData[0]?.description || "Registration failed");
    }

    return "Registration successful!";
}

export async function loginAction(formData: { [key: string]: any }) {

    await signIn("credentials", formData);

}
