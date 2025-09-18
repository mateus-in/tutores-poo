export class Produto {
  constructor(
    public nome: string,
    public quantidadeEstoque: number,
    public precoUnitario: number,
    public estoqueMinimo: number,
  ) {}

  temEstoqueSuficiente(quantidade: number): boolean {
    if (quantidade === 0){
       return false;      
    }
    return this.quantidadeEstoque >= quantidade;
  }

  consumir(quantidade: number): boolean {
    if (quantidade > this.quantidadeEstoque || quantidade <= 0){
       return false;      
    }
    return this.quantidadeEstoque >= quantidade;
  }

  precisaReposicao(): boolean {
    if (this.quantidadeEstoque <= this.estoqueMinimo){
        return true;
  }
    return false;
  }
}
