import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import CTA from "./components/CTA";
// import Features from "./components/Features";
import AboutUsSection from "./components/About";
import StatsSection from "./components/Counter";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Project";
import Services from "./components/Services";
import Testimonial from "./components/Testimonials";
export default function App() {
    return (_jsxs("div", { className: "font-sans text-gray-800", children: [_jsx(Header, {}), _jsx(Hero, {}), _jsx(AboutUsSection, {}), _jsx(Services, {}), _jsx(StatsSection, {}), _jsx(Projects, {}), _jsx(Testimonial, {}), _jsx(CTA, {}), _jsx(Footer, {})] }));
}
