import { useNavigate } from "react-router-dom";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

const RenderPortofolios = ({ portofolios, loading }) => {
    const navigate = useNavigate();

    if (loading) {
        return <p className="text-white text-center">Loading...</p>;
    }

    if (portofolios.length === 0) {
        return <p className="text-white text-center">No portfolios available</p>;
    }

    return (
        <>
            {portofolios.map((project, index) => {
                console.log('original photo:', project.fotoUrl);
                const imageUrl = project.fotoUrl?.startsWith("http")
                    ? project.fotoUrl
                    : `http://localhost:5000${project.fotoUrl.replace("..", "")}`;

                return (
                    <motion.div
                        key={project.id_portofolio}
                        className="p-6 rounded-xl bg-gray-800/40 border border-gray-800/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img
                            src={imageUrl}
                            className="w-full h-64 object-cover rounded-t-lg mb-4"
                            alt={project.nama_project}
                            onError={(e) => (e.currentTarget.src = "/default.jpg")}
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
                            <button
                                onClick={() => navigate(`/portofolio/${project.id_portofolio}`)}
                                className="py-2 px-5 bg-gray-700 text-white rounded-xl flex items-center gap-3 hover:bg-gray-600 transition"
                            >
                                Details <MoveUpRight size={20} className="text-white" />
                            </button>
                        </div>
                    </motion.div>
                );
            })}
        </>
    );
};

export default RenderPortofolios;
