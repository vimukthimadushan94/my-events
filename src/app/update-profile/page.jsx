import React from "react";
import UpdateProfileForm from "./UpdateProfileForm";
import { auth } from "../auth";

export default async function UpdateProfilePage() {
    const session = await auth();
    if (session === null) {
        return <>Invalid Token</>
    } else {
        const userToken = session.user?.accessToken;

        return (
            <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
                <div style={{ maxWidth: "500px", width: "100%" }}>
                    <h1 style={{ textAlign: "center" }}>Update Profile</h1>
                    <UpdateProfileForm authToken={userToken} />
                </div>
            </div>
        );
    }
}
