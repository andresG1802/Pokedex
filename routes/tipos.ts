import { Router } from 'express';
import { deleteTipo, getTipo, getTipos, postTipo, putTipo } from '../controllers/tipos';
import { validarCampos } from '../middlewares/validar-campos';
import { check } from 'express-validator';
import { existeTipoPorId } from '../helpers/db-validator';


const router = Router();

router.get('/',       getTipos );
router.get('/:id',[
    check('id').custom(existeTipoPorId)
],    getTipo);
router.post('/',      postTipo );
router.put('/:id',[
    check('id').custom(existeTipoPorId),
    validarCampos
],    putTipo );
router.delete('/:id',[
    check('id').custom(existeTipoPorId),
    validarCampos
], deleteTipo );



export default router;