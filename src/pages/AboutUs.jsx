import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <div className="w-full h-[500px] bg-[url(/images/bg-texture.jpeg)] bg-cover bg-no-repeat bg-top">
        <div className="container h-full">
          <div className="flex flex-col md:flex-row items-center h-full p-5 md:p-0">
            <div className="w-full md:w-1/2 h-full relative flex items-center justify-center ">
              <div className="size-80 md:size-96 lg:size-[450px] overflow-hidden border-8 border-white bg-white/90 rounded-full">
                <img
                  src="/images/logo.png"
                  className="w-full h-[500px] md:h-[550px] object-cover object-center transform -translate-y-1/4 md:-translate-y-1/7"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center space-y-3 ">
              <h2 className="font-sans uppercase text-2xl md:text-5xl font-semibold text-gray-600">
                about us
              </h2>
              <p className="text-sm md:text-xl text-center">
                At Lavanya, we're passionate about helping you unlock your
                natural beauty. Our journey began with a simple goal: to provide
                exceptional makeup services that make every individual feel
                confident and glamorous. With years of experience and a team of
                skilled artists, we're dedicated to delivering personalized,
                high-quality services that exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="container bg-gray-50 py-12 px-6">
        <div className=" mx-auto max-w-6xl">
          {/* Heading Section */}
          <div className="text-center md:text-left mb-12">
            <h2 className="text-pink-600 text-xl font-bold">Informations</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Contact Our Makeup Office
            </h1>
            <p className="text-gray-600 mt-4">
              Getting married or interested in getting glam? Enquire today!
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <hr className="w-16 border-pink-500 mb-4" />
              <Link to={"tel:+03335081847"} target="">
                <p className="mb-4">
                  <span className="text-pink-500 font-semibold">
                    Toll Free No:
                  </span>{" "}
                  (003) 3508 1847
                </p>
              </Link>
              <Link to={"https://wa.me/+919230992768"} target="_blank">
                <p className="mb-4">
                  <span className="text-pink-500 font-semibold">Whatsapp:</span>{" "}
                  (+91) 9230992768
                </p>
              </Link>
              <p className="mb-4">
                <span className="text-pink-500 font-semibold">Email:</span>{" "}
                <Link
                  className="text-blue-600 hover:underline"
                  to="https:///mail.google.com/mail/?view=cm&fs=1&to=myylavanya@gmail.com"
                  target="_blank"
                >
                  myylavanya@gmail.com
                </Link>
              </p>
              <p>
                <span className="text-pink-500 font-semibold">Address:</span>{" "}
                3rd Floor (North), DN-30, Sector V, Salt Lake, Kolkata-700091
              </p>
            </div>

            {/* Appointment Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Appointment
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-pink-500"
                />
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-pink-500"
                />
                <input
                  type="text"
                  placeholder="Your Number *"
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-pink-500"
                />
                <input
                  type="text"
                  placeholder="Subject *"
                  className="p-3 border border-gray-300 rounded-md w-full focus:outline-pink-500"
                />
                <textarea
                  placeholder="Message *"
                  className="p-3 border border-gray-300 rounded-md w-full md:col-span-2 h-28 focus:outline-pink-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-md transition md:col-span-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="container bg-gray-50 py-12 px-6">
        <div className=" mx-auto max-w-6xl">
          {/* Heading Section */}
          <div className="text-center md:text-left mb-6">
            <h2 className="text-pink-600 text-xl font-bold">Find Us</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Our Location on the Map
            </h1>
            <p className="text-gray-600 mt-4">
              Visit us at our office or reach out for any inquiries.
            </p>
          </div>

          {/* Map Container */}
          <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.062403879291!2d88.43051227593304!3d22.57676923281625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89de508d65b1f%3A0xa52fce0cd1245e44!2sSampurna%20Training%20and%20Entrepreneurship%20Programme!5e0!3m2!1sen!2sin!4v1741369442533!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
