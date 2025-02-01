import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

export default async function SingleEventItem({ eventItems }: { eventItems: any }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <div className="space-y-6 w-full max-w-5xl">
                {eventItems.map((eventItem: any) => (
                    <Card className="w-full shadow-md rounded-lg" key={eventItem.id}>
                        <CardHeader className="flex justify-between items-center p-4">
                            <div>
                                <h3 className="text-xl font-bold">{eventItem.name}</h3>
                                <p className="text-sm">
                                    {`Start: ${new Date(eventItem.from).toLocaleString()}`}
                                </p>
                                <p className="text-sm">
                                    {`End: ${new Date(eventItem.to).toLocaleString()}`}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                >
                                    Edit
                                </Button>
                                <Button
                                    className="text-white bg-red-500 hover:bg-red-600"
                                    size="sm"
                                >
                                    Delete
                                </Button>
                            </div>
                        </CardHeader>
                        <CardBody className="px-4 py-3">
                            <p className="text-gray-600">{eventItem.description}</p>
                        </CardBody>
                        {eventItem.eventItemUsers.length > 0 ? (
                            <CardFooter className="flex flex-col gap-4 px-4 py-3">
                                <div>
                                    <h4 className="font-semibold text-gray-700">Acting Persons:</h4>
                                    <div className="flex gap-2 mt-2">
                                        {eventItem.eventItemUsers.map((person: any, index: number) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <Avatar
                                                    size="sm"
                                                    src={
                                                        person.profilePicturePath
                                                            ? `${process.env.NEXT_PUBLIC_APP_URL}${person.profilePicturePath}`
                                                            : `https://ui-avatars.com/api/?name=${encodeURIComponent(person.firstName)}+${encodeURIComponent(person.lastName)}`
                                                    }
                                                />
                                                <p>{person.firstName}</p>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-500">
                                    <p>{`Start Date: ${new Date(eventItem.startDate).toLocaleDateString()}`}</p>
                                    <p>{`End Date: ${new Date(eventItem.endDate).toLocaleDateString()}`}</p>
                                </div>
                            </CardFooter>
                        ) : null}
                    </Card>
                ))}
            </div>
        </div>
    );
}
