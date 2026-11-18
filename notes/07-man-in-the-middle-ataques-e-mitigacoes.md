# 🛡️ Caderno 07: Man-in-the-Middle (MitM) — Ataques e Mitigações

Este caderno documenta os conceitos, ferramentas e laboratórios práticos focados em ataques do tipo **Man-in-the-Middle (MitM)**, interceptação de tráfego, envenenamento ARP e contramedidas defensivas.

---

## 🕵️ Aula 1: O que é um Ataque do Tipo Man-in-the-Middle (MitM)?

### 1. Definição e Conceito Central
* **Conceito:** O **Man-in-the-Middle (MitM)** é um ataque de espionagem e interceptação ativa onde o invasor se posiciona secretamente no meio do fluxo de comunicação entre duas partes legítimas (ex: cliente e servidor web), sem que nenhuma delas perceba.
* **Sequestro de Sessão / Proxy Oculto:** O invasor atua como um intermediário invisível (*relay* ou *proxy não autorizado*), recebendo mensagens de uma ponta, lendo ou alterando o conteúdo e retransmitindo para a outra ponta.

### 2. Objetivos Principais de um Ataque MitM
1. **Interceptação de Informações:** Captura em tempo real de credenciais, senhas, tokens de autenticação e dados confidenciais.
2. **Manipulação de Tráfego:** Injeção de códigos maliciosos ou comandos nos pacotes em trânsito.
3. **Phishing Inline:** Redirecionamento da vítima para portais falsos ou alteração de dados de pagamento.
4. **Camuflagem e Furtividade:** Coleta de inteligência sem gerar alertas imediatos.

### 3. Ferramentas Clássicas de MitM
* **Wireshark:** Analisador de protocolo e *sniffer* de pacotes de rede.
* **Ettercap:** Especializado em ataques de rede local, envenenamento ARP (*ARP Spoofing*) e interceptação de credenciais.
* **Bettercap:** Framework moderno e modular para auditorias em redes (Wi-Fi, Bluetooth, SSL Stripping).

---

## 📡 Aula 2: Capturando Dados da Rede com Wireshark

* **O que é um Pacote:** Unidade discreta de dados que trafega pelas camadas da pilha TCP/IP.
* **Laboratório Prático (Interceptação HTTP no DVWA):**
  1. Inicialização do Wireshark na interface `eth0`.
  2. Geração de tráfego acessando o formulário de login em texto plano (`http://192.168.56.101/dvwa/login.php`).
  3. Aplicação do filtro de exibição para requisições POST: `http.request.method == "POST"`.
  4. Inspeção do pacote capturado para visualizar os parâmetros de formulário (`username` e `password` em texto claro).

---

## 🖧 Aula 3: Manipulando a Rede com Ettercap (ARP Poisoning)

### 1. O que é o Ettercap?
Suíte abrangente para MitM em redes locais (LAN), capaz de realizar envenenamento de tabela ARP (*ARP Poisoning*), sniffing de conexões ativas e injeção de filtros de tráfego.

### 2. Mecanismo de Envenenamento ARP
O protocolo ARP não possui autenticação nativa. O Ettercap envia respostas ARP forjadas contínuas para a vítima e para o gateway/servidor, associando o IP do destino ao endereço MAC do atacante. Isso obriga o tráfego a passar obrigatoriamente pela máquina do invasor (*Full Duplex*).

### 3. Laboratório Prático: MitM e Captura de Login
1. Execução do Ettercap em modo gráfico (`ettercap -G`).
2. Varredura de hosts na rede e definição dos alvos (`Target 1` e `Target 2`).
3. **Passo Crítico (IP Forwarding):** Ativação obrigatória do encaminhamento de pacotes no kernel do Linux para evitar queda de conexão na vítima:
   ```bash
   sudo sysctl -w net.ipv4.ip_forward=1
   ```
4. Acionamento do menu *ARP poisoning* e início do sniffing.
5. Captura em tempo real das credenciais HTTP POST enviadas pelo cliente.

---

## 🛡️ Medidas de Mitigação e Defesa
* **HTTPS Obrigatório com HSTS:** Força o uso de criptografia TLS de ponta a ponta, tornando o conteúdo ilegível para sniffers.
* **Dynamic ARP Inspection (DAI) e DHCP Snooping:** Recursos em switches gerenciáveis que bloqueiam pacotes ARP falsos e neutralizam ferramentas de envenenamento na camada 2.