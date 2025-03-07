import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-10 grid gap-8 md:grid-cols-3 text-center md:text-left">
        {/* Address Information */}
        <div>
          <h3 className="text-pink-500 text-lg font-bold mb-2">Address Informations</h3>
          <p className="font-semibold">Sampurna Financial Services Pvt Ltd</p>
          <p>Makeup Artist</p>
          <p>3rd Floor (North), DN-30, Sector V, Salt Lake, </p>
          <p>Kolkata-700091</p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-pink-500 text-lg font-bold mb-2">Contact Details</h3>
          <p>Email Address:</p>
          <p className="text-gray-300">contactus@sampurna.co.in</p>
          <button className="mt-4 px-4 py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition">
            Contact Us!
          </button>
        </div>

        {/* Phone & Working Hours */}
        <div>
          <h3 className="text-pink-500 font-bold mb-2 text-2xl">Customer Grievance No: (003) 3508-1849</h3>
          <h3 className="text-pink-500 font-bold mb-2 text-2xl">Whatsapp: +91 62922-76444</h3>
          <p>Working Hours:</p>
          <p>Mon-Fri: 10.00 - 18.00</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-pink-500">
        <div className="container text-center py-4 text-sm flex flex-col md:flex-row justify-between items-center px-6">
          <p>
            © {new Date().getFullYear()}. SAMPURNA. All rights reserved.{" "}
            <span className="underline cursor-pointer">Terms & Conditions</span>
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaInstagram className="cursor-pointer hover:text-gray-300" />
            <FaPinterest className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-5 right-5 bg-pink-500 text-white p-3 rounded-md shadow-lg hover:bg-pink-600 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ TOP
      </button>
    </footer>
  );
}
