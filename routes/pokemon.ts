import { Router } from 'express';
import { deletePokemon, getPokemon, getPokemones, postPokemon, putPokemon } from '../controllers/pokemon';


const router = Router();

router.get('/',       getPokemones );
router.get('/:id',    getPokemon);
router.post('/',      postPokemon );
router.put('/:id',    putPokemon );
router.delete('/:id', deletePokemon );



export default router;