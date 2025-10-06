import { Agendamento } from './Agendamento';
import { Servico } from './Servico';

export class Profissional {
  constructor(
   
    public id: string,
    public nome: string,
    public cpf: string,
    public especialidades: Servico[],
    public agenda: Agendamento []=[] //agora é um array de agendamentos
  ) {}

  temEspecialidades(servico: Servico): boolean {
    return this.especialidades.includes(servico); 
    }
  
  estaDisponivel(data: Date, duracao: number): boolean {
   if (duracao <= 0) return false;

    const inicioNovo = data.getTime();
    const fimNovo = inicioNovo + duracao * 60000;

    for (const ag of this.agenda) {
      const inicioExistente = ag.dataHora.getTime();
      const fimExistente = inicioExistente + ag.calcularDuracaoTotal() * 60000;

      // Se houver sobreposição de horários
      if (inicioNovo < fimExistente && fimNovo > inicioExistente) {
        return false;
      }
    }

    return true;
  }
}



