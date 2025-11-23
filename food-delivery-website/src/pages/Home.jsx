import React from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Card from "../components/Card";
import { food_items } from "../food";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

import { ImCross } from "react-icons/im";
import CardOrder from "../components/CardOrder";

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
          className={`w-full md:w-[35vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration 500 ${
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
          <CardOrder />
        </div>
      </div>
    </>
  );
};

export default Home;
