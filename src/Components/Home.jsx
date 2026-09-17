import React from "react";
import myProfile from "../assets/myProfileSketch.png";
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import GetInTouch from "./GetInTouch";

const Home = () => {
    return (
        <div className="mt-20 ">
            <div className="grid grid-cols-2 gap-2 items-start">
                <div className="first-container space-y-6">
                    <h1 className="font-black text-8xl leading-none text-gray-900">
                        Dream.
                        <br />
                        Plan.
                        <br />
                        <span className="text-terracotta">Build.</span>
                    </h1>

                    <ul className="my-10 space-y-5 max-w-lg">
                        {/* <li className="flex items-start gap-2 text-xl font-medium uppercase tracking-wider text-gray-600">
                            <span className="mt-3 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"></span>I build fast,
                            functional web experiences with React and modern JavaScript — currently shipping an AI tool
                            that helps NGOs track grant compliance.
                        </li> */}
                        <li className="flex items-start gap-2 text-xl font-medium uppercase tracking-wider text-gray-600">
                            <span className="mt-3 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"></span>I build fast,
                            functional web experiences.
                        </li>
                        <li className="flex items-start gap-2 text-sm font-medium uppercase tracking-wider text-gray-500">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"></span>
                            Currently building GrantGuard AI — open to opportunities
                        </li>
                    </ul>

                    <div className="">
                        <div className="second flex flex-wrap gap-4 ">
                            <Link to="/GetInTouch">
                                <button className="flex items-center gap-2 mt-7 font-medium uppercase tracking-wider bg-transparent border-2 border-terracotta text-terracotta h-11 px-6 rounded-lg hover:scale-105 hover:bg-terracotta hover:text-white transition-all duration-300 ease-in-out">
                                    Get In Touch
                                    <ArrowRight size={16} />
                                </button>
                            </Link>

                            <Link to="/Projects">
                                <button className="font-medium  uppercase mt-7 tracking-wider bg-transparent border-2 border-terracotta text-terracotta h-11 px-6 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out">
                                    Browse Projects
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="second-container flex flex-col items-center gap-8 pt-5">
                    <div className="bg-white rounded-full border-2 border-solid border-slate-200 h-[30rem] w-[30rem] relative flex items-center justify-center -mt-15 shadow-lg">
                        <div className="rounded-full border-2 border-dotted border-violet-300 h-[28rem] w-[28rem] flex items-center justify-center">
                            <img
                                src={myProfile}
                                alt="Profile"
                                className="h-[28rem] w-[28rem] object-cover rounded-full"
                            />
                        </div>
                    </div>

                    <div className="w-full max-w-2xl mt-5">
                        <div className="flex flex-nowrap gap-8">
                            <div>
                                <p className="text-5xl font-bold text-center text-terracotta">3</p>
                                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mt-1">
                                    Projects Shipped
                                </p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-center text-terracotta">1</p>
                                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mt-1">
                                    AI Tool in Production
                                </p>
                            </div>
                            <div>
                                <p className="text-5xl font-bold text-center text-terracotta">BSc</p>
                                <p className="text-xs font-medium uppercase tracking-wider text-gray-500 mt-1">
                                    Physics &amp; Computing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
