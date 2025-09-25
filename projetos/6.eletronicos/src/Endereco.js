"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
var Endereco = /** @class */ (function () {
    function Endereco(rua, numero, bairro, cidade, estado, cep) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }
    // Retorna endereço completo como string
    Endereco.prototype.obterEnderecoCompleto = function () {
        return "".concat(this.rua, ", ").concat(this.numero, " - ").concat(this.bairro, ", ").concat(this.cidade, " - ").concat(this.estado, ", CEP: ").concat(this.cep);
    };
    // Calcula distância fictícia para o CEP destino
    Endereco.prototype.calcularDistancia = function (cepDestino) {
        return Math.random() * 100;
    };
    return Endereco;
}());
exports.Endereco = Endereco;
