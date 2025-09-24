import { Pedido } from "./Pedido";
import { FormaPagamento, StatusPagamento } from "./Enum";

export class Pagamento{
    id: string;
    pedido: Pedido[];
    valor: number;
    formaPagamento: FormaPagamento;
    status: StatusPagamento;
    dataProcessamento: Date;

    constructor(

        id: string,
        pedido: Pedido[],
        valor: number,
        formaPagamento: FormaPagamento,
        status: StatusPagamento,
        dataProcessamento: Date,

    ){
        this.id = id;
        this.pedido = pedido;
        this.valor = valor;
        this.formaPagamento = formaPagamento;
        this.status = status;
        this.dataProcessamento = dataProcessamento;
    }

    processar(): boolean {}

    calcularParcelas(numeroParcelas: number): number {}

    validarCartao(): boolean {}

} 