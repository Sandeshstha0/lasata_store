import AdvertisementSection from "./components/Home/AdvertisementSection";
import Hero from "./components/Home/Hero";
import NewsFeed from "./components/Home/NewsFeed";
import Products from "./components/Home/Products";
import VideoSection from "./components/Home/VideoSection";
import WelcomePopup from "./components/Home/WelcomePopup";

export default function Home() {
  return (
    <>
      <div className=" ">
        <VideoSection />
        <WelcomePopup />
        <Hero />
        <NewsFeed />
        <AdvertisementSection />
        <Products />
        {/* <Testomonal />   */}
      </div>
    </>
  );
}
