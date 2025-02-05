import { SignIn } from "../_components/signin/sign-in";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm rounded-lg shadow-lg">
                <SignIn />
            </div>
        </div>
    );
}
