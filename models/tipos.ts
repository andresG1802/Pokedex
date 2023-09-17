import { DataTypes } from "sequelize";

import db from '../db/connection';

const Tipo = db.define('Tipos',{
    id:{
       type:DataTypes.INTEGER 
    },
    nombre:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
},{
    timestamps:false
})

export default Tipo;