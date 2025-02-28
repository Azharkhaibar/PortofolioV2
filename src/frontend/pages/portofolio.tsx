import { useState, useEffect } from "react";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import PortofolioBody from "../../components/layout/portofolio_layout/portofoliobody";
import axios from "axios";

const Portofolio = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolios = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/portofolio");
                setPortfolios(response.data);
            } catch (error) {
                console.error("Error fetching portfolios:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolios();
    }, []);

    return (
        <div className="bg-[#0a0b10] min-h-screen">
            <Navbar />
            <PortofolioBody
                activeSection="0"  
                portofolios={portfolios}
                loading={loading}
            />
            <Footer />
        </div>
    );
};

export default Portofolio;
