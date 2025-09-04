import { Funcionario } from './Funcionario';
import { Gerente } from './Gerente';

export class SistemaRH {
  private funcionarios: Funcionario[] = [];

  adicionarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
    console.log(`Funcionário ${funcionario.nome} adicionado ao sistema de RH.`);
  }

  realizarAvaliacao(avaliador: Gerente, avaliado: Funcionario, nota: number): void {
    if (avaliador instanceof Gerente) {
      avaliador.avaliar(nota);
      avaliado.receberAvaliacao(nota);
    } else {
      console.log('Erro: Apenas gerentes podem realizar avaliações.');
    }
  }
}
