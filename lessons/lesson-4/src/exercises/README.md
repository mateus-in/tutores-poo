# Exercícios

## Exerício 1

Crie um sistema para gerenciar uma biblioteca.

- Crie uma classe Livro com propriedades como titulo, autor e disponivel (booleano).
- Crie uma classe Membro com propriedades como nome, idMembro e uma lista de livros emprestados.
- Crie uma classe Biblioteca que contenha um array de livros e um array de membros.
- Implemente métodos na classe Biblioteca para:
  - Adicionar um novo livro.
  - Registrar um novo membro.
  - Emprestar um livro a um membro (verifique se o livro está disponível e se o membro existe).
  - Devolver um livro.

## Exerício 2

Modele um sistema de vendas de veículos.

- Crie uma classe base Veiculo com propriedades como marca, modelo, ano e um método exibirDetalhes().
- Crie classes derivadas, como Carro e Moto, que herdem de Veiculo.
- A classe Carro deve ter uma propriedade adicional numeroPortas.
- A classe Moto deve ter uma propriedade adicional cilindrada.
- No método exibirDetalhes(), utilize polimorfismo para exibir as informações específicas de cada tipo de veículo.

## Exerício 3

Desenvolva um sistema para gerenciar contas bancárias.

- Crie uma classe base ContaBancaria com propriedades como numeroConta, saldo e titular.
- Inclua métodos para depositar e sacar. O método sacar deve verificar se há saldo suficiente.
- Crie classes derivadas:
  - ContaCorrente, que herda de ContaBancaria e tem uma propriedade adicional limiteChequeEspecial.
  - ContaPoupanca, que herda de ContaBancaria e tem um método para calcularRendimento baseado em uma taxa.
- Aplique polimorfismo para reescrever o método sacar na ContaCorrente de forma que considere o limite do cheque especial.

## Exerício 4

Crie um sistema que utilize uma interface para processar pagamentos.

- Defina uma interface ProcessadorPagamento com um método processarPagamento(valor: number): boolean.
- Implemente a interface em classes como ProcessadorCartaoCredito e ProcessadorPayPal.
- A classe ProcessadorCartaoCredito deve ter propriedades como numeroCartao e validade, simulando a verificação de pagamento.
- A classe ProcessadorPayPal deve ter propriedades como email e tokenSeguranca.
- Crie uma classe SistemaPagamento que recebe uma instância de ProcessadorPagamento no construtor e utiliza seu método processarPagamento.

## Exerício 5

Modele um sistema de pedidos de uma loja.

- Crie uma classe Produto com propriedades como id, nome, preco e estoque.
- Crie uma classe ItemPedido que contenha um Produto e a quantidade desejada.
- Crie uma classe Pedido com propriedades como numeroPedido, data e um array de ItemPedido.
- Inclua um método em Pedido para calcularTotal() que some o preço de todos os itens.
- Crie uma classe Loja que gerencia a lista de produtos e os pedidos realizados.

## Exerício 6

Utilize herança e interfaces para modelar figuras geométricas.

- Crie uma interface FiguraGeometrica com métodos como calcularArea() e calcularPerimetro().
- Crie uma classe base Figura que implemente a interface.
- Crie classes derivadas como Circulo, Retangulo e Triangulo que herdam de Figura.
- Cada classe deve ter as propriedades e o construtor apropriados para calcular a área e o perímetro (ex: Circulo precisa de raio, Retangulo precisa de largura e altura).

## Exercício 7

Crie um sistema para gerenciar diferentes tipos de funcionários.

- Crie uma classe base Funcionario com propriedades como nome, id e salarioBase.
- Inclua um método calcularSalarioFinal().
- Crie classes derivadas como Gerente, Desenvolvedor e Estagiario.
- A classe Gerente deve ter uma propriedade bonus.
- A classe Desenvolvedor deve ter uma propriedade horasExtras.
- A classe Estagiario deve ter uma propriedade bolsaAuxilio.
- Utilize polimorfismo para sobrescrever o método calcularSalarioFinal() em cada classe derivada, adicionando o bônus, horas extras ou bolsa auxílio ao salário base.

## Exercício 8

Modele um sistema de projetos e tarefas.

- Crie uma classe Tarefa com propriedades como titulo, descricao e status (pendente, em progresso, concluída).
- Crie uma classe MembroEquipe com propriedades como nome e cargo.
- Crie uma classe Projeto que contenha um array de Tarefa e um array de MembroEquipe.
- Implemente métodos na classe Projeto para:
  - Adicionar uma nova tarefa.
  - Adicionar um novo membro.
  - Atribuir uma tarefa a um membro.
  - Atualizar o status de uma tarefa.

## Exercício 9

Desenvolva um sistema para gerenciar avaliações.

- Crie uma interface Avaliador com um método avaliar(nota: number): void.
- Crie uma classe Usuario que implemente a interface Avaliador e tenha propriedades como nome e email.
- Crie uma classe Restaurante com propriedades como nome, endereco e um array de notas de avaliação.
- A classe Restaurante deve ter um método receberAvaliacao(avaliador: Avaliador, nota: number) que use a interface para registrar a nota.
- Inclua um método calcularMediaAvaliacao() na classe Restaurante.

## Exercício 10

Modele um jogo simples de batalha.

- Crie uma classe base Personagem com propriedades como nome, vida e ataque.
- Crie um método atacar(inimigo: Personagem) que diminui a vida do inimigo com base no valor de ataque.
- Crie classes derivadas como Guerreiro, Mago e Arqueiro.
- A classe Guerreiro deve ter uma propriedade adicional forca.
- A classe Mago deve ter uma propriedade mana e um método lancarFeitico().
- A classe Arqueiro deve ter uma propriedade destreza.
- Utilize polimorfismo para sobrescrever o método atacar() em cada classe, modificando o dano causado com base em suas propriedades únicas.
