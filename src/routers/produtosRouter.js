const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');


router.get('/adm/produtos', produtoController.index)
router.get('/adm/produtos/cadastro', produtoController.create);
router.post('/adm/produtos', produtoController.postProduto);
router.post('/:id', produtoController.showOneProduct);
router.post('/:id/editar', produtoController.editarProduto);
router.put('/:id/editar', produtoController.editSalvar);
router.delete('/:id', produtoController.delete);


module.exports = router;