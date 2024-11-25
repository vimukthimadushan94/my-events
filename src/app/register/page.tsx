import RegisterForm from "../_components/register/RegisterForm";

const RegisterPage = () => {
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

export default RegisterPage;
