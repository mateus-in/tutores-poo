import { Venda } from './venda';
import { TipoCliente } from './interfaces/tipoCliente';

export class Cliente {
    constructor(
        id: string,
        public nome: string,
        email: string,
        telefone: string,
        tipoCliente: TipoCliente,
        historicoCompras: Venda[],
    ) { }
}

