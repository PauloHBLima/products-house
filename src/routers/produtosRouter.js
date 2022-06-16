const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');


router.get('/adm/produtos', produtoController.index)
router.get('/adm/produtos/cadastro', produtoController.create);
router.post('/adm/produtos', produtoController.postProduto);


module.exports = router;