"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedido = void 0;
// Representa um item de um pedido
var ItemPedido = /** @class */ (function () {
    function ItemPedido(produto, quantidade, precoUnitario, desconto) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
        this.desconto = desconto;
    }
    // Calcula subtotal (preço * quantidade)
    ItemPedido.prototype.calcularSubtotal = function () {
        return this.precoUnitario * this.quantidade;
    };
    // Aplica desconto em percentual
    ItemPedido.prototype.aplicarDesconto = function (percentual) {
        if (percentual > 0 && percentual <= 100) {
            this.desconto = (this.precoUnitario * percentual) / 100;
        }
    };
    return ItemPedido;
}());
exports.ItemPedido = ItemPedido;
