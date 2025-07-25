"use client";
import React from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import NewTask from "./NewTask";

const MainContent = () => {
  return (
    <>
      <div className="flex flex-col w-full h-full px-32 max-[1024px]:px-0 ">

        
          {/* Header section  */}
          <section className="min-h-[5rem]">
            <Header />
          </section>

          {/* Tasks section  */}
          <section className="flex-1 overflow-y-auto flex">
            <Tasks />
          </section>

          {/* Create New Task section  */}
          <section className="min-h-[5rem] flex">
            <NewTask />
          </section>

              

      </div>
    </>
  );
};

export default MainContent;
