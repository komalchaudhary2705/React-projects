import React from "react";
import bgTesti from "../assets/images/bg_testi.jpg";
import { SiComma } from "react-icons/si";
import user1 from '../assets/images/user1.png'
import user2 from '../assets/images/user2.png'
import user3 from '../assets/images/user3.png'
const Testimonials = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgTesti})` }}
      className=" bg-cover bg-center bg-no-repeat w-full h-[450px]
       flex items-center justify-center my-10
      "
    >
      <div className="w-[50%] flex items-center justify-center flex-col">
        <div className="text-amber-500 flex items-center justify-center">
          <SiComma size={40} />
          <SiComma size={40} />
        </div>
        <p className="text-white text-center text-sm my-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          voluptatem aliquid distinctio sit, voluptate magnam doloremque eius
          dolorum. Explicabo dolorem possimus distinctio magnam voluptas ratione
          quaerat! Esse quas assumenda, blanditiis unde in saepe nulla deserunt
         
        </p>
        <h1 className="text-lg text-amber-500">JOHN DOE</h1>
        <p className="text-sm text-white">CEO</p>
        <div className="flex items-center gap-10 mt-6">
         <img className="w-[60px] h-[60px] rounded-full border-2 border-amber-500 " src={user1} alt="user1" />
         <img className="w-[80px] h-[80px] rounded-full border-2 border-amber-500 " src={user2} alt="user2" />
         <img className="w-[60px] h-[60px] rounded-full border-2 border-amber-500 " src={user3} alt="user3" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
