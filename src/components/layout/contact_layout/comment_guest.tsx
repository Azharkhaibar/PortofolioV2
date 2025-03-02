import { useState, useEffect } from "react";
import { MessageCircleCode } from "lucide-react";
import moment from "moment";

export default function CommentSection() {
    const [comments, setComments] = useState<{
        name: string;
        message: string;
        profilePic: string | null;
        timestamp: string;
    }[]>([]);

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        // Load comments from Local Storage on mount
        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        setComments(savedComments);
    }, []);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) return;

        const newComment = { name, message, profilePic, timestamp: new Date().toISOString() };
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        localStorage.setItem("comments", JSON.stringify(updatedComments));
        setName("");
        setMessage("");
        setProfilePic(null);
    };

    return (
        <div className="w-[55%] h-auto bg-gray-800/40 p-7 rounded-xl">
            <div className="w-auto h-auto bg-gray-700/40 p-4 rounded-xl">
                <div className="flex items-center gap-4">
                    <div className="p-2 rounded-full bg-gray-700">
                        <MessageCircleCode size={25} className="text-white font-medium" />
                    </div>
                    <h2 className="text-2xl text-white font-semibold">Comment</h2>
                    <p className="text-2xl text-white font-semibold">({comments.length})</p>
                </div>
                <div className="w-full border-t border-gray-600 mt-4"></div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full p-3 mt-3 bg-gray-600/40 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        placeholder="Type your message..."
                        rows={4}
                        className="w-full p-3 bg-gray-600/40 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className="relative mt-3 bg-gray-600/40 border border-gray-500 p-5 rounded-xl">
                        <label className="text-white text-sm font-medium">Profile Picture (optional)</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="w-full mt-3 p-2 bg-gray-600/40 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
                            onChange={handleImageChange}
                        />
                        <p className="text-white/40 text-center mt-3">Max Size File: 5MB</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-800 text-white font-semibold py-2 rounded-lg text-md hover:bg-purple-600 transition"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-6 overflow-y-auto max-h-[300px]">
                    {comments.map((comment, index) => (
                        <div key={index} className="flex items-start bg-gray-600/20 border border-gray-400/10 p-3 rounded-lg mb-4 relative">
                            {comment.profilePic ? (
                                <img src={comment.profilePic} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
                            ) : (
                                <div className="w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                    {comment.name.slice(0, 2).toUpperCase()}
                                </div>
                            )}
                            <div className="flex justify-between w-full">
                                <div className="flex-1">
                                    <h3 className="text-white text-md font-semibold">{comment.name}</h3>
                                    <p className="text-gray-300 text-sm">{comment.message}</p>
                                </div>
                                <div>
                                    <span className="text-gray-400 text-xs whitespace-nowrap">{moment(comment.timestamp || new Date().toISOString()).fromNow()
                                    }</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
