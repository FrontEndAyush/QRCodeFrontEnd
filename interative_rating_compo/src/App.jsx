import { useState } from "react";

function App() {
  let [btnValue, setBtnValue] = useState(0);
  let [isTrue, setIsTrue] = useState(false);

  function onBtnClick(value) {
    setBtnValue(value);
  }
  function thankingPage() {
    if (btnValue == 0) {
      setBtnValue(5);
    }
    setIsTrue(true);
  }
  return (
    <>
      <div className="main w-full h-screen  flex justify-center items-center mr-2">
        {isTrue !== true ? (
          <>
            <div className="w-[400px] h-[400px]  bg-[#212832] rounded-2xl ">
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
                <button
                  className={`w-[50px] py-3 bg-[#262F38]  hover:text-white hover:bg-[#FC7613] transition-all duration-300  ${
                    btnValue === 1 && "transition"
                  } text-[#818A93] rounded-full`}
                  onClick={() => onBtnClick(1)}
                >
                  1
                </button>
                <button
                  className={`w-[50px] py-3 bg-[#262F38]  hover:text-white hover:bg-[#FC7613] transition-all duration-300  ${
                    btnValue === 2 && "transition"
                  } text-[#818A93] rounded-full`}
                  onClick={() => onBtnClick(2)}
                >
                  2
                </button>
                <button
                  className={`w-[50px] py-3 bg-[#262F38]  hover:text-white hover:bg-[#FC7613] transition-all duration-300  ${
                    btnValue === 3 && "transition"
                  } text-[#818A93] rounded-full`}
                  onClick={() => onBtnClick(3)}
                >
                  3
                </button>
                <button
                  className={`w-[50px] py-3 bg-[#262F38]  hover:text-white hover:bg-[#FC7613] transition-all duration-300  ${
                    btnValue === 4 && "transition"
                  } text-[#818A93] rounded-full`}
                  onClick={() => onBtnClick(4)}
                >
                  4
                </button>
                <button
                  className={`w-[50px] py-3 bg-[#262F38]  hover:text-white hover:bg-[#FC7613] transition-all duration-300  ${
                    btnValue === 5 && "transition"
                  } text-[#818A93] rounded-full`}
                  onClick={() => onBtnClick(5)}
                >
                  5
                </button>
              </div>
              <button
                className=" px-[135px] bg-[#FC7613] mx-auto  hover:text-[#262F38] hover:bg-white transition-all duration-300 mt-4 ml-8  text-white rounded-3xl py-3"
                onClick={thankingPage}
              >
                SUBMIT
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="w-[400px] h-[400px]  bg-[#212832] rounded-2xl ">
              <img
                src="illustration-thank-you.svg "
                className="bg-transparent mx-auto mt-12"
                alt=""
              />
              <p className="   text-center bg-[#272E38] mx-auto rounded-2xl mt-4 py-1 px-2 w-[220px] text-xl text-[#965E32] ">
                You selected {btnValue} out of 5
              </p>
              <h1 className="bg-transparent text-white text-center font-bold text-3xl mt-3">
                Thank You!
              </h1>
              <p className="bg-transparent text-[#4C535D] text-center w-[310px] mt-5  mx-auto">
                We appreciate you taking the time to give a rating. if you ever
                need more support, don't hesitate to get in touch!
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
