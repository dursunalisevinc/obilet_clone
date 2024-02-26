import React from "react";
import { oBilet } from "../assert/image/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 bg-primary-600 lg:w-default lg:mx-auto">
      <div className="text-secondary-50 text-4xl font-semibold">obilet</div>
      <div>
        <ul className="flex m-0 text-lg text-secondary-50">
          <li className="py-1 border-r border-secondary-50">
            <div className="mx-4 cursor-pointer">
              <img
                src={oBilet.turkish}
                className="w-7 border border-secondary-100 rounded-full"
                alt="turkish flag"
              />
            </div>
          </li>
          <li className="py-1 border-r border-secondary-50">
            <span className="mx-4 cursor-pointer hover:text-primary-100">TRY</span>
          </li>
          <li className="py-1 border-r border-secondary-50">
            <span className="mx-4 cursor-pointer hover:text-primary-100">Yardım</span>
          </li>
          <li className="py-1 border-r border-secondary-50">
            <span className="mx-4 cursor-pointer hover:text-primary-100">Seyahat Sorgula</span>
          </li>
          <li className="py-1 mx-4 hover:text-primary-100 cursor-pointer">Üye Girişi</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
