

const Services = () => {
  return (
    <div id="services" className="text-center py-12 sm:py-20 bg-black w-full flex justify-center">
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section - Designs that Inspire with Moving Animation */}
        <div className="mb-12 flex items-center justify-center animate-[slide-right_4s_ease-in-out_infinite]">
          <div className="w-12 h-12 bg-[#F15B5F] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4" />
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Designs that Inspire
          </h2>
          <div className="w-12 h-12 bg-[#F15B5F] rounded-full flex items-center justify-center text-white font-bold text-sm ml-4" />
        </div>

        {/* Subsection - Our Services */}
        <div className="flex flex-col md:flex-row items-center justify-between text-left mb-8 sm:mb-12">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white md:w-1/3"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Our Services
          </h2>

          <div className="flex-shrink-0 mx-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F15B5F"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8"
            >
              <path d="M5 12l14 0" />
              <line x1="12" y1="5" x2="19" y2="12" />
              <line x1="12" y1="19" x2="19" y2="12" />
            </svg>
          </div>

          <p
            className="text-sm sm:text-base text-white font-medium leading-relaxed md:w-1/3 ml-6"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            From bold brand identities to eye-catching print <br />
            and digital materials, we bring your message to <br />
            life and make sure it stands out.
          </p>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-700 mb-10"></div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 hover:bg-[#F15B5F] transition-colors duration-300 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Anton, sans-serif" }}>
              Branding Identity
            </h3>
            <div className="w-12 h-1 bg-[#F15B5F] mb-4 rounded"></div>
            <p className="text-sm text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
              Logos, brand colors, typography, and visual systems that shape how people see your brand.
            </p>
            <div className="mt-6 h-24 bg-gray-700 rounded-lg"></div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 hover:bg-[#F15B5F] transition-colors duration-300 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Anton, sans-serif" }}>
              UI/UX Design
            </h3>
            <div className="w-12 h-1 bg-[#F15B5F] mb-4 rounded"></div>
            <p className="text-sm text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
              Brochures, flyers, posters, packaging—everything you need in your customer’s hands.
            </p>
            <div className="mt-6 h-24 bg-gray-700 rounded-lg"></div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 hover:bg-[#F15B5F] transition-colors duration-300 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Anton, sans-serif" }}>
              Web Development
            </h3>
            <div className="w-12 h-1 bg-[#F15B5F] mb-4 rounded"></div>
            <p className="text-sm text-white" style={{ fontFamily: "Poppins, sans-serif" }}>
              Beautiful layouts for magazines, newspapers, and books that are both clear and engaging.
            </p>
            <div className="mt-6 h-24 bg-gray-700 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
