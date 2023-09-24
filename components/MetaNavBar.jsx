import Link from "next/link"
import Image from "next/image"

const MetaNavBar = () => {
  return (
    <div className="md:flex hidden justify-between bg-black h-10 items-center md:px-[2vw] lg:px-[10vw]">
        <div className=" text-white md:text-xs lg:text-sm">
            <Link href="https://www.ieee.org/">IEEE.org |</Link>&nbsp;
            <Link href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE Xplore Digital Library |</Link>&nbsp;
            <Link href="https://standards.ieee.org/">IEEE Standards |</Link>&nbsp;
            <Link href="https://spectrum.ieee.org/">IEEE Spectrum |</Link>&nbsp;
            <Link href="https://www.ieee.org/sitemap.html">More Sites</Link>
        </div>
        <Image src="/assets/images/ieee_logo.png" width={68} height={10}/>
    </div>
  )
}

export default MetaNavBar

