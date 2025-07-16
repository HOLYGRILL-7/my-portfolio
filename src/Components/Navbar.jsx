import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 px-10">
      {/* Logo Section */}
      <div className="logo-section">
        <a href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <span className="text-xl font-bold text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
            DOD
          </span>
        </a>
      </div>

      {/* Menu Section */}
      <div className="menus-section">
        <ul className="flex justify-center items-center gap-6">
          <li>
            <a
              href="/"
              className="hover:text-violet-600 font-medium transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:text-violet-600 font-medium transition-colors duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="hover:text-violet-600 font-medium transition-colors duration-200"
            >
              About
            </a>
          </li>
        </ul>
      </div>

      {/* Chat Icon */}
      <div className="chat-section">
        <a href="/chat">
          <button className="relative bg-black text-white h-10 w-10 rounded-full shadow-lg hover:bg-violet-700 hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center group">
            {/* Chat Icon */}
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>

            {/* Notification dot */}
            <div className="absolute -top-1 -right-0 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
