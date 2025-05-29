import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const Counter = ({ icon, start, end, duration, label, prefix = "", suffix = "", }) => {
    const [count, setCount] = useState(start);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.5 });
        if (ref.current)
            observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (!isVisible)
            return;
        let startTime;
        const step = (timestamp) => {
            if (!startTime)
                startTime = timestamp;
            const progress = timestamp - startTime;
            const increment = Math.min(end, Math.floor((progress / duration) * end));
            setCount(increment);
            if (increment < end) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [isVisible, end, duration]);
    return (_jsxs("div", { ref: ref, className: "flex flex-col items-center text-center bg-black p-6 rounded-lg", children: [_jsx("i", { className: `text-4xl text-white ${icon}` }), _jsxs("div", { className: "relative mt-2", children: [_jsxs("div", { className: "text-3xl font-bold text-white", children: [prefix, count, suffix] }), _jsx("span", { className: "absolute top-0 right-[-10px] transform translate-y-[-50%] text-sm text-white font-bold", children: "+" })] }), _jsx("p", { className: "text-[#F15B5F]", children: label })] }));
};
const StatsSection = () => {
    return (_jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 p-10 bg-white text-white", children: [_jsx(Counter, { icon: "ion-ios-heart", start: 0, end: 5, duration: 1000, label: "Years of Service" }), _jsx(Counter, { icon: "ion-ios-people", start: 0, end: 1000, duration: 1000, label: "Happy Clients" }), _jsx(Counter, { icon: "ion-ios-medkit", start: 0, end: 500, duration: 1000, label: "Projects" }), _jsx(Counter, { icon: "ion-ios-star", start: 0, end: 4.8, duration: 1000, label: "Average Rating", suffix: "/5" })] }));
};
export default StatsSection;
