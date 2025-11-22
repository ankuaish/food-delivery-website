import React from "react";
import { useState } from "react";
import { DataContext } from "./DataContext";
import { food_items } from "../food";

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);
  let data = {
    input,
    setInput,
    cate,
    setCate,
  };
  return (
    <div>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </div>
  );
};

export default UserContext;
