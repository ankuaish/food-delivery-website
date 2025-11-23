import React from "react";

import { RiDeleteBinFill } from "react-icons/ri";
import { RemoveItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { IncrementQty } from "../redux/cartSlice";
import { DecrementQty } from "../redux/cartSlice";
import { toast } from "react-toastify";

const CardOrder = ({ name, price, image, id, qty }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full h-[120px] mt-3 shadow-lg flex justify-between">
        <div className="w-[65%] h-full flex gap-3">
          <div className="w-[60%] h-full overflow-hidden rounded-lg">
            <img src={image} alt="" className="object-cover" />
          </div>
          <div className="w-[40%] h-full flex flex-col gap-2 justify-around">
            <div className="text-md  text-gray-800 font-semibold">{name}</div>
            <div className="w-[100px] h-[45px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400">
              <button
                className="w-[30%] h-full bg-white flex justify-center items-center font-bold text-green-400 hover:bg-gray-300"
                onClick={() => {
                  qty > 1 ? dispatch(DecrementQty(id)) : 1;
                }}
              >
                -
              </button>
              <span className="w-[40%] h-full  bg-slate-200 flex justify-center items-center font-bold text-green-400">
                {qty}
              </span>
              <button
                className="w-[30%] h-full bg-white flex justify-center items-center font-bold text-green-400 hover:bg-gray-300"
                onClick={() => dispatch(IncrementQty(id))}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end  pt-2  pb-2 pr-4 pl-4 ">
          <span className="text-lg text-green-400 font-semibold ">
            Rs. {price}
          </span>
          <RiDeleteBinFill
            className="w-[25px] h-[25px] text-red-400 cursor-pointer"
            onClick={() => {
              dispatch(RemoveItem(id));
              toast.error("Item Removed");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CardOrder;
