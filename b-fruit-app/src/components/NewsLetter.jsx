import React from "react";

const Newsletter = () => {
  return (
    <section className="relative bg-yellow-500 text-white text-center py-16 px-4 overflow-hidden">
      {/* Background Large Text */}
      <h1 className="absolute text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[15rem] font-extrabold opacity-10 leading-none inset-0 flex justify-center items-center pointer-events-none select-none">
        Newsletter
      </h1>

      {/* Foreground Content */}
      <div className="relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          SIGN UP FOR NEWSLETTERS
        </h2>
        <p className="text-sm md:text-base mb-6">
          Get e-mail updates about our latest shop and special offers.
        </p>

        <form className="flex flex-row justify-center items-center max-w-xl mx-auto w-full">
          <input
            type="email"
            placeholder="Your email address..."
            className="flex-1 px-4 py-3 text-gray-800 focus:outline-none bg-white border-none"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition flex-shrink-0"
          >
            SUBSCRIBE!
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
