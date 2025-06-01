import React from 'react';
import VideoFile from '../assets/Image/disgn.mp4'; // Import the video file
import NavanLogo from '../assets/Image/navan.svg';
import ContentfulLogo from '../assets/Image/contentful.svg';
import UnileverLogo from '../assets/Image/unilever.svg';
import StackOverflowLogo from '../assets/Image/stack-overflow.svg';
import RiotGamesLogo from '../assets/Image/riot-games.svg';
import NikeLogo from '../assets/Image/nike.svg';
import KubernetesLogo from '../assets/Image/kubernetes.svg';

interface AboutUsProps {
  title?: string;
  description?: string;
}

const logos = [
  { src: NavanLogo, alt: 'Navan', width: 89, height: 20 },
  { src: ContentfulLogo, alt: 'Contentful', width: 146, height: 30 },
  { src: UnileverLogo, alt: 'Unilever', width: 62, height: 69 },
  { src: StackOverflowLogo, alt: 'Stack Overflow', width: 172, height: 34 },
  { src: RiotGamesLogo, alt: 'Riot Games', width: 101, height: 28 },
  { src: NikeLogo, alt: 'Nike', width: 80, height: 29 },
  { src: KubernetesLogo, alt: 'Kubernetes', width: 181, height: 33 },
];

const AboutUsSection: React.FC<AboutUsProps> = ({
  title = 'About Us',
  description,
}) => {
  return (
    <section id="about-us" className="pt-6 sm:pt-10 pb-12 sm:pb-20 bg-white w-full">
      {/* Logo Slider Section */}
      <div className="bg-transparent py-4 overflow-hidden mb-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Duplicate the logos for seamless scrolling */}
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-12 w-auto object-contain mx-16"
            />
          ))}
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Box with Background */}
          <div
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-3xl flex flex-col justify-center space-y-6 transition-all duration-300 hover:scale-105"
            style={{ height: '400px' }}
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
                "IKIM Agency is a results-driven social media marketing team specializing in video editing, graphic design, paid advertising, and social media management. We create bold, engaging content and campaigns that help brands grow, connect, and convert. From strategy to execution, we turn ideas into impact."}
            </p>
          </div>

          {/* Video Container */}
          <div
            className="relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-105"
            style={{ height: '400px' }}
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
