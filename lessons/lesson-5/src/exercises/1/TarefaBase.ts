import { PrioridadeEnum } from './PrioridadeEnum';
import { StatusTarefaEnum } from './StatusTarefaEnum';

export abstract class TarefaBase {
  constructor(
    public titulo: string,
    public descricao: string,
    public prioridade: PrioridadeEnum,
    public status: StatusTarefaEnum,
  ) {}

  abstract exibirDetalhes(): void;
}
