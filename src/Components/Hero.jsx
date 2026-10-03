import { useEffect, useState } from "react";
import Navbar from "./Navbar";

import video1 from "../assets/vedio 1.mp4";
import video2 from "../assets/vedio 2.mp4";
import video3 from "../assets/vedio 3.mp4";

const videos = [video1, video2, video3];

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [hover, setHover] = useState(false);

  // Auto change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Next video index
  const nextVideoIndex = (currentVideo + 1) % videos.length;

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-black"
    >
      <Navbar />

      {/* Background Video */}
      <video
        key={currentVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      
      <div className="absolute inset-0 bg-black/30"></div>

     
       
{/* Hero Content */}
<div className="relative z-10 h-full flex items-center">
  <div className="max-w-7xl mx-auto w-full px-8 lg:px-16">
    <div className="max-w-xl text-white">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Reveal Your
        <br />
        Natural Glow
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-200 leading-8">
        Premium skincare crafted with natural ingredients to nourish,
        protect and enhance your skin's natural beauty.
      </p>

      <button className="mt-10 bg-pink-500 hover:bg-pink-600 transition-all duration-300 px-8 py-4 rounded-full font-semibold">
        Shop Now
      </button>
    </div>
  </div>
</div>
      {/* Preview Video */}
      <div className="absolute inset-0 z-20  flex items-center justify-center pointer-events-none">
        <div
          className="pointer-events-auto"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <video
            key={nextVideoIndex}
            autoPlay
            muted
            loop
            playsInline
            onClick={() => setCurrentVideo(nextVideoIndex)}
            className={`
              rounded-2xl
              object-cover
              shadow-2xl
              cursor-pointer
              transition-all
              duration-500
              ease-in-out

              ${
                hover
                  ? "w-105 scale-100"
                  : "w-44 scale-90 opacity-0"
              }

              hover:opacity-100
            `}
          >
            <source src={videos[nextVideoIndex]} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;