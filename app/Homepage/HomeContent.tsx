import React, { useState } from "react";
import SideBar from "./SideBar";
import MainContent from "./Homepage-Components/MainContent";
import NewTask from "./Homepage-Components/NewTask";

const HomeContent = () => {
  return (
    <>
      <section className="flex" style={{ backgroundColor: "var(--primary-silver-color)" }}>
        <div className="flex flex-row w-[100%]">

          <div
            className="flex basis-[20%] h-screen"
            style={{ backgroundColor: "var(--primary-white-color)" }}
          >
            <SideBar />
          </div>

          <div className="flex flex-1 h-screen">
            <MainContent />
          </div>

          
        </div>
      </section>
    </>
  );
};

export default HomeContent;
