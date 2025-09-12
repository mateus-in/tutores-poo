
abstract class Veiculos {
    constructor(
    placa: string,
    modelo: string,
    ano: number,
    quilometragem: number,
    status: StatusVeiculo,
    custoManutencao: number,
    ) {
        this.placa = placa;
        this.modelo = modelo;
        this.ano = ano;
        this.quilometragem = quilometragem;
        this.status = status;
        this.custoManutencao = custoManutencao;
    }

    placa: string;
    modelo: string;
    ano: number;
    quilometragem: number;
    status: StatusVeiculo;
    custoManutencao: number;

    abstract calcularValorSeguro(): number;




}
