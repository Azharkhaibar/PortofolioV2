import { useState } from "react";
import axios from "axios";
import { BlogCategory } from "./blog";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
    const [headline, setHeadline] = useState("");
    const [description, setDescription] = useState("");
    const [detailDescription, setDetailDescription] = useState("");
    const [category, setCategory] = useState<BlogCategory | "">("");
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const navigate = useNavigate();

    // ✅ Fungsi menambahkan tag
    const handleAddTag = () => {
        const trimmedTag = tagInput.trim();
        if (trimmedTag === "" || tags.includes(trimmedTag)) return;
        setTags([...tags, trimmedTag]);
        setTagInput(""); 
    };
    const removeTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const changeFileHandle = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const allowedTypesIMG = ["image/jpeg", "image/png", "image/webp"];
        if(!allowedTypesIMG.includes(file.type)) {
            alert("Format gambar harus JPG, PNG, atau WEBP.");
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert("Ukuran gambar tidak boleh lebih dari 2MB.");
            return;
        }
            setFormData((prev) => ({ ...prev, foto: file }));
            setPreviewImage(URL.createObjectURL(file));
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!headline || !description || !detailDescription || !category || !author || !image) {
            console.error("Ada data yang kosong!");
            return;
        }

        const formData = new FormData();
        formData.append("headline_blog", headline);
        formData.append("deskripsi_blog", description);
        formData.append("detail_deskripsi_blog", detailDescription); // ✅ Perbaikan nama variabel
        formData.append("kategori_blog", category);
        formData.append("tags", JSON.stringify(tags));
        formData.append("author", author);
        formData.append("publishedAt", new Date().toISOString());
        formData.append("foto", image); 
        try {
            const response = await axios.post("http://localhost:5000/api/blogs", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log("Success:", response.data);
            navigate("/"); 
        } catch (error) {
            console.error("Error adding blog:", error);
        }
    };


    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Tambah Blog</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
                <div className="mb-4">
                    <label htmlFor="headline" className="block font-semibold">Judul</label>
                    <input id="headline" type="text" className="border p-2 rounded w-full" value={headline} onChange={(e) => setHeadline(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block font-semibold">Deskripsi</label>
                    <textarea id="description" className="border p-2 rounded w-full" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="detailDescription" className="block font-semibold">Detail Deskripsi</label>
                    <textarea id="detailDescription" className="border p-2 rounded w-full" value={detailDescription} onChange={(e) => setDetailDescription(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block font-semibold">Kategori</label>
                    <select id="category" className="border p-2 rounded w-full" value={category} onChange={(e) => setCategory(e.target.value as BlogCategory)} required>
                        <option value="">Pilih Kategori</option>
                        {Object.values(BlogCategory).map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* ✅ Input Tags */}
                <div className="mb-4">
                    <label className="block font-semibold">Tags</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            placeholder="Tambah tag"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        />
                        <button
                            type="button"
                            onClick={handleAddTag}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                            Add
                        </button>
                    </div>
                    {tags.length > 0 && (
                        <ul className="mt-2 space-y-1">
                            {tags.map((tag, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-gray-200 px-3 py-1 rounded-md"
                                >
                                    <span>{tag}</span>
                                    <button
                                        type="button"
                                        onClick={() => removeTag(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="mb-4">
                    <label htmlFor="author" className="block font-semibold">Penulis</label>
                    <input id="author" type="text" className="border p-2 rounded w-full" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block font-semibold">Upload Gambar</label>
                    <input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files?.[0] || null)}
                        className="border p-2 rounded w-full"
                    />
                </div>
                <div className="flex gap-4">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Tambah</button>
                    <button type="button" onClick={() => navigate("/")} className="bg-gray-500 text-white px-4 py-2 rounded">Batal</button>
                </div>
            </form>
        </div>
    );
};

export default AddBlog;
