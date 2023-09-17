import {Request, Response } from 'express';
import { json } from 'sequelize/types';
import Tipo from '../models/tipos';
export const getTipos = async( req: Request , res: Response ) => {

    const tipos = await Tipo.findAll();

    res.json({ tipos: tipos });
}

export const getTipo = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const tipo = await Tipo.findByPk( id );

    if( tipo ) 
    {
        res.json(tipo);
    } 
    else 
    {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }


}

export const postTipo = async( req: Request , res: Response ) => {
    
    const { body } = req;

    try {
    
        const tipo = Tipo.build(body);
        await tipo.save();

        res.json( tipo );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }

}

export const putTipo = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const tipo = await Tipo.findByPk( id );
        if ( !tipo ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await tipo.update( body );

        res.json( tipo );

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}


export const deleteTipo = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const tipo = await Tipo.findByPk( id );
    if ( !tipo ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await tipo.update({ estado: false });

    // await usuario.destroy();
    res.json(tipo);
}