import { DataTypes } from "sequelize";

import db from '../db/connection';
import Tipos from "./tipos";

const Pokemon = db.define('Pokemon',
{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    },
    altura: {
        type: DataTypes.DECIMAL(5,2)
    },
    peso:{
        type:DataTypes.DECIMAL(5,2)
    },
    imagen:{
        type:DataTypes.STRING
    },
    tipo_id:{
        type:DataTypes.INTEGER,
        references:{
            model:Tipos,
            key:'id',
        },
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
},{
    timestamps:false
});


export default Pokemon;