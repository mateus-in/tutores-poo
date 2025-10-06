Checklist do Projeto

Grupo 1: Sistema para Gerenciamento de Salão de Beleza

Equipe: Carine, Gabriel Fernatti, Julimar, Maria Gabriely, Wendel

*Ordem Recomendada de Implementação*

    Fase 1: Classes básicas (Cliente, Profissional, Servico e subclasses)
    Fase 2: Enums e exceções customizadas
    Fase 3: Classe Agendamento com validações
    Fase 4: Classe SalaoDeBeleza com operações básicas
    Fase 5: Classes de apoio (Pagamento, Produto, Promocao)
    Fase 6: Funcionalidades avançadas (Relatórios, HorarioFuncionamento)
    Fase 7: Testes e refinamentos

# Funcionalidades do sistema:
 - *Gestão de clientes*
   - [X] Cadastrar novos clientes com ficha técnica
   - [X] Consultar histórico de serviços realizados
   - [X] Atualizar informações e preferências
        
 - *Gestão de agendamentos*
   - [X]  Criar novos  agendamentos verificando disponibilidade
   - [X] Consultar agenda por profissional ou data
   - [X] Cancelar ou reagendar compromissos
   - [X] Finalizar atendimentos e processar pagamentos
        
 - *Controle financeiro*
   - [ ] Processar diferentes formas de pagamento
   - [ ] Gerar relatórios de faturamento por período
   - [ ] Calcular ticket médio e identificar tendências
   - [ ] Controlar promoções e descontos
         
- *Gestão de estoque*
  - [ ] Controlar produtos utilizados nos serviços
  - [ ] Alertar sobre necessidade de reposição
  - [ ] Calcular custos dos produtos por serviço

# Classes principais:
---
*Cliente*
  - [X] Classe
---
*Ficha Técnica*
  - [X] Classe
---            
*Profissional*
  - [X] Classe
  - [X] Método temEspecialidade
  - [X] Método estaDisponivel
---               
*Serviço*
  - [X] Classe abstrata
  - [X] Método abstrato calcularPrecoFinal
        
  Regras de Negócios Serviços e Preços:
  
  - Cada tipo de serviço calcula seu preço de forma específica
  - Promoções ativas são aplicadas automaticamente no cálculo final
---        
*Corte (implementa Servico)*
- [X] Classe
      
  Regras de Negócios Serviços e Preços:
 - [X] Promoções ativas são aplicadas automaticamente no cálculo final
 - [X] Cada tipo de serviço calcula seu preço de forma específica:
   
    ❗ Corte: Preço fixo
 ---      
*Manicure (implementa Servico)*
- [X] Classe
      
  Regras de Negócios Serviços e Preços:
 - [X] Promoções ativas são aplicadas automaticamente no cálculo final
 - [X] Cada tipo de serviço calcula seu preço de forma específica:
   
   ❗ Manicure: Preço fixo + adicional se for pedicure
 ---
 *Hidratação (implementa Servico)*  
- [X] Classe
- [X] Atributo específico tipoProduto
- [X] Promoções ativas são aplicadas automaticamente no cálculo final

  Regras de Negócios Serviços e Preços:
 - [X] Cada tipo de serviço calcula seu preço de forma específica:
       
   ❗ Hidratação: Preço base + adicional baseado no tipo de produto
---        
*Agendamento*
- [X] Classe
- [X] Método calcularDuracaoTotal
- [X] Método ValorTotal
- [X] Método adicionarServico
      
- Regras de negócio Agendamento:
  - [X] Um profissional não pode ter dois agendamentos simultâneos. Validações importantes: verificar disponibilidade do profissional antes de agendar. //*adicionado na classe SalaoDeBeleza - consultarDisponibilidade
  - [ ] Agendamentos só podem ser feitos durante o horário de funcionamento. Validações importantes: validar se o horário está dentro do funcionamento do salão.
  - [X] Cliente deve estar cadastrado antes de agendar. Validações importantes: validar dados obrigatórios (nome, telefone, etc).
  - [X] Profissional deve ter a especialidade necessária para o serviço
   
  - [X] Observação: verificar disponibilidade de produtos antes de confirmar serviços (classe de apoio Produto)

- Exceções customizadas:
  - [X] AgendamentoInvalidoException: Conflito de horários ou profissional sem especialidade
  - [X] ClienteNaoCadastradoException: Tentativa de agendar para cliente inexistente
---           
- [X] Salão de Beleza (classe principal)
  - [X] Método cadastrarCliente
  - [X] Método agendarServico
  - [X] Método finalizarAtendimento
  - [X] Método cancelarAgendamento
  - [X] Método consultarDisponibilidade
---     
# Classes de apoio:


*Pagamento*
- [X] Classe
  - [ ] Método processar. Regras de Negócios:❗Pagamento deve ser processado antes da finalização do atendimento.
  - [ ] Método calcularTroco. Regras de Negócios: para pagamento em dinheiro, calcular troco automaticamente.
        
- Regras de Negócios Pagamentos:
  - [ ] Registrar método e status do pagamento para controle financeiro
       
- Exceções customizadas:
  - [ ] PagamentoInvalidoException: Erro no processamento do pagamento
---
*Produto*
- [x] Classe
  - [x] Método temEstoqueSuficiente - Regras de Negócio: verificar disponibilidade de produtos antes de confirmar serviços
  - [X] Método consumir  - Regras de Negócio: consumir produtos do estoque após finalização do atendiment
        
  ❗ Dúvida: objetivo do método consumir é subtrair do estoque a quantidade do produto que for consumido?

  - [x] Método precisaReposicao - Regras de Negócio: alertar quando estoque atingir nível mínimo
        
  ❗ Dúvida: ao cadastrar o produto deve ser informado o tipo (premium, standard, econômico)?

- Exceções customizadas:
  - [X] EstoqueInsuficienteException: Produtos em falta para realizar o serviço
---        
*Promoção*
- [X] Classe
  - [X] Método estaAtiva
  - [X] Método aplicavelAoServico
  - [X] Método calcularDesconto
---        
*Horário de Funcionamento*
- [X] Classe
  - [X] Método estaAberto
  - [X] Método obterHorariosDisponiveis
---     
*Relatório Financeiro*
- [X] Classe
  - [X] Método calcularFaturamentoTotal
  - [X] Método obterServicosMaisPopulares
  - [X] calcularTicketMedio
  - [X] listarClientesFrequentes
---     
*Exceções Customizadas*
- [ ] Criando Exceções Customizadas
      
    Crie classes de exceção que estendem Error

    Use nomes descritivos para as exceções (ex: AgendamentoInvalidoException)

   ❗S Trate exceções com try-catch onde necessário

    Use instanceof para identificar tipos específicos de erro
---
# Enums:

- [X] Status do agendamento (agendado, em andamento, finalizado, cancelado)
- [X] Método de pagamento (dinheiro, cartão de débito, cartão de crédito, pix)
- [X] Status do pagamento (pendente, aprovado, recusado)
- [X] Dias da Semana 