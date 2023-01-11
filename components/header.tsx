import Link from "next/link"
import Image from "next/image"

function Header() {
   return (
      <header className="max-w-7xl mx-auto flex items-center justify-between space-x-2 font-bold px-5 md:px-10 py-5">
         <Link href="/">
            <div className="flex items-center space-x-2">
               <Image src="/siteLogo.png" width={100} height={100} alt="logo" />
            </div>
         </Link>

         <div>
            <a
               target="_blank"
               href="https://www.linkedin.com/in/alireza-babazadeh/"
               className="px-3 py-2 sm:px-5 sm:py-3 text-sm md:text-base text-white bg-[#0077b5] flex items-center rounded-full text-center"
            >
               Connect me on Linkedn
            </a>
         </div>
      </header>
   )
}

export default Header
