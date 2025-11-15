// Arquivo de entrada específico para Vercel
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../../dist/public')));

// Rota para API
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Desenrola Direito API funcionando!' });
});

// Rota catch-all para SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/public/index.html'));
});

export default app;
