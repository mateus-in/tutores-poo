import { Loja } from './Loja';
import { Endereco } from './Endereco';
import { ClienteVIP } from './Cliente';
import { Smartphone, Notebook } from './Eletronicos';
import { Pedido } from './Pedido';
import { ItemPedido } from './ItemPedido';
import { FormaPagamento, StatusPedido } from './Enum';

// Criar loja
const loja = new Loja('TechStore');

// Cadastrar produtos
const smartphone = new Smartphone('P001', 'iPhone 15', 'Apple', 4500, 10, 0.5, 12, 'iOS', 256);
const notebook = new Notebook('P002', 'MacBook Air', 'Apple', 8500, 5, 1.5, 24, 'M2', 16);

loja.adicionarProduto(smartphone);
loja.adicionarProduto(notebook);

// Cadastrar cliente VIP
const endereco = new Endereco('Rua A', '123', 'Centro', 'São Paulo', 'SP', '01234-567');
const cliente = new ClienteVIP('C001', 'Ana Silva', 'ana@email.com', '11999999999', endereco, new Date('2025-12-31'), 1000);

loja.clientes.push(cliente);

// Criar pedido
const pedido = new Pedido('PED001', cliente, [], new Date(), StatusPedido.CARRINHO, 0, 0, FormaPagamento.CARTAO_CREDITO);

// Adicionar itens ao pedido
const item1 = new ItemPedido(smartphone, 1, smartphone.preco, 0);
const item2 = new ItemPedido(notebook, 1, notebook.preco, 0);

pedido.adicionarItem(item1);
pedido.adicionarItem(item2);

// Confirmar pedido
pedido.confirmarPedido();

// Adicionar pedido ao cliente
cliente.adicionarPedido(pedido);

console.log(`Pedido ${pedido.id} confirmado para ${cliente.nome} com valor total de R$${pedido.valorTotal}`);
