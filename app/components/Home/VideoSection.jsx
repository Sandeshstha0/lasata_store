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
    <div className="relative w-full"> {/* Remove all padding and aspect ratio */}
      {/* HTML5 Video Element - Full height */}
      <video
        ref={videoRef}
        className="w-full h-[80vh] object-cover" /* Direct height control */
        autoPlay
        muted={isMuted}
        loop
        playsInline
        controls={false}
      >
        <source src="/video/sample1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-5 right-5 px-4 py-2 bg-black/70 text-white border-none rounded-md cursor-pointer text-sm font-bold z-10 hover:bg-black/80 transition-colors"
      >
        {isMuted ? "🔇 " : "🔊 "}
      </button>

      {/* Remove the gradient overlay or adjust it */}
      <div className="absolute bottom-0 left-0 w-full h-20 pointer-events-none bg-gradient-to-t from-black/10 to-transparent"></div>
    </div>
  );
}