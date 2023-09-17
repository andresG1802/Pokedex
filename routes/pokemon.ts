import { Router } from 'express';
import { deletePokemon, getPokemon, getPokemones, postPokemon, putPokemon } from '../controllers/pokemon';
import { check } from 'express-validator';
import { existePokemonPorId } from '../helpers/db-validator';
import { validarCampos } from '../middlewares/validar-campos';


const router = Router();

router.get('/',       getPokemones );
router.get('/:id',[
    check('id').custom(existePokemonPorId)
],    getPokemon);
router.post('/',      postPokemon );
router.put('/:id',[
    check('id').custom(existePokemonPorId),
    validarCampos
],    putPokemon );
router.delete('/:id',[
    check('id').custom(existePokemonPorId),
    validarCampos
], deletePokemon );



export default router;