import React from "react";

export default function Card({ image, title, description, price }) {
    return (
        <div className="w-[40%] bg-white rounded-lg shadow-lg flex flex-col items-center p-6">
            {/* Shoe Image */}
            <img src={image} alt={title} className="w-full" />

            {/* Title */}
            <h1 className="text-lg font-bold mt-4">{title}</h1>

            {/* Description */}
            <p className="text-center text-sm text-gray-600 mt-2">{description}</p>

            {/* Price */}
            <p className="text-lg font-semibold mt-3">${price}</p>

            {/* Purchase Button */}
            <button className="mt-4 bg-yellow-500 px-6 py-2 rounded-md font-bold text-gray-900">
                Book Now
            </button>
        </div>
    );
}