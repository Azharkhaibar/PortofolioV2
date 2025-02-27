import { useState } from "react";
import Navbar from "../../components/layout/navbar";
import Footer from "../../components/layout/footer";
import BlogPage from "../../components/layout/blog_layout/blog_layout";
const Blog = () => {
    return(
        <div className="bg-[#12131e]">
            <BlogPage />
            <Footer />
        </div>
    )
}
export default Blog