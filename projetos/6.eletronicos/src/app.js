"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Loja_1 = require("./Loja");
var Endereco_1 = require("./Endereco");
var Cliente_1 = require("./Cliente");
var Eletronicos_1 = require("./Eletronicos");
var Pedido_1 = require("./Pedido");
var ItemPedido_1 = require("./ItemPedido");
var Enum_1 = require("./Enum");
// Criar loja
var loja = new Loja_1.Loja('TechStore');
// Cadastrar produtos
var smartphone = new Eletronicos_1.Smartphone('P001', 'iPhone 15', 'Apple', 4500, 10, 0.5, 12, 'iOS', 256);
var notebook = new Eletronicos_1.Notebook('P002', 'MacBook Air', 'Apple', 8500, 5, 1.5, 24, 'M2', 16);
loja.adicionarProduto(smartphone);
loja.adicionarProduto(notebook);
// Cadastrar cliente VIP
var endereco = new Endereco_1.Endereco('Rua A', '123', 'Centro', 'São Paulo', 'SP', '01234-567');
var cliente = new Cliente_1.ClienteVIP('C001', 'Ana Silva', 'ana@email.com', '11999999999', endereco, new Date('2025-12-31'), 1000);
loja.clientes.push(cliente);
// Criar pedido
var pedido = new Pedido_1.Pedido('PED001', cliente, [], new Date(), Enum_1.StatusPedido.CARRINHO, 0, 0, Enum_1.FormaPagamento.CARTAO_CREDITO);
// Adicionar itens ao pedido
var item1 = new ItemPedido_1.ItemPedido(smartphone, 1, smartphone.preco, 0);
var item2 = new ItemPedido_1.ItemPedido(notebook, 1, notebook.preco, 0);
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);
// Confirmar pedido
pedido.confirmarPedido();
// Adicionar pedido ao cliente
cliente.adicionarPedido(pedido);
console.log("Pedido ".concat(pedido.id, " confirmado para ").concat(cliente.nome, " com valor total de R$").concat(pedido.valorTotal));
