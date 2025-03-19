
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

export interface EducationDataValidation {
  instansiSekolah: string;
  tanggal: Date | string;
  img_logo
  jurusan: string;
}



export function validateArrayField(value: unknown, fieldName: string): void {
  if (!Array.isArray(value)) {
    throw new Error(`${fieldName} harus berupa array.`);
  }
  if (!value.every((item: unknown) => typeof item === "string")) {
    throw new Error(`${fieldName} harus berupa array yang hanya berisi string.`);
  }
}

export function validateJourneyExperience(data: JourneyExperienceAttributes): void {
  validateArrayField(data.techStack, "techStack");
  validateArrayField(data.task, "task");
  if (!data.nama_instansi.trim()) throw new Error("Nama instansi tidak boleh kosong.");
  if (!data.posisi.trim()) throw new Error("Posisi tidak boleh kosong.");
  if (!data.jabatan.trim()) throw new Error("Jabatan tidak boleh kosong.");
}
