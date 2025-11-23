import React from "react";
import image1 from "../assets/image1.avif";
import { RiDeleteBinFill } from "react-icons/ri";

const CardOrder = () => {
  return (
    <>
      <div className="w-full h-[120px] mt-3 shadow-lg flex justify-between">
        <div className="w-[60%] h-full flex gap-5">
          <div className="w-[60%] h-full overflow-hidden rounded-lg">
            <img src={image1} alt="" className="object-cover" />
          </div>
          <div className="w-[40%] h-full flex flex-col gap-2 justify-around">
            <div className="text-lg text-center text-gray-600 font-semibold ">
              Pancake
            </div>
            <div className="w-[100px] h-[45px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400">
              <button className="w-[30%] h-full bg-white flex justify-center items-center font-bold text-green-400 hover:bg-gray-300">
                -
              </button>
              <span className="w-[40%] h-full  bg-slate-200 flex justify-center items-center font-bold text-green-400">
                1
              </span>
              <button className="w-[30%] h-full bg-white flex justify-center items-center font-bold text-green-400 hover:bg-gray-300">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end  pt-2  pb-2 pr-4 pl-4 ">
          <span className="text-lg text-green-400 font-semibold ">Rs. 499</span>
          <RiDeleteBinFill className="w-[25px] h-[25px] text-red-400" />
        </div>
      </div>
    </>
  );
};

export default CardOrder;
