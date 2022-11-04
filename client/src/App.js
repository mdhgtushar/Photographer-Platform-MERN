import React from "react";
import PhotographerBox from "./user/components/PhotographerBox";
import Sidebar from "./user/components/Sidebar";
import Header from "./user/inc/Header";

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="flex pt-20">
        <div className="flex-1">
          <PhotographerBox />
        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
