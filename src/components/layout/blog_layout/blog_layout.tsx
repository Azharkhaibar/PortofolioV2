import Navbar from "../navbar";
import { useState } from "react";
import { BlogDummy } from "../../../frontend/data/blogdata";
const BlogPage = () => {
    console.log(BlogDummy);
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    // Hitung jumlah total halaman
    const totalPages = Math.ceil(BlogDummy.length / itemsPerPage);

    // Ambil data berdasarkan halaman saat ini
    const displayedBlogs = BlogDummy.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return(
        <div className="">
            <Navbar />
            <div className="w-full h-auto p-4 mt-20">
                <div className="text-white text-center">
                    <h2 className="text-[68px] font-semibold">Blogs</h2>
                    <p>halaman ini berisi Journal atau pengalaman saya sebagai web developer dan Designer <br /> proses dan perjalanan saya akan saya tuangkan</p>
                </div>

                <div className="w-full h-auto mt-10 flex justify-center">
                    <div className="w-3/12">
                        <ul className="flex flex-col space-y-4 text-white mx-auto pl-36">
                            <li className="hover:text-gray-300 cursor-pointer">View All</li>
                            <li className="hover:text-gray-300 cursor-pointer">Design</li>
                            <li className="hover:text-gray-300 cursor-pointer">Product</li>
                            <li className="hover:text-gray-300 cursor-pointer">Software Engineer</li>
                            <li className="hover:text-gray-300 cursor-pointer">Politics</li>
                        </ul>
                    </div>

                    <div className="w-9/12 ">
                        <div className="w-full h-auto">
                            {BlogDummy.length > 0 && ( 
                                <div key={BlogDummy[0].id} className="p-4 flex gap-6 justify-center items-start">
                                    {/* Gambar Blog */}
                                    <img
                                        src={BlogDummy[0].blogIMG}
                                        alt={BlogDummy[0].headlineBlog || "Blog image"}
                                        className="w-5/12 h-auto object-cover rounded-lg"
                                    />
                                    <div className="w-7/12">
                                        <h2 className="text-4xl font-bold text-white leading-tight">
                                            {BlogDummy[0].headlineBlog}
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                                            {BlogDummy[0].descriptionBlog}
                                        </p>
                                        <div className="mt-6 text-white">
                                            <h4 className="text-xl font-semibold">{BlogDummy[0].author}</h4>
                                            <p className="text-sm text-gray-400">{BlogDummy[0].publishAt}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 gap-10 px-4 mt-10">
                            {displayedBlogs.map((allBlog, index) => (
                                <div
                                    key={index}
                                    className="w-full mx-auto rounded-xl shadow-lg transition-transform hover:scale-105"
                                >
                                    <img
                                        src={allBlog.blogIMG}
                                        alt={allBlog.headlineBlog || "Blog image"}
                                        className="w-full h-72 object-cover rounded-lg"
                                    />
                                    <div className="flex flex-col mt-4">
                                        <h3 className="text-lg font-semibold text-white">{allBlog.headlineBlog}</h3>
                                        <p className="text-sm text-gray-300 mt-2">{allBlog.descriptionBlog}</p>
                                        <div className="mt-3 text-gray-400 text-xs">
                                            <span className="font-semibold text-white">{allBlog.author}</span> - {allBlog.publishAt}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center mt-8 space-x-2">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 text-white bg-gray-700 rounded-md disabled:opacity-50"
                            >
                                Prev
                            </button>
                            <span className="text-white">Page {currentPage} of {totalPages}</span>
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 text-white bg-gray-700 rounded-md disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage