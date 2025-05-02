
import { MdOutlineCall } from "react-icons/md"; // Import the icon

export default function CTA() {
  return (
    <section className="py-16 bg-gray-200 text-black text-center">
      {/* Main Heading */}
      <h2 className="text-6xl font-bold mb-4">
        Ready to <span className="text-[#F15B5F]">Grow?</span>
      </h2>
      <h2 className="text-6xl font-bold mb-4">Let's Talk about your Goal!</h2>

      {/* Button with Icon */}
      <button className="bg-[#F15B5F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e05053] flex items-center justify-center gap-2 mx-auto">
        <MdOutlineCall size={24} /> {/* Add the icon here */}
        Book a Free Call
      </button>
    </section>
  );
}