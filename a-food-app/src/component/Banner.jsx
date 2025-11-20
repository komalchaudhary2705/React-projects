import React from "react";
import aboutImg from "../assets/images/about-img.png";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="px-10 sm:px-24 xl:px-48 bg-gray-900 text-white w-full md:h-[90vh] flex items-center justify-center py-20">
      <div className="flex flex-col md:flex-row items-center w-full gap-10">
        <div className="w-full">
          <img src={aboutImg} alt="about" className="w-[80%]" />
        </div>
        {/* heading + p + button */}
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-[40px]">We Are Feane</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <Button
            BtnInnerText={"Read More"}
            btnFunction={() => {
              console.log("Read More Button clicked");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
