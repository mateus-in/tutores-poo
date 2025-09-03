import { PrioridadeEnum } from './PrioridadeEnum';
import { StatusTarefaEnum } from './StatusTarefaEnum';
import { TarefaBase } from './TarefaBase';

export class TarefaSimples extends TarefaBase {
  constructor(
    public titulo: string,
    public descricao: string,
    public prioridade: PrioridadeEnum,
    public status: StatusTarefaEnum,
  ) {
    super(titulo, descricao, prioridade, status);
  }

  exibirDetalhes(): void {
    console.log({
      titulo: this.titulo,
      descricao: this.descricao,
      prioridade: this.prioridade,
      status: this.status,
    });
  }
}
