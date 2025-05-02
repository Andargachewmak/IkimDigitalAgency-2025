
import Artboard13Copy5 from '../assets/Image/Artboard1.jpg';
import Artboard13Copy6 from '../assets/Image/Artboard2.jpg';
import Artboard13Copy4 from '../assets/Image/Artboard3.jpg';
import Artboard13Copy3 from '../assets/Image/Artboard4.jpg';
import Artboard13Copy2 from '../assets/Image/Artboard5.jpg';
import Artboard13Copy1 from '../assets/Image/Artboard6.jpg';

const Projects = () => {
  // Define project data with unique titles and descriptions
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A cutting-edge design for a modern tech startup.",
      imageUrl: Artboard13Copy5,
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Branding and identity for a creative agency.",
      imageUrl: Artboard13Copy6,
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Print materials for a global marketing campaign.",
      imageUrl: Artboard13Copy4,
    },
    {
      id: 4,
      title: "Project Delta",
      description: "Interactive website design for an e-commerce platform.",
      imageUrl: Artboard13Copy3,
    },
    {
      id: 5,
      title: "Project Epsilon",
      description: "Editorial layout for a fashion magazine.",
      imageUrl: Artboard13Copy2,
    },
    {
      id: 6,
      title: "Project Zeta",
      description: "Logo redesign for a luxury lifestyle brand.",
      imageUrl: Artboard13Copy1,
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-white text-center">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 md:mb-0">
            <span className="text-black">Our </span>
            <span className="text-[#F15B5F]">Work</span>
          </h2>

          {/* Subheading */}
          <p className="text-sm sm:text-base font-medium leading-relaxed max-w-xs text-left mt-4 md:mt-0">
            From bold brand identities to eye-catching print and digital materials, we bring your message to life and make sure it stands out.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Dynamically Generate Cards */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={project.imageUrl} // Use the image URL from the project data
                alt={`Project ${project.title}`}
                className="w-full h-48 object-cover rounded-lg"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-[#F15B5F] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-white">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;