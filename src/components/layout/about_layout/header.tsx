import Navbar from "../navbar";
import Particles from "../../../backgroundAnimation/Particles/Particles";

const AboutHeader = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full h-[30vh] bg-black relative">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                />
                
            </div>
        </div>
    )
}

export default AboutHeader;
