const express = require('express');

const router = express.Router();

const Usuario = require('./controllers/usuario');
const Equipamento = require('./controllers/equipamento');

router.get('/usuario', Usuario.read);
router.get('/usuario/:id', Usuario.read);
router.post('/login', Usuario.login);

router.get('/equipamento', Equipamento.read);
router.get('/equipamento/:id', Equipamento.read);

router.get('/', (req, res) => { return res.json("API Fábrica de Automóveis respondendo") });

module.exports = router;