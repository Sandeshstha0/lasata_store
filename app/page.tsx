import Hero from "./components/Home/Hero";
import NewsFeed from "./components/Home/NewsFeed";
import Products from "./components/Home/Products";
import Testomonal from "./components/Home/Testomonal";
import VideoSection from "./components/Home/VideoSection";

export default function Home() {
  return (
   <>
   <div className=" ">
    <VideoSection />
    <Hero />
    <NewsFeed />
    <Products />
    {/* <Testomonal />   */}
    
   </div>
   </>
  );
}
