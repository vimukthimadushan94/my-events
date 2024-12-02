import RegisterForm from "../_components/register/RegisterForm";
import { auth } from "../auth";

export default async function RegisterPage() {
    const session = await auth()
    console.log(session)
    console.log("laodingssss")

    if (!session?.user) return null
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
                    Register
                </h2>
                <RegisterForm />
            </div>
        </div>
    );
};

