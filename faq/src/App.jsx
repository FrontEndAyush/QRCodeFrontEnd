import { useState } from "react";

function App() {
  let [showText, setShowText] = useState({
    image1: false,
    image2: false,
    image3: false,
  });
  const toggleText = (imgId) => {
    setShowText({
      ...showText,
      [imgId]: !showText[imgId],
    });
    console.log(showText);
  };
  return (
    <>
      <div className=" h-screen w-full bg-[#F9EEFF] ">
        <div className="main w-full  h-[350px] ">
          <div className="w-full h-screen flex justify-center items-center">
            <div className="w-[450px] min-h-fit p-2 rounded-lg border-2 bg-white m-3">
              <h1 className="inline-flex items-center mt-5 ml-5">
                <img src="/images/icon-star.svg" className="mr-5" alt="" />
                <span className="text-5xl font-bold">FAQs</span>
              </h1>
              <div>
                <h1 className="flex justify-center mt-4 ">
                  <span className="mr-6 font-semibold hover:text-[#AA32F3] cursor-pointer">
                    What is Frontend Mentor, and how will it help me?
                  </span>
                  <img
                    src={`/images/icon-${
                      showText.image1 ? "minus" : "plus"
                    }.svg`}
                    className="cursor-pointer"
                    alt=""
                    onClick={() => toggleText("image1")}
                  />
                </h1>
                <p
                  className={`text-left p-2  text-[#8F858F] ${
                    showText.image1 ? "block" : "hidden"
                  }`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                  debitis blanditiis fugit, odio quos animi! Doloribus quis quo
                  fugiat labore. Lorem ipsum dolor sit..
                </p>
              </div>
              <div>
                <h1 className="flex justify-center mt-4 ">
                  <span className="mr-6 font-semibold  hover:text-[#AA32F3] cursor-pointer">
                    What is Frontend Mentor, and how will it help me?
                  </span>
                  <img
                    src={`/images/icon-${
                      showText.image2 ? "minus" : "plus"
                    }.svg`}
                    className="cursor-pointer"
                    alt=""
                    onClick={() => toggleText("image2")}
                  />
                </h1>
                <p
                  className={`text-left p-2  text-[#8F858F] ${
                    showText.image2 ? "block" : "hidden"
                  }`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                  debitis blanditiis fugit, odio quos animi! Doloribus quis quo
                  fugiat labore. Lorem ipsum dolor sit..
                </p>
              </div>
              <div className="mb-10">
                <h1 className="flex justify-center mt-4 cursor-pointer">
                  <span className="mr-6 font-semibold  hover:text-[#AA32F3]">
                    What is Frontend Mentor, and how will it help me?
                  </span>
                  <img
                    src={`/images/icon-${
                      showText.image3 ? "minus" : "plus"
                    }.svg`}
                    className="cursor-pointer"
                    alt=""
                    onClick={() => toggleText("image3")}
                  />
                </h1>
                <p
                  className={`text-left p-2  text-[#8F858F] ${
                    showText.image3 ? "block" : "hidden"
                  }`}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                  debitis blanditiis fugit, odio quos animi! Doloribus quis quo
                  fugiat labore. Lorem ipsum dolor sit..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
