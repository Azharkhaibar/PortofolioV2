import React from "react";
import { FaDiscord, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type SocialIconProps = {
    icon: JSX.Element;
    href: string;
};

const SocialIconMapping: SocialIconProps[] = [
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaDiscord />, href: "#" },
    { icon: <MdEmail />, href: "#" },
    { icon: <FaLinkedin />, href: "#" },
    { icon: <FaGithub />, href: "#" }
];

const Footer: React.FC = () => {
    return (
        <div className="w-full h-[22vh] mt-3 px-[10%] pt-10">
            <div className="w-full h-px bg-gray-600 mb-4"></div>

            <div className="flex justify-center gap-8">
                {[
                    { menu: "Source code", href: "#" },
                    { menu: "Design", href: "#" },
                    { menu: "Project", href: "#" },
                    { menu: "Statistic", href: "#" }
                ].map((footerMenu, index) => (
                    <div key={index} className="w-[100px] mt-1">
                        <p className="text-gray-300 text-center">{footerMenu.menu}</p>
                    </div>
                ))}
            </div>

            <div className="mt-2">
                <h2 className="text-md text-white text-center">Reach me out</h2>
                <div className="flex mt-2 gap-4 justify-center items-center">
                    {SocialIconMapping.map((item, index) => (
                        <div key={index} className="text-center">
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-inherit text-xl text-white"
                            >
                                {item.icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-center mt-2 text-gray-300">© Azhar Khaibar 2024 • Got any feedback?</p>
        </div>
    );
};

export default Footer;
