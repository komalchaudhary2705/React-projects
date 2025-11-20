import React from "react";
import discount1 from "../assets/images/discount1.jpg";
import discount2 from "../assets/images/discount2.jpg";
import DisCard from "./DisCard";

const Discount = () => {

  return (
    <>
      <section className="flex items-center justify-center my-20 px-10 sm:px-24 xl:px-48 ">
        {/* DiscountCards section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full">
          {/* DiscountCard one */}
          <DisCard imageUrl={discount1} text={"Tasty thurday"} offer={"20% 0ff"}/>
          {/* DiscountCard two */}
          <DisCard imageUrl={discount2} text={"Pizza day"} offer={"15% off"}/>
        </div>
      </section>
    </>
  );
};

export default Discount;
