import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";

export default async function SingleEventItem({ eventItems }: { eventItems: any }) {

    return (

        <div className="flex items-center justify-center min-h-screen">
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 m-6">
                {eventItems.map((eventItem: any) => (
                    <Card className="max-w-[340px]" >

                        <CardHeader className="justify-between">
                            <div className="flex gap-5">

                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">{eventItem.name}</h4>
                                </div>
                            </div>

                        </CardHeader>
                        <CardBody className="px-3 py-0 text-small text-default-400">
                            <p>{eventItem.description}</p>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">4</p>
                                <p className=" text-default-400 text-small">Tasks</p>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

