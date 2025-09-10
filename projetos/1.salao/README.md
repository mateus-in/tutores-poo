# Projeto de Programação Orientada a Objetos: Sistema de Salão de Beleza

## 1. Objetivo do Projeto

Desenvolver um sistema completo para gerenciar um salão de beleza utilizando **TypeScript** e os conceitos fundamentais de **Programação Orientada a Objetos (POO)**. O sistema deve gerenciar clientes, profissionais, serviços, agendamentos e pagamentos, aplicando os pilares da POO de forma prática e didática.

---

## 2. Estrutura do Sistema

### 2.1. Classes Principais

#### **`Cliente`**
- **Descrição:** Representa um cliente do salão.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `telefone` (string)
  - `email` (string)
  - `ficha` (FichaTecnica)

#### **`FichaTecnica`**
- **Descrição:** Registra histórico e preferências do cliente.
- **Atributos:**
  - `historicoServicos` (Agendamento[])
  - `observacoes` (string)
  - `alergias` (string[])

#### **`Profissional`**
- **Descrição:** Representa um profissional do salão.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `especialidades` (string[])
  - `agenda` (Agendamento[])
- **Métodos:**
  - `temEspecialidade(servico: string): boolean`
  - `estaDisponivel(data: Date, duracao: number): boolean`

#### **`Servico`** (Classe Abstrata)
- **Descrição:** Define o contrato base para todos os serviços.
- **Atributos:**
  - `nome` (string)
  - `precoBase` (number)
  - `duracaoMinutos` (number)
- **Métodos:**
  - `abstract calcularPrecoFinal(): number`

#### **`Corte`, `Manicure`, `Hidratacao`** (Classes Concretas)
- **Descrição:** Serviços específicos que herdam de `Servico`.
- **Atributos específicos:**
  - `Hidratacao` possui `tipoProduto` (string) que influencia o preço
- **Métodos:**
  - Implementam `calcularPrecoFinal()` com lógicas específicas

#### **`Agendamento`**
- **Descrição:** Representa um agendamento no salão.
- **Atributos:**
  - `id` (string)
  - `cliente` (Cliente)
  - `profissional` (Profissional)
  - `servicos` (Servico[])
  - `dataHora` (Date)
  - `status` (StatusAgendamento)
  - `pagamento` (Pagamento)
- **Métodos:**
  - `calcularDuracaoTotal(): number`
  - `calcularValorTotal(): number`
  - `adicionarServico(servico: Servico): void`

#### **`SalaoDeBeleza`** (Classe Principal)
- **Descrição:** Gerencia todas as operações do salão.
- **Atributos:**
  - `nome` (string)
  - `clientes` (Cliente[])
  - `profissionais` (Profissional[])
  - `agendamentos` (Agendamento[])
  - `produtos` (Produto[])
  - `horariosFuncionamento` (HorarioFuncionamento[])
- **Métodos:**
  - `cadastrarCliente(cliente: Cliente): void`
  - `agendarServico(agendamento: Agendamento): boolean`
  - `finalizarAtendimento(agendamento: Agendamento): void`
  - `cancelarAgendamento(id: string): boolean`
  - `consultarDisponibilidade(profissional: Profissional, data: Date): boolean`

---

### 2.2. Classes de Apoio

#### **`Pagamento`**
- **Descrição:** Gerencia diferentes formas de pagamento.
- **Atributos:**
  - `valor` (number)
  - `metodoPagamento` (MetodoPagamento)
  - `status` (StatusPagamento)
  - `dataProcessamento` (Date)
- **Métodos:**
  - `processar(): boolean`
  - `calcularTroco(valorRecebido: number): number`

#### **`Produto`**
- **Descrição:** Representa produtos utilizados nos serviços.
- **Atributos:**
  - `nome` (string)
  - `quantidadeEstoque` (number)
  - `precoUnitario` (number)
  - `estoqueMinimo` (number)
- **Métodos:**
  - `temEstoqueSuficiente(quantidade: number): boolean`
  - `consumir(quantidade: number): boolean`
  - `precisaReposicao(): boolean`

#### **`Promocao`**
- **Descrição:** Representa promoções ativas no salão.
- **Atributos:**
  - `nome` (string)
  - `percentualDesconto` (number)
  - `dataInicio` (Date)
  - `dataFim` (Date)
  - `servicosAplicaveis` (string[])
- **Métodos:**
  - `estaAtiva(): boolean`
  - `aplicavelAoServico(servico: Servico): boolean`
  - `calcularDesconto(valor: number): number`

#### **`HorarioFuncionamento`**
- **Descrição:** Define horários de funcionamento por dia da semana.
- **Atributos:**
  - `diaSemana` (DiaSemana)
  - `horaAbertura` (string)
  - `horaFechamento` (string)
  - `funcionando` (boolean)
- **Métodos:**
  - `estaAberto(hora: string): boolean`
  - `obterHorariosDisponiveis(): string[]`

#### **`RelatorioFinanceiro`**
- **Descrição:** Gera relatórios de faturamento.
- **Atributos:**
  - `dataInicio` (Date)
  - `dataFim` (Date)
  - `agendamentosFinalizados` (Agendamento[])
- **Métodos:**
  - `calcularFaturamentoTotal(): number`
  - `obterServicosMaisPopulares(): string[]`
  - `calcularTicketMedio(): number`
  - `listarClientesFrequentes(): Cliente[]`

---

### 2.3. Enums

#### **`StatusAgendamento`**
- **Valores:** `AGENDADO`, `EM_ANDAMENTO`, `FINALIZADO`, `CANCELADO`

#### **`MetodoPagamento`**
- **Valores:** `DINHEIRO`, `CARTAO_DEBITO`, `CARTAO_CREDITO`, `PIX`

#### **`StatusPagamento`**
- **Valores:** `PENDENTE`, `APROVADO`, `RECUSADO`

#### **`DiaSemana`**
- **Valores:** `SEGUNDA`, `TERCA`, `QUARTA`, `QUINTA`, `SEXTA`, `SABADO`, `DOMINGO`

---

## 3. Regras de Negócio

### 3.1. Agendamentos
- Um profissional não pode ter dois agendamentos simultâneos
- Agendamentos só podem ser feitos durante o horário de funcionamento
- Cliente deve estar cadastrado antes de agendar
- Profissional deve ter a especialidade necessária para o serviço

### 3.2. Serviços e Preços
- Cada tipo de serviço calcula seu preço de forma específica:
  - **Corte:** Preço fixo
  - **Manicure:** Preço fixo + adicional se for pedicure
  - **Hidratação:** Preço base + adicional baseado no tipo de produto
- Promoções ativas são aplicadas automaticamente no cálculo final

### 3.3. Controle de Estoque
- Verificar disponibilidade de produtos antes de confirmar serviços
- Consumir produtos do estoque após finalização do atendimento
- Alertar quando estoque atingir nível mínimo

### 3.4. Pagamentos
- Pagamento deve ser processado antes da finalização do atendimento
- Para pagamento em dinheiro, calcular troco automaticamente
- Registrar método e status do pagamento para controle financeiro

---

## 4. Conceitos de POO Aplicados

### 4.1. **Herança**
- Classe abstrata `Servico` é herdada por `Corte`, `Manicure` e `Hidratacao`
- Cada serviço implementa sua própria lógica de cálculo de preço

### 4.2. **Polimorfismo**
- Método `calcularPrecoFinal()` é implementado de forma diferente em cada tipo de serviço
- Permite tratar todos os serviços de forma uniforme, mas com comportamentos específicos

### 4.3. **Encapsulamento**
- Atributos privados com métodos públicos para acesso controlado
- Validações internas nas classes para manter consistência dos dados

### 4.4. **Abstração**
- Interface clara entre as classes principais
- Métodos abstratos definem contratos que devem ser implementados

---

## 5. Tratamento de Exceções

### 5.1. Exceções Customizadas
- **`AgendamentoInvalidoException`:** Conflito de horários ou profissional sem especialidade
- **`EstoqueInsuficienteException`:** Produtos em falta para realizar o serviço
- **`PagamentoInvalidoException`:** Erro no processamento do pagamento
- **`ClienteNaoCadastradoException`:** Tentativa de agendar para cliente inexistente

### 5.2. Validações Importantes
- Verificar disponibilidade do profissional antes de agendar
- Validar se o horário está dentro do funcionamento do salão
- Confirmar estoque suficiente de produtos necessários
- Validar dados obrigatórios (nome, telefone, etc.)

---

## 6. Funcionalidades do Sistema

### 6.1. Gestão de Clientes
- Cadastrar novos clientes com ficha técnica
- Consultar histórico de serviços realizados
- Atualizar informações e preferências

### 6.2. Gestão de Agendamentos
- Criar novos agendamentos verificando disponibilidade
- Consultar agenda por profissional ou data
- Cancelar ou reagendar compromissos
- Finalizar atendimentos e processar pagamentos

### 6.3. Controle Financeiro
- Processar diferentes formas de pagamento
- Gerar relatórios de faturamento por período
- Calcular ticket médio e identificar tendências
- Controlar promoções e descontos

### 6.4. Gestão de Estoque
- Controlar produtos utilizados nos serviços
- Alertar sobre necessidade de reposição
- Calcular custos dos produtos por serviço

---

## 7. Exemplo de Implementação

```typescript
// Exemplo de uso do sistema
const salao = new SalaoDeBeleza("Beleza Total");

// Cadastrar cliente
const cliente = new Cliente("1", "Maria Silva", "11999999999", "maria@email.com");
salao.cadastrarCliente(cliente);

// Criar serviços
const corte = new Corte("Corte Feminino", 50, 60);
const manicure = new Manicure("Manicure Completa", 30, 45);

// Agendar serviço
const agendamento = new Agendamento(
    "ag001",
    cliente,
    profissional,
    [corte, manicure],
    new Date("2024-03-15T14:00:00")
);

if (salao.agendarServico(agendamento)) {
    console.log("Agendamento realizado com sucesso!");
}
```

---

## 8. Dicas de Implementação

### 8.1. Por onde começar?
1. **Comece pelas classes básicas:** Implemente primeiro `Cliente`, `Profissional` e as classes de `Servico`
2. **Teste cada classe individualmente:** Crie objetos simples e teste os métodos básicos
3. **Implemente a herança:** Faça `Corte`, `Manicure` e `Hidratacao` herdarem de `Servico`
4. **Adicione complexidade gradualmente:** Só depois implemente `Agendamento` e `SalaoDeBeleza`

### 8.2. Implementando a Herança
- Use `abstract` para definir métodos que devem ser implementados pelas subclasses
- Use `protected` para atributos que podem ser acessados pelas subclasses
- Use `super()` no construtor das subclasses para chamar o construtor da classe pai
- Cada subclasse deve implementar os métodos abstratos com sua lógica específica

### 8.3. Trabalhando com Arrays e Coleções
- Use `push()` para adicionar itens às listas
- Use `find()` para buscar um item específico
- Use `filter()` para buscar múltiplos itens que atendem critérios
- Use `findIndex()` e `splice()` para remover itens das listas
- Sempre verifique se o item existe antes de tentar usá-lo

### 8.4. Implementando Validações
- Faça validações no construtor das classes
- Lance exceções específicas para cada tipo de erro
- Valide parâmetros obrigatórios, formatos e regras de negócio
- Use mensagens de erro claras e descritivas

### 8.5. Criando Exceções Customizadas
- Crie classes de exceção que estendem `Error`
- Use nomes descritivos para as exceções (ex: `AgendamentoInvalidoException`)
- Trate exceções com `try-catch` onde necessário
- Use `instanceof` para identificar tipos específicos de erro

### 8.6. Implementando Enums
- Use enums para padronizar valores constantes (status, tipos, etc.)
- Defina valores string explícitos para facilitar debugging
- Use enums em vez de strings "mágicas" espalhadas pelo código
- Facilita refatoração e evita erros de digitação

### 8.7. Dicas Gerais
- **Use nomes descritivos:** `calcularPrecoFinal()` é melhor que `calcular()`
- **Mantenha métodos pequenos:** Cada método deve ter uma responsabilidade específica
- **Valide sempre:** Verifique parâmetros antes de usar
- **Use const/readonly:** Para valores que não devem mudar
- **Documente seu código:** Use comentários para explicar lógicas complexas
- **Teste incrementalmente:** Teste cada funcionalidade conforme implementa

### 8.8. Ordem Recomendada de Implementação
1. **Fase 1:** Classes básicas (Cliente, Profissional, Servico e subclasses)
2. **Fase 2:** Enums e exceções customizadas
3. **Fase 3:** Classe Agendamento com validações
4. **Fase 4:** Classe SalaoDeBeleza com operações básicas
5. **Fase 5:** Classes de apoio (Pagamento, Produto, Promocao)
6. **Fase 6:** Funcionalidades avançadas (Relatórios, HorarioFuncionamento)
7. **Fase 7:** Testes e refinamentos
