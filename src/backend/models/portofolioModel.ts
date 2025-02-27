import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../config/database";

// src/lib/interface/porto.ts
export interface PortofolioAttributesData {
  id_portofolio: number;
  nama_project: string;
  deskripsi: string;
  publishedAt: Date;
  features: string[]; 
  teknologi: string[];
  fotoUrl?: string | null; 
}

interface PortofolioCreationAttributes extends Optional<PortofolioAttributesData, "id_portofolio"> {}

class Portofolio extends Model<PortofolioAttributesData, PortofolioCreationAttributes> implements PortofolioAttributesData {
  public id_portofolio!: number;
  public nama_project!: string;
  public deskripsi!: string;
  public publishedAt!: Date;
  public features!: string[];
  public teknologi!: string[];
  public fotoUrl?: string | null; 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Portofolio.init(
  {
    id_portofolio: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nama_project: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsi: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    features: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [], 
    },
    teknologi: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: [], 
    },
    fotoUrl: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
  },
  {
    tableName: "tb_portfolios",
    sequelize, // instance Sequelize
  }
);

export default Portofolio;
