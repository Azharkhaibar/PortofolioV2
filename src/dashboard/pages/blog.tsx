import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export enum BlogCategory {
    Technology = "Technology",
    Business = "Business",
    Health = "Health",
    Entertainment = "Entertainment",
    Politics = "Politics",
    Lifestyle = "Lifestyle",
    Culture = "Culture",
    Design = "Design",
}

export interface BlogAttributesData {
    id_blog: number;
    blogIMG: string | null;
    headline_blog: string;
    deskripsi_blog: string;
    detail_deskripsi_blog: string;
    kategori_blog: BlogCategory;
    tags: string[];
    author: string;
    publishedAt: string;
}

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogAttributesData[]>([]);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState<BlogCategory | "">("");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/blogs");
            setBlogs(response.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!window.confirm("Apakah Anda yakin ingin menghapus blog ini?")) return;
        try {
            await axios.delete(`http://localhost:5000/api/blogs/${id}`);
            setBlogs(blogs.filter((blog) => blog.id_blog !== id));
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    const openImage = (imgUrl: string | null) => {
        if (imgUrl) {
            setSelectedImage(`http://localhost:5000/uploads/${imgUrl}`);
        }
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    const filteredBlogs = blogs.filter((blog) =>
        blog.headline_blog.toLowerCase().includes(search.toLowerCase()) &&
        (categoryFilter ? blog.kategori_blog === categoryFilter : true)
    );

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Blog Management</h1>

            {/* Search & Filter */}
            <div className="flex gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Cari blog berdasarkan judul..."
                    className="border p-2 rounded w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="border p-2 rounded"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value as BlogCategory)}
                >
                    <option value="">Semua Kategori</option>
                    {Object.values(BlogCategory).map((category) => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <Link to="tambah" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Tambah Blog
                </Link>
            </div>

            {/* Blog Table */}
            <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left">Gambar</th>
                            <th className="p-3 text-left">Judul</th>
                            <th className="p-3 text-left">Kategori</th>
                            <th className="p-3 text-left">Penulis</th>
                            <th className="p-3 text-left">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBlogs.map((blog) => (
                            <tr key={blog.id_blog} className="border-b">
                                <td className="p-3">
                                    <button
                                        onClick={() => openImage(blog.blogIMG)}
                                        className="focus:outline-none"
                                        aria-label="Perbesar gambar"
                                    >
                                        <img
                                            src={blog.blogIMG ? `http://localhost:5000/uploads/${blog.blogIMG}` : "https://via.placeholder.com/100"}
                                            alt="Blog"
                                            className="w-16 h-16 object-cover rounded cursor-pointer transition-transform duration-200 hover:scale-105"
                                        />
                                    </button>
                                </td>
                                <td className="p-3">{blog.headline_blog}</td>
                                <td className="p-3">{blog.kategori_blog}</td>
                                <td className="p-3">{blog.author}</td>
                                <td className="p-3 flex gap-2">
                                    <Link to={`/edit/${blog.id_blog}`} className="bg-yellow-500 text-white px-3 py-1 rounded">
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(blog.id_blog)}
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeImage}
                    onKeyDown={(e) => e.key === "Escape" && closeImage()}
                    tabIndex={0}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="relative">
                        <button
                            className="absolute top-2 right-2 bg-white text-black p-2 rounded-full shadow-md"
                            onClick={closeImage}
                            aria-label="Tutup gambar"
                        >
                            ✖
                        </button>
                        <img
                            src={selectedImage}
                            alt="Zoomed Blog"
                            className="max-w-screen-md max-h-screen-md rounded-lg"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Blog;
