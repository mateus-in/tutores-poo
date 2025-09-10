# Projeto de Programação Orientada a Objetos: Sistema de Galeria de Arte

## 1. Objetivo do Projeto

Desenvolver um sistema completo para gerenciar uma galeria de arte utilizando **TypeScript** e os conceitos fundamentais de **Programação Orientada a Objetos (POO)**. O sistema deve controlar obras de arte, artistas, exposições e vendas, aplicando polimorfismo para diferentes tipos de obras e gerenciamento de estado, de forma prática e didática.

---

## 2. Estrutura do Sistema

### 2.1. Classes Principais

#### **`ObraDeArte`** (Classe Abstrata)
- **Descrição:** Define o contrato base para todos os tipos de obras de arte.
- **Atributos:**
  - `id` (string)
  - `titulo` (string)
  - `artista` (Artista)
  - `anoCreacao` (number)
  - `dimensoes` (Dimensao)
  - `status` (StatusObra)
  - `valorEstimado` (number)
- **Métodos:**
  - `abstract calcularValorMercado(): number`
  - `alterarStatus(novoStatus: StatusObra): void`
  - `obterDescricaoCompleta(): string`

#### **`Pintura`, `Escultura`, `Fotografia`** (Classes Concretas)
- **Descrição:** Tipos específicos de obras que herdam de `ObraDeArte`.
- **Atributos específicos:**
  - `Pintura` possui `tecnica` (string) e `suporte` (string)
  - `Escultura` possui `material` (string) e `peso` (number)
  - `Fotografia` possui `tiragem` (number) e `tecnicaImpressao` (string)
- **Métodos:**
  - Implementam `calcularValorMercado()` com lógicas específicas por tipo

#### **`Artista`**
- **Descrição:** Representa um artista criador das obras.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `nacionalidade` (string)
  - `anoNascimento` (number)
  - `anoFalecimento` (number | null)
  - `biografia` (string)
  - `obras` (ObraDeArte[])
- **Métodos:**
  - `estaVivo(): boolean`
  - `adicionarObra(obra: ObraDeArte): void`
  - `calcularValorTotalObras(): number`

#### **`Exposicao`**
- **Descrição:** Representa uma exposição na galeria.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `curador` (string)
  - `dataInicio` (Date)
  - `dataFim` (Date)
  - `obras` (ObraDeArte[])
  - `visitantes` (number)
- **Métodos:**
  - `adicionarObra(obra: ObraDeArte): boolean`
  - `removerObra(obraId: string): boolean`
  - `estaAtiva(): boolean`
  - `calcularValorTotalExposicao(): number`

#### **`Galeria`** (Classe Principal)
- **Descrição:** Gerencia todo o acervo, exposições e operações.
- **Atributos:**
  - `nome` (string)
  - `acervo` (ObraDeArte[])
  - `artistas` (Artista[])
  - `exposicoes` (Exposicao[])
  - `vendas` (Venda[])
  - `clientes` (Cliente[])
- **Métodos:**
  - `adicionarObra(obra: ObraDeArte): void`
  - `organizarExposicao(exposicao: Exposicao): boolean`
  - `venderObra(venda: Venda): boolean`
  - `buscarObrasPorArtista(artistaId: string): ObraDeArte[]`
  - `consultarObrasDisponiveis(): ObraDeArte[]`

---

### 2.2. Classes de Apoio

#### **`Venda`**
- **Descrição:** Representa uma transação de venda de obra.
- **Atributos:**
  - `id` (string)
  - `obra` (ObraDeArte)
  - `cliente` (Cliente)
  - `dataVenda` (Date)
  - `valorVenda` (number)
  - `comissaoGaleria` (number)
  - `formaPagamento` (FormaPagamento)
- **Métodos:**
  - `calcularComissao(): number`
  - `calcularValorArtista(): number`
  - `finalizarVenda(): void`

#### **`Cliente`**
- **Descrição:** Representa um cliente colecionador.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `email` (string)
  - `telefone` (string)
  - `tipoCliente` (TipoCliente)
  - `historicoCompras` (Venda[])
- **Métodos:**
  - `adicionarCompra(venda: Venda): void`
  - `calcularTotalGasto(): number`
  - `obterObrasAdquiridas(): ObraDeArte[]`

#### **`RelatorioGaleria`**
- **Descrição:** Gera relatórios de vendas e exposições.
- **Métodos:**
  - `calcularFaturamentoTotal(): number`
  - `obterArtistasMaisVendidos(): Artista[]`
  - `analisarPerformanceExposicoes(): RelatorioExposicao[]`

---

### 2.3. Enums

#### **`StatusObra`**
- **Valores:** `EM_ACERVO`, `EM_EXPOSICAO`, `VENDIDA`, `EMPRESTADA`, `EM_RESTAURACAO`

#### **`TipoCliente`**
- **Valores:** `COLECIONADOR_PRIVADO`, `MUSEU`, `EMPRESA`, `INVESTIDOR`

#### **`FormaPagamento`**
- **Valores:** `DINHEIRO`, `TRANSFERENCIA`, `CHEQUE`, `PARCELADO`

#### **`CondicaoObra`**
- **Valores:** `EXCELENTE`, `MUITO_BOA`, `BOA`, `REGULAR`, `PRECISA_RESTAURACAO`

---

## 3. Regras de Negócio

### 3.1. Gestão do Acervo
- Obra só pode estar em uma exposição por vez
- Obra vendida não pode mais participar de exposições
- Obra em restauração fica temporariamente indisponível
- Cada obra deve ter avaliação atualizada periodicamente

### 3.2. Exposições
- Exposição deve ter pelo menos 5 obras para ser realizada
- Obras em exposição ficam com status `EM_EXPOSICAO`
- Não é possível vender obra que está em exposição ativa
- Curador deve ser responsável pela seleção temática das obras

### 3.3. Vendas e Precificação
- Cada tipo de obra tem critérios específicos de valorização:
  - **Pintura:** Baseado na técnica, tamanho e renome do artista
  - **Escultura:** Considera material, peso e complexidade
  - **Fotografia:** Valor inversamente proporcional à tiragem
- Galeria cobra comissão de 30% sobre vendas
- Desconto especial para clientes do tipo `MUSEU`

### 3.4. Controle de Estado
- Status da obra deve ser atualizado automaticamente nas operações
- Histórico de mudanças de status deve ser mantido
- Obras de artistas falecidos tendem a valorizar mais

---

## 4. Conceitos de POO Aplicados

### 4.1. **Herança**
- Classe abstrata `ObraDeArte` é herdada por `Pintura`, `Escultura` e `Fotografia`
- Cada tipo implementa sua própria lógica de valorização

### 4.2. **Polimorfismo**
- Método `calcularValorMercado()` é implementado de forma diferente em cada tipo de obra
- Permite tratar todas as obras de forma uniforme, mas com comportamentos específicos

### 4.3. **Encapsulamento**
- Atributos privados com métodos públicos para acesso controlado
- Validações internas nas classes para manter consistência dos dados

### 4.4. **Abstração**
- Interface clara entre as classes principais
- Métodos abstratos definem contratos que devem ser implementados

---

## 5. Tratamento de Exceções

### 5.1. Exceções Customizadas
- **`ObraIndisponivelException`:** Tentativa de usar obra que não está disponível
- **`ExposicaoInvalidaException`:** Exposição com dados inválidos ou obras insuficientes
- **`VendaInvalidaException`:** Tentativa de vender obra indisponível
- **`AvaliacaoVencidaException`:** Obra sem avaliação atualizada

### 5.2. Validações Importantes
- Verificar status da obra antes de incluir em exposição
- Validar se obra está disponível antes de vender
- Confirmar que exposição tem obras suficientes
- Validar dados obrigatórios de artistas e clientes

---

## 6. Funcionalidades do Sistema

### 6.1. Gestão do Acervo
- Cadastrar obras de diferentes tipos no acervo
- Controlar status e disponibilidade das obras
- Manter histórico de avaliações e mudanças de valor
- Organizar obras por artista, período ou tipo

### 6.2. Gestão de Exposições
- Criar exposições temáticas com curadoria
- Controlar período de exposição e obras participantes
- Acompanhar número de visitantes
- Gerar relatórios de performance das exposições

### 6.3. Sistema de Vendas
- Processar vendas de obras disponíveis
- Calcular comissões e valores para artistas
- Manter histórico de transações por cliente
- Controlar diferentes formas de pagamento

### 6.4. Gestão de Artistas
- Cadastrar artistas com biografia completa
- Associar obras aos seus criadores
- Acompanhar valorização por artista
- Controlar status (vivo/falecido) que afeta precificação

### 6.5. Relatórios Gerenciais
- Calcular faturamento por período
- Identificar artistas mais vendidos
- Analisar performance de exposições
- Controlar comissões e pagamentos

---

## 7. Exemplo de Implementação

```typescript
// Exemplo de uso do sistema
const galeria = new Galeria("Galeria Arte Moderna");

// Cadastrar artista
const artista = new Artista("A001", "Pablo Picasso", "Espanhola", 1881, 1973, "Pintor cubista...");

// Criar obras
const pintura = new Pintura("O001", "Guernica", artista, 1937, new Dimensao(349, 777, 0), "Óleo", "Tela");
const escultura = new Escultura("O002", "O Pensador", artista, 1904, new Dimensao(180, 98, 140), "Bronze", 180);

galeria.adicionarObra(pintura);
galeria.adicionarObra(escultura);

// Criar exposição
const exposicao = new Exposicao("E001", "Arte Moderna", "João Curador", 
                                new Date("2024-03-01"), new Date("2024-04-30"));
exposicao.adicionarObra(pintura);

if (galeria.organizarExposicao(exposicao)) {
    console.log("Exposição criada com sucesso!");
}

// Realizar venda
const cliente = new Cliente("C001", "Maria Colecionadora", "maria@email.com", "11999999999", TipoCliente.COLECIONADOR_PRIVADO);
const venda = new Venda("V001", escultura, cliente, new Date(), escultura.calcularValorMercado(), FormaPagamento.TRANSFERENCIA);

if (galeria.venderObra(venda)) {
    console.log(`Obra vendida por R$ ${venda.valorVenda}`);
}
```

---

## 8. Dicas de Implementação

### 8.1. Por onde começar?
1. **Comece pelas classes básicas:** Implemente primeiro `Artista`, `Dimensao` e as classes de `ObraDeArte`
2. **Teste cada classe individualmente:** Crie objetos simples e teste os métodos básicos
3. **Implemente a herança:** Faça os tipos de obra herdarem de `ObraDeArte`
4. **Adicione complexidade gradualmente:** Depois implemente `Exposicao`, `Venda` e `Galeria`

### 8.2. Implementando a Herança
- Use `abstract` para definir métodos que devem ser implementados pelas subclasses
- Use `protected` para atributos que podem ser acessados pelas subclasses
- Use `super()` no construtor das subclasses para chamar o construtor da classe pai
- Cada tipo de obra deve implementar sua lógica específica de valorização

### 8.3. Trabalhando com Arrays e Coleções
- Use `push()` para adicionar obras ao acervo e exposições
- Use `find()` para buscar obras específicas por ID ou título
- Use `filter()` para buscar obras por artista, status ou tipo
- Use `findIndex()` e `splice()` para remover obras quando necessário

### 8.4. Implementando Validações
- Valide status da obra antes de operações (venda, exposição)
- Verifique se exposição tem obras suficientes antes de ativar
- Valide se obra está disponível antes de incluir em operações
- Use validações no construtor para dados obrigatórios

### 8.5. Criando Exceções Customizadas
- Crie classes de exceção que estendem `Error`
- Use nomes descritivos (ex: `ObraIndisponivelException`)
- Trate exceções com `try-catch` onde necessário
- Forneça mensagens de erro claras para o usuário

### 8.6. Implementando Enums
- Use enums para padronizar status, tipos e condições
- Facilita validações e evita erros de digitação
- Torna o código mais legível e manutenível

### 8.7. Dicas Gerais
- **Use nomes descritivos:** `calcularValorMercado()` é melhor que `calcular()`
- **Mantenha métodos pequenos:** Cada método deve ter uma responsabilidade específica
- **Valide sempre:** Verifique parâmetros antes de usar
- **Use const/readonly:** Para valores que não devem mudar
- **Documente seu código:** Use comentários para explicar lógicas complexas
- **Teste incrementalmente:** Teste cada funcionalidade conforme implementa

### 8.8. Ordem Recomendada de Implementação
1. **Fase 1:** Classes básicas (Artista, Dimensao, ObraDeArte e subclasses)
2. **Fase 2:** Enums e exceções customizadas
3. **Fase 3:** Classes Cliente e Avaliacao
4. **Fase 4:** Classe Exposicao com validações
5. **Fase 5:** Classe Venda com cálculos financeiros
6. **Fase 6:** Classe Galeria com operações principais
7. **Fase 7:** Funcionalidades avançadas (RelatorioGaleria)
8. **Fase 8:** Testes e refinamentos
