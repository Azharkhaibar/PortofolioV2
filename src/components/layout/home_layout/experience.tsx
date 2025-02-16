import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { GoBook } from "react-icons/go";
import Test from '../../../assets/public/img/testexperience.png';

const Pendidikan: React.FC = () => {
    const textHeadlines = [
        { text: "Developing software with 2+ years of experience." },
        { text: "Got into programming in elementary school and have worked on various projects and companies." }
    ];

    return (
        <div className="w-full h-auto text-white mt-18">
            <h1 className="text-center text-5xl font-medium">
                {textHeadlines[0].text}
            </h1>
            <p className="text-center mt-4 text-white/60">
                {textHeadlines[1].text}
            </p>

            <div className="w-full h-[70vh] flex justify-center items-center mt-4 gap-5">
                <div className="w-[42%] h-[80%] flex flex-col items-center p-5 border border-gray-700 rounded-2xl shadow-lg relative">
                    <div className="absolute top-5 left-5 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="text-center mt-10 w-[90%]">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center mx-auto">
                                <MdOutlineWork className="w-7 text-gray-600" />
                                <p className="text-xl font-bold ml-2 text-white">Experience</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-600 mb-4" />
                        <div>
                            <div className="flex flex-col justify-between">
                                {[
                                    { date: "jul 2022 - aug 2022", company: "CV. DivMedia", role: "Matematika dan Ilmu Pengetahuan Alam", type: "Freelance" },
                                    { date: "jan 2024 - jul 2024", company: "Youtz Media", role: "Frontend Developer & UI/UX Designer", type: "Internship" },
                                    { date: "jan 2024 - jul 2024", company: "RuangA23", role: "Frontend Developer & UI/UX Designer", type: "Internship" }
                                ].map((experience, index) => (
                                    <div key={index} className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <img src={Test} alt="company logo" className="w-7 h-7" />
                                            <div className="flex flex-col text-left ml-3 text-white">
                                                <p className="text-gray-600">{experience.date}</p>
                                                <h2>{experience.company}</h2>
                                                <p>{experience.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-right">{experience.type}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-4">see all Experience
                                <FaArrowCircleRight className="w-5 text-gray-600 ml-2" />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-[42%] h-[80%] flex flex-col items-center p-5 bg-blackAlpha-50 border border-gray-700 rounded-2xl shadow-lg relative">
                    <div className="absolute top-5 left-5 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>

                    <div className="text-center mt-10 w-[90%]">
                        <div className="flex items-center mb-4">
                            <div className="flex items-center mx-auto">
                                <GoBook className="w-7 text-gray-600" />
                                <p className="text-xl font-bold ml-2">Education</p>
                            </div>
                        </div>
                        <div className="w-full h-[1px] bg-gray-600 mb-4" />
                        <div>
                            <div className="flex flex-col justify-between">
                                {[
                                    { date: "2018 - 2019", school: "SMA AL-Minhaj Islamic Boarding School", major: "Matematika dan Ilmu Pengetahuan Alam" },
                                    { date: "2018 - 2019", school: "Universitas Respati Indonesia", major: "Sistem Informasi" }
                                ].map((education, index) => (
                                    <div key={index} className="flex justify-between items-center mb-4">
                                        <div className="flex items-center">
                                            <img src={Test} alt="school logo" className="w-7 h-7" />
                                            <div className="flex flex-col text-left ml-3 text-white">
                                                <h2>{education.school}</h2>
                                                <p>{education.major}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-right">{education.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pendidikan;
