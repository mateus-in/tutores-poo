import { ContaBancaria } from './ContaBancaria';

export class ContaPoupanca extends ContaBancaria {
  private _taxaRendimento: number;

  constructor(saldo: number, numeroConta: string, titular: string, taxaRendimento: number) {
    super(saldo, numeroConta, titular);
    this._taxaRendimento = taxaRendimento;
  }

  calcularRendimento() {
    const rendimento = this._saldo * this._taxaRendimento;
    this.depositar(rendimento);

    console.log(`Rendimento de R${rendimento} adicionado. Saldo atual: ${this._saldo}`);
  }
}
