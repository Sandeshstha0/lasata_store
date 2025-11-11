import Image from "next/image";
import Hero from "./components/Home/Hero";

export default function Home() {
  return (
   <>
   <div className="container mx-auto p-  ">
    <Hero />
    <h1>Welcome to Lasata Store</h1>
   </div>
   </>
  );
}
