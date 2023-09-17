import {Request, Response } from 'express';
import { json } from 'sequelize/types';
import Pokemon from '../models/pokemon';
export const getPokemones = async( req: Request , res: Response ) => {

    const pokemones = await Pokemon.findAll();

    res.json({ pokemones: pokemones });
}

export const getPokemon = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const pokemon = await Pokemon.findByPk( id );

    if( pokemon ) 
    {
        res.json(pokemon);
    } 
    else 
    {
        res.status(404).json({
            msg: `No existe un usuario con el id ${ id }`
        });
    }


}

export const postPokemon = async( req: Request , res: Response ) => {
    
    const { body } = req;

    try {
    
        const pokemon = Pokemon.build(body);
        await pokemon.save();

        res.json( pokemon );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }

}

export const putPokemon = async( req: Request , res: Response ) => {

    const { id }   = req.params;
    const { body } = req;

    try {
        
        const pokemon = await Pokemon.findByPk( id );
        if ( !pokemon ) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }

        await pokemon.update( body );

        res.json( pokemon );

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}


export const deletePokemon = async( req: Request , res: Response ) => {

    const { id } = req.params;

    const pokemon = await Pokemon.findByPk( id );
    if ( !pokemon ) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }

    await pokemon.update({ estado: false });

    // await usuario.destroy();
    res.json(pokemon);
}

