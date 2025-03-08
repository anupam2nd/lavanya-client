import { useState, useEffect } from "react";
import logoMain from "/images/navimg.png";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const navigateMenu = ["Home", "About", "Service", "Gallery", "Contact"]

  const location = useLocation();
  const navigateMenu = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Services",
      link: "services",
    },
    {
      name: "About Us",
      link: "about-us",
    },
  ];

  useEffect(() => {
    setIsNavOpen(false);
  },[location]);

  return (
    <div className="relative w-full">
      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 bg-[url(./logo/navbarbg.jpg)] bg-cover bg-center opacity-30"></div>

      {/* Navbar */}
      <div className="relative z-10 top-0 left-0 w-full bg-white/10 backdrop-blur-lg shadow-md border-b border-gray-300">
        <div className="container flex items-center justify-between mx-auto px-4 lg:px-10 py-2 md:py-4">
          {/* Logo */}
          <Link to="/">
            <img src={logoMain} alt="Logo" className="h-10 md:h-12" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-between h-5 w-8 relative z-50"
            onClick={() => setIsNavOpen((prev) => !prev)}
            aria-label="Toggle Navigation"
          >
            <span
              className={`block h-[1px] md:h-0.5 w-8 bg-gray-600 transition-all duration-300 ${
                isNavOpen ? "rotate-45 translate-y-2.5 bg-black" : ""
              }`}
            />
            <span
              className={`block h-[1px] md:h-0.5 w-8 bg-gray-600 transition-all duration-300 ${
                isNavOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1px] md:h-0.5 w-8 bg-gray-600 transition-all duration-300 ${
                isNavOpen ? "-rotate-45 -translate-y-2.5 bg-black" : ""
              }`}
            />
          </button>

          {/* Mobile Navigation */}
          <div
            className={`absolute left-0 w-full bg-white/90 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
              isNavOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
            }`}
            style={{ top: "100%" }}
          >
            <ul className="flex flex-col items-center gap-4 text-lg font-medium px-6">
              {navigateMenu.map((item, index) => (
                <NavLink to={item.link} key={index}>
                  <li>{item.name}</li>
                </NavLink>
              ))}
            </ul>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            {navigateMenu.map((item, index) => (
              <NavLink to={item.link} key={index}>
                <li className="font-semibold tracking-wider text-gray-700">{item.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
