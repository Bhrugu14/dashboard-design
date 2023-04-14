import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { Sidebar } from "../components/sidebar";

const MainContainer = () => {
  return (
    <div className="h-screen max-w-screen w-screen flex flex-1 flex-col bg-primaryBg transition-all">
      <Header />
      <div className="flex flex-1 py-6 px-6 mt-16 overflow-hidden">
        <Sidebar />
        <div className="overflow-auto flex ml-6 w-full rounded-lg min-h-full bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
