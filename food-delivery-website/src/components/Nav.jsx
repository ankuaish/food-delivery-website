import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";

import { DataContext } from "../Context/DataContext";

import { useContext } from "react";
import { useEffect } from "react";
import { food_items } from "../food";

const Nav = () => {
  let { input, setInput, setCate, setShowCart } = useContext(DataContext);
  useEffect(() => {
    let newlist = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCate(newlist);
  }, [input]);
  return (
    <>
      <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
          <MdFastfood className="w-[30px] h-[30px] text-green-500" />
        </div>
        <form
          className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]"
          onSubmit={(e) => e.preventDefault()}
        >
          <IoSearch className="text-green-500 w-5 h-5" />
          <input
            type="text"
            className="w-full outline-none md:text-[20px]  text-[16px]"
            placeholder="Search Items..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
        <div
          className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer"
          onClick={() => setShowCart(true)}
        >
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
