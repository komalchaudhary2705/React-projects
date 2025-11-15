import React from "react";
import slider1 from "../assets/images/slider1.jpg";

const Hero = () => {
  return (
    <section
      className="h-[70vh] sm:h-[80vh] lg:h-[100vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${slider1})` }}
    >
    

      {/* Text content */}
      <div className="p-14 lg:pl-20 flex items-center h-screen w-full sm-[80%]  md:w-[70%] lg:w-[65%]">
        <div>
          <p>GALLERY 2025</p>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            FAMI ORGANIC STORE
          </h1>
          <p className="w-[100%] lg:w-[80%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            earum esse illo minus molestias quae recusandae animi vel deserunt
            soluta!
          </p>
          <button className="bg-black text-white px-5 py-3 mt-4">
            SHOP NOW!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
