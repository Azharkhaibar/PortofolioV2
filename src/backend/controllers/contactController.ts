import contactModels from "../models/contactModel";
import { Request, Response, NextFunction, RequestHandler } from "express";

export const createContact: RequestHandler = async (req, res, next) => {
  try {
    const { nama, email, message } = req.body;
    if (!nama || !email || !message) {
      res.status(400).json({ error: "semua field harus diisi" });
      return;
    }

    const newContact = await contactModels.create({ nama, email, message });
    res.status(201).json(newContact);
    return;
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    return;
  }
};

export const getContact: RequestHandler = async (req, res, next) => {
  try {
    const contacts = await contactModels.findAll();
    res.json(contacts);
    return;
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    return;
  }
};

export const getContactById: RequestHandler = async (req, res, next) => {
  try {
    const { id_contact } = req.params;
    const contact = await contactModels.findByPk(id_contact);
    if (!contact) {
      res.status(404).json({ error: "contact tidak di temukan" });
      return;
    }
    res.json(contact);
    return;
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    return;
  }
};

export const deleteContact: RequestHandler = async (req, res, next) => {
  try {
    const { id_contact } = req.params;
    const contact = await contactModels.findByPk(id_contact);
    if (!contact) {
      res.status(404).json({ error: "Contact tidak ditemukan." });
      return;
    }
    await contact.destroy();
    res.status(200).json({ message: "Contact berhasil dihapus." });
    return;
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    return;
  }
};
