import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { Event } from "@/types/mainTypes";

export default function EventSingleItem({ event }: { event: Event }) {
    const user = event.createdByUser;
    const avatarSrc = user?.profilePicturePath
        ? `${process.env.NEXT_PUBLIC_APP_URL}${user.profilePicturePath}`
        : "https://nextui.org/avatars/avatar-1.png";

    return (
        <Card
            className="w-[360px] overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl"
            style={{ backgroundColor: event.color }}
        >
            <Link href={`/event/${event.id}`} className="flex flex-col h-full">
                {/* Header */}
                <CardHeader className="flex justify-between items-center p-4 bg-white/30 backdrop-blur-md">
                    <div className="flex items-center gap-4">
                        <Avatar
                            isBordered
                            radius="full"
                            size="lg"
                            src={avatarSrc}
                            name={user?.firstName || "User"}
                        />
                        <div className="flex flex-col">
                            <h4 className="text-md font-semibold text-gray-800">{event.name}</h4>
                            <p className="text-sm text-gray-600">{user?.firstName || "Unknown Creator"}</p>
                        </div>
                    </div>
                </CardHeader>

                {/* Body */}
                <CardBody className="px-5 py-3 text-gray-700 flex-grow">
                    <p className="text-sm leading-relaxed">{event.description}</p>
                </CardBody>

                {/* Footer */}
                <CardFooter className="flex justify-between items-center p-4 bg-white/30 backdrop-blur-md">
                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <span className="font-semibold">4</span>
                        <span>Tasks</span>
                    </div>
                    <Button as={Link} href={`/event/${event.id}`} size="sm" color="primary" className="rounded-lg">
                        View Details
                    </Button>
                </CardFooter>
            </Link>
        </Card>
    );
}
