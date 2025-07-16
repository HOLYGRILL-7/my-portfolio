import React from "react";
import myProfile from "../assets/myProfile.jpg";
import { Link } from "react-router-dom";
import GetInTouch from "./GetInTouch";

const Home = () => {
  return (
    <div className="mt-30 px-10">
      <div className="grid grid-cols-2 gap-2">
        <div className="first-container space-y-4">
          <h3 className="text-xl"> Hey, I'm Praise👋🏾</h3>

          <h1 className="inline font-bold text-7xl text-violet-700">Front</h1>
          <h1 className="inline font-bold text-7xl">end</h1>
          <h1 className="font-bold text-7xl">Developer</h1>

          <p className="mt-10 text-lg">
            I'm a frontend developer based in Ghana, home of beautiful
            landscapes and color blends from nature. I do know a thing two about
            beauty.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/GetInTouch">
              <button className="bg-black text-white h-10 px-6 rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 ease-in-out">
                Get In Touch
              </button>
            </Link>

            <Link to="/Projects">
              <button className="bg-gray-300 text-black h-10 px-6 rounded-lg shadow-lg hover:bg-gray-400 hover:scale-105 transition-all duration-300 ease-in-out">
                Browse Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="second-container flex justify-center items-center py-10">
          <div className="bg-white rounded-full border-2 border-solid border-slate-200 h-88 w-88 relative flex items-center justify-center -mt-15 transition-all duration-300 hover:-translate-y-2 shadow-lg">
            <div className="rounded-full border-2 border-dotted border-violet-300 h-80 w-80 flex items-center justify-center">
              <img
                src={myProfile}
                alt="Profile"
                className="h-80 w-80 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
