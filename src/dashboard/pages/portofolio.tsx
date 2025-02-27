import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PortofolioAttributesData } from "../../lib/interface/form";
import { formatDate } from "../../utils/format";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const DashboardPortofolio: React.FC = () => {
    const [items, setItems] = useState<PortofolioAttributesData[]>([]);

    useEffect(() => {
        const fetchPortfolioData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/portofolio");
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching portfolio data:", error);
            }
        };

        fetchPortfolioData();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Kelola Portofolio</h2>
                <Link
                    to="/dashboard/portofolio/tambah"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                    + Tambah Portofolio
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id_portofolio}
                        className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-2"
                    >
                        {item.fotoUrl && (
                            <img
                                src={`http://localhost:5000/${item.fotoUrl}`}
                                alt={item.nama_project}
                                className="w-full h-64 object-cover"
                            />
                        )}

                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-900">{item.nama_project}</h3>
                            <p className="text-gray-600 mb-2 line-clamp-2">{item.deskripsi}</p>
                            <p className="text-sm text-gray-500 mb-4">Dipublikasikan: {formatDate(item.publishedAt)}</p>
                            <div className="flex justify-end space-x-3">
                                <button className="flex items-center px-3 py-1 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition">
                                    <FiEdit className="mr-1" /> Sunting
                                </button>
                                <button
                                    className="flex items-center px-3 py-1 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition"
                                    onClick={async () => {
                                        if (!window.confirm("Apakah Anda yakin ingin menghapus portofolio ini?")) return;
                                        try {
                                            await axios.delete(`http://localhost:5000/api/portofolio/${item.id_portofolio}`);
                                            setItems((prev) => prev.filter((i) => i.id_portofolio !== item.id_portofolio));
                                        } catch (error) {
                                            console.error("Error deleting portfolio:", error);
                                        }
                                    }}
                                >
                                    <FiTrash2 className="mr-1" /> Hapus
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardPortofolio;
