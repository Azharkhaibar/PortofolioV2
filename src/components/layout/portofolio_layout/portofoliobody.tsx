import { useState, useEffect } from "react";
import Navbar from "../navbar";
import { Code, BadgeCheck, Package } from "lucide-react";
import axios from "axios";
import RenderPortofolios from "./renderportofolios";
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
    const [currentSection, setCurrentSection] = useState<string>(activeSection || '');
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
            <div className="text-center pt-44">
                <h2 className="text-7xl font-bold text-purple-600">Portofolio Showcase</h2>
                <p className="text-white/50 mt-4">
                    Explore my journey through projects, certifications, and technical expertise.
                    <br /> Each section represents a milestone in my continuous learning path.
                </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex items-center p-4 w-10/12 mx-auto gap-6 mt-8 h-auto px-12 justify-center bg-gray-800 rounded-2xl">
                {ListPorto.map((porto, index) => (
                    <div
                        key={index}
                        role="button"
                        tabIndex={0}
                        className={`w-6/12 cursor-pointer p-4 flex flex-col justify-center gap-2 rounded-2xl ${currentSection === index ? "bg-purple-600" : ""
                            }`}
                        onClick={() => setCurrentSection(index)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                setCurrentSection(index);
                            }
                        }}
                    >
                        <div className="flex justify-center">{porto.icon}</div>
                        <p className={`text-white text-center text-xl ${currentSection === index ? "text-black" : ""}`}>
                            {porto.text}
                        </p>
                    </div>

                ))}
            </div>

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
                    <div className="grid grid-cols-6 gap-5">
                        {ListTechIcon.map((tech, index) => (
                            <div key={index} className="rounded-2xl p-5 bg-gray-900 shadow-lg">
                                <div className="flex flex-col items-center gap-4">
                                    <img src={tech.icon} alt={tech.title} className="w-auto h-[100px] object-cover" />
                                    <p className="text-xl font-bold text-center text-white">{tech.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortofolioBody;
