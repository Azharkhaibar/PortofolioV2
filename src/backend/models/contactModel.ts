import { DataTypes } from "sequelize";
import sequelize from '../config/database';

const tb_Contact = sequelize.define('tb_contact', {
    id_contact: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'tb_contact'
})

export default tb_Contact;