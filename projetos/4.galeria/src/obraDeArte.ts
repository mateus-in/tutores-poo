import { StatusObra } from './enums/enumstatusobra';
import { artista } from './artista';
import { dimensao } from './dimensao';

export abstract class ObraDeArte {
  constructor(
    public id: string,
    public titulo: string,
    public artista: artista,
    public anoCriacao: number,
    public dimensoes: dimensao,
    public status: StatusObra,
    public valorEstimado: number,
  ) { }

  abstract calcularValorMercado(): number;

  alterarStatus(novoStatus: StatusObra): void {
    this.status = novoStatus;
  }

  obterDescricaoCompleta(): string {
    return `Título: ${this.titulo}
    Artista: ${this.artista.nome}
    Ano de Criação: ${this.anoCriacao}
    Status: ${this.status}
    Valor Estimado: ${this.valorEstimado}`;
  }
}
