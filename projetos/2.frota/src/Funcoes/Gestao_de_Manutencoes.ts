// Interface para representar uma manutenção
interface Manutencao {
  id: string;
  tipo: 'preventiva' | 'corretiva';
  dataAgendada: Date;
  quilometragemPrevista: number;
  descricao: string;
  custo: number;
  status: 'pendente' | 'concluida' | 'cancelada';
  veiculoPlaca: string;
}

export class GestaoDeManutencoes {
  private manutencoes: Manutencao[] = [];
  private readonly QUILOMETRAGEM_PREVENTIVA = 10000; // KM para manutenção preventiva

  constructor() {}

  agendarManutencaoPreventiva(
    veiculoPlaca: string,
    quilometragemAtual: number,
    dataAgendada: Date,
  ): void {
    // Calcula próxima quilometragem para manutenção
    const quilometragemPrevista = quilometragemAtual + this.QUILOMETRAGEM_PREVENTIVA;

    const manutencao: Manutencao = {
      id: this.gerarId(),
      tipo: 'preventiva',
      dataAgendada,
      quilometragemPrevista,
      descricao: `Manutenção preventiva programada para ${quilometragemPrevista}km`,
      custo: 0, // Será atualizado após a realização
      status: 'pendente',
      veiculoPlaca,
    };

    this.manutencoes.push(manutencao);
  }

  registrarManutencaoCorretiva(
    veiculoPlaca: string,
    descricao: string,
    custo: number,
    dataRealizacao: Date,
  ): void {
    const manutencao: Manutencao = {
      id: this.gerarId(),
      tipo: 'corretiva',
      dataAgendada: dataRealizacao,
      quilometragemPrevista: 0, // Não se aplica para corretiva
      descricao,
      custo,
      status: 'concluida',
      veiculoPlaca,
    };

    this.manutencoes.push(manutencao);
  }

  alertarManutencoesPendentes(): Manutencao[] {
    const hoje = new Date();
    return this.manutencoes.filter((manutencao) => {
      return manutencao.status === 'pendente' && manutencao.dataAgendada <= hoje;
    });
  }

  controlarCustosManutencao(veiculoPlaca?: string): { [key: string]: number } {
    const custos: { [key: string]: number } = {};

    this.manutencoes.forEach((manutencao) => {
      if (veiculoPlaca && manutencao.veiculoPlaca !== veiculoPlaca) {
        return;
      }

      if (!custos[manutencao.veiculoPlaca]) {
        custos[manutencao.veiculoPlaca] = 0;
      }

      if (manutencao.status === 'concluida') {
        custos[manutencao.veiculoPlaca] += manutencao.custo;
      }
    });

    return custos;
  }

  // Métodos auxiliares
  private gerarId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  // Métodos adicionais úteis
  verificarNecessidadeManutencaoPreventiva(
    veiculoPlaca: string,
    quilometragemAtual: number,
  ): boolean {
    const ultimaManutencao = [...this.manutencoes]
      .reverse()
      .find(
        (m) =>
          m.veiculoPlaca === veiculoPlaca && m.tipo === 'preventiva' && m.status === 'concluida',
      );

    if (!ultimaManutencao) {
      return true; // Se não houver manutenção anterior, recomenda fazer
    }

    return quilometragemAtual >= ultimaManutencao.quilometragemPrevista;
  }

  obterHistoricoManutencoes(veiculoPlaca: string): Manutencao[] {
    return this.manutencoes
      .filter((m) => m.veiculoPlaca === veiculoPlaca)
      .sort((a, b) => b.dataAgendada.getTime() - a.dataAgendada.getTime());
  }

  atualizarStatusManutencao(
    manutencaoId: string,
    novoStatus: 'pendente' | 'concluida' | 'cancelada',
    custoPosRealizacao?: number,
  ): void {
    const manutencao = this.manutencoes.find((m) => m.id === manutencaoId);
    if (!manutencao) {
      throw new Error('Manutenção não encontrada');
    }

    manutencao.status = novoStatus;
    if (custoPosRealizacao !== undefined && novoStatus === 'concluida') {
      manutencao.custo = custoPosRealizacao;
    }
  }
}
