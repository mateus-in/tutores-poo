export class ContaBancaria {
  protected _saldo: number;
  public numeroConta: string;
  public titular: string;

  constructor(saldo: number, numeroConta: string, titular: string) {
    this._saldo = saldo;
    this.numeroConta = numeroConta;
    this.titular = titular;
  }

  depositar(valor: number): void {
    this._saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this._saldo}`);
  }

  sacar(valor: number): boolean {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this._saldo}`);
      return true;
    } else {
      console.log('Saldo insuficiente.');
      return false;
    }
  }

  get saldo() {
    return this._saldo;
  }
}
