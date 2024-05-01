import React from "react";

const Navbar = () => {
  return (
    <nav className="w-[70vw] flex justify-between m-auto mt-8">
      <div>
        <img className="cursor-pointer" src="/logo.svg" alt="" />
      </div>

      <div>
        <ul className="cursor-pointer flex gap-10  text-[#75747A] ">
          <li className="list-none bg-white hover:text-[#DC7872]">Home</li>
          <li className="list-none hover:text-[#DC7872]">New</li>
          <li className="list-none hover:text-[#DC7872]">Popular</li>
          <li className="list-none hover:text-[#DC7872]">Trending</li>
          <li className="list-none hover:text-[#DC7872]">Categories</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
