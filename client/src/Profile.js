import React from "react";
import PhotographerBox from "./user/components/PhotographerBox";
import PhotographerSidebar from "./user/components/PhotographerSidebar";
import Sidebar from "./user/components/Sidebar";
import Header from "./user/inc/Header";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <div className="flex pt-20">
          <div className="flex-1">
            <PhotographerBox />
            <PhotographerBox />
            <PhotographerBox />
          </div>

          <PhotographerSidebar />
          {/* <div>
              <h2>Intro</h2>
            </div>
            <div>
              <h2>Photos</h2>
            </div>
            <div>
              <h2>Reviews</h2>
            </div>
            <div>
              <h2>Events</h2>
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
