import { Agendamento } from './Agendamento';

export class FichaTecnica {
  constructor(
    public historicoServicos: Agendamento[],
    public observacoes: string,
    public alergias: string[],
  ) {}
}
