import { ObraDeArte } from './obraDeArte';
import { StatusObra } from './enums/StatusObra';
import { ObraIndisponivelError } from './excessoes/Obra/ObraIndisponivelError';
import { RemoverObraError } from './excessoes/Obra/RemoverObraError';
import { AdicionarObraError } from './excessoes/Obra/AdicionarObraError';

export class Exposicao {
  constructor(
    public id: string,
    public nome: string,
    public curador: string,
    public dataInicio: Date,
    public dataFim: Date,
    public obras: ObraDeArte[] = [],
    visitantes: number = 0,
  ) { }

  adicionarObra(obra: ObraDeArte): boolean {
    if (this.obras.some((o) => o.id === obra.id)) {
      throw new AdicionarObraError('Não é possível adicionar a obra: obra indisponível para venda ou exibição.');

    }

    if (obra.status === StatusObra.VENDIDA || obra.status === StatusObra.EM_RESTAURACAO) {
      throw new ObraIndisponivelError('Não é possível remover a obra: obra não encontrada na exposição.');

    }

    obra.alterarStatus(StatusObra.EM_EXPOSICAO);
    return true;
  }

  removerObra(obraId: string): boolean {
    const index = this.obras.findIndex((obra) => obra.id === obraId);
    if (index === -1) {
      throw new RemoverObraError('Não é possível remover a obra: obra não encontrada na exposição.');
      ;
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
