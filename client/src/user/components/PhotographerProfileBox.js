import React from "react";
import { Link } from "react-router-dom";

const PhotographerProfileBox = () => {
  return (
    <Link to="/profile" className="flex items-center h-16 radius-50">
      <img
        src="http://bdphotographers.com/upload/post-image/153759713331454107_1851964244873626_6184246233243058176_o.jpg"
        alt=""
        className="h-full py-4 pr-4 "
      />
      <div>
        <p>Hobayer Golondaz Tushar</p>
        <p className="text-sm">Weeding Photographer</p>
      </div>
    </Link>
  );
};

export default PhotographerProfileBox;
