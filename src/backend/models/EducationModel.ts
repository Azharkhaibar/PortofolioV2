import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

export interface EducationAttributes {
  id_education: number;
  instansiSekolah: string;
  tanggal: Date;
  img_logo: string;
  jurusan: string;
}

interface EducationCreationAttributes extends Optional<EducationAttributes, "id_education"> {}
class EducationData extends Model<EducationAttributes, EducationCreationAttributes> implements EducationAttributes {
  public id_education!: number;
  public instansiSekolah!: string;
  public tanggal!: Date;
  public img_logo!: string;
  public jurusan!: string;
}

EducationData.init(
  {
    id_education: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    instansiSekolah: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    img_logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jurusan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tb_education",
    sequelize,
    timestamps: true, 
  }
);

export default EducationData;
