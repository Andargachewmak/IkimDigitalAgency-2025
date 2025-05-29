import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MdOutlineCall } from "react-icons/md"; // Import the icon
export default function CTA() {
    return (_jsxs("section", { className: "py-16 bg-gray-200 text-black text-center", children: [_jsxs("h2", { className: "text-6xl font-bold mb-4", children: ["Ready to ", _jsx("span", { className: "text-[#F15B5F]", children: "Grow?" })] }), _jsx("h2", { className: "text-6xl font-bold mb-4", children: "Let's Talk about your Goal!" }), _jsxs("button", { className: "bg-[#F15B5F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e05053] flex items-center justify-center gap-2 mx-auto", children: [_jsx(MdOutlineCall, { size: 24 }), " ", "Book a Free Call"] })] }));
}
