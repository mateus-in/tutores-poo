# Projetos de Programação Orientada a Objetos (POO)

## 📚 Sobre esta Coleção

Esta coleção contém **6 projetos práticos** desenvolvidos especificamente para o ensino de **Programação Orientada a Objetos** em cursos técnicos. Cada projeto aplica os conceitos fundamentais da POO de forma progressiva e contextualizada, utilizando **TypeScript** como linguagem de implementação.

---

## 🎯 Objetivos de Aprendizagem

### 📖 Conceitos Fundamentais da POO
- **Herança:** Criação de hierarquias de classes com reutilização de código
- **Polimorfismo:** Comportamentos diferentes para métodos com mesmo nome
- **Encapsulamento:** Controle de acesso a atributos e métodos
- **Abstração:** Definição de contratos e interfaces claras

### 🛠️ Habilidades Técnicas
- Implementação de classes abstratas e concretas
- Criação e uso de enums para padronização
- Tratamento de exceções customizadas
- Validação de regras de negócio
- Estruturas de dados e coleções
- Relatórios e análises de dados

---

## 📋 Lista de Projetos

### 🎨 [1. Sistema de Salão de Beleza](1.salao/)
**Setor:** Serviços | **Foco:** Agendamentos e Profissionais

- **Herança:** `Servico` → `Corte`, `Manicure`, `Hidratacao`
- **Polimorfismo:** Cálculo de preços específicos por tipo de serviço
- **Destaque:** Gestão de tempo, agendamentos e controle de estoque
- **Ideal para:** Introdução aos conceitos de POO

---

### 🚛 [2. Sistema de Gestão de Frota](2.frota/)
**Setor:** Logística | **Foco:** Veículos e Motoristas

- **Herança:** `Veiculo` → `Carro`, `Caminhao`, `Van`
- **Polimorfismo:** Cálculo de custos específicos por tipo de veículo
- **Destaque:** Validação de CNH e compatibilidade veículo-motorista
- **Ideal para:** Aprender validações complexas e regras específicas

---

### ✈️ [3. Sistema de Companhia Aérea](3.companhia/)
**Setor:** Transporte | **Foco:** Voos e Passageiros

- **Herança:** `Passageiro` → `PassageiroComum`, `PassageiroVIP`, `PassageiroCrianca`
- **Polimorfismo:** Preços e regras de bagagem específicas por tipo
- **Destaque:** Controle de assentos com Maps e validação de capacidade
- **Ideal para:** Estruturas de dados avançadas e controle de estado

---

### 🖼️ [4. Sistema de Galeria de Arte](4.galeria/)
**Setor:** Cultural | **Foco:** Obras de Arte e Exposições

- **Herança:** `ObraDeArte` → `Pintura`, `Escultura`, `Fotografia`
- **Polimorfismo:** Valorização específica por tipo de obra
- **Destaque:** Estados complexos e transições de status
- **Ideal para:** Lógicas de negócio elaboradas e controle de estados

---

### 🏨 [5. Sistema de Reserva de Hotéis](5.hoteis/)
**Setor:** Hospitalidade | **Foco:** Quartos e Reservas

- **Herança:** `Quarto` → `QuartoSimples`, `QuartoFamiliar`, `Suite`
- **Polimorfismo:** Cálculos de custo específicos por tipo de quarto
- **Destaque:** Validações temporais complexas e controle de disponibilidade
- **Ideal para:** Manipulação de datas e períodos

---

### 📱 [6. Sistema de Loja de Eletrônicos](6.eletronicos/)
**Setor:** E-commerce | **Foco:** Produtos e Clientes

- **Herança Dupla:** `Produto` + `Cliente` com suas respectivas subclasses
- **Polimorfismo Duplo:** Cálculo de fretes E descontos específicos
- **Destaque:** Sistema mais completo com herança em duas hierarquias
- **Ideal para:** Consolidação avançada de todos os conceitos
