import React from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Card from "../components/Card";
import { food_items } from "../food";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

import { ImCross } from "react-icons/im";
import CardOrder from "../components/CardOrder";
import { useSelector } from "react-redux";
const Home = () => {
  let { cate, setCate, input, setShowCart, showCart } = useContext(DataContext);
  const filter = (category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  };
  const items = useSelector((state) => state.cart);
  let subtotal = items.reduce((total, item) => total + item.price, 0);
  let deliveryfee = 20;
  let taxes = (subtotal * 0.5) / 100;
  let total = Math.floor(subtotal + deliveryfee + taxes);
  return (
    <>
      {" "}
      <div className="bg-slate-200 w-full min-h-screen">
        <Nav />
        {!input ? (
          <div className="flex flex-wrap justify-center items-center gap-5 w-full">
            {Categories.map((item, index) => {
              return (
                <div
                  className="w-[140px] h-[150px] bg-white flex flex-col items-center gap-5 p-5 justify-start text-[16px] font-bold text-gray-800 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
                  key={index}
                  onClick={() => filter(item.name)}
                >
                  {item.icon}
                  {item.name}
                </div>
              );
            })}
          </div>
        ) : null}

        <div className="w-full flex flex-wrap gap-7 px-5 justify-center items-center pt-8 pb-8">
          {cate.map((item, index) => (
            <Card
              key={index}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))}
        </div>
        <div
          className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration 500 flex flex-col items-center overflow-auto ${
            showCart ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <header className="w-full flex justify-between items-center">
            <span className="text-green-400 text-[18px] font-bold ">
              Order Items{" "}
            </span>
            <ImCross
              className="w-5 h-5 text-green-400  font-bold cursor-pointer hover:text-gray-600"
              onClick={() => setShowCart(false)}
            />
          </header>
          <div className="w-full mt-8 flex flex-col gap-5">
            {items.map((item, index) => (
              <CardOrder
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
                key={index}
              />
            ))}
          </div>
          <div className="w-full border-t-2  border-b-2 border-gray-500 mt-7 flex flex-col gap-2">
            <div className="w-full flex justify-between items-center mt-2">
              <span className="text-lg text-gray-600 font-semibold">
                Subtotal
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Rs. {subtotal}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-lg text-gray-600 font-semibold">
                Delivery Fee
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Rs. {deliveryfee}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center mb-2">
              <span className="text-lg text-gray-600 font-semibold">
                {" "}
                Taxes
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Rs. {taxes}/-
              </span>
            </div>
          </div>
          <div className=" w-full flex justify-between items-center pt-4 pb-6">
            <span className="text-2xl text-gray-600 font-semibold ">Total</span>
            <span className="text-green-400 font-semibold text-2xl ">
              {" "}
              Rs {total}/-
            </span>
          </div>
          <button className="w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
