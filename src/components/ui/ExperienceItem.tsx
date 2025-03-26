import React, { useState, useEffect} from "react";
import { motion } from "framer-motion";

interface Experience {
    id_experience: number;
    nama_instansi: string;
    periode_mulai: string;
    periode_selesai: string;
    posisi: string;
    jabatan: string;
    img_logo?: string;
    techStack: string[];
    task: string[];
}

interface Education {
    school: string;
    date: string;
    major: string;
    logo?: string;
}

interface Props {
    education: Education[];
}


const EducationExperience: React.FC<Props> = ({ education }) => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/journey/experience")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (!Array.isArray(data)) {
                    throw new Error("Invalid data format");
                }
                const fixedData = data.map((exp: any) => ({
                    ...exp, techStack: Array.isArray(exp.techStack) ? exp.techStack : typeof exp.techStack === "string" ? JSON.parse(exp.techStack) : [],
                    task: Array.isArray(exp.task) ? exp.task : typeof exp.task === "string" ? JSON.parse(exp.task) : [],
                    img_logo: exp.img_logo?.startsWith("http") ? exp.img_logo : `http://localhost:5000${exp.img_logo?.replace("..", "")}`,
                }));
                console.log("Fetched experiences:", fixedData);
                setExperiences(fixedData);
            })
            .catch((error) => console.error("Error fetching experiences:", error));
    }, []);

    return (
        <div className="">
            <h2 className="text-4xl font-bold text-center mb-16">My Journey</h2>
            <div className="relative border-l-4 border-gray-800/60 pl-2 space-y-16">
                {experiences.map((exp, index) => (
                    <motion.div key={exp.id_experience} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-8"
                    >
                        <div className="absolute -left-7 top-0 w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                            {exp.img_logo && <img src={exp.img_logo} alt={exp.nama_instansi} className="w-full h-full object-cover" />}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <h3 className="text-xl font-semibold">{exp.nama_instansi}</h3>
                                <h3 className="text-md sm:text-md md:text-xl lg:text-xl font-semibold italic ml-2">{exp.posisi}</h3>
                            </div>
                            <p className="text-gray-400">{exp.periode_mulai} - {exp.periode_selesai}</p>
                            <p className="text-lg font-medium">{exp.jabatan}</p>
                            <p className="text-gray-300 mt-2">Tech Used: {exp.techStack.join(", ")}</p>
                            <ul className="text-gray-400 list-disc list-outside space-y-1 pl-5">
                                {exp.task.map((task, i) => (
                                    <li key={i}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}

                {/* Education Section */}
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-8"
                    >
                        <div className="absolute -left-7 top-0 w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                            <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-semibold">{edu.school}</h3>
                            <p className="text-gray-400">{edu.date}</p>
                            <p className="mt-1 text-lg font-medium">{edu.major}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* GitHub Contributions */}
            
        </div>
    );
};

export default EducationExperience;
