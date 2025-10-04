class Error {
  mensagem: string;
  constructor(mensagem: string) {
    this.mensagem = mensagem;
  }
}

export class EstoqueInsuficienteException extends Error {
  name: string;
  constructor(mensagem: string) {
    super(mensagem);
    this.name = 'EstoqueInsuficienteException';
  }
}

export class PedidoInvalidoException extends Error {
  name: string;
  constructor(mensagem: string) {
    super(mensagem);
    this.name = 'PedidoInvalidoException';
  }
}
