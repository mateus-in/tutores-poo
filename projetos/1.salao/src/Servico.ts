export abstract class Servico {
  constructor(public nome: string, public precoBase: number, public duracaoMinutos: number) {}

  abstract calcularPrecoFinal(): number;
}
