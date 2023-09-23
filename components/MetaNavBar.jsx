import Link from "next/link"
import Image from "next/image"

const MetaNavBar = () => {
  return (
    <div className="flex justify-between bg-black h-10 items-center px-[10vw]">
        <div className=" text-white text-sm">
            <Link href="https://www.ieee.org/">IEEE.org &nbsp;|</Link>&nbsp;&nbsp;
            <Link href="https://ieeexplore.ieee.org/Xplore/home.jsp">IEEE Xplore Digital Library &nbsp;|</Link>&nbsp;&nbsp;
            <Link href="https://standards.ieee.org/">IEEE Standards &nbsp;|</Link>&nbsp;&nbsp;
            <Link href="https://spectrum.ieee.org/">IEEE Spectrum &nbsp;|</Link>&nbsp;&nbsp;
            <Link href="https://www.ieee.org/sitemap.html">More Sites</Link>
        </div>
        <Image src="/assets/images/ieee_logo.png" width={68} height={10}/>
    </div>
  )
}

export default MetaNavBar

