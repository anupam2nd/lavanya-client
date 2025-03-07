import React from "react";
import CardList from "../components/CardList";
import MakeupServices from "../components/MakeupServices";

export default function Home() {
  return (
    <>
      <div className="w-full h-[600px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div className="bg-[url(./logo/navbarbg.jpg)] w-full h-full bg-no-repeat bg-contain bg-top"></div>
      </div>
      
      <section className="container mx-auto px-6 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center md:items-start gap-8">
      {/* Left Side: Title & Heading */}
      <div className="md:w-1/2 text-center md:text-left">
        <span className="text-lg font-semibold text-pink-600 italic tracking-wide">
          Our Makeup Services
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          We Provide Quality Services
        </h1>
      </div>

      {/* Right Side: Description with a separator */}
      <div className="md:w-1/2 text-gray-700 space-y-4 relative">
        {/* Pink Separator Line */}
        <div className="hidden md:block absolute left-0 top-3 w-12 h-0.5 bg-pink-500"></div>

        <p className="text-pink-600 font-medium md:pl-16">
          Our services are summarized as follows. Makeup fusce ornare ut tortor ac hendrerit.
          Suspendisse sed sem tincidunt dui congue fermentum.
        </p>
        <p className="md:pl-16">
          Quisque eu nunc bibendum in finibus elit eget the sollicitudin elit.
          Phasellus rutrum in lacus ut euismod. Vestibulum eleifend tortor orci,
          eu ornare tortor semper at. Duis scelerisque nibh se drana moss puse.
        </p>
      </div>
    </section>
    <CardList/>
    <MakeupServices/>
    </>
  );
}