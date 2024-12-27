import SingleEventItem from "@/app/_components/eventItem/singleEventItem";
import { auth } from "@/app/auth";
import { Session } from "next-auth";


export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
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
        return (
            <SingleEventItem eventItems={eventItems} />
        );
    }

}
