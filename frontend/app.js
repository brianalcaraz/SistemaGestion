// ========================================
// SERVIDOR FRONTEND - HUELLITAS FELICES
// Puerto 4000 - PUG + Bootstrap 5
// ========================================

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ========================================
// CONFIGURACIÓN PUG
// ========================================
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ========================================
// ARCHIVOS ESTÁTICOS
// ========================================
app.use(express.static(path.join(__dirname, 'public')));

// ========================================
// RUTAS
// ========================================

// Ruta principal - Redirige a clientes
app.get('/', (req, res) => {
    res.redirect('/clientes');
});

// Vista de clientes (SIN datos de API todavía)
app.get('/clientes', (req, res) => {
    res.render('pages/clientes', {
        title: 'Gestión de Clientes - Huellitas Felices'
    });
});

// ========================================
// SERVIDOR
// ========================================
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`🐾 Frontend Huellitas Felices: http://localhost:${PORT}`);
});