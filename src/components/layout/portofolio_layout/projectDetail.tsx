import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
import { Circle, Code, Code2, Layers, Package, Star } from "lucide-react";

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
                        <img
                            src={imageUrl}
                            alt={project.nama_project}
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                            onError={(e) => (e.currentTarget.src = "/default.jpg")}
                        />

                        {/* Features */}
                        <div className="mt-6 w-full h-auto p-4 border bg-gray-900/50 border-gray-600/50 rounded-xl">
                            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                <Star size={25} className="text-yellow-300"></Star>
                                Key Features</h3>
                            <ul className="mt-5 space-y-4">
                                {project.features && project.features.length > 0 ? (
                                    project.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="bg-transparent flex items-center gap-2 px-4 py-2 rounded-md shadow text-gray-300"
                                        >
                                            <Circle size={12} className="text-blue-300" />
                                            {feature}
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-gray-500">No features available</li>
                                )}
                            </ul>

                        </div>

                        {/* Technologies */}
                        
                    </div>

                    <div className="w-1/2">
                        <h1 className="text-7xl font-bold text-white mb-4 font-poppins">{project.nama_project}</h1>
                        <p className="mt-10 text-gray-300 leading-relaxed">{project.deskripsi}</p>
                        <p className="mt-2 text-sm text-gray-500">
                            <strong>Published At:</strong> {new Date(project.publishedAt).toLocaleDateString()}
                        </p>

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

                        <div className="mt-6">
                            <h3 className="text-2xl flex gap-3 items-center font-semibold text-white">Technologies Used
                                <Code2 size={25} className="text-white"/>
                            </h3>
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {project.teknologi && project.teknologi.length > 0 ? (
                                    project.teknologi.map((tech) => (
                                        <li
                                            key={tech}
                                            className="bg-gray-900 border border-purple-800/50 flex items-center gap-2 text-blue-300 px-4 py-2 rounded-xl text-sm font-medium shadow"
                                        >
                                            <Package size={16} className="text-blue-300" />
                                            {tech}
                                        </li>
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
