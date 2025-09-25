import { Produto } from './Produto';
import { CategoriaProduto } from './Enum';

export class Smartphone extends Produto {
  constructor(
    id: string,
    nome: string,
    marca: string,
    preco: number,
    quantidadeEstoque: number,
    peso: number,
    garantiaMeses: number,
    public sistemaOperacional: string,
    public armazenamento: number,
  ) {
    super(
      id,
      nome,
      marca,
      preco,
      quantidadeEstoque,
      CategoriaProduto.SMARTPHONE,
      peso,
      garantiaMeses,
    );
  }

  calcularFrete(cep: string): number {
    return 15;
  }
}

export class Notebook extends Produto {
  constructor(
    id: string,
    nome: string,
    marca: string,
    preco: number,
    quantidadeEstoque: number,
    peso: number,
    garantiaMeses: number,
    public processador: string,
    public memoria: number,
  ) {
    super(
      id,
      nome,
      marca,
      preco,
      quantidadeEstoque,
      CategoriaProduto.NOTEBOOK,
      peso,
      garantiaMeses,
    );
  }

  calcularFrete(cep: string): number {
    const valor = this.peso * 2;
    return valor < 10 ? 10 : valor; // mínimo 10 reais
  }
}

export class Acessorio extends Produto {
  constructor(
    id: string,
    nome: string,
    marca: string,
    preco: number,
    quantidadeEstoque: number,
    peso: number,
    garantiaMeses: number,
    public compatibilidade: string[],
  ) {
    super(
      id,
      nome,
      marca,
      preco,
      quantidadeEstoque,
      CategoriaProduto.ACESSORIO,
      peso,
      garantiaMeses,
    );
  }

  calcularFrete(cep: string): number {
    return this.preco > 200 ? 0 : 10;
  }
}
