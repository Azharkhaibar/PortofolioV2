import { Router, RouterOptions } from "express";
import { getContactHome, getContactHomeById, createContactHome } from "../controllers/contacthomeController";

const buildRouterContactHome = (options?: RouterOptions): Router => {
    const router = Router(options);
    
      router.post("/", createContactHome);
      router.get("/", getContactHome);
      router.get("/:id_contacthome", getContactHomeById);
    
      return router;
}


export default buildRouterContactHome