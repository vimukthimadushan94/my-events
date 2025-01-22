"use client"
import { useUser } from "@/app/contexts/UserContext";
import { Avatar, Spinner } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

export default function ProfileSection({ userToken }: { userToken: string }) {
    const [isLoading, setIsLoading] = useState(true);
    const { user, setUser } = useUser() as { user: any, setUser: (user: any) => void };
    const backendUrl = process.env.NEXT_PUBLIC_APP_URL;

    useEffect(() => {

        const fetchProfileImage = async () => {
            try {
                const response = await fetch(backendUrl + "/api/Auth/profile", {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                });
                const data = await response.json();
                setUser(() => data);
            } catch (error) {
                console.error("Error fetching profile image:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfileImage();
        console.log("profile image fetching");
    }, [userToken, setUser]);

    if (isLoading) {
        return <Spinner size="sm" color="secondary" />;
    }

    return (
        <Avatar
            isBordered
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src={backendUrl + user.profileImageUrl}
        />
    );
}