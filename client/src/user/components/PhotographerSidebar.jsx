import React from "react";

const PhotographerSidebar = () => {
  return (
    <div className="w-96 ml-4">
      <div className="fixed w-96">
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
      </div>
    </div>
  );
};

export default PhotographerSidebar;
