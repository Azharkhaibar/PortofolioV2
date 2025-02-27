import { Request, Response } from "express";
import Blog, { BlogCategory } from "../models/blogModel";

export const getBlogs = async (req: Request, res: Response) => {
  try {
    const getAllBlogs = await Blog.findAll();
    res.json(getAllBlogs)
  } catch (error) {
    res.status(500).json({ error: "gagal mengambil data Blog"})
  }
}

export const getBlogsById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const Blogs = await Blog.findByPk(id);
    if (!Blogs) {
      res.status(404).json({ error: "Blogs tidak ditemukan"})
      return;
    }
    res.json(Blogs)
  } catch(error) {
    res.status(500).json({ error: "gagal menemukan blog"})
  }
}

export const createBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const { headline_blog, deskripsi_blog, detail_deskripsi_blog, kategori_blog, tags, author, publishedAt } = req.body;
    if (!headline_blog || !deskripsi_blog || !detail_deskripsi_blog || !kategori_blog || !tags || !author || !publishedAt) {
      res.status(400).json({ error: "Semua data harus diisi!" });
      return;
    }
    
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);
    console.log("Request received at /api/blogs");
    console.log("Headers:", req.headers);
    console.log("Body:", req.body);
    console.log("File:", req.file);
    if (!Object.values(BlogCategory).includes(kategori_blog)) {
      res.status(400).json({ error: "Kategori tidak valid!" });
      return;
    }
    // tags itu harus array (jika dikirim sebagai string, parse ke array)
    let parsedTags: string[];
    try {
      parsedTags = typeof tags === "string" ? JSON.parse(tags) : tags;
      if (!Array.isArray(parsedTags)) {
        throw new Error();
      }
    } catch {
      res.status(400).json({ error: "Tags harus berupa array!" });
      return;
    }

    // Ambil gambar jika ada
    const blogIMG = req.file ? `../uploads/${req.file.filename}` : null;
    const newBlog = await Blog.create({
      blogIMG,
      headline_blog,
      deskripsi_blog,
      detail_deskripsi_blog,
      kategori_blog,
      tags: parsedTags,
      author,
      publishedAt,
    });

    res.status(201).json({ message: "Blog berhasil dibuat!", blog: newBlog });
  } catch (error: any) {
    console.error("Error creating blog:", error.message); 
    res.status(500).json({ error: "Gagal membuat blog" });
  }
};

export const updateBlogs = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; 
    const { headline_blog, deskripsi_blog, detail_deskripsi_blog, kategori_blog, tags, author, publishedAt } = req.body;
    const blogToUpdate = await Blog.findByPk(id);
    if (!blogToUpdate) {
      res.status(404).json({ error: "Blog tidak ditemukan!" });
      return;
    }

    if (kategori_blog && !Object.values(BlogCategory).includes(kategori_blog)) {
      res.status(400).json({ error: "Kategori tidak valid!" });
      return;
    }
    let parsedTags: string[] | undefined;
    if (tags) {
      try {
        parsedTags = typeof tags === "string" ? JSON.parse(tags) : tags;
        if (!Array.isArray(parsedTags)) {
          throw new Error();
        }
      } catch {
        res.status(400).json({ error: "Tags harus berupa array!" });
        return;
      }
    }

    const blogIMG = req.file ? `../uploads/${req.file.filename}` : blogToUpdate.blogIMG;
    await blogToUpdate.update({
      blogIMG,
      headline_blog: headline_blog || blogToUpdate.headline_blog,
      deskripsi_blog: deskripsi_blog || blogToUpdate.deskripsi_blog,
      detail_deskripsi_blog: detail_deskripsi_blog || blogToUpdate.detail_deskripsi_blog,
      kategori_blog: kategori_blog || blogToUpdate.kategori_blog,
      tags: parsedTags || blogToUpdate.tags,
      author: author || blogToUpdate.author,
      publishedAt: publishedAt || blogToUpdate.publishedAt,
    });

    res.status(200).json({ message: "Blog berhasil diperbarui!", blog: blogToUpdate });
  } catch (error: any) {
    console.error("Error updating blog:", error.message);
    res.status(500).json({ error: "Gagal memperbarui blog" });
  }
};


