import React from "react";

import CatButton from "./CatButton";

const Menu = () => {
const btnAll = () => {
    console.log("All category button clicked!");
}
const btnBurger = () => {
    console.log("Burger category button clicked!");
}
const btnPizza = () => {
    console.log("Pizza category button clicked!");
}
const btnPasta = () => {
    console.log("Pasta category button clicked!");
}
const btnFries = () => {
    console.log("fries category button clicked!");
}
  return (
    <div className="px-10 sm:px-24 xl:px-48 ">
      <h1 className="text-4xl text-center mb-10">Our Menu</h1>
      <div className="flex items-center justify-center mb-10 gap-4">
        <CatButton btnFun={btnAll} innerText={"All"} />
        <CatButton btnFun={btnBurger} innerText={"Burger"} />
        <CatButton btnFun={btnPizza} innerText={"Pizza"} />
        <CatButton btnFun={btnPasta} innerText={"Pasta"} />
        <CatButton btnFun={btnFries} innerText={"Fries"} />
      </div>
    </div>
  );
};

export default Menu;
