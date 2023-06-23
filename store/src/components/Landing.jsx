import React, { useContext } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Landing() {
  const settings = {
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="Home">
      <Slider className="bg-boxwind" {...settings}>
        <div className=" ">
          <div className="flex justify-center">
            <img className=" no-bg " src="pics/girl.png" />
            <div className="lg:pt-[289px] pt-[160px] font-extrabold">
              <div className="leading-tight discover">
                <p className="text-black  ">SEE WHATS'S NEXT </p>
                <p className=" text-black"> HOT NEXT SESON</p>
              </div>

              <p className="lg:text-sm text-xs text-gray">
                Discover the collection
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="flex justify-center">
            <img className=" no-bg " src="pics/girl3.png" />
            <div className="lg:pt-[289px]  pt-[160px]  font-extrabold">
              <div className="leading-tight discover">
                <p className="text-black  uppercase">Embrace your</p>
                <p className=" text-black uppercase">inner sport side</p>
              </div>

              <p className="lg:text-sm text-xs text-gray">
                Discover the collection
              </p>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className="flex justify-center">
            <img className=" no-bg " src="pics/girl2.png" />
            <div className="lg:pt-[289px]  pt-[160px] font-extrabold">
              <div className="leading-tight discover">
                <p className="text-black  uppercase">Casual black</p>
                <p className=" text-black uppercase">is the new black</p>
              </div>

              <p className="lg:text-sm text-xs text-gray">
                Discover the collection
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
