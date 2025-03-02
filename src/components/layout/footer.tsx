import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaDiscord />, href: "#" },
    { icon: <MdEmail />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaGithub />, href: "#" }
];

const footerLinks = [
    { label: "Source Code", href: "#" },
    { label: "Design", href: "#" },
    { label: "Project", href: "#" },
    { label: "Statistic", href: "#" }
];

const Footer: React.FC = () => {
    return (
        <footer className="w-full mt-6 px-10 py-8 text-gray-300">
            {/* Garis Pemisah */}
            <div className="w-full h-px bg-gray-700 mb-6"></div>

            {/* Menu Footer */}
            <nav className="flex justify-center gap-6 mb-4">
                {footerLinks.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        className="hover:text-white transition duration-300"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* Social Media */}
            <div className="text-center mb-4">
                <h2 className="text-white text-lg mb-2">Reach me out</h2>
                <div className="flex justify-center gap-5">
                    {socialLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-gray-400 hover:text-white transition duration-300"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>

            {/* Copyright */}
            <p className="text-center text-sm text-gray-400">
                © Azhar Khaibar 2024 • Got any feedback?
            </p>
        </footer>
    );
};

export default Footer;
