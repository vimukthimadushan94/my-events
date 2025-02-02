import EventListComponent from "@/app/_components/events/list";
import { auth } from "@/app/auth";
import { Event } from "@/types/mainTypes";
import { Session } from "next-auth";


export default async function EventList() {
    const session: Session | null = await auth();
    if (session === null) {
        return <>Invalid Token</>
    } else {
        const userToken = session.user.accessToken;
        const appUrl = process.env.NEXT_PUBLIC_APP_URL;
        const response = await fetch(appUrl + "/api/Events", {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            },
        });
        const events = await response.json();
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 m-6">
                    <EventListComponent events={events} />
                </div>
            </div>
        );
    }

}
