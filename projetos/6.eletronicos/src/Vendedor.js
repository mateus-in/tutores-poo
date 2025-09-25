"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendedor = void 0;
var Vendedor = /** @class */ (function () {
    function Vendedor(id, nome, comissaoPercentual, metaMensal, vendasMes) {
        this.vendasMes = [];
        this.id = id;
        this.nome = nome;
        this.comissaoPercentual = comissaoPercentual;
        this.metaMensal = metaMensal;
        this.vendasMes = vendasMes;
    }
    Vendedor.prototype.calcularComissao = function () {
        var faturamento = this.vendasMes.reduce(function (acc, p) { return acc + p.valorTotal; }, 0);
        return Number((faturamento * (this.comissaoPercentual / 100)).toFixed(2));
    };
    Vendedor.prototype.adicionarVenda = function (pedido) {
        this.vendasMes.push(pedido);
    };
    Vendedor.prototype.atingiuMeta = function () {
        var faturamento = this.vendasMes.reduce(function (acc, p) { return acc + p.valorTotal; }, 0);
        return faturamento >= this.metaMensal;
    };
    return Vendedor;
}());
exports.Vendedor = Vendedor;
