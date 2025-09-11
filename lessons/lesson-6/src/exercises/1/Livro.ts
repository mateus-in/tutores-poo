export class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public isbn: string,
    public disponivel: boolean = true
  ) {}

  emprestar(): boolean {
    if (this.disponivel) {
      this.disponivel = false;
      return true;
    }
    return false;
  }

  devolver(): void {
    this.disponivel = true;
  }

  obterInformacoes(): string {
    return `${this.titulo} - ${this.autor} (${this.isbn})`;
  }
}
