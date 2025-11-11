"use client";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react"; // icon library included with shadcn/ui

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        muted={isMuted}
      >
        <source src="/video/SajiloSnacks Tvc Ads.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      {/* <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Building Digital Experiences That Inspire
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
          We craft solutions that help businesses grow, innovate, and lead in
          today’s competitive market.
        </p>
        <button className="bg-primary hover:bg-secondary px-8 py-3 rounded-lg text-white font-semibold transition">
          Learn More
        </button>
      </div> */}

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition"
        aria-label="Toggle sound"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </section>
  );
}
