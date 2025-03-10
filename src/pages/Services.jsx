import React from "react";

export default function Services() {
  return (
    <>
      <div className="w-full h-[500px] bg-[url(/images/bg-texture.jpeg)] bg-cover bg-no-repeat bg-top">
        <div className="container h-full">
          <div className="flex flex-col md:flex-row items-center h-full p-5 md:p-0">
            <div className="w-full md:w-1/2 h-full relative flex items-center justify-center ">
              <div className="size-80 md:size-96 lg:size-[450px] overflow-hidden border-8 border-white rounded-full">
                <img src="/images/service-banner.jpeg" className="w-full h-[550px] object-cover object-center transform -translate-y-1/7" />
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center space-y-3 ">
              <h2 className="font-sans uppercase text-2xl md:text-5xl font-semibold text-gray-600">
                services
              </h2>
              <p className="text-base md:text-xl text-center">
                Where Passion Meets Precision: Exceptional Makeup Services for Every Occasion!
              </p>
            </div>

          </div>
        </div>
      </div>
      <div className="container py-10">
        <h2 className="text-base/7 font-semibold text-primary text-gray-600">
          Experience the Best: Unparalleled Quality Services Guaranteed!
        </h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          Our Beauty Services
        </p>
      </div>
      {/* premium range */}
      <div className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-[#b87912] from-10% via-[#f9eead] to-[#b87912]">
        <h5 className="font-semibold uppercase text-xl tracking-wider">
          premium range
        </h5>
      </div>
      <div className="w-full h-fit bg-gradient-to-bl from-gray-100 to-teal-100">
        <div className="container py-5">
          <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            <div className="w-full min-w-32 h-auto shadow-lg">
              <h2 className="font-sans text-xl font-extralight tracking-wider mb-2 px-2">Bridal Makeup</h2>
              <div className="h-fit">
                <img src="/images/pre-img/bridal.jpeg" className="w-full h-full" alt="bridal-makeup" />
              </div>
            </div>
            <div className="w-full min-w-32 h-auto shadow-lg">
              <h2 className="font-sans text-xl font-extralight tracking-wider mb-2 px-2">Party Look</h2>
              <div className="h-fit">
                <img src="/images/pre-img/party.jpeg" className="w-full h-full" alt="haldi" />

              </div>
            </div>
            <div className="w-full min-w-32 h-auto shadow-lg">
              <h2 className="font-sans text-xl font-extralight tracking-wider mb-2 px-2">Haldi/ Mehendi Look</h2>
              <div className="h-fit">
                <img src="/images/pre-img/haldi.jpeg" className="w-full h-full" alt="haldi" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* classic range */}
      <div className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-[#b87912] from-10% via-[#f9eead] to-[#b87912]">
        <h5 className="font-semibold uppercase text-xl tracking-wider">
          classic range
        </h5>
      </div>
      <div className="w-full h-fit bg-gradient-to-bl from-gray-100 to-teal-100">
        <div className="container py-5">
          <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            <div className="w-full min-w-32 h-auto shadow-lg">
              <h2 className="font-sans text-xl font-extralight tracking-wider mb-2 px-2">Bridal Makeup</h2>
              <div className="h-fit">
                <img src="/images/class-range-img/bridal.jpeg" className="w-full h-full" alt="bridal-makeup" />
              </div>
            </div>
            <div className="w-full min-w-32 h-auto shadow-lg">
              <h2 className="font-sans text-xl font-extralight tracking-wider mb-2 px-2">Party Look</h2>
              <div className="h-fit">
                <img src="/images/class-range-img/party.jpeg" className="w-full h-full" alt="haldi" />

              </div>
            </div>
            <div className="w-full min-w-32 h-auto shadow-lg">
              <h2 className="font-sans text-xl font-extralight tracking-wider mb-2 px-2">Haldi/ Mehendi Look/ Vat Kapor</h2>
              <div className="h-fit">
                <img src="/images/class-range-img/haldi.jpeg" className="w-full h-full" alt="haldi" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* nail art and mehendi */}
      <div className="w-full h-12 flex items-center justify-center bg-gradient-to-r from-[#b87912] from-10% via-[#f9eead] to-[#b87912]">
        <h5 className="font-semibold uppercase text-xl tracking-wider">
          Nail Art & Mehendi
        </h5>
      </div>
      <div className="w-full h-fit bg-gradient-to-bl from-gray-100 to-teal-100">
        <div className="container py-5">
          <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            <div className="w-full min-w-32 h-auto shadow-lg">
              <h2 className="font-sans text-xl font-extralight tracking-wider mb-2 px-2">Nail Art</h2>
              <div className="h-fit">
                <img src="/images/nail-mehendi/nail.jpeg" className="w-full h-full" alt="nail-art" />
              </div>
            </div>
            <div className="w-full min-w-32 h-auto shadow-lg">
              <h2 className="font-sans text-xl font-extralight tracking-wider mb-2 px-2">Mehendi</h2>
              <div className="h-fit">
                <img src="/images/nail-mehendi/mehendi.jpeg" className="w-full h-full" alt="mehendi" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
