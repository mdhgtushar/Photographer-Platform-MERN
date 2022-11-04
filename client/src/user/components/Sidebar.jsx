import React from "react";
import CategoryBox from "./CategoryBox";
import PhotographerProfileBox from "./PhotographerProfileBox";

const Sidebar = () => {
  return (
    <div className="w-96 ml-4">
      <div className="fixed w-96 h-screen overflow-scroll">
        <div className="flex items-center h-16 bg-gradient-to-r from-red-500 to-indigo-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
            alt=""
            className="h-full p-4 round"
          />
          <div>
            <p>Hobayer Golondaz Tushar</p>
            <p className="text-sm">New Mamber</p>
          </div>
        </div>
        <p className="py-7 text-gray-400">Photography Categories</p>
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <CategoryBox />
        <p className="py-7 text-gray-400">Recently Joined Photographers</p>
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
        <PhotographerProfileBox />
      </div>
    </div>
  );
};

export default Sidebar;
