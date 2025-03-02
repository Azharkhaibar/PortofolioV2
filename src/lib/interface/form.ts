export interface formContact {
    nama: string;
    email: string;
    message: string;
}

export interface PortofolioAttributesData {
  id_portofolio: number;
  nama_project: string;
  deskripsi: string;
  publishedAt: Date;
  features: string[]; // akan disimpan sebagai JSON
  teknologi: string[]; // akan disimpan sebagai JSON
  fotoUrl?: string;
}