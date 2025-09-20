import { Produto } from "./Produto"; 
import { ItemPedido } from "./ItemPedido"; 



export class EstoqueService {
    produtos: Produto[];
    estoqueMinimo: Map<string, number>;

    constructor (

        produtos: Produto[],
        estoqueMinimo: Map<string, number>,
    ){
        this.produtos = produtos;
        this.estoqueMinimo = estoqueMinimo;
    }

    verificarEstoqueBaixo(): Produto[] {
         return this.produtos.filter(produto => {
            const minimo = this.estoqueMinimo.get(produto.id) || 0;
            return produto.quantidadeEstoque < minimo;
         });
    }

    atualizarEstoque(produtoId: string, quantidade: number): boolean {
        const produto = this.produtos.find(p => p.id === produtoId);
        if (produto) {
            produto.quantidadeEstoque += quantidade;
            return true;
        }
         return false;
        
    }

    reservarProdutos(itens: ItemPedido[]): boolean {
        const podeReservar = itens.every(item => {
            const produto = this.produtos.find(p => p.id === item.produtoId);
            return produto && produto.quantidadeEstoque >= item.quantidade;
        });

        if (podeReservar) {
            console.log("Reserva realizada com sucesso.");
            itens.forEach(item => {
                const produto = this.produtos.find(p => p.id === item.produtoId);
                if (produto) {
                    produto.quantidadeEstoque -= item.quantidade;
                }
            });

    }
    }

    liberarReserva(itens: ItemPedido[]): void {
        for (const item of itens) {
            const produto = this.produtos.find(p => p.id === item.produtoId);
            if (produto) {
                produto.quantidadeEstoque += item.quantidade;
            }
        }
        console.log("Reserva liberada.");
    

