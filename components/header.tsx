import Link from "next/link"
import Image from "next/image"

function Header() {
   return (
      <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 border-b-2 border-[#768791]">
         <div className="flex items-center space-x-2">
            <Link href="/" />
            <Image src="/siteLogo.png" width={100} height={100} alt="logo" />
         </div>

         <div>
            <Link
               href="https://www.linkedin.com/in/alireza-babazadeh/"
               className="px-3 py-2 sm:px-5 sm:py-3 text-sm md:text-base text-white bg-[#0077b5] flex items-center rounded-full text-center"
            >Connect me on Linkedn</Link>
         </div>
      </header>
   )
}

export default Header
