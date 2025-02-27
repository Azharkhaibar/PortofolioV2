import { Router } from "express";
import { getBlogs, getBlogsById, createBlogs, updateBlogs } from "../controllers/blogController";
import { validateIdParam } from "../middleware/validateparam";
import upload from "../middleware/multerconfig";
const router = Router();
router.post('/', upload.single("foto"), createBlogs);
router.get('/', getBlogs);
router.get('/:id', validateIdParam, getBlogsById);
router.put('/:id', validateIdParam, upload.single("foto"), updateBlogs);
export default router