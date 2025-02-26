import { Request, Response } from "express";
import Portofolio from "../models/portofolioModel"; 
export const getPortfolios = async (req: Request, res: Response): Promise<void> => {
  try {
    const portfolios = await Portofolio.findAll();
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data portofolio" });
  }
};

export const getPortfolioById = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const portfolio = await Portofolio.findByPk(id); 
    if (!portfolio) {
      res.status(404).json({ error: "Portofolio tidak ditemukan" });
      return;
    }
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data portofolio" });
  }
};

export const createPortfolio = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nama_project, deskripsi, publishedAt, features, teknologi } = req.body;
    if (!nama_project || !deskripsi || !publishedAt || !features || !teknologi) {
      res.status(400).json({ error: "Semua data wajib diisi!" });
      return;
    }

    const fotoUrl = req.file ? `../uploads/${req.file.filename}` : null; 
    let parsedFeatures = Array.isArray(features) ? features : JSON.parse(features);
    let parsedTeknologi = Array.isArray(teknologi) ? teknologi : JSON.parse(teknologi);
    const newPortfolio = await Portofolio.create({
      nama_project,
      deskripsi,
      publishedAt,
      features: parsedFeatures,
      teknologi: parsedTeknologi,
      fotoUrl, 
    });

    res.status(201).json(newPortfolio); 
  } catch (error) {
    console.error("Error creating portfolio:", error);
    res.status(500).json({ error: "Gagal membuat portofolio" });
  }
};


export const updatePortfolio = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const { nama_project, deskripsi, publishedAt, features, teknologi, fotoUrl } = req.body;

    const portfolio = await Portofolio.findByPk(id); 
    if (!portfolio) {
      res.status(404).json({ error: "Portofolio tidak ditemukan" });
      return;
    }


    portfolio.nama_project = nama_project;
    portfolio.deskripsi = deskripsi;
    portfolio.publishedAt = publishedAt;
    portfolio.features = features;
    portfolio.teknologi = teknologi;
    portfolio.fotoUrl = fotoUrl;

    await portfolio.save(); 
    res.json(portfolio); 
  } catch (error) {
    res.status(500).json({ error: "Gagal memperbarui portofolio" });
  }
};


export const deletePortfolio = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const portfolio = await Portofolio.findByPk(id); 
    if (!portfolio) {
      res.status(404).json({ error: "Portofolio tidak ditemukan" });
      return;
    }

    await portfolio.destroy(); 
    res.json({ message: "Portofolio berhasil dihapus" }); 
  } catch (error) {
    res.status(500).json({ error: "Gagal menghapus portofolio" });
  }
};
