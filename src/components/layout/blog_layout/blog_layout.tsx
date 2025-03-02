import Navbar from "../navbar";
import { useState, useEffect } from "react";
import { BlogCategory } from "../../../lib/interface/blog";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/format";
import gridProfiles from "../about_layout/profile_data_representastion";

export interface BlogAttributesData {
    id_blog: number;
    blogIMG: string | null;
    headline_blog: string;
    deskripsi_blog: string;
    detail_deskripsi_blog: string;
    kategori_blog: BlogCategory;
    tags: string;
    author: string;
    publishedAt: string;
}

const BlogPage = () => {
    const [blogs, setBlogs] = useState<BlogAttributesData[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory | null>(null);
    const [error, setError] = useState<string | null>(null);
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/blogs");
                if (!response.ok) throw new Error("Gagal mengambil data blog");

                const data = await response.json();
                const formattedData = data.map((blog: any) => ({
                    ...blog,
                    tags: typeof blog.tags === "string" ? JSON.parse(blog.tags).join(", ") : blog.tags.join(", ")
                }));

                setBlogs(formattedData);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Gagal mengambil data blog");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const filteredBlogs = selectedCategory
        ? blogs.filter(blog => blog.kategori_blog === selectedCategory)
        : blogs;

    const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
    const displayedBlogs = filteredBlogs.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div>
            <Navbar />
            <div className="w-full h-auto p-4 px-10 mt-20">
                <div className="text-white text-center">
                    <h2 className="text-[68px] font-semibold">Blogs</h2>
                    <p>Halaman ini berisi journal atau pengalaman saya sebagai web developer dan designer.</p>
                </div>

                {loading && <p className="text-center text-white mt-10">Memuat data...</p>}
                {error && <p className="text-center text-red-500 mt-10">{error}</p>}

                {!loading && !error && (
                    <div className="w-full h-auto mt-16 flex justify-center">
                        {/* Sidebar Kategori */}
                        <div className="w-2/12">
                            <ul className="w-48 rounded-xl border border-gray-700/40 bg-gray-800/40 backdrop-blur-xl p-8 space-y-4 text-white mx-auto">
                                <li
                                    className={`hover:text-gray-300 cursor-pointer ${!selectedCategory ? "text-gray-300" : ""}`}
                                    onClick={() => setSelectedCategory(null)}
                                >
                                    View All
                                </li>
                                {[...new Set(blogs.map(blog => blog.kategori_blog))].map((category) => (
                                    <li
                                        key={category}
                                        className={`hover:text-gray-300 cursor-pointer ${selectedCategory === category ? "text-gray-300" : ""}`}
                                        onClick={() => setSelectedCategory(category as BlogCategory)}
                                    >
                                        {category}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Daftar Blog */}
                        <div className="w-9/12">
                            <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-4">
                                {displayedBlogs.map((blog, index) => (
                                    <motion.div
                                        key={blog.id_blog}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                        whileHover={{ scale: 1.05 }}
                                        className="w-full mx-auto rounded-xl shadow-lg overflow-hidden"
                                    >
                                        <Link to={`/blog/${blog.id_blog}`}>
                                            <img
                                                src={blog.blogIMG ? `http://localhost:5000/uploads/${blog.blogIMG}` : "https://via.placeholder.com/400"}
                                                alt={blog.headline_blog}
                                                className="w-full h-72 object-cover rounded-lg"
                                            />
                                            <div className="flex flex-col mt-4">
                                                <div className="text-gray-400 text-xs">
                                                    <span className="font-semibold text-white">{blog.author}</span> - {formatDate(blog.publishedAt)}
                                                </div>
                                                <h3 className="text-lg mt-2 font-semibold text-white">{blog.headline_blog}</h3>
                                                <p className="text-sm text-gray-300 mt-2">{blog.deskripsi_blog}</p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {blog.tags && typeof blog.tags === "string"
                                                        ? blog.tags.split(",").map((tag, index) => (
                                                            <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-white">
                                                                #{tag.trim()}
                                                            </span>
                                                        ))
                                                        : Array.isArray(blog.tags) && blog.tags.length > 0
                                                            ? blog.tags.map((tag, index) => (
                                                                <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-white">
                                                                    #{tag.trim()}
                                                                </span>
                                                            ))
                                                            : <span className="text-gray-400">No Tags</span>
                                                    }
                                                </div>

                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Pagination Controls */}
                            <div className="flex justify-center mt-8 space-x-2">
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 text-white bg-gray-700 rounded-md disabled:opacity-50"
                                >
                                    Prev
                                </button>
                                <span className="text-white">Page {currentPage} of {totalPages}</span>
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 text-white bg-gray-700 rounded-md disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogPage;
