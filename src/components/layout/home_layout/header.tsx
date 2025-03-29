import Navbar from "../navbar";
import SplitText from "../../../animation/SplitText/SplitText";
import AnimatedContent from "../../../animation/AnimatedContent/AnimatedContent";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiDockLeft } from "react-icons/bi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const socialLinks = [
    { icon: <BiDockLeft className="text-xl" />, label: "Resume" },
    { icon: <FaLinkedin className="text-xl" />, label: "LinkedIn" },
    { icon: <FaGithub className="text-xl" />, label: "GitHub" },
];

const Header: React.FC = () => {
    return (
        <div className="relative bg-grid-pattern min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-10">
            <Navbar />
            <div className="w-full max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight text-white font-bold">
                    <SplitText text="Hi," className="text-3xl sm:text-4xl" delay={50} />
                    <SplitText text="I'm " className="text-3xl sm:text-4xl text-white font-bold mb-4" delay={30} />
                    <br />
                    <SplitText
                        text="Azhar Khaibar"
                        className="text-4xl sm:text-4xl md:text-5xl sm:text-[60px] md:text-[80px] bg-gradient-to-r from-pink-600 to-purple-800 font-bold bg-clip-text"
                        delay={30}
                    />
                </h1>
                <SplitText
                    text="I'm a self-taught developer, who's currently pursuing Full-Stack development to create stunning user experiences on the front-end, and scalable, secure infrastructure on the backend."
                    className="text-lg sm:text-xl font-medium mt-4 text-white/60 max-w-lg mx-auto"
                    delay={20}
                />
                <div className="flex flex-row justify-center gap-2 sm:gap-4 mt-7 px-4 sm:px-20 items-center">
                    <AnimatedContent distance={100} direction="vertical">
                        <Link
                            to="/blog"
                            className="bg-transparent rounded-full text-white border border-white py-2 px-4 sm:px-6 text-xs sm:text-base"
                        >
                            Read My Blogs
                        </Link>
                    </AnimatedContent>
                    <AnimatedContent distance={100} direction="vertical">
                        <Link
                            to="/portofolio"
                            className="py-2 rounded-full px-4 sm:px-6 bg-gradient-to-r from-pink-600 to-purple-800 text-white flex items-center text-xs sm:text-base"
                        >
                            Know me more
                            <MdOutlineKeyboardArrowRight className="ml-1 sm:ml-2 text-white" />
                        </Link>
                    </AnimatedContent>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 text-white text-opacity-50"
                >
                    {socialLinks.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: index * 0.3, ease: "easeOut" }}
                            className="flex items-center gap-2 cursor-pointer hover:text-white transition text-sm sm:text-base"
                        >
                            {link.icon}
                            {link.label}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Header;
