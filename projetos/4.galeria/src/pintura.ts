import { ObraDeArte } from './obraDeArte';
import { artista } from './artista';
import { dimensao } from './dimensao';
import { StatusObra } from './enums/enumstatusobra';

export class Pintura extends ObraDeArte {
  constructor(
    id: string,
    titulo: string,
    artista: artista,
    anoCriacao: number,
    dimensoes: dimensao,
    status: StatusObra,
    valorEstimado: number,
    public tecnica: string,
    public suporte: string,
  ) {
    super(id, titulo, artista, anoCriacao, dimensoes, status, valorEstimado);
  }

  calcularValorMercado(): number {
    return this.valorEstimado * 1.2;
  }
}
