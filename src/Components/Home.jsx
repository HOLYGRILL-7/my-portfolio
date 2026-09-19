import React from "react";
import myProfile from "../assets/myProfileSketch.webp";
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import GetInTouch from "./GetInTouch";

const Home = () => {
    return (
        <div className="mt-10 md:mt-12 px-4 sm:px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-2 items-start">
                {/* Heading and gaps only shrink when the viewport is shorter than the column needs (~712px md, ~696px lg). */}
                <div className="first-container space-y-6 md:[--hero-heading:clamp(3rem,calc(24vh_-_6.18rem),4.5rem)] md:[--hero-gap:clamp(1.5rem,calc(18vh_-_5.51rem),2.5rem)] md:[--hero-btn-mt:clamp(0.75rem,calc(12vh_-_3.59rem),1.75rem)] lg:[--hero-heading:clamp(3.5rem,calc(24vh_-_4.44rem),6rem)] lg:[--hero-gap:clamp(1.5rem,calc(18vh_-_5.33rem),2.5rem)] lg:[--hero-btn-mt:clamp(0.75rem,calc(12vh_-_3.47rem),1.75rem)]">
                    <h1 className="font-black text-5xl sm:text-6xl md:text-[length:var(--hero-heading)] leading-none text-gray-900">
                        Dream.
                        <br />
                        Plan.
                        <br />
                        <span className="text-terracotta">Build.</span>
                    </h1>

                    <ul className="my-10 md:my-[var(--hero-gap)] space-y-5 max-w-lg">
                        {/* <li className="flex items-start gap-2 text-xl font-medium uppercase tracking-wider text-gray-600">
                            <span className="mt-3 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"></span>I build fast,
                            functional web experiences with React and modern JavaScript — currently shipping an AI tool
                            that helps NGOs track grant compliance.
                        </li> */}
                        <li className="flex items-start gap-2 text-lg sm:text-xl font-medium uppercase tracking-wider text-gray-600">
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
                                <button className="cursor-pointer flex items-center gap-2 mt-7 md:mt-[var(--hero-btn-mt)] font-medium uppercase tracking-wider bg-[#1a1816] text-white h-11 px-6 rounded-lg hover:scale-105  hover:text-white transition-all duration-300 ease-in-out">
                                    Get In Touch
                                    <ArrowRight size={16} />
                                </button>
                            </Link>

                            <Link to="/Projects">
                                <button className="cursor-pointer font-medium  uppercase mt-7 md:mt-[var(--hero-btn-mt)] tracking-wider bg-transparent border-2 border-terracotta text-terracotta h-11 px-6 rounded-lg hover:scale-105 hover:bg-terracotta hover:text-white transition-all duration-300 ease-in-out">
                                    Browse Projects
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="second-container flex flex-col items-center gap-8 pt-5">
                    <div className="bg-white rounded-full border-2 border-solid border-slate-200 h-56 w-56 sm:h-72 sm:w-72 md:[--photo:clamp(12rem,calc(100vh_-_15.25rem),24rem)] lg:[--photo:clamp(12rem,calc(100vh_-_15.25rem),30rem)] md:h-[var(--photo)] md:w-[var(--photo)] relative flex items-center justify-center mt-0 md:-mt-15 shadow-lg">
                        <div className="rounded-full h-52 w-52 sm:h-64 sm:w-64 md:h-[calc(var(--photo)_-_2rem)] md:w-[calc(var(--photo)_-_2rem)] flex items-center justify-center">
                            <img
                                src={myProfile}
                                alt="Profile"
                                className="h-52 w-52 sm:h-64 sm:w-64 md:h-[calc(var(--photo)_-_2rem)] md:w-[calc(var(--photo)_-_2rem)] object-cover rounded-full"
                            />
                        </div>
                    </div>

                    <div className="w-full max-w-2xl mt-5">
                        <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-8">
                            <div>
                                <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-terracotta">3</p>
                                <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-gray-500 mt-1 text-center">
                                    Projects Shipped
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-terracotta">1</p>
                                <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-gray-500 mt-1 text-center">
                                    AI Tool in Production
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-terracotta">BSc</p>
                                <p className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-gray-500 mt-1 text-center">
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
