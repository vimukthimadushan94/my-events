import Image from "next/image";

export default function SiteFooter() {
    return (
        <>
            <footer className="bg-gray-800 text-gray-300 p-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                    <div>
                        <h2 className="text-lg font-bold text-white mb-2">About Us</h2>
                        <p>
                            We are a team of passionate developers building modern web
                            solutions.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white mb-2">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="hover:text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white mb-2">Contact</h2>
                        <p>Email: contact@mysite.com</p>
                        <p>Phone: 041 123-4567</p>
                        <p>Address: Puistokatu 6A oulu</p>
                    </div>
                </div>
                <div className="text-center text-gray-500 mt-6">
                    © 2024 MySite. All rights reserved.
                </div>
            </footer>
        </>)
}