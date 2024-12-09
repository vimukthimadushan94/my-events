import { SignIn } from "../_components/signin/sign-in";

export default async function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
                    Login
                </h2>
                <SignIn />
            </div>
        </div>
    );
}
