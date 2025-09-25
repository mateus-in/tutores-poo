"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelatorioVendas = void 0;
// Classe para gerar relatórios de vendas
var RelatorioVendas = /** @class */ (function () {
    function RelatorioVendas(dataInicio, dataFim, pedidosAnalisados) {
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.pedidosAnalisados = pedidosAnalisados;
    }
    // Calcula o faturamento total do período
    RelatorioVendas.prototype.calcularFaturamentoTotal = function () {
        return this.pedidosAnalisados.reduce(function (total, pedido) { return total + pedido.valorTotal; }, 0);
    };
    // Retorna os produtos mais vendidos
    RelatorioVendas.prototype.obterProdutosMaisVendidos = function () {
        var contagem = new Map();
        this.pedidosAnalisados.forEach(function (pedido) {
            pedido.itens.forEach(function (item) {
                if (contagem.has(item.produto.id)) {
                    contagem.get(item.produto.id).quantidade += item.quantidade;
                }
                else {
                    contagem.set(item.produto.id, { produto: item.produto, quantidade: item.quantidade });
                }
            });
        });
        // Ordena por quantidade vendida e retorna produtos
        return Array.from(contagem.values())
            .sort(function (a, b) { return b.quantidade - a.quantidade; })
            .map(function (v) { return v.produto; });
    };
    // Calcula ticket médio por pedido
    RelatorioVendas.prototype.calcularTicketMedio = function () {
        if (this.pedidosAnalisados.length === 0)
            return 0;
        return this.calcularFaturamentoTotal() / this.pedidosAnalisados.length;
    };
    // Analisar performance de vendedores (retorna objeto simples)
    RelatorioVendas.prototype.analisarPerformanceVendedores = function () {
        return this.pedidosAnalisados.map(function (pedido) { return ({
            vendedor: pedido.cliente.nome,
            totalVendas: pedido.valorTotal,
        }); });
    };
    return RelatorioVendas;
}());
exports.RelatorioVendas = RelatorioVendas;
