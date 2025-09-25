"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagamento = exports.FormaPagamento = exports.StatusPedido = exports.CategoriaProduto = void 0;
var CategoriaProduto;
(function (CategoriaProduto) {
    CategoriaProduto[CategoriaProduto["SMARTPHONE"] = 0] = "SMARTPHONE";
    CategoriaProduto[CategoriaProduto["NOTEBOOK"] = 1] = "NOTEBOOK";
    CategoriaProduto[CategoriaProduto["TABLET"] = 2] = "TABLET";
    CategoriaProduto[CategoriaProduto["ACESSORIO"] = 3] = "ACESSORIO";
    CategoriaProduto[CategoriaProduto["GAMER"] = 4] = "GAMER";
    CategoriaProduto[CategoriaProduto["CASA_INTELIGENTE"] = 5] = "CASA_INTELIGENTE";
})(CategoriaProduto || (exports.CategoriaProduto = CategoriaProduto = {}));
var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["CARRINHO"] = 0] = "CARRINHO";
    StatusPedido[StatusPedido["CONFIRMADO"] = 1] = "CONFIRMADO";
    StatusPedido[StatusPedido["PAGAMENTO_APROVADO"] = 2] = "PAGAMENTO_APROVADO";
    StatusPedido[StatusPedido["ENVIADO"] = 3] = "ENVIADO";
    StatusPedido[StatusPedido["ENTREGUE"] = 4] = "ENTREGUE";
    StatusPedido[StatusPedido["CANCELADO"] = 5] = "CANCELADO";
})(StatusPedido || (exports.StatusPedido = StatusPedido = {}));
var FormaPagamento;
(function (FormaPagamento) {
    FormaPagamento[FormaPagamento["DINHEIRO"] = 0] = "DINHEIRO";
    FormaPagamento[FormaPagamento["CARTAO_CREDITO"] = 1] = "CARTAO_CREDITO";
    FormaPagamento[FormaPagamento["CARTAO_DEBITO"] = 2] = "CARTAO_DEBITO";
    FormaPagamento[FormaPagamento["PIX"] = 3] = "PIX";
    FormaPagamento[FormaPagamento["BOLETO"] = 4] = "BOLETO";
    FormaPagamento[FormaPagamento["PARCELADO"] = 5] = "PARCELADO";
})(FormaPagamento || (exports.FormaPagamento = FormaPagamento = {}));
var StatusPagamento;
(function (StatusPagamento) {
    StatusPagamento[StatusPagamento["PENDENTE"] = 0] = "PENDENTE";
    StatusPagamento[StatusPagamento["APROVADO"] = 1] = "APROVADO";
    StatusPagamento[StatusPagamento["RECUSADO"] = 2] = "RECUSADO";
    StatusPagamento[StatusPagamento["CANCELADO"] = 3] = "CANCELADO";
})(StatusPagamento || (exports.StatusPagamento = StatusPagamento = {}));
