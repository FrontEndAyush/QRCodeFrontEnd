import React, { useState } from "react";

const Navbar = () => {
  let [isTrue, setIsTrue] = useState(true);

  function toggle() {
    setIsTrue(!isTrue);
  }
  return (
    <nav className="lg:w-[72vw] w-screen px-8  lg:px-0 mx-auto mt-7 flex justify-between">
      <div className="flex">
        {/* first  */}

        {/* hamburger menu  */}
        <div className="lg:hidden mr-4 mt-1">
          {isTrue === true ? (
            <>
              <img src="/images/icon-menu.svg" onClick={toggle} alt="" />
            </>
          ) : (
            <>
              <img src="/images/icon-close.svg" alt="" onClick={toggle} />
            </>
          )}
        </div>
        <div>
          <img src="/images/logo.svg" alt="" />
        </div>

        <ul
          className={`absolute bg-white  pl-8 pt-5 lg:hidden left-0 w-6/12 top-14 h-full cursor-pointer ${
            isTrue !== true ? "block" : "hidden"
          }`}
        >
          <li className="">Men</li>
          <li className="mt-1">Women</li>
          <li className="mt-1">Contact</li>
          <li className="mt-1">About</li>
          <li className="mt-1">Collections</li>
        </ul>
        {/* secondg  */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 ml-9 cursor-pointer">
            <li>Men</li>
            <li>Women</li>
            <li>Contact</li>
            <li>About</li>
            <li>Collections</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <img
          src="/images/icon-cart.svg"
          className="w-[20px]  h-[20px]"
          alt=""
        />
        <img
          src="/images/avtar.png "
          className="lg:w-[40px] w-[30px] hover:border-2 hover:rounded-full cursor-pointer duration-300 hover:border-orange-400"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
