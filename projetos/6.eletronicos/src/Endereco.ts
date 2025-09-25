export class Endereco {
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;

  constructor(
    rua: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
  ) {
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.cep = cep;
  }

  obterEnderecoCompleto(): string {
    return `${this.rua}, ${this.numero} - ${this.bairro}, ${this.cidade} - ${this.estado}, CEP: ${this.cep}`;
  }

  calcularDistancia(cepDestino: string): number {
    return Math.random() * 100;
  }
}
