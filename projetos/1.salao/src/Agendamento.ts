import { Cliente } from './Cliente';
import { MetodoPagamento } from './MetodoPagamento';
import { Profissional } from './Profissional';
import { Servico } from './Servico';
import { StatusPagamento } from './StatusPagamento';

export class Agendamento {
  constructor(
    public_id: string,
    public_cliente: Cliente,
    public_profissional: Profissional,
    public_servicos: Servico[],
    public_dataHora: Date,
    public_status: StatusPagamento,
    public_pagamento: MetodoPagamento,
  ) {}
}
