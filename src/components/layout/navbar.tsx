'use client';
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { MdLanguage, MdOutlineNightsStay } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full bg-transparent fixed top-0 left-0 right-0 z-40 backdrop-blur-lg"
        >
            <div className="px-[120px] mx-auto py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex items-center gap-8"
                >
                    <h1 className="text-2xl font-bold text-white">
                        <Link to="/" className="hover:text-teal-500 transition-all">PortoAzhar</Link>
                    </h1>
                    <ul className="hidden md:flex gap-8 items-center list-none">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Portofolio", path: "/portofolio" },
                            { name: "Blog", path: "/blog" },
                            { name: "Contact", path: "/contact" }
                        ].map((item) => (
                            <motion.li
                                key={item.name}
                                whileHover={{ scale: 1.1, color: "#14b8a6", transition: { duration: 0.3 } }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Link
                                    to={item.path}
                                    className="text-white hover:text-teal-500 transition-all"
                                >
                                    {item.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-6"
                >
                    {[IoSearch, MdLanguage, MdOutlineNightsStay].map((Icon, index) => (
                        <motion.div key={index} whileHover={{ scale: 1.2 }}>
                            <Icon className="text-white text-xl hover:text-teal-500 transition-all" />
                        </motion.div>
                    ))}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-full bg-gradient-to-r from-pink-600 to-purple-800 text-white font-bold py-2 px-4 flex items-center hover:bg-teal-600 transition-all"
                    >
                        Hire Me
                        <FaArrowRight className="ml-2 text-black text-sm" />
                    </motion.button>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
