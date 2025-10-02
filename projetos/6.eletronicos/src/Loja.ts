import { Produto } from './Produto';
import { Cliente } from './Cliente';
import { Pedido } from './Pedido';
import { Vendedor } from './Vendedor';
import { RelatorioVendas } from './RelatorioVendas';


export class Loja {
  nome: string;
  produtos: Produto[];
  clientes: Cliente[];
  pedidos: Pedido[];
  vendedores: Vendedor[];

  constructor(
    nome: string,
    produtos: Produto[] = [],
    clientes: Cliente[] = [],
    pedidos: Pedido[] = [],
    vendedores: Vendedor[] = [],
  ) {
    this.nome = nome;
    this.produtos = produtos;
    this.clientes = clientes;
    this.pedidos = pedidos;
    this.vendedores = vendedores;
  }

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  buscarProdutos(termo: string): Produto[] {
    return this.produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(termo.toLowerCase()),
    );
  }

  processarPedido(pedido: Pedido): boolean {
    if (pedido.confirmarPedido()) {
      this.pedidos.push(pedido);
      pedido.itens.forEach((item) => {
        item.produto.atualizarEstoque(-item.quantidade);
      });
      return true;
    }
    return false;
  }

  consultarEstoque(produtoId: string): number {
    const produto = this.produtos.find((p) => p.id === produtoId);
    return produto ? produto.quantidadeEstoque : 0;
  }

  gerarRelatorioVendas(dataInicio: Date, dataFim: Date): RelatorioVendas {
    const pedidosFiltrados = this.pedidos.filter(
      (pedido) => pedido.dataPedido >= dataInicio && pedido.dataPedido <= dataFim,
    );
    return new RelatorioVendas(dataInicio, dataFim, pedidosFiltrados);
  }
}
