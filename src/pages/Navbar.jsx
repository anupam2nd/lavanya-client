import { useState } from "react";
import logoMain from "../logo/logoMain.png"; 

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navigateMenu = ["Home", "About", "Service", "Gallery", "Contact"]

    return (
        <div className="relative w-full">
            {/* Background Image with Low Opacity */}
            <div className="absolute inset-0 bg-[url(./logo/navbarbg.jpg)] bg-cover bg-center opacity-30"></div>

            {/* Navbar */}
            <div className="relative z-10  top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-md">
                <div className="container flex items-center justify-between mx-auto px-2 lg:px-7 py-2">
                    {/* Logo */}
                    <a href="/">
                        <img src={logoMain} alt="Logo" className="h-12" />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden flex flex-col justify-between h-6 w-8 relative z-50"
                        onClick={() => setIsNavOpen((prev) => !prev)}
                        aria-label="Toggle Navigation"
                    >
                        <span className={`block h-0.5 w-8 bg-gray-600 transition-all duration-300 ${isNavOpen ? "rotate-45 translate-y-2.5 bg-black" : ""}`} />
                        <span className={`block h-0.5 w-8 bg-gray-600 transition-all duration-300 ${isNavOpen ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-8 bg-gray-600 transition-all duration-300 ${isNavOpen ? "-rotate-45 -translate-y-2.5 bg-black" : ""}`} />
                    </button>

                    {/* Mobile Navigation */}
                    <div
                        className={`absolute left-0 w-full bg-white/80 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${isNavOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
                        style={{ top: "100%" }}
                    >
                        <ul className="flex flex-col items-center gap-4 text-lg font-medium px-6">
                            {navigateMenu.map((item) => (
                                <li key={item}>
                                    <a
                                        href={`/${item.toLowerCase()}`}
                                        className="hover:text-blue-500 transition"
                                        onClick={() => setIsNavOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex space-x-8 text-lg font-medium">
                        {navigateMenu.map((item) => (
                            <li key={item}>
                                <a href={`/${item.toLowerCase()}`} className="hover:text-blue-500 transition">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
