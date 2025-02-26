import Firebase from '../../../assets/public/img/software/firebase.png';
import Javascript from '../../../assets/public/img/software/javascript.png';
import Java from '../../../assets/public/img/software/java.png';
import Python from '../../../assets/public/img/software/python.png';
import Typescript from '../../../assets/public/img/software/typescript.png';
import Mongodb from '../../../assets/public/img/software/mongodb.png';
import Figma from '../../../assets/public/img/software/figma.png';
import '../../design/textsphere.css';
import TextSphere from '../../ui/textsphere';
import SplitText from '../../../animation/SplitText/SplitText';
import AnimatedContent from '../../../animation/AnimatedContent/AnimatedContent';
import { motion } from "framer-motion";
const TechStack: React.FC = () => {
    const logos = [Firebase, Javascript, Java, Python, Typescript, Figma, Mongodb];
    const logoVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut", delay: index * 0.2 }
        })
    };
    return (
        <div className="w-full h-auto flex items-center px-7">
            <div className="w-1/2 h-full p-8 pl-20 text-white">
                <SplitText
                    text=" I've used these things to create powerful software that helps people and businesses"
                    className="text-5xl font-medium leading-[110%] mt-10"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                />
                <AnimatedContent
                    distance={40}
                    direction="vertical"
                    reverse={false}
                    config={{ tension: 80, friction: 25 }}
                    initialOpacity={0.2}
                    animateOpacity
                    scale={1.1}
                    threshold={0.2}
                >
                    <p className="mt-4 text-white/50">
                        Technology without ideas and collaboration is nothing. I combine technologies, tools, and frameworks to deliver high-quality software.
                    </p>
                </AnimatedContent>
                <motion.div
                    className="flex items-center mt-6 gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {logos.map((logo, index) => (
                        <motion.div key={index} variants={logoVariants} custom={index}>
                            <img src={logo} className="h-8 w-8 object-contain" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center overflow-hidden">
                <TextSphere />
            </div>
        </div>
    );
}

export default TechStack;
