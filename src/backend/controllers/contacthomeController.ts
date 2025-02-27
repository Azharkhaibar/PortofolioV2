import contactHomeModels from "../models/contacthomeModels";
import { Request, Response, NextFunction, RequestHandler } from "express";

export interface ContactAttributes {
  nama: string;
  pengirim: string;
  deskripsi: string;
}

export const getContactHome = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const getContact = await contactHomeModels.findAll();
    res.json(getContact);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createContactHome: RequestHandler<{}, {}, ContactAttributes> = async (req, res, next): Promise<void> => {
  try {
    console.log("Request Body:", req.body); 
    const { nama, pengirim, deskripsi } = req.body;
    if (!nama || !pengirim || !deskripsi) {
      console.log("Validation Failed"); // Debugging
      res.status(400).json({ error: "Semua field harus diisi" });
      return;
    }

    const createContact = await contactHomeModels.create({
      nama,
      pengirim,
      deskripsi,
    });

    console.log("Created Contact:", createContact.toJSON()); // ✅ Debugging
    res.status(201).json(createContact);
    return; 
  } catch (error: any) {
    console.error("Error in createContactHome:", error.message); // ✅ Debugging Error
    res.status(500).json({ error: error.message });
    return;
  }
};




export const getContactHomeById: RequestHandler<{ id_contacthome: string }> = async (req, res, next) => {
  try {
    const { id_contacthome } = req.params;
    const contact_by_id = await contactHomeModels.findByPk(id_contacthome);

    if (!contact_by_id) {
      res.status(404).json({ error: "Contact ID tidak ditemukan" });
      return;
    }

    res.json(contact_by_id);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
