import React from "react";
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";
const Card = ({ name, image, price, id, type }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-[300px] h-[370px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300 cursor-pointer">
        <div className="w-full h-[60%] overflow-hidden rounded-lg">
          <img src={image} alt="" className="object-cover" />
        </div>
        <div className="text-2xl font-semibold">{name}</div>
        <div className="w-full flex justify-between items-center">
          <div className="text-lg font-bold text-green-500">Rs. {price}</div>
          <div
            className={`flex justify-center items-center gap-2 text-lg font-semibold ${
              type === "Veg" ? "text-green-500" : "text-red-500"
            }`}
          >
            {type === "Veg" ? <LuLeafyGreen /> : <GiChickenOven />}
            <span>{type}</span>
          </div>
        </div>
        <button
          className="w-full p-3 rounded-lg bg-green-300 text-gray-800 hover:bg-green-200 transition-all font-semibold"
          onClick={() => {
            dispatch(
              AddItem({
                id: id,
                name: name,
                price: price,
                image: image,
                qty: 1,
              })
            );
            toast.success("Item Added");
          }}
        >
          Add To Dish
        </button>
      </div>
    </>
  );
};

export default Card;
