
import CreateEventItem from "@/app/_components/eventItem/createEventItem";
import SingleEventItem from "@/app/_components/eventItem/singleEventItem";
import { auth } from "@/app/auth";


export default async function Page({ params }: { params: { id: string } }) {
    const { id } = await params
    const session = await auth();
    if (session === null) {
        return <>Invalid Token</>
    } else {
        const userToken = session.user?.accessToken;
        const appUrl = process.env.NEXT_PUBLIC_APP_URL;
        const response = await fetch(appUrl + "/api/" + id + "/eventItems", {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            },
        });
        const eventItems = await response.json();

        const userResponse = await fetch(appUrl + "/api/Auth/app-users", {
            headers: {
                "Authorization": `Bearer ${userToken}`,
            },
        });
        const users = await userResponse.json();

        return (
            <>
                <CreateEventItem users={users} eventItemId={id} />
                <SingleEventItem eventItems={eventItems} eventId={id} />
            </>
        );
    }

}
