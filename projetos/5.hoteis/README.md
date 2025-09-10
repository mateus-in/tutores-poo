# Projeto de Programação Orientada a Objetos: Sistema de Reserva de Hotéis

## 1. Objetivo do Projeto

Desenvolver um sistema completo para gerenciar reservas de quartos de hotel utilizando **TypeScript** e os conceitos fundamentais de **Programação Orientada a Objetos (POO)**. O sistema deve controlar quartos, hóspedes, reservas e serviços, aplicando polimorfismo para diferentes tipos de quartos e validação de datas, de forma prática e didática.

---

## 2. Estrutura do Sistema

### 2.1. Classes Principais

#### **`Quarto`** (Classe Abstrata)
- **Descrição:** Define o contrato base para todos os tipos de quartos.
- **Atributos:**
  - `numero` (string)
  - `andar` (number)
  - `capacidade` (number)
  - `precoDiaria` (number)
  - `status` (StatusQuarto)
  - `comodidades` (string[])
- **Métodos:**
  - `abstract calcularCustoTotal(dias: number): number`
  - `alterarStatus(novoStatus: StatusQuarto): void`
  - `estaDisponivel(): boolean`
  - `obterDescricao(): string`

#### **`QuartoSimples`, `QuartoFamiliar`, `Suite`** (Classes Concretas)
- **Descrição:** Tipos específicos de quartos que herdam de `Quarto`.
- **Atributos específicos:**
  - `QuartoFamiliar` possui `bercos` (number) e `kitchenette` (boolean)
  - `Suite` possui `sala` (boolean) e `varanda` (boolean)
- **Métodos:**
  - Implementam `calcularCustoTotal()` com lógicas específicas por tipo

#### **`Hospede`**
- **Descrição:** Representa um hóspede do hotel.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `documento` (string)
  - `email` (string)
  - `telefone` (string)
  - `dataNascimento` (Date)
  - `historicoReservas` (Reserva[])
- **Métodos:**
  - `calcularIdade(): number`
  - `adicionarReserva(reserva: Reserva): void`
  - `obterReservasAtivas(): Reserva[]`

#### **`Reserva`**
- **Descrição:** Representa uma reserva de quarto.
- **Atributos:**
  - `id` (string)
  - `hospede` (Hospede)
  - `quarto` (Quarto)
  - `dataCheckin` (Date)
  - `dataCheckout` (Date)
  - `numeroHospedes` (number)
  - `status` (StatusReserva)
  - `servicosAdicionais` (ServicoAdicional[])
  - `valorTotal` (number)
- **Métodos:**
  - `calcularDiarias(): number`
  - `calcularValorTotal(): number`
  - `adicionarServico(servico: ServicoAdicional): void`
  - `confirmarReserva(): void`
  - `realizarCheckin(): void`
  - `realizarCheckout(): void`

#### **`Hotel`** (Classe Principal)
- **Descrição:** Gerencia todos os quartos, hóspedes e operações.
- **Atributos:**
  - `nome` (string)
  - `endereco` (string)
  - `quartos` (Quarto[])
  - `hospedes` (Hospede[])
  - `reservas` (Reserva[])
  - `servicosDisponiveis` (ServicoAdicional[])
- **Métodos:**
  - `adicionarQuarto(quarto: Quarto): void`
  - `buscarQuartosDisponiveis(dataCheckin: Date, dataCheckout: Date): Quarto[]`
  - `fazerReserva(reserva: Reserva): boolean`
  - `cancelarReserva(reservaId: string): boolean`
  - `consultarOcupacao(data: Date): number`

---

### 2.2. Classes de Apoio

#### **`ServicoAdicional`**
- **Descrição:** Representa serviços extras oferecidos pelo hotel.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `descricao` (string)
  - `preco` (number)
  - `categoria` (CategoriaServico)
- **Métodos:**
  - `calcularCusto(quantidade: number): number`
  - `estaDisponivel(): boolean`

#### **`Funcionario`**
- **Descrição:** Representa funcionários do hotel.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `cargo` (CargoFuncionario)
  - `turno` (TurnoTrabalho)
- **Métodos:**
  - `realizarCheckin(reserva: Reserva): boolean`
  - `realizarCheckout(reserva: Reserva): number`
  - `processarPagamento(valor: number): boolean`

#### **`RelatorioHotel`**
- **Descrição:** Gera relatórios operacionais e financeiros.
- **Atributos:**
  - `dataInicio` (Date)
  - `dataFim` (Date)
  - `reservasAnalisadas` (Reserva[])
- **Métodos:**
  - `calcularReceitaTotal(): number`
  - `calcularTaxaOcupacao(): number`
  - `obterQuartosMaisReservados(): Quarto[]`
  - `calcularTicketMedio(): number`

#### **`Pagamento`**
- **Descrição:** Processa pagamentos das reservas.
- **Atributos:**
  - `id` (string)
  - `reserva` (Reserva)
  - `valor` (number)
  - `formaPagamento` (FormaPagamento)
  - `status` (StatusPagamento)
  - `dataPagamento` (Date)
- **Métodos:**
  - `processar(): boolean`
  - `calcularTroco(valorPago: number): number`
  - `gerarRecibo(): string`

#### **`Promocao`**
- **Descrição:** Representa promoções e descontos.
- **Atributos:**
  - `nome` (string)
  - `percentualDesconto` (number)
  - `dataInicio` (Date)
  - `dataFim` (Date)
  - `tiposQuartoAplicaveis` (string[])
- **Métodos:**
  - `estaAtiva(): boolean`
  - `aplicavelAoQuarto(quarto: Quarto): boolean`
  - `calcularDesconto(valor: number): number`

---

### 2.3. Enums

#### **`StatusQuarto`**
- **Valores:** `DISPONIVEL`, `OCUPADO`, `MANUTENCAO`, `LIMPEZA`, `BLOQUEADO`

#### **`StatusReserva`**
- **Valores:** `PENDENTE`, `CONFIRMADA`, `CHECKIN_REALIZADO`, `CHECKOUT_REALIZADO`, `CANCELADA`

#### **`CategoriaServico`**
- **Valores:** `ALIMENTACAO`, `TRANSPORTE`, `LAZER`, `BUSINESS`, `SPA`

#### **`CargoFuncionario`**
- **Valores:** `RECEPCIONISTA`, `CAMAREIRA`, `CONCIERGE`, `GERENTE`, `SEGURANCA`

#### **`FormaPagamento`**
- **Valores:** `DINHEIRO`, `CARTAO_CREDITO`, `CARTAO_DEBITO`, `PIX`, `TRANSFERENCIA`

#### **`TurnoTrabalho`**
- **Valores:** `MANHA`, `TARDE`, `NOITE`, `MADRUGADA`

---

## 3. Regras de Negócio

### 3.1. Reservas e Disponibilidade
- Quarto só pode ter uma reserva ativa por período
- Reserva deve ser confirmada em até 48 horas, senão é cancelada automaticamente
- Check-in só pode ser realizado a partir das 14h
- Check-out deve ser realizado até às 12h
- Capacidade máxima do quarto não pode ser excedida

### 3.2. Preços e Cálculos
- Cada tipo de quarto tem regras específicas de preço:
  - **QuartoSimples:** Preço fixo por diária
  - **QuartoFamiliar:** Preço base + taxa adicional por berço
  - **Suite:** Preço premium com desconto para estadias longas (7+ dias)
- Serviços adicionais são cobrados separadamente
- Promoções ativas são aplicadas automaticamente no cálculo

### 3.3. Controle de Status
- Status do quarto deve ser atualizado automaticamente:
  - `OCUPADO` durante a estadia
  - `LIMPEZA` após checkout
  - `DISPONIVEL` após limpeza concluída
- Quartos em manutenção ficam indisponíveis para reserva

### 3.4. Validações de Datas
- Data de check-in deve ser posterior à data atual
- Data de check-out deve ser posterior à data de check-in
- Reservas não podem ter sobreposição de datas para o mesmo quarto
- Estadias mínimas e máximas podem ser definidas por tipo de quarto

---

## 4. Conceitos de POO Aplicados

### 4.1. **Herança**
- Classe abstrata `Quarto` é herdada por `QuartoSimples`, `QuartoFamiliar` e `Suite`
- Cada tipo implementa sua própria lógica de cálculo de custo

### 4.2. **Polimorfismo**
- Método `calcularCustoTotal()` é implementado de forma diferente em cada tipo de quarto
- Permite tratar todos os quartos de forma uniforme, mas com comportamentos específicos

### 4.3. **Encapsulamento**
- Atributos privados com métodos públicos para acesso controlado
- Validações internas nas classes para manter consistência dos dados

### 4.4. **Abstração**
- Interface clara entre as classes principais
- Métodos abstratos definem contratos que devem ser implementados

---

## 5. Tratamento de Exceções

### 5.1. Exceções Customizadas
- **`QuartoIndisponivelException`:** Tentativa de reservar quarto já ocupado
- **`DataInvalidaException`:** Datas de check-in/check-out inválidas
- **`CapacidadeExcedidaException`:** Número de hóspedes excede capacidade do quarto
- **`ReservaVencidaException`:** Tentativa de check-in em reserva expirada

### 5.2. Validações Importantes
- Verificar disponibilidade do quarto no período solicitado
- Validar se datas estão em ordem cronológica correta
- Confirmar que capacidade do quarto não foi excedida
- Validar dados obrigatórios do hóspede

---

## 6. Funcionalidades do Sistema

### 6.1. Gestão de Quartos
- Cadastrar quartos de diferentes tipos e categorias
- Controlar status e disponibilidade em tempo real
- Definir preços e promoções por tipo de quarto
- Acompanhar ocupação e manutenção

### 6.2. Sistema de Reservas
- Buscar quartos disponíveis por período e capacidade
- Criar reservas com validação de datas e disponibilidade
- Processar check-in e check-out com controle de horários
- Cancelar reservas e liberar quartos

### 6.3. Gestão de Hóspedes
- Cadastrar hóspedes com dados completos
- Manter histórico de reservas por hóspede
- Controlar hóspedes ativos no hotel
- Oferecer serviços personalizados

### 6.4. Serviços Adicionais
- Oferecer serviços extras (spa, transporte, alimentação)
- Calcular custos adicionais por categoria
- Integrar serviços ao valor total da estadia

### 6.5. Relatórios Gerenciais
- Calcular receita e taxa de ocupação por período
- Identificar quartos e serviços mais populares
- Analisar performance operacional
- Controlar pagamentos e inadimplência

---

## 7. Exemplo de Implementação

```typescript
// Exemplo de uso do sistema
const hotel = new Hotel("Hotel Paraíso", "Rua das Flores, 123");

// Cadastrar quartos
const quartoSimples = new QuartoSimples("101", 1, 2, 150, ["TV", "Wi-Fi", "Ar-condicionado"]);
const suite = new Suite("501", 5, 4, 400, ["TV 55'", "Wi-Fi", "Ar-condicionado", "Minibar"], true, true);

hotel.adicionarQuarto(quartoSimples);
hotel.adicionarQuarto(suite);

// Cadastrar hóspede
const hospede = new Hospede("H001", "João Silva", "12345678901", "joao@email.com", "11999999999", new Date("1990-05-15"));

// Buscar quartos disponíveis
const dataCheckin = new Date("2024-03-15");
const dataCheckout = new Date("2024-03-18");
const quartosDisponiveis = hotel.buscarQuartosDisponiveis(dataCheckin, dataCheckout);

// Fazer reserva
if (quartosDisponiveis.length > 0) {
    const reserva = new Reserva("R001", hospede, quartosDisponiveis[0], dataCheckin, dataCheckout, 2);
    
    if (hotel.fazerReserva(reserva)) {
        console.log("Reserva realizada com sucesso!");
        console.log(`Valor total: R$ ${reserva.calcularValorTotal()}`);
    }
}
```

---

## 8. Dicas de Implementação

### 8.1. Por onde começar?
1. **Comece pelas classes básicas:** Implemente primeiro `Hospede` e as classes de `Quarto`
2. **Teste cada classe individualmente:** Crie objetos simples e teste os métodos básicos
3. **Implemente a herança:** Faça os tipos de quarto herdarem de `Quarto`
4. **Adicione complexidade gradualmente:** Depois implemente `Reserva` e `Hotel`

### 8.2. Implementando a Herança
- Use `abstract` para definir métodos que devem ser implementados pelas subclasses
- Use `protected` para atributos que podem ser acessados pelas subclasses
- Use `super()` no construtor das subclasses para chamar o construtor da classe pai
- Cada tipo de quarto deve implementar sua lógica específica de precificação

### 8.3. Trabalhando com Datas
- Use a classe `Date` do JavaScript/TypeScript para manipular datas
- Implemente métodos para calcular diferença entre datas (número de diárias)
- Valide sempre se as datas estão em ordem cronológica
- Considere fusos horários se necessário

### 8.4. Implementando Validações
- Valide disponibilidade antes de confirmar reserva
- Verifique capacidade máxima do quarto
- Valide datas (check-in < check-out, datas futuras)
- Use validações no construtor para dados obrigatórios

### 8.5. Criando Exceções Customizadas
- Crie classes de exceção que estendem `Error`
- Use nomes descritivos (ex: `QuartoIndisponivelException`)
- Trate exceções com `try-catch` onde necessário
- Forneça mensagens de erro claras para o usuário

### 8.6. Implementando Enums
- Use enums para padronizar status, categorias e tipos
- Facilita validações e evita erros de digitação
- Torna o código mais legível e manutenível

### 8.7. Dicas Gerais
- **Use nomes descritivos:** `calcularCustoTotal()` é melhor que `calcular()`
- **Mantenha métodos pequenos:** Cada método deve ter uma responsabilidade específica
- **Valide sempre:** Verifique parâmetros antes de usar
- **Use const/readonly:** Para valores que não devem mudar
- **Documente seu código:** Use comentários para explicar lógicas complexas
- **Teste incrementalmente:** Teste cada funcionalidade conforme implementa

### 8.8. Ordem Recomendada de Implementação
1. **Fase 1:** Classes básicas (Hospede, Quarto e subclasses)
2. **Fase 2:** Enums e exceções customizadas
3. **Fase 3:** Classes ServicoAdicional e Funcionario
4. **Fase 4:** Classe Reserva com validações de data
5. **Fase 5:** Classe Hotel com operações principais
6. **Fase 6:** Classes Pagamento e Promocao
7. **Fase 7:** Funcionalidades avançadas (RelatorioHotel)
8. **Fase 8:** Testes e refinamentos
