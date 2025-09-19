import { ObraDeArte } from "./obraDeArte";
import { artista } from "./artista";
import { Exposicao } from "./exposicao";
import { Venda } from "./venda";
import { Cliente } from "./cliente";
import { StatusObra } from './enums/StatusObra';
import { OrganizarExposicaoError } from "./excessoes/galeria/OrganizarExposicaoError";
import { VenderObraError } from "./excessoes/galeria/VenderObraError";

export class Galeria {
  constructor(
    public nome: string,
    public acervos: ObraDeArte[],
    public artistas: artista[],
    public exposicoes: Exposicao[],
    public vendas: Venda[],
    public clientes: Cliente[],
  ) { }

  adicionarObra(obra: ObraDeArte): void {
    this.acervos.push(obra);
  }

  organizarExposicao(exposicao: Exposicao): boolean {
    const jaExiste = this.exposicoes.some(e => e.id === exposicao.id);
    throw new OrganizarExposicaoError("Erro ao organizar exposição.");
    if (jaExiste) return false;

    this.exposicoes.push(exposicao);
    return true;
  }

  venderObra(venda: Venda): boolean {

    const obra = this.acervos.find(obra => obra.id === venda.obra.id && obra.status === StatusObra.EM_ACERVO);
    if (!obra) {
      throw new VenderObraError("Erro ao vender obra.");
      return false;
    }
    obra.status = StatusObra.VENDIDA;
    this.vendas.push(venda);

    const cliente = this.clientes.find(c => c.id === venda.cliente.id);
    if (cliente) {
      cliente.adicionarCompra(venda);
    }


    return true;

  }

  buscaracervosPorArtista(artistaId: string): ObraDeArte[] {
    return this.acervos.filter(obra => obra.artista.id === artistaId);
  }

  consultaracervosDisponiveis(): ObraDeArte[] {
    return this.acervos.filter(obra => obra.status === StatusObra.EM_ACERVO);
  }
}
