import React from "react";
import Navbar from "../../components/layout/navbar";
import Header from "../../components/layout/home_layout/header";
import Footer from "../../components/layout/footer";
import BlogHome from "../../components/layout/home_layout/blog";
import Pendidikan from "../../components/layout/home_layout/experience";
import TechStack from "../../components/layout/home_layout/techstack";
import FeaturedProject from "../../components/layout/home_layout/featuredproject";
import Certificate from "../../components/layout/home_layout/certificate";
import Contact_Home from "../../components/layout/home_layout/contact";

const Home = () => {
    return (
        <div className="bg-[#0a0b10]">
            <Navbar />
            <Header />
            <Pendidikan />
            <TechStack />
            <FeaturedProject />
            <Certificate />
            <BlogHome />
            <Contact_Home />
            <Footer />
        </div>
    )
}

export default Home;
