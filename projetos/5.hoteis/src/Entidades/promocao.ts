class Promocao {
  nome: string;
  percentualDesconto: number;
  dataInicio: Date;
  dataFim: Date;
  tiposQuartoAplicaveis: string[];

  constructor(
    nome: string,
    percentualDesconto: number,
    dataInicio: Date,
    dataFim: Date,
    tiposQuartoAplicaveis: string[],
  ) {
    this.nome = nome;
    this.percentualDesconto = percentualDesconto;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
    this.tiposQuartoAplicaveis = tiposQuartoAplicaveis;
  }

  estaAtiva(dataReferencia: Date = new Date()): boolean {
    return dataReferencia >= this.dataInicio && dataReferencia <= this.dataFim;
  }

  aplicaAoTipoQuarto(tipo: string): boolean {
    return this.tiposQuartoAplicaveis.includes(tipo);
  }
}
