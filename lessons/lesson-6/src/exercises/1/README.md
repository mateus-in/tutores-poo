# Resolução: Sistema de Biblioteca com Usuários

## 📋 Visão Geral da Solução

Este exercício demonstra os conceitos fundamentais de POO através de um sistema prático de biblioteca. A solução está organizada em **6 classes** que trabalham em conjunto para gerenciar usuários, livros e empréstimos.

---

## 🏗️ Estrutura da Solução

### 1. **Classe Abstrata `Usuario`**
```typescript
export abstract class Usuario {
  // Propriedades comuns a todos os usuários
  // Métodos abstratos que devem ser implementados pelas subclasses
  // Métodos concretos compartilhados
}
```

**📍 Conceitos aplicados:**
- **Abstração:** Define o "contrato" que todos os usuários devem seguir
- **Encapsulamento:** Controla o acesso aos empréstimos ativos
- **Herança:** Serve como base para os tipos específicos de usuários

**🔧 Implementação:**
- `abstract calcularPrazoEmprestimo(): number` - Cada tipo tem seu prazo
- `abstract obterLimiteEmprestimos(): number` - Cada tipo tem seu limite
- `podeEmprestar(): boolean` - Validação comum para todos

### 2. **Classes Concretas de Usuários**

#### **`Estudante`**
- **Prazo:** 7 dias
- **Limite:** 3 livros
- **Propriedade específica:** `curso`

#### **`Professor`**
- **Prazo:** 30 dias
- **Limite:** 10 livros
- **Propriedade específica:** `departamento`

#### **`Funcionario`**
- **Prazo:** 15 dias
- **Limite:** 5 livros
- **Propriedade específica:** `setor`

**📍 Conceitos aplicados:**
- **Herança:** Todas herdam de `Usuario`
- **Polimorfismo:** Cada uma implementa os métodos abstratos de forma diferente
- **Especialização:** Cada classe adiciona propriedades específicas

### 3. **Classe `Livro`**
```typescript
export class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public isbn: string,
    public disponivel: boolean = true
  ) {}
}
```

**📍 Conceitos aplicados:**
- **Encapsulamento:** Controla o estado de disponibilidade
- **Responsabilidade única:** Gerencia apenas informações do livro

**🔧 Métodos principais:**
- `emprestar(): boolean` - Marca como indisponível
- `devolver(): void` - Marca como disponível
- `obterInformacoes(): string` - Retorna dados formatados

### 4. **Classe `Emprestimo`**
```typescript
export class Emprestimo {
  constructor(
    public usuario: Usuario,
    public livro: Livro,
    public dataEmprestimo: Date = new Date()
  ) {
    // Calcula automaticamente a data de devolução
  }
}
```

**📍 Conceitos aplicados:**
- **Composição:** Contém referências para `Usuario` e `Livro`
- **Polimorfismo:** Usa `usuario.calcularPrazoEmprestimo()` sem saber o tipo específico
- **Responsabilidade única:** Gerencia apenas a lógica do empréstimo

**🔧 Funcionalidades:**
- Calcula data de devolução automaticamente
- Calcula multa por atraso (R$ 2 por dia)
- Verifica se está atrasado

### 5. **Classe `Biblioteca`**
```typescript
export class Biblioteca {
  private usuarios: Usuario[] = [];
  private livros: Livro[] = [];
  private emprestimos: Emprestimo[] = [];
}
```

**📍 Conceitos aplicados:**
- **Encapsulamento:** Listas privadas, acesso controlado via métodos
- **Agregação:** Gerencia coleções de outras classes
- **Polimorfismo:** Trabalha com `Usuario[]` sem distinguir tipos específicos

**🔧 Operações principais:**
- `realizarEmprestimo()` - Valida e cria empréstimo
- `realizarDevolucao()` - Processa devolução e calcula multa
- `listarEmprestimosAtivos()` - Relatórios simples

---

## 🎯 Como os Conceitos POO são Aplicados

### **1. Herança**
```
Usuario (abstrata)
├── Estudante
├── Professor
└── Funcionario
```

**Por que usar herança aqui?**
- Todos os usuários têm propriedades comuns (`nome`, `id`, `email`)
- Todos precisam calcular prazo e limite, mas de forma diferente
- Evita repetição de código

### **2. Polimorfismo**
```typescript
// A biblioteca não precisa saber se é Estudante, Professor ou Funcionario
const prazo = usuario.calcularPrazoEmprestimo(); // Chama o método correto automaticamente
```

**Vantagem:**
- Código flexível: pode adicionar novos tipos de usuários sem modificar a `Biblioteca`
- Tratamento uniforme: todos os usuários são tratados da mesma forma

### **3. Encapsulamento**
```typescript
// Atributos privados na Biblioteca
private usuarios: Usuario[] = [];

// Acesso controlado via métodos públicos
public adicionarUsuario(usuario: Usuario): void
```

**Benefícios:**
- Dados protegidos contra acesso direto
- Validações centralizadas nos métodos
- Flexibilidade para mudanças internas

### **4. Abstração**
```typescript
abstract class Usuario {
  abstract calcularPrazoEmprestimo(): number; // Força implementação
}
```

**Objetivo:**
- Define "o que" deve ser feito, não "como"
- Garante consistência entre as subclasses
- Permite polimorfismo seguro

---

## 🔍 Pontos de Aprendizagem

### **1. Por que usar classe abstrata?**
- `Usuario` nunca deve ser instanciada diretamente
- Força a implementação de métodos essenciais
- Permite compartilhar código comum

### **2. Como o polimorfismo funciona na prática?**
```typescript
// Este código funciona para qualquer tipo de usuário:
const emprestimo = new Emprestimo(usuario, livro);
// Internamente chama usuario.calcularPrazoEmprestimo()
// Mas o resultado varia conforme o tipo real do usuário
```

### **3. Por que encapsular as listas?**
- Impede modificações acidentais
- Permite validações antes de adicionar/remover
- Facilita manutenção futura

### **4. Como adicionar um novo tipo de usuário?**
```typescript
class Visitante extends Usuario {
  calcularPrazoEmprestimo(): number { return 3; }
  obterLimiteEmprestimos(): number { return 1; }
}
```
- Nenhuma modificação necessária em outras classes!
- Isso é o poder do polimorfismo
