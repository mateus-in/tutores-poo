import { ObraDeArte } from './obraDeArte';

export class Venda {
  constructor(
    id: string,
    obra: ObraDeArte,
    cliente: Cliente,
    dataVenda: Date,
    valorVenda: number,
    comissaoGaleria: number,
    formaPagamento: FormaPagamento,
  ) {}
}
calcularComissao(): number
   