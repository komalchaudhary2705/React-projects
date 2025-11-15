import React from "react";
import { LuCarrot } from "react-icons/lu";
import { CiApple } from "react-icons/ci";
import { PiOrangeSliceLight } from "react-icons/pi";
import { LiaLemon } from "react-icons/lia";

const Features = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* card section */}
          {/* card 1 */}
          <div className="p-6 flex flex-col items-center">
            <p className="bg-[#13b8ce] hover:bg-amber-500 w-16 h-16 rounded-full p-1 mb-4 transition-all duration-300 ease-in-out">
              <LuCarrot className=" text-5xl text-white mx-auto mb-4" />
            </p>
            <h2 className="text-lg font-semibold mb-2">FREE SHIPPING</h2>
            <p className="text-gray-600 text-sm">
              Get free delivery on all orders over $50.
            </p>
          </div>
          {/* card 2 */}
          <div className="p-6 flex flex-col items-center">
            <p className="bg-[#13b8ce] hover:bg-amber-500 w-16 h-16 rounded-full p-1 mb-4 transition-all duration-300 ease-in-out">
              <CiApple className=" text-5xl text-white mx-auto mb-4" />
            </p>
            <h2 className="text-lg font-semibold mb-2">FREE RETURN</h2>
            <p className="text-gray-600 text-sm">
              Not satisfied? Return within 7 days at no cost.
            </p>
          </div>
          {/* card 3 */}
          <div className="p-6 flex flex-col items-center">
            <p className="bg-[#13b8ce] hover:bg-amber-500 w-16 h-16 rounded-full p-1 mb-4 transition-all duration-300 ease-in-out">
              <PiOrangeSliceLight className=" text-5xl text-white mx-auto mb-4" />
            </p>
            <h2 className="text-lg font-semibold mb-2">SUPPORT 24/7</h2>
            <p className="text-gray-600 text-sm">
              Our support team is available round-the-clock.
            </p>
          </div>
          {/* card 4 */}
          <div className="p-6 flex flex-col items-center">
            <p className="bg-[#13b8ce] hover:bg-amber-500 w-16 h-16 rounded-full p-1 mb-4 transition-all duration-300 ease-in-out">
              <LiaLemon className=" text-5xl text-white mx-auto mb-4" />
            </p>
            <h2 className="text-lg font-semibold mb-2">FREE EXCHANGE</h2>
            <p className="text-gray-600 text-sm">
              Exchange any product easily with no extra fees.
            </p>
          </div>
          {/* card section */}
        </div>
      </div>
    </section>
  );
};

export default Features;
