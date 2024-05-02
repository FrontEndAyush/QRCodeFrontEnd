import React, { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  let [isTrue, setIsTrue] = useState(false);
  function toggle() {
    setIsTrue(!isTrue);
  }
  return (
    <nav className="lg:w-[70vw] w-full flex justify-between m-auto mt-8 lg:px-0 px-10 ">
      <div>
        <img className="cursor-pointer" src="/logo.svg" alt="" />
      </div>

      <div className="">
        {isTrue == false ? (
          <GiHamburgerMenu
            onClick={toggle}
            className="block lg:hidden  text-4xl   "
          />
        ) : (
          <RxCross1 onClick={toggle} className="block lg:hidden  text-4xl   " />
        )}

        <div className={`hidden lg:block `}>
          <ul className="cursor-pointer flex gap-10   text-[#75747A] ">
            <li className="list-none bg-white hover:text-[#DC7872]">Home</li>
            <li className="list-none hover:text-[#DC7872]">New</li>
            <li className="list-none hover:text-[#DC7872]">Popular</li>
            <li className="list-none hover:text-[#DC7872]">Trending</li>
            <li className="list-none hover:text-[#DC7872]">Categories</li>
          </ul>
        </div>
        <div
          className={`block lg:hidden mr-[150px] w-[50vw] absolute  ${
            isTrue ? "block" : "hidden"
          } right-[-150px] bg-white h-full`}
        >
          <ul className="cursor-pointer   text-[#75747A] ">
            <li className="list-none m-5  hover:text-[rgb(220,120,114)]">
              Home{" "}
            </li>
            <li className="list-none  m-5  hover:text-[#DC7872]">New</li>
            <li className="list-none m-5 hover:text-[#DC7872]">Popular</li>
            <li className="list-none m-5 hover:text-[#DC7872]">Trending</li>
            <li className="list-none m-5 hover:text-[#DC7872]">Categories</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
