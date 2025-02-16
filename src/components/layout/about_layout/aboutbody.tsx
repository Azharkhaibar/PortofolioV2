import { techStackImages } from '../../constant/const';
import { useEffect } from 'react';
import { Download, Code, BadgeCheck, Briefcase } from "lucide-react";
import fotoGue from '../../../assets/public/img/about/Azhagantengjdisds.jpg'
import '../../design/style.css'
const AboutBody: React.FC = () => {

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

    const stats = [
        { icon: <Code size={30} className="text-gray-300" />, value: 0, title: "Total Project", desc: "Innovative web solutions crafted" },
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
                    <h2 className="text-6xl font-medium ">Hi!, I am Azhar</h2>
                    <div className="flex items-center gap-4 mt-6">
                        <button className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-800 text-white px-4 text-md py-2 rounded-lg shadow-md hover:bg-purple-600 transition">
                            <Download size={20} />
                            <a href="/cv.pdf" download>Download CV</a>
                        </button>
                        <button className="flex items-center gap-2 border-2 border-opacity-15 border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
                            <Code size={20} />
                            <a href="/projects">View Project</a>
                        </button>
                    </div>
                    <p className="text-[16px] mt-8">
                        I’m Azhar, a Fullstack Developer and UI/UX Designer with a passion for creating seamless digital experiences. My technical and creative background allows me to bridge the gap between design and development, ensuring that every project I work on is not only functional but also visually engaging. My internship at Youtzmedia gave me invaluable hands-on experience, allowing me to refine my approach to designing user-centered products while also mastering the technical skills needed to build them. Through this role, I worked on over 9 projects, each bringing unique challenges that further deepened my problem-solving abilities and broadened my technical knowledge. <br /><br />

                        My approach to development combines a keen eye for design with a solid understanding of both front-end and back-end technologies. Whether it’s transforming wireframes into interactive prototypes or writing clean, scalable code, I focus on delivering solutions that are reliable, scalable, and intuitive for users. Staying updated with the latest industry trends, frameworks, and design principles is a core part of my work philosophy, allowing me to bring innovative and efficient solutions to every project.<br /><br />

                        Beyond technical skills, I believe in the power of collaboration and clear communication. Working with cross-functional teams has shown me the importance of aligning on vision and goals, and I thrive in environments where I can contribute creatively while also learning from others. I’m excited to continue building impactful digital experiences, and I look forward to connecting with like-minded professionals who share the same passion for technology and design. Let’s collaborate and make ideas come to life!
                    </p>

                    <div className="flex items-center text-white mt-10 gap-5">
                        {stats.map((stat, index) => (
                            <div key={index} className="w-[300px] h-auto p-5 rounded-lg bg-gray-800">
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
                            </div>
                        ))}
                    </div>
                    
                    <div className="p-10 flex items-center gap-36 justify-center overflow-hidden mt-10">
                        <div className="infinite-slider flex gap-10">
                            {techStackImages.map((TechStack, index) => (
                                <div key={index}>
                                    <img
                                        src={TechStack}
                                        alt={`TechStack ${index}`}
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
