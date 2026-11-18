# 📡 Caderno de Resumos: Varredura de Rede, Enumeração e Força Bruta

> **Base:** Curso de Conceitos e Técnicas de Varredura de Rede & Práticas de Pentest.  
> **Ambiente de Testes:** Kali Linux (`192.168.56.102`) atacando Metasploitable 2 (`192.168.56.101`).

---

## 🖥️ Laboratório e Configuração de Rede

* **Metasploitable 2:** Alvo propositalmente inseguro (`192.168.56.101`). Credenciais padrão: `msfadmin` / `msfadmin`.
* **Snapshot:** Sempre tire um snapshot da VM antes dos testes para restauração rápida se o sistema quebrar.
* **Rede VirtualBox:**
  * **Host-Only:** Comunicação isolada entre as VMs (sem acesso à internet).
  * **NAT:** Dá acesso à internet para a VM.
  * **Modo Recomendado:** Configurar 2 adaptadores no Kali (Adaptador 1 = Host-Only para atacar o alvo; Adaptador 2 = NAT para internet).

---

## 🗺️ PARTE 1 — Varredura com Nmap

* **Nmap:** *Network Mapper* — ferramenta essencial para auditoria de redes, descoberta de hosts ativos e portas abertas.

### 1. Descoberta de Rede e CIDR
* `nmap -v 192.168.56.0/24`: Varre todo o bloco `/24` (256 endereços de rede do `.0` ao `.255`).
* `nmap -v -sn 192.168.56.100-110`: **Ping Scan** (`-sn`). Apenas verifica se os hosts respondem, sem varrer portas lógicas.
* `nmap -v -sn 192.168.56.100-110 | grep 192 > ativos.txt`: Filtra as linhas de IP com `grep` e salva a saída no arquivo.

### 2. Varredura de Portas (TCP vs. UDP)
* **TCP:** Orientado a conexão, confiável (*three-way handshake*).
* **UDP:** Não orientado a conexão, veloz, sem confirmação de entrega.

```bash
# UDP Scan (portas 21, 22, 23, 445, 3306)
nmap -v -sU 192.168.56.101 -p 21,22,23,445,3306

# TCP Null Scan (stealth - envia pacote sem flags)
nmap -v -sN 192.168.56.100-110 -p 21-23,445,3306

# Identificação de versões de serviços rodando nas portas
nmap -sV -p 21,22,80,445,139 192.168.56.101
```

| Tipo | Flag | Mecanismo |
|---|---|---|
| **UDP Scan** | `-sU` | Envia pacote UDP; resposta *ICMP Port Unreachable* indica porta fechada |
| **TCP Null Scan** | `-sN` | Sem flags ativas; resposta *RST* indica porta fechada, silêncio indica aberta/filtrada |
| **TCP Xmas Scan** | `-sX` | Flags FIN, PSH e URG ativas simulando "árvore de natal" |
| **SYN Stealth Scan** | `-sS` | Envia SYN mas finaliza com RST sem completar o handshake |

---

## 🗂️ PARTE 2 — Enumeração

Enumeração é a etapa que estabelece **conexão ativa direta** com o alvo para extrair nomes de usuários, compartilhamentos, serviços, tabelas de roteamento e banners.

```text
[Identificação dos Alvos] ➔ [Varredura de Portas] ➔ [Fingerprinting de SO] ➔ [Identificação de Serviços]
```

### Portas e Serviços Chave na Enumeração:
* **TCP 53:** DNS Zone Transfer
* **TCP 135 / 137 / 139 / 445:** Microsoft RPC, NetBIOS e SMB (compartilhamentos de arquivos)
* **UDP 161:** SNMP (dados de roteadores e servidores)
* **TCP 389:** LDAP (usuários e grupos em diretórios corporativos)
* **TCP 25:** SMTP (validação de contas de e-mail)

---

## 🧩 PARTE 3 — Nmap Scripting Engine (NSE)

O **NSE** automatiza tarefas avançadas usando scripts prontos (`/usr/share/nmap/scripts`).

### Categorias do NSE:
* `vuln`: Identifica vulnerabilidades conhecidas.
* `exploit`: Tenta explorar falhas diretamente.
* `brute`: Executa ataques de força bruta contra serviços.
* `discovery`: Mapeia rotas e serviços ocultos.
* `safe`: Scripts não agressivos que não derrubam sistemas.

### Comandos Clássicos:
```bash
# Ajuda de um script
nmap --script-help exploit

# Comando Completo de Auditoria
sudo nmap -Pn -sS -sC --script exploit scanme.nmap.org
```
* `-Pn`: Trata o alvo como ativo sem pingar.
* `-sS`: TCP SYN Scan furtivo.
* `-sC`: Roda o conjunto padrão (*default scripts*).
* `--script exploit`: Dispara os scripts da categoria exploit.

```bash
# Descobrir sub-domínios via DNS Brute Force
nmap -p 80 --script dns-brute.nse nmap.org
```

---

## 💣 PARTE 4 — Força Bruta e Ferramentas do Kali Linux

### Técnicas de Ataque a Credenciais:
1. **Força Bruta Pura:** Gera e testa todas as combinações matemáticas de caracteres (`aaa`, `aab`...).
2. **Ataque de Dicionário:** Testa listas de senhas reais compiladas (`rockyou.txt`).
3. **Password Spraying:** Testa **uma única senha comum contra centenas de contas**, evitando o bloqueio por limite de erros.
4. **Credential Stuffing:** Usa logins e senhas reais vazados na web contra outras aplicações.
5. **Híbrido / Mutações:** Combina palavras com regras (`senha` $\rightarrow$ `S3nh@123!`).

---

## 🔧 PARTE 5 — Comparativo de Ferramentas de Força Bruta

| Ferramenta | Tipo | Protocolos / Suporte | Melhor Aplicação |
|---|---|---|---|
| **Hydra** | Rede (Online) | 50+ protocolos (SSH, FTP, HTTP, SMB) | Ataques de dicionário rápidos e paralelizados em serviços de rede |
| **Medusa** | Rede (Online) | FTP, HTTP, SSH, Telnet, SMB | Força bruta multi-thread veloz e modular |
| **Ncrack** | Rede (Online) | RDP, SSH, SMB, Telnet, VNC | Otimizado para redes grandes com foco em modo furtivo (*stealth*) |
| **John the Ripper** | Hashes (Offline) | MD5, SHA, NTLM, hashes de arquivos | Quebra de senhas criptografadas e análises forenses |
| **WPScan** | Web / Aplicação | WordPress | Enumeração de usuários, plugins vulneráveis e login brute force |
| **Patator** | Rede e Web | Altamente modular e customizável | Contornar filtros, captchas leves e defesas específicas |

---

## 🧪 PARTE 6 — Simulações Práticas de Ataque

### 1. Ataque FTP com Medusa
```bash
# Criar listas
echo -e 'user\nmsfadmin\nadmin\nroot' > users.txt
echo -e '123456\npassword\nqwerty\nmsfadmin' > pass.txt

# Executar ataque
medusa -h 192.168.56.101 -U users.txt -P pass.txt -M ftp -t 6
```

### 2. Força Bruta em Formulário Web (DVWA)
```bash
medusa -h 192.168.56.101 \
  -U users.txt \
  -P pass.txt \
  -M http \
  -m "FORM:/dvwa/login.php:username=&password=&Login=Login:Login failed" \
  -t 4
```
* Identifica os campos no DevTools (`Network` $\rightarrow$ `Payload`).
* O texto `"Login failed"` instrui o Medusa sobre o que considerar como tentativa fracassada.

### 3. Ataque em Cadeia: Enumeração SMB + Password Spraying
* **SMB (Server Message Block / Samba no Linux):** Protocolo para compartilhamento de arquivos, pastas e impressoras. Se mal configurado, permite obter credenciais e dados vitais.
* **Cenário Real (Ransomware Ryuk - 2021):** O malware Ryuk paralisou redes hospitalares e governamentais nos EUA e no mundo entrando via SMB, explorando exatamente contas previsíveis (`admin`, `finance`, `user`) e senhas fracas (`Welcome2021`, `12345678`), sem precisar de falhas sofisticadas de software — apenas inteligência e má escolha de senhas.

#### Fase 1: Enumeração com `enum4linux`
Antes de atacar senhas, precisamos saber quais contas existem para não disparar alarmes desnecessários nem perder tempo tentando usuários inexistentes.

* **Comando executado:**
```bash
enum4linux -a 192.168.56.101 | tee enum4_output.txt
```
* **Dissecando o comando em detalhes:**
  * **`enum4linux`**: Ferramenta de **enumeração** (coleta de informações), **NÃO** é brute force nem password spraying. Ela apenas consulta educadamente o protocolo SMB para extrair metadados, usuários e configurações do alvo.
  * **`-a`** (*all*): Ativa todas as rotinas simples de enumeração simultaneamente (usuários, grupos, compartilhamentos de rede e políticas de senha).
  * **`192.168.56.101`**: IP de rede da máquina alvo (Metasploitable 2).
  * **`|` (pipe)**: Redireciona a saída de texto do comando à esquerda como entrada para o comando da direita.
  * **`tee enum4_output.txt`**: Funciona como uma conexão em formato de "T" no encanamento — divide o fluxo em dois: mostra na tela em tempo real e grava no arquivo `enum4_output.txt`.

* **Navegando no relatório com `less`:**
```bash
less enum4_output.txt
```
*(Nota: comandos como `less arquivo | less` são apenas redundâncias ou vícios de digitação — basta digitar `less nome_do_arquivo`)*.
* **Dicas de terminal no `less`:**
  * Rolar linhas: setas direcionais ou `Espaço`.
  * Sair do leitor e voltar ao prompt: tecla **`q`** (*quit*).

* **Alvos Mapeados (RID & Identificação):**
  * **RID (*Relative Identifier*):** Identificador numérico relativo do usuário no sistema Windows/Samba (ex: `0x3e8`, `0xbb8`).
  * Contas genéricas, sem descrição ou com nomes padrão (`user`, `msfadmin`, `service`, `root`) são os alvos primários para ataques de força bruta e spray de senhas.
  * *Validação no alvo:* No laboratório, ao rodar `cat /etc/passwd` diretamente no Metasploitable, comprovou-se que as contas reveladas pelo `enum4linux` batiam 100% com os usuários reais do sistema operacional remoto.

---

#### Fase 2: Criação das Wordlists Estratégicas

Para que o ataque de Password Spraying seja silencioso e eficaz, utilizam-se listas curtas e hiper direcionadas para diminuir o ruído de rede e a chance de detecção por IDS/IPS.

* **1. Wordlist de Usuários Alvo (`SMB_users.txt`):**
```bash
echo -e 'user\nmsfadmin\nservice' > SMB_users.txt
```
  * `-e`: Habilita a interpretação do caractere de escape `\n` (quebra de linha), inserindo cada usuário em uma linha separada.

* **2. Wordlist de Senhas Prováveis (`senhas_spray.txt`):**
```bash
echo -e 'password\n123456\nWelcome123\nmsfadmin' > senhas_spray.txt
```
  * **Justificativa da escolha das senhas:**
    * `password` e `123456`: Historicamente estão no TOP 5 mundial de senhas mais vazadas em relatórios da NordPass e HaveIBeenPwned.
    * `Welcome123`: Padrão corporativo típico de "boas-vindas" atribuído provisoriamente por setores de TI, que muitos colaboradores esquecem de alterar.
    * `msfadmin`: Senha padrão de fábrica de contas administrativas de sistemas e serviços legados.

---

#### Fase 3: Execução do Password Spraying com Medusa

Diferença de conceito: o **Brute Force clássico** testa milhares de senhas contra uma única conta (bloqueando o usuário rapidamente). O **Password Spraying** testa poucas senhas contra muitos usuários de forma espaçada, sem disparar limites de bloqueio por tentativas falhas.

* **Comando do ataque:**
```bash
medusa -h 192.168.56.101 -U SMB_users.txt -P senhas_spray.txt -M smbnt -t 2 -T 50
```

* **Dissecando os parâmetros:**
  * **`-h 192.168.56.101`**: IP da máquina alvo.
  * **`-U SMB_users.txt`**: Lista com os usuários descobertos na enumeração.
  * **`-P senhas_spray.txt`**: Lista com as senhas fracas selecionadas.
  * **`-M smbnt`**: Módulo específico do Medusa para negociar autenticação SMB/Windows NT.
  * **`-t 2`**: 2 threads simultâneas por host (simula 2 usuários testando senhas).
  * **`-T 50`**: Até 50 hosts testados em paralelo (vital em auditorias de grandes redes corporativas).
  * **Volume de tentativas:** 3 usuários $\times$ 4 senhas = **12 tentativas totais** com delay protetivo entre as requisições.

* **Interpretação do Resultado do Medusa:**
  * **`ACCOUNT CHECK`**: O Medusa tentou a combinação (ex: `user:123456`), falhou e passou adiante sem insistir.
  * **`ACCOUNT FOUND`**: **Sucesso no ataque!** A credencial correta foi validada (`msfadmin:msfadmin`).
  * **`[admin access allowed]`**: O acesso obtido confirmou permissão de nível administrativo total, garantindo entrada em compartilhamentos restritos da rede corporativa.

---

## 💡 5 Exemplos Práticos Integrados (Varredura & Força Bruta)

1. **Varredura Stealth Rápida para Identificação de Versões:** Varrer as portas web e administrativas de um servidor saltando ping e identificando versões de software:
   ```bash
   nmap -Pn -sS -sV -p 22,80,443,445 192.168.56.101
   ```
2. **Auditoria de Vulnerabilidades Críticas com NSE:** Executar scripts automáticos de detecção de falhas conhecidas na aplicação web do alvo:
   ```bash
   nmap --script "vuln and safe" -p 80,443 192.168.56.101
   ```
3. **Password Spraying Rápido em SSH com Hydra:** Testar a senha corporativa de boas-vindas `Empresa2024!` contra uma lista de e-mails/usuários de forma paralela sem bloquear contas:
   ```bash
   hydra -L SMB_users.txt -p 'Empresa2024!' ssh://192.168.56.101 -t 2
   ```
4. **Quebra Offline de Hash com John the Ripper:** Quebrar um hash SHA-512 extraído do `/etc/shadow` utilizando uma wordlist padrão:
   ```bash
   john --wordlist=/usr/share/wordlists/rockyou.txt hash_shadow.txt
   ```
5. **Auditoria Específica de CMS com WPScan:** Enumerar usuários e plugins vulneráveis de um portal WordPress corporativo:
   ```bash
   wpscan --url http://192.168.56.101/blog --enumerate u,vp
   ```
