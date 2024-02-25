import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="font-mainFont relative ">
      <div className="bg-primary-500">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
