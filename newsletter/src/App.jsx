import { useState } from "react";

function App() {
  let [isTrue, setIsTrue] = useState(false);
  function changeStatusOfIsTrue(e) {
    e.preventDefault();
    setIsTrue(true);
  }

  return (
    <>
      {isTrue === true ? (
        <>
          <div className="flex justify-center h-screen items-center mt-  ">
            <div className="text-3xl lg:w-[340px] w-[320px]  pt-28 lg:pt-0  bg-white ml-6 lg:px-5 lg:h-[350px] h-[100vh] border-2 rounded-lg">
              <img
                src="/images/tick.svg"
                alt=""
                className="ml-8 mt-5 w-[50px]"
              />
              <h1 className="ml-10 text-4xl font-bold mt-4">
                Thanks for Subscribing!
              </h1>
              <p className="text-[15px] ml-10 mt-5">
                A confirmation has been sent to{" "}
                <b>akmachinetools123@gmail.com</b>.
              </p>
              <button className="border-2 text-[14px] px-16  py-1  mt-3 rounded-lg bg-[#232742] text-white ml-10">
                Dismiss Message
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main w-full h-screen  flex items-center justify-center">
            {/* div for making items center vertically and horizontally */}
            <div className="sec-main h-full  flex-col w-fit lg:w-[700px] lg:h-[500px] bg-white rounded-3xl flex  lg:flex-row justify-between ">
              {/* first for text  */}
              <div className="block lg:hidden">
                <img className="w-" src="/images/mob.svg" alt="" />
              </div>
              <div>
                <div>
                  <h1 className="mb:text-4xl text-3xl mb-3 lg:mb-3 lg:mt-14 ml-16 font-bold">
                    Stay updated!
                  </h1>
                  <p className=" mb:w-[300px] w-[100vw] mb-0 ml-10">
                    Join 60,000+ product managers receiving monthly updates on:{" "}
                  </p>
                  <img
                    src="/images/tick.svg"
                    className="relative md:top-6  top-11 md:ml-4  ml-10 md:mt-0 "
                    alt=""
                  />{" "}
                  <p className="mb-3 lg:mb-0 md:ml-11 p-5 lg:p-0 ml-12 ">
                    {" "}
                    Product discovery and building what matters
                  </p>
                  <img
                    src="/images/tick.svg"
                    className="relative md:top-6  top-11 md:ml-4  ml-10 md:mt-0"
                    alt=""
                  />{" "}
                  <p className="mb-3 lg:mb-0 md:ml-11 p-5 lg:p-0 ml-12 ">
                    {" "}
                    Measuring to ensure updates are a successl
                  </p>
                  <img
                    src="/images/tick.svg"
                    className="relative top-6 ml-4"
                    alt=""
                  />{" "}
                  <p className="ml-11 mb-10 lg:0">And much more!</p>
                </div>

                {/* div for form ----> starts  */}
                <div>
                  <form onSubmit={(e) => changeStatusOfIsTrue(e)}>
                    <label htmlFor="email" className="ml-5  font-semibold ">
                      Email address
                    </label>
                    <br />
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="border-2   mb-5 lg:mb-0 rounded-lg border-black ml-5  px-16 lg:px-20 mt-2 py-3"
                      name=""
                      id="email"

                    />
                    <br />
                    <button
                      type="submit"
                      className="ml-5 relative bottom-5 lg:bottom-0 text-white font-semibold bg-[#35384B] mt-3   px-[40px] lg:px-[55px] py-3 border-2 border-black rounded-lg"
                    >
                      Subscrbe to monthly newsletter
                    </button>
                  </form>
                </div>
                {/* div for form ----> ends  */}
              </div>

              {/* second div for img  */}
            
              <div className="px-5 py-4 hidden lg:block ">
                <img
                  src="/images/illustration.svg"
                  className="hidden lg:block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
