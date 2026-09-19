import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ArrowRight, Menu, X } from "lucide-react";
import myProfile from "../assets/myProfileSketch.webp";

const getAccraTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Accra",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [accraTime, setAccraTime] = useState(getAccraTime);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setAccraTime(getAccraTime()), 60000);
    return () => clearInterval(id);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `cursor-pointer font-medium uppercase tracking-wider text-gray-900 pb-1 border-b-2 ${
      isActive ? "border-terracotta" : "border-transparent"
    }`;

  return (
    <div className="relative px-4 sm:px-6 lg:px-10 py-4">
      <div className="flex justify-between items-center">
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
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-base font-medium text-gray-900">
                PJ
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Full-Stack AI Developer
              </span>
            </div>
          </Link>
        </div>

        {/* Menu Section (desktop) */}
        <div className="menus-section hidden lg:block">
          <ul className="flex justify-center items-center gap-6">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} className={navLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-wide text-gray-500 whitespace-nowrap">
            Accra · {accraTime}
          </span>

          <button
            type="button"
            aria-label="Search"
            className="cursor-pointer flex items-center gap-1 border border-gray-300 rounded-md px-2 py-1 text-gray-400 hover:text-terracotta hover:border-terracotta transition-colors duration-200"
          >
            <Search size={14} />
            <span className="font-mono text-xs tracking-wide">⌘K</span>
          </button>

          <Link to="/GetInTouch">
            <button className="cursor-pointer flex items-center gap-1 bg-[#1a1816] border-2 text-white text-sm font-medium uppercase tracking-wider h-9 px-4 rounded-lg">
              Get in touch
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>

        {/* Mobile: Get in touch + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <Link to="/GetInTouch">
            <button className="cursor-pointer flex items-center gap-1 bg-[#1a1816] text-white text-xs font-medium uppercase tracking-wider h-9 px-3 rounded-lg">
              Get in touch
              <ArrowRight size={13} />
            </button>
          </Link>
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="cursor-pointer text-gray-900 p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={navLinkClass}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
            Accra · {accraTime}
          </span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
