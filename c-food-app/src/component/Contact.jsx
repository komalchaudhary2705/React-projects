import React from "react";
import Button from "./Button";

const Contact = () => {
    const formBtn = (e) => {
        e.preventDefault();
        console.log("Form button Clicked!");
    }
  return (
    <div className="px-10 sm:px-24 xl:px-48 py-20">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-full">
          <h1 className="text-4xl text-center">Book A Table</h1>
          <form className="mt-5">
            <div>
              <input className="w-full border-2 border-gray-300 p-3 text-lg mt-3" type="text" placeholder="Enter Name" />
            </div>
            <div>
              <input className="w-full border-2 border-gray-300 p-3 text-lg mt-3" type="text" placeholder="Enter Phone" />
            </div>
            <div>
              <input className="w-full border-2 border-gray-300 p-3 text-lg mt-3" type="text" placeholder="Enter Email" />
            </div>
              <div>
              <input className="w-full border-2 border-gray-300 p-3 text-lg mt-3" type="number" placeholder="How many person" />
            </div>
              <div>
              <input className="w-full border-2 border-gray-300 p-3 text-lg mt-3" type="date" />
            </div>
            <div className="mt-5">
                <Button BtnInnerText={"Book Now"} btnFunction={formBtn}/>
            </div>
          </form>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.8403582911697!2d74.33999707544919!3d31.47576837423438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919042715f767ad%3A0xb0251034ce47145e!2sARFA%20Tower%2C%20Lahore%20%E2%80%93%20Kasur%20Rd%2C%20Nishtar%20Town%2C%20Lahore%2C%20Pakistan!5e1!3m2!1sen!2s!4v1762092355298!5m2!1sen!2s"
            className="w-full h-[400px] rounded-lg shadow-lg"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
