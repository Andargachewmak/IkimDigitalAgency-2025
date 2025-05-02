import React from 'react';
import VideoFile from '../assets/Image/disgn.mp4'; // Import the video file

interface AboutUsProps {
  title?: string;
  description?: string;
}

const AboutUsSection: React.FC<AboutUsProps> = ({
  title = 'About Us',
  description,
}) => {
  return (
    <section id="about-us" className="py-12 sm:py-20 bg-white w-full"> {/* Added id="about-us" */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout: Text Box + Video */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* Increased gap */}
          
          {/* Text Box with Background */}
          <div
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-3xl shadow-2xl flex flex-col justify-center space-y-6 transition-all duration-300 hover:scale-105"
            style={{ height: '400px' }} // Fixed height for the text box
          >
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-black"
              style={{ fontFamily: 'Anton, sans-serif' }}
            >
              {title}
            </h2>
            <p
              className="text-base sm:text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {description ||
                "We’re your creative partner for marketing, branding, and communication. Our team builds bold ideas that connect with your audience and drive results. From strategy to design to media – we make sure your message hits the mark and helps your business grow."}
            </p>
          </div>

          {/* Video Container */}
          <div
            className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ height: '400px' }} // Fixed height for the video container
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-3xl"
            >
              <source src={VideoFile} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Overlay for Hover Effect */}
            <div
              className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;