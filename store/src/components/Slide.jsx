import React, { useContext } from "react"
import { Context } from "../Context";
import Image from "./Image";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Slide() {
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

  


  const { allPhotos } = useContext(Context)
  const imageElements = allPhotos.map((img) => (
   
     <Image key={img.id} img={img} />
    
   
  ))

  return (
    <div className="bg-boxwind2  ">
      <div className=" lines ">
        <p>Limited edition</p>
      </div>

      <Slider {...settings} className="mt-4 lg:m-5 ">
        {imageElements}
      </Slider>
    </div>
  )

}