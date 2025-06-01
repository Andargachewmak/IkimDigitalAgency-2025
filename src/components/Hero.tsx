import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ikimVideo from "../assets/Image/ikim.mp4";

const Hero: React.FC = () => {
  const SCROLL_STEP = 100;
  const SCROLL_INTERVAL = 50;

  // To hold interval and scroll listener refs for cleanup
  const scrollIntervalRef = useRef<number | null>(null);
  const userScrollDetected = useRef(false);

  const stopAutoScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
    window.removeEventListener("wheel", onUserScroll);
    window.removeEventListener("touchstart", onUserScroll);
  };

  const onUserScroll = () => {
    userScrollDetected.current = true;
    stopAutoScroll();
  };

  const scrollToBottom = () => {
    userScrollDetected.current = false;
    window.addEventListener("wheel", onUserScroll, { passive: true });
    window.addEventListener("touchstart", onUserScroll, { passive: true });

    scrollIntervalRef.current = window.setInterval(() => {
      if (userScrollDetected.current) {
        stopAutoScroll();
        return;
      }

      const scrolled = window.scrollY + window.innerHeight;
      const height = document.documentElement.scrollHeight;

      if (scrolled >= height) {
        stopAutoScroll();
        return;
      }

      window.scrollBy({ top: SCROLL_STEP, behavior: "smooth" });
    }, SCROLL_INTERVAL);
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      stopAutoScroll();
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-deep via-emerald-deep to-black text-white overflow-hidden flex items-center justify-center px-6 py-32 font-serif">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={ikimVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken video for readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 max-w-4xl text-center space-y-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gold-500 tracking-wide drop-shadow-lg">
          Elevate Your Brand
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We craft magnetic content that converts. From scroll-stopping visuals
          to performance-driven campaigns — your brand deserves the spotlight.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-10 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gold-400 shadow-lg transition duration-300"
        >
          Explore Our Work
        </motion.a>
      </motion.div>

      {/* Scroll Prompt */}
      <motion.div
        onClick={scrollToBottom}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full border-2 border-gold-500 flex items-center justify-center relative">
          {/* Bouncing gold dot */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-gold-500 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
          />

          {/* Down arrow SVG centered */}
          <svg
            className="w-4 h-4 text-gold-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
