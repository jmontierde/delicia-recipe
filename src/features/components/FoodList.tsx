import React from "react";

const FoodList = () => {
  return (
    <div className="overflow-hidden p-6  bg-darkGreen">
      <h2 className="text-center text-4xl font-bold text-[#1A220F] pb-6">
        Food
      </h2>
      <div className="grid grid-cols-3 gap-6 w-5/6 mx-auto place-items-center">
        <img
          src="/src/assets/salad.png"
          alt=""
          className="w-full bg-[#FEFAE0] rounded-md p-6 "
        />
        s
        <img
          src="/src/assets/salad.png"
          alt=""
          className="w-full bg-[#FEFAE0] rounded-md p-6"
        />
        <img
          src="/src/assets/salad.png"
          alt=""
          className="w-full bg-[#FEFAE0] rounded-md p-6"
        />
        <img
          src="/src/assets/salad.png"
          alt=""
          className="w-full bg-[#FEFAE0] rounded-md p-6"
        />
      </div>
    </div>
  );
};

export default FoodList;
