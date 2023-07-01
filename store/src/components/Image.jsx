import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        >
          CLICK
        </i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        >
          ME PLS
        </i>
      );
    }
  }
  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <p
          className="  rounded-[2px] bg-wind text-white px-4 py-2 "
          onClick={() => removeFromCart(img.id)}
        >
          ITEM IN CART
        </p>
      );
    } else if (hovered) {
      return (
        <p
          className="bg-wind  rounded-[2px]  text-white px-4 py-2  "
          onClick={() => addToCart(img)}
        >
          ADD TO CART
        </p>
      );
    }
  }

  return (
    <div>
      <div
        className={`${className}  py-4 `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="mr-3 ml-3 relative  ">
          <img
            src={img.image}
            className="px-2 w-full o  lg:hover:scale-105 transition-all object-scale-down h-[450px] lg:h-[450px] bg-white "
          />
          <div className="py-3">
            <p className="text-black">{img.title}</p>
            <p className="text-gray font-medium uppercase">${img.price}</p>
            
          </div>

          <div className="absolute top-2 lg:top-0">{cartIcon()}</div>
        </div>
      </div>
    </div>
  );
}
Image.PropTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
export default Image;
