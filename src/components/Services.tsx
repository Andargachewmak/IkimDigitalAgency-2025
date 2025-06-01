import React from "react";
import {
  FaVideo,
  FaPaintBrush,
  FaBullhorn,
  FaComments,
} from "react-icons/fa";

const iconWrapperStyle = "w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-[#0B0C10] via-[#10121A] to-[#0B0C10] py-16 px-6 sm:px-12 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-[#E5E5E5]"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          Our Services
        </h2>

        <p
          className="max-w-3xl mx-auto mb-16 text-center text-lg sm:text-xl font-light leading-relaxed text-gray-300"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Empowering brands with strategic social media marketing solutions.
          From creative video editing and graphic design to targeted paid
          advertising and expert consulting — we grow your digital presence
          with impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Service Card */}
          {[
            {
              title: "Video Editing",
              icon: <FaVideo className="text-3xl text-[#FFD700]" />,
              desc: "Crafting engaging videos optimized for social platforms, ensuring your message resonates and converts.",
            },
            {
              title: "Graphics (Logo, Poster)",
              icon: <FaPaintBrush className="text-3xl text-[#FFD700]" />,
              desc: "Eye-catching logos, posters, and creatives tailored for your brand’s unique voice and style.",
            },
            {
              title: "Paid Advertising",
              icon: <FaBullhorn className="text-3xl text-[#FFD700]" />,
              desc: "Targeted Facebook and Instagram ad campaigns designed to maximize ROI and grow your audience.",
            },
            {
              title: "Consulting & Social Media Management",
              icon: <FaComments className="text-3xl text-[#FFD700]" />,
              desc: "Expert guidance and hands-on management to keep your social media channels thriving.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-[#1A1B25] hover:bg-[#2C2E3A] transition duration-300 rounded-xl p-8 shadow-xl flex flex-col items-center text-center group"
            >
              <div className={`${iconWrapperStyle} bg-[#0F1C2E] group-hover:bg-[#FFD700] transition`}>
                {React.cloneElement(service.icon, {
                  className: "text-3xl group-hover:text-[#0F1C2E]",
                })}
              </div>
              <h3
                className="text-xl font-bold mb-3 text-white group-hover:text-[#FFD700]"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm sm:text-base font-light text-gray-300"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
