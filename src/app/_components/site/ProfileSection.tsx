"use client"
import { useUser } from "@/app/contexts/UserContext";
import { Avatar } from "@nextui-org/react";
import React, { useEffect } from "react";

export default function ProfileSection({ userToken }: { userToken: string }) {
    const { profileImage, setProfileImage } = useUser();
    const backendUrl = process.env.NEXT_PUBLIC_APP_URL;

    useEffect(() => {

        const fetchProfileImage = async () => {
            const response = await fetch(backendUrl + "/api/Auth/profile", {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            });
            const data = await response.json();
            setProfileImage(data.profileImageUrl);
        };


        fetchProfileImage();

        console.log("profile image fetching");
    }, [profileImage, setProfileImage]);
    return (
        <Avatar
            isBordered
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src={backendUrl + profileImage}
        />
    );
}