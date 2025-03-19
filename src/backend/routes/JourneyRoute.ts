import { Router } from "express";
import { getExperienceData, createExperience, getEducationData, createEducation, deleteExperience } from "../controllers/ExperienceEducationController";
import { validateIdParam } from "../middleware/validateparam";
import upload from "../middleware/multerconfig";

const router = Router();

// 🔹 Upload Experience (dengan gambar)
router.post("/experience", upload.single("img_logo"), createExperience);

// 🔹 Upload Education (dengan gambar)
router.post("/education", upload.single("image"), createEducation);

// 🔹 Ambil semua Experience
router.get("/experience", getExperienceData);

// 🔹 Ambil semua Education
router.get("/education", getEducationData);

// 🔹 Hapus Experience berdasarkan ID
router.delete("/experience/:id", validateIdParam, deleteExperience);

export default router;
