import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BlogCategory } from "../../../lib/interface/blog";
import { formatDate } from "../../../utils/format";
import { motion } from 'framer-motion'
import { ArrowRight } from "lucide-react";

export interface BlogAttributesData {
    id_blog: number;
    blogIMG: string | null;
    headline_blog: string;
    deskripsi_blog: string;
    detail_deskripsi_blog: string;
    kategori_blog: BlogCategory;
    tags: string[] | string;
    author: string;
    publishedAt: string;
}

const BlogHome: React.FC = () => {
    const [blogsHome, setBlogsHome] = useState<BlogAttributesData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogsLimitFour = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/blogs");
                setBlogsHome(
                    response.data.map((blog: BlogAttributesData) => ({
                        ...blog,
                        tags: typeof blog.tags === "string" ? blog.tags.split(",") : blog.tags,
                    }))
                );
            } catch (err) {
                console.error("Error fetching Blogs :", err);
                setError("Gagal mengambil data Blogs");
            } finally {
                setLoading(false);
            }
        };
        fetchBlogsLimitFour();
    }, []);

    return (
        <div className="mt-10 px-[130px]">
            {/* Header */}
            <div className="text-white text-left">
                <h2 className="text-5xl font-semibold">My Writing</h2>
                <p className="mt-3 text-lg text-gray-300 w-[40%]">
                    Along with coding, I also like to write about life and technology. Here are some of my recent posts.
                </p>
            </div>

            {/* Blog List */}
            <div className="w-full mt-10 flex flex-wrap justify-center ">
                {loading ? (
                    <p className="text-white">Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    blogsHome.map((homeBlogs) => (
                        <div key={homeBlogs.id_blog} className="w-full border border-b-white/20 flex gap-6 mb-8 py-7">
                            {/* Gambar */}
                            <div className="">
                                <img
                                    src={
                                        homeBlogs.blogIMG
                                            ? `http://localhost:5000/uploads/${homeBlogs.blogIMG}`
                                            : "https://via.placeholder.com/400"
                                    }
                                    alt={homeBlogs.detail_deskripsi_blog}
                                    className="w-48 h-auto object-cover rounded-lg"
                                />
                            </div>

                            {/* Konten */}
                            <div className="w-full text-white">
                                <h2 className="text-2xl font-bold">{homeBlogs.headline_blog}</h2>
                                <p className="text-gray-400 mt-2">{homeBlogs.deskripsi_blog}</p>

                                {/* Informasi Tambahan */}
                                <div className="mt-3 flex justify-between text-sm text-gray-500">
                                    <p>{formatDate(homeBlogs.publishedAt)}</p>
                                    <Link to={`/blog/${homeBlogs.id_blog}`} className="text-blue-400 hover:text-blue-300">
                                        Read More →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <motion.div
                className="p-2 rounded-full bg-transparent border border-gray-700 mt-6 w-[200px] mx-auto text-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <button className="flex items-center pl-6 gap-4 px-2 py-1">
                    <a href="/blog" className="flex items-center text-white">
                        View All Blogs
                        <ArrowRight size={20} className="ml-2" />
                    </a>
                </button>
            </motion.div>
        </div>
    );
};

export default BlogHome;
