import React from "react";
import cart from "../../src/assets/whitcart.png";
import hamburger from "../../src/assets/hamburger.png";
import logo from "../../src/assets/unnamed.png";

export default function Header() {
  const links = ["Products", "Services", "Inspiration", "Good Deals"];
  const community = ["Community", "Accessibility"];

  return (
    <div className="relative">
      <div className="bg-gray-200 top-0 h-[70px] absolute md:left-[300px] left-[230px] md:right-[80px] right-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 transform skew-x-[45deg] origin-bottom"></div>
        <div className="absolute top-0 bottom-0 md:right-0 right-0 w-14 h-full bg-customGreen flex justify-center flex-col items-center">
          <img src={cart} className="w-8 h-8" alt="Cart" />
          <p className="text-white">Cart</p>
        </div>
        <div className="flex md:gap-[900px]">
          <div>
            <ul className="absolute top-20 md:flex gap-5 items-center ml-5 hidden">
              <img src={hamburger} className="w-5 h-6" alt="Hamburger Menu" />
              {links.map((link, index) => (
                <li key={index} className="text-gray-700 hover:text-customGreen group-hover:after:content-'' group-hover:after:block group-hover:after:bg-customGreen group-hover:after:h-1 group-hover:after:w-full">
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="absolute top-20 lg:flex gap-5 items-center hidden">
              {community.map((link, index) => (
                <li key={index} className="text-gray-700 hover:text-customGreen group-hover:after:content-'' group-hover:after:block group-hover:after:bg-customGreen group-hover:after:h-1 group-hover:after:w-full">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute md:left-7 -top-6">
        <img src={logo} alt="Logo" className="w-40" />
      </div>
      <hr className="absolute top-28 w-full right-0 border-t border-gray-400" />
    </div>
  );
}
