import RegisterForm from "../_components/register/RegisterForm";

export default async function RegisterPage() {

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm rounded-lg shadow-lg">
                <RegisterForm />
            </div>
        </div>
    );
};

