import React from "react";
import image1 from "../assets/image1.avif";

const CardOrder = () => {
  return (
    <>
      <div className="w-full h-[120px] mt-3 shadow-lg">
        <div className="w-[60%] h-full flex gap-5">
          <div className="w-[60%] h-full overflow-hidden rounded-lg">
            <img src={image1} alt="" className="object-cover" />
          </div>
          <div className="w-[40%] h-full flex flex-col gap-5">
            <div className="text-lg text-center text-gray-600 font-semibold ">
              Pancake
            </div>
            <div className="w-[100px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg">
              <button className="w-[30%] h-full bg-white flex justify-center items-center font-bold">
                -
              </button>
              <span className="w-[40%] h-full  bg-slate-300 flex justify-center items-center font-bold">
                1
              </span>
              <button className="w-[30%] h-full bg-white flex justify-center items-center font-bold">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardOrder;
