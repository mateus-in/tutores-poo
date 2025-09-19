/*
    - Cadastrar motoristas com informações da CNH
    - Verificar habilitação para conduzir tipos específicos de veículos
    - Consultar histórico de viagens por motorista
    - Alertar sobre vencimento de CNH
*/

import { CategoriaCNH } from '../Classes_Principais/enum';

export class GestaoDeMotoristas {
  constructor(
    public nome: string,
    public cnh: string,
    public categoriaHabilitacao: CategoriaCNH[],
    public dataValidadeCNH: Date,
    public historicoViagens: string[] = [],
  ) {}
  verificarHabilitacao(veiculoTipo: string): boolean {
    const categoria = CategoriaCNH[veiculoTipo as keyof typeof CategoriaCNH];
    return this.categoriaHabilitacao.includes(categoria);
  }
  consultarHistoricoViagens(): string[] {
    return this.historicoViagens;
  }
  alertarVencimentoCNH(): string {
    const hoje = new Date();
    const umMesAntes = new Date(this.dataValidadeCNH);
    umMesAntes.setMonth(umMesAntes.getMonth() - 1);
    if (hoje >= umMesAntes && hoje <= this.dataValidadeCNH) {
      return 'Atenção: Sua CNH vence em menos de 30 dias!';
    } else if (hoje > this.dataValidadeCNH) {
      return 'Atenção: Sua CNH está vencida!';
    }
    return 'Sua CNH está válida.';
  }
  cadastrarMotorista(
    nome: string,
    cnh: string,
    categoriaHabilitacao: string[],
    dataValidadeCNH: Date,
  ): void {
    if (!nome || !cnh || categoriaHabilitacao.length === 0 || !dataValidadeCNH) {
      throw new Error('Todos os campos são obrigatórios para cadastrar um motorista.');
    }
    this.nome = nome;
    this.cnh = cnh;
    this.categoriaHabilitacao = categoriaHabilitacao.map(
      (cat) => CategoriaCNH[cat as keyof typeof CategoriaCNH],
    );
    this.dataValidadeCNH = dataValidadeCNH;
    this.historicoViagens = [];
  }
}
