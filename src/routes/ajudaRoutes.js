import express from 'express';
import banco from '../data.js'; // ajuste o caminho correto do seu data.js

const router = express.Router();

router.get('/', (req, res) => {
  res.json(banco.telefones); // retorna os dados de ajuda (ex: contatos, telefones etc)
});

export default router;


