import React, { useContext } from "react";
import { Context } from "../Context";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  const { cartItems } = useContext(Context);
  const NumberOfCarts = cartItems.length;
  const CartNumber = NumberOfCarts;

  return (
    <div className="footer text-black   bg-white">
      <div className="flex uppercase lg:text-3xl lg:px-5 py-6 border-boxwind border-t-2 justify-evenly">
        <div>
          <p>Facebook</p>
        </div>

        <div>
          <p>Instagram</p>
        </div>
        <div>
          <p>Linkedin</p>
        </div>
        <div>
          <p>Gmail</p>
        </div>
        <div>
          <p>twitter</p>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row relative">
        <div className=" py-9 lg:pr-[240px] bg-darkwind lg:pl-[90px]">
          <h1 className="text-[4rem] text-white text-center font-thin">
            .VLUE
          </h1>
        </div>
        <div className="rights  bg-darkwhite  py-6 w-full px-6">
          <div className="">
            <p className="text-lg my-3 lg:text-start text-center text-white font-bold  ">
              SUBSCRIBE AND GET 10% OFF!
            </p>
            <input
              className="border-boxwind2 p-2 border-2 focus:border-0 bg-transparent w-full"
              placeholder="Email "
              type="text"
            />
          </div>
          <div className="grid mt-4 lg:text-start text-center font-semibold text-lg  text-white lg:grid-cols-3 gap-x-6 gap-y-3 grid-cols-1 lg:justify-end">
            <p>payments and returns</p>
            <p>terms and condition</p>
            <p>contact us</p>
            <p>share location</p>
            <p>Help center</p>
            <p>Faqs</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
          <p className="lg:text-end text-base text-center text-boxwind mt-6">
            COPYRIGHT 2023 © VL-STUDIO. ALL RIGHTS RESERVED
          </p>
          <div className="fixed right-0  bottom-[200px]">
            <Link to="/Cart">
              <div className=" flex py-4 px-2 text-sm bg-darkwind text-white">
                <p className="lg:block hidden">Shop</p>
                <BsCart2 className="text-3xl lg:hidden block" />
                <div className="pt-[6px] lg:hidden block">{CartNumber}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
