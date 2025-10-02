import { Venda } from './venda';
import { TipoCliente } from './interfaces/tipoCliente';
import { ObraDeArte } from "./obraDeArte";

export class Cliente {
    constructor(
        public id: string,
        public nome: string,
        public email: string,
        public telefone: string,
        public tipoCliente: TipoCliente,
        public historicoCompras: Venda[],
    ) { }


    adicionarCompra(venda: Venda): void {
        this.historicoCompras.push(venda);
    }

    calcularTotalGasto(): number {
        return this.historicoCompras.reduce((total, venda) => total + venda.valorVenda, 0);
    }

    obterObrasAdquiridas(): ObraDeArte[] {
        return this.historicoCompras.flatMap(venda => venda.obra);
    }
}
