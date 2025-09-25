"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
var RelatorioVendas_1 = require("./RelatorioVendas");
// Classe que representa a loja
var Loja = /** @class */ (function () {
    function Loja(nome, produtos, clientes, pedidos, vendedores) {
        if (produtos === void 0) { produtos = []; }
        if (clientes === void 0) { clientes = []; }
        if (pedidos === void 0) { pedidos = []; }
        if (vendedores === void 0) { vendedores = []; }
        this.nome = nome;
        this.produtos = produtos;
        this.clientes = clientes;
        this.pedidos = pedidos;
        this.vendedores = vendedores;
    }
    //   Adiciona produto ao catálogo
    Loja.prototype.adicionarProduto = function (produto) {
        this.produtos.push(produto);
    };
    //   Busca produtos pelo termo
    Loja.prototype.buscarProdutos = function (termo) {
        return this.produtos.filter(function (produto) {
            return produto.nome.toLowerCase().includes(termo.toLowerCase());
        });
    };
    //   Processa o pedido e atualiza estoque
    Loja.prototype.processarPedido = function (pedido) {
        if (pedido.confirmarPedido()) {
            this.pedidos.push(pedido); // adiciona à lista de pedidos da loja
            pedido.itens.forEach(function (item) {
                item.produto.atualizarEstoque(-item.quantidade); // reduz estoque
            });
            return true;
        }
        return false;
    };
    //   Consulta a quantidade em estoque de um produto
    Loja.prototype.consultarEstoque = function (produtoId) {
        var produto = this.produtos.find(function (p) { return p.id === produtoId; });
        return produto ? produto.quantidadeEstoque : 0;
    };
    //   Gera relatório de vendas do período
    Loja.prototype.gerarRelatorioVendas = function (dataInicio, dataFim) {
        var pedidosFiltrados = this.pedidos.filter(function (pedido) { return pedido.dataPedido >= dataInicio && pedido.dataPedido <= dataFim; });
        return new RelatorioVendas_1.RelatorioVendas(dataInicio, dataFim, pedidosFiltrados);
    };
    return Loja;
}());
exports.Loja = Loja;
