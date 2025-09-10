# Projeto de Programação Orientada a Objetos: Sistema de Gestão de Frota

## 1. Objetivo do Projeto

Desenvolver um sistema completo para gerenciar uma frota de veículos, motoristas e manutenções utilizando **TypeScript** e os conceitos fundamentais de **Programação Orientada a Objetos (POO)**. O sistema deve controlar alocação de veículos, custos operacionais, manutenções e relatórios, aplicando os pilares da POO de forma prática e didática.

---

## 2. Estrutura do Sistema

### 2.1. Classes Principais

#### **`Veiculo`** (Classe Abstrata)
- **Descrição:** Define o contrato base para todos os veículos da frota.
- **Atributos:**
  - `placa` (string)
  - `modelo` (string)
  - `ano` (number)
  - `quilometragem` (number)
  - `status` (StatusVeiculo)
  - `custoManutencao` (number)
- **Métodos:**
  - `abstract calcularCustoPorKm(): number`
  - `atualizarQuilometragem(km: number): void`
  - `alterarStatus(novoStatus: StatusVeiculo): void`

#### **`Carro`, `Caminhao`, `Van`** (Classes Concretas)
- **Descrição:** Tipos específicos de veículos que herdam de `Veiculo`.
- **Atributos específicos:**
  - `Caminhao` possui `capacidadeCarga` (number) que influencia o custo
  - `Van` possui `numeroAssentos` (number)
- **Métodos:**
  - Implementam `calcularCustoPorKm()` com lógicas específicas por tipo

#### **`Motorista`**
- **Descrição:** Representa um motorista da empresa.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `cnh` (string)
  - `categoria` (CategoriaCNH)
  - `dataVencimentoCNH` (Date)
  - `historicoViagens` (Viagem[])
- **Métodos:**
  - `podeConduzir(veiculo: Veiculo): boolean`
  - `cnhValida(): boolean`
  - `adicionarViagem(viagem: Viagem): void`

#### **`Viagem`**
- **Descrição:** Representa uma viagem realizada.
- **Atributos:**
  - `id` (string)
  - `motorista` (Motorista)
  - `veiculo` (Veiculo)
  - `origem` (string)
  - `destino` (string)
  - `dataInicio` (Date)
  - `dataFim` (Date)
  - `quilometragemInicial` (number)
  - `quilometragemFinal` (number)
  - `status` (StatusViagem)
- **Métodos:**
  - `calcularDistanciaPercorrida(): number`
  - `calcularCustoViagem(): number`
  - `finalizarViagem(): void`

#### **`Frota`** (Classe Principal)
- **Descrição:** Gerencia todos os veículos, motoristas e operações.
- **Atributos:**
  - `nome` (string)
  - `veiculos` (Veiculo[])
  - `motoristas` (Motorista[])
  - `viagens` (Viagem[])
  - `manutencoes` (Manutencao[])
- **Métodos:**
  - `adicionarVeiculo(veiculo: Veiculo): void`
  - `alocarVeiculo(motorista: Motorista, veiculo: Veiculo): boolean`
  - `iniciarViagem(viagem: Viagem): boolean`
  - `finalizarViagem(viagemId: string): void`
  - `consultarVeiculosDisponiveis(): Veiculo[]`

---

### 2.2. Classes de Apoio

#### **`Manutencao`**
- **Descrição:** Registra manutenções realizadas nos veículos.
- **Atributos:**
  - `id` (string)
  - `veiculo` (Veiculo)
  - `tipo` (TipoManutencao)
  - `dataManutencao` (Date)
  - `custo` (number)
  - `descricao` (string)
  - `quilometragemManutencao` (number)
- **Métodos:**
  - `calcularProximaManutencao(): Date`
  - `atualizarCustoVeiculo(): void`

#### **`Combustivel`**
- **Descrição:** Controla abastecimentos dos veículos.
- **Atributos:**
  - `veiculo` (Veiculo)
  - `dataAbastecimento` (Date)
  - `litros` (number)
  - `precoLitro` (number)
  - `quilometragemAbastecimento` (number)
- **Métodos:**
  - `calcularCusto(): number`
  - `calcularConsumoMedio(): number`

#### **`RelatorioFrota`**
- **Descrição:** Gera relatórios operacionais e financeiros.
- **Atributos:**
  - `dataInicio` (Date)
  - `dataFim` (Date)
  - `viagensAnalisadas` (Viagem[])
- **Métodos:**
  - `calcularCustoTotalPeriodo(): number`
  - `obterVeiculoMaisUtilizado(): Veiculo`
  - `calcularQuilometragemTotal(): number`
  - `listarMotoristasAtivos(): Motorista[]`

#### **`ControleManutencao`**
- **Descrição:** Gerencia cronograma de manutenções.
- **Atributos:**
  - `veiculos` (Veiculo[])
  - `intervaloPreventivaKm` (number)
- **Métodos:**
  - `verificarManutencoesPendentes(): Veiculo[]`
  - `agendarManutencao(veiculo: Veiculo, tipo: TipoManutencao): void`
  - `calcularCustoManutencaoAnual(): number`

---

### 2.3. Enums

#### **`StatusVeiculo`**
- **Valores:** `DISPONIVEL`, `EM_VIAGEM`, `EM_MANUTENCAO`, `INATIVO`

#### **`StatusViagem`**
- **Valores:** `PLANEJADA`, `EM_ANDAMENTO`, `FINALIZADA`, `CANCELADA`

#### **`TipoManutencao`**
- **Valores:** `PREVENTIVA`, `CORRETIVA`, `REVISAO`, `EMERGENCIAL`

#### **`CategoriaCNH`**
- **Valores:** `A`, `B`, `C`, `D`, `E`

---

## 3. Regras de Negócio

### 3.1. Alocação de Veículos
- Motorista só pode conduzir veículo compatível com sua categoria de CNH
- CNH deve estar válida (não vencida) para permitir alocação
- Veículo deve estar com status `DISPONIVEL` para ser alocado
- Um veículo só pode estar alocado para um motorista por vez

### 3.2. Controle de Viagens
- Quilometragem final deve ser maior que a inicial
- Status da viagem deve seguir sequência: `PLANEJADA` → `EM_ANDAMENTO` → `FINALIZADA`
- Veículo fica indisponível durante viagem (`EM_VIAGEM`)
- Custo da viagem é calculado baseado na distância e custo por km do veículo

### 3.3. Manutenções
- Veículo em manutenção fica com status `EM_MANUTENCAO`
- Manutenção preventiva deve ser agendada a cada X quilômetros
- Custo de manutenção é acumulado no histórico do veículo
- Após manutenção, veículo volta ao status `DISPONIVEL`

### 3.4. Custos Operacionais
- Cada tipo de veículo tem forma específica de calcular custo por km:
  - **Carro:** Custo fixo por km
  - **Caminhão:** Custo base + adicional baseado na capacidade de carga
  - **Van:** Custo base + adicional baseado no número de assentos

---

## 4. Conceitos de POO Aplicados

### 4.1. **Herança**
- Classe abstrata `Veiculo` é herdada por `Carro`, `Caminhao` e `Van`
- Cada tipo de veículo implementa sua própria lógica de cálculo de custo

### 4.2. **Polimorfismo**
- Método `calcularCustoPorKm()` é implementado de forma diferente em cada tipo de veículo
- Permite tratar todos os veículos de forma uniforme, mas com comportamentos específicos

### 4.3. **Encapsulamento**
- Atributos privados com métodos públicos para acesso controlado
- Validações internas nas classes para manter consistência dos dados

### 4.4. **Abstração**
- Interface clara entre as classes principais
- Métodos abstratos definem contratos que devem ser implementados

---

## 5. Tratamento de Exceções

### 5.1. Exceções Customizadas
- **`VeiculoIndisponivelException`:** Tentativa de alocar veículo já em uso
- **`CNHInvalidaException`:** Motorista com CNH vencida ou incompatível
- **`ViagemInvalidaException`:** Erro nos dados da viagem (km, datas, etc.)
- **`ManutencaoObrigatoriaException`:** Veículo precisa de manutenção urgente

### 5.2. Validações Importantes
- Verificar categoria de CNH antes de alocar veículo
- Validar se quilometragem final é maior que inicial
- Confirmar que veículo está disponível antes da alocação
- Validar datas e valores obrigatórios

---

## 6. Funcionalidades do Sistema

### 6.1. Gestão de Veículos
- Cadastrar diferentes tipos de veículos na frota
- Consultar status e disponibilidade dos veículos
- Atualizar quilometragem e custos operacionais
- Controlar ciclo de vida (disponível → em viagem → manutenção)

### 6.2. Gestão de Motoristas
- Cadastrar motoristas com informações da CNH
- Verificar habilitação para conduzir tipos específicos de veículos
- Consultar histórico de viagens por motorista
- Alertar sobre vencimento de CNH

### 6.3. Controle de Viagens
- Planejar e iniciar viagens alocando motorista e veículo
- Acompanhar viagens em andamento
- Finalizar viagens calculando custos e distâncias
- Manter histórico completo de viagens

### 6.4. Gestão de Manutenções
- Agendar manutenções preventivas baseadas em quilometragem
- Registrar manutenções corretivas e custos
- Alertar sobre manutenções pendentes
- Controlar custos de manutenção por veículo

### 6.5. Relatórios Gerenciais
- Calcular custos operacionais por período
- Identificar veículos mais utilizados
- Analisar performance de motoristas
- Controlar gastos com combustível e manutenção

---

## 7. Exemplo de Implementação

```typescript
// Exemplo de uso do sistema
const frota = new Frota("Transportes ABC");

// Cadastrar veículos
const caminhao = new Caminhao("ABC-1234", "Volvo FH", 2020, 50000, 15000);
const carro = new Carro("XYZ-5678", "Toyota Corolla", 2021, 30000);
frota.adicionarVeiculo(caminhao);
frota.adicionarVeiculo(carro);

// Cadastrar motorista
const motorista = new Motorista("001", "João Silva", "12345678901", CategoriaCNH.C, new Date("2025-12-31"));

// Alocar veículo e iniciar viagem
if (frota.alocarVeiculo(motorista, caminhao)) {
    const viagem = new Viagem("V001", motorista, caminhao, "São Paulo", "Rio de Janeiro", new Date());
    frota.iniciarViagem(viagem);
    console.log("Viagem iniciada com sucesso!");
}
```

---

## 8. Dicas de Implementação

### 8.1. Por onde começar?
1. **Comece pelas classes básicas:** Implemente primeiro `Motorista` e as classes de `Veiculo`
2. **Teste cada classe individualmente:** Crie objetos simples e teste os métodos básicos
3. **Implemente a herança:** Faça `Carro`, `Caminhao` e `Van` herdarem de `Veiculo`
4. **Adicione complexidade gradualmente:** Depois implemente `Viagem` e `Frota`

### 8.2. Implementando a Herança
- Use `abstract` para definir métodos que devem ser implementados pelas subclasses
- Use `protected` para atributos que podem ser acessados pelas subclasses
- Use `super()` no construtor das subclasses para chamar o construtor da classe pai
- Cada subclasse deve implementar o cálculo de custo com sua lógica específica

### 8.3. Trabalhando com Arrays e Coleções
- Use `push()` para adicionar veículos e motoristas às listas
- Use `find()` para buscar veículo ou motorista específico
- Use `filter()` para buscar veículos disponíveis ou viagens por período
- Use `findIndex()` e `splice()` para remover itens quando necessário

### 8.4. Implementando Validações
- Valide categoria de CNH no método `podeConduzir()`
- Verifique status do veículo antes de alocar
- Valide quilometragem (final > inicial) ao finalizar viagem
- Use validações no construtor para dados obrigatórios

### 8.5. Criando Exceções Customizadas
- Crie classes de exceção que estendem `Error`
- Use nomes descritivos (ex: `VeiculoIndisponivelException`)
- Trate exceções com `try-catch` onde necessário
- Forneça mensagens de erro claras para o usuário

### 8.6. Implementando Enums
- Use enums para padronizar status, tipos e categorias
- Facilita validações e evita erros de digitação
- Torna o código mais legível e manutenível

### 8.7. Dicas Gerais
- **Use nomes descritivos:** `calcularCustoPorKm()` é melhor que `calcular()`
- **Mantenha métodos pequenos:** Cada método deve ter uma responsabilidade específica
- **Valide sempre:** Verifique parâmetros antes de usar
- **Use const/readonly:** Para valores que não devem mudar
- **Documente seu código:** Use comentários para explicar lógicas complexas
- **Teste incrementalmente:** Teste cada funcionalidade conforme implementa

### 8.8. Ordem Recomendada de Implementação
1. **Fase 1:** Classes básicas (Motorista, Veiculo e subclasses)
2. **Fase 2:** Enums e exceções customizadas
3. **Fase 3:** Classe Viagem com validações
4. **Fase 4:** Classe Frota com operações básicas
5. **Fase 5:** Classes de apoio (Manutencao, Combustivel)
6. **Fase 6:** Funcionalidades avançadas (Relatórios, ControleManutencao)
7. **Fase 7:** Testes e refinamentos
