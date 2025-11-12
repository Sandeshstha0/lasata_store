"use client";
import { useRef, useState } from "react";

export default function VideoPlayer() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full h-full mt-2">
      {/* Fixed height container - adjust these values as needed */}
      <div className="relative w-full h-[200px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[550px] blur sm rounded-lg overflow-hidden">
        {/* Video that fills the container */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          controls={false}
        >
          <source src="/video/sample1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

       

        {/* Responsive Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 pointer-events-none bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
      </div>
       {/* Smart Responsive Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8
                     w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                     bg-black/70 text-white border-none rounded-full cursor-pointer 
                     flex items-center justify-center z-10 hover:bg-black/80 
                     transition-all duration-200 hover:scale-110 text-base sm:text-lg md:text-xl lg:text-2xl"
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
    </div>
  );
}