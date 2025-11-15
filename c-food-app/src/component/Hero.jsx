import React from "react";
import heroImg from "../assets/images/hero-bg.jpg";
import Button from "./Button";

const Hero = () => {
  // const heroBtn = () => {
  //   console.log("hero button clicked!");
  // };
  return (
    <div
      className="w-full h-[80vh] md:h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* header content */}
      <div
        className="px-10 sm:px-24 xl:px-48 text-white w-full md:w-[80%] lg:w-[70%] 
       xl:w-[60%] flex flex-col relative"
      >
        {/* heading + p + button */}
        <div className="flex flex-col gap-5">
          <h1 className="text-[40px]">Fast Food resturant</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            dolor quia explicabo officia sunt nihil odio expedita, voluptatem
            animi facere consequuntur illo iste, fuga rerum consequatur atque
            consectetur debitis repellat?
          </p>
          {/* <Button BtnInnerText={"Order Now"} btnFunction={heroBtn} /> */}
        </div>
        {/* circle */}
        <div className="flex items-center gap-1 absolute -bottom-30 md:-bottom-36">
          <div className="bg-white hover:bg-amber-500 w-3 h-3 rounded-full"></div>
          <div className="bg-amber-400 hover:bg-amber-500 w-5 h-5 rounded-full"></div>
          <div className="bg-white hover:bg-amber-500 w-3 h-3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
