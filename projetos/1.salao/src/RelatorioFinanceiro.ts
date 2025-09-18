import { Agendamento } from "./Agendamento";
import { Cliente } from "./Cliente";

export class RelatorioFinanceiro {
    constructor(
        public dataInicio: Date,
        public dataFim: Date,
        public agendamentosFinalizados: Agendamento[]
    ) {}


    calcularFaturamentoTotal(): number{
        if (this.agendamentosFinalizados.length === 0) {
            return 0;
        }
        return 0;
    }

obterServicosMaisPopulares(): string[] {
    return [];
}

calcularTicketMedio(): number {
    return 0;
}

listarClientesFrequentes(): Cliente[] {
    return [];
}
}
