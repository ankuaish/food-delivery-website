import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

const Nav = () => {
  return (
    <>
      {" "}
      <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
          {" "}
          <MdFastfood className="w-[30px] h-[30px] text-green-500" />
        </div>
        <form className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]">
          <IoSearch className="text-green-500 w-5 h-5" />
          <input
            type="text"
            className="w-full outline-none md:text-[20px]  text-[16px]"
            placeholder="Search Items..."
          />
        </form>
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative">
          {" "}
          <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
            0
          </span>
          <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
        </div>
      </div>
    </>
  );
};

export default Nav;
