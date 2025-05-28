import React from "react";
import Artboard1 from "../assets/Image/Artboard 1 copy.svg"; // Adjust the path as needed

const Hero: React.FC = () => {
  const SCROLL_STEP = 100; // pixels per step
  const SCROLL_INTERVAL = 50; // ms between steps

  const scrollToBottom = () => {
    const scrollInterval = setInterval(() => {
      window.scrollBy({
        top: SCROLL_STEP,
        behavior: "smooth",
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        clearInterval(scrollInterval); // Stop when bottom is reached
      }
    }, SCROLL_INTERVAL);
  };

  return (
    <div className="hero min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-x-0 top-[15%] h-[70%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Artboard1})`,
          opacity: 1.5,
        }}
      ></div>

      {/* Main Container */}
      <div className="container-hero container mx-auto relative z-20">
        <div className="hero-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Paragraph */}
          <div id="part-1" className="part-1">
            <div className="hero-flex-center left">
              <p className="paragraph-1 text-gray-300 text-base md:text-lg font-light leading-relaxed animate-fade-in-left">
                Design. Experience. Functionality.  
We bring your ideas to life through stunning graphics, intuitive interfaces,  
and performant web development — all in one place.

              </p>
            </div>
          </div>

          {/* Placeholder for Removed Titles */}
          <div id="part-2" className="part-2 text-center">
            <div className="hero-flex-center">
              <div className="h-[150px]"></div>
            </div>
            <div className="hero-flex-center _2">
              <div className="h-[150px]"></div>
            </div>
          </div>

          {/* Right Paragraph */}
          <div id="part-3" className="part-3">
            <div className="hero-flex-center left">
              <p className="paragraph-2 text-gray-300 text-base md:text-lg font-light leading-relaxed animate-fade-in-right">
Graphics. UI/UX. Web Development.  
We turn your vision into engaging, user-first digital experiences.  
Built for beauty. Optimized for performance.              </p>
              <div className="margin-30px mt-6">
                <a
                  href="/contact"
                  className="button-with-line _2 w-inline-block group"
                >
                  <div>
                    <div className="text-block-3 text-teal-600 font-medium group-hover:text-teal-500 transition-colors duration-300">
                      Let's Talk
                    </div>
                    <div className="button-line relative h-0.5 bg-teal-600 overflow-hidden">
                      <div
                        className="button-line-absolute absolute top-0 left-0 w-full h-full bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      ></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Wrapper */}
      <div
        data-w-id="b12bdb0c-f478-81bf-752b-0b6abbe0e7db"
        className="scroll-down-wrapper absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center cursor-pointer"
        onClick={scrollToBottom}
      >
        <div className="scroll-flex">
          {/* Mouse Dot with Background */}
          <a href="#Down" className="mouse-scroll w-inline-block">
            <div className="mouse-dot-wrapper w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <div
                className="mouse-dots w-2 h-2 bg-white rounded-full animate-bounce"
                style={{ animationDuration: "1.5s" }}
              ></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;