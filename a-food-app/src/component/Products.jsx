import React from "react";
import ProductCard from "./ProductCard";
import pizza1 from "../assets/images/pizza1.png";
import pizza2 from "../assets/images/pizza2.png";
import pizza3 from "../assets/images/pizza3.png";
import burger1 from "../assets/images/burger1.png";
import burger2 from "../assets/images/burger2.png";
// import burger3 from "../assets/images/burger3.png";
import pasta1 from "../assets/images/pasta1.png";
import fries1 from "../assets/images/fries1.png";
import Menu from '../component/Menu'
const Products = () => {
    const ViewBtn = () => {
        console.log("Vie Button Clicked!");
    }
  return (
    <>
    {/* category menu buttons */}
    <Menu/>
    <section className="flex items-center justify-center my-20 px-10 sm:px-24 xl:px-48">
      {/* DiscountCards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        <ProductCard
          imageUrl={pizza1}
          title={"Delicious Pizza"}
          description={
            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
          }
          price={20}
        />
        <ProductCard
          imageUrl={pizza1}
          title={"Delicious Pizza"}
          description={
            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
          }
          price={20}
        />
        <ProductCard
          imageUrl={pizza2}
          title={"Delicious Pizza"}
          description={
            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
          }
          price={20}
        />
        <ProductCard
          imageUrl={burger1}
          title={"Delicious Burger"}
          description={
            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
          }
          price={20}
        />
        <ProductCard
          imageUrl={burger2}
          title={"Delicious Burger"}
          description={
            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
          }
          price={20}
        />
        <ProductCard
          imageUrl={burger1}
          title={"Delicious Burger"}
          description={
            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
          }
          price={20}
        />
        <ProductCard
          imageUrl={pasta1}
          title={"Delicious Pasta"}
          description={
            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
          }
          price={20}
        />
        <ProductCard
          imageUrl={fries1}
          title={"Delicious Fries"}
          description={
            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
          }
          price={20}
        />
        <ProductCard
          imageUrl={pizza3}
          title={"Delicious Pizza"}
          description={
            "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque"
          }
          price={20}
        />
      </div>
      
    </section>
    </>
  );
};

export default Products;
