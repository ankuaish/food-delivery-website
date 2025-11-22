import React from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Card from "../components/Card";
import { food_items } from "../food";
const Home = () => {
  return (
    <>
      {" "}
      <div className="bg-slate-200 w-full min-h-screen">
        <Nav />
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {Categories.map((item) => {
            return (
              <div className="w-[140px] h-[150px] bg-white flex flex-col items-center gap-5 p-5 justify-start text-[16px] font-bold text-gray-800 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200">
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
        <div>
          {food_items.map((item) => (
            <Card
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
