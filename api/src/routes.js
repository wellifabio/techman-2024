const express = require('express');

const router = express.Router();

const Usuario = require('./controllers/usuario');
const Equipamento = require('./controllers/equipamento');
const Comentario = require('./controllers/comentario');

router.get('/usuario', Usuario.read);
router.get('/usuario/:id', Usuario.read);
router.get('/perfil', Usuario.readPerfis);
router.post('/login', Usuario.login);

router.post('/equipamento', Equipamento.create);
router.get('/equipamento', Equipamento.read);
router.get('/equipamento/:id', Equipamento.read);
router.delete('/equipamento/:id', Equipamento.del);

router.post('/comentario', Comentario.create);
router.get('/comentario', Comentario.read);
router.get('/comentario/equipamento/:id', Comentario.read);

router.get('/', (req, res) => { return res.json("API Fábrica de Automóveis respondendo") });

module.exports = router;