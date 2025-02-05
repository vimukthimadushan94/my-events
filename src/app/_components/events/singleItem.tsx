import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import { Event } from "@/types/mainTypes";

export default function EventSingleItem({ event }: { event: Event }) {
    const user = event.createdByUser;
    const avatarSrc = user?.profilePicturePath
        ? `${process.env.NEXT_PUBLIC_APP_URL}${user.profilePicturePath}`
        : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.firstName)}+${encodeURIComponent(user.lastName)}`;

    return (
        <Card
            className="w-[360px] overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl relative bg-background mb-4 border border-gray-300 dark:border-gray-700"
        >
            <div className="absolute top-0 left-0 h-full w-1" style={{ backgroundColor: event.color }}></div>
            <Link href={`/event/${event.id}`} className="flex flex-col h-full">
                <CardHeader className="flex justify-between items-center p-4 backdrop-blur-md" style={{ backgroundColor: `${event.color}20`, color: "inherit" }}>
                    <div className="flex items-center gap-4">
                        <Avatar
                            isBordered
                            radius="full"
                            size="lg"
                            src={avatarSrc}
                            name={user?.firstName || "User"}
                        />
                        <div className="flex flex-col">
                            <h4 className="text-md font-semibold text-foreground">{event.name}</h4>
                            <p className="text-sm text-foreground/80">{user?.firstName || "Unknown Creator"}</p>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-5 py-3 text-foreground flex-grow">
                    <p className="text-sm leading-relaxed">{event.description}</p>
                </CardBody>
                <CardFooter className="flex justify-between items-center p-4 backdrop-blur-md" style={{ backgroundColor: `${event.color}20`, color: "inherit" }}>
                    <div className="flex items-center gap-1 text-foreground/80 text-sm">
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
