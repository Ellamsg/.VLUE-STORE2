import React,{useContext} from "react"

import Slide from "../components/Slide"
import Landing from "../components/Landing"
import Contact from "../components/Contact"
import FakeStoreApp from "./FakeStoreApp"
export default function Home(){

 

    return(



<div className="Home bg-boxwind2">
    <Landing/>
    <FakeStoreApp/>
 
 <Contact/>
 <Slide/>

</div>
       

    )

}