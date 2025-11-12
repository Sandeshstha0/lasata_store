import Hero from "./components/Home/Hero";
import NewsFeed from "./components/Home/NewsFeed";
import VideoSection from "./components/Home/VideoSection";

export default function Home() {
  return (
   <>
   <div className=" ">
    <VideoSection />
    <Hero />
    <NewsFeed />
    <h1>Welcome to Lasata Store</h1>
   </div>
   </>
  );
}
