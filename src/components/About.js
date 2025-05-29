import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import VideoFile from '../assets/Image/disgn.mp4'; // Import the video file
import NavanLogo from '../assets/Image/navan.svg';
import ContentfulLogo from '../assets/Image/contentful.svg';
import UnileverLogo from '../assets/Image/unilever.svg';
import StackOverflowLogo from '../assets/Image/stack-overflow.svg';
import RiotGamesLogo from '../assets/Image/riot-games.svg';
import NikeLogo from '../assets/Image/nike.svg';
import KubernetesLogo from '../assets/Image/kubernetes.svg';
const logos = [
    { src: NavanLogo, alt: 'Navan', width: 89, height: 20 },
    { src: ContentfulLogo, alt: 'Contentful', width: 146, height: 30 },
    { src: UnileverLogo, alt: 'Unilever', width: 62, height: 69 },
    { src: StackOverflowLogo, alt: 'Stack Overflow', width: 172, height: 34 },
    { src: RiotGamesLogo, alt: 'Riot Games', width: 101, height: 28 },
    { src: NikeLogo, alt: 'Nike', width: 80, height: 29 },
    { src: KubernetesLogo, alt: 'Kubernetes', width: 181, height: 33 },
];
const AboutUsSection = ({ title = 'About Us', description, }) => {
    return (_jsxs("section", { id: "about-us", className: "pt-6 sm:pt-10 pb-12 sm:pb-20 bg-white w-full", children: [_jsx("div", { className: "bg-transparent py-4 overflow-hidden mb-6", children: _jsx("div", { className: "flex whitespace-nowrap animate-marquee", children: [...logos, ...logos].map((logo, idx) => (_jsx("img", { src: logo.src, alt: logo.alt, width: logo.width, height: logo.height, className: "h-12 w-auto object-contain mx-16" }, idx))) }) }), _jsx("div", { className: "w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { className: "bg-gradient-to-br from-gray-100 to-gray-200 p-8 rounded-3xl flex flex-col justify-center space-y-6 transition-all duration-300 hover:scale-105", style: { height: '400px' }, children: [_jsx("h2", { className: "text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-black", style: { fontFamily: 'Anton, sans-serif' }, children: title }), _jsx("p", { className: "text-base sm:text-lg text-gray-700 leading-relaxed", style: { fontFamily: 'Poppins, sans-serif' }, children: description ||
                                        "At HA Creative, we don’t just build visuals or websites — we craft digital experiences that leave a lasting impression. We are a creative studio dedicated to blending strategic design, user-centered thinking, and modern web technology to help brands thrive in a digital-first world." })] }), _jsxs("div", { className: "relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-105", style: { height: '400px' }, children: [_jsxs("video", { autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full h-full object-cover rounded-3xl", children: [_jsx("source", { src: VideoFile, type: "video/mp4" }), "Your browser does not support the video tag."] }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] })] }) })] }));
};
export default AboutUsSection;
