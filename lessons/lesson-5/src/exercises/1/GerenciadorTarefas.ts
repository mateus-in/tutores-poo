import { PrioridadeEnum } from './PrioridadeEnum';
import { StatusTarefaEnum } from './StatusTarefaEnum';
import { TarefaBase } from './TarefaBase';
import { TarefaComPrazo } from './TarefaComPrazo';

export class GerenciadorTarefas {
  public tarefas: TarefaBase[] = [];

  adicionarTarefa(tarefa: TarefaBase) {
    this.tarefas.push(tarefa);
  }

  atualizarStatus(tarefa: TarefaBase, status: StatusTarefaEnum) {
    const tarefaEncontrada = this.tarefas.find((t) => t.titulo === tarefa.titulo);

    if (!tarefaEncontrada) {
      return;
    }

    tarefaEncontrada.status = status;
  }

  listarTarefasPorPrioridade(prioridade: PrioridadeEnum) {
    const tarefasEncontradas = this.tarefas.filter((tarefa) => tarefa.prioridade === prioridade);

    tarefasEncontradas.forEach((tarefa) => tarefa.exibirDetalhes());
  }

  listarTarefasAtrasadas() {
    const hoje = new Date();

    this.tarefas.forEach((tarefa) => {
      if (
        tarefa instanceof TarefaComPrazo &&
        tarefa.status === StatusTarefaEnum.PENDENTE &&
        tarefa.prazoFinal < hoje
      ) {
        tarefa.exibirDetalhes();
      }
    });
  }
}
