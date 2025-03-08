import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BGImage from "/images/client-img/image5.jpg";

const Cardslide = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show 2 cards side by side
        slidesToScroll: 1,
        autoplay: true, // Disable autoplay
        centerMode: false, // No highlight effect
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768, // Mobile screens
                settings: {
                    slidesToShow: 1, // Show 1 card at a time
                },
            },
        ],
    };

    const testimonials = [
        {
            id: 1,
            quote: "Lavanya is a wonderful initiative that brings pampering right to your doorstep. I’m delighted to see them offering the best quality service in town. Congratulations and best wishes to Lavanya. May you continue to make every client’s dream day truly elegant—a perfect blend of beauty and grace.",
            name: "Piyali Das",
            title: "Actress",
            image: "./images/client-img/client1.png",
        },
        {
            id: 2,
            quote: "We can make a person feel truly beautiful with just a few touch-ups, and that is the very essence of Lavanya. Best wishes to the entire team—you are incredibly talented and doing an amazing job. May you continue to make every client’s dream day even more special with your artistry. After all, the true purpose of makeup is to enhance one’s natural beauty. Thank you, Lavanya, for taking this wonderful initiative.",
            name: "Nabanita Das",
            title: "Actress",
            image: "./images/client-img/client2.png",
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
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="px-2 sm:px-4 h-full">
                            <div className="p-6 sm:p-8 rounded-2xl shadow-xl text-center flex flex-col justify-between h-full bg-white min-h-[400px] sm:min-h-[450px]">
                                <p className="text-gray-700 text-base sm:text-lg italic flex-grow">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center mt-4 sm:mt-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 sm:w-14 h-12 sm:h-14 rounded-full mr-2 sm:mr-3  border-pink-500"
                                    />
                                    <div className="text-left">
                                        <h4 className="font-semibold text-gray-900 text-lg sm:text-xl">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-pink-500 text-xs sm:text-sm">{testimonial.title}</p>
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
