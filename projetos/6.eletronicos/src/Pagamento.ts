import { Pedido } from './Pedido';
import { FormaPagamento, StatusPagamento } from './Enum';

// Classe Pagamento: representa o pagamento de um pedido
export class Pagamento {
  id: string; // ID do pagamento
  pedido: Pedido[]; // Pedido(s) relacionados
  valor: number; // Valor do pagamento
  formaPagamento: FormaPagamento; // Tipo de pagamento
  status: StatusPagamento; // Status do pagamento
  dataProcessamento: Date; // Data de processamento

  constructor(
    id: string,
    pedido: Pedido[],
    valor: number,
    formaPagamento: FormaPagamento,
    status: StatusPagamento,
    dataProcessamento: Date,
  ) {
    this.id = id;
    this.pedido = pedido;
    this.valor = valor;
    this.formaPagamento = formaPagamento;
    this.status = status;
    this.dataProcessamento = dataProcessamento;
  }

  // Processa o pagamento
  processar(): boolean {
    if (this.status === StatusPagamento.APROVADO) {
      console.log('Pagamento já aprovado.');
      return true;
    }

    // Exemplo simplificado para cartão
    if (
      this.formaPagamento === FormaPagamento.CARTAO_CREDITO ||
      this.formaPagamento === FormaPagamento.CARTAO_DEBITO
    ) {
      if (!this.validarCartao()) {
        this.status = StatusPagamento.RECUSADO;
        return false;
      }
    }

    this.status = StatusPagamento.APROVADO;
    console.log('Pagamento aprovado!');
    return true;
  }

  // Calcula valor das parcelas
  calcularParcelas(numeroParcelas: number): number {
    return this.valor / numeroParcelas;
  }

  // Validação simples de cartão
  validarCartao(): boolean {
    return true; 
  }
}
