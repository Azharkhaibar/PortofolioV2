import { useState } from "react";
import { formContact } from "../../../lib/interface/form";
import { User, Mail, MessageCircle, Check, X, Linkedin, Instagram, Youtube, Github, MessageCircleCode } from "lucide-react";
import Navbar from "../navbar";
import Avatar from "react-avatar";
const Contact = () => {

    const [formData, setFormData] = useState<formContact>({
        nama: "",
        email: "",
        message: "",
    })
    const [status, setStatus] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formData.nama || !formData.email || !formData.message) {
            setStatus("Semua field harus diisi");
            return;
        }
        const payload = {
            nama: formData.nama,
            email: formData.email,
            message: formData.message,
        };

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            if (response.ok) {
                setStatus("Pesan berhasil dikirim!");
                setFormData({ nama: "", email: "", message: "" });
            } else {
                setStatus(result.error || "Terjadi kesalahan.");
            }
        } catch (error) {
            setStatus("Terjadi error: " + (error as Error).message);
        }
    };


    const SocialMediaStair = [
        { icon: <Instagram size={20} className="text-white" />, href: "www.instagram.com", value: "Instagram", Title: 'Instagram', desc: '@azharsykri', bgColor: "bg-pink-600" },
        { icon: <Youtube size={20} className="text-white" />, href: "www.youtube.com", value: "youtube", Title: 'Youtube', desc: 'YouTube Channel', bgColor:"bg-red-600" },
        { icon: <Github size={20} className="text-white" />, href: "www.github.com", Title: 'Github', desc: '@AzharKhaibar', bgColor: "bg-gray-700" },
        { icon: <Github size={20} className="text-white" />, Title: 'Github', desc: '@AzharKhaibar',bgColor: "bg-black" }
    ]
    return (
        <div>
            <Navbar />
            <div className="w-full h-auto relative">
                <div className="absolute w-[400px] h-[400px] z-10 rounded-full blur-[200px] bg-purple-500/60 top-[10%]"></div>
                {status && (
                    <>
                        <div
                            className="fixed inset-0 bg-black/40 backdrop-blur-md transition duration-300 z-50"
                            onClick={() => setStatus(null)}
                        ></div>
                        <div className="fixed inset-0 flex items-center justify-center z-60">
                            <div className="relative flex flex-col items-center p-8 space-y-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl transform transition duration-300 hover:scale-105">
                                <div className="flex items-center gap-3">
                                    <Check className="w-10 h-10" />
                                    <h2 className="text-2xl font-extrabold">{status}</h2>
                                </div>
                                <button
                                    onClick={() => setStatus(null)}
                                    className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-full shadow hover:bg-gray-100 transition"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </>
                )}
                <div className="text-white text-center pt-44 z-20">
                    <h1 className="text-6xl font-bold">Contact Me</h1>
                    <p className="mt-3 text-xl text">Got a question? Send me a message, and I'll get back to you soon.</p>
                </div>

                <div className="w-full h-auto flex justify-center mt-13 space-x-6">
          
                    <div className="w-[35%] h-auto pl-6 pr-6 z-30">
                        <div className="w-full h-auto py-8 bg-gray-800 rounded-[20px] px-6">
                            <h2 className="text-4xl text-purple-500 font-bold">Get in Touch</h2>
                            <p className="text-gray-300 mt-2">
                                Have something to discuss? Send me a message and let's talk.
                            </p>

                            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        name="nama"
                                        placeholder="Your Name"
                                        value={formData.nama}
                                        onChange={handleChange}
                                        className="w-full pl-10 p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                <div className="relative mt-3">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full pl-10 p-4 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                <div className="relative mt-3">
                                    <MessageCircle className="absolute left-3 top-4 text-gray-400" size={20} />
                                    <textarea
                                        name="message"
                                        placeholder="Type your message..."
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full pl-10 p-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full mt-3 bg-gradient-to-r from-pink-600 to-purple-800 text-white font-semibold py-2 rounded-lg text-md hover:bg-purple-600 transition"
                                >
                                    Send Message
                                </button>
                            </form>



                            <div className="my-4 border-t border-gray-600 mt-8"></div>

                            <div className="bg-gray-700 px-5 py-8 mt-8 rounded-2xl">
                                <h2 className="text-white text-2xl mt-2 font-semibold">Connect With Me</h2>
                                <div className="w-full h-auto bg-gray-500 p-5 border-1 border-white/25 mt-8 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center bg-blue-500 p-3 rounded-full">
                                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                                <Linkedin size={20} className="text-white" />
                                            </a>
                                        </div>
                                        <div>
                                            <h3 className="text-white text-lg font-semibold">Let's Connect</h3>
                                            <p className="text-gray-300">on LinkedIn</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    {SocialMediaStair.map((social, index) => (
                                        <div key={index} className="w-full h-auto bg-gray-500 p-2 border border-white/35 rounded-xl flex items-center gap-2">
                                            <div className={`flex items-center justify-center ${social.bgColor} p-2 rounded-full`}>
                                                <a href={social.href} target="_blank" rel="noopener noreferrer">
                                                    {social.icon}
                                                </a>
                                            </div>
                                            <div className="mr-2">
                                                <h2 className="text-white text-md font-semibold">{social.Title}</h2>
                                                <p className="text-gray-300 text-sm">{social.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* comment */}

                    <div className="w-[55%] h-auto bg-gray-800/40 p-7 rounded-xl">
                        <div className="w-auto h-auto bg-gray-700/40 p-4 rounded-xl">
                            <div className="flex items-center gap-4">
                                <div className="p-2 rounded-full bg-gray-700">
                                    <MessageCircleCode size={25} className="text-white font-medium" />
                                </div>
                                <h2 className="text-2xl text-white font-semibold">Comment</h2>
                                <p className="text-2xl text-white font-semibold">(0)</p>
                            </div>

                            <div className="w-full border-t border-gray-600 mt-4"></div>

                            <form className="flex flex-col gap-4">
                                <div className="relative mt-3">
                                    <label htmlFor="name" className="mb-3 text-white text-sm font-medium">
                                        Name*
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        className="w-full p-3 mt-3 pl-10 bg-gray-600/40 backdrop-blur-2xl border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                <div className="relative mt-3">
                                    <label htmlFor="message" className="mb-3 text-white text-sm font-medium">
                                        Message*
                                    </label>
                                    <textarea
                                        placeholder="Type your message..."
                                        rows={4}
                                        className="w-full mt-3 pl-10 p-2 bg-gray-600/40 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    ></textarea>
                                </div>

                                <div className="relative mt-6 bg-gray-600/40 border border-gray-500 p-5 rounded-xl">
                                    <label htmlFor="profile-pic" className="mb-3 text-white text-sm font-medium">
                                        Profile Picture (optional)
                                    </label>
                                    <input
                                        type="file"
                                        id="profile-pic"
                                        accept="image/*"
                                        className="w-full mt-3 pl-10 p-2 bg-gray-600/40 border border-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        onChange={(e) => handleImageChange(e)}
                                    />
                                    <p className="text-white/40 text-center mt-3">Max Size File: 5MB</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-3 bg-gradient-to-r from-pink-600 to-purple-800 text-white font-semibold py-2 rounded-lg text-md hover:bg-purple-600 transition"
                                >
                                    Send Message
                                </button>
                            </form>

                            <div className="mt-6 overflow-y-auto max-h-[300px]">
                                {/* Add the list of submitted comments here */}
                                <div className="flex items-start bg-gray-600 p-3 rounded-lg mb-4">
                                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                        {/* Avatar initials */}
                                        JD
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-white text-md font-semibold">John Doe</h3>
                                        <p className="text-gray-300 text-sm">This is a comment.</p>
                                    </div>
                                </div>

                                <div className="flex items-start bg-gray-600 p-3 rounded-lg mb-4">
                                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                        {/* Avatar initials */}
                                        JD
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-white text-md font-semibold">John Doe</h3>
                                        <p className="text-gray-300 text-sm">This is a comment.</p>
                                    </div>
                                </div>

                                <div className="flex items-start bg-gray-600 p-3 rounded-lg mb-4">
                                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                        {/* Avatar initials */}
                                        JD
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-white text-md font-semibold">John Doe</h3>
                                        <p className="text-gray-300 text-sm">This is a comment.</p>
                                    </div>
                                </div>

                                <div className="flex items-start bg-gray-600 p-3 rounded-lg mb-4">
                                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                        {/* Avatar initials */}
                                        JD
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-white text-md font-semibold">John Doe</h3>
                                        <p className="text-gray-300 text-sm">This is a comment.</p>
                                    </div>
                                </div>
                                
                                {/* You can continue adding more comments */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact;