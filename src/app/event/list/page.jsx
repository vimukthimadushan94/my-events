import { auth } from "@/app/auth";

export default async function EventCreate() {
    const session = await auth()

    return (<div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
                Event List
            </h2>
        </div>
    </div>);
}