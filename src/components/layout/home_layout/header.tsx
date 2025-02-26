import Navbar from "../navbar";
import SplitText from "../../../animation/SplitText/SplitText";
import AnimatedContent from "../../../animation/AnimatedContent/AnimatedContent";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiDockLeft } from "react-icons/bi";

const Header: React.FC = () => {
    const velocity = 100;
    return (
        <div className="relative">
            <Navbar />
            <div className="flex w-full h-120% relative">
                <div className="w-2/3 h-full mt-[10%] px-[120px] ">
                    <h1 className="text-6xl mb-8 leading-[90%] text-white font-bold ">
                        <SplitText
                            text="Hi!,"
                            className="text-4xl text-white"
                            delay={50}
                        />
                        <br />
                        <SplitText
                            text="I'm "
                            className="text-7xl text-white font-bold"
                            delay={30}
                        />
                        <SplitText
                            text="Azhar"
                            className="text-7xl bg-gradient-to-r from-pink-600 to-purple-800 font-bold bg-clip-text"
                            delay={30}
                        />
                        <SplitText
                            text=", Fullstack Developer and UI/UX Designer"
                            className="text-7xl text-white font-bold"
                            delay={30}
                        />
                    </h1>
                    <SplitText
                        text="I'm a self-taught developer, who's currently pursuing Full-Stack development to create stunning user experiences on the front-end, and scalable, secure infrastructure on the backend."
                        className="text-lg font-medium mt-20 text-white/60"
                        delay={20}
                    />

                    <div className="flex gap-4 mt-7">
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 80, friction: 20 }}
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                        >
                            <button className="bg-transparent rounded-full text-white border border-white py-2 px-4">
                                Read My Blogs
                            </button>
                        </AnimatedContent>
                        <AnimatedContent
                            distance={100}
                            direction="vertical"
                            reverse={false}
                            config={{ tension: 40, friction: 20 }}
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                        >
                            <button className="py-2 rounded-full px-4 bg-gradient-to-r from-pink-600 to-purple-800 text-white flex items-center">
                                Know me more
                                <MdOutlineKeyboardArrowRight className="ml-2 text-white" />
                            </button>
                        </AnimatedContent>
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
