import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import { Circle, Code2, Layers, Package, Star } from "lucide-react";
import SpotlightCard from "../../../animation/SpotlightCard/SpotlightCard";
import SplitText from "../../../animation/SplitText/SplitText";
import BlurText from "../../../animation/BlurText/BlurText";
import { motion } from 'framer-motion'
import AnimatedContent from "../../../animation/AnimatedContent/AnimatedContent";
interface Project {
    id_portofolio: number;
    nama_project: string;
    fotoUrl?: string;
    deskripsi: string;
    publishedAt: string;
    features?: string[];
    teknologi?: string[];
}

const ProjectDetail = () => {
    const { id } = useParams<{ id?: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:5000/api/portofolio/${id}`);
                if (!response.ok) throw new Error("Failed to fetch project details.");
                const data: Project = await response.json();
                console.log("Fetched data:", data);
                if (!data || Object.keys(data).length === 0) {
                    throw new Error("Project not found.");
                }

                setProject({
                    ...data,
                    features: typeof data.features === "string" ? JSON.parse(data.features) : data.features,
                    teknologi: typeof data.teknologi === "string" ? JSON.parse(data.teknologi) : data.teknologi,
                });
            } catch (err) {
                setError((err as Error).message);
                setProject(null);
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchProject();
        } else {
            setLoading(false);
            setError("Invalid Project ID");
        }
    }, [id]);

    if (loading)
        return (
            <div className="flex items-center justify-center h-screen bg-[#0F1017]">
                <p className="text-lg font-semibold text-gray-400">Loading...</p>
            </div>
        );

    if (error)
        return (
            <div className="flex items-center justify-center h-screen bg-[#0F1017]">
                <p className="text-lg font-semibold text-red-500">{error}</p>
            </div>
        );

    if (!project)
        return (
            <div className="flex items-center justify-center h-screen bg-[#0F1017]">
                <p className="text-lg font-semibold text-gray-400">Project not found.</p>
            </div>
        );

    console.log("Original Foto URL:", project.fotoUrl);

    const imageUrl = project.fotoUrl?.startsWith("http")
        ? project.fotoUrl
        : `http://localhost:5000${project.fotoUrl.replace("..", "")}`;

    return (
        <>
            <div className="bg-[#0F1017] min-h-screen">
                <Navbar />
                <div className="w-full px-[120px] gap-8 p-6 mt-20 text-gray-200 flex justify-center">
                    <div className="w-1/2">
                        <motion.img
                            src={imageUrl}
                            alt={project.nama_project}
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                            onError={(e) => (e.currentTarget.src = "/default.jpg")}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        />

                        {/* Features */}
                        <SpotlightCard
                            className="mt-6 w-full h-auto p-4 border custom-spotlight-card border-gray-600/50 rounded-xl"
                            spotlightColor="rgba(0, 229, 255, 0.2)"
                        >
                            <motion.h3
                                className="text-2xl font-bold text-white flex items-center gap-3"
                                initial={{ opacity: 0, y: 20 }}  
                                animate={{ opacity: 1, y: 0 }}   
                                transition={{ duration: 0.5 }}
                            >
                                <Star size={25} className="text-yellow-300" />
                                Key Features
                            </motion.h3>

                            <motion.ul
                                className="mt-5 space-y-4"
                                initial={{ opacity: 0 }}  
                                animate={{ opacity: 1 }}  
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                {project.features && project.features.length > 0 ? (
                                    project.features.map((feature, index) => (
                                        <motion.li
                                            key={feature}
                                            className="bg-transparent flex items-center gap-2 px-4 py-2 rounded-md shadow text-gray-300"
                                            initial={{ opacity: 0, y: 20 }}  
                                            animate={{ opacity: 1, y: 0 }}   
                                            exit={{ opacity: 0, y: 20 }}   
                                            transition={{
                                                delay: index * 0.1,  
                                                type: 'spring',
                                                stiffness: 100,
                                                damping: 25,
                                            }}
                                        >
                                            <Circle size={12} className="text-blue-300" />
                                            {feature}
                                        </motion.li>
                                    ))
                                ) : (
                                    <li className="text-gray-500">No features available</li>
                                )}
                            </motion.ul>
                        </SpotlightCard>
                    </div>

                    <div className="w-1/2">
                        <SplitText
                        text={project.nama_project}
                            className="text-7xl font-bold text-white mb-4 font-poppins"
                            delay={50}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            threshold={0.2}
                            rootMargin="-50px"
                        />
                        <BlurText
                            text={project.deskripsi}
                            className="mt-10 text-gray-300 leading-relaxed"
                            delay={5}
                            animateBy="letters"
                            direction="bottom"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                            <strong>Published At:</strong> {new Date(project.publishedAt).toLocaleDateString()}
                        </p>

                        <AnimatedContent
                        distance={40}
                        delay={0}
                        scale={1.0}
                        config={{ tension: 30, friction: 20}}
                        threshold={0.1}
                        direction="vertical"
                        reverse={false}
                        animateOpacity
                        >
                            <div className="bg-gray-900 mt-8 rounded-xl p-4 flex items-center justify-center gap-4">
                                {/* Total Teknologi */}
                                <div className="bg-gray-800/50 border backdrop-blur-lg w-full border-gray-600/50 flex gap-4 items-center p-4 rounded-xl shadow-lg">
                                    <div className="bg-blue-800 p-3 rounded-full">
                                        <Code2 size={28} className="text-blue-200/70" />
                                    </div>
                                    <div className="text-white">
                                        <h2 className="text-2xl font-bold">{project.teknologi?.length ?? 0}</h2>
                                        <p className="font-medium text-white/60 text-sm mt-1">Total Teknologi</p>
                                    </div>
                                </div>

                                {/* Total Features */}
                                <div className="bg-gray-800/50 backdrop-blur-lg border w-full border-gray-600/50 flex gap-4 items-center p-4 rounded-xl shadow-lg">
                                    <div className="bg-purple-800 p-3 rounded-full">
                                        <Layers size={28} className="text-blue-200/70" />
                                    </div>
                                    <div className="text-white">
                                        <h2 className="text-2xl font-bold">{project.features?.length ?? 0}</h2>
                                        <p className="font-medium text-white/60 text-sm mt-1">Total Features</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedContent>

                        <div className="mt-6">
                            <AnimatedContent
                                distance={40}
                                delay={0}
                                scale={1.0}
                                config={{ tension: 30, friction: 20 }}
                                threshold={0.1}
                                direction="vertical"
                                reverse={false}
                                animateOpacity
                            >
                                <h3 className="text-2xl flex gap-3 items-center font-semibold text-white">Technologies Used
                                    <Code2 size={25} className="text-white" />
                                </h3>
                            </AnimatedContent>
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {project.teknologi && project.teknologi.length > 0 ? (
                                    project.teknologi.map((tech, index) => (
                                        <motion.li
                                            key={tech}
                                            className="bg-gray-900 border border-purple-800/50 flex items-center gap-2 text-blue-300 px-4 py-2 rounded-xl text-sm font-medium shadow"
                                            initial={{ opacity: 0, y: 30 }}  
                                            animate={{ opacity: 1, y: 0 }}   
                                            exit={{ opacity: 0, y: 30 }}    
                                            transition={{
                                                type: 'spring',
                                                stiffness: 120,
                                                damping: 25,
                                                delay: index * 0.25,
                                                bounce: 0.4,       
                                            }}
                                        >
                                            <Package size={16} className="text-blue-300" />
                                            {tech}
                                        </motion.li>
                                    ))
                                ) : (
                                    <li className="text-gray-500">No technologies available</li>
                                )}
                            </ul>

                        </div></div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProjectDetail;
