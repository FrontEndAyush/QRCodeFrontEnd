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
          <div className="flex justify-center h-screen items-center">
            <div className="text-3xl w-[350px] ml-6 px-5 h-[350px] bg-white border-2 rounded-lg">
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
            <div className="sec-main w-[700px] h-[500px] bg-white rounded-3xl flex  lg:flex-row justify-between ">
              {/* first for text  */}
              <div>
                <div>
                  <h1 className="text-4xl mb-5 mt-14 ml-16 font-bold">
                    Stay updated!
                  </h1>
                  <p className="  ml-10">
                    Join 60,000+ product managers receiving monthly updates on:{" "}
                  </p>
                  <img
                    src="/images/tick.svg"
                    className="relative top-6 ml-4"
                    alt=""
                  />{" "}
                  <p className="ml-11">
                    {" "}
                    Product discovery and building what matters
                  </p>
                  <img
                    src="/images/tick.svg"
                    className="relative top-6 ml-4"
                    alt=""
                  />{" "}
                  <p className="ml-11">
                    {" "}
                    Measuring to ensure updates are a successl
                  </p>
                  <img
                    src="/images/tick.svg"
                    className="relative top-6 ml-4"
                    alt=""
                  />{" "}
                  <p className="ml-11 mb-5">And much more!</p>
                </div>

                {/* div for form ----> starts  */}
                <div>
                  <form onSubmit={(e) => changeStatusOfIsTrue(e)}>
                    <label htmlFor="email" className="ml-5 font-semibold ">
                      Email address
                    </label>
                    <br />
                    <input
                      type="email"
                      required
                      className="border-2 rounded-lg border-black ml-5  px-20 mt-2 py-3"
                      name=""
                      id="email"
                    />
                    <br />
                    <button
                      type="submit"
                      className="ml-5 text-white font-semibold bg-[#35384B] mt-3 px-[55px] py-3 border-2 border-black rounded-lg"
                    >
                      Subscrbe to monthly newsletter
                    </button>
                  </form>
                </div>
                {/* div for form ----> ends  */}
              </div>

              {/* second div for img  */}
            
              <div className="px-5 py-4 ">
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
