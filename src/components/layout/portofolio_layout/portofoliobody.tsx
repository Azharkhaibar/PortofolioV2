import { useState, useEffect } from "react";
import Navbar from "../navbar";
import { ReactNode } from "react";
import { Code, BadgeCheck, Package, MoveUpRight } from "lucide-react";
import Firebase from '../../../assets/public/img/software/firebase.png';
import Javascript from '../../../assets/public/img/software/javascript.png';
import Java from '../../../assets/public/img/software/java.png';
import Python from '../../../assets/public/img/software/python.png';
import Typescript from '../../../assets/public/img/software/typescript.png';
import Mongodb from '../../../assets/public/img/software/mongodb.png';
import Figma from '../../../assets/public/img/software/figma.png';
import Wordpress from '../../../assets/public/img/software/wordpress.png';
import Laravel from '../../../assets/public/img/software/laravel.png';
import Php from '../../../assets/public/img/software/php.png';
import Flask from '../../../assets/public/img/software/flask.png';
import Tailwind from '../../../assets/public/img/software/tailwind.png';
import React from '../../../assets/public/img/software/react.png';
import Vite from '../../../assets/public/img/software/vite.png';
import Chakra from '../../../assets/public/img/software/chakra.png';
import Node from '../../../assets/public/img/software/node.png';
import Express from '../../../assets/public/img/software/express.png';
import '../../design/textsphere.css';
import axios from "axios";
import { PortofolioAttributesData } from "../../../lib/interface/form";
import TextSphere from '../../ui/textsphere';

const PortofolioBody = () => {
    const [activeColor, setActiveColor] = useState(0);
    const [activeSection, setActiveSection] = useState(0);
    const [portofolios, setPortofolios] = useState<PortofolioAttributesData[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Menambahkan state loading

    const ListTechIcon = [
        { icon: Javascript, title: 'Javascript' },
        { icon: Firebase, title: 'Firebase' },
        { icon: Java, title: 'Java' },
        { icon: Python, title: 'Python' },
        { icon: Typescript, title: 'Typescript' },
        { icon: Mongodb, title: 'Mongodb' },
        { icon: Figma, title: 'Figma' },
        { icon: Wordpress, title: 'Wordpress' },
        { icon: Laravel, title: 'Laravel' },
        { icon: Flask, title: 'Flask' },
        { icon: Tailwind, title: 'Tailwind' },
        { icon: React, title: 'React' },
        { icon: Express, title: 'Express' },
        { icon: Node, title: 'Node' },
        { icon: Chakra, title: 'Chakra' },
        { icon: Vite, title: 'Vite' },
    ];

    const ListPorto = [
        { icon: <Code size={20} className="text-white text-center" />, text: 'Project' },
        { icon: <BadgeCheck size={20} className="text-white text-center" />, text: 'Certificate' },
        { icon: <Package size={20} className="text-white text-center" />, text: 'TechStack' }
    ];

    const handleItemClick = (index) => {
        setActiveColor(index);
        setActiveSection(index);
    };

    useEffect(() => {
        const fetchPortofolios = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/portofolio"); // Gantilah URL dengan endpoint API yang sesuai
                setPortofolios(response.data);
            } catch (error) {
                console.error("Error fetching portfolios:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPortofolios();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="text-center pt-44">
                <h2 className="text-7xl font-bold text-purple-600">Portofolio Showcase</h2>
                <p className="text-white/50 mt-4">
                    Explore my journey through projects, certifications, and technical expertise. Each
                    <br /> section represents a milestone in my continuous learning path.
                </p>
            </div>

            <div className="flex items-center p-4 w-10/12 mx-auto gap-6 mt-8 h-auto px-12 justify-center bg-gray-800 rounded-2xl">
                {ListPorto.map((porto, index) => (
                    <div
                        key={index}
                        className={`w-6/12 cursor-pointer p-4 flex flex-col justify-center gap-2 rounded-2xl ${activeColor === index ? 'bg-purple-600' : ''}`}
                        onClick={() => handleItemClick(index)}
                    >
                        <div className="flex justify-center">
                            {porto.icon}
                        </div>
                        <p className={`text-white text-center text-xl ${activeColor === index ? 'text-black' : ''}`}>
                            {porto.text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-12">
                {activeSection === 0 && (
                    <div className="w-10/12 h-auto mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 w-full h-auto">
                            {loading ? (
                                <p className="text-white text-center">Loading...</p>
                            ) : portofolios.length > 0 ? (
                                portofolios.map((project) => (
                                    <div
                                        key={project.id_portofolio}
                                        className="p-6 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <img
                                            src={project.fotoUrl}
                                            className="w-full h-64 object-cover rounded-t-lg mb-4"
                                            alt={project.nama_project}
                                        />
                                        <div className="text-white">
                                            <h2 className="text-2xl font-semibold mb-2">{project.nama_project}</h2>
                                            <p className="text-md text-gray-400 truncate">{project.deskripsi}</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4">
                                            <a
                                                href={project.fotoUrl || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-300"
                                            >
                                                Live Demo
                                            </a>
                                            <button className="py-2 px-5 bg-gray-700 text-white rounded-xl flex items-center gap-3">
                                                Details <MoveUpRight size={20} className="text-white" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-white text-center">No portfolios available</p>
                            )}
                        </div>
                    </div>
                )}
                {activeSection === 1 && (
                    <div>
                        <p className="text-white text-center">Certificate Section</p>
                    </div>
                )}
                {activeSection === 2 && (
                    <div className="w-10/12 h-auto mx-auto">
                        <div className="grid grid-cols-6 w-full h-auto gap-5">
                            {ListTechIcon.map((logoTech, Index) => (
                                <div key={Index} className="w-12/12 h-auto rounded-2xl p-5 bg-gray-900 shadow-lg">
                                    <div className="flex flex-col items-center justify-center gap-4">
                                        <img src={logoTech.icon} alt="icon stack" className="w-auto h-[100px] object-cover" />
                                        <p className="text-xl font-bold text-center text-white">{logoTech.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortofolioBody;
