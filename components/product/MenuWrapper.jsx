import React from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto px-4 sm:my-16 my-4 cursor-pointer">
      <div className="flex-col items-center mb-16 w-full">
        <Title addClass={"text-center font-dancing text-5xl font-bold"}>
          Our Menu
        </Title>
        <div className="flex flex-row flex-wrap items-center justify-center mt-10">
          <button className="px-6 py-2 bg-secondary rounded-3xl">All</button>
          <button className="px-6 py-2 rounded-3xl">Burger</button>
          <button className="px-6 py-2 rounded-3xl">Pizza</button>
          <button className="px-6 py-2 rounded-3xl">Pasta</button>
          <button className="px-6 py-2 rounded-3xl">Fries</button>
        </div>
      </div>

      <div className="mt-8 grid sm:!grid-cols-2 gap-6 px-4 md:!grid-cols-3 sm:px-40 !grid-cols-1">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
};

export default MenuWrapper;
