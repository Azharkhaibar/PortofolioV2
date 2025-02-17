import { Request, Response } from "express";
import Portofolio from "../models/portofolioModel"; // pastikan model sudah diimpor dengan benar

// Mengambil semua portofolio
export const getPortfolios = async (req: Request, res: Response): Promise<void> => {
  try {
    const portfolios = await Portofolio.findAll(); // Mengambil semua data portofolio
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data portofolio" });
  }
};

// Mengambil portofolio berdasarkan ID
export const getPortfolioById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const portfolio = await Portofolio.findByPk(id); // Cari portofolio berdasarkan ID
    if (!portfolio) {
      res.status(404).json({ error: "Portofolio tidak ditemukan" });
      return;
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data portofolio" });
  }
};

// Menambahkan portofolio baru
export const createPortfolio = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nama_project, deskripsi, publishedAt, features, teknologi } = req.body;

    // Validasi input
    if (!nama_project || !deskripsi || !publishedAt || !features || !teknologi) {
      res.status(400).json({ error: "Semua data wajib diisi!" });
      return;
    }

    // Foto URL akan diambil dari file yang di-upload
    const fotoUrl = req.file ? `../uploads/${req.file.filename}` : null; // Ganti backslash dengan slash

    // Memastikan data fitur dan teknologi berupa array jika berupa string JSON
    let parsedFeatures = Array.isArray(features) ? features : JSON.parse(features);
    let parsedTeknologi = Array.isArray(teknologi) ? teknologi : JSON.parse(teknologi);

    // Membuat entri baru di database
    const newPortfolio = await Portofolio.create({
      nama_project,
      deskripsi,
      publishedAt,
      features: parsedFeatures,
      teknologi: parsedTeknologi,
      fotoUrl, // Menyimpan URL foto yang sudah di-upload
    });

    res.status(201).json(newPortfolio); // Mengirim respons portofolio baru yang sudah dibuat
  } catch (error) {
    console.error("Error creating portfolio:", error);
    res.status(500).json({ error: "Gagal membuat portofolio" });
  }
};

// Memperbarui portofolio berdasarkan ID
export const updatePortfolio = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const { nama_project, deskripsi, publishedAt, features, teknologi, fotoUrl } = req.body;

    const portfolio = await Portofolio.findByPk(id); // Mencari portofolio berdasarkan ID
    if (!portfolio) {
      res.status(404).json({ error: "Portofolio tidak ditemukan" });
      return;
    }

    // Memperbarui data portofolio
    portfolio.nama_project = nama_project;
    portfolio.deskripsi = deskripsi;
    portfolio.publishedAt = publishedAt;
    portfolio.features = features;
    portfolio.teknologi = teknologi;
    portfolio.fotoUrl = fotoUrl;

    await portfolio.save(); // Menyimpan perubahan
    res.json(portfolio); // Mengirim data portofolio yang sudah diperbarui
  } catch (error) {
    res.status(500).json({ error: "Gagal memperbarui portofolio" });
  }
};

// Menghapus portofolio berdasarkan ID
export const deletePortfolio = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const portfolio = await Portofolio.findByPk(id); // Cari portofolio berdasarkan ID
    if (!portfolio) {
      res.status(404).json({ error: "Portofolio tidak ditemukan" });
      return;
    }

    await portfolio.destroy(); // Menghapus portofolio dari database
    res.json({ message: "Portofolio berhasil dihapus" }); // Mengirim pesan bahwa portofolio berhasil dihapus
  } catch (error) {
    res.status(500).json({ error: "Gagal menghapus portofolio" });
  }
};
