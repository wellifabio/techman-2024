const express = require('express');

const router = express.Router();

const Usuario = require('./controllers/usuario');

router.get('/usuario', Usuario.read);
router.get('/usuario/:id', Usuario.read);
router.post('/login', Usuario.login);

router.get('/', (req, res) => { return res.json("API Fábrica de Automóveis respondendo") });

module.exports = router;