export interface PortofolioAttributesData {
  id_portofolio: number;
  nama_project: string;
  deskripsi: string;
  publishedAt: Date;
  features: string[]; // akan disimpan sebagai JSON
  teknologi: string[]; // akan disimpan sebagai JSON
  fotoUrl?: string;
}

export interface ContactHomeAttributeData {
  id_contacthome: number,
  nama: string,
  pengirim: string,
  deskripsi: string
}
