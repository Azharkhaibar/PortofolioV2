import { Model, Optional, DataTypes } from "sequelize";
import  sequelize from "../config/database"; // Pastikan ini sesuai dengan path konfigurasi Sequelize

export enum BlogCategory {
  Technology = "Technology",
  Business = "Business",
  Health = "Health",
  Entertainment = "Entertainment",
  Politics = "Politics",
  Lifestyle = "Lifestyle",
  Culture = "Culture",
  Design = "Design",
}

export interface BlogAttributesData {
  id_blog: number;
  blogIMG: string | null;
  headline_blog: string;
  deskripsi_blog: string;
  detail_deskripsi_blog: string;
  kategori_blog: BlogCategory;
  tags: string[];
  author: string;
  publishedAt: Date;
}

interface BlogCreationAttributes extends Optional<BlogAttributesData, "id_blog"> {}

class Blog extends Model<BlogAttributesData, BlogCreationAttributes> implements BlogAttributesData {
  public id_blog!: number;
  public blogIMG!: string | null;
  public headline_blog!: string;
  public deskripsi_blog!: string;
  public detail_deskripsi_blog!: string;
  public kategori_blog!: BlogCategory;
  public tags!: string[];
  public author!: string;
  public publishedAt!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Blog.init(
  {
    id_blog: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    blogIMG: {
      type: DataTypes.STRING,
      allowNull: true, 
    },
    headline_blog: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deskripsi_blog: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    detail_deskripsi_blog: {
      type: DataTypes.TEXT,
      allowNull: false, 
    },
    kategori_blog: {
      type: DataTypes.ENUM(...Object.values(BlogCategory)), 
      allowNull: false,
    },
    tags: {
      type: DataTypes.JSON, 
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "tb_blogs",
    sequelize,
  }
);

export default Blog;
