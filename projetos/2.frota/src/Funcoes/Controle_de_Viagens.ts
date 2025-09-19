/*
- Planejar e iniciar viagens alocando motorista e veículo
- Acompanhar viagens em andamento
- Finalizar viagens calculando custos e distâncias
- Manter histórico completo de viagens
*/

import { Veiculos } from '../Classes_Principais/veiculo';
import { Motorista } from '../Classes_Principais/Motorista';
import { StatusViagem } from '../Classes_Principais/enum';
import { CategoriaCNH } from '../Classes_Principais/enum';

export class ControleDeViagem {
  constructor(
    public viagens: {
      id: string;
      motorista: Motorista;
      veiculo: Veiculos;
      origem: string;
      destino: string;
      dataInicio: Date;
      dataFim: Date;
      quilometragemInicial: number;
      quilometragemFinal: number;
      status: StatusViagem;
    }[] = [],
  ) {}
  planejarViagem(
    id: string,
    motorista: Motorista,
    veiculo: Veiculos,
    origem: string,
    destino: string,
    dataInicio: Date,
    quilometragemInicial: number,
  ): void {
    if (!motorista.categoriaCNH.includes(CategoriaCNH.B)) {
      throw new Error('Motorista não possui CNH válida para este veículo.');
    }
    const novaViagem = {
      id,
      motorista,
      veiculo,
      origem,
      destino,
      dataInicio,
      dataFim: new Date(),
      quilometragemInicial,
      quilometragemFinal: 0,
      status: StatusViagem.Planejada,
    };
    this.viagens.push(novaViagem);
  }
  iniciarViagem(id: string): void {
    const viagem = this.viagens.find((v) => v.id === id);
    if (!viagem) {
      throw new Error('Viagem não encontrada.');
    }
    if (viagem.status !== StatusViagem.Planejada) {
      throw new Error('Viagem não está no estado planejada.');
    }
    viagem.status = StatusViagem.Em_Andamento;
    viagem.dataInicio = new Date();
  }
  finalizarViagem(id: string, quilometragemFinal: number): void {
    const viagem = this.viagens.find((v) => v.id === id);
    if (!viagem) {
      throw new Error('Viagem não encontrada.');
    }
    if (viagem.status !== StatusViagem.Em_Andamento) {
      throw new Error('Viagem não está em andamento.');
    }
    if (quilometragemFinal < viagem.quilometragemInicial) {
      throw new Error('Quilometragem final não pode ser menor que a inicial.');
    }
    viagem.status = StatusViagem.Concluida;
    viagem.quilometragemFinal = quilometragemFinal;
    viagem.dataFim = new Date();
    viagem.veiculo.atualizarQuilometragem(quilometragemFinal);
  }
  acompanharViagensEmAndamento(): typeof this.viagens {
    return this.viagens.filter((v) => v.status === StatusViagem.Em_Andamento);
  }
  obterHistoricoViagens(): typeof this.viagens {
    return this.viagens;
  }
}
