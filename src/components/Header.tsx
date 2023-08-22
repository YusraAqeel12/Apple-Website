import Image from "next/image";
import logo from "../../public/next.svg"
import Link from "next/link";
import React from "react";
import { UserIcon , ShoppingBagIcon , MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
     {/** LOGO  */}
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
             alt="logo"
              src={logo}
              width={90}
              height={90}
            />
          </div>
        </Link>
      </div>

       {/** MIDDLE PART  */}
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>

      
      {/** LAST PART  */}
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>

          
          <UserIcon className="headerIcon"  />
      </div>

    </header>
  );
}

export default Header;