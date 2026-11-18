# Caderno de Resumos: Terminal Linux

Este documento reúne resumos rápidos, símbolos do terminal, navegação e comandos aprendidos nas aulas.

---

## 🖥️ Anatomia do Prompt do Terminal

> **`vitor@servidor1:~$`** significa:  
> *"O usuário **vitor**, conectado no computador **servidor1**, está na sua pasta pessoal (**~**) com permissões de usuário comum (**$**)."*

* **`vitor`**: Usuário logado.
* **`@`**: Conector "em" (*at*).
* **`servidor1`**: Nome do computador/servidor (*hostname*).
* **`~` (til)**: Atalho para a pasta pessoal do usuário (*Home*, `/home/vitor`).
* **`$` (cifrão)**: Usuário comum (se fosse `#`, seria o superusuário **`root`**).

---

## 🎨 Cores Comuns no Terminal

Exemplo de visualização com o `ls` na raiz do sistema:

```text
bin   dev  home  lib32  libx32  media  opt  root  sbin  srv  sys  usr
boot  etc  lib   lib64  lost+found  mnt  proc run   snap  swap.img tmp var
```

* **Azul escuro** (`home`, `var`, `etc`...): Diretórios normais (pastas).
* **Ciano / Azul claro** (`bin`, `lib`, `sbin`...): Links simbólicos — são atalhos que apontam para outro lugar no sistema.
* **Verde com fundo destacado** (`tmp`): Diretório especial com permissão aberta para qualquer usuário escrever (*sticky bit*).
* **Branco / Cinza** (`swap.img`): Arquivo comum de texto ou dados.

---

## ⌨️ Atalhos Rápidos

* **`Ctrl + L`**: Limpa a tela (idêntico ao comando `clear`).
* **`Tab` (duas vezes)**: Autocompleta o nome de comandos ou arquivos. Se houver mais de uma opção, ele lista as alternativas.

---

## 🧭 Navegação de Diretórios

* **`pwd`** (*print working directory*): Mostra o caminho completo de onde você está (ex: `/home/vitor`).
* **`cd /`**: Vai direto para a raiz do sistema.
* **`cd ~`** ou apenas **`cd`**: Vai direto para a sua pasta pessoal (*Home*).
* **`cd ..`**: Volta um nível (um diretório atrás).
* **`cd ../backups`**: Volta um diretório e entra direto na pasta vizinha `backups`.
* **Caminho Absoluto vs Relativo:**
  * **Absoluto (`cd /var`):** Começa com `/`. Funciona de qualquer lugar.
  * **Relativo (`cd var`):** Não tem `/` no início. Procura a pasta a partir do local onde você está agora.

---

## 📂 Listar Arquivos (`ls`)

* **`ls`**: Lista em colunas horizontais.
* **`ls -1`** *(número um)*: Lista apenas nomes, um item por linha vertical.
* **`ls -l`** *(letra L)*: Lista longa e detalhada (permissões, dono, tamanho e data).
* **`ls -lh`** *(letra L + H)*: Lista com todos os detalhes (`-l`) e com tamanhos **humanizados** (`-h` de *human-readable*, ex: `4.0K`, `25M`, `1.2G` em vez de mostrar em bytes puros como `4096` ou `26214400`).
* **`ls /caminho/pasta`**: Lista o conteúdo de outra pasta sem precisar entrar nela (ex: `ls /sys/kernel`).
* **`ls | more`**: Mostra a listagem paginada (útil em pastas com muitos arquivos; aperte `Espaço` para descer).

### Parâmetros combinados no comando `rm -rfvi`

No Linux, parâmetros curtos podem ser agrupados juntos atrás de um único traço `-`:

* **`-r`** (*recursive*): remove diretórios e seus conteúdos recursivamente.
* **`-f`** (*force*): força a exclusão sem pedir confirmação.
* **`-v`** (*verbose*): modo detalhado, mostra na tela cada arquivo sendo excluído em tempo real.
* **`-i`** (*interactive*): modo interativo, pede confirmação antes de apagar cada item.

---

## 🔍 Curingas e Filtros de Busca (`*`, `?`, `[]`, `[^]`)

* **`*` (qualquer quantidade de caracteres):**
  * `ls p*`: Tudo que começa com `p`.
  * `ls *.txt`: Todos os arquivos terminados em `.txt`.
* **`?` (exatamente um caractere qualquer):**
  * `ls m?g*`: Começa com `m`, segunda letra qualquer, terceira letra `g`, resto livre.
* **`[ ]` (intervalo ou opções específicas):**
  * `ls arquivo[1-3]*`: Arquivos que tenham números de 1 até 3 (ex: `arquivo1.txt`, `arquivo1.bat`).
  * `ls arquivo[1-3].txt`: Apenas os de extensão `.txt` de 1 a 3.
  * `ls arquivo[2,5]*`: Apenas os que tenham o número 2 ou o número 5.
* **`[^ ]` (negação / exclusão):**
  * `ls arquivo[^2,5]*`: Lista todos, **exceto** o 2 e o 5.
  * `ls arquivo[^2-5]*`: Lista todos, **exceto** os que estão no intervalo de 2 a 5.

---

## 🔎 Busca no Sistema (`find`)

* **`find -name "arq*"`**: Procura recursivamente a partir da pasta atual arquivos ou pastas que comecem com `arq`.
  *(Dica: colocar o padrão entre aspas evita que o shell expanda o curinga antes da hora).*

---

## 📝 Criação e Exclusão de Arquivos e Pastas

### Criar
* **`touch arquivo1.txt`**: Cria um arquivo vazio (ou atualiza a data dele).
* **`mkdir Pasta`**: Cria uma nova pasta.
* **`mkdir Pasta1 Pasta2`**: Cria múltiplas pastas de uma só vez.
* **`mkdir 'Meus Documentos'`**: Cria pasta com espaço no nome usando aspas simples.
* **`mkdir /home/vitor/Planilhas/Escolares`**: Cria a pasta indicando o caminho completo.

### Remover
* **`rmdir Pasta`**: Remove uma pasta **somente se ela estiver vazia**.
* **`rm texto1.txt`**: Remove um arquivo específico.
* **`rm tex*`**: Remove arquivos que começam com `tex`.
* **`rm *.txt`**: Remove todos os arquivos com extensão `.txt`.
* **`rm -rf Pasta/`**:
  * `-r` (*recursive*): Apaga a pasta e todo o conteúdo dentro dela recursivamente.
  * `-f` (*force*): Força a exclusão sem pedir confirmação.  
  *(Cuidado: use com muita atenção!)*

---

## 📜 Histórico de Comandos (`history`)

* **`history`**: Mostra todos os comandos digitados anteriormente (numerados).
* **`history | grep cd`**: Filtra o histórico, mostrando só as linhas que contêm `cd` (funciona com qualquer palavra).
* **`history 10`**: Mostra apenas os últimos 10 comandos (troque o número pelo que quiser).
* **`!42`**: Executa novamente o comando de número 42 do histórico (o número aparece na listagem do `history`).
* **`!!`**: Reexecuta o último comando digitado.
* **`Ctrl + R`**: Busca interativa no histórico — você vai digitando e ele já vai mostrando o comando mais recente que combina.

### Configurando o histórico (arquivo `.bashrc` ou `.bash_profile`)

O comportamento do `history` é controlado por variáveis no arquivo de configuração do shell. Para editar:

```bash
nano ~/.bashrc
```

Variáveis mais usadas:
* **`HISTSIZE`**: Quantidade de comandos mantidos na memória durante a sessão (ex: `HISTSIZE=1000`).
* **`HISTFILESIZE`**: Quantidade de comandos salvos no arquivo `~/.bash_history` (ex: `HISTFILESIZE=2000`).
* **`HISTCONTROL=ignoredups`**: Ignora comandos duplicados consecutivos no histórico.

Após editar, aplique sem precisar fechar o terminal:
```bash
source ~/.bashrc
```

### Editando o arquivo de config rapidamente com VI e Nano

**Usando o Nano** (mais simples para iniciantes):
```bash
nano ~/.bashrc
```
* Edite o que precisar, depois: `Ctrl + O` para salvar → `Enter` para confirmar → `Ctrl + X` para sair.

**Usando o VI** (mais poderoso, mas com curva de aprendizado):
```bash
vi ~/.bashrc
```
* Ao abrir, está em **modo de visualização**. Para editar, pressione `i` (*insert*).
* Faça a edição. Para sair do modo de edição: pressione `Esc`.
* Para salvar e sair: digite `:wq` + `Enter` (*write + quit*).
* Para sair sem salvar: `:q!` + `Enter`.

---

## 👤 Criando e Gerenciando Usuários

### Criar usuário
* **`useradd junior`**: Cria o usuário `junior` (sem home directory).
* **`useradd -m junior`**: Cria o usuário **com** o home directory (`/home/junior`).
* **`useradd -m -c "Junior Farinhas" junior`**: Cria com home e com o **nome completo/comentário** associado ao perfil.
* **`useradd -m -c "Perfil destinado a controle de arquivos" arquivos`**: Mesma lógica, útil para usuários de serviço.
* **`useradd guest -c "Convidado" -m -e 26/11/2026`**: Cria o usuário `guest` com home, comentário e **data de expiração da conta** (`-e` de *expire*). Depois dessa data o usuário é bloqueado automaticamente — útil para usuários temporários.

> A ordem dos parâmetros e do login tanto faz — `useradd -m -c "..." junior` e `useradd junior -m -c "..."` funcionam igual.

### Adicionar senha
* **`passwd junior`**: Define ou altera a senha do usuário `junior`.
* **`passwd guest -e 15/11/2026`**: Define uma data de expiração pra **senha** (diferente da conta). Quando chegar nessa data, o sistema exige que o usuário troque a senha.
* **`passwd guest -e`** *(sem data)*: Força a expiração imediata da senha — o usuário precisará trocar na próxima vez que logar (útil quando você cria uma senha temporária pra ele).

### Definir senha já na criação do usuário (`-p`)

O parâmetro `-p` do `useradd` aceita a senha, mas ela precisa estar **criptografada** — não adianta passar em texto puro. Para isso, usa-se o `openssl passwd` para gerar o hash antes:

```bash
useradd convidado1 -c "Convidado Especial" -s /bin/bash -m -p $(openssl passwd -6 Senha123)
```

O `-6` gera a senha usando **SHA-512** (algoritmo moderno e seguro). O `$(...)` executa o `openssl passwd` e já passa o resultado direto pro `-p`.

> **Atenção — versão do OpenSSL:**  
> Em aulas mais antigas pode aparecer o `-crypt` no lugar do `-6`:
> ```bash
> -p $(openssl passwd -crypt Senha123)
> ```
> O `-crypt` usa um algoritmo DES antigo e foi **removido no OpenSSL 3.x**. Se você tentar e receber o erro `passwd: Unknown option: -crypt`, sua máquina tem OpenSSL 3.x — use `-6` no lugar. Para confirmar sua versão: `openssl version`.

### Alterar usuário existente (`usermod`)
Criou o usuário mas esqueceu algum parâmetro? Usa o `usermod` pra alterar sem precisar excluir:
* **`usermod guest -s /bin/bash`**: Altera o shell do usuário `guest` para o Bash.

### Definir o shell do usuário (alternativa com `chsh`)
```bash
chsh -s /bin/bash junior
```
* **`chsh`**: *change shell* — muda o shell de login do usuário.

Depois disso, ao usar `su junior`, já aparece normal: `junior@servidor1:/$`

### Criar usuário já com tudo de uma vez (como sudo)
```bash
sudo useradd -m -c "Junior Farinhas" -s /bin/bash junior
```

### Excluir usuário
* **`userdel -f junior`**: Exclui o usuário forçando (`-f` de *force*), mas **mantém** o diretório home.
* **`userdel -r -f junior`**: Exclui o usuário **e remove** o home directory e o mail spool (`-r` de *remove*).

> Parâmetros como `-r -f` podem ser escritos juntos como `-rf` ou em qualquer ordem — `userdel -r -f junior` ou `userdel junior -r -f` funcionam igual.

---

## 🤖 Shell Scripts

### O que é um `.sh`?
`.sh` é a extensão de um **Shell Script** — um arquivo de texto com uma sequência de comandos do terminal que são executados em ordem, automatizando tarefas repetitivas. O Linux não exige a extensão para rodar, mas é uma convenção que deixa claro que aquele arquivo é um script.

### O que é o `#!/bin/bash` (Shebang)?
A **primeira linha obrigatória** de qualquer script. Diz ao sistema qual programa vai interpretar o arquivo:
* `#!` → sinaliza que é uma shebang.
* `/bin/bash` → caminho do interpretador (no caso, o Bash).

Sem ela, o sistema não sabe como executar o script.

### Criando o script

O professor criou a pasta `/scripts` na raiz e dentro dela o arquivo com o nano:
```bash
mkdir /scripts
nano /scripts/criar_user.sh
```

O script da aula ficou assim no editor — cada usuário tem sua linha de criação e logo abaixo a expiração de senha:

```bash
#!/bin/bash

echo "Criando usuarios do sistema"

useradd guest10 -c "Usuario convidado" -s /bin/bash -m -p $(openssl passwd -6 Senha123)
passwd guest10 -e

useradd guest11 -c "Usuario convidado" -s /bin/bash -m -p $(openssl passwd -6 Senha123)
passwd guest11 -e

useradd guest12 -c "Usuario convidado" -s /bin/bash -m -p $(openssl passwd -6 Senha123)
passwd guest12 -e

useradd guest14 -c "Usuario convidado" -s /bin/bash -m -p $(openssl passwd -6 Senha123)
passwd guest14 -e

echo "Finalizado!!!"
```

* **`echo`**: imprime uma mensagem na tela — serve para acompanhar o que o script está fazendo enquanto executa.
* **`passwd guestXX -e`**: logo após criar, já força que o usuário troque a senha no primeiro login.

Para salvar e sair no nano: `Ctrl + O` → `Enter` → `Ctrl + X`.

### Dando permissão de execução (`chmod`)

Ao criar o arquivo, ele ainda não tem permissão para ser executado:

```text
root@servidor1:/scripts# ls
criar_user.sh
root@servidor1:/scripts# chmod +x criar_user.sh
root@servidor1:/scripts# ls
criar_user.sh    <-- (agora aparece em verde, indicando que é executável)
```

* **`chmod`**: *change mode* — altera as permissões de um arquivo.
* **`+x`**: adiciona a permissão de **execução** (*execute*).

### Executando o script

```text
root@servidor1:/scripts# ./criar_user.sh
Criando usuarios do sistema
passwd: password expiry information changed.
passwd: password expiry information changed.
passwd: password expiry information changed.
passwd: password expiry information changed.
Finalizado!!!
```

O `./` indica "execute o arquivo que está aqui nessa pasta atual". Sem ele o terminal não encontra o script.

---

## 📄 Arquivo de senhas e configurações (`/etc/passwd`)

Para ver os usuários cadastrados e seus parâmetros:
```bash
cat /etc/passwd
```

Cada linha representa um usuário. Veja o exemplo real da aula:

```
junior:x:1001:1001:Junior Farinhas:/home/junior:/bin/bash
```

Os campos são separados por `:` (dois-pontos) e seguem esta ordem:

| Campo | Valor do exemplo | O que é |
|---|---|---|
| 1 | `junior` | Nome do usuário (login) |
| 2 | `x` | Senha — o `x` significa que ela fica guardada de forma segura em `/etc/shadow` (não fica visível aqui) |
| 3 | `1001` | **UID** — ID numérico único do usuário no sistema |
| 4 | `1001` | **GID** — ID do grupo principal do usuário |
| 5 | `Junior Farinhas` | Comentário/nome completo — é o que você definiu com o `-c` no `useradd` |
| 6 | `/home/junior` | Caminho do diretório home do usuário (definido com `-m`) |
| 7 | `/bin/bash` | Shell que o usuário usa ao logar (definido com `-s`) |

---

## 👥 Gerenciamento de Grupos (`/etc/group` e `usermod`)

### Visualizando grupos (`/etc/group`)
Para consultar os grupos existentes e quem pertence a cada um:
```bash
cat /etc/group
```

No exemplo da aula, foi criado o usuário `mariana`:
```bash
useradd mariana -c "Mariana Santos" -m -s /bin/bash -p $(openssl passwd -6 Senha123)
```
Ao verificar o `/etc/group`, ela estava apenas em seu próprio grupo criado automaticamente (`1007`), sem permissões administrativas (`adm` ou `sudo`).

### Adicionando usuário a grupos (`usermod`)
* **`-g`** *(minúsculo)*: Define o **grupo principal** (primário) do usuário (apenas um grupo).
* **`-G`** *(maiúsculo)*: Adiciona o usuário a um ou mais **grupos secundários** (separados por vírgula).

Para colocar a `mariana` tanto no grupo `adm` quanto no grupo `sudo` (dando a ela permissão de usar o comando `sudo`):
```bash
usermod -G adm,sudo mariana
```

> 💡 **Dica prática:** No dia a dia de administração, costuma-se usar `usermod -aG adm,sudo mariana`. O parâmetro `-a` (*append*) evita que você remova sem querer outros grupos secundários que o usuário já possuía!

### Saída no `/etc/group` após o comando:
```text
adm:x:4:syslog,vitor,mariana
...
sudo:x:27:vitor,mariana
```
Agora a `mariana` aparece listada no final das linhas de `adm` e `sudo`, junto com o `vitor`!

### Criando novos grupos (`groupadd`)
Para diferenciar usuários e controlar o que cada setor pode acessar:
```bash
groupadd GRP_VEN   # Grupo do setor de Vendas
groupadd GRP_ADM   # Grupo da Administração
```

### Criar usuário já definindo o grupo secundário
```bash
useradd rodrigo -c "Rodrigo Santos" -m -s /bin/bash -p $(openssl passwd -6 Senha123) -G GRP_ADM
```

### Gerenciando múltiplos grupos e o perigo do `-G` simples
Se usarmos `usermod -G` sem incluir os grupos antigos, o usuário é **substituído** e removido dos anteriores!
* Ao rodar: `usermod -G GRP_VEN vitor`, ele entra em `GRP_VEN`, mas é **retirado** de `adm` e `sudo`.
* Para restaurar: `usermod -G adm,sudo vitor`.
* Para manter todos os grupos juntos: `usermod -G adm,sudo,GRP_VEN vitor`.

### Remover usuário de um grupo específico (`gpasswd -d`)
Para remover um usuário de um único grupo sem bagunçar os demais:
```bash
gpasswd -d vitor GRP_VEN
```
* **`gpasswd`**: gerencia senhas e membros de grupos.
* **`-d`** (*delete*): remove o usuário do grupo informado.

---

## 🔒 Sistema de Permissões no Linux

Ao listar arquivos com `ls -l`, a primeira coluna indica o tipo de arquivo e as permissões de acesso:

```text
-rw-r--r-- 1 root       root          0 jun 21 18:02 arquivo-root.txt
drwxr-xr-x 3 convidado1 convidado1 4096 jun 21 14:21 convidado1
```

### 1. Tipo do item (1º caractere)
* **`-`**: Arquivo comum (ex: `-rw-r--r--`).
* **`d`**: Diretório/pasta (ex: `drwxr-xr-x`).

### 2. Divisão dos 9 caracteres de permissões (Dono, Grupo e Outros)

A partir do segundo caractere, temos 9 posições divididas em 3 blocos de 3 letras:

* **DONO (Usuário proprietário):** posições 1 a 3 (ex: `rwx`).
* **GRUPO (Grupo proprietário):** posições 4 a 6 (ex: `r-x`).
* **OUTROS (Qualquer outro usuário):** posições 7 a 9 (ex: `---`).

### Significado das letras:
* **`r`** (*read* - leitura): permissão para ler o arquivo ou listar o conteúdo da pasta.
* **`w`** (*write* - escrita): permissão para editar/salvar o arquivo ou criar/apagar itens na pasta.
* **`x`** (*execute* - execução): permissão para rodar o arquivo como programa/script ou entrar no diretório (`cd`).
* **`-`** (traço): permissão negada/ausente.

### 3. Exemplo Prático de Aplicação de Permissão
Imagine um arquivo `arquivo.txt` pertencente ao usuário `vitor` e ao grupo `vitor`, com permissões:
```text
-rw-r--r-- 1 vitor vitor 0 nov 1 20:00 arquivo.txt
```
Se o usuário logado for o **`rodrigo`**:
1. Ele é o dono (`vitor`)? **Não** (não usa o 1º bloco `rw-`).
2. Ele pertence ao grupo (`vitor`)? **Não** (não usa o 2º bloco `r--`).
3. Logo, ele se enquadra em **Outros** (o 3º bloco `r--`):
   * Possui **`r`** (pode ler o conteúdo).
   * Possui **`-`** para escrita (não pode editar nem salvar).
   * Possui **`-`** para execução (não pode rodar como script).

---

## 👑 Alterando Dono e Grupo (`chown`)

O comando **`chown`** (*change owner*) altera quem é o usuário dono e/ou qual é o grupo proprietário de um arquivo ou diretório.

### Sintaxe padrão:
```bash
chown [DONO]:[GRUPO] [DIRETÓRIO_OU_ARQUIVO]
```

* **`chown root /u`**: Altera apenas o dono para `root`.
* **`chown root:staff /u`**: Altera o dono para `root` E o grupo para `staff`.
* **`chown -R root /u`**: Altera o dono de `/u` e de todo o seu conteúdo recursivamente.

### Exemplos práticos:
1. Definindo Débora e GRP_ADM para a pasta `/adm`:
   ```bash
   chown debora:GRP_ADM /adm/
   ```
2. Definindo Mariana e GRP_VEN para a pasta `/ven`:
   ```bash
   chown mariana:GRP_VEN /ven/
   ```

---

## 🧮 Permissões Numéricas no Linux (Modo Octal / `chmod`)

Em vez de letras, o comando **`chmod`** permite usar uma soma matemática simples para definir os direitos de cada uma das 3 classes:

| Permissão | Letra | Valor Numérico |
|---|---|---|
| **Leitura** | `r` (*read*) | **4** |
| **Gravação / Escrita** | `w` (*write*) | **2** |
| **Execução** | `x` (*execute*) | **1** |
| **Nenhuma** | `-` | **0** |

### Como funciona o somatório:
* **`7`** = `4 + 2 + 1` $\rightarrow$ Leitura (`r`), Escrita (`w`) e Execução (`x`) — **acesso total**.
* **`6`** = `4 + 2` $\rightarrow$ Leitura (`r`) e Escrita (`w`).
* **`5`** = `4 + 1` $\rightarrow$ Leitura (`r`) e Execução (`x`).
* **`4`** = `4` $\rightarrow$ Apenas Leitura (`r`).
* **`0`** = `0` $\rightarrow$ Sem nenhuma permissão (`---`).

### Estrutura do comando:
```bash
chmod [SOMA_DONO][SOMA_GRUPO][SOMA_OUTROS] [ARQUIVO_OU_DIRETÓRIO]
```

### Exemplos Práticos:
* **`chmod 750 /adm/`**: Dono tem total (`7`), Grupo lê e executa (`5`), Outros sem acesso (`0`).
* **`chmod 775 /ven/`**: Dono total (`7`), Grupo total (`7`), Outros leem e entram (`5`).
* **`chmod 777 /publica`**: Acesso irrestrito para todos.

### Modo Simbólico (`+x` e `-x`):
* **`chmod +x script.sh`**: Adiciona permissão de execução.
* **`chmod -x script.sh`**: Remove permissão de execução.

---

## 💡 5 Exemplos Práticos Integrados (Linux)

1. **Automação de Provisionamento Seguro:** Criar usuário de serviço `analista_sec` com pasta home, shell bash, comentário oficial e senha com hash SHA-512 forçando expiração no 1º login:
   ```bash
   useradd analista_sec -c "Analista de Cibersegurança" -s /bin/bash -m -p $(openssl passwd -6 SenhaForte123!)
   passwd analista_sec -e
   ```
2. **Hardening de Diretório Sensível de Auditoria:** Criar pasta corporativa restrita para logs onde somente o usuário `root` grava e o grupo `sec_team` audita/lê, isolando completamente terceiros:
   ```bash
   mkdir /var/log/auditoria_interna
   chown root:sec_team /var/log/auditoria_interna
   chmod 750 /var/log/auditoria_interna
   ```
3. **Auditoria Forense de Comandos no Shell:** Rastrear execuções de comandos suspeitos envolvendo o Nmap ou remoção forçada através do histórico:
   ```bash
   history | grep -E "nmap|rm -rf|chmod"
   ```
4. **Script com Privilégio Mínimo e Execução Simbólica:** Criar um script de backup em `/scripts/backup_config.sh`, ajustar a permissão apenas de execução sem abrir para gravação:
   ```bash
   chmod 754 /scripts/backup_config.sh
   # Dono: rwx (7) | Grupo: r-x (5) | Outros: r-- (4)
   ```
5. **Varredura e Limpeza com Filtros Curingas:** Localizar e remover com segurança relatórios temporários de texto gerados por ferramentas de varredura:
   ```bash
   rm -vi /tmp/scan_temp[1-5]*.txt
   ```
