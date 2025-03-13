'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { MdLanguage, MdOutlineNightsStay } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Navbar Utama */}
            <motion.nav
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full bg-transparent fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
            >
                <div className="px-6 md:px-[120px] mx-auto py-4 flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="text-2xl font-bold text-white">
                        <Link to="/" className="hover:text-teal-500 transition-all">PortoAzhar</Link>
                    </h1>

                    {/* Desktop Navigation */}
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

                    {/* Action Buttons + Hamburger Menu */}
                    <div className="flex items-center gap-6">
                        {/* Desktop Buttons */}
                        <div className="hidden md:flex items-center gap-6">
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
                        </div>

                        {/* Hamburger Menu (Mobile) */}
                        <button onClick={() => setIsOpen(true)} className="md:hidden text-white text-2xl">
                            <FaBars />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Sidebar (Mobile) */}
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-64 h-full bg-gray-900 shadow-lg z-50 flex flex-col p-6 transform transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="self-end text-white text-2xl">
                    <FaTimes />
                </button>

                {/* Sidebar Links - Semua text-left */}
                <ul className="mt-6 space-y-6 text-left">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" },
                        { name: "Portofolio", path: "/portofolio" },
                        { name: "Blog", path: "/blog" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="text-white text-lg hover:text-teal-500 transition-all block"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Sidebar Buttons */}
                <div className="mt-10 flex flex-col space-y-4">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="rounded-full bg-gradient-to-r from-pink-600 to-purple-800 text-white font-bold py-2 px-4 flex items-center justify-start hover:bg-teal-600 transition-all"
                    >
                        Hire Me
                        <FaArrowRight className="ml-2 text-black text-sm" />
                    </motion.button>
                </div>
            </motion.div>

            {/* Overlay (Menutup Sidebar saat diklik) */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Navbar;
