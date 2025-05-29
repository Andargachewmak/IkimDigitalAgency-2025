import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Artboard1 from '../assets/Image/Artboard1.jpg';
import Artboard2 from '../assets/Image/balle.jpg';
import Artboard3 from '../assets/Image/Edemy_Logo copy 8-100.jpg';
import Artboard4 from '../assets/Image/Artboard4.jpg';
import Artboard5 from '../assets/Image/Artboard5.jpg';
import Artboard6 from '../assets/Image/Artboard6.jpg';
import BAAZ3 from '../assets/Image/BAAZ3.jpg';
import BAAZ from '../assets/Image/BAAZ.jpg';
import BAAZ4 from '../assets/Image/BAAZ4.jpg';
const projects = [
    {
        id: 1,
        title: 'ScrawlrBox',
        client: 'ScrawlrBox',
        category: 'Logo Design',
        contributors: 'Will Paterson',
        summary: `ScrawlrBox are the leading monthly subscription box for premium art supplies...
The pressure was on when creating a logotype for a long-established company used by countless designers and artists every month - their previous logo was very recognisable, but was in need of modernisation, which is where we came in!
It was a pleasure working with Chris to develop their logotype into something that matched the premium nature of their products as well as create a bespoke company font to be adaptable for their other projects; ScrawlrZine, ScrawlrBlanks and their Blackwing x ScrawlrBox collection, to name a few.
We’re incredibly pleased with the finished logo and bespoke font, and when our boxes arrive it always puts a smile on our faces!`,
        images: [Artboard1, Artboard2, Artboard5, Artboard6],
    },
    {
        id: 2,
        title: 'Edemy',
        client: 'Beta Agency',
        category: 'Branding',
        contributors: 'Jane Doe',
        summary: `Beta Agency approached us to create a vibrant brand identity that reflects their creative values and modern approach. Our goal was to combine dynamic typography with an expressive visual language that feels bold and agile.
We worked closely with the marketing team to design a scalable identity system, including a brand palette, iconography, and typography guidelines. The end result was a complete visual transformation that positioned Beta as an innovator in the market.`,
        images: [Artboard3, Artboard4, Artboard1, Artboard2],
    },
    {
        id: 3,
        title: 'EcoCycle',
        client: 'GreenTech Solutions',
        category: 'Web Design',
        contributors: 'Alice Johnson',
        summary: `EcoCycle is a platform dedicated to promoting sustainable living through eco-friendly practices. We were tasked with designing a website that educates users about recycling, upcycling, and reducing waste.
Our team created a clean, intuitive interface with interactive features like waste calculators and educational quizzes. The design incorporates earthy tones and organic shapes to reflect the brand's commitment to sustainability.
The result is a visually appealing and functional website that empowers users to make environmentally conscious decisions.`,
        images: [Artboard4, Artboard5, Artboard6, Artboard1],
    },
    {
        id: 4,
        title: 'BALLE BAZZA',
        client: 'Nexora Tech',
        category: 'Mobile App Design',
        contributors: 'Michael Lee',
        summary: `Nexora Tech needed a mobile app to streamline communication between employees and management. The goal was to create an intuitive platform for task management, notifications, and collaboration.
We designed a sleek, modern app with a focus on usability. Features include real-time messaging, task tracking, and customizable dashboards. The app uses a minimalist color scheme with bold accents to ensure clarity and focus.
The final product received positive feedback from both employees and management, significantly improving workplace efficiency.`,
        images: [BAAZ3, BAAZ, BAAZ4, BAAZ4],
    },
    {
        id: 5,
        title: 'Zenith Studio',
        client: 'Zenith Entertainment',
        category: 'Interior Design',
        contributors: 'Emily Parker',
        summary: `Zenith Studio is a state-of-the-art recording studio designed for musicians and producers. The client wanted a space that combined functionality with creativity, offering top-notch acoustics and a welcoming atmosphere.
Our team crafted a unique interior design featuring soundproof walls, modular furniture, and mood lighting. The aesthetic blends industrial elements with cozy textures, creating an inspiring environment for artists.
The studio has become a popular choice for local musicians, praised for its exceptional design and functionality.`,
        images: [Artboard6, Artboard1, Artboard2, Artboard3],
    },
];
const ProjectGallery = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length);
    const openModal = (project) => {
        setLoading(true);
        setSelectedProject(project);
        setCurrentImageIndex(0);
        setTimeout(() => setLoading(false), 1500);
    };
    return (_jsxs("section", { id: "projects", className: "py-12 bg-white", children: [_jsx("div", { className: "max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: projects.map((project) => (_jsxs("div", { onClick: () => openModal(project), className: "cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform", children: [_jsx("img", { src: project.images[0], alt: project.title, className: "w-full h-64 object-cover" }), _jsxs("div", { className: "p-4 text-left", children: [_jsx("h3", { className: "text-xl font-bold text-gray-800", children: project.title }), _jsx("p", { className: "text-sm text-gray-500", children: project.category })] })] }, project.id))) }), selectedProject && (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4", onClick: () => setSelectedProject(null), children: [_jsx("button", { className: "absolute top-6 right-6 text-white text-3xl z-50 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition", onClick: () => setSelectedProject(null), "aria-label": "Close Modal", children: "\u00D7" }), _jsx("div", { className: "bg-black max-w-7xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative", onClick: (e) => e.stopPropagation(), children: loading ? (_jsxs("div", { className: "flex flex-col items-center justify-center w-full h-96 bg-black bg-opacity-90 rounded-t-lg", role: "alert", "aria-live": "assertive", "aria-label": "Loading project details", children: [_jsxs("svg", { className: "animate-spin h-16 w-16 text-[#F15B5F]", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", "aria-hidden": "true", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "#F15B5F", d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" })] }), _jsx("p", { className: "mt-4 text-[#F15B5F] text-lg font-semibold tracking-wide select-none", children: "Ha Creative's project..." })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "relative", children: [_jsx("button", { className: "absolute top-4 left-4 text-white text-3xl z-50", onClick: prevImage, "aria-label": "Previous Image", children: "<" }), _jsx("img", { src: selectedProject.images[currentImageIndex], alt: selectedProject.title, className: "w-full object-cover rounded-t-lg" }), _jsx("button", { className: "absolute top-4 right-4 text-white text-3xl z-50", onClick: nextImage, "aria-label": "Next Image", children: ">" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 p-6 text-white", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold mb-4", children: selectedProject.title }), _jsxs("div", { className: "mb-4", children: [_jsx("h2", { className: "font-semibold text-lg", children: "Client" }), _jsx("p", { children: selectedProject.client })] }), _jsxs("div", { className: "mb-4", children: [_jsx("h2", { className: "font-semibold text-lg", children: "Category" }), _jsx("p", { children: selectedProject.category })] }), _jsxs("div", { className: "mb-4", children: [_jsx("h2", { className: "font-semibold text-lg", children: "Contributors" }), _jsx("p", { children: selectedProject.contributors })] }), _jsx("button", { onClick: () => setSelectedProject(null), className: "mt-4 inline-block px-4 py-2 bg-[#F15B5F] text-white rounded hover:bg-[#d94c4e]", children: "Back to Projects" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold mb-2", children: "Project Summary" }), _jsx("p", { className: "whitespace-pre-line mb-4", children: selectedProject.summary })] })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Gallery" }), _jsx("div", { className: "grid grid-cols-4 gap-4", children: selectedProject.images.map((image, index) => {
                                                const isLargeImage = index === 0 ||
                                                    index === selectedProject.images.length - 1;
                                                return (_jsx("div", { className: `overflow-hidden rounded-lg border-2 border-white transition-transform duration-300 hover:scale-110 cursor-pointer ${isLargeImage
                                                        ? 'col-span-2 row-span-2'
                                                        : 'col-span-1 row-span-1'}`, onClick: () => setCurrentImageIndex(index), children: _jsx("img", { src: image, alt: `${selectedProject.title} - ${index}`, className: `w-full object-cover rounded-lg ${isLargeImage ? 'h-96' : 'h-32'}` }) }, index));
                                            }) })] })] })) })] }))] }));
};
export default ProjectGallery;
