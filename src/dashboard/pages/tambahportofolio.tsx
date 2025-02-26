import React, { useState, ChangeEvent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface FormDataType {
    nama_project: string;
    deskripsi: string;
    publishedAt: string;
    features: string[];
    teknologi: string[];
    foto?: File;
}

const TambahPortofolio: React.FC = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<FormDataType>({
        nama_project: "",
        deskripsi: "",
        publishedAt: "",
        features: [],
        teknologi: [],
    });

    const [newFeature, setNewFeature] = useState("");
    const [newTech, setNewTech] = useState("");
    // State untuk preview foto
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));
        },
        []
    );

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // Validasi format gambar
            const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
            if (!allowedTypes.includes(file.type)) {
                alert("Format gambar harus JPG, PNG, atau WEBP.");
                return;
            }

            // maksimal Validasi gambar 2mb
            if (file.size > 2 * 1024 * 1024) {
                alert("Ukuran gambar tidak boleh lebih dari 2MB.");
                return;
            }

            setFormData((prev) => ({ ...prev, foto: file }));
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleAddFeature = () => {
        if (newFeature.trim() === "") return;
        setFormData((prev) => ({
            ...prev,
            features: [...prev.features, newFeature.trim()],
        }));
        setNewFeature("");
    };

    // Hapus feature berdasarkan index
    const handleRemoveFeature = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            features: prev.features.filter((_, i) => i !== index),
        }));
    };

    // Tambah teknologi ke array
    const handleAddTech = () => {
        if (newTech.trim() === "") return;
        setFormData((prev) => ({
            ...prev,
            teknologi: [...prev.teknologi, newTech.trim()],
        }));
        setNewTech("");
    };

    // Hapus teknologi berdasarkan index
    const handleRemoveTech = (index: number) => {
        setFormData((prev) => ({
            ...prev,
            teknologi: prev.teknologi.filter((_, i) => i !== index),
        }));
    };

    // Fungsi submit form untuk mengirim data ke backend
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.nama_project || !formData.deskripsi || !formData.publishedAt) {
            alert("Harap isi semua field yang diperlukan!");
            return;
        }

        const data = new FormData();
        data.append("nama_project", formData.nama_project);
        data.append("deskripsi", formData.deskripsi);
        data.append("publishedAt", formData.publishedAt);
        // Pastikan mengirimkan array dalam bentuk JSON string
        data.append("features", JSON.stringify(formData.features));
        data.append("teknologi", JSON.stringify(formData.teknologi));
        if (formData.foto) {
            data.append("foto", formData.foto);  // Append file foto jika ada
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("http://localhost:5000/api/portofolio", {
                method: "POST",
                body: data,  // Body berupa FormData
            });

            if (!response.ok) {
                // Jika response bukan OK, tampilkan error
                const errorText = await response.text(); // Parsing error text
                throw new Error(errorText || "Gagal menambahkan portofolio.");
            }

            // Jika response OK, coba parse JSON
            const result = await response.json();

            alert("Portofolio berhasil ditambahkan!");
            navigate("/dashboard/portofolio");
        } catch (error) {
            console.error("Error submitting portfolio:", error);
            alert(error instanceof Error ? error.message : "Terjadi kesalahan.");
        } finally {
            setIsSubmitting(false);
        }
    };




    return (
        <div className="mx-auto p-8 backdrop-blur-3xl border border-white/40 rounded-xl shadow-lg">
            <h2 className="text-3xl font-extrabold text-white mb-6 pb-2">
                Tambah Portofolio
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nama Project */}
                <div>
                    <label className="block text-white font-medium mb-4">
                        Nama Project
                    </label>
                    <input
                        type="text"
                        name="nama_project"
                        value={formData.nama_project}
                        onChange={handleChange}
                        placeholder="Masukkan nama project"
                        className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        required
                    />
                </div>

                {/* Upload Foto */}
                <div>
                    <label className="block text-white font-medium mb-1">
                        Upload Foto Project
                    </label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full"
                    />
                    {previewImage && (
                        <div className="relative mt-2">
                            <img
                                src={previewImage}
                                alt="Preview Foto"
                                className="max-h-60 object-cover rounded-md"
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    setPreviewImage(null);
                                    setFormData((prev) => ({ ...prev, foto: undefined }));
                                }}
                                className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 transition"
                            >
                                &times;
                            </button>
                        </div>
                    )}
                </div>

                {/* Deskripsi */}
                <div>
                    <label className="block text-white font-medium mb-4">
                        Deskripsi
                    </label>
                    <textarea
                        name="deskripsi"
                        value={formData.deskripsi}
                        onChange={handleChange}
                        placeholder="Masukkan deskripsi"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        rows={4}
                        required
                    ></textarea>
                </div>

                {/* Tanggal Publikasi */}
                <div>
                    <label className="block text-white font-medium mb-4">
                        Tanggal Publikasi
                    </label>
                    <input
                        type="date"
                        name="publishedAt"
                        value={formData.publishedAt}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        required
                    />
                </div>

                {/* Features */}
                <div>
                    <label className="block text-white font-medium mb-4">
                        Features
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newFeature}
                            onChange={(e) => setNewFeature(e.target.value)}
                            placeholder="Tambah feature"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        />
                        <button
                            type="button"
                            onClick={handleAddFeature}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                            Add
                        </button>
                    </div>
                    {formData.features.length > 0 && (
                        <ul className="mt-2 space-y-1">
                            {formData.features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-gray-900 px-3 py-1 rounded-md"
                                >
                                    <span className="text-white">{feature}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveFeature(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Teknologi yang Digunakan */}
                <div>
                    <label className="block text-white font-medium mb-3">
                        Teknologi yang Digunakan
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newTech}
                            onChange={(e) => setNewTech(e.target.value)}
                            placeholder="Tambah teknologi"
                            className="w-full border border-gray-300 rounded-md px-4 py-3 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                        />
                        <button
                            type="button"
                            onClick={handleAddTech}
                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
                        >
                            Add
                        </button>
                    </div>
                    {formData.teknologi.length > 0 && (
                        <ul className="mt-2 space-y-1">
                            {formData.teknologi.map((tech, index) => (
                                <li
                                    key={index}
                                    className="flex justify-between items-center bg-gray-900 px-3 py-1 rounded-md"
                                >
                                    <span className="text-white">{tech}</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveTech(index)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Tombol Aksi */}
                <div className="flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={() => navigate("/dashboard/portofolio")}
                        className="px-5 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
                    >
                        {isSubmitting ? "Mengirim..." : "Tambah"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TambahPortofolio;
