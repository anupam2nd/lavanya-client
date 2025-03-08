import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineCurrencyRupee } from "react-icons/md";

// Import images correctly (If using from `src/images/`)
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../../public/images/card/haldi.jpg";
import image5 from "../../public/images/card/bridal.jpg";

export default function CardList() {
  const navigate = useNavigate();
  // Sample Data (Can be fetched from an API)
  const premium = [
    {
      id: 1,
      image: image2, // Correct way to use images from `src`
      title: "Party Look",
      description: "A high-top sneaker.",
      price: 2999,
    },
    {
      id: 2,
      image: image3,
      title: "Bridal Look",
      description: "A super comfortable sneaker.",
      price: 11999,
    },
  ];

  const classic = [
    {
      id: 4,
      image: image4,
      title: "Haldi/Mehendi",
      description: "A stylish sneaker.",
      price: 2000,
    },
    {
      id: 3,
      image: image5,
      title: "Bridal",
      description: "A stylish sneaker.",
      price: "9,999",
    },

  ];

  return (
    <>
      <div className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-[#b87912] from-10% via-[#f9eead] to-[#b87912]">
        <h5 className="font-semibold uppercase text-xl tracking-wider">
          premium range
        </h5>
      </div>
      <div className="container  min-h-[50vh] flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 bg-gray-100 p-4 sm:p-6 md:p-8">
        {premium.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex"
          >
            <div className="w-full bg-white rounded-lg shadow-lg flex flex-col items-center p-6">
              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full rounded-md"
              />

              {/* Title */}
              <h1 className="text-lg font-bold mt-4">{product.title}</h1>

              {/* Description */}
              {/* <p className="text-center text-sm text-gray-600 mt-2">
                {product.description}
              </p> */}

              {/* Price */}
              <p className="text-lg font-semibold mt-3 flex items-center">
                <span className="text-gray-500">Starts Form: </span>
                <span>
                  <MdOutlineCurrencyRupee />
                </span>{" "}
                {product.price}
              </p>

              {/* Purchase Button */}
              <button
                className="mt-4 bg-yellow-500 px-6 py-2 rounded-md font-bold text-gray-900 cursor-pointer trainsiton-all hover:shadow-md shadow-black/40 duration-100"
                onClick={() => navigate("/services")}
              >
                View Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* classic range */}
      <div className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-[#b87912] from-10% via-[#f9eead] to-[#b87912]">
        <h5 className="font-semibold uppercase text-xl tracking-wider">
          classic range
        </h5>
      </div>
      <div className="container  min-h-[50vh] flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 bg-gray-100 p-4 sm:p-6 md:p-8">
        {classic.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 flex"
          >
            <div className="w-full bg-white rounded-lg shadow-lg flex flex-col items-center p-6">
              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-md object-top transform -translate-y-1/7"
                />
              </div>

              {/* Title */}
              <h1 className="text-lg font-bold mt-4">{product.title}</h1>

              {/* Price */}
              <p className="text-lg font-semibold mt-3 flex items-center">
                <span className="text-gray-500">Starts Form: </span>
                <span>
                  <MdOutlineCurrencyRupee />
                </span>{" "}
                {product.price}
              </p>

              {/* Purchase Button */}
              <button
                className="mt-4 bg-yellow-500 px-6 py-2 rounded-md font-bold text-gray-900 cursor-pointer trainsiton-all hover:shadow-md shadow-black/40 duration-100"
                onClick={() => navigate("/services")}
              >
                View Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
