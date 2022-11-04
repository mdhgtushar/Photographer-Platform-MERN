import React from "react";
import { Link } from "react-router-dom";

const CategoryBox = () => {
  return (
    <Link to="/">
      <div className="flex items-center h-9 my-4 border border-gray-200 p-2 cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png"
          alt=""
          className="h-full py-1 pr-2 round"
        />
        <div>
          <p>Hobayer Golondaz Tusharr</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryBox;
