import React from "react";
import menu3 from "../assets/images/menu3.jpg";
import { CiStar } from "react-icons/ci";

import fruit1 from "../assets/images/fruit1.jpg";
import fruit2 from "../assets/images/fruit2.jpg";
import fruit3 from "../assets/images/fruit3.jpg";

import vegi1 from "../assets/images/vegi1.jpg";
import vegi2 from "../assets/images/vegi2.jpg";
import vegi3 from "../assets/images/vegi3.jpg";
import FeaturedCard from "./FeaturedCard";

const FeaturedProducts = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="w-[90%] lg:w-[75%] grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* section one - image */}
        <div className="w-full flex items-center justify-center">
          <img
            src={menu3}
            className="h-[550px] lg:h-[500px] lg:w-full"
            alt=""
          />
        </div>

        {/* section two - best seller & top rated */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-10 md:pl-10">
          {/* best seller */}
          <div className="w-full">
            <h1 className="text-lg md:text-2xl font-semibold mb-6">BEST SELLER</h1>
            <div className="flex flex-col gap-6">
              {/* card 1 */}
              <FeaturedCard image={fruit1} proTitle={"item one"} starIcon={ <CiStar size={20} />} price={70}/>
           

              {/* card 2 */}
              <FeaturedCard image={fruit2} proTitle={"item two"} starIcon={ <CiStar size={20} />} price={70}/>

             
              {/* card 3 */}
              <FeaturedCard image={fruit3} proTitle={"item three"} starIcon={ <CiStar size={20} />} price={70}/>

            </div>
          </div>

          {/* top rated */}
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-6">TOP RATED</h1>

            <div className="flex flex-col gap-6">
              {/* card 1 */}
            <FeaturedCard image={vegi1} proTitle={"item four"} starIcon={ <CiStar size={20} />} price={70}/>


              {/* card 2 */}
           <FeaturedCard image={vegi2} proTitle={"item five"} starIcon={ <CiStar size={20} />} price={70}/>


              {/* card 3 */}
            <FeaturedCard image={vegi3} proTitle={"item six"} starIcon={ <CiStar size={20} />} price={70}/>

            </div>
          </div>
        </div>
        {/* end section two */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
