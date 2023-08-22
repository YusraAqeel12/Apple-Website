'use client'
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import getProduct from "../../sanity/getProduct"

export default async function Home() {
  const productfetched = await getProduct()
  console.log(getProduct())
  return (
    <main>
    <div className=" relative h-[200vh] ">
      <Header/>
      <Landing/>
    </div>
      
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
      <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
      </div>
      

      <div>
        
                
                

      </div>
      </section>
      </main>
    
  )
}

