import { Servico } from './Servico';

export class Promocao {
  constructor(
    public nome: string,
    public percentualDesconto: number,
    public dataInicio: Date,
    public dataFim: Date,
    public servicosAplicaveis: Servico[], //correçao da ortografia de "Apicaveis" para "Aplicaveis". Agora é um array de objetos Servico
  ) {}
  estaAtiva(): boolean {
    const hoje = new Date();
    return hoje >= this.dataInicio && hoje <= this.dataFim;
  }

  aplicavelAoServico(servico: Servico): boolean {
    if (!this.estaAtiva()) {
      return false;
    }
    return this.servicosAplicaveis.includes(servico);
  }

  calcularDesconto(valor: number): number {
    if (!this.estaAtiva()) {
      return 0;
    }
    return valor * (this.percentualDesconto / 100);
  }
}
