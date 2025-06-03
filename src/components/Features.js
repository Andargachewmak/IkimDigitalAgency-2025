import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const features = [
    { title: "Easy to Use", description: "User-friendly interface that anyone can use." },
    { title: "Fast Performance", description: "Lightning fast with optimized performance." },
    { title: "Secure", description: "Top-level security for your peace of mind." },
];
export default function Features() {
    return (_jsxs("section", { className: "py-20 px-6 bg-gray-100 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-10", children: "Features" }), _jsx("div", { className: "max-w-4xl mx-auto grid md:grid-cols-3 gap-8", children: features.map((feat, idx) => (_jsxs("div", { className: "bg-white p-6 rounded-xl shadow-md", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: feat.title }), _jsx("p", { className: "text-gray-600", children: feat.description })] }, idx))) })] }));
}
