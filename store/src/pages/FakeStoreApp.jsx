import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../Context";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Storedetails from "./Storedetails";

const FakeStoreApp = ({ item }) => {
  const settings = {
    className: "center",
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);
  const [hovered, setHovered] = useState(false);
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchQuery, items]);

  function handleClick(item) {
    addToCart(item);
  }

  return (
    <div className="">
      <div
        className="flex justify-center md:top-7  md:pr-[140px] lg:pr-0 pr-0 lg:mx-[50%]
     mx-[57%] md:mx-[0%]   top-[57px] lg:top-7 right-0 left-0 items-center   z-20 fixed "
      >
        <input
          className=" text-black lg:px-7 md:px-7  px-[3px] bg-transparent rounded-[20px] border-boxwind border-2"
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className=" lines ">
        <p>Sales</p>
      </div>

      <Slider {...settings} className="mt-4 lg:m-5 relative py-6">
        {filteredItems.map((item) => (
          <div key={item.id} className=" px-3 pb-4 ">
            <Link to={`/Storedetails/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="px-2 w-full o 
             lg:hover:scale-105 transition-all object-scale-down h-[450px] lg:h-[450px] bg-white"
              />
              <div className="py-3">
                <p className="text-black">{item.title}</p>
                <p className="text-gray font-medium uppercase">${item.price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className=" cart bg-wind  text-xs lg:top-0 absolute rounded-[2px] 
                text-white px-4 py-2 "
                >
                  ADD TO CART
                </button>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FakeStoreApp;
