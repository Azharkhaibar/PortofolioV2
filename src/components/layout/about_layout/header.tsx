import Navbar from "../navbar";
import Footer from "../footer";

const AboutHeader = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full h-[30vh] bg-purple-900">
                <h1 className="text-5xl ml-[7%] pt-[8%] text-white">About Me</h1>
            </div>
        </div>
    )
}

export default AboutHeader;
