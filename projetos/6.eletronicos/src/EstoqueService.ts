import { Produto } from "./Produto.ts"; 
import { ItemPedido } from "./ItemPedido.ts"; 



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
         }
    }

    atualizarEstoque(produtoId: string, quantidade: number): boolean {
       return true
        

    }

    reservarProdutos(itens: ItemPedido[]): boolean {
        for (const item of itens) {
            const produto = this.produtos.find(p => p.id === item.produtoId);

    }

    liberarReserva(itens: ItemPedido[]): void {


    } 
    
}