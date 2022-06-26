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
    },
    
    showOneProduct: (req, res) => {
        const { id } = req.params;
        const produto = ProdutoModel.findById(id);
        return res.render('adm/produtos/detalhes', { produto });
    },

    editarProduto: (req, res) => {
        const { id } = req.params;
        const produto = ProdutoModel.findById(id);
        if (!produto) {
            return res.send(`Serviço não encontrado`);
        }
        return res.render('adm/produtos/editar', { produto });
    },

    editSalvar: (req, res) => {
        const { id } = req.params;
        const {nome, imagem, preco, ativo, descricao} = req.body   //para cadastrar um produto
        const produto= {
            id,
            nome,
            imagem,
            preco,
            ativo: (ativo ? true : false),
            descricao
        }
        ProdutoModel.update(id, produto);
        return res.redirect ('/adm/produtos')
    },

    delete: (req, res) => {
        
        const { id } = req.params;
        ProdutoModel.delete(id);
        return res.redirect('/adm/produtos')

    }
}


module.exports = produtoController;
