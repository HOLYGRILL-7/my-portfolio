import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Eye,
  Code,
  Smartphone,
  Monitor,
  Zap,
  Play,
} from "lucide-react";

const ClickToPlayVideo = ({ src, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current?.play();
  };

  return (
    <div className="relative w-full h-full bg-black">
      <video
        ref={videoRef}
        src={src}
        className={className}
        preload="metadata"
        playsInline
        controls={isPlaying}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play video"
          className="cursor-pointer absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300"
        >
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-lg">
            <Play size={28} className="text-gray-900 ml-1" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
};

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Pool",
      description:
        "A React Native app that lets families save toward shared goals together, with real payments powered by Paystack and secure fund routing through Paystack subaccounts. Firebase Cloud Functions handle the backend end to end.",
      image: "/pool.png",
      category: "mobile",
      technologies: ["React Native", "Paystack", "Firebase Cloud Functions"],
      liveUrl: "",
      githubUrl: "https://github.com/HOLYGRILL-7/Pool-Fintech",
      featured: true,
    },
    {
      id: 2,
      title: "Kofi",
      description:
        "An AI chatbot that brings Ghanaian culture and tourism to life, built with Streamlit and the Gemini API. Wrapped in a Kente-inspired UI that makes every conversation feel distinctly Ghanaian.",
      image: "/kofi-thumbnail.jpg",
      category: "web",
      technologies: ["Streamlit", "Gemini API", "Python"],
      liveUrl: "",
      githubUrl: "https://github.com/HOLYGRILL-7/Cultural_Tourism-chatbot",
      featured: true,
    },
    {
      id: 3,
      title: "Sika",
      description:
        "An AI-powered personal finance tracker built in React Native, helping users log transactions, hit savings goals, and get smart insight into their spending.",
      image: "/sika-thumbnail.jpg",
      category: "mobile",
      technologies: ["React Native", "Firebase", "AI"],
      liveUrl: "",
      githubUrl: "https://github.com/HOLYGRILL-7/my-Sika-react-native",
      featured: true,
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
    <div className="min-h-screen bg-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What I've Built
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real products, not tutorials — full-stack apps with AI woven in,
            built end-to-end from idea to something people can actually use.
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
                  {project.video ? (
                    <ClickToPlayVideo
                      src={project.video}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
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
                          className="bg-terracotta text-white p-3 rounded-full hover:brightness-90 transition duration-200 hover:scale-110 transform"
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
                    </>
                  )}
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
                        className="px-3 py-1 bg-terracotta/10 text-terracotta rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-terracotta hover:brightness-75 font-medium transition"
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
                className={`cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-terracotta text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-terracotta/10 hover:text-terracotta shadow-md"
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
                {project.video ? (
                  <ClickToPlayVideo
                    src={project.video}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                  </>
                )}
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
                    className="flex items-center gap-1 text-terracotta hover:brightness-75 text-sm font-medium transition"
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
          <div className="bg-terracotta rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together!
            </p>
            <Link to="/GetInTouch">
              <button className="cursor-pointer bg-white text-terracotta px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
