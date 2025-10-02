import { StatusAeronave } from "./enums/StatusAeronave";

export class Aeronave {
  constructor(
    public prefixo: string,
    public modelo: string,
    public capacidade: number,
    public status: StatusAeronave
  ) {}

  estarDisponivel(): boolean {
    return this.status === StatusAeronave.DISPONIVEL;
    }

  alternarStatus(novoStatus: StatusAeronave): void {
    this.status = novoStatus;
  }
}
