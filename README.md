# 🤖 DIO Agent - Especialização em Análise Defensiva de Vulnerabilidades

> Seu mentor com Inteligência Artificial para aprender mais e melhor na [DIO](https://dio.me), agora com especialização em **Segurança da Informação e Análise Defensiva de Vulnerabilidades**.

O **DIO Agent** é um mentor de IA que acompanha estudantes em sua jornada de formação em tecnologia. Nesta versão evoluída, o agente foi aprimorado para ensinar boas práticas de segurança, análise de riscos e correção de falhas em código de maneira pedagógica e defensiva, sem entregar respostas prontas.

---

## 🛡️ Especialização do Agente: Análise Defensiva de Vulnerabilidades

### O que é e por que foi escolhida?
A segurança de aplicações (AppSec) e o desenvolvimento seguro tornaram-se competências indispensáveis para qualquer pessoa desenvolvedora. No entanto, muitos cursos apenas ensinam sintaxe básica sem alertar para vulnerabilidades comuns (como SQL Injection, autenticação insegura e falta de sanitização).

A especialização adicionada transforma o DIO Agent em um **mentor de segurança defensiva**:
- **Ensino orientado ao raciocínio:** O agente não apenas aponta falhas ou entrega correções prontas. Ele pergunta o contexto da aplicação (ambiente de estudos vs. produção), explica os impactos (confidencialidade, integridade e disponibilidade) e orienta a pessoa estudante a construir a solução segura.
- **Postura defensiva e ética:** Promove práticas seguras alinhadas aos padrões de mercado (OWASP, boas práticas de criptografia e parâmetros preparados).

---

## 📁 Arquivos Criados e Alterados

| Tipo | Arquivo | Descrição da Mudança |
| :--- | :--- | :--- |
| **Skill** | [`skills/vulnerability-analysis/SKILL.md`](skills/vulnerability-analysis/SKILL.md) | **[Criado]** Guia passo a passo com instruções, critérios de ativação, perguntas de contexto e método didático para guiar análises de vulnerabilidades. |
| **Conhecimento** | [`agent/knowledge/security-basics.md`](agent/knowledge/security-basics.md) | **[Criado]** Base conceitual contendo definições de vulnerabilidade, ameaça, risco, tríade CIA e princípios de segurança defensiva. |
| **Persona** | [`agent/persona.md`](agent/persona.md) | **[Alterado]** Incorporada a postura de mentor em segurança, instruindo o agente a fazer perguntas de contexto e orientar boas práticas defensivas. |
| **Orquestrador** | [`AGENTS.md`](AGENTS.md) | **[Alterado]** Registrada a nova skill `vulnerability-analysis` na tabela de skills e definidas as diretrizes de acionamento. |
| **Laboratório** | [`agent/app.py`](agent/app.py) | **[Criado]** Código de laboratório em Python/SQLite contendo propositalmente uma falha de injeção SQL para testes e validação didática do agente. |
| **Documentação** | [`README.md`](README.md) | **[Alterado]** Documentação completa da evolução do projeto, guia de execução e evidências de testes. |

---

## 🚀 Como Rodar o Agente no Harness

O DIO Agent foi desenvolvido para operar sobre a especificação aberta `AGENTS.md`, sendo compatível com diversos harnesses (Google Antigravity, Claude Code, OpenCode, Hermes, etc.).

### Rodando no Google Antigravity (ou harness compatível):
1. Abra o harness de sua preferência.
2. Abra a pasta raiz deste repositório (`dio-agent`).
3. O harness lerá automaticamente o arquivo [`AGENTS.md`](AGENTS.md).
4. Inicie a conversa enviando uma pergunta de segurança ou pedindo uma análise de código:
   ```text
   Você pode analisar a segurança do arquivo agent/app.py?
   ```

---

## 🧪 Roteiro de Testes e Evidências (Prints)

Para comprovar a especialização do agente, foram realizados testes práticos utilizando o arquivo de laboratório [`agent/app.py`](agent/app.py).

### 1. Pergunta de Teste Realizada
> *"Você pode analisar a segurança da função de login no arquivo agent/app.py?"*

### 2. Comportamento Observado do DIO Agent
Diferente de um modelo genérico (que apenas reescreve o código ou cospe um script pronto), o **DIO Agent especializado**:
1. **Fez perguntas de contexto:** Identificou o ambiente (estudo vs. produção) e o comportamento esperado.
2. **Explicou o conceito:** Apresentou o que é SQL Injection e por que a concatenação direta de strings (`f"SELECT ... {usuario}"`) é perigosa.
3. **Guiou a correção:** Explicou o uso de consultas parametrizadas (*placeholders* `?`) e a importância de funções de derivação de chave para senhas (hashing com salt), em vez de senhas em texto puro.

### 📸 Evidências

> As capturas de tela dos testes realizados no harness **Hermes** estão armazenadas no diretório [`docs/prints/`](docs/prints/):

| Evidência | Arquivo | Descrição |
| :--- | :--- | :--- |
| **Código Laboratório** | [`docs/prints/codigo antigo.jpg`](docs/prints/codigo%20antigo.jpg) | Código vulnerável inicial (`app.py`) com SQL Injection antes da correção. |
| **Pergunta & Contexto** | [`docs/prints/perguntando ao hermes.jpg`](docs/prints/perguntando%20ao%20hermes.jpg) | Solicitação ao agente e as perguntas de contexto que o DIO Agent faz antes de responder. |
| **Resposta Educacional** | [`docs/prints/resposta do hermes.jpg`](docs/prints/resposta%20do%20hermes.jpg) | Explicação didática do risco, impacto e condução para a mitigação defensiva. |

---

## 🧩 Todas as Skills Disponíveis

| Skill | Para que serve | Experimente pedir |
| :--- | :--- | :--- |
| [Análise de vulnerabilidades](skills/vulnerability-analysis/SKILL.md) | Analisa segurança de código e arquitetura com abordagem defensiva e pedagógica | *"Pode analisar a segurança do meu login em app.py?"* |
| [Plano de estudos](skills/study-plan/SKILL.md) | Organiza o que estudar, em que ordem e em quanto tempo | *"Quero concluir este Bootcamp em 2 meses, me ajuda?"* |
| [Destravar desafio](skills/unblock-challenge/SKILL.md) | Conduz você até a solução de um desafio, sem dar a resposta pronta | *"Travei nesse desafio, me ajuda?"* |
| [Explicar conceito](skills/explain-concept/SKILL.md) | Explica conceitos de forma simples, com analogias e exemplos | *"Não entendi o que é uma API."* |
| [Pesquisa na web](skills/web-search/SKILL.md) | Responde dúvidas atuais com fontes citadas | *"Qual a versão estável do Node hoje?"* |
| [Revisão de portfólio](skills/portfolio-review/SKILL.md) | Dá feedback sobre o seu portfólio e GitHub | *"O que falta no meu GitHub para uma vaga júnior?"* |
| [Caminho AI Builder](skills/ai-builder-path/SKILL.md) | Ajuda você a escolher o próximo passo na Carreira AI Builder | *"Qual Formação AI Builder combina comigo?"* |

---

## 🤝 Créditos e Comunidade

Desenvolvido com base no projeto original do DIO Agent pela comunidade da [DIO](https://dio.me).
