import { useState, useEffect } from "react";
import Navbar from "../navbar";
import Footer from '../footer';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiDockLeft } from "react-icons/bi";

const Header: React.FC = () => {

    const role = [
        "Fullstack Developer", "UI/UX Designer"
    ]

    return (
        <div className="relative">
            <Navbar />
            <div className="flex w-full h-[90vh] relative">
                <div className="w-2/3 h-full mt-[12%] px-[120px] ">
                    <h1 className="text-6xl mb-2 leading-[90%] text-white font-bold">
                        <span className="text-4xl mb-2 text-white">Hi!,</span>
                        <br />
                        I'm <span className="bg-gradient-to-r from-pink-600 to-purple-800 font-bold text-transparent bg-clip-text">Azhar</span>, Fullstack Developer and UI/UX Designer
                    </h1>
                    <p className="text-lg font-medium mt-7 text-white/60">
                        I'm a self-taught developer, who's currently pursuing Full-Stack development to create stunning user experiences on the front-end, and scalable, secure infrastructure on the backend.
                    </p>
                    <div className="flex gap-4 mt-7">
                        <button className="bg-transparent rounded-full text-white border border-white py-2 px-4">
                            Read My Blogs
                        </button>
                        <button className="py-2 rounded-full px-4 bg-gradient-to-r from-pink-600 to-purple-800 text-white flex items-center">
                            Know me more
                            <MdOutlineKeyboardArrowRight className="ml-2 text-white" />
                        </button>
                    </div>
                    <div className="flex items-center mt-5 gap-4">
                        <div className="flex items-center gap-2 text-white text-opacity-50">
                            <BiDockLeft className="text-xl" />
                            Resume
                        </div>
                        <div className="flex items-center gap-2 text-white text-opacity-50">
                            <FaLinkedin className="text-xl" />
                            LinkedIn
                        </div>
                        <div className="flex items-center gap-2 text-white text-opacity-50">
                            <FaGithub className="text-xl" />
                            GitHub
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-full bg-black bg-opacity-60">
                    {/* Optional image or content can go here */}
                </div>
            </div>
        </div>
    );
}

export default Header;
