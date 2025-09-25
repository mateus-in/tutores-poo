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
exports.Acessorio = exports.Notebook = exports.Smartphone = void 0;
var Produto_1 = require("./Produto");
var Enum_1 = require("./Enum");
var Smartphone = /** @class */ (function (_super) {
    __extends(Smartphone, _super);
    function Smartphone(id, nome, marca, preco, quantidadeEstoque, peso, garantiaMeses, sistemaOperacional, armazenamento) {
        var _this = _super.call(this, id, nome, marca, preco, quantidadeEstoque, Enum_1.CategoriaProduto.SMARTPHONE, peso, garantiaMeses) || this;
        _this.sistemaOperacional = sistemaOperacional;
        _this.armazenamento = armazenamento;
        return _this;
    }
    Smartphone.prototype.calcularFrete = function (cep) {
        return 15;
    };
    return Smartphone;
}(Produto_1.Produto));
exports.Smartphone = Smartphone;
var Notebook = /** @class */ (function (_super) {
    __extends(Notebook, _super);
    function Notebook(id, nome, marca, preco, quantidadeEstoque, peso, garantiaMeses, processador, memoria) {
        var _this = _super.call(this, id, nome, marca, preco, quantidadeEstoque, Enum_1.CategoriaProduto.NOTEBOOK, peso, garantiaMeses) || this;
        _this.processador = processador;
        _this.memoria = memoria;
        return _this;
    }
    Notebook.prototype.calcularFrete = function (cep) {
        var valor = this.peso * 2;
        return valor < 10 ? 10 : valor; // mínimo 10 reais
    };
    return Notebook;
}(Produto_1.Produto));
exports.Notebook = Notebook;
var Acessorio = /** @class */ (function (_super) {
    __extends(Acessorio, _super);
    function Acessorio(id, nome, marca, preco, quantidadeEstoque, peso, garantiaMeses, compatibilidade) {
        var _this = _super.call(this, id, nome, marca, preco, quantidadeEstoque, Enum_1.CategoriaProduto.ACESSORIO, peso, garantiaMeses) || this;
        _this.compatibilidade = compatibilidade;
        return _this;
    }
    Acessorio.prototype.calcularFrete = function (cep) {
        return this.preco > 200 ? 0 : 10;
    };
    return Acessorio;
}(Produto_1.Produto));
exports.Acessorio = Acessorio;
