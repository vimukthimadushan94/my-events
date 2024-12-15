import EventListComponent from "@/app/_components/events/list";
import EventSingleItem from "@/app/_components/events/singleItem";
import { auth } from "@/app/auth";
import { Session } from "next-auth";


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const session: Session | null = await auth();
    if (session === null) {
        return <>Invalid Token</>
    } else {
        const userToken = session.user.accessToken;
        const appUrl = process.env.NEXT_PUBLIC_APP_URL;
        const response = await fetch(appUrl + "/api/Events/" + id, {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            },
        });
        const event = await response.json();
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 m-6">
                    <EventSingleItem event={event} />
                </div>
            </div>
        );
    }

}
