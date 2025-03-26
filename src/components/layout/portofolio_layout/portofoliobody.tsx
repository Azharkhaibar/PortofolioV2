import { useState, useEffect } from "react";
import Navbar from "../navbar";
import { Code, BadgeCheck, Package } from "lucide-react";
import axios from "axios";
import AnimatedContent from "../../../animation/AnimatedContent/AnimatedContent";
import RenderPortofolios from "./renderportofolios";
import SplitText from "../../../animation/SplitText/SplitText";
import { motion } from 'framer-motion'
// Import assets
import Firebase from "../../../assets/public/img/software/firebase.png";
import Javascript from "../../../assets/public/img/software/javascript.png";
import Java from "../../../assets/public/img/software/java.png";
import Python from "../../../assets/public/img/software/python.png";
import Typescript from "../../../assets/public/img/software/typescript.png";
import Mongodb from "../../../assets/public/img/software/mongodb.png";
import Figma from "../../../assets/public/img/software/figma.png";
import Wordpress from "../../../assets/public/img/software/wordpress.png";
import Laravel from "../../../assets/public/img/software/laravel.png";
import Flask from "../../../assets/public/img/software/flask.png";
import Tailwind from "../../../assets/public/img/software/tailwind.png";
import ReactIcon from "../../../assets/public/img/software/react.png";
import Vite from "../../../assets/public/img/software/vite.png";
import Chakra from "../../../assets/public/img/software/chakra.png";
import Node from "../../../assets/public/img/software/node.png";
import Express from "../../../assets/public/img/software/express.png";

interface Portofolio {
    id: string;
    icon: React.ReactNode;
    text: string;
}


interface PortofolioBodyProps {
    activeSection: string;
    portofolios: Portofolio[];
    loading: boolean;
}

const PortofolioBody: React.FC<PortofolioBodyProps> = ({ activeSection, portofolios, loading }) => {
    const [currentSection, setCurrentSection] = useState<number>(0);
    const [portfolioData, setPortfolioData] = useState<Portofolio[]>(portofolios || []);
    const [isLoading, setIsLoading] = useState<boolean>(loading);
    useEffect(() => {
        if (!portofolios || portofolios.length === 0) {
            const fetchPortfolios = async () => {
                try {
                    const response = await axios.get("http://localhost:5000/api/portofolio");
                    setPortfolioData(response.data);
                } catch (error) {
                    console.error("Error fetching portfolios:", error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchPortfolios();
        } else {
            setIsLoading(false);
        }
    }, [portofolios]);

    const ListTechIcon = [
        { icon: Javascript, title: "Javascript" },
        { icon: Firebase, title: "Firebase" },
        { icon: Java, title: "Java" },
        { icon: Python, title: "Python" },
        { icon: Typescript, title: "Typescript" },
        { icon: Mongodb, title: "Mongodb" },
        { icon: Figma, title: "Figma" },
        { icon: Wordpress, title: "Wordpress" },
        { icon: Laravel, title: "Laravel" },
        { icon: Flask, title: "Flask" },
        { icon: Tailwind, title: "Tailwind" },
        { icon: ReactIcon, title: "React" },
        { icon: Express, title: "Express" },
        { icon: Node, title: "Node" },
        { icon: Chakra, title: "Chakra" },
        { icon: Vite, title: "Vite" },
    ];

    const ListPorto = [
        { icon: <Code size={20} className="text-white" />, text: "Project" },
        { icon: <BadgeCheck size={20} className="text-white" />, text: "Certificate" },
        { icon: <Package size={20} className="text-white" />, text: "TechStack" },
    ];


    return (
        <div>
            <Navbar />
            <div className="text-center pt-44 px-4 md:px-0">
                <AnimatedContent
                    distance={30}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 20 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-purple-600 mb-4">Portofolio Showcase</h2>
                </AnimatedContent>
                <SplitText
                    text={`Explore my journey through projects, certifications, and technical expertise.`}
                    className="text-white/50 pt-8"
                    delay={20}
                />
                <br />
                <SplitText
                    text={`Each section represents a milestone in my continuous learning path.`}
                    className="text-white/50 mt-4"
                    delay={40}
                />
            </div>

            {/* Tabs Navigation */}
            <AnimatedContent
                distance={100}
                delay={20}
                scale={0.3}
                config={{ tension: 30, friction: 20 }}
                threshold={0.1}
                initialOpacity={0.0}
            >
                <div className="flex items-center p-4 w-10/12 mx-auto gap-6 mt-8 h-auto px-9 sm:px-9 md:px-12 lg:px-12 justify-center bg-gray-800/30 border border-gray-700/40 rounded-2xl">
                    {ListPorto.map((porto, index) => (
                        <motion.div
                            key={index}
                            role="button"
                            tabIndex={0}
                            className={`w-4/12 sm:w-4/12 md:w-6/12 lg:w-6/12 cursor-pointer p-4 flex flex-col justify-center gap-1 rounded-2xl ${currentSection === index ? "bg-purple-600" : "bg-gray-700/40"
                                }`}
                            onClick={() => setCurrentSection(index)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    setCurrentSection(index);
                                }
                            }}
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{
                                scale: currentSection === index ? 1.05 : 0.95,
                                opacity: currentSection === index ? 1 : 0.5,
                            }}
                            whileHover={currentSection !== index ? { scale: 1.02, opacity: 0.7 } : {}}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="flex justify-center">{porto.icon}</div>
                            <p className={`text-white text-center text-md sm:text-md md:text-xl lg:text-xl ${currentSection === index ? "text-black" : ""}`}>
                                {porto.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </AnimatedContent>

            {/* Sections Content */}
            <div className="mt-12 w-10/12 mx-auto">
                {currentSection === 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
                        <RenderPortofolios portofolios={portfolioData} loading={isLoading} />
                    </div>
                )}

                {currentSection === 1 && (
                    <div>
                        <p className="text-white text-center">Certificate Section</p>
                    </div>
                )}

                {currentSection === 2 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 p-2 sm:p-4">
                        {ListTechIcon.map((tech, index) => (
                            <motion.div
                                key={index}
                                className="rounded-2xl p-4 sm:p-5 bg-gray-900 shadow-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex flex-col items-center gap-3 sm:gap-4">
                                    <img src={tech.icon} alt={tech.title} className="w-auto h-[80px] sm:h-[100px] object-cover" />
                                    <p className="text-lg sm:text-xl font-bold text-center text-white">{tech.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default PortofolioBody;
