import GitHubCalendar from "react-github-calendar";

const GridProfiles = () => {
    return (
        <div className="w-full h-auto flex flex-wrap gap-5">

            {/* Learning Section */}
            <div className="p-10 basis-xl mt-10 h-auto rounded-tr-xl rounded-bl-2xl bg-gradient-to-br from-blue-700 to-[#070744] text-white shadow-lg  transition-transform">
                <h2 className="text-4xl font-bold">Currently, I am Learning Flutter and Golang</h2>
                <p className="mt-6 text-gray-200">
                    I have proficiency in the JavaScript ecosystem. Go is my next language to explore.
                    I am currently learning and building side projects to understand it better.
                </p>
            </div>

            {/* Years of Experience */}
            <div className="p-10 flex-1 bg-gradient-to-tl from-amber-700 to-amber-300 h-auto rounded-tl-3xl rounded-tr-3xl rounded-br-3xl shadow-lg  transition-transform text-gray-900">
                <h2 className="text-3xl font-bold">Years of Experience</h2>
                <p className="text-6xl mt-5 font-extrabold">1+</p>
            </div>

            {/* Work Experience */}
            <div className="p-10 rounded basis-1/3 rounded-tl-3xl rounded-bl-3xl bg-gradient-to-tr from-[#210827] to-[#9f0dc7] shadow-lg hover:scale-105 transition-transform">
                <h2 className="text-4xl font-bold">Currently I’m Working at FYPMedia</h2>
                <p className="mt-6 text-gray-200">
                    Building smarter paths for job seekers at Levels.fyi as a Senior Software Engineer: get paid, not played.
                </p>
            </div>

            {/* Transforming Startups (Hijau + Pattern Manual) */}
            <div className="p-10 rounded rounded-tr-3xl flex-2 w-6/12 rounded-br-3xl bg-green-pattern shadow-lg  transition-transform">
                <p className="text-2xl text-white">
                    Transforming startups of all scales with bespoke web experiences that leave a mark and drive growth.
                    Fueled by a love for design and development, I oversee projects from initial concepts to final launch, ensuring a flawless process.
                </p>
            </div>

            {/* Project Completed & GitHub Running */}
            <div className="flex gap-5 w-full">
                {/* Project Completed */}
                <div className="p-10 flex-1 bg-gradient-to-tl from-amber-700 to-amber-300 h-auto rounded-tl-3xl rounded-tr-3xl rounded-br-3xl shadow-lg  transition-transform text-gray-900">
                    <h2 className="text-3xl font-bold">Project Completed</h2>
                    <p className="text-5xl mt-5 font-extrabold">8+</p>
                </div>

                {/* GitHub Contributions */}
                <div className="p-10 flex-1 text-white rounded rounded-tr-3xl rounded-br-3xl bg-gradient-to-br from-amber-950 to-amber-800 shadow-lg  transition-transform">
                    <h2 className="text-2xl font-bold">GitHub Running</h2>
                    <div className="mt-6">
                        <GitHubCalendar
                            username="Azharkhaibar"
                            colorScheme="light"
                            blockSize={6.5}
                            blockMargin={4}
                            fontSize={10}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GridProfiles;
