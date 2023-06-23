import React from "react"
import Header from "../components/Header"
import { Link,Outlet } from "react-router-dom"
import Footer from "../components/Footer"
export default function RootLayouts(){
    return(

<div>

    <Header/>
    <Outlet/>
    <Footer/>
</div>

    )

}