const ProdutoModel = require('../models/produtoModel')
const fs = require('fs')
const { v4: geradorDeId } = require('uuid')

const homeController = {
    index: (req, res) => {
        const produtos = ProdutoModel.findAll();
        return res.render('home/landingpage', { produtos: produtos })
    },

    viewProduto: (req, res) => {
        const {id}= req.params
        const produto = ProdutoModel.findById(id);
        return res.render('produtos/detalhes', {produto})
    },

    
    edit: (req, res) => {
        let content = fs.readFileSync('./db.json', 'utf8');
        const db = JSON.parse(content);

        const { id } = req.params;

        const produto = db.produtos.find(index => index.id == id);


        return res.render('adm/produtos/editar', { produto });
    }
}



module.exports = homeController;
