import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="font-mainFont relative ">
      <div className="bg-primary-600">
        <Navbar />
      </div>
      <div className="h-13 bg-secondary-300 lg:w-default lg:mx-auto">
          TABLE
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
