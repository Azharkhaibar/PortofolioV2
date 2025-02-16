import { Router, RouterOptions } from "express";
import { createContact, getContact, getContactById, deleteContact } from "../controllers/contactController";

const buildRouter = (options?: RouterOptions): Router => {
  const router = Router(options);

  router.post("/", createContact);
  router.get("/", getContact);
  router.get("/:id_contact", getContactById);
  router.delete("/:id_contact", deleteContact);

  return router;
};

export default buildRouter;
