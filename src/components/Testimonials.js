import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO at Bloom Studio",
        content: "Working with Ha creative transformed our brand identity. The team delivered beyond expectations.",
        avatar: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Marketing Director",
        content: "Creative, professional and detail-oriented. Their work elevated our visual presence significantly.",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Founder of Luxe Co.",
        content: "Outstanding attention to detail and a fresh perspective that made all the difference in our branding.",
        avatar: "https://images.pexels.com/photos/1238708/pexels-photo-1238708.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
    {
        id: 4,
        name: "David Kim",
        role: "Product Designer",
        content: "They turned our ideas into stunning visuals. A pleasure to work with every step of the way.",
        avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
        id: 5,
        name: "Linda Torres",
        role: "Brand Strategist",
        content: "Top-tier creativity and professionalism. They understood our vision and executed flawlessly.",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150",
    },
    {
        id: 6,
        name: "James Omondi",
        role: "Startup Founder",
        content: "From logo to website, everything was handled with care. Highly recommend their services.",
        avatar: "https://i.pravatar.cc/150?img=3",
    },
];
const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const itemsPerPage = 2;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);
    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % totalPages);
        }, 5000);
        return () => clearInterval(interval);
    }, [totalPages]);
    const goToSlide = (index) => {
        setCurrent(index);
    };
    const startIndex = current * itemsPerPage;
    const displayedTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);
    return (_jsxs("section", { className: "py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white", children: [_jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-wide font-anton", children: "What Our Clients Say" }), _jsx("p", { className: "text-center text-[#F15B5F] max-w-xl mx-auto mb-16 text-base md:text-lg font-poppins", children: "Don't just take our word \u2014 hear it directly from our clients." }), _jsx("div", { className: "flex justify-center", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl transition-opacity duration-500", children: displayedTestimonials.map((testimonial, index) => (_jsxs("div", { className: `bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-lg hover:shadow-2xl transform transition-all duration-500 ${index === 0 ? "opacity-100 translate-y-0" : "opacity-100"}`, children: [_jsxs("p", { className: "text-lg italic text-center mb-6 font-poppins leading-relaxed", children: ["\"", testimonial.content, "\""] }), _jsxs("div", { className: "flex items-center justify-center mt-6 space-x-4", children: [_jsx("img", { src: testimonial.avatar, alt: testimonial.name, className: "w-12 h-12 rounded-full object-cover border-2 border-[#F15B5F]" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold font-poppins", children: testimonial.name }), _jsx("p", { className: "text-sm text-[#F15B5F] font-poppins", children: testimonial.role })] })] })] }, testimonial.id))) }) }), _jsx("div", { className: "flex justify-center mt-10 space-x-3", children: Array.from({ length: totalPages }).map((_, index) => (_jsx("button", { onClick: () => goToSlide(index), className: `w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-[#F15B5F] w-8" : "bg-gray-600 hover:bg-gray-500"}`, "aria-label": `Go to testimonial page ${index + 1}` }, index))) })] }), _jsx("style", { children: `
        .font-anton {
          font-family: 'Anton', sans-serif;
        }
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      ` })] }));
};
export default Testimonial;
