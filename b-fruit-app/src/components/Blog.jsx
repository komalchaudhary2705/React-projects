import React from "react";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import home2 from "../assets/images/home2.jpg";
import home3 from "../assets/images/home3.jpg";
// import TitleTwo from "../components/TitleTwo";
import SharedTitle from "./SharedTitle";
const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {/* card 1 */}
        <div className="bg-white overflow-hidden">
          <img src={slider1} alt="" className="w-full h-60 object-cover" />
        </div>
        {/* card 2 */}
        <div className="bg-white  overflow-hidden">
          <img src={slider2} alt="" className="w-full h-60 object-cover" />
        </div>
      </div>

      {/* Blog Heading */}
      {/* <TitleTwo /> */}
      <SharedTitle Text1={'Cras ornare tristique elit.'} Text2={"Latest from the blog"}/>
      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* card 1 */}
        <div className="bg-white overflow-hidden">
          <img src={home2} alt="" className="w-full h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-md font-semibold mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p className="text-gray-500 text-sm mb-3">February 17, 2025</p>
            <p className="text-gray-700 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis.
            </p>
            <button className="bg-[#00bcd4] text-white px-5 py-2  hover:bg-[#009cb0] transition">
              READ MORE
            </button>
          </div>
        </div>
        {/* card 2 */}
        <div className="bg-white  overflow-hidden">
          <img src={home3} alt="" className="w-full h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-md font-semibold mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <p className="text-gray-500 text-sm mb-3">February 17, 2025</p>
            <p className="text-gray-700 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis.
            </p>
            <button className="bg-[#00bcd4] text-white px-5 py-2 hover:bg-[#009cb0] transition">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
