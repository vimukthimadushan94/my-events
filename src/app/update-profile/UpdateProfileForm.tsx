"use client";

import React, { useEffect, useState } from "react";
import { Button, Input, Avatar, Spacer, Form, form } from "@nextui-org/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useUser } from "../contexts/UserContext";
import AuthUser from "@/types/authUser";

export default function UpdateProfileForm({ authToken }: { authToken: string }) {
    const backendUrl = process.env.NEXT_PUBLIC_APP_URL;
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const { user, setUser } = useUser();
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
        const target = e.currentTarget;
        const fileInput = target.querySelector('input[type="file"]') as HTMLInputElement;
        if (fileInput?.files?.length) {
            formData.append("profilePicture", fileInput.files[0]);
        }

        try {
            const response = await fetch(`${backendUrl}/api/Auth/update-profile`, {
                method: "PUT",
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${authToken}`,
                },
                body: formData,
            });

            if (response.ok) {
                var data = await response.json();
                var userResponse: AuthUser = {
                    firstName: data.firstName,
                    email: data.email,
                    lastName: data.lastName,
                    profileImageUrl: data.profilePicturePath
                };
                console.log(userResponse);
                setUser(userResponse);
                toast.success("Profile updated successfully!");
                router.push("/");
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message || "Something went wrong"}`);
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Failed to update profile. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                    src={profileImage || (user && backendUrl + user.profileImageUrl) || ""}
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
                    name="ProfilePicture"
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
                value={user?.firstName || ""}
                onChange={(e) =>
                    setUser((prevUser) => ({
                        ...prevUser,
                        firstName: e.target.value,
                    }))
                }
            />
            <Spacer y={1} />
            <Input
                fullWidth
                label="Last Name"
                placeholder="Enter your last name"
                name="lastname"
                value={user?.lastName || ""}
                onChange={(e) =>
                    setUser((prevUser) => ({
                        ...prevUser,
                        lastName: e.target.value,
                    }))
                }
            />
            <Spacer y={1.5} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" color="primary">
                    Save Changes
                </Button>
            </div>
        </form>
    );
};
