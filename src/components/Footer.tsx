import { FC } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="pt-6 bg-black text-base relative">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        {/* Centered Grid Section */}
        <div className="flex flex-col items-center">
          {/* Grid - All Columns (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-8 gap-y-6 w-full max-w-5xl text-center sm:text-left">
            {/* Column 1: Quick Links */}
            <div>
              <h4 className="text-white mb-4 font-semibold uppercase">Quick Links</h4>
              <ul className="space-y-3">
                <li className="text-white hover:text-gray-200 cursor-pointer transition-colors">
                  <a href="#">Home</a>
                </li>
                <li className="text-white hover:text-gray-200 cursor-pointer transition-colors">
                  <a href="#about-us">About Us</a>
                </li>
                <li className="text-white hover:text-gray-200 cursor-pointer transition-colors">
                  <a href="#projects">Projects</a>
                </li>
                <li className="text-white hover:text-gray-200 cursor-pointer transition-colors">
                  <a href="#services">Services</a>
                </li>
              </ul>
            </div>

            {/* Column 2: Other Pages */}
            <div>
              <h4 className="text-white mb-4 font-semibold uppercase">Other Pages</h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms of Use", "Disclaimer", "FAQ"].map((item) => (
                  <li key={item} className="text-white hover:text-gray-200 cursor-pointer transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 className="text-white mb-4 font-semibold uppercase">Contact Info</h4>
              <ul className="space-y-3">
                <li className="text-white hover:text-gray-200 cursor-pointer transition-colors">
                  Addis Ababa, Ethiopia
                </li>
                <li className="text-white hover:text-gray-200 cursor-pointer transition-colors">
                  +251954904064
                </li>
                <li className="text-white hover:text-gray-200 cursor-pointer transition-colors">
                 andargachewmekonn09@gmail.com
                </li>
              </ul>
            </div>

            {/* Column 4: Brand + Social Icons */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Ikim Digital Agency</h3>
              <p className="text-white mb-5">
                Creative studio crafting visual identities.
              </p>
              <div className="flex justify-center sm:justify-start gap-3">
                <a 
                  href="https://web.facebook.com/andargachew.mekonnen.3" 
                  className="bg-white hover:bg-gray-200 transition-colors rounded-full shadow p-2.5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-black hover:text-white" size={14} />
                </a>
                <a 
                  href="https://www.instagram.com/andargachewm" 
                  className="bg-white hover:bg-gray-200 transition-colors rounded-full shadow p-2.5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-black hover:text-white" size={14} />
                </a>
                <a 
                  href="https://vm.tiktok.com/ZMShNxHGQ/" 
                  className="bg-white hover:bg-gray-200 transition-colors rounded-full shadow p-2.5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <FaTiktok className="text-black hover:text-white" size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/15 my-6"></div>
      </div>

      {/* Bottom Section – Copyright on Bottom Left Only */}
      <div className="container mx-auto px-4">
        <p className="text-white text-sm text-left">
          © 2025 -Ikim Digital Agency. Developed by{" "}
          <span className="hover:text-gray-200 cursor-pointer transition-colors">Andargachew Mekonnen</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;