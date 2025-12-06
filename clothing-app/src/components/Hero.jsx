import React from "react";

const Hero = () => {
  return (
    <div
      className="
        w-full py-16 px-5 md:px-[7vw]
        bg-no-repeat bg-contain bg-right bg-[#f1f1f1]
        h-[70vh] md:h-[80vh] lg:h-[90vh]
        hero-slideshow
      "
    >
      <div className="backdrop-blur-[2px] sm:backdrop-blur-none  sm:bg-transparent p-10
       flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="max-w-[600px] space-y-6 text-center md:text-left
        lg:bg-transparent bg-white/50 p-5 lg:p-0 md:pt-20 lg:pt-20">

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 drop-shadow-lg">
            Elevate Your Style <br />
            with <span className="text-teal-600">Premium Fashion</span>
          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Discover the latest trends in men, women, and kids fashion. Shop
            high-quality clothing designed to make you feel confident, stylish,
            and unique.
          </p>

          <button className="mt-3 px-7 py-2 bg-teal-600 text-white rounded-lg
           text-lg shadow-md hover:bg-teal-700 transition-all duration-300 hover:scale-105">
            Shop Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;
