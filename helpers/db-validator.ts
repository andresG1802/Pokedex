import Pokemon from "../models/pokemon";
import Tipo from "../models/tipos";
import Usuario from "../models/usuario";


export const existeUsuarioPorId= async(id: number)=>{

    const existeUsuario = await Usuario.findByPk(id);

    if(!existeUsuario)
    {
        throw new Error(`El id no existe ${ id }`);
    }
}
export const existePokemonPorId = async(id:number)=>{
    const existePokemon = await Pokemon.findByPk(id);

    if(!existePokemon)
    {
        throw new Error(`El id no existe ${ id }`);
    }

}

export const existeTipoPorId = async(id:number)=>{
    const existeTipo = await Tipo.findByPk(id);

    if(!existeTipo)
    {
        throw new Error(`El id no existe ${ id }`);
    }

}
