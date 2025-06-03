import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
// import { useLocation } from "react-router-dom";
const navbar = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about-us" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#projects" },
    // { name: "Testimonials", href: "/testimonials" },
];
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    // const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const isHomePage = location.pathname === "/";
    return (_jsxs("header", { className: `fixed top-0 left-0 right-0 w-full z-50 py-6 transition-all duration-300 ${isHomePage
            ? isScrolled
                ? "bg-gray-700 shadow-md" // Show shadow when scrolled
                : "bg-transparent shadow-none" // Hide shadow when at the top
            : "bg-gray-700 shadow-md"}`, children: [_jsx("div", { className: "container mx-auto max-w-7xl px-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h1", { className: "font-extrabold text-white", children: "Ikim Digital Agency" }), _jsx("button", { ref: buttonRef, onClick: () => setIsOpen(!isOpen), className: "md:hidden text-white text-2xl", children: isOpen ? (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", strokeWidth: "3", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M6 6L18 18M6 18L18 6" }) })) : (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", strokeWidth: "3", fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M4 6h16M4 12h16M4 18h16" }) })) }), _jsxs("div", { className: "hidden md:flex items-center", children: [_jsx("ul", { className: "flex space-x-6", children: navbar.map((nav) => {
                                        const isActive = location.pathname === nav.href;
                                        return (_jsx("li", { children: _jsx("a", { href: nav.href, className: `py-2 px-2 font-semibold transition-colors duration-200 ${isHomePage && !isScrolled
                                                    ? "text-white hover:text-gray-100"
                                                    : "text-white hover:text-gray-100"} ${isActive ? "underline text-white" : ""}`, children: nav.name }) }, nav.name));
                                    }) }), _jsx("div", { className: "ml-6", children: _jsxs("button", { className: "flex items-center space-x-2 text-white bg-[#000000] hover:bg-gray-700 font-medium rounded-lg px-4 py-2", children: [_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", children: [_jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), _jsx("path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" })] }), _jsx("span", { children: " Get in Touch" })] }) })] })] }) }), isOpen && (_jsx("div", { ref: menuRef, className: "md:hidden absolute top-full left-0 w-full bg-gray-300 shadow-md py-4", children: _jsxs("ul", { className: "flex flex-col space-y-4 px-4", children: [navbar.map((nav) => {
                            const isActive = location.pathname === nav.href;
                            return (_jsx("li", { children: _jsx("a", { href: nav.href, className: `block py-2 px-2 font-semibold transition-colors duration-200 ${isActive ? " text-black" : "text-black"} hover:text-white`, children: nav.name }) }, nav.name));
                        }), _jsx("li", { children: _jsxs("button", { className: "w-full flex items-center justify-center space-x-2 text-white bg-black hover:bg-gray-200 font-medium rounded-lg px-4 py-2", children: [_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "currentColor", className: "text-white", children: [_jsx("path", { d: "M22 2L11 13", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M22 2L15 22L11 13L2 9L22 2Z", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }), _jsx("a", { href: "#GetInTouch", children: _jsx("span", { children: "Get in Touch" }) })] }) })] }) }))] }));
};
export default Header;
