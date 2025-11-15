import React from "react";
import { CiStar } from "react-icons/ci";

import fruit1 from "../assets/images/fruit1.jpg";
import fruit2 from "../assets/images/fruit2.jpg";
import fruit3 from "../assets/images/fruit3.jpg";
import fruit4 from "../assets/images/fruit4.jpg";
import fruit5 from "../assets/images/fruit5.jpg";
import fruit6 from "../assets/images/fruit6.jpg";
import fruit7 from "../assets/images/fruit7.jpg";
import vegi1 from "../assets/images/vegi1.jpg";
import vegi2 from "../assets/images/vegi2.jpg";
import vegi3 from "../assets/images/vegi3.jpg";
import vegi4 from "../assets/images/vegi4.jpg";
import vegi5 from "../assets/images/vegi5.jpg";
import SharedTitle from "./SharedTitle";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section>
      {/* heading part */}
      <SharedTitle
        Text1={"Cras ornare tristique elit."}
        Text2={" Featured Products"}
      />
      <div className="flex items-center justify-center">
        {/* all products cards */}

        <div
          className="w-[90%] lg:w-[75%]
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 lg:gap-6
        "
        >
          {/* card 1 */}
          <ProductCard
            imageSRC={fruit1}
            productTitle={"item one"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />

          {/* card 2 */}
          <ProductCard
            imageSRC={fruit2}
            productTitle={"item two"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
        
          {/* card 3 */}
           <ProductCard
            imageSRC={fruit3}
            productTitle={"item three"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
        
          {/* card 4 */}
           <ProductCard
            imageSRC={fruit4}
            productTitle={"item four"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
         
          {/* card 5 */}
           <ProductCard
            imageSRC={fruit5}
            productTitle={"item five"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
       
          {/* card 6 */}
           <ProductCard
            imageSRC={fruit2}
            productTitle={"item six"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
       
          {/* card 7 */}
           <ProductCard
            imageSRC={fruit7}
            productTitle={"item seven"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
      
          {/* card 8 */}
           <ProductCard
            imageSRC={vegi1}
            productTitle={"item eight"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
       
          {/* card 9 */}
            <ProductCard
            imageSRC={vegi2}
            productTitle={"item nine"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
        
          {/* card 10 */}
           <ProductCard
            imageSRC={vegi3}
            productTitle={"item ten"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
          {/* card 11 */}
           <ProductCard
            imageSRC={vegi4}
            productTitle={"item eleven"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
          {/* card 12 */}
          <ProductCard
            imageSRC={vegi5}
            productTitle={"item twelve"}
            starIcon={<CiStar size={20} />}
            price={70.0}
          />
          {/* ========== */}
        </div>
      </div>
    </section>
  );
};

export default Products;
