import { Usuario } from './Usuario';
import { Livro } from './Livro';

export class Emprestimo {
  public dataDevolucao: Date;

  constructor(
    public usuario: Usuario,
    public livro: Livro,
    public dataEmprestimo: Date = new Date()
  ) {
    // Calcula data de devolução baseada no tipo de usuário
    this.dataDevolucao = new Date(dataEmprestimo);
    this.dataDevolucao.setDate(
      this.dataDevolucao.getDate() + usuario.calcularPrazoEmprestimo()
    );
  }

  calcularMulta(): number {
    const hoje = new Date();
    
    if (hoje <= this.dataDevolucao) {
      return 0; // Não há multa se ainda está no prazo
    }
    
    const diasAtraso = Math.ceil(
      (hoje.getTime() - this.dataDevolucao.getTime()) / (1000 * 60 * 60 * 24)
    );
    
    return diasAtraso * 2; // R$ 2 por dia de atraso
  }

  estaAtrasado(): boolean {
    return new Date() > this.dataDevolucao;
  }

  obterInformacoes(): string {
    const status = this.estaAtrasado() ? 'ATRASADO' : 'NO PRAZO';
    const multa = this.calcularMulta();
    
    return `${this.usuario.nome} - ${this.livro.titulo} - ${status}${multa > 0 ? ` - Multa: R$ ${multa}` : ''}`;
  }
}
