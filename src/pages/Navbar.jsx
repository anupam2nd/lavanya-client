
import { useState } from "react";
import logoMain from "../logo/logoMain.png"; 

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative border-b border-gray-400 py-4 px-6 lg:px-10 flex items-center justify-between">
      {/* Logo */}
      <a href="/">
        <img src={logoMain} alt="Logo" className="h-12" /> {/* Adjust height as needed */}
      </a>

      {/* Mobile Menu */}
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          {/* Hamburger Icon */}
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 bg-gray-600 transition-all"></span>
            <span className="block h-0.5 w-8 bg-gray-600 transition-all"></span>
            <span className="block h-0.5 w-8 bg-gray-600 transition-all"></span>
          </div>

          {/* Mobile Navigation - Dropdown Below Navbar */}
          <div
            className={`absolute left-0 w-full bg-white shadow-md transition-all duration-300 ease-linear overflow-hidden ${
              isNavOpen ? "max-h-64 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
            }`}
            style={{ top: "100%" }} // Ensures it starts at the navbar's bottom
          >
            {/* Close Button */}
            {/* <div
              className="flex justify-end px-4"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-6 w-6 text-gray-600 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div> */}

            {/* Mobile Links */}
            <ul className="flex flex-col items-center gap-4 text-lg font-medium px-6">
              {["Home", "About", "Service", "Gallery", "Contact"].map((item) => (
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
        </section>

        {/* Desktop Menu */}
        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-lg font-medium">
          {["Home", "About", "Service", "Gallery", "Blog", "Contact"].map((item) => (
            <li key={item}>
              <a href={`/${item.toLowerCase()}`} className="hover:text-blue-500 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
