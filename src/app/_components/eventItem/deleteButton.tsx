"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function DeleteEventButton({ eventItemId, eventId }: { eventItemId: string, eventId: string }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const deleteEventItem = async () => {
        console.log("Deleting event with id:", eventItemId);
        if (!eventItemId) return;
        setLoading(true);

        try {
            const appUrl = process.env.NEXT_PUBLIC_APP_URL;
            if (!appUrl) {
                console.error("NEXT_PUBLIC_APP_URL is not defined");
                return;
            }

            const response = await fetch(`${appUrl}/api/EventItems/${eventItemId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to delete event: ${response.statusText}`);
            }

            console.log("Event deleted successfully!");
            router.push("/event/" + eventId);
        } catch (error) {
            console.error("Error deleting event:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Button
            className="text-white bg-red-500 hover:bg-red-600"
            size="sm"
            onPress={deleteEventItem}
            disabled={loading}
        >
            {loading ? "Deleting..." : "Delete"}
        </Button>
    );
}
