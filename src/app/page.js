import Footer from "@/components/Footer";
import Friends from "@/components/Friends";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Suspense } from "react";



export default function Home() {
  return (
    <div className=" ">
      <main className="container mx-auto bg-base-200">
        <Navbar></Navbar>
       <Hero> </Hero>
       <Suspense fallback={<div className="flex justify-center items-center">
      <span className="loading loading-bars loading-xl"></span>
    </div>}>

       <Friends></Friends>
       </Suspense>
<Footer> </Footer>
      </main>
    </div>
  );
}
