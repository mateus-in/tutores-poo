import { Agendamento } from './Agendamento';

export class Profissional {
  constructor(
   
    public id: string,
    public nome: string,
    public especialidades: string[],
    public agenda: Agendamento,
  ) {}

  temEspecialidades(servico: string): boolean {
    if (this.especialidades.length === 0 || !this.especialidades.includes(servico)){
       return false;      
    }

    return this.especialidades.includes(servico);
  }

  estaDisponivel(data: Date, duracao: number): boolean {
    if (duracao <= 0 || this.agenda.dataHora === data || this.agenda.dataHora.getTime() + duracao*60000 > data.getTime()){
       return false;      
    }
     return true;
  }
}



