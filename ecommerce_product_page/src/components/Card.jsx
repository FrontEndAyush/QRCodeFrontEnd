import React, { useState } from "react";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
const Card = ({ cartShow, cartItemShow, setCartItemShow }) => {
  let [img, setImg] = useState("1");

  let [counter, setCounter] = useState(1);
  function changeImage(img) {
    setImg(img);
  }

  function incrementCounter() {
    setCounter((previousValue) => previousValue + 1);
  }
  function decrementCounter() {
    if (counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  }

  function isCartItemShow() {
    setCartItemShow(true);
  }
  return (
    <div className="lg:w-[68vw] py-[70px] mx-auto flex justify-between gap-0">
      {/* first  */}
      <div>
        <img
          src={`/cardImages/${img}.jpg`}
          className="w-11/12 rounded-lg"
          alt=""
        />
        <div className="flex  gap-6 mt-3">
          <img
            src="/cardImages/1th.jpg"
            className="w-[92px] cursor-pointer rounded-lg h-[92px]"
            alt=""
            onClick={() => changeImage("1")}
          />
          <img
            src="/cardImages/2th.jpg"
            className="w-[92px] cursor-pointer rounded-lg h-[92px]"
            alt=""
            onClick={() => changeImage("2")}
          />
          <img
            src="/cardImages/3th.jpg"
            className="w-[92px]  cursor-pointer rounded-lg h-[92px]"
            alt=""
            onClick={() => changeImage("3")}
          />
          <img
            src="/cardImages/4th.jpg"
            className="w-[92px]  cursor-pointer rounded-lg h-[92px]"
            alt=""
            onClick={() => changeImage("4")}
          />
        </div>
      </div>

      {/* second   */}
      <div className="py-10 ml-5">
        <h1 className="font-semibold text-[#F5873E] mb-3">SNEAKER COMPANY</h1>
        <h1 className="text-4xl font-bold mb-5 ">
          Fall Limited Addition Sneakers
        </h1>
        <p className="text-[#97989E]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durabble rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex mt-4">
          <p className="font-bold mr-4 text-2xl">$124.00</p>{" "}
          <span className="font-bold py-1 rounded px-1  text-[#ED7E26] bg-[#FFF1E3]">
            50%
          </span>
        </div>
        <p className="line-through mb-5">$250.00</p>
        <div className="flex items-center">
          <div className="flex gap-3 items-center bg-[#F7F8FD] px-3 py-2 cursor-pointer">
            <FiMinus className="text-[#FF7D1B]" onClick={decrementCounter} />
            <p>{counter}</p>
            <FaPlus className="text-[#FF7D1B]" onClick={incrementCounter} />
          </div>
          <div>
            <button
              onClick={isCartItemShow}
              className=" border-2 hover:bg-[#FFAC6A] duration-300 font-bold px-14 py-2 rounded-lg ml-5 bg-[#FF7D1B] text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
        {cartShow && (
          <>
            <div className="w-[300px] h-[220px] border  absolute top-[80px] rounded-lg bg-white right-[210px]">
              {cartItemShow === true ?  (
                <>
                  <h1 className=" p-5 font-semibold">Cart</h1>
                  <hr />
                  <div className="flex gap-5 px-2 py-2 items-center">
                    <img
                      src="/cardImages/1th.jpg"
                      className="w-[60px] rounded-xl"
                      alt=""
                    />
                    <div>
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        $125.00 x {counter} <b>${125 * counter}.00</b>
                      </p>
                    </div>
                    <MdDelete onClick={() => setCartItemShow(false)} className="text-4xl cursor-pointer" />
                  </div>
                  <button className=" border-2 hover:bg-[#FFAC6A] duration-300 font-bold px-24  py-2 rounded-lg ml-5 bg-[#FF7D1B] text-white">
                    Checkout
                  </button>
                </>
              ): (<><h1 className="text-center text-[#808187] mt-[100px] font-semibold">Your cart is empty.</h1></>)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
