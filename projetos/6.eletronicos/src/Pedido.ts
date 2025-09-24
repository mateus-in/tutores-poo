import { Cliente } from "./Cliente";
import { ItemPedido } from "./ItemPedido";
import { StatusPedido, FormaPagamento } from "./Enum";

export class Pedido{
    id:string;
    cliente: Cliente;
    itens: ItemPedido[];
    datapedido: Date;
    Status: StatusPedido;
    valorTotal: number;
    valorFrete: number;
    formaPagamento: FormaPagamento;

    constructor (
    
        id:string,
        cliente: Cliente,
        itens: ItemPedido[],
        datapedido: Date,
        Status: StatusPedido,
        valorTotal: number,
        valorFrete: number,
        formaPagamento: FormaPagamento, 
    ){
        this.id = id;
        this.cliente = cliente;
        this.itens = itens;
        this.datapedido = datapedido;
        this.Status = Status;
        this.valorTotal = valorTotal;
        this.valorFrete = valorFrete;
        this.formaPagamento = formaPagamento; 
    }

    adicionarItem(item: ItemPedido): void {}

removerItem(produtoId: string): boolean {}

calcularSubtotal(): number {}

calcularValorTotal(): number {}

confirmarPedido(): boolean {}





}