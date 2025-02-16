import React from "react";
import { ProjectFlex } from "../../../frontend/data/featuredproject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";

const FeaturedProject: React.FC = () => {
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
                    slidesToShow: 3, // Show 3 items
                },
            },
            {
                breakpoint: 768, // Mobile breakpoint (phones and smaller tablets)
                settings: {
                    slidesToShow: 1, // Show 1 item
                    centerMode: true, // Center the active item
                    centerPadding: "30px", // Adjust padding for centered effect
                    focusOnSelect: true, // Ensure user can click to select a slide
                },
            },
        ],
    };

    return (
        <div className="w-full h-auto text-white mt-10 px-4 sm:px-8 lg:px-[8%]">
            <h2 className="text-5xl font-medium text-center">Featured Project</h2>
            <p className="text-center mt-3 text-lg">Check out all of my Projects</p>

            <div className="h-auto w-full mt-12 text-white">
                <Slider {...ProjectSliderSettings}>
                    {ProjectFlex.map((projectAccess) => (
                        <div
                            key={projectAccess.id}
                            className="w-full h-auto flex justify-center items-center mx-auto"
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
                        </div>
                    ))}
                </Slider>
                <div className="p-3 rounded-lg bg-transparent border border-gray-700 mt-6 w-[200px] mx-auto text-center cursor-pointer">
                    See All Projects
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
