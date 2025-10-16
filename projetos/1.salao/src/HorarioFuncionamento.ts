import { DiaSemana } from './DiaSemana';

export class HorarioFuncionamento {
  constructor(
    public diaSemana: DiaSemana,
    public horaAbertura: Date,
    public horaFechamento: Date,
    public funcionando: boolean
) {}
  estaAberto(hora: Date): boolean{
        if (!this.funcionando) {
            return false;
        }
        return hora >= this.horaAbertura && hora <= this.horaFechamento;
    }
   obterHorariosDisponiveis(): string[]{
    return [];
   };
}