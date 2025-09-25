"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
var Enum_1 = require("./Enum");
// Classe que representa um pedido na loja
var Pedido = /** @class */ (function () {
    function Pedido(id, cliente, itens, dataPedido, status, valorTotal, valorFrete, formaPagamento) {
        this.id = id;
        this.cliente = cliente;
        this.itens = itens;
        this.dataPedido = dataPedido;
        this.status = status;
        this.valorTotal = valorTotal;
        this.valorFrete = valorFrete;
        this.formaPagamento = formaPagamento;
    }
    // Adiciona um item ao pedido
    Pedido.prototype.adicionarItem = function (item) {
        this.itens.push(item);
        console.log('Item adicionado!');
    };
    // Remove um item do pedido pelo ID do produto
    Pedido.prototype.removerItem = function (produtoId) {
        var i = this.itens.findIndex(function (i) { return i.produto.id === produtoId; });
        if (i !== -1) {
            this.itens.splice(i, 1);
            console.log('Item removido');
            return true;
        }
        console.log('Item não encontrado!');
        return false;
    };
    // Calcula o subtotal do pedido considerando quantidade e desconto
    Pedido.prototype.calcularSubtotal = function () {
        return this.itens.reduce(function (total, item) {
            var valorItem = item.precoUnitario * item.quantidade - item.desconto;
            return total + valorItem;
        }, 0);
    };
    // Calcula o valor total do pedido somando o frete
    Pedido.prototype.calcularValorTotal = function () {
        return this.calcularSubtotal() + this.valorFrete;
    };
    // Confirma o pedido, atualiza status e valor total
    Pedido.prototype.confirmarPedido = function () {
        if (this.itens.length === 0) {
            console.log('Pedido sem itens!');
            return false;
        }
        this.valorTotal = this.calcularValorTotal();
        this.status = Enum_1.StatusPedido.CONFIRMADO;
        console.log('Pedido confirmado!');
        return true;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
