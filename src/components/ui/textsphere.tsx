import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import "../design/textsphere.css";

const TextSphere: React.FC = () => {
    useEffect(() => {
        const container = document.querySelector(".tagscloud");
        const Texts = [
            "Chakra UI",
            "Flask",
            "Python",
            "Typescript",
            "Firebase",
            "SCSS",
            "Golang",
            "Express",
            "Nodejs",
            "C++",
            "Figma",
            "Canva",
            "MySQL",
            "MongoDB",
            "Next.js",
            "React Native",
            "Bootstrap",
            "GIT",
        ];

        const options = {
            radius: 300,
            maxSpeed: "normal" as "normal" | "slow" | "fast",
            initSpeed: "normal" as "normal" | "slow" | "fast",
            keep: true,
        };

        if (container instanceof HTMLElement) {
            container.innerHTML = '';
            TagCloud([container], Texts, options);
        }

        return () => {
            if (container instanceof HTMLElement) {
                container.innerHTML = '';
            }
        };
    }, []);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="text-sphere">
                <span className="tagscloud" role="img" aria-label="Tag cloud of technologies"></span>
            </div>
        </div>
    );
};

export default TextSphere;
