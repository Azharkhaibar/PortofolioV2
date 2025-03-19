import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { Plus, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const ExperienceDetails: React.FC = () => {
    const [JourneyPathView, setJourneyPathView] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/journey/experience");
                console.log("Data fetched:", response.data);
                setJourneyPathView(response.data);
            } catch (error) {
                console.error("Gagal fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    const handleDelete = useCallback(async (id: string, nama_instansi: string) => {
        const confirmDelete = window.confirm(`Hapus pengalaman di ${nama_instansi}?`);
        if (!confirmDelete) return;

        setDeletingId(id);
        try {
            await axios.delete(`http://localhost:5000/api/journey/experience/${id}`);
            setJourneyPathView((prev) => prev.filter((exp) => exp.id_experience !== id));
            alert("Data berhasil dihapus");
        } catch (error) {
            console.error("Gagal menghapus data:", error);
            alert("Gagal menghapus data");
        } finally {
            setDeletingId(null);
        }
    }, []);

    return (
        <div className="w-full min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold">Journey Experience</h1>
                    <Link to="/dashboard/experience/tambah" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Create Experience
                        <Plus size={20} />
                    </Link>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                    </div>
                ) : JourneyPathView.length === 0 ? (
                    <p className="text-center text-gray-600">Belum ada pengalaman kerja.</p>
                ) : (
                    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-lg">
                        <table className="w-full border-collapse border border-gray-300">
                            <thead className="bg-blue-600 text-white text-left">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-3">No</th>
                                    <th className="border border-gray-300 px-4 py-3">Instansi</th>
                                    <th className="border border-gray-300 px-4 py-3">Periode</th>
                                    <th className="border border-gray-300 px-4 py-3">Posisi</th>
                                    <th className="border border-gray-300 px-4 py-3">Jabatan</th>
                                    <th className="border border-gray-300 px-4 py-3">Tech Stack</th>
                                    <th className="border border-gray-300 px-4 py-3">Tugas</th>
                                    <th className="border border-gray-300 px-4 py-3">Logo</th>
                                    <th className="border border-gray-300 px-4 py-3 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {JourneyPathView.map((exp, index) => {
                                    console.log("Experience Data:", exp);

                                    let techStackArray = Array.isArray(exp.techStack)
                                        ? exp.techStack
                                        : exp.techStack
                                            ? JSON.parse(exp.techStack)
                                            : [];

                                    let taskArray = Array.isArray(exp.task)
                                        ? exp.task
                                        : exp.task
                                            ? JSON.parse(exp.task)
                                            : [];

                                    return (
                                        <tr key={exp.id_experience} className="hover:bg-gray-100">
                                            <td className="border border-gray-300 px-4 py-3 text-center">{index + 1}</td>
                                            <td className="border border-gray-300 px-4 py-3">{exp.nama_instansi || "N/A"}</td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                {exp.periode_mulai && exp.periode_selesai
                                                    ? `${new Date(exp.periode_mulai).toLocaleDateString()} - ${new Date(exp.periode_selesai).toLocaleDateString()}`
                                                    : "N/A"}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">{exp.posisi || "N/A"}</td>
                                            <td className="border border-gray-300 px-4 py-3">{exp.jabatan || "N/A"}</td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                <div className="flex flex-wrap gap-1">
                                                    {techStackArray.length > 0 ? (
                                                        techStackArray.map((tech, idx) => (
                                                            <span key={idx} className="px-2 py-1 text-sm bg-gray-200 rounded">
                                                                {tech}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="text-gray-500">Tidak ada Tech Stack</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3">
                                                <ul className="list-disc pl-4">
                                                    {taskArray.length > 0 ? (
                                                        taskArray.map((task, idx) => <li key={idx}>{task}</li>)
                                                    ) : (
                                                        <li className="text-gray-500">Tidak ada Tugas</li>
                                                    )}
                                                </ul>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-3 text-center">
                                                {exp.img_logo ? (
                                                    <img
                                                        src={exp.img_logo?.startsWith("http") ? exp.img_logo : `http://localhost:5000${exp.img_logo}`}
                                                        alt="Logo"
                                                        className="w-12 h-12 object-cover rounded-full mx-auto"
                                                        title={exp.nama_instansi}
                                                        onError={(e) => (e.currentTarget.src = "/default-placeholder.png")}
                                                    />

                                                ) : (
                                                    <span className="text-gray-500">No Image</span>
                                                )}
                                            </td>


                                            <td className="border border-gray-300 px-4 py-3 text-center">
                                                <button
                                                    onClick={() => handleDelete(exp.id_experience, exp.nama_instansi)}
                                                    className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                                                    disabled={deletingId === exp.id_experience}
                                                >
                                                    {deletingId === exp.id_experience ? (
                                                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                                                    ) : (
                                                        <Trash size={18} />
                                                    )}
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceDetails;
