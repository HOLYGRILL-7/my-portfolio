import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Smartphone,
  Monitor,
  Zap,
} from "lucide-react";
import image from "../assets/iquote.png";
import image1 from "../assets/time.png";
import image2 from "../assets/Portfolio.png";
import image3 from "../assets/Shopmart.png";

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Mart",
      description:
        "A dashing site for your online shopping needs.Your living room can come alive now with the help of this site",
      image: image3,
      category: "web",
      technologies: ["React", "Javascript", "Tailwind CSS", ],
      liveUrl: "",
      githubUrl: "https://github.com/HOLYGRILL-7/Shopmart",
      featured: true,
    },
    {
      id: 2,
      title: "TO-DO App",
      description:
        "A modern task management application with drag-and-drop functionality, team collaboration features, and deadline tracking.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["React", "Javascript", "Tailwind CSS", ],
      liveUrl: "",
      githubUrl: "https://github.com/HOLYGRILL-7/MyFav-TodoApp/tree/master",
      featured: true,
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and beautiful weather animations.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Weather API", "Expo"],
      liveUrl: "",
      githubUrl: "https://github.com/HOLYGRILL-7/Weather-Map",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.",
      image: image2,
      category: "web",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false,
    },
    {
      id: 5,
      title: "Bible Quote App",
      description:
        "A beautiful app aimed at solving the forgetfulness of Bible verses by providing users with the platform to search for the scriptures they need.",
      image: image,
      category: "mobile",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "https://quote-i.netlify.app/",
      githubUrl: "https://github.com/HOLYGRILL-7/I-QUOTE",
      featured: false,
    },
    {
      id: 6,
      title: "Stop Watch",
      description:
        "Productivity coheres with time management, the perfect setting for building a stopwatch app that tracks, lapses and does all the other a watch does.",
      image: image1,
      category: "extension",
      technologies: ["JavaScript", "Chrome API", "CSS3"],
      liveUrl: "https://enhanced.tiiny.site/",
      githubUrl: "https://github.com/HOLYGRILL-7/PRODIGY_WD_02-StopWatch-",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: Monitor },
    { id: "web", name: "Web Apps", icon: Code },
    { id: "mobile", name: "Mobile Apps", icon: Smartphone },
    { id: "extension", name: "Extensions", icon: Zap },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in
            frontend development, user experience design, and modern web
            technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Project Actions */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <a
                      href={project.liveUrl}
                      className="bg-violet-600 text-white p-3 rounded-full hover:bg-violet-700 transition-colors duration-200 hover:scale-110 transform"
                    >
                      <Eye size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors duration-200 hover:scale-110 transform"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium transition-colors"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-violet-600 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-violet-50 hover:text-violet-600 shadow-md"
                }`}
              >
                <IconComponent size={18} />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-1 text-violet-600 hover:text-violet-700 text-sm font-medium transition-colors"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-700 text-sm font-medium transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together!
            </p>
            <button className="bg-white text-violet-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
