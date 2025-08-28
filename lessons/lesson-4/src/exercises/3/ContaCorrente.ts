import { ContaBancaria } from './ContaBancaria';

export class ContaCorrente extends ContaBancaria {
  public limiteChequeEspecial: number;

  constructor(saldo: number, numeroConta: string, titular: string, limiteChequeEspecial: number) {
    super(saldo, numeroConta, titular);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  sacar(valor: number): boolean {
    const saldoTotal = this._saldo + this.limiteChequeEspecial;

    if (saldoTotal >= valor) {
      this._saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this._saldo}`);
      return true;
    } else {
      console.log('Saldo insuficiente.');
      return false;
    }
  }
}
