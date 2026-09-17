import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import myProfile from "../assets/myProfileSketch.png";

const getAccraTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Accra",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

const Navbar = () => {
  const [accraTime, setAccraTime] = useState(getAccraTime);

  useEffect(() => {
    const id = setInterval(() => setAccraTime(getAccraTime()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex justify-between items-center p-4 ">
      {/* Logo Section */}
      <div className="logo-section">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={myProfile}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-medium text-gray-900 group-hover:text-violet-600 transition-colors duration-300">
              PJ
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Full-Stack Developer
            </span>
          </div>
        </Link>
      </div>

      {/* Menu Section */}
      <div className="menus-section">
        <ul className="flex justify-center items-center gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/projects", label: "Projects" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `font-medium uppercase tracking-wider text-gray-900 hover:text-violet-600 pb-1 border-b-2 transition-colors duration-200 ${
                    isActive ? "border-terracotta" : "border-transparent"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs uppercase tracking-wide text-gray-500 whitespace-nowrap">
          Accra · {accraTime}
        </span>

        <button
          type="button"
          aria-label="Search"
          className="flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1 text-gray-400 hover:text-violet-600 hover:border-violet-300 transition-colors duration-200"
        >
          <Search size={14} />
          <span className="font-mono text-xs tracking-wide">⌘K</span>
        </button>

        <Link to="/GetInTouch">
          <button className="flex items-center gap-1 bg-transparent border-2 border-terracotta text-terracotta text-sm font-medium uppercase tracking-wider h-9 px-4 rounded-lg hover:bg-terracotta hover:text-white hover:scale-105 transition-all duration-300 ease-in-out">
            Get in touch
            <ArrowRight size={14} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
