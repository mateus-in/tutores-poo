export class Endereco {
  constructor(
    public rua: string,
    public numero: string,
    public bairro: string,
    public cidade: string,
    public estado: string,
    public cep: string,
  ) {}

  obterEnderecoCompleto(): string {
    return `${this.rua}, ${this.numero} - ${this.bairro}, ${this.cidade} - ${this.estado}, CEP: ${this.cep}`;
  }

  calcularDistancia(cepDestino: string): number {
    return Math.random() * 100;
  }
}
