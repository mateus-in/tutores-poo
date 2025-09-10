# Exercícios

## Exercício 1: Sistema de Biblioteca com Usuários

### Objetivo
Criar um sistema simples de biblioteca que gerencia diferentes tipos de usuários e empréstimos de livros, aplicando conceitos básicos de herança e polimorfismo.

### Descrição
Você deve criar um sistema para uma biblioteca que possui:
- **Usuários** de diferentes tipos (Estudante, Professor, Funcionário)
- **Livros** com informações básicas
- **Empréstimos** que conectam usuários e livros
- **Biblioteca** que gerencia tudo

### Requisitos

#### 1. Classe abstrata `Usuario`
- Propriedades: `nome`, `id`, `email`
- Método abstrato: `calcularPrazoEmprestimo(): number`
- Método concreto: `podeEmprestar(): boolean`

#### 2. Classes concretas que herdam de `Usuario`
- **`Estudante`**: prazo de 7 dias, máximo 3 livros
- **`Professor`**: prazo de 30 dias, máximo 10 livros  
- **`Funcionario`**: prazo de 15 dias, máximo 5 livros

#### 3. Classe `Livro`
- Propriedades: `titulo`, `autor`, `isbn`, `disponivel`
- Métodos: `emprestar()`, `devolver()`

#### 4. Classe `Emprestimo`
- Propriedades: `usuario`, `livro`, `dataEmprestimo`, `dataDevolucao`
- Método: `calcularMulta(): number`

#### 5. Classe `Biblioteca`
- Listas: `usuarios[]`, `livros[]`, `emprestimos[]`
- Métodos: `adicionarUsuario()`, `adicionarLivro()`, `realizarEmprestimo()`, `realizarDevolucao()`

### Funcionalidades
1. Cadastrar usuários de diferentes tipos
2. Cadastrar livros
3. Realizar empréstimos (validando regras por tipo de usuário)
4. Devolver livros
5. Calcular multas por atraso
6. Listar empréstimos ativos

### Conceitos POO
- **Herança**: Usuario → Estudante, Professor, Funcionario
- **Polimorfismo**: Cada tipo calcula prazo diferente
- **Encapsulamento**: Validações internas
- **Abstração**: Classe abstrata Usuario
