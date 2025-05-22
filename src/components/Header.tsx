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
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  // const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 py-6 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-[#F15B5F] shadow-md" // Show shadow when scrolled
            : "bg-transparent shadow-none" // Hide shadow when at the top
          : "bg-[#F15B5F] shadow-md"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="font-extrabold text-white">Ha creative</h1>

          {/* Mobile Menu Button */}
          <button
  ref={buttonRef}
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-white text-2xl"
>
  {isOpen ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      strokeWidth="3"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 6L18 18M6 18L18 6" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      strokeWidth="3"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )}
</button>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-6">
              {navbar.map((nav) => {
                const isActive = location.pathname === nav.href;
                return (
                  <li key={nav.name}>
                    <a
                      href={nav.href}
                      className={`py-2 px-2 font-semibold transition-colors duration-200 ${
                        isHomePage && !isScrolled
                          ? "text-white hover:text-gray-100"
                          : "text-white hover:text-gray-100"
                      } ${isActive ? "underline text-black" : ""}`}
                    >
                      {nav.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="ml-6">
              <button className="flex items-center space-x-2 text-white bg-[#000000] hover:bg-gray-700 font-medium rounded-lg px-4 py-2">
              <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
                <span> Get in Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4"
        >
          <ul className="flex flex-col space-y-4 px-4">
            {navbar.map((nav) => {
              const isActive = location.pathname === nav.href;
              return (
                <li key={nav.name}>
                  <a
                    href={nav.href}
                    className={`block py-2 px-2 font-semibold transition-colors duration-200 ${
                      isActive ? " text-[#F15B5F]" : "text-[#F15B5F]"
                    } hover:text-white`}
                  >
                    {nav.name}
                  </a>
                </li>
              );
            })}
            {/* Telegram Bot Button */}
            <li>
              <button className="w-full flex items-center justify-center space-x-2 text-white bg-black hover:bg-gray-200 font-medium rounded-lg px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white"
                >
                  <path
                    d="M22 2L11 13"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Get in Touch</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
