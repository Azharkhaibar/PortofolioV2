import { useState } from "react";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import PortofolioBody from "../../components/layout/portofolio_layout/portofoliobody";
const Portofolio = () => {
    return(
        <div className="bg-[#0F1017]">
            <PortofolioBody />
            <Footer />
        </div>
    )
}

export default Portofolio;