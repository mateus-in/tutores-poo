export class EstoqueInsuficienteException extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = 'EstoqueInsuficienteException';
  }
}
