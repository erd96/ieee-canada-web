import Link from "next/link"
import Image from "next/image"

const MetaNavBar = () => {
  return (
    <div className="flex justify-between bg-black h-10 items-center px-32">
        <div className=" text-white">
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

{/* <Image src="/assets/images/ieee_logo.png" width={68} height={10}/ */}