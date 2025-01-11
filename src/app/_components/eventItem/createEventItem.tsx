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
import { ToastContainer, toast } from "react-toastify";
import { today, getLocalTimeZone } from "@internationalized/date";
import UserDropdown from "./userDropdown";
import { User } from "@/types/mainTypes";

export default function CreateEventItem({ users }: { users: User[] }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
    let [dateValue, setDateValue] = React.useState({
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ days: 1 }),
    });

    const handleSelectedUsers = (ids: string[]) => {
        setSelectedUserIds(ids);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const eventData = {
            eventId: 4,
            name: formData.get("name"),
            description: formData.get("description"),
            price: formData.get("price") === "" ? 0 : parseFloat(formData.get("price") as string),
            from: dateValue.start.toString() + "T" + formData.get("startTime"),
            to: dateValue.end.toString() + "T" + formData.get("endTime"),
            users: selectedUserIds,
            location: formData.get("location"),
        };

        try {
            const appUrl = process.env.NEXT_PUBLIC_APP_URL;
            const response = await fetch(`${appUrl}/api/EventItems`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventData),
            });

            if (response.ok) {
                toast.success("Event created successfully!");
                onClose();
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.message || "Something went wrong"}`);
            }
        } catch (error) {
            console.error("Error creating event:", error);
            toast.error("Failed to create event. Please try again.");
        }
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
                                        <Form validationBehavior="native" onSubmit={handleSubmit}>
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
                                            <Input
                                                errorMessage="Location name is required"
                                                label="Location Name"
                                                placeholder="Enter the location name"
                                                type="text"
                                                name="location"
                                                className="gap-4"
                                            />
                                            <div className="flex flex-col items-center justify-center my-4">
                                                <h3 className="text-default-500 text-small mb-2">
                                                    Select Event Date Range
                                                </h3>
                                                <RangeCalendar
                                                    aria-label="Date Range"
                                                    value={dateValue}
                                                    className="shadow-lg rounded-md"
                                                    onChange={setDateValue}
                                                />
                                            </div>
                                            <div className="flex flex-row gap-4">
                                                <TimeInput
                                                    isRequired
                                                    className="basis-1/2 text-lg py-3"
                                                    label="Event Start Time"
                                                    name="startTime"
                                                />
                                                <TimeInput
                                                    isRequired
                                                    className="basis-1/2 text-lg py-3"
                                                    label="Event End Time"
                                                    name="endTime"
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
