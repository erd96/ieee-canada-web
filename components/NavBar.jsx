"use client"
import Link from "next/link"
import {Logo, SearchIcon} from "public/assets/icons/icons.js"
import { useState } from "react"





const NavBar = () => {
    const [dropdown, setDropdown] = useState("");

    function renderDropDown(){
        switch(dropdown){
            case "about": 
                return (<>
                <h1 className=" animate-[fadeIn_0.5s_ease-in-out] mt-6">About</h1> 
                <Link className=" animate-[fadeIn_0.6s_ease-in-out]  flex flex-col"  href="/">IEEE Canada Policies</Link >
                <Link className=" animate-[fadeIn_0.7s_ease-in-out]  flex flex-col"  href="/">Administration</Link >
                <Link className=" animate-[fadeIn_0.8s_ease-in-out]  flex flex-col"  href="/">IEEE Canada Policies</Link >
                <Link className=" animate-[fadeIn_0.9s_ease-in-out]  flex flex-col"  href="/">IEEE Canada Policies</Link>
                </>)
            case "activities":
            case "volunteers":   
        }
    }

    return (
        <div onMouseLeave={() => setDropdown("")} className="flex flex-col">
            <div className="flex justify-between bg-white h-10 items-center px-32 py-7">
                <Link href="/"> <Logo /></Link>
                <div className="flex color-black gap-x-5">
                    <Link id="about" onMouseEnter={(e) => setDropdown(e.target.id)} href="">About</Link>
                    <Link id="activities" onMouseEnter={(e) => setDropdown(e.target.id)} href="">Activities</Link>
                    <Link id="volunteers" onMouseEnter={(e) => setDropdown(e.target.id)} href="">Volunteers</Link>
                    <Link id="womenInEngineering" href="">Women in Engineering</Link>
                    <Link href="https://site.ieee.org/r7-sac/">Student Acitivities</Link>
                    <Link href="https://r7.ieee.org/yp/">Young Professionals</Link>
                </div>
                <div id="search"><SearchIcon height="h-[100%]"/></div>
            </div>
            {/* <NavDropDown selection={dropdown}/> */}
            <div id="nav_dropdown" className={`hidden_nav flex flex-col px-32  bg-blue-900 ${dropdown && "slide"}`}>
                {dropdown && renderDropDown()}
            </div>
        </div>
    )
}

export default NavBar