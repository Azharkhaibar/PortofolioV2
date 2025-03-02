import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BlogCategory } from "../../../lib/interface/blog";
import axios from "axios";
import { formatDate } from "../../../utils/format";
import Navbar from "../navbar";
import { Tags, PersonStanding } from "lucide-react";

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

const BlogDetail = () => {
    const { id } = useParams<{ id?: string }>();
    const [blog, setBlog] = useState<BlogAttributesData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogDetail = async () => {
            if (!id) return;

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
                if (!response.ok) throw new Error("Failed to fetch Blog detail");

                const data = await response.json();
                setBlog({
                    ...data,
                    tags: typeof data.tags === "string" ? JSON.parse(data.tags) : data.tags,
                });

            } catch (err) {
                console.error("Error fetching Blog detail:", err);
                setError("Gagal mengambil detail blog");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogDetail();
    }, [id]);

    return (
        <div className="">
            <Navbar />
            <div className="max-w-4xl mx-auto mt-20 text-white">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500">{error}</p>
                ) : blog ? (
                    <div>
                        <h1 className="text-5xl leading-16 font-bold mb-4">{blog.headline_blog}</h1>
                        <div className="flex items-center space-x-4">
                                    <p className="text-gray-400 text-sm">{formatDate(blog.publishedAt)} • By {blog.author}</p>
                                    <p className="flex items-center gap-2">
                                        <Tags size={20} className="text-white" />
                                        {blog.kategori_blog}
                                    </p>
                        </div>

                        <img
                            src={blog.blogIMG ? `http://localhost:5000/uploads/${blog.blogIMG}` : "https://via.placeholder.com/600"}
                            alt={blog.detail_deskripsi_blog}
                            className="w-full h-64 object-cover rounded-lg my-5"
                        />

                        <p className="text-lg">{blog.detail_deskripsi_blog}</p>

                        <div className="mt-5">
                            <h3 className="text-xl font-semibold">Tags:</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {Array.isArray(blog.tags) &&
                                    blog.tags.map((tag, index) => (
                                        <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                            #{tag}
                                        </span>
                                    ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">Blog not found.</p>
                )}
            </div>
        </div>
    );
};

export default BlogDetail;
