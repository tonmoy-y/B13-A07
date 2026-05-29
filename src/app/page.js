import Footer from "@/components/Footer";
import Friends from "@/components/Friends";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";



export default function Home() {
  return (
    <div className=" ">
      <main className="container mx-auto bg-base-200">
       <Hero> </Hero>
       <Friends></Friends>

      </main>
    </div>
  );
}
