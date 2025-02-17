import { Router } from "express";
import { getPortfolios, getPortfolioById, createPortfolio, updatePortfolio, deletePortfolio } from "../controllers/portofolioController";
import { validateIdParam } from "../middleware/validateparam";
import upload from "../middleware/multerconfig";// pastikan import benar
const router = Router();

// Rute untuk membuat portofolio baru dengan upload foto
router.post("/", upload.single("foto"), createPortfolio);

// Rute untuk mendapatkan semua portofolio
router.get("/", getPortfolios);

// Rute untuk mendapatkan portofolio berdasarkan ID
router.get("/:id", validateIdParam, getPortfolioById);

// Rute untuk memperbarui portofolio berdasarkan ID
router.put("/:id", validateIdParam, upload.single("foto"), updatePortfolio);

// Rute untuk menghapus portofolio berdasarkan ID
router.delete("/:id", validateIdParam, deletePortfolio);

export default router;
