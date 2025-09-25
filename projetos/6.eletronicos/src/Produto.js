"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
// Classe abstrata Produto
var Produto = /** @class */ (function () {
    function Produto(id, nome, marca, preco, quantidadeEstoque, categoria, peso, garantiaMeses) {
        this.id = id;
        this.nome = nome;
        this.marca = marca;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
        this.categoria = categoria;
        this.peso = peso;
        this.garantiaMeses = garantiaMeses;
    }
    // Verifica se tem estoque suficiente
    Produto.prototype.temEstoque = function (quantidade) {
        return this.quantidadeEstoque >= quantidade;
    };
    // Atualiza quantidade em estoque
    Produto.prototype.atualizarEstoque = function (quantidade) {
        this.quantidadeEstoque = Math.max(0, this.quantidadeEstoque + quantidade);
    };
    // Aplica desconto no preço
    Produto.prototype.aplicarDesconto = function (percentual) {
        percentual = Math.min(percentual, 100);
        return this.preco - (this.preco * percentual) / 100;
    };
    return Produto;
}());
exports.Produto = Produto;
