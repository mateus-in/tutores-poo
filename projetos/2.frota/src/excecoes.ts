export class VeiculoIndisponivelException extends Error {
  constructor(mensagem: string = 'O veículo está indisponível para alocação.') {
    super(mensagem);
    this.name = 'VeiculoIndisponivelException';
  }
}

export class CNHInvalidaException extends Error {
  constructor(mensagem: string = 'A CNH do motorista é inválida ou incompatível com o veículo.') {
    super(mensagem);
    this.name = 'CNHInvalidaException';
  }
}

export class ViagemInvalidaException extends Error {
  constructor(
    mensagem: string = 'Dados inválidos para a viagem (ex: quilometragem ou datas inconsistentes).',
  ) {
    super(mensagem);
    this.name = 'ViagemInvalidaException';
  }
}

export class ManutencaoObrigatoriaException extends Error {
  constructor(
    mensagem: string = 'O veículo precisa de manutenção obrigatória antes de ser utilizado.',
  ) {
    super(mensagem);
    this.name = 'ManutencaoObrigatoriaException';
  }
}
