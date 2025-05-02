import { FC } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-black">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16">
          
          {/* Column 1: Logo and Social Media */}
          <div className="col-span-1">
            <p className="text-xs text-white font-medium mt-5 mb-6 max-w-[70%]">
              Open an account in minutes, get full financial control for much longer.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 items-center">
              <a 
                href="https://www.facebook.com/hacreativestudio" 
                className="bg-white hover:bg-[#F15B5F] transition-colors rounded-full shadow-xl p-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-black hover:text-white" size={16} />
              </a>
              <a 
                href="https://www.instagram.com/hacreativestudio" 
                className="bg-white hover:bg-[#F15B5F] transition-colors rounded-full shadow-xl p-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-black hover:text-white" size={16} />
              </a>
              <a 
                href="https://www.tiktok.com/@hacreativestudio" 
                className="bg-white hover:bg-[#F15B5F] transition-colors rounded-full shadow-xl p-3" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-black hover:text-white" size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white mb-9 font-semibold text-xl">Quick Links</h4>
            <ul>
              <li className="text-white pb-5 hover:text-[#F15B5F] cursor-pointer transition-colors">
                <a href="#">Home</a>
              </li>
              <li className="text-white pb-5 hover:text-[#F15B5F] cursor-pointer transition-colors">
                <a href="#about-us">About Us</a>
              </li>
              <li className="text-white pb-5 hover:text-[#F15B5F] cursor-pointer transition-colors">
                <a href="#projects">Projects</a>
              </li>
              <li className="text-white pb-5 hover:text-[#F15B5F] cursor-pointer transition-colors">
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Pages */}
          <div className="col-span-1">
            <h4 className="text-white mb-9 font-semibold text-xl">Other Pages</h4>
            <ul>
              {["Privacy & Policy", "Terms of Use", "Disclaimer", "FAQ"].map((item) => (
                <li key={item} className="text-white pb-5 hover:text-[#F15B5F] cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-1">
            <h4 className="text-white mb-9 font-semibold text-xl">Contact Info</h4>
            <ul>
              <li className="text-white pb-5 hover:text-[#F15B5F] transition-colors cursor-pointer">
                22 St. Addis Ababa, Ethiopia
              </li>
              <li className="text-white pb-5 hover:text-[#F15B5F] transition-colors cursor-pointer">
                +251902615767
              </li>
              <li className="text-white pb-5 hover:text-[#F15B5F] transition-colors cursor-pointer">
                mail@domain.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
          <p className="text-sm text-white">
            © 2025 - Azera. Developed by{" "}
            <span className="hover:text-[#F15B5F] cursor-pointer transition-colors">Ha creative</span>
          </p>
          <div className="flex gap-6 text-white text-sm">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <span key={item} className="hover:text-[#F15B5F] cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
