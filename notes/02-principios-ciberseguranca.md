# Caderno de Resumos: Princípios de Cibersegurança

Este documento reúne resumos organizados, conceitos fundamentais e anotações das aulas do curso de **Princípios de Cibersegurança**.

---

## 🛡️ Etapa 1: O que é Cibersegurança?

A cibersegurança vai muito além de evitar invasões ou roubo de dados pontuais; trata-se de uma postura contínua e estruturada de proteção.

### Definição Oficial (CISA)
Segundo a **CISA** (*Cybersecurity and Infrastructure Security Agency*):

> *"A cibersegurança é um conjunto de ações e técnicas para proteger sistemas, programas, redes e equipamentos contra invasões."*

### Pontos-Chave:
* **Não é só "evitar invasão":** Envolve prevenção, monitoramento, resposta a incidentes, mitigação de riscos e garantia da continuidade das operações.
* **Os 4 alvos da definição:**
  1. **Sistemas:** Sistemas operacionais, servidores e plataformas.
  2. **Programas:** Aplicações, softwares e rotinas desenvolvidas.
  3. **Redes:** Conexões, roteadores, tráfego de dados e infraestrutura.
  4. **Equipamentos:** Dispositivos finais (*endpoints* como notebooks, smartphones, computadores e servidores físicos).
* **Tríade de sustentação:** Cibersegurança combina **tecnologia** (ferramentas), **processos** (políticas) e **pessoas** (treinamento e cultura de segurança).

---

## ⚙️ Função da Cibersegurança

* **Voltada para softwares, hardwares e redes:**
  * Atua cobrindo todas as frentes tecnológicas: o código e as aplicações (**software**), as máquinas físicas e periféricos (**hardware**) e as conexões e tráfego que ligam tudo (**redes**). Não adianta blindar a rede se a máquina física estiver desprotegida, e vice-versa.
* **Previne problemas com a gestão de informações:**
  * Garante que as informações cheguem a quem tem permissão e impeça que caiam em mãos erradas. Reduz falhas humanas, vazamentos internos e falhas no fluxo de dados.
* **Protege os dados armazenados:**
  * Cuida dos dados tanto em repouso (*at rest*, salvos em discos, bancos de dados e nuvem) quanto em trânsito (*in transit*, trafegando pela internet/rede), usando criptografia e controle de acesso rígido.

---

## 🏛️ Pilares da Cibersegurança (Framework NIST CSF)

```text
[ 1. IDENTIFY ] ➔ [ 2. PROTECT ] ➔ [ 3. DETECT ] ➔ [ 4. RESPOND ] ➔ [ 5. RECOVER ]
  (Identificar)     (Proteger)       (Detectar)       (Responder)      (Recuperar)
```

1. **Identify (Identificar) 🔭:** Compreender os ativos da empresa (servidores, dados, sistemas) e os riscos associados a eles. Não se protege o que não se conhece.
2. **Protect (Proteger) 🔒:** Erguer defesas preventivas (firewalls, autenticação em dois fatores, criptografia, privilégio mínimo e treinamento de funcionários).
3. **Detect (Detectar) 🔍:** Monitorar continuamente em tempo real para flagrar atividades suspeitas e ataques assim que ocorrerem.
4. **Respond (Responder) ⚡:** Agir com velocidade para conter o estrago (isolar máquinas da rede, revogar acessos comprometidos e estancar o vazamento).
5. **Recover (Recuperar) 🔄:** Restaurar os serviços e sistemas ao normal de forma segura (recuperação de backups e lições aprendidas para evitar reincidência).

---

## 💻 Aula: O que é Hacking?

* **O lado negativo / mau uso:** Significa comprometer deliberadamente sistemas de computador, contas pessoais, redes ou dispositivos digitais.
* **O lado legítimo:** O termo **hacking** não é necessariamente maligno. Refere-se à capacidade técnica, criatividade e uso avançado da tecnologia para contornar limitações e resolver problemas complexos com finalidades legítimas.

### Hacker vs. Cracker
* **Hacker:** Especialista em computação e sistemas que utiliza seu conhecimento para criar, explorar limitações técnicas, aprender ou proteger (com propósitos positivos ou neutros).
* **Cracker:** Aquele que utiliza seu conhecimento técnico com **intenção maliciosa** para quebrar proteções, invadir sistemas, roubar dados e causar prejuízos. No dia a dia das notícias, muitos chamam o cracker de "hacker", mas tecnicamente são diferentes.

### Classificação dos Tipos de Hackers
Podem ser divididos com base na intenção e legalidade:

* **Black Hat (Chapéu Preto):**
  * Criminosos cibernéticos que utilizam seu conhecimento para fins ilícitos, como invasão sem permissão, vazamento de dados, extorsão e destruição de sistemas.
* **White Hat (Chapéu Branco / Hacker Ético):**
  * Profissionais de segurança que utilizam as mesmas técnicas de ataque para encontrar vulnerabilidades antes dos criminosos. Atuam sob contratos, acordos de confidencialidade (NDA) e com autorização explícita da empresa.
* **Grey Hat (Chapéu Cinza):**
  * Ficam no meio do caminho. Podem testar e invadir sistemas de empresas **sem autorização prévia**, mas sem o intuito de causar dano destrutivo imediato. Após achar a falha, procuram a empresa para relatar o problema e, muitas vezes, oferecer seus serviços de correção ou cobrar recompensa.
* **Critério de Legalidade:**
  * O *Black Hat* é sempre **ilegal** por ausência de consentimento e presença de dolo. O *White Hat* é 100% **legal e regulamentado**. O *Grey Hat* comete infração legal ao testar ou entrar em sistemas sem consentimento prévio, mesmo que afirme ter boas intenções.

> **Conclusão:** O termo *hacking* vai muito além de invasões criminosas; trata-se de maestria técnica e exploração criativa de sistemas.

---

## ⚠️ Aula: Principais Tipos de Ameaças

As ameaças do ambiente cibernético não atingem apenas infraestrutura de TI e redes; miram fortemente as **pessoas** que trabalham nas organizações (engenharia social).

### Fontes de Ataque (Cyber Threat Actors & Motivations)

* **NATION-STATES (Estados-nação / Governos) ➔ GEOPOLITICAL (Geopolítica):**
  * *O que é:* Grupos patrocinados financeiramente e operacionalmente por governos para espionagem militar, roubo de segredos de estado ou sabotagem de infraestrutura crítica de outros países.
* **CYBERCRIMINALS (Cibercriminosos) ➔ PROFIT (Lucro financeiro):**
  * *O que é:* Indivíduos ou quadrilhas que buscam dinheiro rápido por meio de extorsão com ransomware, fraudes bancárias, roubo de cartões e venda de bancos de dados no mercado clandestino.
* **HACKTIVISTS (Hacktivistas) ➔ IDEOLOGICAL (Causa ideológica / Política):**
  * *O que é:* Ativistas digitais que invadem e desfiguram sites (*defacement*) ou derrubam páginas governamentais/corporativas para divulgar protestos, posicionamentos políticos ou causas sociais.
* **TERRORIST GROUPS (Grupos Terroristas) ➔ IDEOLOGICAL VIOLENCE (Violência ideológica):**
  * *O que é:* Organizações extremistas que usam ciberataques para causar pânico coletivo, propagar terror, recrutar apoiadores ou comprometer serviços públicos essenciais.
* **THRILL-SEEKERS (Buscadores de emoção / Curiosos) ➔ SATISFACTION (Satisfação pessoal / Ego):**
  * *O que é:* Indivíduos que atacam sistemas apenas pela adrenalina, pelo desafio técnico ou para se gabar em fóruns de que conseguiram quebrar uma segurança renomada.
* **INSIDER THREATS (Ameaças internas / Funcionários) ➔ DISCONTENT (Descontentamento / Vingança / Ganância):**
  * *O que é:* Funcionários, estagiários ou prestadores de serviço com acesso legítimo que, por estarem descontentes com a empresa, demitidos ou subornados, vazam ou destroem informações privilegiadas.

---

### Outros Tipos Comuns de Ataques Técnicos

* **Phishing:** Mensagens e e-mails fraudulentos que se passam por instituições confiáveis (bancos, diretoria, TI) para enganar o usuário e fazê-lo clicar em links falsos ou fornecer senhas.
* **DNS Spoofing (Envenenamento de DNS):**
  * *Como funciona:* O invasor compromete as tabelas de resolução de nomes de um servidor DNS. Quando a vítima digita uma URL legítima (ex: `www.seubanco.com.br`), o DNS adulterado encaminha o tráfego silenciosamente para o IP de um servidor clone sob controle do hacker, capturando as credenciais digitadas.
* **Roubo de Cookies (Session Hijacking / Cookie Theft):**
  * *Como funciona:* Quando você faz login em um site, o servidor salva um "cookie de sessão" no seu navegador para que você não precise digitar senha toda vez que muda de página. Se o invasor roubar esse token de cookie (por meio de malware, rede Wi-Fi pública desprotegida ou falha no navegador), ele pode simplesmente injetar esse cookie no navegador dele e acessar a sua conta logada sem saber a sua senha nem o seu token de 2FA.
* **XSS (Cross-Site Scripting):**
  * *Como funciona:* Ocorre quando campos de entrada de um site (comentários, caixas de pesquisa, formulários) não validam adequadamente os caracteres digitados. O invasor insere código malicioso (geralmente JavaScript). Quando outros usuários legítimos carregam aquela página, o script executa no navegador dessas pessoas, podendo roubar cookies de sessão, registrar teclas digitadas ou redirecionar a vítima.
* **SQL Injection (Injeção de SQL):**
  * *Como funciona:* Parecido em essência com o XSS, mas tem como alvo direto o **Banco de Dados** (backend). Ocorre quando a aplicação concatena valores digitados pelo usuário diretamente dentro de consultas SQL sem tratamento. O invasor insere comandos especiais (ex: `' OR '1'='1`) para driblar telas de login, despejar tabelas inteiras de clientes ou até apagar o banco.

---

### 🌐 Top 15 Ciberameaças segundo a ENISA

A **ENISA** (*European Union Agency for Cybersecurity*) publica anualmente a lista das principais ameaças globais em segurança digital:

1. **Malware (*Software Malicioso*):** Termo guarda-chuva para qualquer código desenvolvido com objetivo de causar danos, roubar dados ou obter acesso não autorizado (vírus, cavalos de troia, worms, spywares).
2. **Web-based attacks (*Ataques baseados na Web*):** Ataques que atingem usuários finais enquanto navegam na internet, muitas vezes explorando navegadores desatualizados ou redirecionando para sites maliciosos (*drive-by downloads*).
3. **Phishing (*Pesca de Informações / Engenharia Social*):** Comunicações fraudulentas por e-mail, SMS ou mensagens que tentam induzir a vítima a entregar credenciais ou baixar anexos infectados.
4. **Web application attacks (*Ataques a Aplicações Web*):** Ataques direcionados diretamente a vulnerabilidades no código de sistemas web, portais e APIs (como SQL Injection, Cross-Site Scripting e falhas de autenticação).
5. **Spam (*Mensagens Eletrônicas Não Solicitadas em Massa*):** Envio massivo de mensagens indesejadas, servindo frequentemente como veículo de transporte para esquemas de phishing e propagação de malwares.
6. **DDoS - Distributed Denial of Service (*Negação de Serviço Distribuída*):** Sobrecarga intencional de servidores ou redes enviando um volume massivo de requisições a partir de milhares de dispositivos ao mesmo tempo, fazendo o serviço cair e ficar inacessível para clientes reais.
7. **Identity theft (*Roubo de Identidade*):** Obtenção ilícita de dados pessoais e documentos de uma pessoa física ou jurídica para cometer fraudes, abrir contas falsas ou contrair empréstimos.
8. **Data breach (*Violação / Vazamento de Dados*):** Incidente de segurança em que informações confidenciais, financeiras ou protegidas são visualizadas, copiadas ou extraídas por indivíduos não autorizados.
9. **Insider threat (*Ameaça Interna*):** Riscos provocados por pessoas que possuem acesso legítimo aos sistemas internos da empresa (colaboradores atuais, prestadores de serviço ou ex-funcionários mal-intencionados ou descuidados).
10. **Botnets (*Redes de Robôs Zumbis*):** Redes formadas por milhares de computadores e dispositivos IoT infectados que são controlados remotamente por invasores para executar ataques DDoS, disparar spams ou minerar criptomoedas.
11. **Physical manipulation, damage, theft and loss (*Manipulação Física, Danos, Furto e Perda*):** Ameaças à segurança física dos ativos, como invasão física à sala de servidores, furto de notebooks corporativos, desastres estruturais ou perda de mídias/pendrives com dados sigilosos.
12. **Information leakage (*Vazamento Involuntário de Informações*):** Exposição não intencional de dados sigilosos causada por má configuração de sistemas (ex: buckets de nuvem abertos ao público sem senha) ou descarte incorreto de arquivos e discos.
13. **Ransomware (*Código Malicioso de Extorsão / Sequestro de Dados*):** Tipo de malware que criptografa os arquivos e sistemas da vítima, tornando-os completamente inacessíveis, e exige pagamento de resgate (geralmente em criptomoedas) para fornecer a chave de descriptografia.
14. **Cyberespionage (*Ciberespionagem*):** Atividades cibernéticas secretas conduzidas para roubar propriedade intelectual, projetos industriais, patentes ou segredos governamentais de concorrentes e nações rivais.
15. **Cryptojacking (*Sequestro Oculto para Mineração de Criptomoedas*):** Invasão e uso não autorizado do processador (CPU/GPU) e recursos de computadores, servidores ou dispositivos móveis da vítima para minerar criptomoedas em benefício do invasor, sem que o proprietário perceba além da lentidão extrema da máquina.

---

## 🛡️ Aula: Boas Práticas em Cibersegurança

Boas práticas são ações contínuas que unem tecnologia robusta e governança à **mudança cultural de comportamento dos usuários** — afinal, o elo humano é frequentemente o mais visado pelos invasores.

### 1. Conscientização de Pessoas
* **Abordagem centrada nas pessoas:** Reduzir a negligência e desinformação dos colaboradores.
* **Treinamentos práticos:** Capacitar funcionários a identificar phishing, links suspeitos, anexos perigosos e técnicas de persuasão da engenharia social.
* *Dado alarmante:* De acordo com o relatório *Cost of Insider Threats (2022)*, **mais de 62% das quebras de dados internas são causadas por erros involuntários e negligência de colaboradores**, e não por má-fé premeditada.

### 2. Controle de Acesso a Ativos Críticos
* **Proteção no acesso de dispositivos remotos:** Políticas de VPN segura e validação da conformidade de máquinas usadas em home office (BYOD/remoto).
* **Gestão segura de senhas:** Obrigatoriedade de senhas fortes, rotação adequada e proibição estrita de senhas compartilhadas entre setores.
* **Princípio do Privilégio Mínimo (*Least Privilege*):** Cada colaborador deve ter apenas os acessos estritamente necessários para executar sua tarefa diária. Ninguém opera como administrador (`root` / `admin`) no uso rotineiro.

### 3. Proteção de Dados Confidenciais
* **Atenção aos usuários privilegiados:** Monitoramento contínuo das ações tomadas por contas com permissões de administração elevada.
* **Monitoramento de acessos de terceiros:** Controlar rigorosamente quais fornecedores e parceiros externos acessam a rede interna e por quanto tempo.
* **Política de Backups regulares:** Manter rotinas de backups testados e armazenados isoladamente (*offline* / *offsite*) para que a empresa possa se recuperar em caso de falha grave ou ransomware.

### 4. Segurança Robusta e Proteção de Rede
* **Políticas hierárquicas de segurança:** Definição clara de diretrizes, regras corporativas e fluxos de aprovação de segurança em todos os níveis.
* **Proteção de perímetro e rede interna:** Uso de firewalls de borda, segmentação de redes (separando rede de visitantes da rede corporativa crítica) e sistemas de prevenção a intrusões.
* **Auditorias regulares:** Varreduras e auditorias periódicas para validar se os padrões de conformidade e as políticas estão sendo cumpridos.

### 5. Gerenciamento de Identidades
* **Segurança biométrica:** Uso de impressão digital ou reconhecimento facial para autenticação física e lógica de usuários.
* **Autenticação Multifator (MFA / 2FA):** Exigência inegociável de mais de uma forma de validação para logins críticos (ex: senha + código gerado no app autenticador).

---

## ⚔️ Aula: Red Team vs. Blue Team vs. Purple Team

Para testar a segurança na prática antes que atacantes reais o façam, as empresas estruturam equipes com mentalidades opostas e complementares:

### 🔴 Red Team (Offensive Team / Time Ofensivo)
Adota a mentalidade, as técnicas e as ferramentas de um invasor real para encontrar caminhos de entrada e explorar vulnerabilidades.

#### Termos Traduzidos e Explicados:
* **Offensive Security (*Segurança Ofensiva*):** Foco em atacar proativamente a infraestrutura para expor fragilidades antes que os criminosos o façam.
* **Ethical Hacking (*Hacking Ético*):** Aplicação de técnicas de invasão sob autorização prévia, limites contratuais e com fins defensivos corporativos.
* **Exploiting Vulnerabilities (*Exploração de Vulnerabilidades*):** Validação real de brechas para comprovar na prática o impacto de uma falha detectada.
* **Penetration Tests / Pentest (*Testes de Intrusão*):** Simulações controladas de ataque com escopo pré-definido para avaliar as barreiras da organização.
* **Black Box Testing (*Testes Caixa-Preta*):** Teste de invasão feito sem nenhum conhecimento prévio pré-existente da estrutura interna do sistema (simulando um atacante externo comum).
* **Social Engineering (*Engenharia Social*):** Simulação de testes de phishing, telefonemas persuasivos ou tentativas de acesso físico fraudulento contra os funcionários.
* **Web App Scanning (*Varredura de Aplicações Web*):** Análise e busca automatizada e manual por falhas específicas em sites, portais e APIs da empresa.

---

### 🔵 Blue Team (Defensive Team / Time Defensivo)
Responsável por construir, manter, monitorar e defender toda a infraestrutura contra quaisquer investidas maliciosas.

#### Termos Traduzidos e Explicados:
* **Defensive Security (*Segurança Defensiva*):** Estruturação contínua de medidas protetivas para resguardar todos os ativos da empresa.
* **Infrastructure Protection (*Proteção de Infraestrutura*):** Configuração de firewalls, sistemas operacionais atualizados, antivírus de endpoint e segmentação de rede.
* **Damage Control (*Controle de Danos*):** Ações emergenciais durante um incidente para conter a propagação do ataque e minimizar perdas de dados.
* **Incident Response - IR (*Resposta a Incidentes*):** Plano operacional estruturado para agir imediatamente quando um alerta de violação é disparado.
* **Operational Security (*Segurança Operacional / OPSEC*):** Práticas rotineiras que garantem que as operações diárias da organização não deixem pistas ou brechas acidentais.
* **Threat Hunters (*Caçadores de Ameaças*):** Especialistas que buscam ativamente por ameaças avançadas escondidas dentro da rede, mesmo que nenhum alarme tradicional tenha tocado.
* **Digital Forensics (*Perícia Digital Forense*):** Investigação técnica pós-incidente para coletar evidências, entender como o invasor entrou e documentar a linha do tempo do ataque.

---

### 🟣 Purple Team (Integração e Colaboração Contínua)

O **Purple Team** não é necessariamente uma equipe separada permanente, mas uma **cultura ou dinâmica colaborativa** em que o Red Team e o Blue Team trabalham juntos em vez de competirem entre si.

#### Termos Traduzidos e Explicados:
* **Facilitate improvements in detection and defence (*Facilitar melhorias na detecção e defesa*):**
  * O Red Team executa um ataque específico e, na mesma hora, senta com o Blue Team para conferir: *"Os nossos alarmes detectaram essa investida? Não? Então vamos ajustar as regras do firewall e SIEM agora mesmo."*
* **Sharpened the skills of Blue and Red team members (*Aprimorar as habilidades dos membros do Blue e Red Team*):**
  * O time de defesa aprende a pensar como um atacante experiente, enquanto o time ofensivo entende quais técnicas são mais difíceis de driblar as defesas modernas.
* **Effective for spot-checking systems in larger organizations (*Eficaz para testes pontuais de validação em grandes organizações*):**
  * Excelente metodologia para avaliar sistemas críticos em grandes empresas rapidamente, garantindo que as ferramentas de segurança adquiridas estão de fato funcionando e gerando valor.

---

## 🖥️ Aula: Sistemas Operacionais (SO)

O **Sistema Operacional** funciona como a grande ponte de comunicação entre o usuário e a máquina física. Ele traduz as ações humanas (entradas via teclado, cliques do mouse, comandos) em linguagem de máquina (bits/binário) que o processador e os circuitos entendem, sendo o verdadeiro responsável por gerenciar e conversar diretamente com o hardware.

### Arquitetura em Camadas (Fluxo de Interação)

```text
[ USER (Usuário) ]
       ▲ ▼
[ APPLICATION (Aplicativos / Softwares) ]
       ▲ ▼
[ OPERATING SYSTEM (Sistema Operacional) ]
       ▲ ▼
[ HARDWARE (Processador, Memória, Disco, Placas) ]
```

* **Descendo (Entrada / Execução):** O usuário comanda a aplicação ➔ a aplicação faz chamadas ao sistema operacional ➔ o SO envia instruções e aloca os recursos físicos do hardware.
* **Subindo (Resposta / Saída):** O hardware processa os cálculos ➔ devolve o resultado ao SO ➔ o SO repassa para a aplicação ➔ a aplicação exibe na tela para o usuário.

---

### Funções Principais de um SO
Conforme visto na aula, o sistema operacional atua como o maestro do computador, desempenhando quatro gestões fundamentais:

* **Gerenciamento de processos:**
  * Controla a criação, execução, pausa e finalização de todos os programas abertos. Ele decide qual processo usará a CPU a cada milissegundo (escalonamento), impedindo que um programa trave o sistema inteiro.
* **Gerenciamento de memória:**
  * Distribui e monitora o uso das diferentes camadas de memória (**Cache**, **Memória Primária / RAM** e **Memória Secundária / Disco-SSD**). Garante que cada aplicativo tenha seu espaço isolado na memória sem invadir ou corromper a memória de outro.
* **Gerenciamento de dispositivos:**
  * Comunica-se com placas, periféricos, impressoras, teclado, mouse e monitores através de softwares específicos chamados *drivers*.
* **Gerenciamento de arquivos:**
  * Organiza como os arquivos e pastas são criados, nomeados, lidos, editados, gravados e protegidos contra perdas lógicas no disco.

---

### Recursos Disponibilizados pelos Sistemas Operacionais
Em vez de cada desenvolvedor ter que reinventar a roda, o SO disponibiliza uma infraestrutura completa de serviços essenciais:

* **Fornece uma plataforma para executar aplicativos:** Cria o ambiente de execução padronizado onde navegadores, jogos, bancos de dados e programas corporativos podem rodar com estabilidade.
* **Gerenciamento de memória e CPU:** Otimiza o uso do processador e divide a memória RAM de forma inteligente para que múltiplos programas funcionem ao mesmo tempo (*multitarefa*).
* **Fornece abstração do sistema de arquivos:** O usuário e os programas enxergam arquivos em pastas organizadas (ex: `C:\arquivos` ou `/home/usuario`), sem precisar saber em qual trilha física ou setor do chip SSD aquele dado está gravado.
* **Fornece suporte de rede:** Já inclui pilhas de protocolos prontas (como TCP/IP, DNS, Wi-Fi, Ethernet) para que qualquer software possa conectar à internet ou a redes locais com facilidade.
* **Fornece recursos de segurança:** Mecanismos de autenticação (login e senhas), permissões de leitura/escrita por usuário, isolamento de processos e firewall nativo.
* **Fornece interface de usuário:** Oferece tanto a interface gráfica amigável (**GUI** - janelas, botões e ícones) quanto a interface de linha de comando (**CLI / Terminal**).
* **Fornece utilitários e serviços de sistema:** Programas de diagnóstico, agendadores de tarefas, logs de eventos, utilitários de disco e serviços em segundo plano (*daemons* no Linux ou *services* no Windows).
* **Suporte ao desenvolvimento de aplicativos:** Disponibiliza bibliotecas, chamadas de sistema padronizadas (*System Calls / APIs*) e ferramentas que facilitam a criação de novos softwares.

---

### O que é o Shell?

> *"O Shell trata das interações do usuário, sendo a **camada mais externa** do sistema operacional, e gerencia a interação direta entre o usuário e o sistema operacional."*

* **Analogia da "Concha" (*Shell*):** Pense no sistema operacional com o **Kernel** no núcleo (o coração que conversa com o hardware) e o **Shell** como a casca/concha externa que envolve esse núcleo e serve de interface para o mundo exterior.
* **Papel prático:** É o interpretador que recebe os comandos digitados pelo usuário (como o Bash, Zsh no Linux ou PowerShell no Windows), valida a sintaxe e solicita ao Kernel que execute aquela instrução.

---

### O que é o Kernel?

> *"É o componente central de um SO, do qual todos os outros componentes do sistema operacional dependem para fornecer serviços essenciais, atuando como a interface principal entre o SO e o hardware."*

---

## 🪟 Aula: Segurança no Windows e Vírus Históricos

Ao longo da evolução da família Windows (desde as versões de usuário comum até a linha corporativa *Windows NT*), surgiram vírus clássicos que marcaram a história da cibersegurança e moldaram os mecanismos modernos de defesa do sistema.

### Vírus Clássicos Conhecidos

* **WinNT.RemoteExplorer:**
  * **O que foi:** Considerado o primeiro vírus capaz de infectar o **Windows NT** se passando por um serviço nativo do sistema.
  * **Ação:** Ele roubava privilégios de administrador de rede e compactava/corrompia arquivos `.exe` e `.html`, gerando tráfego massivo e travando ambientes corporativos inteiros.
* **WinNT.Infis:**
  * **O que foi:** O primeiro vírus conhecido a infectar e se instalar no nível de **driver do Windows NT** (*Ring 0 / Kernel mode*).
  * **Ação:** Como rodava no mesmo nível de privilégio do núcleo do sistema, ele conseguia interceptar chamadas internas e se camuflar (técnica precursora dos *rootkits* modernos), passando totalmente invisível pelos antivírus da época.
* **Win95.CIH (conhecido mundialmente como "Chernobyl"):**
  * **O que foi:** Um dos vírus mais destrutivos de todos os tempos, criado em 1998 para Windows 95 e 98.
  * **Ação:** No dia do aniversário do desastre de Chernobyl (26 de abril), ele ativava sua carga destrutiva: sobrescrevia os dados do disco rígido e tentava regravar a memória **Flash BIOS** da placa-mãe. Quando tinha sucesso, inutilizava fisicamente o computador, que nem ligava mais.
* **Win32.Kriz:**
  * **O que foi:** Vírus polimórfico surgido em 1999 com comportamento destrutivo semelhante ao Chernobyl.
  * **Ação:** Ele aguardava a data de 25 de dezembro (Natal) para ativar seu ataque, onde corrompia arquivos de sistema, zerava o CMOS e também tentava danificar permanentemente a BIOS do computador infectado.
* **Win95.Babylonia:**
  * **O que foi:** Criado no final de 1999, foi um dos primeiros vírus com capacidade avançada de **autoatualização pela internet**.
  * **Ação:** Disseminado via e-mails e fóruns de discussão (IRC/Usenet), ele infectava executáveis do Windows e se conectava periodicamente a um servidor no exterior para baixar novos módulos de ataque e se atualizar sozinho.

---

## 💡 5 Exemplos Práticos Integrados (Princípios de Cibersegurança)

1. **Aplicação do Framework NIST CSF em Caso de Ransomware:**
   * *Identify:* Mapear servidores que processam pagamentos e dados confidenciais.
   * *Protect:* Isolar com firewall, exigir MFA inegociável e aplicar privilégio mínimo.
   * *Detect:* Monitorar alertas de múltiplas tentativas de login com SIEM.
   * *Respond:* Desconectar imediatamente os hosts infectados da rede física e lógica.
   * *Recover:* Restaurar backups limpos e aplicar patches na brecha de entrada.
2. **Mitigação Prática de Session Hijacking (Roubo de Cookies):**
   * Configurar flags de proteção estritas nos cookies de sessão web: `HttpOnly` (impede leitura via JavaScript/XSS), `Secure` (trafega exclusivamente sob HTTPS) e `SameSite=Strict` (bloqueia envio em requisições de outros domínios).
3. **Exercício Colaborativo de Purple Teaming:**
   * O **Red Team** dispara um ataque simulado de Password Spraying contra o Active Directory; simultaneamente, o **Blue Team** valida se os logs de eventos (Event ID 4625 no Windows) geraram alerta automático no SOC.
4. **Prevenção Real Contra Ataque de SQL Injection:**
   * Substituir concatenação direta de dados em queries por *Prepared Statements* (consultas parametrizadas):
   ```sql
   -- Inseguro: "SELECT * FROM users WHERE login = '" + user + "' AND pass = '" + pass + "'";
   -- Seguro: PreparedStatement com marcadores "?" tratados pelo driver.
   ```
5. **Mitigação Corporativa Contra Insider Threat Involuntário:**
   * Implantar campanhas periódicas de simulação controlada de phishing com e-mails contendo links suspeitos para medir o índice de cliques dos funcionários e direcionar treinamentos de conscientização para os 62% mais vulneráveis.
