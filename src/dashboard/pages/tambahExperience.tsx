import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Plus, X } from "lucide-react";

const TambahExperience = () => {
    const [loading, setLoading] = useState(false);
    const [techStack, setTechStack] = useState<string[]>([]);
    const [taskList, setTaskList] = useState<string[]>([]);

    const formik = useFormik({
        initialValues: {
            nama_instansi: "",
            periode_mulai: "", // Ganti dari 'tanggal'
            periode_selesai: "", // Tambahkan ini
            posisi: "",
            jabatan: "",
            img_logo: null as File | null,
        },
        validationSchema: Yup.object({
            nama_instansi: Yup.string().required("Nama instansi wajib diisi"),
            periode_mulai: Yup.string().required("Periode mulai wajib diisi"), // Ubah dari 'tanggal'
            periode_selesai: Yup.string().required("Periode selesai wajib diisi"), // Tambahkan validasi
            posisi: Yup.string().required("Posisi wajib diisi"),
            jabatan: Yup.string().required("Jabatan wajib diisi"),
            img_logo: Yup.mixed().test("fileType", "Format gambar harus JPG, JPEG, atau PNG", (value) => {
                if (!value) return true;
                return value instanceof File && ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
            }),
        }),
        onSubmit: async (valuesFormExperience) => {
            setLoading(true);
            try {
                const formData = new FormData();
                formData.append("nama_instansi", valuesFormExperience.nama_instansi);
                formData.append("periode_mulai", new Date(valuesFormExperience.periode_mulai).toISOString().split("T")[0]);
                formData.append("periode_selesai", new Date(valuesFormExperience.periode_selesai).toISOString().split("T")[0]);
                formData.append("posisi", valuesFormExperience.posisi);
                formData.append("jabatan", valuesFormExperience.jabatan);

                if (valuesFormExperience.img_logo instanceof File) {
                    formData.append("img_logo", valuesFormExperience.img_logo);
                }

                formData.append("techStack", JSON.stringify(techStack));
                formData.append("task", JSON.stringify(taskList)); // Pastikan key `task`

                console.log("Data yang dikirim ke backend:", Object.fromEntries(formData.entries()));

                await axios.post("http://localhost:5000/api/journey/experience", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });

                alert("Experience berhasil ditambahkan!");
            } catch (error) {
                console.error("Gagal menambahkan pengalaman", error);
                alert("Gagal menambahkan pengalaman");
            }
            setLoading(false);
        }

    });


    const tambahTechStack = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event.currentTarget.value) {
            event.preventDefault();
            setTechStack([...techStack, event.currentTarget.value]);
            event.currentTarget.value = "";
        }
    };

    const tambahTask = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && event.currentTarget.value) {
            event.preventDefault();
            setTaskList([...taskList, event.currentTarget.value]);
            event.currentTarget.value = "";
        }
    };

    const hapusTechStack = (index: number) => {
        setTechStack(techStack.filter((_, i) => i !== index));
    };

    const hapusTask = (index: number) => {
        setTaskList(taskList.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Tambah Experience</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <input
                    className="w-full p-2 border rounded"
                    type="text"
                    placeholder="Nama Instansi"
                    {...formik.getFieldProps("nama_instansi")}
                />
                {formik.touched.nama_instansi && formik.errors.nama_instansi && <p className="text-red-500">{formik.errors.nama_instansi}</p>}

                <input
                    className="w-full p-2 border rounded"
                    type="date"
                    {...formik.getFieldProps("periode_mulai")}
                />
                {formik.touched.periode_mulai && formik.errors.periode_mulai && <p className="text-red-500">{formik.errors.periode_mulai}</p>}

                <input
                    className="w-full p-2 border rounded"
                    type="date"
                    {...formik.getFieldProps("periode_selesai")}
                />
                {formik.touched.periode_selesai && formik.errors.periode_selesai && <p className="text-red-500">{formik.errors.periode_selesai}</p>}


                <input
                    className="w-full p-2 border rounded"
                    type="text"
                    placeholder="Posisi"
                    {...formik.getFieldProps("posisi")}
                />
                {formik.touched.posisi && formik.errors.posisi && <p className="text-red-500">{formik.errors.posisi}</p>}

                <input
                    className="w-full p-2 border rounded"
                    type="text"
                    placeholder="Jabatan"
                    {...formik.getFieldProps("jabatan")}
                />
                {formik.touched.jabatan && formik.errors.jabatan && <p className="text-red-500">{formik.errors.jabatan}</p>}

                {/* Tech Stack */}
                <div>
                    <label className="block font-semibold mb-2">Tech Stack</label>
                    <input className="w-full p-2 border rounded" type="text" placeholder="Tekan Enter untuk menambah" onKeyDown={tambahTechStack} />
                    <div className="flex flex-wrap gap-2 mt-2">
                        {techStack.map((tech, index) => (
                            <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                                {tech}
                                <button type="button" onClick={() => hapusTechStack(index)} className="text-white">
                                    <X size={16} />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Task List */}
                <div>
                    <label className="block font-semibold mb-2">Task</label>
                    <input className="w-full p-2 border rounded" type="text" placeholder="Tekan Enter untuk menambah" onKeyDown={tambahTask} />
                    <div className="flex flex-wrap gap-2 mt-2">
                        {taskList.map((task, index) => (
                            <span key={index} className="bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                                {task}
                                <button type="button" onClick={() => hapusTask(index)} className="text-white">
                                    <X size={16} />
                                </button>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Upload Gambar */}
                <input className="w-full p-2 border rounded" type="file" accept="image/png, image/jpeg, image/jpg"
                    onChange={(event) => formik.setFieldValue("img_logo", event.currentTarget.files?.[0] || null)}
                />
                {formik.errors.img_logo && <p className="text-red-500">{formik.errors.img_logo}</p>}

                <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 flex items-center justify-center gap-2">
                    {loading ? "Menyimpan..." : (<><Plus size={18} /> Tambah Experience</>)}
                </button>
            </form>
        </div>
    );
};

export default TambahExperience;
