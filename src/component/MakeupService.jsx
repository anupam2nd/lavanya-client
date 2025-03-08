import React from "react";
import { FaAirbnb, FaEye, FaCut, FaPaintBrush } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  { id: 1, icon: <FaPaintBrush size={50} />, title: "Bridal Makeup" },
  { id: 2, icon: <FaEye size={50} />, title: "Party Makeup" },
  { id: 3, icon: <FaAirbnb size={50} />, title: "Mehendi" },
  { id: 4, icon: <FaCut size={50} />, title: "Nail Art" },
];

export default function MakeupServices() {
  return (
    <section className="container py-12 px-6 text-center">
      {/* Heading */}
      <h3 className="text-pink-500 text-lg font-semibold italic">
        Where Beauty Meets Artistry
      </h3>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Our Premium Services
      </h2>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ id, icon, title }) => (
          <div
            key={id}
            className="bg-pink-50 p-6 rounded-xl shadow-md transition-transform transform hover:scale-105"
          >
            <div className="flex justify-center items-center mb-4 text-pink-500">
              {icon}
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-600 text-sm mt-2">
              Fusce cursus lectus tellus. Vivamus cursus turpis auctor semper
              lobortis.
            </p>
            <Link
              to={'/services'}
              className="text-pink-500 font-semibold mt-4 inline-block hover:underline"
            >
              View More
            </Link>
          </div>
        ))}
      </div>

      {/* "See All Services" Link */}
      <div className="mt-8">
        <a href="#" className="text-gray-700 font-semibold hover:underline">
          See All Services
        </a>
      </div>
    </section>
  );
}
