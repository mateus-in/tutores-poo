import { ObraDeArte } from './obraDeArte';

export class artista {
  constructor(
    public id: string,
    public nome: string,
    public nacionalidade: string,
    public anoNascimento: number,
    public anoFalecimento: number | null,
    public biografia: string,
    public obras: ObraDeArte[],
  ) {}

  estaVivo(): boolean {
    return this.anoFalecimento === null;
  }
  adicionarObra(obra: ObraDeArte): void {
    this.obras.push(obra);
  }
  calcularValorTotalObras(): number {
    return this.obras.reduce((total: number, obra: ObraDeArte) => total + obra.valorEstimado, 0);
  }
}
