export class ItemPedido{
    produto: Produto;
    quantidade: number;
    precoUnitario: number;
    desconto: number;

    constructor (

        produto: Produto,
        quantidade: number,
        precoUnitario: number,
        desconto: number,

    ){

        this.produto = produto;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
        this.desconto = desconto;
    }

    calcularSubtotal(): number {}

    aplicarDesconto(percentual: number): void {} 
    
}