import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="flex flex-col bg-black h-auto px-32 md:px-[2vw] lg:px-[10vw]">
        <div className=" text-white md:text-xs lg:text-sm my-4">
            <Link href="/">Home &nbsp;|</Link>&nbsp;&nbsp;
            <Link href="https://www.ieee.org/sitemap.html">Sitemap |</Link>&nbsp;
            <Link href="https://standards.ieee.org/">Contact & Support |</Link>&nbsp;
            <Link href="https://spectrum.ieee.org/">Accessibility |</Link>&nbsp;
            <Link href="https://spectrum.ieee.org/">Nondiscrimination Policy |</Link>&nbsp;
            <Link href="https://spectrum.ieee.org/">IEEE Ethics Reporting |</Link>&nbsp;
            <Link href="https://spectrum.ieee.org/">IEEE Privacy Policy |</Link>&nbsp;
            <Link href="https://spectrum.ieee.org/">Terms |</Link>&nbsp;
            <Link href="https://www.ieee.org/sitemap.html">Feedback</Link>
        </div>
        <div className=" text-white md:text-xs lg:text-sm mb-4 ">
        © Copyright 2023 IEEE - All rights reserved. A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </div>
    </div>
  )
}

export default Footer