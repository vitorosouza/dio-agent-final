---
name: video-summary
description: Use quando o estudante enviar o link, transcrição ou informações de uma aula/vídeo da DIO (ou YouTube) e pedir um resumo, pontos-chave ou explicação do conteúdo do vídeo.
---

# Skill: Resumo de Aula e Vídeo

Ajuda o estudante a sintetizar, revisar e fixar o conteúdo de aulas em vídeo da DIO ou do YouTube, adaptando o resumo aos objetivos do estudante (visão geral, foco em código, checklist para projetos ou revisão rápida).

## Template Padrão de Prompt do Estudante

Sempre que o estudante usar ou solicitar este formato de instrução:
```text
Processe a transcrição abaixo e atualize o resumo da disciplina.
Extraia apenas o conteúdo inédito/ensinado nesta aula, destacando:

Tópicos centrais e definições essenciais.
Dicas, alertas ou destaques feitos pelo professor.
Termos ou fórmulas fundamentais.
Mantenha a formatação limpa (bullets e negritos) e conecte com o histórico do resumo.
Ignorar vícios de linguagem, conversas paralelas ou momentos de pausa da transcrição; foque estritamente no conteúdo acadêmico/técnico repassado
[TRANSCRIÇÃO]
```
Siga estritamente essas diretrizes ao processar o texto.

### Resposta Direta e Economia de Tokens
Quando o estudante pedir para processar transcrição e atualizar o resumo/caderno de estudos:
- **Formato de Entrada:** O estudante pode enviar anotações manuais ouvidas durante a aula, usar o prompt de `[TRANSCRICAO]` ou colar tópicos de apresentações.
- **5 Exemplos Práticos:** Sempre inclua ao final do resumo 5 exemplos práticos e aplicados ao mercado de trabalho com base no conteúdo daquela aula.
- **Atualize os arquivos de notas/artefato** com o conteúdo completo, estruturado, inédito e com os 5 exemplos práticos.
- **Na resposta do chat, seja ultra sucinto e direto:** não reescreva nem repita tudo o que foi inserido no arquivo (isso queima tokens desnecessariamente). Confirme a atualização do arquivo em poucas linhas e aponte apenas os tópicos adicionados.



## Quando usar

- O estudante enviou o link de um vídeo do YouTube ou transcrição de uma aula da DIO.
- O estudante usou o bookmarklet da DIO e colou a mensagem com o link/vídeo da aula.
- O estudante quer entender o que é ensinado em determinada aula sem precisar assistir tudo de novo.
- O estudante quer um resumo focado em um aspecto específico (ex.: "resuma apenas a parte que fala de Promises", "quais códigos foram feitos nessa aula?").

## Processo

### 1. Entenda o foco desejado

Antes de gerar o resumo, veja se o estudante especificou o que precisa:
- **Visão geral rápida:** Para decidir se assiste à aula ou para revisar conceitos antes de um teste.
- **Passo a passo prático / código:** Para reproduzir o que o instrutor fez sem se perder no vídeo.
- **Tira-dúvidas de um trecho:** Foco apenas em um conceito ou minuto específico.

Se o estudante não especificou, faça um resumo equilibrado (Conceito Central + Passo a Passo Prático + Dica Prática).

### 2. Analise o conteúdo do vídeo ou transcrição

- Se o estudante colou a **transcrição**: analise os tópicos apresentados, a ordem cronológica e os exemplos demonstrados pelo instrutor.
- Se o estudante enviou a **URL do YouTube**: utilize as informações disponíveis ou ferramentas nativas do harness para identificar o conteúdo da aula e seus tópicos essenciais.
- Se a transcrição não foi fornecida e o link não puder ser lido diretamente, oriente o estudante a copiar a transcrição do YouTube (no menu `...` > `Mostrar transcrição` no YouTube) ou os tópicos da aula.

### 3. Estruture o resumo de forma didática

Organize a resposta nas seguintes seções:

1. **Objetivo da Aula (1 a 2 frases):** O que você é capaz de fazer após assistir a essa aula.
2. **Principais Conceitos:** Explicação clara e sem rodeios dos termos e teorias apresentados.
3. **Código ou Prática (se houver):** Trechos curtos de código demonstrando o que foi construído na aula, com comentários explicativos.
4. **Ponto de Atenção / Pegadinhas:** Erros comuns que acontecem ao tentar rodar o que foi ensinado.
5. **Checklist de Fixação:** 2 a 3 perguntas ou exercícios rápidos para o estudante testar se realmente aprendeu.

### 4. Conecte com a jornada da DIO

Relacione o conteúdo da aula com a aplicação prática:
- Como esse assunto se conecta com o Desafio de Código ou Desafio de Projeto do Bootcamp atual?
- Qual é o próximo passo recomendado na trilha?

### 5. Verifique o entendimento

Pergunte se o estudante quer detalhar algum trecho específico da aula ou se restou alguma dúvida sobre o código demonstrado.

## Lembre-se

- **Não copie e cole a transcrição crua:** O valor do resumo está na síntese, organização e clareza didática.
- **Mantenha o código limpo e conciso:** Prefira exemplos minimalistas que ilustrem o conceito central.
- **Respeite o ritmo do estudante:** Evite resumos gigantescos que desanimem a leitura; use tópicos e negrito para facilitar o escaneamento visual.
