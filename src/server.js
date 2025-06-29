// src/server.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config'; // isso carrega as variáveis do .env
import banco from './data.js';
import delegaciasRoutes from './routes/delegaciasRoutes.js';
import ajudaRoutes from './routes/ajudaRoutes.js';
import dicasRoutes from './routes/dicasRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000; // <-- usa a porta do .env ou 3000

app.use(cors());

// Rotas principais
app.use('/delegacias', delegaciasRoutes);
app.use('/ajuda', ajudaRoutes);
app.use('/dicas', dicasRoutes);

// Endpoints da API
app.get("/api/delegacias", (req, res) => res.json(banco.delegacias));
app.get("/api/ajuda", (req, res) => res.json(banco.telefones));
app.get("/api/dicas", (req, res) => res.json(banco.dicas));

// Raiz
app.get('/', (req, res) => {
  res.send('API Segurança Feminina está no ar!');
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 API rodando em http://localhost:${PORT}`);
});









