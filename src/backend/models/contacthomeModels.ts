import { DataTypes, Optional, Model } from "sequelize";
import sequelize from "../config/database";
import { ContactHomeAttributeData } from "../../lib/interface/porto";

interface ContactHomeCreationAttributes extends Optional<ContactHomeAttributeData, "id_contacthome"> { }

class ContactHome extends Model<ContactHomeAttributeData, ContactHomeCreationAttributes> implements ContactHomeAttributeData {
    public id_contacthome!: number;
    public nama!: string;
    public pengirim!: string;
    public deskripsi!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

ContactHome.init(
    {
        id_contacthome: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pengirim: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        deskripsi: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "tb_contacthome",
        sequelize,
        timestamps: true, 
    }
);

export default ContactHome;
