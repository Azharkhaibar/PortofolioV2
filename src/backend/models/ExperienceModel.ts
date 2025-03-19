import { DataTypes, Optional, Model } from "sequelize";
import sequelize from "../config/database";

export interface JourneyExperienceAttributes {
  id_experience: number;
  nama_instansi: string;
  periode_mulai: string; // ✅ Ganti dari Date ke string (ex: "Jul 2022")
  periode_selesai: string; // ✅ Ganti dari Date ke string (ex: "Aug 2022")
  posisi: string;
  jabatan: string;
  img_logo?: string;
  techStack: string[];
  task: string[];
}

interface JourneyCreationAttributes extends Optional<JourneyExperienceAttributes, "id_experience"> {}
class ExperienceData extends Model<JourneyExperienceAttributes, JourneyCreationAttributes> implements JourneyExperienceAttributes {
  public id_experience!: number;
  public nama_instansi!: string;
  public periode_mulai!: string;
  public periode_selesai!: string; 
  public posisi!: string;
  public jabatan!: string;
  public img_logo?: string;
  public techStack!: string[];
  public task!: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

ExperienceData.init(
  {
    id_experience: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_instansi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    periode_mulai: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    periode_selesai: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    posisi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jabatan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img_logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    techStack: {
      type: DataTypes.JSON, // ✅ Array JSON
      allowNull: false,
      defaultValue: [],
    },
    task: {
      type: DataTypes.JSON, // ✅ Array JSON
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    tableName: "tb_experience",
    sequelize,
    timestamps: true,
  }
);

export default ExperienceData;
