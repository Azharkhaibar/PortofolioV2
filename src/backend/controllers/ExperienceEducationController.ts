import { Request, Response, NextFunction, RequestHandler } from "express";
import ExperienceDataModel from "../models/ExperienceModel";
import { error } from "console";
import EducationDataModel from "../models/EducationModel";

export interface JourneyExperienceAttributes {
    id_experience: number;
    nama_instansi: string;
    tanggal: Date;
    posisi: string;
    jabatan: string;
    img_logo: string;
    techStack: string[];
    task: string[];
}

export const getExperienceData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const getExperience = await ExperienceDataModel.findAll();

        res.json(getExperience);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};




export const getEducationData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const getEducation = await EducationDataModel.findAll();
        res.json(getEducation)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const createEducation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { instansiSekolah, tanggal, img_logo, jurusan } = req.body;
        if (!instansiSekolah || !tanggal || !img_logo || !jurusan) {
            res.status(404).json({ error: "data kgk lengkap" });
            return;
        }
        const foto_logo_edu = req.file ? `../uploads/${req.file.filename}` : img_logo || null;
        const newEducationData = await EducationDataModel.create({
            instansiSekolah, tanggal, img_logo: foto_logo_edu, jurusan
        })
        res.status(201).json(newEducationData)
    } catch (error: any) {
        console.error('gagal buat edukasi : ', error);
        res.status(500).json({ error: 'ga bisa buat edukasi' })

    }
}
export const createExperience: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        console.log("Request body:", req.body);
        console.log("Uploaded file:", req.file);
        const { nama_instansi, periode_mulai, periode_selesai, posisi, jabatan, techStack, task } = req.body;
        if (!nama_instansi || !periode_mulai || !periode_selesai || !posisi || !jabatan || !techStack || !task) {
            res.status(422).json({ error: "Data tidak lengkap" });
            return;
        }
        const parsedPeriodeMulai = new Date(periode_mulai);
        const parsedPeriodeSelesai = new Date(periode_selesai);

        if (isNaN(parsedPeriodeMulai.getTime()) || isNaN(parsedPeriodeSelesai.getTime())) {
            res.status(400).json({ error: "Format periode_mulai atau periode_selesai tidak valid" });
            return;
        }
        const formattedPeriodeMulai = parsedPeriodeMulai.toISOString().split("T")[0];
        const formattedPeriodeSelesai = parsedPeriodeSelesai.toISOString().split("T")[0];
        const foto_logo: string | undefined = req.file?.filename ? `/uploads/${req.file.filename}` : undefined;
        let parsedTechStack: string[];
        let parsedTask: string[];
        try {
            parsedTechStack = typeof techStack === "string" ? JSON.parse(techStack) : techStack;
            parsedTask = typeof task === "string" ? JSON.parse(task) : task;

            if (!Array.isArray(parsedTechStack) || !Array.isArray(parsedTask)) {
                throw new Error("techStack dan task harus berupa array");
            }
        } catch (err) {
            console.error("Format techStack atau task tidak valid:", err);
            res.status(400).json({ error: "Format techStack atau task tidak valid" });
            return;
        }

        const newExperienceData = await ExperienceDataModel.create({
            nama_instansi,
            periode_mulai: formattedPeriodeMulai,
            periode_selesai: formattedPeriodeSelesai,
            posisi,
            jabatan,
            img_logo: foto_logo || undefined,
            techStack: parsedTechStack,
            task: parsedTask,
        });

        res.status(201).json({ message: "Pengalaman berhasil ditambahkan", data: newExperienceData });
    } catch (error) {
        console.error("Gagal buat pengalaman:", error);
        res.status(500).json({ error: "Terjadi kesalahan saat membuat pengalaman", details: error });
    }
};

export const updateExperience=async(req:Request, res:Response, next:NextFunction):Promise<void>=>{
    try {
      const { id } = req.params;
      const { nama_instansi, periode_mulai, periode_selesai, posisi, jabatan, img_logo, techStack, task } = req.body;
      const UpdateExperience = await ExperienceDataModel.findByPk(id);
      if (!updateExperience) {
        res.status(404).json({
          error: "data kgk ketemu coy",
        });
        return;
      }
      // cek apakah data yg diupdate itu ada kalau tidak ada maka akan mengembalikan pesan error
      if (UpdateExperience) {
        UpdateExperience.nama_instansi = nama_instansi;
        UpdateExperience.periode_mulai = periode_mulai;
        UpdateExperience.periode_selesai = periode_selesai;
        UpdateExperience.posisi = posisi;
        UpdateExperience.jabatan = jabatan;
        UpdateExperience.img_logo = img_logo;
        UpdateExperience.techStack = techStack;
        UpdateExperience.task = task;
      }
      await UpdateExperience?.save();
      res.status(200).json({
        message: `data berhasil diubah : ${UpdateExperience}`,
      });
    } catch(err: any) {
        console.error(`error updating experience: ${err.message}`);
        ;
        res.status(500).json({ error: `error update experience: ${err.message}`})
        
    }
}


export const deleteExperience = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { id } = req.params;
        const experience = await ExperienceDataModel.findByPk(id);
        if (!experience) {
            res.status(404).json({ error: "Data tidak ditemukan" });
            return;
        }
        await experience.destroy();
        res.status(200).json({ message: "Data berhasil dihapus" });
    } catch (error) {
        console.error("Gagal menghapus pengalaman:", error);
        res.status(500).json({ error: "Terjadi kesalahan saat menghapus pengalaman" });
    }
};