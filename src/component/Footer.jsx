import { React, useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidUpArrow } from "react-icons/bi";

export default function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Address Information */}
        <div>
          <h3 className="text-pink-500 text-lg font-bold mb-2">
            Address Informations
          </h3>
          <p className="font-semibold">Sampurna Financial Services Pvt Ltd</p>
          <p>3rd Floor (North), DN-30, Sector V, Salt Lake, </p>
          <p>Kolkata-700091</p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-pink-500 text-lg font-bold mb-2">
            Contact Details
          </h3>
          <p>Email Address:</p>
          <p className="text-gray-300">myylavanya@gmail.com</p>
          <Link
            to="https:///mail.google.com/mail/?view=cm&fs=1&to=myylavanya@gmail.com"
            target="_blank"
          >
            <button className="mt-4 px-4 py-2 cursor-pointer bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition">
              Contact Us!
            </button>
          </Link>
        </div>

        {/* Phone & Working Hours */}
        <div>
          <Link to={"tel:+03335081847"}>
            <h3 className="text-pink-500 font-bold mb-2 text-2xl">
              Call Us At: 033-35081847
            </h3>
          </Link>
          <Link to={"https://wa.me/+919230992768"} target="_blank">
            <h3 className="text-pink-500 font-bold mb-2 text-2xl">
              Whatsapp: +91-9230992768
            </h3>
          </Link>
          {/* <p>Service Hours:</p>
          <p>Mon-Sat: 10.00 - 18.00</p>
          <p>Sunday: Closed</p> */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-pink-500">
        <div className="container text-center py-3 text-sm flex gap-y-2 flex-col md:flex-row justify-between items-center px-6">
          <p>
            © {new Date().getFullYear()}. SAMPURNA. All rights reserved.{" "}
            {/* <span className="underline cursor-pointer">Terms & Conditions</span> */}
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-xl">
            <Link
              to={"https://www.facebook.com/share/1A9R26xyuP/"}
              target="_blank"
            >
              <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            </Link>
            <Link to={"https://www.instagram.com/my_lavanyaa/?hl=en"}>
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showTopButton && (
        <button
          className="z-10 size-10 text-sm flex items-center justify-center fixed bottom-2 right-2 cursor-pointer bg-pink-500 text-white p-2 rounded-md shadow-lg hover:bg-pink-600 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <BiSolidUpArrow />
        </button>
      )}
    </footer>
  );
}
