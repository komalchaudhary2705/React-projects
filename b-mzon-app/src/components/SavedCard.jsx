import React from 'react'
import image1 from "../assets/images/laptop1.jpg";
const SavedCard = () => {
  return (
      <div
          className="bg-gray-100 m-5
        flex flex-col md:flex-row justify-between rounded"
        >
          <div className="flex lg:flex-row flex-col gap-2 md:items-center">
            <img src={image1} alt="" className="lg:w-[150px] lg:h-[155px] rounded" />
            <div className='py-2 px-5 lg:p-0'>
              <h2 className="font-bold"> Product title here</h2>
              <p className="text-[12px] my-1 sm:p-0 pr-4">
                Lorem ipsum dolor sit, amet consectetur elit. Quibusdam, sit?
              </p>
              <h3 className="text-sm font-bold">Location of seller</h3>
            </div>
          </div>
          <div className="pr-3 flex flex-col justify-between py-4 md:pl-0 pl-5">
            <h1 className="font-bold md:self-end md:pb-0 pb-5">Product Price</h1>
            <div className="flex gap-2">
              <button className="w-[110px] rounded cursor-pointer py-1 border border-green-700 text-sm">
                Chat
              </button>
              <button className="w-[110px] rounded cursor-pointer py-2 text-white bg-green-700 text-sm">
                Show Contact
              </button>
            </div>
          </div>
        </div>
  )
}

export default SavedCard