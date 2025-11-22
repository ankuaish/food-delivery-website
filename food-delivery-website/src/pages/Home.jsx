import React from "react";
import Nav from "../components/Nav";
import Categories from "../Categories";
import Card from "../components/Card";
import { food_items } from "../food";
import { DataContext } from "../Context/DataContext";
import { useContext } from "react";

const Home = () => {
  let { cate, setCate, input } = useContext(DataContext);
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
      </div>
    </>
  );
};

export default Home;
