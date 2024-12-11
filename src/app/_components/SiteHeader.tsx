
import Link from "next/link";
import { signOut } from "../auth";

export default function SiteHeader() {
    return (
        <>
            <header className="bg-blue-600 text-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <Link href="/" className="text-xl font-bold">
                        MySite
                    </Link>
                    <nav className="space-x-4">
                        <Link href="/event/create" className="hover:text-gray-200">
                            Create Event
                        </Link>
                        <Link href="/event/list" className="hover:text-gray-200">
                            Event List
                        </Link>
                        <Link href="/services" className="hover:text-gray-200">
                            Services
                        </Link>
                        <Link href="/contact" className="hover:text-gray-200">
                            Contact
                        </Link>
                    </nav>
                    <Link href="/login" className="bg-white text-blue-600 px-4 py-2 rounded-md shadow hover:bg-gray-100">
                        Login
                    </Link>
                    <form
                        action={async () => {
                            'use server';
                            await signOut();
                        }}
                    >
                        <button className="bg-white text-blue-600 px-4 py-2 rounded-md shadow hover:bg-gray-100">

                            <div className="hidden md:block">Sign Out</div>
                        </button>
                    </form>
                    <Link href="/register" className="bg-white text-blue-600 px-4 py-2 rounded-md shadow hover:bg-gray-100">
                        Sign Up
                    </Link>
                </div>
            </header>
        </>
    )
}