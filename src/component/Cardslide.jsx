import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BGImage from "../images/image5.jpg";

const Cardslide = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024, // For md screens
        settings: {
          slidesToShow: 2, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // For sm screens
        settings: {
          slidesToShow: 1, // Show 1 slide
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      quote: "Fredia gave me the best makeover I could have imagined...",
      name: "Tammy White",
      title: "Designer at MBA",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      quote: "All worries flew away. Fredia is a very dynamic hairstylist...",
      name: "Emily Betty",
      title: "Teacher at Uni",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      quote:
        "Fredia is fantastic! From someone very particular about makeup...",
      name: "Betty Don",
      title: "Stylist at COA",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      quote: "Absolutely love Fredia's work! She is a genius with hair.",
      name: "Samantha Ray",
      title: "Makeup Artist",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      quote: "I've never felt so confident! Fredia is a true professional.",
      name: "Linda Johnson",
      title: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
  ];

  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center px-4 md:px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      {/* Title */}
      <div className="relative z-10 text-center mb-10">
        <h3 className="text-pink-400 text-lg tracking-wide">Kind words...</h3>
        <h1 className="font-bold text-5xl text-white mt-2">What Clients Say</h1>
      </div>

      {/* Slider Section */}
      <div className="relative z-10 w-full max-w-6xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="px-2 sm:px-4">
              <div
                className={`p-6 sm:p-8 rounded-2xl shadow-xl text-center flex flex-col items-center transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white border border-pink-500 scale-105 shadow-2xl"
                    : "bg-gray-100 opacity-80"
                }`}
              >
                <p className="text-gray-700 text-base sm:text-lg italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-4 sm:mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 sm:w-14 h-12 sm:h-14 rounded-full mr-2 sm:mr-3 border-2 border-pink-500"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 text-lg sm:text-xl">
                      {testimonial.name}
                    </h4>
                    <p className="text-pink-500 text-xs sm:text-sm">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Cardslide;
