import { ObraDeArte } from './obraDeArte';
import { Cliente } from "./cliente";
import { FormaPagamento } from './interfaces/FormaPagamento';

export class Venda {
    constructor(
        id: string,
        public obra: ObraDeArte,
        public cliente: Cliente,
        public dataVenda: Date,
        public valorVenda: number,
        public comissaoGaleria: number,
        public formaPagamento: FormaPagamento,
    ) { }

    calcularComissao(): number {
        return this.valorVenda * this.comissaoGaleria;
    }

    calcularValorArtista(): number {
        return this.valorVenda - this.calcularComissao();
    }

    finalizarVenda(): void {
        console.log(`Venda da obra ${this.obra.titulo} para o cliente ${this.cliente.nome} finalizada.`);
        console.log(`Valor total: R$${this.valorVenda.toFixed(2)}`);
        console.log(`Comissão da galeria: R$${this.calcularComissao().toFixed(2)}`);
        console.log(`Valor para o artista: R$${this.calcularValorArtista().toFixed(2)}`);
        console.log(`Forma de pagamento: ${this.formaPagamento}`);
        console.log(`Data da venda: ${this.dataVenda.toLocaleDateString()}`);
    }

}
