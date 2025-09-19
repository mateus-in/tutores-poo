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
    return hoje >= this.dataInicio && hoje <= this.dataFim;
  }

  aplicavelAoServico(servico: Servico): boolean {
    return this.servicosAlicaveis.includes(servico.nome);
  }

  calcularDesconto(valor: number): number {
    return valor * (this.percentualDesconto / 100);
  }
}
