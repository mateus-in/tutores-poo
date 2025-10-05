# Projeto de Programação Orientada a Objetos: Sistema de Companhia Aérea

## 1. Objetivo do Projeto

Desenvolver um sistema completo para gerenciar uma companhia aérea utilizando **TypeScript** e os conceitos fundamentais de **Programação Orientada a Objetos (POO)**. O sistema deve controlar voos, passageiros, reservas e bagagens, aplicando polimorfismo para diferentes tipos de passageiros e validação de assentos, de forma prática e didática.

---

## 2. Estrutura do Sistema

### 2.1. Classes Principais

#### **`Passageiro`** (Classe Abstrata)

- **Descrição:** Define o contrato base para todos os tipos de passageiros.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `documento` (string)
  - `email` (string)
  - `telefone` (string)
- **Métodos:**
  - `abstract calcularPrecoPassagem(precoBase: number): number`
  - `abstract validarBagagem(bagagens: Bagagem[]): ResultadoValidacao`

#### **`PassageiroComum`, `PassageiroVIP`, `PassageiroCrianca`** (Classes Concretas)

- **Descrição:** Tipos específicos de passageiros que herdam de `Passageiro`.
- **Atributos específicos:**
  - `PassageiroVIP` possui `numeroCartao` (string) e benefícios especiais
  - `PassageiroCrianca` possui `idade` (number) e `responsavel` (string)
- **Métodos:**
  - Implementam `calcularPrecoPassagem()` com descontos/acréscimos específicos
  - Implementam `validarBagagem()` com limites diferentes por tipo

#### **`Voo`**

- **Descrição:** Representa um voo da companhia.
- **Atributos:**
  - `numeroVoo` (string)
  - `origem` (string)
  - `destino` (string)
  - `dataPartida` (Date)
  - `dataChegada` (Date)
  - `aeronave` (Aeronave)
  - `precoBase` (number)
  - `assentos` (Map<string, StatusAssento>)
  - `reservas` (Reserva[])
- **Métodos:**
  - `verificarDisponibilidade(): number`
  - `reservarAssento(numeroAssento: string): boolean`
  - `calcularReceitaTotal(): number`
  - `listarAssentosDisponiveis(): string[]`

#### **`Aeronave`**

- **Descrição:** Representa uma aeronave da frota.
- **Atributos:**
  - `prefixo` (string)
  - `modelo` (string)
  - `capacidade` (number)
  - `status` (StatusAeronave)
- **Métodos:**
  - `estaDisponivel(): boolean`
  - `alterarStatus(novoStatus: StatusAeronave): void`

#### **`CompanhiaAerea`** (Classe Principal)

- **Descrição:** Gerencia todos os voos, passageiros e operações.
- **Atributos:**
  - `nome` (string)
  - `voos` (Voo[])
  - `aeronaves` (Aeronave[])
  - `passageiros` (Passageiro[])
  - `reservas` (Reserva[])
- **Métodos:**
  - `cadastrarVoo(voo: Voo): void`
  - `buscarVoos(origem: string, destino: string, data: Date): Voo[]`
  - `fazerReserva(reserva: Reserva): boolean`
  - `realizarCheckIn(reservaId: string): boolean`
  - `cancelarReserva(reservaId: string): boolean`

---

### 2.2. Classes de Apoio

#### **`Reserva`**

- **Descrição:** Representa uma reserva de passagem.
- **Atributos:**
  - `id` (string)
  - `passageiro` (Passageiro)
  - `voo` (Voo)
  - `numeroAssento` (string)
  - `status` (StatusReserva)
  - `bagagens` (Bagagem[])
  - `dataReserva` (Date)
  - `precoTotal` (number)
- **Métodos:**
  - `calcularPrecoTotal(): number`
  - `adicionarBagagem(bagagem: Bagagem): boolean`
  - `confirmarReserva(): void`
  - `cancelar(): void`

#### **`Bagagem`**

- **Descrição:** Representa uma bagagem do passageiro.
- **Atributos:**
  - `id` (string)
  - `tipo` (TipoBagagem)
  - `peso` (number)
  - `dimensoes` (Dimensoes)
- **Métodos:**
  - `calcularTaxaExcesso(): number`
  - `validarDimensoes(): boolean`
  - `validarPeso(): boolean`

#### **`RelatorioVoos`**

- **Descrição:** Gera relatórios operacionais da companhia.
- **Métodos:**
  - `calcularReceitaTotal(): number`
  - `calcularTaxaOcupacao(): number`
  - `listarVoosMaisPopulares(): Voo[]`

---

### 2.3. Enums

#### **`StatusAssento`**

- **Valores:** `DISPONIVEL`, `RESERVADO`, `OCUPADO`, `BLOQUEADO`

#### **`StatusReserva`**

- **Valores:** `PENDENTE`, `CONFIRMADA`, `CHECK_IN_REALIZADO`, `CANCELADA`

#### **`StatusAeronave`**

- **Valores:** `DISPONIVEL`, `EM_VOO`, `MANUTENCAO`, `INATIVA`

#### **`TipoBagagem`**

- **Valores:** `BAGAGEM_MAO`, `BAGAGEM_DESPACHADA`, `BAGAGEM_ESPECIAL`

---

## 3. Regras de Negócio

### 3.1. Reservas e Assentos

- Cada assento só pode ser reservado por um passageiro por voo
- Reserva deve ser confirmada em até 24 horas, senão é cancelada automaticamente
- Passageiro VIP tem prioridade na escolha de assentos
- Check-in só pode ser realizado para reservas confirmadas

### 3.2. Preços e Descontos

- Cada tipo de passageiro tem regras específicas de preço:
  - **PassageiroComum:** Paga preço integral
  - **PassageiroVIP:** Desconto de 10% e bagagem extra gratuita
  - **PassageiroCrianca:** Desconto de 50% (menores de 12 anos)

### 3.3. Bagagens

- Limites diferentes por tipo de passageiro:
  - **Comum:** 1 bagagem de mão (10kg) + 1 despachada (23kg)
  - **VIP:** 2 bagagens de mão (10kg cada) + 2 despachadas (32kg cada)
  - **Criança:** 1 bagagem de mão (5kg) + 1 despachada (20kg)
- Taxa de excesso cobrada por quilo adicional

### 3.4. Operações de Voo

- Voo só pode decolar se aeronave estiver disponível
- Capacidade máxima não pode ser excedida
- Receita total = soma dos preços finais de todas as reservas confirmadas

---

## 4. Conceitos de POO Aplicados

### 4.1. **Herança**

- Classe abstrata `Passageiro` é herdada por `PassageiroComum`, `PassageiroVIP` e `PassageiroCrianca`
- Cada tipo implementa suas próprias regras de preço e bagagem

### 4.2. **Polimorfismo**

- Métodos `calcularPrecoPassagem()` e `validarBagagem()` são implementados de forma diferente em cada tipo de passageiro
- Permite tratar todos os passageiros de forma uniforme, mas com comportamentos específicos

### 4.3. **Encapsulamento**

- Atributos privados com métodos públicos para acesso controlado
- Validações internas nas classes para manter consistência dos dados

### 4.4. **Abstração**

- Interface clara entre as classes principais
- Métodos abstratos definem contratos que devem ser implementados

---

## 5. Tratamento de Exceções

### 5.1. Exceções Customizadas

- **`VooLotadoException`:** Tentativa de reservar assento em voo sem vagas
- **`AssentoIndisponivelException`:** Assento já ocupado ou bloqueado
- **`BagagemExcessivaException`:** Bagagem excede limites permitidos
- **`ReservaInvalidaException`:** Dados da reserva inválidos ou incompletos

### 5.2. Validações Importantes

- Verificar disponibilidade de assentos antes de reservar
- Validar peso e dimensões das bagagens
- Confirmar que aeronave está disponível para o voo
- Validar dados obrigatórios do passageiro

---

## 6. Funcionalidades do Sistema

### 6.1. Gestão de Voos

- Cadastrar voos com origem, destino e horários
- Consultar voos disponíveis por rota e data
- Controlar capacidade e disponibilidade de assentos
- Gerar relatórios de ocupação e receita

### 6.2. Gestão de Passageiros

- Cadastrar diferentes tipos de passageiros
- Aplicar regras específicas de preço e bagagem por tipo
- Manter histórico de viagens por passageiro

### 6.3. Sistema de Reservas

- Criar reservas vinculando passageiro, voo e assento
- Validar bagagens conforme regras do tipo de passageiro
- Processar check-in e controlar status da reserva
- Cancelar reservas e liberar assentos

### 6.4. Controle de Bagagens

- Validar peso e dimensões conforme tipo de passageiro
- Calcular taxas de excesso automaticamente
- Controlar diferentes tipos de bagagem (mão, despachada, especial)

### 6.5. Relatórios Gerenciais

- Calcular receita total por período
- Analisar taxa de ocupação dos voos
- Identificar rotas mais populares
- Controlar performance operacional

---

## 7. Exemplo de Implementação

```typescript
// Exemplo de uso do sistema
const companhia = new CompanhiaAerea('Voe Bem Airlines');

// Cadastrar aeronave e voo
const aeronave = new Aeronave('PR-ABC', 'Boeing 737', 180);
const voo = new Voo(
  'VB123',
  'São Paulo',
  'Rio de Janeiro',
  new Date('2024-03-15T08:00:00'),
  new Date('2024-03-15T09:30:00'),
  aeronave,
  300,
);
companhia.cadastrarVoo(voo);

// Criar passageiros
const passageiroVIP = new PassageiroVIP(
  '001',
  'Ana Silva',
  '12345678901',
  'ana@email.com',
  '11999999999',
  'VIP12345',
);
const passageiroComum = new PassageiroComum(
  '002',
  'João Santos',
  '98765432109',
  'joao@email.com',
  '11888888888',
);

// Fazer reserva
const reserva = new Reserva('R001', passageiroVIP, voo, '1A');
if (companhia.fazerReserva(reserva)) {
  console.log('Reserva realizada com sucesso!');
  console.log(`Preço total: R$ ${reserva.calcularPrecoTotal()}`);
}
```

---

## 8. Dicas de Implementação

### 8.1. Por onde começar?

1. **Comece pelas classes básicas:** Implemente primeiro `Aeronave` e as classes de `Passageiro`
2. **Teste cada classe individualmente:** Crie objetos simples e teste os métodos básicos
3. **Implemente a herança:** Faça os tipos de passageiro herdarem de `Passageiro`
4. **Adicione complexidade gradualmente:** Depois implemente `Voo`, `Reserva` e `CompanhiaAerea`

### 8.2. Implementando a Herança

- Use `abstract` para definir métodos que devem ser implementados pelas subclasses
- Use `protected` para atributos que podem ser acessados pelas subclasses
- Use `super()` no construtor das subclasses para chamar o construtor da classe pai
- Cada tipo de passageiro deve implementar suas regras específicas de preço e bagagem

### 8.3. Trabalhando com Maps e Arrays

- Use `Map<string, StatusAssento>` para controlar assentos do voo
- Use `push()` para adicionar voos e passageiros às listas
- Use `find()` para buscar voos por critérios específicos
- Use `filter()` para buscar voos disponíveis por rota e data

### 8.4. Implementando Validações

- Valide capacidade máxima antes de confirmar reserva
- Verifique status do assento antes de reservar
- Valide peso e dimensões das bagagens conforme tipo de passageiro
- Use validações no construtor para dados obrigatórios

### 8.5. Criando Exceções Customizadas

- Crie classes de exceção que estendem `Error`
- Use nomes descritivos (ex: `VooLotadoException`)
- Trate exceções com `try-catch` onde necessário
- Forneça mensagens de erro claras para o usuário

### 8.6. Implementando Enums

- Use enums para padronizar status, tipos e estados
- Facilita validações e evita erros de digitação
- Torna o código mais legível e manutenível

### 8.7. Dicas Gerais

- **Use nomes descritivos:** `calcularPrecoPassagem()` é melhor que `calcular()`
- **Mantenha métodos pequenos:** Cada método deve ter uma responsabilidade específica
- **Valide sempre:** Verifique parâmetros antes de usar
- **Use const/readonly:** Para valores que não devem mudar
- **Documente seu código:** Use comentários para explicar lógicas complexas
- **Teste incrementalmente:** Teste cada funcionalidade conforme implementa

### 8.8. Ordem Recomendada de Implementação

1. **Fase 1:** Classes básicas (Aeronave, Passageiro e subclasses)
2. **Fase 2:** Enums e exceções customizadas
3. **Fase 3:** Classes Bagagem e Dimensoes
4. **Fase 4:** Classe Voo com controle de assentos
5. **Fase 5:** Classe Reserva com validações
6. **Fase 6:** Classe CompanhiaAerea com operações principais
7. **Fase 7:** Funcionalidades avançadas (Relatórios)
8. **Fase 8:** Testes e
