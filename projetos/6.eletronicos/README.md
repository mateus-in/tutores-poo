# Projeto de Programação Orientada a Objetos: Sistema de Loja de Eletrônicos

## 1. Objetivo do Projeto

Desenvolver um sistema completo para gerenciar uma loja de eletrônicos utilizando **TypeScript** e os conceitos fundamentais de **Programação Orientada a Objetos (POO)**. O sistema deve controlar produtos, clientes, pedidos e estoque, aplicando polimorfismo para diferentes tipos de produtos e clientes, com validação de estoque e cálculo de fretes, de forma prática e didática.

---

## 2. Estrutura do Sistema

### 2.1. Classes Principais

#### **`Produto`** (Classe Abstrata)
- **Descrição:** Define o contrato base para todos os produtos da loja.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `marca` (string)
  - `preco` (number)
  - `quantidadeEstoque` (number)
  - `categoria` (CategoriaProduto)
  - `peso` (number)
  - `garantiaMeses` (number)
- **Métodos:**
  - `abstract calcularFrete(cep: string): number`
  - `temEstoque(quantidade: number): boolean`
  - `atualizarEstoque(quantidade: number): void`
  - `aplicarDesconto(percentual: number): number`

#### **`Smartphone`, `Notebook`, `Acessorio`** (Classes Concretas)
- **Descrição:** Tipos específicos de produtos que herdam de `Produto`.
- **Atributos específicos:**
  - `Smartphone` possui `sistemaOperacional` (string) e `armazenamento` (number)
  - `Notebook` possui `processador` (string) e `memoria` (number)
  - `Acessorio` possui `compatibilidade` (string[])
- **Métodos:**
  - Implementam `calcularFrete()` com lógicas específicas por tipo e peso

#### **`Cliente`** (Classe Abstrata)
- **Descrição:** Define o contrato base para todos os tipos de clientes.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `email` (string)
  - `telefone` (string)
  - `endereco` (Endereco)
  - `historicoPedidos` (Pedido[])
- **Métodos:**
  - `abstract calcularDesconto(valorTotal: number): number`
  - `adicionarPedido(pedido: Pedido): void`
  - `calcularTotalGasto(): number`

#### **`ClienteComum`, `ClienteVIP`, `ClienteEmpresa`** (Classes Concretas)
- **Descrição:** Tipos específicos de clientes que herdam de `Cliente`.
- **Atributos específicos:**
  - `ClienteVIP` possui `dataVencimento` (Date) e `pontosAcumulados` (number)
  - `ClienteEmpresa` possui `cnpj` (string) e `nomeFantasia` (string)
- **Métodos:**
  - Implementam `calcularDesconto()` com regras específicas por tipo

#### **`Pedido`**
- **Descrição:** Representa um pedido de compra.
- **Atributos:**
  - `id` (string)
  - `cliente` (Cliente)
  - `itens` (ItemPedido[])
  - `datapedido` (Date)
  - `status` (StatusPedido)
  - `valorTotal` (number)
  - `valorFrete` (number)
  - `formaPagamento` (FormaPagamento)
- **Métodos:**
  - `adicionarItem(item: ItemPedido): void`
  - `removerItem(produtoId: string): boolean`
  - `calcularSubtotal(): number`
  - `calcularValorTotal(): number`
  - `confirmarPedido(): boolean`

#### **`Loja`** (Classe Principal)
- **Descrição:** Gerencia todos os produtos, clientes e operações.
- **Atributos:**
  - `nome` (string)
  - `produtos` (Produto[])
  - `clientes` (Cliente[])
  - `pedidos` (Pedido[])
  - `vendedores` (Vendedor[])
- **Métodos:**
  - `adicionarProduto(produto: Produto): void`
  - `buscarProdutos(termo: string): Produto[]`
  - `processarPedido(pedido: Pedido): boolean`
  - `consultarEstoque(produtoId: string): number`
  - `gerarRelatorioVendas(dataInicio: Date, dataFim: Date): RelatorioVendas`

---

### 2.2. Classes de Apoio

#### **`ItemPedido`**
- **Descrição:** Representa um item dentro de um pedido.
- **Atributos:**
  - `produto` (Produto)
  - `quantidade` (number)
  - `precoUnitario` (number)
  - `desconto` (number)
- **Métodos:**
  - `calcularSubtotal(): number`
  - `aplicarDesconto(percentual: number): void`

#### **`Endereco`**
- **Descrição:** Representa o endereço de um cliente.
- **Atributos:**
  - `rua` (string)
  - `numero` (string)
  - `bairro` (string)
  - `cidade` (string)
  - `estado` (string)
  - `cep` (string)
- **Métodos:**
  - `obterEnderecoCompleto(): string`
  - `calcularDistancia(cepDestino: string): number`

#### **`Vendedor`**
- **Descrição:** Representa um vendedor da loja.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `comissaoPercentual` (number)
  - `metaMensal` (number)
  - `vendasMes` (Pedido[])
- **Métodos:**
  - `calcularComissao(): number`
  - `adicionarVenda(pedido: Pedido): void`
  - `atingiuMeta(): boolean`

#### **`RelatorioVendas`**
- **Descrição:** Gera relatórios de vendas e performance.
- **Atributos:**
  - `dataInicio` (Date)
  - `dataFim` (Date)
  - `pedidosAnalisados` (Pedido[])
- **Métodos:**
  - `calcularFaturamentoTotal(): number`
  - `obterProdutosMaisVendidos(): Produto[]`
  - `calcularTicketMedio(): number`
  - `analisarPerformanceVendedores(): PerformanceVendedor[]`

#### **`EstoqueService`**
- **Descrição:** Gerencia operações de estoque.
- **Atributos:**
  - `produtos` (Produto[])
  - `estoqueMinimo` (Map<string, number>)
- **Métodos:**
  - `verificarEstoqueBaixo(): Produto[]`
  - `atualizarEstoque(produtoId: string, quantidade: number): boolean`
  - `reservarProdutos(itens: ItemPedido[]): boolean`
  - `liberarReserva(itens: ItemPedido[]): void`

#### **`Pagamento`**
- **Descrição:** Processa pagamentos dos pedidos.
- **Atributos:**
  - `id` (string)
  - `pedido` (Pedido)
  - `valor` (number)
  - `formaPagamento` (FormaPagamento)
  - `status` (StatusPagamento)
  - `dataProcessamento` (Date)
- **Métodos:**
  - `processar(): boolean`
  - `calcularParcelas(numeroParcelas: number): number`
  - `validarCartao(): boolean`

---

### 2.3. Enums

#### **`CategoriaProduto`**
- **Valores:** `SMARTPHONE`, `NOTEBOOK`, `TABLET`, `ACESSORIO`, `GAMER`, `CASA_INTELIGENTE`

#### **`StatusPedido`**
- **Valores:** `CARRINHO`, `CONFIRMADO`, `PAGAMENTO_APROVADO`, `ENVIADO`, `ENTREGUE`, `CANCELADO`

#### **`FormaPagamento`**
- **Valores:** `DINHEIRO`, `CARTAO_CREDITO`, `CARTAO_DEBITO`, `PIX`, `BOLETO`, `PARCELADO`

#### **`StatusPagamento`**
- **Valores:** `PENDENTE`, `APROVADO`, `RECUSADO`, `CANCELADO`

---

## 3. Regras de Negócio

### 3.1. Gestão de Estoque
- Produto só pode ser vendido se houver estoque suficiente
- Estoque é reservado durante o processamento do pedido
- Alerta automático quando estoque fica abaixo do mínimo
- Produtos sem estoque ficam indisponíveis para venda

### 3.2. Tipos de Clientes e Descontos
- Cada tipo de cliente tem regras específicas de desconto:
  - **ClienteComum:** Sem desconto especial
  - **ClienteVIP:** 10% de desconto se ativo + pontos de fidelidade
  - **ClienteEmpresa:** 15% de desconto para compras acima de R$ 5.000
- Descontos são aplicados no subtotal antes do frete

### 3.3. Cálculo de Frete
- Cada tipo de produto tem regras específicas de frete:
  - **Smartphone:** Frete fixo de R$ 15
  - **Notebook:** Frete baseado no peso (R$ 2 por kg)
  - **Acessorio:** Frete grátis para compras acima de R$ 200
- Frete é calculado baseado no CEP de destino

### 3.4. Processamento de Pedidos
- Pedido deve ter pelo menos 1 item para ser confirmado
- Estoque é validado antes da confirmação
- Status do pedido segue sequência: CARRINHO → CONFIRMADO → PAGAMENTO_APROVADO → ENVIADO → ENTREGUE
- Pedidos cancelados liberam estoque reservado

---

## 4. Conceitos de POO Aplicados

### 4.1. **Herança**
- Classe abstrata `Produto` é herdada por `Smartphone`, `Notebook` e `Acessorio`
- Classe abstrata `Cliente` é herdada por `ClienteComum`, `ClienteVIP` e `ClienteEmpresa`

### 4.2. **Polimorfismo**
- Método `calcularFrete()` é implementado de forma diferente em cada tipo de produto
- Método `calcularDesconto()` é implementado de forma diferente em cada tipo de cliente
- Permite tratar produtos e clientes de forma uniforme, mas com comportamentos específicos

### 4.3. **Encapsulamento**
- Atributos privados com métodos públicos para acesso controlado
- Validações internas nas classes para manter consistência dos dados

### 4.4. **Abstração**
- Interface clara entre as classes principais
- Métodos abstratos definem contratos que devem ser implementados

---

## 5. Tratamento de Exceções

### 5.1. Exceções Customizadas
- **`EstoqueInsuficienteException`:** Tentativa de vender produto sem estoque
- **`ProdutoIndisponivelException`:** Produto não encontrado ou inativo
- **`PagamentoRecusadoException`:** Falha no processamento do pagamento
- **`PedidoInvalidoException`:** Pedido com dados inválidos ou vazio

### 5.2. Validações Importantes
- Verificar estoque antes de confirmar pedido
- Validar dados do cliente e endereço de entrega
- Confirmar que forma de pagamento é válida
- Validar CEP para cálculo de frete

---

## 6. Funcionalidades do Sistema

### 6.1. Gestão de Produtos
- Cadastrar produtos de diferentes categorias
- Controlar estoque com alertas automáticos
- Definir preços e promoções
- Buscar produtos por nome, marca ou categoria

### 6.2. Gestão de Clientes
- Cadastrar clientes de diferentes tipos
- Aplicar descontos específicos por categoria
- Manter histórico de compras
- Programa de fidelidade para clientes VIP

### 6.3. Sistema de Pedidos
- Criar pedidos com múltiplos produtos
- Calcular valores com descontos e fretes
- Processar pagamentos de diferentes formas
- Acompanhar status dos pedidos

### 6.4. Controle de Estoque
- Monitorar níveis de estoque em tempo real
- Reservar produtos durante processamento
- Alertar sobre produtos com estoque baixo
- Gerar relatórios de movimentação

### 6.5. Relatórios Gerenciais
- Calcular faturamento por período
- Identificar produtos mais vendidos
- Analisar performance de vendedores
- Controlar comissões e metas

---

## 7. Exemplo de Implementação

```typescript
// Exemplo de uso do sistema
const loja = new Loja("TechStore");

// Cadastrar produtos
const smartphone = new Smartphone("P001", "iPhone 15", "Apple", 4500, 10, "iOS", 256);
const notebook = new Notebook("P002", "MacBook Air", "Apple", 8500, 5, "M2", 16);

loja.adicionarProduto(smartphone);
loja.adicionarProduto(notebook);

// Cadastrar cliente
const endereco = new Endereco("Rua A", "123", "Centro", "São Paulo", "SP", "01234-567");
const cliente = new ClienteVIP("C001", "Ana Silva", "ana@email.com", "11999999999", endereco, new Date("2025-12-31"), 1000);

// Criar pedido
const pedido = new Pedido("PED001", cliente, new Date(), FormaPagamento.CARTAO_CREDITO);

// Adicionar itens
const item1 = new ItemPedido(smartphone, 1, smartphone.preco, 0);
const item2 = new ItemPedido(notebook, 1, notebook.preco, 0);

pedido.adicionarItem(item1);
pedido.adicionarItem(item2);

// Processar pedido
if (loja.processarPedido(pedido)) {
    console.log("Pedido processado com sucesso!");
    console.log(`Valor total: R$ ${pedido.calcularValorTotal()}`);
}
```

---

## 8. Dicas de Implementação

### 8.1. Por onde começar?
1. **Comece pelas classes básicas:** Implemente primeiro `Endereco` e as classes de `Produto`
2. **Teste cada classe individualmente:** Crie objetos simples e teste os métodos básicos
3. **Implemente a herança:** Faça os tipos de produto e cliente herdarem das classes abstratas
4. **Adicione complexidade gradualmente:** Depois implemente `Pedido`, `ItemPedido` e `Loja`

### 8.2. Implementando a Herança Dupla
- Implemente primeiro a herança de `Produto` com os diferentes tipos
- Depois implemente a herança de `Cliente` com as regras de desconto
- Teste cada hierarquia separadamente antes de integrar

### 8.3. Trabalhando com Estoque
- Use métodos para verificar disponibilidade antes de operações
- Implemente sistema de reserva durante processamento do pedido
- Mantenha controle rigoroso das quantidades
- Use Map ou estruturas similares para controle eficiente

### 8.4. Implementando Validações
- Valide estoque antes de confirmar pedido
- Verifique dados obrigatórios do cliente
- Valide CEP para cálculo de frete
- Use validações no construtor para dados críticos

### 8.5. Criando Exceções Customizadas
- Crie classes de exceção que estendem `Error`
- Use nomes descritivos (ex: `EstoqueInsuficienteException`)
- Trate exceções com `try-catch` onde necessário
- Forneça mensagens de erro claras para o usuário

### 8.6. Implementando Enums
- Use enums para padronizar categorias, status e formas de pagamento
- Facilita validações e evita erros de digitação
- Torna o código mais legível e manutenível

### 8.7. Dicas Gerais
- **Use nomes descritivos:** `calcularFrete()` é melhor que `calcular()`
- **Mantenha métodos pequenos:** Cada método deve ter uma responsabilidade específica
- **Valide sempre:** Verifique parâmetros antes de usar
- **Use const/readonly:** Para valores que não devem mudar
- **Documente seu código:** Use comentários para explicar lógicas complexas
- **Teste incrementalmente:** Teste cada funcionalidade conforme implementa

### 8.8. Ordem Recomendada de Implementação
1. **Fase 1:** Classes básicas (Endereco, Produto e subclasses, Cliente e subclasses)
2. **Fase 2:** Enums e exceções customizadas
3. **Fase 3:** Classes ItemPedido e Vendedor
4. **Fase 4:** Classe Pedido com validações de estoque
5. **Fase 5:** Classe Loja com operações principais
6. **Fase 6:** Classes EstoqueService e Pagamento
7. **Fase 7:** Funcionalidades avançadas (RelatorioVendas)
8. **Fase 8:** Testes e refinamentos
