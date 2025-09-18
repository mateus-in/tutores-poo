import { DiaSemana } from './DiaSemana';

export class HorarioFuncionamento {
  constructor(
    public diaSemana: DiaSemana,
    public horaAbertura: string,
    public horaFechamento: string,
    public funcionando: boolean
) {}
  estaAberto(hora: string): boolean{
        if (!this.funcionando) {
            return false;
        }
        return hora >= this.horaAbertura && hora <= this.horaFechamento;
    }
   obterHorariosDisponiveis(): string[]{
    return [];
   };
}