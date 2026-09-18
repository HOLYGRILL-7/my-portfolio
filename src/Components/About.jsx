import React from "react";
import {
  Download,
  Sparkles,
  Layers,
  Package,
  Hammer,
  Terminal,
  Wand2,
  LayoutTemplate,
  PenTool,
  Palette,
} from "lucide-react";

const toolbox = [
  {
    category: "AI & LLM",
    items: [
      { name: "Gemini API", icon: "googlegemini" },
      { name: "Prompt Engineering", Fallback: Sparkles },
      { name: "RAG Fundamentals", Fallback: Layers },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "React Native", icon: "react" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Zustand", Fallback: Package },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Vite", icon: "vite" },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Expo", icon: "expo" },
      { name: "EAS Build", Fallback: Hammer },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Firebase", icon: "firebase" },
      { name: "Firestore", icon: "firebase" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Streamlit", icon: "streamlit" },
      { name: "GitHub CLI", Fallback: Terminal },
      { name: "Claude Code", icon: "claude" },
      { name: "Linux", icon: "linux" },
    ],
  },
  {
    category: "AI Design & Prototyping",
    items: [
      { name: "Ideogram", Fallback: Wand2 },
      { name: "Stitch", Fallback: LayoutTemplate },
      { name: "Banani", Fallback: PenTool },
      { name: "Logo Diffusion", Fallback: Palette },
      { name: "Figma", icon: "figma" },
    ],
  },
];

const About = () => {
  return (
    <div className="mt-3 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="inline font-bold text-3xl sm:text-4xl text-gray-900">My Signature</h1>
        <h1 className="inline font-bold text-3xl sm:text-4xl text-terracotta">.</h1>

        <div className="flex items-start gap-4 mt-3">
          <div className="bg-terracotta h-25 w-1 rounded-full mt-1" />
          <p className="font-medium leading-relaxed text-gray-700 max-w-3xl">
            I'm Praise — full-stack developer, physicist at heart, and for a
            long time, I undersold both. I'd rather blend into the background
            than take up space, like a flat character in someone else's
            story. Not anymore. This portfolio is my first real, deliberate
            statement — proof that I'm done playing small. Outside of code,
            I'm probably somewhere with good people and a good conversation.
          </p>
        </div>

        <a
          href="/resume.pdf"
          download
          className="cursor-pointer inline-flex items-center gap-2 mt-6 font-medium uppercase tracking-wider bg-transparent border-2 border-terracotta text-terracotta px-6 py-3 rounded-lg hover:bg-terracotta hover:text-white transition-all duration-300 ease-in-out"
        >
          Download Resume
          <Download size={16} />
        </a>
      </div>

      {/* The Toolbox */}
      <div className="mb-12">
        <h2 className="font-bold text-2xl mb-6 text-gray-800">The Toolbox</h2>
        <div className="space-y-6">
          {toolbox.map(({ category, items }) => (
            <div key={category}>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-3">
                {items.map(({ name, icon, Fallback }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 bg-white border border-terracotta/20 rounded-full px-3 py-1.5 text-sm font-medium text-gray-900 shadow-sm"
                  >
                    {icon ? (
                      <img
                        src={`https://cdn.simpleicons.org/${icon}`}
                        alt=""
                        className="w-4 h-4"
                      />
                    ) : (
                      <Fallback size={16} className="text-terracotta" />
                    )}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
