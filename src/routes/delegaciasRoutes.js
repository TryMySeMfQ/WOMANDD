import express from 'express';
import banco from '../data.js'; // ajuste o caminho conforme seu projeto

const router = express.Router();

router.get('/', (req, res) => {
  res.json(banco.mapaData);  // retorna os dados do mapa como JSON
});

export default router;



