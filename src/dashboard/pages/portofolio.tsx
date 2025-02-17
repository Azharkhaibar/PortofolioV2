import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PortofolioAttributesData } from "../../lib/interface/form";
import { formatDate } from "../../utils/format"; // Import the updated formatDate

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
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Kelola Portofolio</h2>
                <Link
                    to="/dashboard/portofolio/tambah"
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                    Tambah Portofolio
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div key={item.id_portofolio} className="bg-white border border-gray-200 rounded-lg shadow p-5">
                        {item.fotoUrl && (
                            <img
                                src={`http://localhost:5000/${item.fotoUrl}`} // Ensure the URL path is correct
                                alt={item.nama_project}
                                className="w-full h-64 object-cover rounded-md mb-4"
                            />

                        )}

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.nama_project}</h3>
                        <p className="text-gray-700 mb-2 truncate">{item.deskripsi}</p>
                        <p className="text-sm text-gray-500 mb-4">
                            Dipublikasikan: {formatDate(item.publishedAt)} {/* Use formatDate here */}
                        </p>
                        <div className="flex justify-end space-x-2">
                            <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                                Sunting
                            </button>
                            <button
                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                onClick={async () => {
                                    try {
                                        await axios.delete(`http://localhost:5000/api/portofolio/${item.id_portofolio}`);
                                        setItems((prev) => prev.filter((i) => i.id_portofolio !== item.id_portofolio));
                                    } catch (error) {
                                        console.error("Error deleting portfolio:", error);
                                    }
                                }}
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashboardPortofolio;
