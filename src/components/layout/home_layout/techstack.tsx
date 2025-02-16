import Firebase from '../../../assets/public/img/software/firebase.png';
import Javascript from '../../../assets/public/img/software/javascript.png';
import Java from '../../../assets/public/img/software/java.png';
import Python from '../../../assets/public/img/software/python.png';
import Typescript from '../../../assets/public/img/software/typescript.png';
import Mongodb from '../../../assets/public/img/software/mongodb.png';
import Figma from '../../../assets/public/img/software/figma.png';
import '../../design/textsphere.css';
import TextSphere from '../../ui/textsphere';

const TechStack: React.FC = () => {
    return (
        <div className="w-full h-auto flex items-center px-7">
            <div className="w-1/2 h-full p-8 pl-20 text-white">
                <h1 className="text-5xl font-medium leading-[110%] mt-10">
                    I've used these things to create powerful software that helps people and businesses 🥳
                </h1>
                <p className="mt-4 text-white/50">
                    Technology without ideas and collaboration is nothing. I combine technologies, tools, and frameworks to deliver high-quality software.
                </p>
                <div className="flex items-center mt-6 gap-4">
                    {[Firebase, Javascript, Java, Python, Typescript, Figma, Mongodb].map((logo, index) => (
                        <div key={index}>
                            <img src={logo} className="h-8 w-8 object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center overflow-hidden">
                <TextSphere />
            </div>
        </div>
    );
}

export default TechStack;
