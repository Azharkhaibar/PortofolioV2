// src/components/Navbar.tsx
import { FaArrowRight } from "react-icons/fa";
import { MdLanguage, MdOutlineNightsStay } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import StarBorder from "../../animation/StarBorder/StarBorder";

const Navbar: React.FC = () => {
    return (
        <nav className="w-full bg-transparent fixed top-0 left-0 right-0 z-40 backdrop-blur-lg">
            <div className="px-[120px] mx-auto py-4 flex justify-between items-center">
                <div className="flex items-center gap-8">
                    <h1 className="text-2xl font-bold text-white">PortoAzhar</h1>
                    <ul className="hidden md:flex gap-8 items-center list-none">
                        <li><Link to="/" className="text-white hover:text-teal-500 transition-all">Home</Link></li>
                        <li><Link to="/about" className="text-white hover:text-teal-500 transition-all">About</Link></li>
                        <li><Link to="/portofolio" className="text-white hover:text-teal-500 transition-all">Portofolio</Link></li>
                        <li><Link to="/blog" className="text-white hover:text-teal-500 transition-all">Blogs</Link></li>
                        <li><Link to="/contact" className="text-white hover:text-teal-500 transition-all">Contact</Link></li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <IoSearch className="text-white text-xl hover:text-teal-500 transition-all" />
                    <MdLanguage className="text-white text-xl hover:text-teal-500 transition-all" />
                    <MdOutlineNightsStay className="text-white text-xl hover:text-teal-500 transition-all" />
                    <button className="rounded-full bg-gradient-to-r from-pink-600 to-purple-800 text-white font-bold py-2 px-4 flex items-center hover:bg-teal-600 transition-all">
                        Hire Me
                        <FaArrowRight className="ml-2 text-black text-sm" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
