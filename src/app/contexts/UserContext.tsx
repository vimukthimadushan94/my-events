"use client"
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
    profileImage: "",
    setProfileImage: (url: string) => { },
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [profileImage, setProfileImage] = useState<string>("");

    return (
        <UserContext.Provider value={{ profileImage, setProfileImage }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);