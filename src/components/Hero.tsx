
import { WiDirectionUpRight } from "react-icons/wi";

export default function Hero() {
  return (
    <section className="h-screen w-full bg-black flex items-center justify-center p-6">
      <div className="container mx-auto text-center relative">
        {/* Main Heading with Circles */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 relative z-20 space-x-4">
          {/* Intersecting Circles Next to Text */}
          <div className="relative flex items-center">
            {/* White Circle - front */}
            <div
              className="w-12 h-12 bg-white rounded-full absolute left-0"
              style={{ zIndex: 20 }}
            ></div>

            {/* Red Circle - behind, with less intersection */}
            <div
              className="w-12 h-12 bg-[#F15B5F] rounded-full absolute left-5"
              style={{ zIndex: 10 }} // moved further to reduce overlap
            ></div>

            {/* Spacer to reserve space for overlapping circles */}
            <div className="w-20"></div>
          </div>

          {/* Text Block */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <h1
              className="text-5xl md:text-6xl font-bold text-white"
              style={{ fontFamily: "Anton, sans-serif", fontWeight: 900 }}
            >
              We Grow Local
            </h1>
            <p
              className="text-sm md:text-base text-white font-medium leading-relaxed max-w-xs text-left"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              We help you connect with your <br />
              audience through strategy, design, <br />
              and media that works.
            </p>
          </div>
        </div>

        {/* Second Heading */}
        <h1
          className="text-5xl md:text-6xl font-bold text-white mt-4 md:mt-0 relative z-30"
          style={{ fontFamily: "Anton, sans-serif", fontWeight: 900 }}
        >
          Brands with <span className="text-[#F15B5F]">Creative </span>Ads
        </h1>

        {/* Call-to-Action Button */}
        <button
          className="relative bg-gradient-to-r from-[#F15B5F] to-[#F15B5F] text-white px-8 py-5 rounded-full font-bold overflow-hidden mt-16 mx-auto transition-all duration-300 transform hover:scale-105 group flex items-center space-x-4"
        >
          {/* Icon Circle */}
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
            <WiDirectionUpRight
              className="text-3xl md:text-4xl text-[#F15B5F]"
              style={{ fontWeight: 900 }}
            />
          </div>

          {/* Button Text */}
          <span className="relative z-10 text-xl md:text-2xl">Join Us</span>

          {/* Glow on Hover */}
          <span className="absolute inset-0 bg-[#F15B5F] opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></span>
        </button>
      </div>
    </section>
  );
}
