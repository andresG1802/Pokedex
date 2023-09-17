import { DataTypes } from "sequelize";

import db from '../db/connection';

const Usuario = db.define('Usuario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreUsuario:{
        type:DataTypes.STRING
    },
    contraseña:{
        type:DataTypes.STRING
    },
    correoElectronico: {
        type: DataTypes.STRING
    },
    fechaRegistro:{
        type:DataTypes.DATE
    },
    estado: {
        type: DataTypes.BOOLEAN
    }
},
{
    timestamps:false
});

export default Usuario;