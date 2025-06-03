import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { FaVideo, FaPaintBrush, FaBullhorn, FaComments, } from "react-icons/fa";
const iconWrapperStyle = "w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg";
const Services = () => {
    return (_jsx("section", { id: "services", className: "bg-gradient-to-br from-[#0B0C10] via-[#10121A] to-[#0B0C10] py-16 px-6 sm:px-12 text-white", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-4xl sm:text-5xl font-extrabold mb-12 text-center text-[#E5E5E5]", style: { fontFamily: "Anton, sans-serif" }, children: "Our Services" }), _jsx("p", { className: "max-w-3xl mx-auto mb-16 text-center text-lg sm:text-xl font-light leading-relaxed text-gray-300", style: { fontFamily: "Poppins, sans-serif" }, children: "Empowering brands with strategic social media marketing solutions. From creative video editing and graphic design to targeted paid advertising and expert consulting \u2014 we grow your digital presence with impact." }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
                        {
                            title: "Video Editing",
                            icon: _jsx(FaVideo, { className: "text-3xl text-[#FFD700]" }),
                            desc: "Crafting engaging videos optimized for social platforms, ensuring your message resonates and converts.",
                        },
                        {
                            title: "Graphics (Logo, Poster)",
                            icon: _jsx(FaPaintBrush, { className: "text-3xl text-[#FFD700]" }),
                            desc: "Eye-catching logos, posters, and creatives tailored for your brand’s unique voice and style.",
                        },
                        {
                            title: "Paid Advertising",
                            icon: _jsx(FaBullhorn, { className: "text-3xl text-[#FFD700]" }),
                            desc: "Targeted Facebook and Instagram ad campaigns designed to maximize ROI and grow your audience.",
                        },
                        {
                            title: "Consulting & Social Media Management",
                            icon: _jsx(FaComments, { className: "text-3xl text-[#FFD700]" }),
                            desc: "Expert guidance and hands-on management to keep your social media channels thriving.",
                        },
                    ].map((service, i) => (_jsxs("div", { className: "bg-[#1A1B25] hover:bg-[#2C2E3A] transition duration-300 rounded-xl p-8 shadow-xl flex flex-col items-center text-center group", children: [_jsx("div", { className: `${iconWrapperStyle} bg-[#0F1C2E] group-hover:bg-[#FFD700] transition`, children: React.cloneElement(service.icon, {
                                    className: "text-3xl group-hover:text-[#0F1C2E]",
                                }) }), _jsx("h3", { className: "text-xl font-bold mb-3 text-white group-hover:text-[#FFD700]", style: { fontFamily: "Anton, sans-serif" }, children: service.title }), _jsx("p", { className: "text-sm sm:text-base font-light text-gray-300", style: { fontFamily: "Poppins, sans-serif" }, children: service.desc })] }, i))) })] }) }));
};
export default Services;
