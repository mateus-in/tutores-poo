import { Produto } from './Produto';

export class ItemPedido {
  constructor(public produto: Produto, public quantidade: number) {}
}
