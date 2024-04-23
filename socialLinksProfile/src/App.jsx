function App() {
  return (
    <>
      // div for making items in vertically and horizontally center.
      <div className="w-full h-screen flex justify-center items-center">
        <div className="main w-[400px] flex justify-center h-[550px] items-center ">
          <div className="border-white w-full h-full rounded-xl bg-[#1F1F1F]">
            {/* first div for img  */}
            <div>
              <img
                src="/images/bg.jpeg"
                className="w-[100px] rounded-full m-auto mt-4"
                alt=""
              />
            </div>

            {/* second for text and button  */}
            <div>
              <h1 className="text-white text-xl text-center mt-3 font-semibold">
                Jessica Randall
              </h1>
              <h1 className="text-[#C6EB44] text-center text-[18px] mt-1">
                London,United Kingdom
              </h1>
              <p className="text-white text-center mt-7 text-[15px]">
                "Front-end Developer and Avid Reader".
              </p>
              <button className="text-white  bg-[#333333] border-none rounded-lg border-2 border-white px-[140px] py-[6px] mt-4 text-center mx-auto block duration-500 hover:bg-[#C6EB44] hover:text-black">
                GitHub
              </button>
              <button className="text-white bg-[#333333] border-none rounded-lg border-2 border-white px-[107px] py-[6px] mt-4 text-center mx-auto block  hover:bg-[#C6EB44] hover:text-black">
                Frontend Mentor
              </button>
              <button className="text-white bg-[#333333] border-none rounded-lg border-2 border-white px-[133px] py-[6px] mt-4 text-center mx-auto block  hover:bg-[#C6EB44] hover:text-black">
                Instagram
              </button>
              <button className="text-white bg-[#333333] border-none rounded-lg border-2 border-white px-[140px] py-[6px] mt-4 text-center mx-auto block  hover:bg-[#C6EB44] hover:text-black">
                Linkdln
              </button>
              <button className="text-white bg-[#333333] border-none rounded-lg border-2 border-white px-[140px] py-[6px] mt-4 text-center mx-auto block  hover:bg-[#C6EB44] hover:text-black">
                Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
