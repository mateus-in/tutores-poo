import { CategoriaServico } from '../Enums/enumCategoriaServico';

export class ServicoAdicional {
  public readonly id: string;
  public nome: string;
  public descricao: string;
  public preco: number;
  public categoria: CategoriaServico;

  constructor(
    id: string,
    nome: string,
    descricao: string,
    preco: number,
    categoria: CategoriaServico,
  ) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.categoria = categoria;
  }
  calcularCusto(quantidade: number): number {
    if (quantidade <= 0) {
      throw new Error('Quantidade inválida para cálculo de custo.');
    }
    return this.preco * quantidade;
  }

  estaDisponivel(): boolean {
    return true;
  }
}
