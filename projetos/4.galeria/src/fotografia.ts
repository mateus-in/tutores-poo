import { ObraDeArte } from './obraDeArte';
import { artista } from './artista';

import { dimensao } from './interfaces/dimensao';
import { StatusObra } from './enums/StatusObra';

export class Fotografia extends ObraDeArte {
  constructor(
    id: string,
    titulo: string,
    artista: artista,
    anoCriacao: number,
    dimensoes: dimensao,
    status: StatusObra,
    valorEstimado: number,
    public tiragem: number,
    public tecnicaImpressao: string,
  ) {
    super(id, titulo, artista, anoCriacao, dimensoes, status, valorEstimado);
  }

  calcularValorMercado(): number {
    return this.valorEstimado * this.tiragem;
  }

  obterDescricaoCompleta(): string {
    return `${super.obterDescricaoCompleta()}
    Tiragem: ${this.tiragem}
    Técnica de Impressão: ${this.tecnicaImpressao}`;
  }
}
