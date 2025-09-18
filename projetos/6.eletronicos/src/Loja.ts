import { Produto } from "./Produto.ts";


export class Loja {
    nome: string;
    produtos: Produto[];
    clientes: Cliente[];  
    pedidos: Pedido[];
    vendedores: Vendedor[];

    constructor (

        nome: string,
        produtos: Produto[],
        clientes: Cliente[],  
        pedidos: Pedido[],
        vendedores: Vendedor[],

    ){

        this.nome = nome;
        this.produtos = produtos;
        this.clientes = clientes;
        this.pedidos = pedidos;
        this.vendedores = vendedores

    }
    
    adicionarProduto(produto: Produto): void {}
    
    buscarProdutos(termo: string): Produto[] {}

    processarPedido(pedido: Pedido): boolean {}

    consultarEstoque(produtoId: string): number {}

    gerarRelatorioVendas(dataInicio: Date, dataFim: Date): RelatorioVendas {}



}  