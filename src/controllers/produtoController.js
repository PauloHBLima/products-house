const ProdutoModel = require('../models/produtoModel')

const produtoController = {
    index: (req, res) => {
const produtos = ProdutoModel.findAll();
       return res.render('adm/produtos/lista', {produtos})

    },

    create: (req, res) => {
        return res.render('adm/produtos/cadastro')
    },

    postProduto: (req, res) => {
        const {nome, imagem, preco, ativo, descricao} = req.body   //para cadastrar um produto

        const produto= {
            nome,
            imagem,
            preco,
            ativo: (ativo ? true : false)
        }

        ProdutoModel.save(produto);
        return res.redirect('/adm/produtos');
    }
}


module.exports = produtoController;
