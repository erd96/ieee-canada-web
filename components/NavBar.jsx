"use client"
import Link from "next/link"
import Image from "next/image"
import {Logo, SearchIcon} from "public/assets/icons/icons.js"
import ieeeCA from "public/assets/images/ieee-ca.png"
import {useState } from "react"





const NavBar = () => {
    const [dropdown, setDropdown] = useState("");


    function renderDropDown(){
        switch(dropdown){
            case "about": 
                return (<>
                <h1 className="text-3xl animate-[fadeIn_0.5s_ease-in-out] my-3">About</h1> 
                <Link className="text-base my-[0.1rem] animate-[fadeIn_0.6s_ease-in-out]  flex flex-col"  href="/">IEEE Canada Policies</Link >
                <Link className="text-base my-[0.1rem] animate-[fadeIn_0.7s_ease-in-out]  flex flex-col"  href="/">Administration</Link >
                <Link className="text-base my-[0.1rem] animate-[fadeIn_0.8s_ease-in-out]  flex flex-col"  href="/">IEEE Canada Policies</Link >
                <Link className="text-base my-[0.1rem] animate-[fadeIn_0.9s_ease-in-out]  flex flex-col"  href="/">IEEE Canada Policies</Link>
                </>)
            case "activities":
                return (<>
                    <h1 className="text-3xl animate-[fadeIn_0.5s_ease-in-out] my-3">Activities</h1> 
                    <Link className="text-base my-[0.1rem] animate-[fadeIn_0.6s_ease-in-out]  flex flex-col"  href="/">IEEE Canada Policies</Link >
                    <Link className="text-base my-[0.1rem] animate-[fadeIn_0.7s_ease-in-out]  flex flex-col"  href="/">Administration</Link >
                    <Link className="text-base my-[0.1rem] animate-[fadeIn_0.8s_ease-in-out]  flex flex-col"  href="/">IEEE Canada Policies</Link >
                    <Link className="text-base my-[0.1rem] animate-[fadeIn_0.9s_ease-in-out]  flex flex-col"  href="/">IEEE Canada Policies</Link>
                    </>)
            case "volunteers":   
        }
    }

    return (
        <nav id="navbar"  onMouseLeave={() => setDropdown("")} className={` ${dropdown && 'blur_bg'}`}>
            <div className="flex justify-between  bg-slate-100 h-10 items-center px-[10vw] py-7 ">
                <Link href="/"><Image src={ieeeCA} height={40}/></Link>
                <div className="flex color-black gap-x-5">
                    <Link id="about" onMouseEnter={(e) => setDropdown(e.target.id)} href="">About</Link>
                    <Link id="activities" onMouseEnter={(e) => setDropdown(e.target.id)} href="">Activities</Link>
                    <Link id="volunteers" onMouseEnter={(e) => setDropdown(e.target.id)} href="">Volunteers</Link>
                    <Link id="womenInEngineering" href="">Women in Engineering</Link>
                    <Link href="https://site.ieee.org/r7-sac/">Student Acitivities</Link>
                    <Link href="https://r7.ieee.org/yp/">Young Professionals</Link>
                </div>
                <div id="search"><SearchIcon height="h-[50%]"/></div>
            </div>
            <div id="nav_dropdown" className={`hidden_nav flex flex-col px-[10vw]   bg-slate-100 ${dropdown && "slide"}`}>
                {dropdown && renderDropDown()}
            </div>
        </nav>
    )
}

export default NavBar