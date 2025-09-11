import { Agendamento } from './Agendamento';

export class Profissional {
  constructor(
    public_id: string,
    public_nome: string,
    public_especialidades: string[],
    public_agenda: Agendamento,
  ) {}

  temEspecialidades(servico: string): boolean {
    return false;
  }

  estaDisponivel(dada: Date, duracao: number): boolean {
    return false;
  }
}
