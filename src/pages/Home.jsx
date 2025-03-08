import React from "react";
import CardList from "../component/CardList";
import MakeupServices from "../component/MakeupService";
import Cardslide from "../component/Cardslide";

export default function Home() {
  return (
    <>
      <div className="w-full h-full">
        <img
          src="/images/hero-banner.jpg"
          alt="hero-banner"
          className="w-full h- md:h-full object-cover md:object-contain"
        />
      </div>

      <section className="container mx-auto px-6 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center md:items-start gap-8]">
        {/* Left Side: Title & Heading */}
        <div className="md:w-1/2 text-center md:text-left ">
          <span className="text-lg font-semibold text-pink-600 italic tracking-wide">
            Lavanya
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Get to Know Us
          </h1>
        </div>

        {/* Right Side: Description with a separator */}
        <div className="md:w-1/2 text-gray-700 space-y-4 relative">
          {/* Pink Separator Line */}
          <div className="hidden md:block absolute left-0 top-3 w-12 h-0.5 bg-pink-500"></div>

          <p className="text-pink-600 font-medium md:pl-16">
            At Lavanya, we believe that beauty is not just about looking
            good—it’s about feeling confident and radiant on your special day!
            Whether it's a wedding, party, corporate event, or a casual
            makeover, we bring professional beauty services right to your
            doorstep.
          </p>
          <p className="md:pl-16">
            At Lavanya, we believe that beauty is not just about looking
            good—it’s about feeling confident and radiant on your special day!
            Whether it's a wedding, party, corporate event, or a casual
            makeover, we bring professional beauty services right to your
            doorstep. With a team of highly skilled makeup artists and beauty
            experts, we ensure that every look is crafted to perfection. From
            elegant bridal makeovers to glamorous party styles, our expertise
            covers skincare, hair styling, advanced nail art, bridal makeup,
            mehendi and more.
          </p>
        </div>
      </section>
      <CardList />
      <MakeupServices />
      <Cardslide />
    </>
  );
}
