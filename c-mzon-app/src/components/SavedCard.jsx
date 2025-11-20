import React from 'react'
import image1 from "../assets/images/laptop1.jpg";
const SavedCard = () => {
  return (
      <div
          className="bg-gray-100 m-5
        flex justify-between rounded"
        >
          <div className="flex gap-2 items-center">
            <img src={image1} alt="" className="w-[150px] h-[155px] rounded" />
            <div>
              <h2 className="font-bold"> Product title here</h2>
              <p className="text-[12px] my-1">
                Lorem ipsum dolor sit, amet consectetur elit. Quibusdam, sit?
              </p>
              <h3 className="text-sm font-bold">Location of seller</h3>
            </div>
          </div>
          <div className="pr-3 flex flex-col justify-between py-4 ">
            <h1 className="font-bold self-end">Product Price</h1>
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