export interface IProcessadorPagamento {
  processarPagamento(valor: number): boolean;
}
