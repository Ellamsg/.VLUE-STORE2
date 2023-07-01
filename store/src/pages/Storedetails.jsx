import React, { useContext } from "react";
import { Context } from "../Context";
import { useParams } from "react-router-dom";

export default function Storedetails() {
  const { toggleFavorite, addToCart, cartItems, removeFromCart } =
    useContext(Context);
  const params = useParams();
  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data));
  }, [params.id]);

  function handleClick(van) {
    addToCart(van);
  }

  return (
    <div className="footer text-black   bg-white">
      {van ? (
        <div className="van-detail">
          <img src={van.image} />
          <p className="text-gray font-medium uppercase">${van.price}</p>
          <button
            onClick={() => handleClick(van)}
            className=" cart bg-wind  text-xs lg:top-0 absolute rounded-[2px] 
                text-white px-4 py-2 "
          >
            ADD TO CART
          </button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
