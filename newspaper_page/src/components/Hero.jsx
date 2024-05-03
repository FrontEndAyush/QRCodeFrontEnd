import React from "react";

const Hero = () => {
  return (
    <div className="lg:w-[70vw] w-full mx-auto">
      <div className="mt-4 flex gap-4">
        <div>
          <img src="/img_desktop.jpg" className="w-[50vw]" alt="" />
          <div className="flex justify-between">
            <div className="mt-4">
              <h1 className="text-5xl font-bold">The Bright</h1>
              <h1 className="text-5xl font-bold">Future Of</h1>
              <h1 className="text-5xl font-bold">Web 3.0?</h1>
            </div>

            <div className="w-[22vw]">
              <p className="w-[350px] text-left mt-4 text-[#8F8D99]">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling the promis?
              </p>
              <button className="border-2 bg-[#EF5E51] hover:bg-black hover:duration-300 hover:text-white px-7 py-2 tracking-2 mt-4 text-white">
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="bg-black w-[300px] text-white px-4">
          <h1 className="text-[rgb(237,167,79)] text-3xl font-semibold mb-4 mt-7">
            New
          </h1>
          <h1 className="font-bold mb-1 cursor-pointer hover:text-[rgb(237,167,79)]">
            Hydrogen VS Electric Cars
          </h1>
          <p className="text-[#656679] mb-8 ">
            Will hydrogen-fueled cars even catch up to EVs?
          </p>
          <hr />
          <h1 className="font-bold mb-1 mt-3 cursor-pointer  hover:text-[rgb(237,167,79)]">
            Hydrogen VS Electric Cars
          </h1>
          <p className="text-[#656679] mb-8">
            Will hydrogen-fueled cars even catch up to EVs?
          </p>
          <hr />
          <h1 className="font-bold mb-1 mt-3 cursor-pointer hover:text-[rgb(237,167,79)]">
            Hydrogen VS Electric Cars
          </h1>
          <p className="text-[#656679] cursor-pointer mb-8">
            Will hydrogen-fueled cars even catch up to EVs?
          </p>
          <hr />
        </div>
      </div>
      <div className="flex gap-16 mt-4">
        <div className="flex gap-4 mt-8">
          <img src="/1.jpg" width={100} alt="" />
          <div>
            <h1 className="text-3xl font-bold text-[#CECCD6]">01</h1>
            <h1 className="font-bold mt-1">Reviving Retro Pcs</h1>
            <p className="w-[220px]">
              What happens when old pcs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <img src="/2.jpg" width={100} alt="" />
          <div>
            <h1 className="text-3xl font-bold text-[#CECCD6]">01</h1>
            <h1 className="font-bold mt-1">Reviving Retro Pcs</h1>
            <p className="w-[220px]">
              What happens when old pcs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <img src="/3.jpg" width={100} alt="" />
          <div>
            <h1 className="text-3xl font-bold text-[#CECCD6]">01</h1>
            <h1 className="font-bold mt-1">Reviving Retro Pcs</h1>
            <p className="w-[220px]">
              What happens when old pcs are given modern upgrades?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
