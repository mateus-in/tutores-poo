"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteEmpresa = exports.ClienteVIP = exports.ClienteComum = exports.Cliente = void 0;
// Classe abstrata Cliente
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, email, telefone, endereco, historicoPedidos) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
        this.historicoPedidos = [];
        if (historicoPedidos)
            this.historicoPedidos = historicoPedidos;
    }
    // Adiciona pedido ao histórico
    Cliente.prototype.adicionarPedido = function (pedido) {
        this.historicoPedidos.push(pedido);
    };
    // Calcula total gasto pelo cliente
    Cliente.prototype.calcularTotalGasto = function () {
        return this.historicoPedidos.reduce(function (total, pedido) { return total + pedido.valorTotal; }, 0);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
// Cliente comum: sem desconto especial
var ClienteComum = /** @class */ (function (_super) {
    __extends(ClienteComum, _super);
    function ClienteComum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClienteComum.prototype.calcularDesconto = function (valorTotal) {
        return valorTotal;
    };
    return ClienteComum;
}(Cliente));
exports.ClienteComum = ClienteComum;
// Cliente VIP: 10% de desconto + pontos de fidelidade
var ClienteVIP = /** @class */ (function (_super) {
    __extends(ClienteVIP, _super);
    function ClienteVIP(id, nome, email, telefone, endereco, dataVencimento, pontosAcumulados, historicoPedidos) {
        var _this = _super.call(this, id, nome, email, telefone, endereco, historicoPedidos) || this;
        _this.dataVencimento = dataVencimento;
        _this.pontosAcumulados = pontosAcumulados;
        return _this;
    }
    ClienteVIP.prototype.calcularDesconto = function (valorTotal) {
        return valorTotal * 0.9;
    };
    // Incrementa pontos
    ClienteVIP.prototype.adicionarPontos = function () {
        this.pontosAcumulados += 1;
    };
    return ClienteVIP;
}(Cliente));
exports.ClienteVIP = ClienteVIP;
// Cliente empresa: 15% de desconto para compras acima de 5000
var ClienteEmpresa = /** @class */ (function (_super) {
    __extends(ClienteEmpresa, _super);
    function ClienteEmpresa(id, nome, email, telefone, endereco, cnpj, nomeFantasia, historicoPedidos) {
        var _this = _super.call(this, id, nome, email, telefone, endereco, historicoPedidos) || this;
        _this.cnpj = cnpj;
        _this.nomeFantasia = nomeFantasia;
        return _this;
    }
    ClienteEmpresa.prototype.calcularDesconto = function (valorTotal) {
        return valorTotal > 5000 ? valorTotal * 0.85 : valorTotal;
    };
    return ClienteEmpresa;
}(Cliente));
exports.ClienteEmpresa = ClienteEmpresa;
