import { signIn } from "@/app/auth"
import { ToastContainer } from "react-toastify"


export function SignIn() {
    return (
        // <form
        //     action={async (formData) => {
        //         "use server"
        //         await signIn("credentials", formData, { redirectTo: "/register" })
        //     }}
        // >
        //     <label>
        //         Email
        //         <input name="email" type="email" />
        //     </label>
        //     <label>
        //         Password
        //         <input name="password" type="password" />
        //     </label>
        //     <button>Sign In</button>
        // </form>
        <form
            action={async (formData) => {
                "use server"
                await signIn("credentials", formData, { redirectTo: "/register" })
            }}
        >
            <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>
            <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                    name="password"
                    type="password"
                    required
                    className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-500"
                />
            </div>

            <button
                type="submit"
                className="w-full px-4 mt-5 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500"
            >
                Sign In
            </button>
            <ToastContainer />
        </form>
    )
}