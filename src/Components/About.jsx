import React from "react";
import Weather from "./Weather";
import flag from "../assets/f.jpg";

const About = () => {
  const techStack = [
    { name: "HTML5", color: "bg-orange-500" },
    { name: "CSS3", color: "bg-blue-500" },
    { name: "Tailwind", color: "bg-cyan-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-blue-600" },
    { name: "TeamWork", color: "bg-green-600" },
  ];

  return (
    <div className="mt-3 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="inline font-bold text-5xl sm:text-6xl md:text-7xl">About Me</h1>
        <h1 className="inline font-bold text-5xl sm:text-6xl md:text-7xl text-violet-700">.</h1>

        <div className="flex items-start gap-4 mt-3">
          <div className="bg-violet-700 h-25 w-1 rounded-full mt-1" />
          <p className="font-medium leading-relaxed text-gray-700">
            Well, I have a knack for breathing life into everything I do, and
            frontend is not an exception to that rule.
            <br />
            With a little time on my hands and space, I can certainly breathe
            life into every detail. I do love a challenge...
            <br />
            BSc Physics – [Kwame Nkrumah University Of Science And Technology] -
            (2021-2024)
            <br />
            Web Developer & Intern - [CodeTrain Africa], [Prodigy Infotech]
            (Currently)
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tech Stack Section */}
        <div>
          <h2 className="font-bold text-2xl mb-4 text-gray-800">My Stack</h2>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-sm border w-full h-48 border-gray-200 flex flex-col">
            <div className="grid grid-cols-2 gap-2 flex-1">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white text-gray-800 py-2 px-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer group flex items-center"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${tech.color}`}></div>
                    <span className="font-medium text-sm">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div>
          <h2 className="font-bold text-2xl mb-4 text-gray-800">
            My Special Place
          </h2>

          <div className="relative">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={flag}
                alt="Ghana Flag"
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Weather Widget */}
            <div className="absolute top-4 left-4 bg-white/50 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-white/20">
              <Weather lat={5.6037} lon={-0.187} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
