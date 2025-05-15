import React, { useState } from 'react';
import Artboard1 from '../assets/Image/Artboard1.jpg';
import Artboard2 from '../assets/Image/Artboard2.jpg';
import Artboard3 from '../assets/Image/Artboard3.jpg';
import Artboard4 from '../assets/Image/Artboard4.jpg';
import Artboard5 from '../assets/Image/Artboard5.jpg';
import Artboard6 from '../assets/Image/Artboard6.jpg';

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
    title: 'Project Beta',
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
    title: 'Nexora App',
    client: 'Nexora Tech',
    category: 'Mobile App Design',
    contributors: 'Michael Lee',
    summary: `Nexora Tech needed a mobile app to streamline communication between employees and management. The goal was to create an intuitive platform for task management, notifications, and collaboration.
We designed a sleek, modern app with a focus on usability. Features include real-time messaging, task tracking, and customizable dashboards. The app uses a minimalist color scheme with bold accents to ensure clarity and focus.
The final product received positive feedback from both employees and management, significantly improving workplace efficiency.`,
    images: [Artboard2, Artboard3, Artboard4, Artboard5],
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

type Project = {
  id: number;
  title: string;
  client: string;
  category: string;
  contributors: string;
  summary: string;
  images: string[];
};

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject!.images.length);

  const prevImage = () =>
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + selectedProject!.images.length) %
        selectedProject!.images.length
    );

  const openModal = (project: Project) => {
    setLoading(true);
    setSelectedProject(project);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <section className="py-12 bg-white">
      {/* Project Grid */}
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-black max-w-7xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl z-50"
              onClick={() => setSelectedProject(null)}
              aria-label="Close Modal"
            >
              &times;
            </button>

            {/* Loading State - Arrow Rotates Around Circle */}
            {loading ? (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
                <div className="relative w-[250px] h-[250px]">
                  {/* Outer Circle Border */}
                  <div className="absolute inset-0 rounded-full border-4 border-white border-opacity-40"></div>

                  {/* Rotating Arrow Around Circle */}
                  <div className="absolute inset-0 animate-spin-around">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Center Text */}
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold z-10 animate-pulse">
                    Loading...
                  </p>
                </div>
              </div>
            ) : (
              <>
                {/* Image Section */}
                <div className="relative">
                  <button
                    className="absolute top-4 left-4 text-white text-3xl z-50"
                    onClick={prevImage}
                    aria-label="Previous Image"
                  >
                    &#60;
                  </button>
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="w-full object-cover rounded-t-lg"
                  />
                  <button
                    className="absolute top-4 right-4 text-white text-3xl z-50"
                    onClick={nextImage}
                    aria-label="Next Image"
                  >
                    &#62;
                  </button>
                </div>

                {/* Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 text-white">
                  {/* Left Column */}
                  <div>
                    <h1 className="text-3xl font-bold mb-4">
                      {selectedProject.title}
                    </h1>
                    <div className="mb-4">
                      <h2 className="font-semibold text-lg">Client</h2>
                      <p>{selectedProject.client}</p>
                    </div>
                    <div className="mb-4">
                      <h2 className="font-semibold text-lg">Category</h2>
                      <p>{selectedProject.category}</p>
                    </div>
                    <div className="mb-4">
                      <h2 className="font-semibold text-lg">Contributors</h2>
                      <p>{selectedProject.contributors}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="mt-4 inline-block px-4 py-2 bg-[#F15B5F] text-white rounded hover:bg-[#d94c4e]"
                    >
                      Back to Projects
                    </button>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Project Summary</h3>
                    <p className="whitespace-pre-line mb-4">
                      {selectedProject.summary}
                    </p>
                  </div>
                </div>

                {/* Gallery Section */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Gallery</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {selectedProject.images.map((image, index) => {
                      const isLargeImage =
                        index === 0 ||
                        index === selectedProject.images.length - 1;
                      return (
                        <div
                          key={index}
                          className={`overflow-hidden rounded-lg border-2 border-white transition-transform duration-300 hover:scale-110 cursor-pointer ${
                            isLargeImage
                              ? 'col-span-2 row-span-2'
                              : 'col-span-1 row-span-1'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <img
                            src={image}
                            alt={`${selectedProject.title} - ${index}`}
                            className={`w-full object-cover rounded-lg ${
                              isLargeImage ? 'h-96' : 'h-32'
                            }`}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;