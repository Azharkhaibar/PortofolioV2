import { techStackImages } from '../../constant/const';
import { useEffect, useState } from 'react';
import {Code, BadgeCheck, Briefcase } from "lucide-react";
import fotoGue from '../../../assets/public/img/about/Azhagantengjdisds.jpg'
import '../../design/style.css'
import GridProfiles from './profile_data_representastion';
import { motion } from 'framer-motion'
import BlurText from '../../../animation/BlurText/BlurText';
import SplitText from '../../../animation/SplitText/SplitText';
import GitHubCalendar from 'react-github-calendar';
import { education, experiences } from '../../../frontend/data/profile';
interface Project {
    id_portofolio: number;
    nama_project: string;
    fotoUrl?: string;
    deskripsi: string;
    publishedAt: string;
    features?: string[];
    teknologi?: string[];
}

const AboutBody: React.FC = () => {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [totalProjects, setTotalProjects] = useState(0); 
    useEffect(() => {
        const slider = document.querySelector(".infinite-slider");

        if (slider instanceof HTMLElement) {
            const sliderImages = Array.from(slider.children) as HTMLElement[];
            const imageWidth = sliderImages[0]?.offsetWidth + 30;
            let scrollPosition = 0;
            sliderImages.forEach((img) => {
                const clone = img.cloneNode(true);
                slider.appendChild(clone);
            });

            function animateSlider() {
                scrollPosition += 0.5;
                if (scrollPosition >= (imageWidth ?? 0) * sliderImages.length) {
                    scrollPosition = 0;
                }
                if (slider instanceof HTMLElement) {
                    slider.style.transform = `translateX(-${scrollPosition}px)`;
                }
                requestAnimationFrame(animateSlider);
            }
            animateSlider();
        }
    }, []);

    useEffect(() => {
        const fetchProjectData = async () => {
            setLoading(true)
            try {
                const response = await fetch('http://localhost:5000/api/portofolio')
                if (!response.ok) throw new Error('Error fetching data');
                const data: Project[] = await response.json(); 

                if (!data || data.length === 0) {
                    throw new Error("No projects found.");
                }

                setTotalProjects(data.length);

            } catch (err) {
                setError((err as Error).message);
                setProject(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProjectData();
    }, []); 

    const stats = [
        { icon: <Code size={30} className="text-gray-300" />, value: totalProjects, title: "Total Project", desc: "Innovative web solutions crafted" },
        { icon: <BadgeCheck size={30} className="text-gray-300" />, value: 0, title: "Certificate", desc: "Professional Skill Validated" },
        { icon: <Briefcase size={30} className="text-gray-300" />, value: 0, title: "Years of Experience", desc: "Continuous Learning Journey" },
    ];

    return (
        <div className="px-[2.5%]">
            <div className="w-full h-auto flex pt-28">
                <div className="w-[30%] h-[300px] sticky top-20">
                    <img src={fotoGue} alt="Azhar's Photo" className="w-[370px] rounded-xl h-[370px] object-contain mx-auto rounded-[35px]" />
                    <h3 className="text-center text-[14px] mt-3 text-gray-500">Fullstack Developer & UI/UX Designer</h3>
                </div>
                <div className="w-[70%] h-full pr-[8%] text-white">
                    <SplitText
                        text="Nice to meet you"
                        className="text-xl mb-4 text-white/40 font-light"
                        delay={40}
                    />
                    <br />
                        <SplitText
                            text="Hi there,"
                            className="text-6xl font-bold"
                            delay={40}
                        />
                        <br />
                        <SplitText
                            text="I'am Azhar Khaibar"
                            className="text-6xl font-bold"
                            delay={50}
                        />
                 
                    <BlurText
                        text={`I work as a User Interface & User Experience designer creating thoughtful experiences with the combination of design, business and marketing.`}
                        className="text-[18px] font-medium text-white/80 mt-5"
                        delay={5}
                        animateBy="letters"
                        direction="bottom"
                    />

                   <GridProfiles />
                    <motion.div
                        className="flex items-center gap-4 mt-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    >
                        {/* <motion.button
                            className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-800 text-white px-4 text-md py-2 rounded-lg shadow-md hover:bg-purple-600 transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        >
                            <Download size={20} />
                            <a href="/cv.pdf" download>Download CV</a>
                        </motion.button>
                        <motion.button
                            className="flex items-center gap-2 border-2 border-opacity-15 border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 1. }}
                        >
                            <Code size={20} />
                            <a href="/portofolio">View Project</a>
                        </motion.button> */}
                    </motion.div>
                    <BlurText
                        text={`I’m Azhar, a Fullstack Developer and UI/UX Designer with a passion for creating seamless digital experiences.  my technical knowledge.\n\nMy approach to development combines a keen eye for design with a solid understanding of both front-end and back-end technologies. Whether it’s transforming wireframes into interactive prototypes or writing clean, scalable code, I focus on delivering solutions that are reliable, scalable, and intuitive for users. Staying updated with the latest industry trends, frameworks, and design principles is a core part of my work philosophy, allowing me to bring innovative and efficient solutions to every project.\n\nBeyond technical skills, I believe in the power of collaboration and clear communication. Working with cross-functional teams has shown me the importance of aligning on vision and goals, and I thrive in environments where I can contribute creatively while also learning from others. I’m excited to continue building impactful digital experiences, and I look forward to connecting with like-minded professionals who share the same passion for technology and design. Let’s collaborate and make ideas come to life!`}
                        className="text-[22px] font-medium text-white/80 mt-8"
                        delay={20}
                        animateBy="words"
                        direction="bottom"
                    />

                    <div className="w-full max-w-4xl mx-auto py-20 px-6 text-white">
                        <h2 className="text-4xl font-bold text-center mb-16">My Journey</h2>
                        <div className="relative border-l-4 border-gray-800/60 pl-2 space-y-16">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.3 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute -left-7 top-0 w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
                                        <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className='flex items-center'>
                                            <h3 className="text-xl font-semibold">{exp.company}</h3>
                                            <h3 className="text-xl font-semibold italic">{exp.modelWork}</h3>
                                        </div>
                                        <p className="text-gray-400">{exp.date}</p>
                                        <p className="text-lg font-medium">{exp.role}</p>
                                        <p className="text-gray-300 mt-2">Tech Used: {exp.tech.join(', ')}</p>
                                        <ul className="text-gray-400 list-disc list-outside space-y-1 pl-5">
                                            {exp.tasks.map((task, i) => (
                                                <li key={i}>{task}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.3 }}
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
                    </div>
                    {/* tolong buatkan github contribution graph milik saya Azharkhaibar */}

                    <div className="flex items-center text-white mt-10 gap-5">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={`${stat.title}-${stat.value}`}
                                className="w-[300px] h-auto p-5 rounded-lg bg-gray-800/50 border border-gray-700/50"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }} // Stagger the animation with increasing delay
                            >
                                <div className="flex items-center justify-between">
                                    <div className="w-[50px] aspect-square flex items-center justify-center rounded-full bg-gray-600">
                                        {stat.icon}
                                    </div>
                                    <h2 className="text-5xl font-bold">{stat.value}</h2>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-2xl mt-4 font-semibold">{stat.title}</h3>
                                    <p className="mt-1 opacity-30">{stat.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="p-10 flex items-center gap-36 justify-center overflow-hidden mt-10">
                        <div className="infinite-slider flex gap-10">
                            {techStackImages.map((TechStack, techStackIndex) => (
                                <div key={TechStack}>
                                    <img
                                        src={TechStack}
                                        alt={`TechStack ${techStackIndex}`}
                                        className="w-55 h-55 object-cover mx-4"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBody;
