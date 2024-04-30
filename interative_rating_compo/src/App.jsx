function App() {
  return (
    <>
      <div className="main w-full h-screen flex justify-center items-center">
        <div className="w-[400px] h-[400px]  bg-[#212832] rounded-2xl">
          <img
            src="/icon-star.svg"
            className=" mt-8 bg-[#262F38] rounded-full p-5 ml-8"
            alt=""
          />
          <h1 className="bg-transparent text-white text-3xl ml-8 mt-6 font-semibold ">
            How did we do?{" "}
          </h1>
          <p className="bg-transparent ml-8 text-[#656C75] mt-4">
            Please let us know how did we with your support request. All
            feedback is appreciated to help us to improve our offering!
          </p>
          <div className="ml-8  bg-transparent flex  gap-5 mt-5">
            <button className="w-[50px] py-3 bg-[#262F38] hover:text-white hover:bg-[#FC7613] transition-all duration-300  text-[#818A93] rounded-full">
              1
            </button>
            <button className="w-[50px] py-3 bg-[#262F38]  hover:text-white hover:bg-[#FC7613] transition-all duration-300 text-[#818A93] rounded-full">
              2
            </button>
            <button className="w-[50px] py-3 bg-[#262F38]  hover:text-white hover:bg-[#FC7613] transition-all duration-300 text-[#818A93]  rounded-full">
              {" "}
              3
            </button>
            <button className="w-[50px] py-3 bg-[#262F38]  hover:text-white hover:bg-[#FC7613] transition-all duration-300 text-[#818A93]  rounded-full">
              4
            </button>
            <button className="w-[50px] py-3 bg-[#262F38]  hover:text-white hover:bg-[#FC7613] transition-all duration-300 text-[#818A93]  rounded-full">
              5
            </button>
          </div>
          <button className="w-[22vw] bg-[#FC7613]  hover:text-[#262F38] hover:bg-white transition-all duration-300 mt-4 ml-8  text-white rounded-3xl py-3">
            SUBMIT
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
