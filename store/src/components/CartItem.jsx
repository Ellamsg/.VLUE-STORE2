import React from "react";
import { Context } from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);

  return (
    <div className="flex justify-evenly  lg:flex-row flex-col   py-3 border-boxwind2 border-b-2  ">
      <div className="flex flex-col items-center lg:items-start  lg:flex-row justify-center ">
        <button
          className="pt-5 cursor-pointer  px-4 "
          onClick={() => removeFromCart(item.id)}
        >
          x
        </button>
        <Link to={`/Storedetails/${item.id}`}>
        <img className="h-[100px]  w-[100px]" src={item.image} />
        </Link>
      </div>
      <div className="lg:mr-[80px] lg:text-start text-center pt-4">
        <p>$5.99</p>
      </div>
      <div className="pt-4 text-center lg:text-start lg:w-[20%]">
        <p>{item.title}</p>
      </div>
    </div>
  );
}

export default CartItem;
