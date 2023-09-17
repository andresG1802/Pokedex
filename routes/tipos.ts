import { Router } from 'express';
import { deleteTipo, getTipo, getTipos, postTipo, putTipo } from '../controllers/tipos';
const router = Router();

router.get('/',       getTipos );
router.get('/:id',    getTipo);
router.post('/',      postTipo );
router.put('/:id',    putTipo );
router.delete('/:id', deleteTipo );



export default router;