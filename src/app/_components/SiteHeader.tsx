import Image from "next/image";

export default function SiteHeader() {
    return (
        <>
            <header className="bg-blue-600 text-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <a href="/" className="text-xl font-bold">
                        MySite
                    </a>
                    <nav className="space-x-4">
                        <a href="#about" className="hover:text-gray-200">
                            About
                        </a>
                        <a href="#services" className="hover:text-gray-200">
                            Services
                        </a>
                        <a href="#contact" className="hover:text-gray-200">
                            Contact
                        </a>
                    </nav>
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-md shadow hover:bg-gray-100">
                        Sign Up
                    </button>
                </div>
            </header>
        </>
    )
}