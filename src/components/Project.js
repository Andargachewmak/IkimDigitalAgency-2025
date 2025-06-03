import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import SocialImage from '../assets/Image/social.png';
import SocioImage from '../assets/Image/socia.png';
import Social from '../assets/Image/socialm.png';
import SocialI from '../assets/Image/socialmedia.png';
// import SocialIm from '../assets/Image/soic.png';
import Video from '../assets/Image/video.png';
import Video1 from '../assets/Image/video1.png';
import Video2 from '../assets/Image/video2.png';
import Video3 from '../assets/Image/video3.png';
import Graphics from '../assets/Image/graphic.png';
import Graphic from '../assets/Image/graphic1.png';
import Graphic1 from '../assets/Image/graphic2.png';
import Graphic2 from '../assets/Image/graphic3.png';
import Graphic3 from '../assets/Image/graphic4.png';
import Face from '../assets/Image/fi.png';
import Face1 from '../assets/Image/face.png';
import Face2 from '../assets/Image/fbin.png';
import Face3 from '../assets/Image/facebook.png';
import Face4 from '../assets/Image/fb.png';
import Face5 from '../assets/Image/insta.png';
import Face6 from '../assets/Image/instagram.png';
import Face7 from '../assets/Image/instafb.png';
import Consult from '../assets/Image/consult.png';
import Consult1 from '../assets/Image/consult1.png';
import Consult2 from '../assets/Image/consult2.png';
import Consult3 from '../assets/Image/consult3.png';
import Consult4 from '../assets/Image/consult4.png';
import Consult5 from '../assets/Image/consult5.png';
import Consult6 from '../assets/Image/connsult6.png';
const CategorySlider = ({ title, projects, onSelectProject, }) => {
    const [page, setPage] = useState(0);
    const cardsPerPage = 4;
    const totalPages = Math.ceil(projects.length / cardsPerPage);
    const currentCards = projects.slice(page * cardsPerPage, (page + 1) * cardsPerPage);
    return (_jsxs("div", { className: "space-y-4", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-800", children: title }), _jsx("div", { className: "overflow-hidden", children: _jsx("div", { className: "flex gap-4 transition-all duration-300", children: currentCards.map((project) => (_jsxs("div", { onClick: () => onSelectProject(project), className: "min-w-[250px] bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer", children: [_jsx("img", { src: project.images[0], alt: project.title, className: "w-full h-40 object-cover" }), _jsxs("div", { className: "p-4", children: [_jsx("h3", { className: "font-bold text-lg", children: project.title }), _jsxs("p", { className: "text-sm text-gray-600", children: [project.summary.substring(0, 60), "..."] })] })] }, project.id))) }) }), _jsx("div", { className: "flex justify-center gap-2", children: Array.from({ length: totalPages }).map((_, i) => (_jsx("button", { onClick: () => setPage(i), className: `w-3 h-3 rounded-full ${i === page ? 'bg-gray-800' : 'bg-gray-400'}` }, i))) })] }));
};
const ProjectGallery = () => {
    // Example: 2 projects per category — expand to 10 as needed
    const projects = [
        // Social Media Marketing 
        {
            id: 1,
            title: 'Social Media Campaign A',
            client: 'Client A',
            category: 'Social Media Marketing ',
            contributors: 'Alice, Bob',
            summary: 'A successful social media marketing campaign for Client A.',
            images: [
                SocialImage,
                SocioImage,
            ],
        },
        {
            id: 2,
            title: 'Social Media Campaign B',
            client: 'Client B',
            category: '',
            contributors: 'Alice, Bob',
            summary: 'Another great campaign with social media influencers.',
            images: [
                Social,
                SocioImage,
            ],
        },
        {
            id: 3,
            title: 'Social Media Campaign B',
            client: 'Client B',
            category: 'Social Media Marketing ',
            contributors: 'Alice, Bob',
            summary: 'Another great campaign with social media influencers.',
            images: [
                SocialI,
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 4,
            title: 'Social Media Campaign B',
            client: 'Client B',
            category: 'Social Media Marketing',
            contributors: 'Alice, Bob',
            summary: 'Another great campaign with social media influencers.',
            images: [
                SocioImage,
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 5,
            title: 'Social Media Campaign B',
            client: 'Client B',
            category: 'Social Media Marketing ',
            contributors: 'Alice, Bob',
            summary: 'Another great campaign with social media influencers.',
            images: [
                SocialI,
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 11,
            title: 'Social Media Campaign B',
            client: 'Client B',
            category: 'Social Media Marketing',
            contributors: 'Alice, Bob',
            summary: 'Another great campaign with social media influencers.',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 11,
            title: 'Social Media Campaign B',
            client: 'Client B',
            category: 'Social Media Marketing ',
            contributors: 'Alice, Bob',
            summary: 'Another great campaign with social media influencers.',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 11,
            title: 'Social Media Campaign B',
            client: 'Client B',
            category: 'Social Media Marketing ',
            contributors: 'Alice, Bob',
            summary: 'Another great campaign with social media influencers.',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 11,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 11,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 11,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 11,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 11,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 11,
            title: '',
            client: '',
            category: ' ',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        // Video Editing
        {
            id: 1,
            title: 'Video Editing Project B',
            client: 'Client B',
            category: 'Video Editing',
            contributors: 'Charlie, Dave',
            summary: 'Creative video editing project for Client B’s product launch.',
            images: [
                Video,
                Video1,
            ],
        },
        {
            id: 2,
            title: 'Video Editing Project C',
            client: 'Client C',
            category: 'Video Editing',
            contributors: 'Charlie, Dave',
            summary: 'Highlight reel and ads created for Client C.',
            images: [
                Video1,
                Video,
            ],
        },
        {
            id: 3,
            title: 'Video Editing Project C',
            client: 'Client C',
            category: 'Video Editing',
            contributors: 'Charlie, Dave',
            summary: 'Highlight reel and ads created for Client C.',
            images: [
                Video2,
                Video3,
            ],
        },
        {
            id: 4,
            title: 'Video Editing Project C',
            client: 'Client C',
            category: 'Video Editing',
            contributors: 'Charlie, Dave',
            summary: 'Highlight reel and ads created for Client C.',
            images: [
                Video3,
                Video2,
            ],
        },
        {
            id: 5,
            title: 'Video Editing Project C',
            client: 'Client C',
            category: 'Video Editing',
            contributors: 'Charlie, Dave',
            summary: 'Highlight reel and ads created for Client C.',
            images: [
                Video2,
                Video,
            ],
        },
        {
            id: 12,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 12,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 12,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 12,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 12,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        // Graphics (Logo, Poster)
        {
            id: 1,
            title: 'Logo Design C',
            client: 'Client C',
            category: 'Graphics (Logo, Poster)',
            contributors: 'Eve, Frank',
            summary: 'Logo and poster design for a rebranding campaign.',
            images: [
                Graphic,
                Graphic1,
            ],
        },
        {
            id: 2,
            title: 'Poster Design D',
            client: 'Client D',
            category: 'Graphics (Logo, Poster)',
            contributors: 'Eve, Frank',
            summary: 'Event poster and flyer design.',
            images: [
                Graphic1,
                Graphic,
            ],
        },
        {
            id: 3,
            title: 'Poster Design D',
            client: 'Client D',
            category: 'Graphics (Logo, Poster)',
            contributors: 'Eve, Frank',
            summary: 'Event poster and flyer design.',
            images: [
                Graphic2,
                Graphics,
            ],
        },
        {
            id: 4,
            title: 'Poster Design D',
            client: 'Client D',
            category: 'Graphics (Logo, Poster)',
            contributors: 'Eve, Frank',
            summary: 'Event poster and flyer design.',
            images: [
                Graphics,
                Graphic3,
            ],
        },
        {
            id: 5,
            title: 'Poster Design D',
            client: 'Client D',
            category: 'Graphics (Logo, Poster)',
            contributors: 'Eve, Frank',
            summary: 'Event poster and flyer design.',
            images: [
                Graphic3,
                Graphic,
            ],
        },
        {
            id: 13,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 13,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 13,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 13,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 13,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        // Paid Advertising (Facebook and Instagram Ads)
        {
            id: 1,
            title: 'Paid Ads Campaign D',
            client: 'Client D',
            category: 'Paid Advertising (Facebook and Instagram Ads)',
            contributors: 'Grace, Heidi',
            summary: 'High ROI paid advertising campaign on Facebook and Instagram.',
            images: [
                Face5,
                Face2,
            ],
        },
        {
            id: 2,
            title: 'Paid Ads Campaign E',
            client: 'Client E',
            category: 'Paid Advertising (Facebook and Instagram Ads)',
            contributors: 'Grace, Heidi',
            summary: 'Retargeting campaign for Client E.',
            images: [
                Face,
                Face1,
            ],
        },
        {
            id: 3,
            title: 'Paid Ads Campaign E',
            client: 'Client E',
            category: 'Paid Advertising (Facebook and Instagram Ads)',
            contributors: 'Grace, Heidi',
            summary: 'Retargeting campaign for Client E.',
            images: [
                Face2,
                Face3,
            ],
        },
        {
            id: 4,
            title: 'Paid Ads Campaign E',
            client: 'Client E',
            category: 'Paid Advertising (Facebook and Instagram Ads)',
            contributors: 'Grace, Heidi',
            summary: 'Retargeting campaign for Client E.',
            images: [
                Face4,
                Face5,
            ],
        },
        {
            id: 5,
            title: 'Paid Ads Campaign E',
            client: 'Client E',
            category: 'Paid Advertising (Facebook and Instagram Ads)',
            contributors: 'Grace, Heidi',
            summary: 'Retargeting campaign for Client E.',
            images: [
                Face6,
                Face7,
            ],
        },
        {
            id: 14,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 14,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 14,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 14,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 14,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        // Consulting & Social Media Management
        {
            id: 1,
            title: 'Social Media Consulting E',
            client: 'Client E',
            category: 'Consulting & Social Media Management',
            contributors: 'Ivan, Judy',
            summary: 'Consulting and management of social media presence for Client E.',
            images: [
                Consult,
                Consult1,
            ],
        },
        {
            id: 2,
            title: 'Social Media Management F',
            client: 'Client F',
            category: 'Consulting & Social Media Management',
            contributors: 'Ivan, Judy',
            summary: 'Managing Client F’s social media accounts.',
            images: [
                Consult3,
                Consult2,
            ],
        },
        {
            id: 3,
            title: 'Social Media Management F',
            client: 'Client F',
            category: 'Consulting & Social Media Management',
            contributors: 'Ivan, Judy',
            summary: 'Managing Client F’s social media accounts.',
            images: [
                Consult2,
                Consult,
            ],
        },
        {
            id: 4,
            title: 'Social Media Management F',
            client: 'Client F',
            category: 'Consulting & Social Media Management',
            contributors: 'Ivan, Judy',
            summary: 'Managing Client F’s social media accounts.',
            images: [
                Consult4,
                Consult5,
            ],
        },
        {
            id: 5,
            title: 'Social Media Management F',
            client: 'Client F',
            category: 'Consulting & Social Media Management',
            contributors: 'Ivan, Judy',
            summary: 'Managing Client F’s social media accounts.',
            images: [
                Consult5,
                Consult6,
            ],
        },
        {
            id: 15,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 15,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 15,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 15,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
        {
            id: 15,
            title: '',
            client: '',
            category: '',
            contributors: '',
            summary: '',
            images: [
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
                'https://via.placeholder.com/800x400?text=Social+Media+Campaign+B+2',
            ],
        },
    ];
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const nextImage = () => setCurrentImageIndex((prev) => { var _a; return (prev + 1) % ((_a = selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.images.length) !== null && _a !== void 0 ? _a : 1); });
    const prevImage = () => setCurrentImageIndex((prev) => { var _a, _b; return (prev - 1 + ((_a = selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.images.length) !== null && _a !== void 0 ? _a : 1)) % ((_b = selectedProject === null || selectedProject === void 0 ? void 0 : selectedProject.images.length) !== null && _b !== void 0 ? _b : 1); });
    const categories = [
        'Social Media Marketing ',
        'Video Editing',
        'Graphics (Logo, Poster)',
        'Paid Advertising (Facebook and Instagram Ads)',
        'Consulting & Social Media Management',
    ];
    // Filter state
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    return (_jsxs("section", { id: "projects", className: "py-12 bg-white", children: [_jsx("div", { className: "text-center max-w-7xl mx-auto", children: _jsx("h2", { className: "text-4xl sm:text-5xl font-extrabold mb-12 text-center text-gray-900", style: { fontFamily: "Anton, sans-serif" }, children: "Projects" }) }), _jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-10", children: categories.map((category) => (_jsx("button", { type: "button", className: `px-5 py-2 rounded-full border font-semibold transition ${selectedCategory === category
                        ? 'bg-gray-800 text-white border-gray-800'
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'}`, onClick: () => {
                        setSelectedCategory(category);
                        setTimeout(() => {
                            const section = document.getElementById('projects');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                        }, 150);
                    }, children: category }, category))) }), _jsx("div", { className: "max-w-screen-xl mx-auto px-4 space-y-16", children: (() => {
                    const projectsInCategory = projects.filter((p) => p.category === selectedCategory);
                    return (_jsx(CategorySlider, { title: selectedCategory, projects: projectsInCategory, onSelectProject: (project) => {
                            setSelectedProject(project);
                            setCurrentImageIndex(0);
                        } }, selectedCategory));
                })() }), selectedProject && (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4", onClick: () => setSelectedProject(null), children: [_jsx("button", { className: "absolute top-6 right-6 text-white text-3xl z-50 bg-black bg-opacity-70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-90 transition", onClick: () => setSelectedProject(null), "aria-label": "Close Modal", children: "\u00D7" }), _jsxs("div", { className: "bg-black max-w-7xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh] relative", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "relative", children: [_jsx("button", { className: "absolute top-4 left-4 text-white text-3xl z-50", onClick: prevImage, "aria-label": "Previous Image", children: "<" }), _jsx("img", { src: selectedProject.images[currentImageIndex], alt: selectedProject.title, className: "w-full object-cover rounded-t-lg max-h-[400px] mx-auto" }), _jsx("button", { className: "absolute top-4 right-4 text-white text-3xl z-50", onClick: nextImage, "aria-label": "Next Image", children: ">" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 p-6 text-white", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold mb-4", children: selectedProject.title }), _jsxs("div", { className: "mb-4", children: [_jsx("h2", { className: "font-semibold text-lg", children: "Client" }), _jsx("p", { children: selectedProject.client })] }), _jsxs("div", { className: "mb-4", children: [_jsx("h2", { className: "font-semibold text-lg", children: "Category" }), _jsx("p", { children: selectedProject.category })] }), _jsxs("div", { className: "mb-4", children: [_jsx("h2", { className: "font-semibold text-lg", children: "Contributors" }), _jsx("p", { children: selectedProject.contributors })] }), _jsx("button", { onClick: () => setSelectedProject(null), className: "mt-4 inline-block px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700", children: "Back to Projects" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold mb-2", children: "Project Summary" }), _jsx("p", { className: "whitespace-pre-line mb-4", children: selectedProject.summary })] })] }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Gallery" }), _jsx("div", { className: "grid grid-cols-4 gap-4", children: selectedProject.images.map((image, index) => {
                                            const isLargeImage = index === 0 || index === selectedProject.images.length - 1;
                                            return (_jsx("div", { className: `overflow-hidden rounded-lg border-2 border-white transition-transform duration-300 hover:scale-110 cursor-pointer ${isLargeImage ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`, onClick: () => setCurrentImageIndex(index), children: _jsx("img", { src: image, alt: `${selectedProject.title} - ${index}`, className: `w-full object-cover rounded-lg ${isLargeImage ? 'h-96' : 'h-32'}` }) }, index));
                                        }) })] })] })] }))] }));
};
export default ProjectGallery;
