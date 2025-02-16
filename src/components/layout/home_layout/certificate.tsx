import { CertificateData } from "../../../frontend/data/certificatedata";

const Certificate: React.FC = () => {
    return (
        <div className="w-full h-auto mt-24 px-7 flex flex-col md:flex-row">
            {/* Left Column (Title and Description) */}
            <div className="w-full md:w-1/3 h-full text-white mb-6 md:mb-0 md:ml-24">
                <h1 className="text-4xl md:text-5xl font-medium mb-4">Certifications</h1>
                <p className="mt-2 w-full md:w-[350px] text-white">
                    I'm always learning new things and improving my skills. Here are some of my certifications.
                </p>
            </div>

            {/* Right Column (Certificates List) */}
            <div className="w-full md:w-2/3 h-full text-white">
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    {CertificateData.map((certificate) => (
                        <div
                            key={certificate.id}
                            className="w-full sm:w-1/2 md:w-[400px] h-auto bg-gray-900 p-5 border-2 border-gray-600 rounded-xl relative cursor-pointer"
                        >
                            <img
                                src={certificate.company}
                                alt={`${certificate.title} logo`}
                                className="w-20 h-20 object-contain absolute top-4 left-4"
                            />
                            <h2 className="text-xl mt-24">{certificate.title}</h2>
                            <p className="mt-2 text-white">{certificate.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificate;
