import { Endereco } from './Endereco';
import { Pedido } from './Pedido';

export abstract class Cliente {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    public telefone: string,
    public endereco: Endereco,
    public historicoPedidos: Pedido[] = [],
  ) {}

  abstract calcularDesconto(valorTotal: number): number;

  adicionarPedido(pedido: Pedido): void {
    this.historicoPedidos.push(pedido);
  }

  calcularTotalGasto(): number {
    return this.historicoPedidos.reduce((total, pedido) => total + pedido.valorTotal, 0);
  }
}

export class ClienteComum extends Cliente {
  calcularDesconto(valorTotal: number): number {
    return valorTotal; // sem desconto
  }
}

export class ClienteVIP extends Cliente {
  constructor(
    id: string,
    nome: string,
    email: string,
    telefone: string,
    endereco: Endereco,
    public dataVencimento: Date,
    public pontosAcumulados: number,
    historicoPedidos: Pedido[] = [],
  ) {
    super(id, nome, email, telefone, endereco, historicoPedidos);
  }

  
  calcularDesconto(valorTotal: number): number {
    return valorTotal * 0.9; // 10% desconto
  }

  adicionarPonto(): void {
  this.pontosAcumulados += 1;
}

}

export class ClienteEmpresa extends Cliente {
  constructor(
    id: string,
    nome: string,
    email: string,
    telefone: string,
    endereco: Endereco,
    public cnpj: string,
    public nomeFantasia: string,
    historicoPedidos: Pedido[] = [],
  ) {
    super(id, nome, email, telefone, endereco, historicoPedidos);
  }

  calcularDesconto(valorTotal: number): number {
    return valorTotal > 5000 ? valorTotal * 0.85 : valorTotal;
  }
}
