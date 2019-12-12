# cron-jobs
 > Estudos feitos utilizando cron jobs como plugin hapi.

[![NPM](https://img.shields.io/badge/node-v10.16.3-sucess)](https://nodejs.org/en/download/)

Está biblioteca é utilizada para fazer agendamento de tarefas.

# Utilização
Antes de utilizar ou fazer testes, instale as dependências:

```
 # npm ci
```

e depois inicie o servidor:

```
 # npm start
```

# Exemplos

### Expressões
As expresões cron se resumem em: "segundo" "minuto" "hora" "dia-do-mes" "mes" "ano"

Expressão para rodar a cada 30 segundos a partir do segundo 0: 
0/30 * * * * *

Um bom site para gerar expressões é o [Cron Maker](http://www.cronmaker.com/)

### Adicionar
Para adicionar um novo agendamento basta acionar a rota /adicionar, enviando a expressão cron e um id:

![Captura de Tela_dde-desktop_20191212154948](https://user-images.githubusercontent.com/39804819/70740112-33378d80-1cf7-11ea-86f3-288fef78b0ce.png)

### Remover
Para remover um agendamento existente, basta acionar a rota /remover, enviando apenas o id:

![Captura de Tela_dde-desktop_20191212154935](https://user-images.githubusercontent.com/39804819/70740154-49dde480-1cf7-11ea-8f6a-17e5a400b187.png)
