import React from "react";
import { ProjectFlex } from "../../../frontend/data/featuredproject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import ShinyText from "../../../animation/ShinyText/ShinyText";

const FeaturedProject: React.FC = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 }
        })
    };
    const ProjectSliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 4, // Desktop shows 4 items
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024, // Tablet breakpoint (tablet or small laptops)
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "30px",
                    focusOnSelect: true,
                },
            },
        ],
    };

    return (
        <div className="w-full h-auto text-white mt-10 px-4 sm:px-8 lg:px-[8%]">
            <ShinyText text="Featured Project" disabled={false} speed={3} className="shiny-text text-6xl pl-[33%] font-medium text-center" />
            <p className="text-center mt-3 text-lg">Check out all of my Projects</p>

            <div className="h-auto w-full mt-12 text-white">
                <Slider {...ProjectSliderSettings}>
                    {ProjectFlex.map((projectAccess, index) => (
                        <motion.div
                            key={projectAccess.id}
                            className="w-full h-auto flex justify-center items-center mx-auto"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            custom={index}
                        >
                            <div className="w-[300px] sm:w-[350px] md:w-[300px] mx-auto h-auto p-6 rounded-lg shadow-md border border-gray-700 bg-gray-900">
                                <h3 className="text-2xl mb-3 font-semibold text-white">{projectAccess.nameproject}</h3>
                                <p className="mb-4 text-gray-300">{projectAccess.descriptionproject}</p>

                                <div className="flex items-center mb-4 flex-wrap">
                                    {projectAccess.techStack.map((logoStack, index) => (
                                        <div key={index} className="mr-2 mb-2">
                                            <span className="text-white text-2xl">{logoStack.icon}</span>
                                        </div>
                                    ))}
                                </div>

                                <img
                                    src={projectAccess.projectIMG}
                                    className="w-full h-[200px] object-cover rounded-md mb-4"
                                    alt={projectAccess.nameproject}
                                />

                                <div className="flex items-center cursor-pointer mt-2">
                                    <p className="text-gray-400 font-semibold mr-1">See more</p>
                                    <FaArrowRight className="text-gray-400" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Slider>

                <motion.div
                    className="p-3 rounded-lg bg-transparent border border-gray-700 mt-6 w-[200px] mx-auto text-center cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <button>
                        <a href="/portofolio">
                            See All Projects
                        </a>
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default FeaturedProject;
