"use client";
import React, { useState } from "react";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Form,
    Input,
    Textarea,
    TimeInput,
    RangeCalendar,
} from "@nextui-org/react";
import { ToastContainer } from "react-toastify";
import { today, getLocalTimeZone } from "@internationalized/date";
import UserDropdown from "./userDropdown";
import { User } from "@/types/mainTypes";

export default function CreateEventItem({ users }: { users: User[] }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);

    const handleSelectedUsers = (ids: string[]) => {
        setSelectedUserIds(ids);
        console.log("Selected User IDs from Child:", ids);
    };


    return (
        <>
            <div className="flex flex-wrap gap-3">
                <Button key={"event-button"} onPress={() => onOpen()}>
                    Create Event Item
                </Button>
            </div>
            <Drawer isOpen={isOpen} size={"4xl"} onClose={onClose}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">
                                Create Event Item
                            </DrawerHeader>
                            <DrawerBody>
                                <div className="flex items-center justify-center">
                                    <div className="w-full max-w-md">
                                        <h2 className="mb-6 text-2xl font-bold text-center">
                                            Fill in Event Details
                                        </h2>
                                        <Form validationBehavior="native">
                                            <Input
                                                isRequired
                                                errorMessage="Event name is required"
                                                label="Event Name"
                                                placeholder="Enter the event name"
                                                type="text"
                                                name="name"
                                                className="gap-4"
                                            />
                                            <Textarea
                                                name="description"
                                                label="Event Description"
                                                placeholder="Briefly describe the event"
                                                minRows={3}
                                            />
                                            <div className="flex flex-col items-center justify-center my-4">
                                                <h3 className="text-default-500 text-small mb-2">Select Event Date Range</h3>
                                                <RangeCalendar
                                                    aria-label="Date Range"
                                                    defaultValue={{
                                                        start: today(getLocalTimeZone()),
                                                        end: today(getLocalTimeZone()).add({ weeks: 1 }),
                                                    }}
                                                    className="shadow-lg rounded-md"
                                                />
                                            </div>
                                            <div className="flex flex-row gap-4">
                                                <TimeInput
                                                    className="basis-1/2 text-lg py-3"
                                                    label="Event Start Time"
                                                />
                                                <TimeInput
                                                    className="basis-1/2 text-lg py-3"
                                                    label="Event End Time"
                                                />
                                            </div>
                                            <Input
                                                errorMessage="Please enter a valid price"
                                                label="Event Price (optional)"
                                                placeholder="Enter the price (e.g., 50)"
                                                type="number"
                                                name="price"
                                            />
                                            <div className="mb-4">
                                                <h3 className="text-default-500 text-small">
                                                    Select Participants
                                                </h3>
                                                <UserDropdown users={users} onSelectionChange={handleSelectedUsers} />
                                            </div>
                                            <div className="flex justify-center mt-6">
                                                <Button type="submit" variant="bordered">
                                                    Create Event
                                                </Button>
                                            </div>
                                            <ToastContainer />
                                        </Form>
                                    </div>
                                </div>
                            </DrawerBody>
                            <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancel
                                </Button>
                            </DrawerFooter>
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
