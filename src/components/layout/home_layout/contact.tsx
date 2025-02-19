import { useState } from "react";
import { Instagram, Youtube, Linkedin, Github } from "lucide-react";
import instagramMedia from "../../../assets/public/img/media/instagram.png";
import linkedinMedia from "../../../assets/public/img/media/linkedin.png";
import githubMedia from "../../../assets/public/img/media/github.png";
import youtubeMedia from "../../../assets/public/img/media/Twitter.png";

const Contact_Home = () => {
    const ListMenuSocial = [
        { icon: <Instagram size={20} />, title: "Instagram", LinkSosmed: "#", img: instagramMedia },
        { icon: <Youtube size={20} />, title: "Youtube", LinkSosmed: "#", img: youtubeMedia },
        { icon: <Linkedin size={20} />, title: "LinkedIn", LinkSosmed: "#", img: linkedinMedia },
        { icon: <Github size={20} />, title: "Github", LinkSosmed: "#", img: githubMedia },
    ];

    const [activeIMG, setActiveIMG] = useState(ListMenuSocial[0].img);
    const [activeLink, setActiveLink] = useState(ListMenuSocial[0].LinkSosmed);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="p-8 md:px-33">
            <h2 className="text-white text-5xl font-semibold mb-6">Contact Me</h2>
            <div className="flex flex-col md:flex-row gap-8 mt-10">

                <div className="w-full md:w-3/12 flex flex-col gap-2">
                    {ListMenuSocial.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 cursor-pointer p-3 rounded-lg transition-all duration-300
                  ${activeIndex === index ? "border-l-4 border-purple-500 bg-gray-700" : "hover:bg-gray-800"}
              `}
                            onClick={() => {
                                setActiveIMG(item.img);
                                setActiveLink(item.LinkSosmed);
                                setActiveIndex(index);
                            }}
                        >
                            <a href={item.LinkSosmed} target="_blank" rel="noopener noreferrer">
                                <span className="text-white">{item.icon}</span>
                            </a>
                            <h3 className="text-lg font-medium text-white">{item.title}</h3>
                        </div>
                    ))}
                </div>

                {/* Image Preview */}
                <div className="w-full md:w-3/12 flex justify-center items-center">
                    <a href={activeLink} target="_blank" rel="noopener noreferrer">
                        <img
                            src={activeIMG}
                            alt="Selected Media"
                            className="w-full max-w-xs h-auto object-contain rounded-lg shadow-lg"
                        />
                    </a>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-5/12">
                    <h2 className="text-white text-2xl font-medium">Have Something to Discuss?</h2>
                    <p className="text-gray-400 mt-2">Send me a message and let's talk.</p>

                    <form className="mt-5 space-y-4">
                        <div>
                            <label htmlFor="nama" className="text-white block mb-2">
                                Nama
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="from" className="text-white block mb-2">
                                From
                            </label>
                            <input
                                type="text"
                                placeholder="From"
                                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="text-white block mb-2">
                                Message
                            </label>
                            <textarea
                                placeholder="Type your message..."
                                rows={4}
                                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-3/12 bg-gradient-to-r from-pink-600 to-purple-800 text-white font-semibold py-2 rounded-lg text-md hover:bg-purple-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact_Home;
