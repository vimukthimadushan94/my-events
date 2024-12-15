"use client"
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Link from "next/link";

export default function EventSingleItem({ event }) {

    return (
        <Card className="max-w-[340px]" style={{ backgroundColor: event.color }}>
            <Link href={"/event/" + event.id}
            >
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        <Avatar
                            isBordered
                            radius="full"
                            size="md"
                            src="https://nextui.org/avatars/avatar-1.png"
                        />
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">{event.name}</h4>
                        </div>
                    </div>

                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-400">
                    <p>{event.description}</p>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">4</p>
                        <p className=" text-default-400 text-small">Tasks</p>
                    </div>
                </CardFooter>
            </Link>
        </Card>
    );
}

