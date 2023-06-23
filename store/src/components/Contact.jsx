import React,{useContext} from "react"


export default function Contact(){

 

    return(



<div className=" bg-boxwind2">
    <div className="grid lg:grid-cols-2 ">
        <div className="relative">
        <img className="lg:h-[600px] lg:w-full " src="pics/girldrk.jpg"/>
        <p className=" absolute hidden lg:block font-extrabold top-[99px] text-6xl right-0">SHOP</p>
        </div>
        
        <div className="text-black flex flex-col my-4 lg:pt-[75px] lg-py-0  py-5 ">
        <p className="lg:text-6xl px-2 lg:block hidden font-extrabold">THIS LOOK</p>
        <p className="lg:text-6xl px-2 text-4xl tracking-wide lg:hidden font-bold ">SHOP THIS LOOK</p>
          <div className="mx-5 tracking-wider leading-5 lg:text-base text-xs text-gray lg:pl-6">
          <p>1.Abstract Patterned Skirt $22.00</p>
            <p>2.Baroque Embroidered Romper $17.00</p>
            <p>3.Abstract Patterned Skirt $22g</p>
            <p>4.Classic Cotton Jersey Tee $65.00</p>
            <p>5.Classic Cotton Jersey Tee $65.00</p>
          </div>
          
           
        </div>
        <img className="lg:h-[470px] lg:order-last lg:w-[900px]" src="pics/girldrk2.jpg"/>
    <div className=" lg:px-[100px] lg:pt-6 m-3  text-black">
        <div className=" border-boxwind border-2 p-4 py-5">
        <p className="py-2">NEWSLETTER</p>
         <p className=" text-gray">Vivamus sagittis lacus vel augue laoreet rutrum
             faucibus dolor auctor. Maecenas faucibus mollis interdum
             </p>
             <div className="flex my-2">
             <input placeholder="Email" className="bg-boxwind rounded-[4px] px-2 w-[100%] "/>
             <p className="p-3 bg-black text-sm text-white">GO</p>
             </div>
        </div>
         
        

    </div>
       
    </div>
   
</div>
       

    )

}