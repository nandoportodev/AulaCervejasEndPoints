
import express from "express";
import { getCervejas, postCerveja, putCerveja, deleteCerveja, getCervejaById, getCervejasByNacionalidade, getCervejasByTipo } from '../controller/cervejasController.js';

const router = express.Router();

// Endpoints
router.get('/cervejas', getCervejas);
router.post('/cervejas', postCerveja);
router.put('/cervejas/:id', putCerveja);
router.delete('/cervejas/:id', deleteCerveja);
router.get('/cervejas/:id', getCervejaById);
router.get('/nacionalidade/:pais', getCervejasByNacionalidade);
router.get('/tipo/:tipo', getCervejasByTipo);

export { router };
