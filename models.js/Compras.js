import sequelize from "../database.js";
import { DataTypes } from "sequelize";

const Cerveja = sequelize.define('cerveja', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    nome: {
        type: DataTypes.STRING
    },
    abv: {
        type: DataTypes.FLOAT
    },
    tipo: {
        type: DataTypes.STRING
    },
    nacionalidade: {
        type: DataTypes.STRING
    },
}, { timestamps: false })

export { Cerveja }