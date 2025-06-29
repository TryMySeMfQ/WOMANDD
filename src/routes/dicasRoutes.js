import express from 'express';
import banco from '../data.js';  // ajuste o caminho conforme seu projeto

const router = express.Router();

router.get('/', (req, res) => {
  res.json(banco.dicas);  // retorna os dados das dicas como JSON
});

export default router;




