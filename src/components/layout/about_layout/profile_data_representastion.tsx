import GitHubCalendar from "react-github-calendar";

const GridProfiles = () => {
    return (
        <div className="w-full h-auto grid gap-5 mt-10
                        grid-cols-1 sm:grid-cols-6 sm:grid-rows-1
                        grid-areas-desktop">

            {/* Learning Section (Lebar penuh) */}
            <div className="p-10 bg-gradient-to-br from-blue-700 to-[#070744] text-white shadow-lg 
                            rounded-tr-xl rounded-bl-2xl h-auto 
                            sm:col-span-4 sm:row-span-2 area-learning">
                <h2 className="text-4xl font-bold">Currently, I am Learning Flutter and Golang</h2>
                <p className="mt-6 text-gray-200">
                    I have proficiency in the JavaScript ecosystem. Go is my next language to explore.
                    I am currently learning and building side projects to understand it better.
                </p>
            </div>

            {/* Years of Experience */}
            <div className="p-10 bg-gradient-to-tl from-amber-700 to-amber-300 rounded rounded-tr-3xl rounded-br-5xl rounded-bl-3xl
                            shadow-lg text-gray-900 h-auto 
                            sm:col-span-2 sm:row-span-2 area-years">
                <h2 className="text-3xl font-bold">Years of Experience</h2>
                <p className="text-6xl mt-5 font-extrabold">1+</p>
            </div>

            {/* Work Experience */}
            <div className="p-10 bg-gradient-to-tr from-[#210827] to-[#9f0dc7] rounded-tl-3xl rounded rounded-bl-3xl 
                            shadow-lg hover:scale-105 transition-transform h-auto 
                            sm:col-span-2 sm:row-span-2 area-work">
                <h2 className="text-4xl font-bold">Currently I’m Working at FYPMedia</h2>
                <p className="mt-6 text-gray-200">
                    Building smarter paths for job seekers at Levels.fyi as a Senior Software Engineer: get paid, not played.
                </p>
            </div>

            {/* Transforming Startups (Hijau + Pattern Manual) */}
            <div className="p-10 rounded bg-green-pattern shadow-lg rounded-tr-3xl rounded-br-3xl h-96
                            sm:col-span-4 sm:row-span-2 area-transform">
                <p className="text-2xl text-white">
                    Transforming startups of all scales with bespoke web experiences that leave a mark and drive growth.
                    Fueled by a love for design and development, I oversee projects from initial concepts to final launch, ensuring a flawless process.
                </p>
            </div>

            <div className="p-10 max-h-72 bg-gradient-to-br from-amber-950 to-amber-800 rounded-3xl 
                            shadow-lg text-white h-auto 
                            sm:col-span-4 sm:row-span-2 area-github">
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

            {/* Project Completed */}
            <div className="p-10 max-h-72 bg-gradient-to-tl from-amber-700 to-amber-300 rounded-3xl 
                            shadow-lg text-gray-900 h-auto 
                            sm:col-span-2 sm:row-span-2 area-projects">
                <h2 className="text-3xl font-bold">Project Completed</h2>
                <p className="text-5xl mt-5 font-extrabold">8+</p>
            </div>


        </div>
    );
};

export default GridProfiles;
