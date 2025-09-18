import { ObraDeArte } from './obraDeArte';
import { StatusObra } from './enums/StatusObra';

export class Exposicao {
  obras: ObraDeArte[] = [];
  visitantes: number = 0;
  constructor(
    public id: string,
    public nome: string,
    public curador: string,
    public dataInicio: Date,
    public dataFim: Date,
  ) { }

  adicionarObra(obra: ObraDeArte): boolean {
    if (this.obras.some((o) => o.id === obra.id)) {
      console.log('A obra já está na exposição.');
      return false;
    }

    if (obra.status === StatusObra.VENDIDA || obra.status === StatusObra.EM_RESTAURACAO) {
      console.log(
        'A obra não pode ser adicionada à exposição (já foi vendida ou está em restauração).',
      );
      return false;
    }

    obra.alterarStatus(StatusObra.EM_EXPOSICAO);
    return true;
  }

  removerObra(obraId: string): boolean {
    const index = this.obras.findIndex((obra) => obra.id === obraId);
    if (index === -1) {
      console.log('A obra não foi encontrada na exposição.');
      return false;
    }

    this.obras.splice(index, 1);
    return true;
  }

  estaAtiva(): boolean {
    const hoje = new Date();
    return hoje >= this.dataInicio && hoje <= this.dataFim;
  }

  calcularValorTotalExposicao(): number {
    return this.obras.reduce((total, obra) => total + obra.calcularValorMercado(), 0);
  }
}
