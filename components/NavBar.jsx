import Link from "next/link"
import {Logo, Search} from "public/assets/icons/icons.js"

// const NavBar = () => {
//   return (<>
//     <div className= "navbar" onMouseLeave={()=> setBox("")}>
//       <div className="inner-navbar">
//         <span className="logo-wrapper">
//         <Link href="/"><Logo/></Link>
//         </span>
//         <span className='text-wrapper'>
//         <div onMouseEnter={() => renderAboutContent()} > <Link href="/about">About</Link></div>
//         <div onMouseEnter={() => renderActivitiesContent()} > <Link href="/activities">Activities</Link></div>
//         <div onMouseEnter={() => renderVolunteersContent()} > <Link href="/volunteers">Volunteers</Link></div>
//         <div onMouseEnter={() => renderWIEContent()} > <Link href="/wie">Women In Engineering</Link></div>
//         <div> <Link href="https://site.ieee.org/r7-sac/">Student Activities</Link></div>
//         <div> <Link href="https://r7.ieee.org/yp/"> Young Professionals</Link></div>
//         </span>
//         <span className="icon-wrapper" onClick={() => renderSearchContent()}><Search/></span>
//       </div>
//       <div className={Box != ""  ?'fadeIn':'fadeOut'}><DisplayBox props={Box}/></div>
//     </div>
//     <div className={Box != ""  ?'blur-backdrop':''}></div>
//   </>
//   )
// }

// export default NavBar



const NavBar = () => {
    
  return (
    <div className="flex flex-col">
        <div className="flex justify-between bg-white h-10 items-center px-32 my-2">
            <Link href="/"> <Logo /> </Link>
            <div className="flex color-black gap-x-5">
                <Link id="about" href="">About</Link>
                <Link id="activities" href="">Activities</Link>
                <Link id="volunteers" href="">Volunteers</Link>
                <Link id="women" href="">Women in Engineering</Link>
                <Link id="student" href="https://site.ieee.org/r7-sac/">Student Acitivities</Link>
                <Link id="young" href="https://r7.ieee.org/yp/">Young Professionals</Link>
            </div>
            <div id="search" className="h-[50%]"><Search height="h-[100%] overflow-hidden"/></div>
        </div>
        <div className="flex bg-blue-900 h-[15rem]"></div>
    </div>
  )
}

export default NavBar