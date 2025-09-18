import { ObraDeArte } from './obraDeArte';
import { artista } from './artista';
import { dimensao } from './dimensao';
import { StatusObra } from './enums/enumstatusobra';

export class Escultura extends ObraDeArte {
  constructor(
    id: string,
    titulo: string,
    artista: artista,
    anoCriacao: number,
    dimensoes: dimensao,
    status: StatusObra,
    valorEstimado: number,
    public material: string,
    public peso: number,
  ) {
    super(id, titulo, artista, anoCriacao, dimensoes, status, valorEstimado);
  }

  calcularValorMercado(): number {
    return this.valorEstimado + this.peso * 100;
  }

  obterDescricaoCompleta(): string {
    return `${super.obterDescricaoCompleta()}
    Material: ${this.material}
    Peso: ${this.peso}kg`;
  }
}
