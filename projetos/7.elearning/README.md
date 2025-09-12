# Projeto de Programação Orientada a Objetos: Sistema de E-learning

## 1. Objetivo do Projeto

Desenvolver um sistema completo para gerenciar uma plataforma de ensino online (e-learning) utilizando **TypeScript** e os conceitos fundamentais de **Programação Orientada a Objetos (POO)**. O sistema deve controlar cursos, alunos, instrutores, aulas e avaliações, aplicando herança para diferentes tipos de conteúdo e usuários, de forma prática e didática.

---

## 2. Estrutura do Sistema

### 2.1. Classes Principais

#### **`Usuario`** (Classe Abstrata)
- **Descrição:** Define o contrato base para todos os usuários da plataforma.
- **Atributos:**
  - `id` (string)
  - `nome` (string)
  - `email` (string)
  - `senha` (string)
  - `dataRegistro` (Date)
  - `status` (StatusUsuario)
- **Métodos:**
  - `abstract calcularProgresso(): number`
  - `login(email: string, senha: string): boolean`
  - `atualizarPerfil(dados: DadosUsuario): void`

#### **`Aluno`, `Instrutor`, `Administrador`** (Classes Concretas)
- **Descrição:** Tipos específicos de usuários que herdam de `Usuario`.
- **Atributos específicos:**
  - `Aluno` possui `cursosInscritos` (Inscricao[]) e `certificados` (Certificado[])
  - `Instrutor` possui `especialidades` (string[]) e `cursosMinistrados` (Curso[])
  - `Administrador` possui `permissoes` (string[]) e `nivelAcesso` (NivelAcesso)
- **Métodos:**
  - Implementam `calcularProgresso()` com lógicas específicas por tipo
  - Métodos específicos para cada tipo de usuário

#### **`Conteudo`** (Classe Abstrata)
- **Descrição:** Define o contrato base para todos os tipos de conteúdo.
- **Atributos:**
  - `id` (string)
  - `titulo` (string)
  - `descricao` (string)
  - `duracaoMinutos` (number)
  - `ordem` (number)
- **Métodos:**
  - `abstract calcularTempoEstimado(): number`
  - `abstract validarConteudo(): boolean`

#### **`VideoAula`, `TextoAula`, `QuizAula`, `AtividadePratica`** (Classes Concretas)
- **Descrição:** Tipos específicos de conteúdo que herdam de `Conteudo`.
- **Atributos específicos:**
  - `VideoAula` possui `urlVideo` (string) e `qualidade` (QualidadeVideo)
  - `TextoAula` possui `conteudoTexto` (string) e `recursos` (string[])
  - `QuizAula` possui `perguntas` (Pergunta[]) e `notaMinima` (number)
  - `AtividadePratica` possui `enunciado` (string) e `criteriosAvaliacao` (string[])
- **Métodos:**
  - Implementam métodos abstratos com lógicas específicas por tipo

#### **`Curso`**
- **Descrição:** Representa um curso na plataforma.
- **Atributos:**
  - `id` (string)
  - `titulo` (string)
  - `descricao` (string)
  - `instrutor` (Instrutor)
  - `categoria` (CategoriaCurso)
  - `nivel` (NivelCurso)
  - `preco` (number)
  - `conteudos` (Conteudo[])
  - `inscricoes` (Inscricao[])
  - `avaliacoes` (AvaliacaoCurso[])
- **Métodos:**
  - `calcularDuracaoTotal(): number`
  - `calcularMediaAvaliacoes(): number`
  - `adicionarConteudo(conteudo: Conteudo): void`
  - `obterTaxaConclusao(): number`

#### **`PlataformaElearning`** (Classe Principal)
- **Descrição:** Gerencia toda a plataforma de ensino.
- **Atributos:**
  - `nome` (string)
  - `usuarios` (Usuario[])
  - `cursos` (Curso[])
  - `inscricoes` (Inscricao[])
  - `certificados` (Certificado[])
- **Métodos:**
  - `cadastrarUsuario(usuario: Usuario): void`
  - `criarCurso(curso: Curso): void`
  - `inscreverAluno(aluno: Aluno, curso: Curso): boolean`
  - `buscarCursos(filtros: FiltrosCurso): Curso[]`
  - `gerarCertificado(inscricao: Inscricao): Certificado`

---

### 2.2. Classes de Apoio

#### **`Inscricao`**
- **Descrição:** Representa a inscrição de um aluno em um curso.
- **Atributos:**
  - `id` (string)
  - `aluno` (Aluno)
  - `curso` (Curso)
  - `dataInscricao` (Date)
  - `status` (StatusInscricao)
  - `progresso` (ProgressoAula[])
  - `notaFinal` (number)
- **Métodos:**
  - `calcularProgressoGeral(): number`
  - `marcarAulaConcluida(conteudoId: string): void`
  - `calcularTempoGasto(): number`
  - `podeReceberCertificado(): boolean`

#### **`ProgressoAula`**
- **Descrição:** Controla o progresso do aluno em cada aula.
- **Atributos:**
  - `conteudoId` (string)
  - `concluida` (boolean)
  - `tempoGasto` (number)
  - `nota` (number)
  - `tentativas` (number)
  - `dataUltimoAcesso` (Date)
- **Métodos:**
  - `marcarConcluida(): void`
  - `adicionarTempo(minutos: number): void`
  - `registrarTentativa(): void`

#### **`AvaliacaoCurso`**
- **Descrição:** Representa uma avaliação feita por um aluno sobre um curso.
- **Atributos:**
  - `id` (string)
  - `aluno` (Aluno)
  - `curso` (Curso)
  - `nota` (number)
  - `comentario` (string)
  - `dataAvaliacao` (Date)
- **Métodos:**
  - `validarNota(): boolean`
  - `editarAvaliacao(nota: number, comentario: string): void`

#### **`Certificado`**
- **Descrição:** Representa um certificado de conclusão de curso.
- **Atributos:**
  - `id` (string)
  - `aluno` (Aluno)
  - `curso` (Curso)
  - `dataEmissao` (Date)
  - `codigo` (string)
  - `cargaHoraria` (number)
- **Métodos:**
  - `gerarCodigo(): string`
  - `validarCertificado(): boolean`

#### **`Pergunta`**
- **Descrição:** Representa uma pergunta de quiz.
- **Atributos:**
  - `id` (string)
  - `enunciado` (string)
  - `opcoes` (string[])
  - `respostaCorreta` (number)
  - `explicacao` (string)
  - `peso` (number)
- **Métodos:**
  - `verificarResposta(resposta: number): boolean`
  - `calcularPontuacao(resposta: number): number`

#### **`RelatorioPlataforma`**
- **Descrição:** Gera relatórios da plataforma.
- **Métodos:**
  - `calcularReceitaTotal(): number`
  - `obterCursosMaisPopulares(): Curso[]`
  - `calcularTaxaEvasao(): number`
  - `listarAlunosAtivos(): Aluno[]`
  - `gerarRelatorioInstrutor(instrutor: Instrutor): RelatorioInstrutor`

---

### 2.3. Enums

#### **`StatusUsuario`**
- **Valores:** `ATIVO`, `INATIVO`, `BLOQUEADO`, `PENDENTE`

#### **`StatusInscricao`**
- **Valores:** `ATIVA`, `CONCLUIDA`, `CANCELADA`, `SUSPENSA`

#### **`CategoriaCurso`**
- **Valores:** `TECNOLOGIA`, `NEGOCIOS`, `DESIGN`, `MARKETING`, `IDIOMAS`, `OUTROS`

#### **`NivelCurso`**
- **Valores:** `INICIANTE`, `INTERMEDIARIO`, `AVANCADO`

#### **`QualidadeVideo`**
- **Valores:** `SD_480P`, `HD_720P`, `FULL_HD_1080P`, `UHD_4K`

#### **`NivelAcesso`**
- **Valores:** `BASICO`, `MODERADOR`, `ADMINISTRADOR`, `SUPER_ADMIN`

---

## 3. Regras de Negócio

### 3.1. Inscrições e Acesso
- Aluno só pode se inscrever em cursos ativos
- Instrutor só pode criar cursos em suas áreas de especialidade
- Acesso ao conteúdo só é liberado após confirmação da inscrição
- Progresso é salvo automaticamente a cada interação

### 3.2. Avaliações e Certificados
- Certificado só é emitido com progresso mínimo de 80%
- Quizzes podem ter múltiplas tentativas (configurável por curso)
- Nota final é calculada pela média ponderada de todas as atividades
- Avaliações de curso só podem ser feitas por alunos inscritos

### 3.3. Conteúdo e Progressão
- Aulas devem seguir ordem sequencial (configurável)
- Tempo estimado varia por tipo de conteúdo:
  - **Vídeo:** Duração do vídeo + 20% para pausas
  - **Texto:** 200 palavras por minuto de leitura
  - **Quiz:** 2 minutos por pergunta
  - **Atividade:** Tempo definido pelo instrutor

### 3.4. Usuários e Permissões
- Cada tipo de usuário tem permissões específicas:
  - **Aluno:** Visualizar cursos, fazer inscrições, avaliar
  - **Instrutor:** Criar cursos, gerenciar conteúdo, ver relatórios
  - **Administrador:** Gerenciar usuários, aprovar cursos, relatórios gerais

---

## 4. Conceitos de POO Aplicados

### 4.1. **Herança**
- Classe abstrata `Usuario` é herdada por `Aluno`, `Instrutor` e `Administrador`
- Classe abstrata `Conteudo` é herdada por diferentes tipos de aula
- Cada subclasse implementa comportamentos específicos

### 4.2. **Polimorfismo**
- Método `calcularProgresso()` é implementado diferentemente para cada tipo de usuário
- Método `calcularTempoEstimado()` varia conforme o tipo de conteúdo
- Permite tratar usuários e conteúdos de forma uniforme com comportamentos específicos

### 4.3. **Encapsulamento**
- Atributos privados com métodos públicos para acesso controlado
- Validações internas nas classes para manter consistência dos dados
- Controle de acesso baseado em permissões

### 4.4. **Abstração**
- Interfaces claras entre as classes principais
- Métodos abstratos definem contratos que devem ser implementados
- Separação de responsabilidades entre as classes

---

## 5. Tratamento de Exceções

### 5.1. Exceções Customizadas
- **`CursoIndisponivelException`:** Tentativa de inscrição em curso inativo
- **`PermissaoNegadaException`:** Usuário sem permissão para ação específica
- **`ProgressoInsuficienteException`:** Tentativa de certificação sem requisitos
- **`ConteudoInvalidoException`:** Conteúdo não atende aos critérios mínimos

### 5.2. Validações Importantes
- Verificar permissões do usuário antes de executar ações
- Validar progresso mínimo antes de emitir certificados
- Confirmar que curso está ativo antes de permitir inscrições
- Validar dados obrigatórios em todas as operações

---

## 6. Funcionalidades do Sistema

### 6.1. Gestão de Usuários
- Cadastrar diferentes tipos de usuários com permissões específicas
- Controlar acesso baseado em níveis de autorização
- Manter perfis atualizados e histórico de atividades
- Gerenciar status e bloqueios de contas

### 6.2. Gestão de Cursos
- Criar cursos com diferentes tipos de conteúdo
- Organizar aulas em sequência lógica
- Definir critérios de avaliação e aprovação
- Controlar preços e disponibilidade

### 6.3. Sistema de Aprendizagem
- Acompanhar progresso individual de cada aluno
- Permitir múltiplas tentativas em quizzes
- Salvar automaticamente o progresso das aulas
- Calcular tempo gasto e estimativa de conclusão

### 6.4. Avaliações e Certificação
- Aplicar diferentes tipos de avaliação (quiz, atividades)
- Calcular notas finais com critérios específicos
- Emitir certificados automaticamente para aprovados
- Permitir avaliação dos cursos pelos alunos

### 6.5. Relatórios e Analytics
- Gerar relatórios de performance por curso
- Analisar taxa de conclusão e evasão
- Acompanhar receita e popularidade dos cursos
- Fornecer insights para instrutores e administradores

---

## 7. Exemplo de Implementação

```typescript
// Exemplo de uso do sistema
const plataforma = new PlataformaElearning("TechLearn");

// Cadastrar usuários
const instrutor = new Instrutor("001", "Prof. João", "joao@email.com", "senha123", ["JavaScript", "TypeScript"]);
const aluno = new Aluno("002", "Maria Silva", "maria@email.com", "senha456");
plataforma.cadastrarUsuario(instrutor);
plataforma.cadastrarUsuario(aluno);

// Criar curso com diferentes tipos de conteúdo
const curso = new Curso("C001", "JavaScript Avançado", "Curso completo de JS", instrutor, CategoriaCurso.TECNOLOGIA, NivelCurso.AVANCADO, 199.90);

const videoAula = new VideoAula("V001", "Introdução ao JavaScript", "Conceitos básicos", 45, 1, "https://video.com/intro", QualidadeVideo.HD_720P);
const quiz = new QuizAula("Q001", "Quiz - Fundamentos", "Teste seus conhecimentos", 15, 2, [pergunta1, pergunta2], 7.0);
const atividade = new AtividadePratica("A001", "Projeto Prático", "Desenvolva uma aplicação", 120, 3, "Criar um sistema de tarefas", ["Funcionalidade", "Código limpo"]);

curso.adicionarConteudo(videoAula);
curso.adicionarConteudo(quiz);
curso.adicionarConteudo(atividade);
plataforma.criarCurso(curso);

// Inscrever aluno
if (plataforma.inscreverAluno(aluno, curso)) {
    console.log("Aluno inscrito com sucesso!");
    
    // Simular progresso
    const inscricao = plataforma.buscarInscricao(aluno.id, curso.id);
    inscricao.marcarAulaConcluida("V001");
    inscricao.marcarAulaConcluida("Q001");
    
    console.log(`Progresso: ${inscricao.calcularProgressoGeral()}%`);
    
    // Gerar certificado se elegível
    if (inscricao.podeReceberCertificado()) {
        const certificado = plataforma.gerarCertificado(inscricao);
        console.log(`Certificado emitido: ${certificado.codigo}`);
    }
}
```

---

## 8. Dicas de Implementação

### 8.1. Por onde começar?
1. **Comece pelas classes básicas:** Implemente primeiro as classes `Usuario` e `Conteudo` abstratas
2. **Teste cada classe individualmente:** Crie objetos simples e teste os métodos básicos
3. **Implemente a herança:** Faça os tipos específicos herdarem das classes abstratas
4. **Adicione complexidade gradualmente:** Depois implemente `Curso`, `Inscricao` e `PlataformaElearning`

### 8.2. Implementando a Herança
- Use `abstract` para definir métodos que devem ser implementados pelas subclasses
- Use `protected` para atributos que podem ser acessados pelas subclasses
- Use `super()` no construtor das subclasses para chamar o construtor da classe pai
- Cada tipo deve implementar seus métodos abstratos com lógica específica

### 8.3. Trabalhando com Arrays e Coleções
- Use `push()` para adicionar usuários, cursos e conteúdos às listas
- Use `find()` para buscar itens específicos por ID ou critérios
- Use `filter()` para buscar múltiplos itens que atendem condições
- Use `map()` para transformar dados (ex: calcular estatísticas)

### 8.4. Implementando Validações
- Valide permissões do usuário antes de executar ações
- Verifique status dos cursos antes de permitir inscrições
- Valide progresso mínimo antes de emitir certificados
- Use validações no construtor para dados obrigatórios

### 8.5. Criando Exceções Customizadas
- Crie classes de exceção que estendem `Error`
- Use nomes descritivos (ex: `CursoIndisponivelException`)
- Trate exceções com `try-catch` onde necessário
- Forneça mensagens de erro claras e específicas

### 8.6. Implementando Enums
- Use enums para padronizar status, categorias e níveis
- Facilita validações e evita erros de digitação
- Torna o código mais legível e manutenível
- Use em condicionais para controlar fluxo

### 8.7. Dicas Gerais
- **Use nomes descritivos:** `calcularProgressoGeral()` é melhor que `calcular()`
- **Mantenha métodos pequenos:** Cada método deve ter uma responsabilidade específica
- **Valide sempre:** Verifique parâmetros antes de usar
- **Use const/readonly:** Para valores que não devem mudar
- **Documente seu código:** Use comentários para explicar lógicas complexas
- **Teste incrementalmente:** Teste cada funcionalidade conforme implementa

### 8.8. Ordem Recomendada de Implementação
1. **Fase 1:** Classes abstratas (Usuario, Conteudo) e enums
2. **Fase 2:** Subclasses de Usuario (Aluno, Instrutor, Administrador)
3. **Fase 3:** Subclasses de Conteudo (VideoAula, TextoAula, QuizAula, AtividadePratica)
4. **Fase 4:** Classes de apoio (Pergunta, ProgressoAula)
5. **Fase 5:** Classe Curso com gerenciamento de conteúdo
6. **Fase 6:** Classe Inscricao com controle de progresso
7. **Fase 7:** Classe PlataformaElearning com operações principais
8. **Fase 8:** Classes avançadas (AvaliacaoCurso, Certificado, RelatorioPlataforma)
9. **Fase 9:** Exceções customizadas e validações
10. **Fase 10:** Testes e refinamentos

---

## 9. Desafios Extras (Opcionais)

### 9.1. Funcionalidades Avançadas
- Sistema de badges/conquistas para motivar alunos
- Fórum de discussão por curso
- Sistema de mentoria entre alunos
- Recomendação inteligente de cursos

### 9.2. Melhorias Técnicas
- Cache de dados para melhor performance
- Sistema de notificações em tempo real
- API para integração com outras plataformas
- Sistema de backup e recuperação de dados

### 9.3. Analytics Avançados
- Análise preditiva de evasão
- Recomendações personalizadas por perfil
- Heatmap de interação com conteúdo
- Análise de sentimento das avaliações
