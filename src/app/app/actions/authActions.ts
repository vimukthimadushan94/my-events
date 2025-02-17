"use server";

import { signIn } from "@/app/auth";


export async function registerAction(formData: { [key: string]: any }) {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    console.log(formData)
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
