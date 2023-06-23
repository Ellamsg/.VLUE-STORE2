import React, {useContext} from "react"
import {Context} from "../Context"
import CartItem from "../components/CartItem"
import { useState } from "react"

function Cart(item) {
    const {cartItems} = useContext(Context)
    const {emptyCart} = useContext(Context)
    const [quantity ,setquantity] =React.useState(1)

    const [buttonText, setButtonText] = useState("Place Order")


    function placeOrder() {
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order placed!")
            setButtonText("Place Order")
            emptyCart()
        }, 3000)
    }


    const costotal = cartItems.reduce((total, item) => total + item.price, 0);

    const cartItemElements = cartItems.map(item => (
     <div>
      
         <CartItem key={item.id} item={item} />
     </div>
      
    ))
    
    return (
        <main className="cart-page text-black lg:px-[90px] py-5">
           
            <div>
                <p className="lg:text-7xl font-bold text-5xl text-center">Cart</p>
            </div>
           
            {cartItemElements}
            <div className=" flex py-4  px-5 lg:justify-center justify-start ">
                <div className="py-4 w-[50%]">
                <p className="text-2xl crt">cart total</p>
                <div className="flex py-3 crt">
                <p className="total-cost">Total</p>
                <p> $  {costotal * cartItems.length }</p>
                </div>
                <div className="flex py-3  crt">
                <p className="total-cost ">SubTotal</p>
                <p className="font-bold">$  {costotal * cartItems.length }</p>
                </div>
            
            <div className="order-button">
                <button onClick={placeOrder} className="bg-wind text-white px-4 py-2" >{buttonText}</button>
               
           
           
            </div>
                </div>

         
            </div>
           
        
          
        </main>
    )
}

export default Cart