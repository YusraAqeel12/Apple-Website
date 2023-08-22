import Image from "next/image";
import React from "react";
import Button from "../../src/ui/Button";
import iphone from "../../public/iphone.webp"
function Landing() {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8 bg-[#E7ECEE]">
      
      {/** FIRST PART  */}
      <div className="space-y-8">
        
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="link">Learn More</a>
        </div>
    
      </div>


      {/** SECOND PART  */}
      <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
        <div className="  aspect-video">
        <Image alt='phone' src={iphone }  className=" w-full h-fit" />
        </div>
      </div>
    </section>
  );
}

export default Landing;