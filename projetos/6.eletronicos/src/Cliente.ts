import { Endereco } from './Endereco';
import { Pedido } from './Pedido';

// Classe abstrata Cliente
export abstract class Cliente {
  historicoPedidos: Pedido[] = [];

  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public telefone: string,
    public endereco: Endereco,
    historicoPedidos?: Pedido[],
  ) {
    if (historicoPedidos) this.historicoPedidos = historicoPedidos;
  }

  // Cada tipo de cliente calcula desconto de forma diferente
  abstract calcularDesconto(valorTotal: number): number;

  // Adiciona pedido ao histórico
  adicionarPedido(pedido: Pedido): void {
    this.historicoPedidos.push(pedido);
  }

  // Calcula total gasto pelo cliente
  calcularTotalGasto(): number {
    return this.historicoPedidos.reduce((total, pedido) => total + pedido.valorTotal, 0);
  }
}

// Cliente comum: sem desconto especial
export class ClienteComum extends Cliente {
  calcularDesconto(valorTotal: number): number {
    return valorTotal;
  }
}

// Cliente VIP: 10% de desconto + pontos de fidelidade
export class ClienteVIP extends Cliente {
  constructor(
    id: string,
    nome: string,
    email: string,
    telefone: string,
    endereco: Endereco,
    public dataVencimento: Date,
    public pontosAcumulados: number,
    historicoPedidos?: Pedido[],
  ) {
    super(id, nome, email, telefone, endereco, historicoPedidos);
  }

  calcularDesconto(valorTotal: number): number {
    return valorTotal * 0.9;
  }

  // Incrementa pontos
  adicionarPontos(): void {
    this.pontosAcumulados += 1;
  }
}

// Cliente empresa: 15% de desconto para compras acima de 5000
export class ClienteEmpresa extends Cliente {
  constructor(
    id: string,
    nome: string,
    email: string,
    telefone: string,
    endereco: Endereco,
    public cnpj: string,
    public nomeFantasia: string,
    historicoPedidos?: Pedido[],
  ) {
    super(id, nome, email, telefone, endereco, historicoPedidos);
  }

  calcularDesconto(valorTotal: number): number {
    return valorTotal > 5000 ? valorTotal * 0.85 : valorTotal;
  }
}
