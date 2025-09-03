import { PrioridadeEnum } from './PrioridadeEnum';
import { StatusTarefaEnum } from './StatusTarefaEnum';
import { TarefaBase } from './TarefaBase';

export class TarefaComPrazo extends TarefaBase {
  constructor(
    public titulo: string,
    public descricao: string,
    public prioridade: PrioridadeEnum,
    public status: StatusTarefaEnum,
    public prazoFinal: Date,
  ) {
    super(titulo, descricao, prioridade, status);
  }

  exibirDetalhes(): void {
    console.log({
      titulo: this.titulo,
      descricao: this.descricao,
      prioridade: this.prioridade,
      status: this.status,
      prazoFinal: this.prazoFinal,
    });
  }
}
