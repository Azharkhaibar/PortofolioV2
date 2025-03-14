import React from "react";
import Header from "../../components/layout/about_layout/header";
import AboutBody from "../../components/layout/about_layout/aboutbody";
import Footer from "../../components/layout/footer";
const About: React.FC = () => {
    return (
        <div className="] min-h-screen">
            <Header />
            <AboutBody />
            <Footer />
        </div>
    )
}

export default About;