import React, { useState } from "react";
import { MessageCircleCode } from "lucide-react";

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) {
            setImage(URL.createObjectURL(file));
        } else {
            alert("File size must be less than 5MB");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !message.trim()) {
            alert("Name and message are required");
            return;
        }
        const newComment = { name, message, image };
        setComments([newComment, ...comments]);
        setName("");
        setMessage("");
        setImage(null);
    };

    const getInitials = (name) => {
        return name.split(" ").map(n => n[0]).join("").toUpperCase();
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
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 mt-3 bg-gray-600/40 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                    <textarea placeholder="Type your message..." rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 bg-gray-600/40 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500"></textarea>
                    <input type="file" accept="image/*" onChange={handleImageChange}
                        className="w-full p-2 bg-gray-600/40 border border-gray-500 rounded-lg text-white focus:ring-2 focus:ring-purple-500" />
                    <button type="submit" className="w-full bg-gradient-to-r from-pink-600 to-purple-800 text-white font-semibold py-2 rounded-lg text-md">Send Message</button>
                </form>
                <div className="mt-6 overflow-y-auto max-h-[300px]">
                    {comments.map((comment, index) => (
                        <div key={index} className="flex items-start bg-gray-600 p-3 rounded-lg mb-4">
                            {comment.image ? (
                                <img src={comment.image} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
                            ) : (
                                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                    {getInitials(comment.name)}
                                </div>
                            )}
                            <div className="flex flex-col">
                                <h3 className="text-white text-md font-semibold">{comment.name}</h3>
                                <p className="text-gray-300 text-sm">{comment.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CommentSection;
