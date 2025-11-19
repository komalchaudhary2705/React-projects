import React from "react";
import Button from "./Button";
import { FaCartShopping } from "react-icons/fa6";

const DisCard = ({ imageUrl, text, offer }) => {
  const disbtn = () => {
    console.log("Discount button clicked!");
  };
  return (
    <>
      <div
        className="bg-gray-900 text-white p-6
          flex items-center gap-8 rounded
          "
      >
        {/* card-left-image part */}
        <div>
          <img
            src={imageUrl}
            alt="card 1"
            className="w-48 h-48 rounded-full border-4 border-amber-200"
          />
        </div>
        {/* card right text part*/}
        <div>
          <p className="text-lg">{text}</p>
          <h1 className="text-5xl mb-3">{offer}</h1>
          <Button className="flex"
            BtnInnerText={"Order Now"}
            icon={<FaCartShopping size={20} />}
            btnFunction={disbtn}
          />
        </div>
      </div>
    </>
  );
};

export default DisCard;
