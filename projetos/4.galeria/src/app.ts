import { Galeria } from "./galeria";
import { artista } from "./artista";
import { Cliente } from "./cliente";
import { Exposicao } from "./exposicao";
import { Venda } from "./venda";
import { StatusObra } from "./enums/StatusObra";
import { dimensao } from "./interfaces/dimensao";
import { TipoCliente } from "./interfaces/tipoCliente";
import { FormaPagamento } from "./interfaces/FormaPagamento";
import { ObraDeArte } from "./obraDeArte";
import { Pintura } from "./pintura";

const artista1 = new artista(
    "a1",
    "Vincent van Gogh",
    "Holandesa",
    1853,
    1890,
    "Pintor pós-impressionista.",
    []
);


const dimensao1: dimensao = { largura: 50, altura: 60 };



const obra1 = new Pintura(
    "o1",
    "Noite Estrelada",
    artista1,
    1889,
    dimensao1,
    StatusObra.EM_ACERVO,
    1000000,
    "Óleo sobre tela",
    "Tela"
);

artista1.adicionarObra(obra1);


const tipoCliente1: TipoCliente = { descricao: "Colecionador", codigo: 1 };


const cliente1 = new Cliente(
    "c1",
    "João Silva",
    "joao@email.com",
    "11999999999",
    tipoCliente1,
    []
);


const formaPagamento1: FormaPagamento = { metodo: "Cartão de Crédito", detalhes: "Visa" };


const venda1 = new Venda(
    "v1",
    obra1,
    cliente1,
    new Date(),
    obra1.valorEstimado,
    0.1,
    formaPagamento1
);
cliente1.adicionarCompra(venda1);


const exposicao1 = new Exposicao(
    "e1",
    "Impressionismo",
    "Curador Famoso",
    new Date("2025-09-01"),
    new Date("2025-09-30"),
    [obra1]
);


const galeria = new Galeria(
    "Galeria dos Tutores",
    [obra1],
    [artista1],
    [exposicao1],
    [venda1],
    [cliente1]
);

console.log("Instâncias criadas:");
console.log(galeria);