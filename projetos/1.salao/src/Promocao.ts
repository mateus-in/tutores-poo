import { Servico } from './Servico';

export class Promocao {
  constructor(
    public nome: string,
    public percentualDesconto: number,
    public dataInicio: Date,
    public dataFim: Date,
    public servicosAlicaveis: string[],
  ) {}
  estaAtiva(): boolean {
    const hoje = new Date();
    if (hoje >= this.dataInicio && hoje <= this.dataFim) {
      return true;
    }
    return false;
  }

  aplicavelAoServico(servico: Servico): boolean {
    if (!this.estaAtiva()) {
      return false;
    }
    return this.servicosAlicaveis.includes(servico.nome);
  }

  calcularDesconto(valor: number): number {
    if (!this.estaAtiva()) {
      return 0;
    }
    return valor * (this.percentualDesconto / 100);
  }
}
