"use client"
import { Event } from "@/types/mainTypes";
import EventSingleItem from "./singleItem"

interface EventListComponentProps {
    events: Event[];
}

export default function EventListComponent({ events }: EventListComponentProps) {
    return (
        <>
            {events.map((event: any) => (
                <EventSingleItem key={event.id} event={event} />
            ))}
        </>
    );
}

