import { FaArrowRight } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoBook } from "react-icons/go";
import BlurText from "../../../animation/BlurText/BlurText";
import Test from '../../../assets/public/img/testexperience.png';

const Pendidikan: React.FC = () => {
    const textHeadlines = [
        { text: "Developing software with 2+ years of experience" },
        { text: "Got into programming in elementary school and have worked on various projects and companies." }
    ];

    return (
        <div className="w-full text-white mt-20 px-4 sm:px-6 lg:px-12">
            <BlurText
                text={textHeadlines[0].text}
                className="text-center text-2xl pl-10 lg:pl-42 sm:text-3xl md:text-4xl lg:text-5xl px-4 sm:px-10 md:px-20 font-medium"
                delay={30}
                animateBy="words"
                direction="top"
            />

            <p className="text-center mt-4 mb-10 text-white/60 text-sm sm:text-base">
                {textHeadlines[1].text}
            </p>
            <div className="w-full flex flex-wrap justify-center gap-5 mt-6">
                <div className="w-full sm:w-[48%] flex flex-col bg-gray-800 p-5 border border-gray-700 rounded-2xl shadow-lg relative">
                    <div className="absolute top-5 left-5 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    {/* Title */}
                    <div className="text-center mt-10 w-full">
                        <div className="flex items-center justify-center mb-4">
                            <MdOutlineWork className="w-7 text-gray-600" />
                            <p className="text-xl font-bold ml-2 text-white">Experience</p>
                        </div>
                        <div className="w-full h-[1px] bg-gray-600 mb-4" />

                        {/* Experience List */}
                        <div className="flex flex-col">
                            {[
                                { date: "Jul 2022 - Aug 2022", company: "CV. DivMedia", role: "Freelance" },
                                { date: "Jan 2024 - Jul 2024", company: "Youtz Media", role: "Frontend Developer & UI/UX Designer (Internship)" },
                                { date: "Jan 2024 - Jul 2024", company: "RuangA23", role: "Frontend Developer & UI/UX Designer (Internship)" }
                            ].map((experience, index) => (
                                <div key={index} className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <img src={Test} alt="company logo" className="w-7 h-7 rounded-full" />
                                        <div className="flex flex-col text-left ml-3 text-white">
                                            <p className="text-gray-400 text-xs">{experience.date}</p>
                                            <h2 className="text-sm sm:text-base">{experience.company}</h2>
                                            <p className="text-sm text-gray-300">{experience.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-[48%] flex flex-col bg-gray-800 p-5 border border-gray-700 rounded-2xl shadow-lg relative">
                    {/* Window Icons */}
                    <div className="absolute top-5 left-5 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-center mt-10 w-full">
                        <div className="flex items-center justify-center mb-4">
                            <GoBook className="w-7 text-gray-600" />
                            <p className="text-xl font-bold ml-2 text-white">Education</p>
                        </div>
                        <div className="w-full h-[1px] bg-gray-600 mb-4" />
                        <div className="flex flex-col">
                            {[
                                { date: "2018 - 2019", school: "SMA AL-Minhaj Islamic Boarding School", major: "Matematika dan IPA" },
                                { date: "2018 - 2019", school: "Universitas Respati Indonesia", major: "Sistem Informasi" }
                            ].map((education, index) => (
                                <div key={index} className="flex justify-between items-center mb-4">
                                    <div className="flex items-center">
                                        <img src={Test} alt="school logo" className="w-7 h-7 rounded-full" />
                                        <div className="flex flex-col text-left ml-3 text-white">
                                            <h2 className="text-sm sm:text-base">{education.school}</h2>
                                            <p className="text-sm text-gray-300">{education.major}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-xs sm:text-sm">{education.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-6">
                <button className="flex items-center bg-transparent text-white py-2 px-4 border border-white/30 rounded-full hover:bg-gray-600 transition">
                    <span className="mr-2">See more</span>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Pendidikan;
