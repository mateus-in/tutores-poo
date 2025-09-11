import { StatusAeronave } from "./enums/StatusAeronave";

export class Aeronave {
  constructor(
    public prefixo: string,
    public modelo: string,
    public capacidade: number,
    public status: StatusAeronave
  ) {}

  estarDisponivel(): boolean {
    // verificar o return de acordo com o que se pede na atividade .

    return true;
  }

  alternarStatus(novoStatus: StatusAeronave): void {}
}
