---
title: Documentos e revisões (o cofre)
summary: Um passo a passo por um trabalho real: colocar uma pasta de projeto com modelos IFC sob controle, reservar um modelo, alterá-lo, devolvê-lo com uma nota, enviá-lo para revisão, aprovar e liberar, ver o histórico e o que o usa, o que uma segunda pessoa vê enquanto ele está bloqueado e como funciona com pastas na nuvem.
keywords: cofre, documentos, passo a passo, tutorial, reservar, devolver, revisão, liberar, aprovar, bloquear, histórico, onde é usado, ifc, modelo, pasta na nuvem, pasta do projeto, duas pessoas, pasta compartilhada
from: 0a753f25
---

## O que você vai fazer

Você é Ana, trabalhando na Riverside clinic com uma colega, Ben. Os modelos IFC do projeto ficam em uma pasta que vocês dois acessam (uma unidade compartilhada, uma pasta sincronizada ou uma pasta na nuvem). Ao final, um arquivo terá ido da primeira cópia até uma revisão **A** liberada, terá sido alterado de novo como **B.1**, você terá visto quem fez o quê e terá visto o que Ben vê quando você está com o arquivo.

Tudo fica guardado em uma pasta oculta `.ccvault` ao lado dos seus arquivos: sem servidor, nada enviado (uma pasta na nuvem é a exceção, veja o último passo). Para cada botão e regra em um só lugar, veja o tópico *Documentos: reserva, revisões e liberação* onde o seu aplicativo o tiver.

## 1. Configure a pasta do projeto

1. Escolha {{ui:Documentos}} ao lado de {{ui:Abrir uma pasta}} na tela inicial, ou {{ui:Documentos…}} no menu **Arquivo**.
2. Escolha {{ui:Escolha a pasta do projeto}} e selecione a pasta que contém os modelos IFC do projeto. (Pastas de projeto funcionam no Studio e em navegadores que podem abrir uma pasta, como Chrome e Edge. Em outros navegadores o painel avisa.)
3. Escolha {{ui:Alteração}} ao lado de **Você:** e digite seu nome, `Ana` (se pedir, também o nome deste computador). O painel agora diz *Você: Ana em* e o seu computador. Seu nome vai em tudo o que você fizer.
4. Escolha {{ui:Iniciar um cofre nesta pasta}} e digite o nome do projeto, `Riverside clinic`. O painel diz *Cofre iniciado para Riverside clinic.*

## 2. Coloque um arquivo sob controle

1. Abra **Arquivos fora do cofre** e escolha {{ui:Adicionar}} ao lado de `models/House.ifc`.
2. Ele aparece em **Arquivos no cofre** na revisão **A.1**, estado **Em andamento**. A.1 é a primeira cópia; o cofre guarda uma cópia de cada revisão.

## 3. Reserve, altere, devolva

1. Escolha {{ui:Aberto}} ao lado de `models/House.ifc`. O modelo abre no BimCraft e o painel fecha para que você possa vê-lo. Abra o painel de novo por {{ui:Documentos}}.
2. Abra o painel de novo e escolha {{ui:Reservar}}. A linha agora diz **Reservado para você**. Um arquivo de bloqueio é criado em `.ccvault/locks`; ninguém mais pode reservar este arquivo até você devolvê-lo.
3. Altere o modelo: mova uma parede, adicione uma porta. Salvar é recusado, a menos que o modelo esteja reservado para você, e diz por quê; Salvar como sempre funciona para uma cópia sua.
4. Abra o painel, escolha {{ui:Devolver}} e digite o que mudou (`Porta movida`). O painel diz *devolvido como A.2*. O arquivo na pasta do projeto agora é o modelo que estava aberto, e o bloqueio some. Devolver sem nenhuma alteração mantém a revisão.

Se você mudar de ideia, {{ui:Desfazer reserva}} devolve o arquivo sem uma nova revisão.

## 4. Revise e libere

1. Escolha {{ui:Enviar para revisão}}. O estado passa a **Para revisão** e o arquivo fica somente leitura.
2. Antes de aprovar, escolha {{ui:Configurações do projeto}} e liste quem pode aprovar (um nome por linha), por exemplo `Ben` e `Carla`, e marque a regra de que quem aprova deve ser alguém diferente do autor. Escolha {{ui:Salvar configurações}}. Agora o próprio cofre recusa qualquer outra pessoa.
3. Ben (ou Carla) escolhe {{ui:Aprovar}} e digita o nome de quem aprova. O estado passa a **Liberado** e a revisão passa a ser **A**, com *aprovado por* e o nome. Um arquivo liberado é somente leitura. {{ui:Devolver ao autor}} o teria devolvido a Em andamento, com um motivo.

O nome de quem aprova é o nome digitado no painel; é um registro de quem deu o aval, não uma prova de identidade.

## 5. Uma nova revisão

1. No arquivo liberado, escolha {{ui:Nova revisão}}. Você o reserva para a próxima letra.
2. Altere-o e depois escolha {{ui:Devolver}}. A revisão é **B.1**, em andamento. Libere-a do mesmo modo e ela se torna **B**. {{ui:Desfazer reserva}} antes da primeira devolução a deixa em **A**.

As letras de revisão seguem A, B … Z, AA, AB. Se o seu padrão deixa algumas letras de fora, a configuração do projeto *Usar a sequência ASME Y14.35* pula I, O, Q, S, X e Z nas próximas revisões.

## 6. Veja o que aconteceu

Escolha o nome do arquivo para abrir seus detalhes:

- **{{ui:Histórico}}**: cada evento, do mais novo para o mais antigo, com quem, qual computador e quando: *Devolvido A.2* por Ana, *Liberado* por Ben, e assim por diante.
- **{{ui:Revisões}}**: a tabela de revisões: cada revisão guardada, com sua data, quem a devolveu, a nota e quem aprovou. O cofre guarda uma cópia de cada uma em `.ccvault/revs`.
- **{{ui:Usa}}**: os documentos que um modelo IFC aponta.
- **{{ui:Usado por}}**: Usado por lista cada modelo do cofre que aponta para este arquivo.

## Modelos que apontam para outros documentos

Um modelo IFC que aponta para outros documentos da pasta (desenhos, tabelas) os mostra em **Usa**, e cada um deles mostra o modelo em **Usado por**. Devolva um documento e você pode ver quais modelos se referem a ele.

## 7. O que Ben vê enquanto você está com o arquivo

Agora reserve o arquivo de novo e peça a Ben que abra a mesma pasta do projeto no computador dele e abra o painel. Na linha do arquivo ele vê **Reservado por Ana** no computador dela **desde** a hora, e nenhum botão {{ui:Reservar}}. Se ele tentar mesmo assim, o cofre recusa: o bloqueio é um arquivo que o sistema não cria duas vezes, então duas pessoas não podem ter o arquivo ao mesmo tempo, nem no mesmo instante, quando a pasta está no disco do Studio. (Em um navegador a pasta oferece apenas uma garantia parcial, e o painel diz isso em **Pasta**.)

Se Ana estiver ausente e Ben precisar do arquivo, {{ui:Quebrar reserva}} o libera. Ele deve digitar um motivo; o motivo vai para o registro, com de quem era a reserva. Quando o projeto lista administradores, só eles podem fazer isso. Uma reserva mais antiga que o limite de atraso (14 dias por padrão) é marcada como *muito tempo*. Depois da quebra, a devolução tardia de Ana é recusada, para que vocês dois não sobrescrevam um ao outro.

## 8. Pastas na nuvem

Uma pasta na nuvem é uma pasta de projeto guardada no armazenamento em nuvem da sua equipe, então a equipe não precisa de uma unidade compartilhada. No Studio, conectado à sua conta CadCraft, o painel mostra {{ui:Abrir uma pasta na nuvem}} ao lado de {{ui:Escolha a pasta do projeto}}. Escolha-o e selecione a pasta, listada como espaço de trabalho / pasta. Um proprietário do espaço de trabalho cria a pasta primeiro, e o armazenamento em nuvem da equipe precisa estar em vigor. Tudo acima funciona do mesmo modo; o servidor cria o bloqueio, que é rigoroso entre pessoas. Se você não estiver conectado, o painel pede para entrar. Em uma aba comum do navegador o botão da nuvem não é oferecido; use o Studio.

## Experimente

Faça os oito passos acima com uma cópia de um arquivo real. Para os passos de duas pessoas, você precisa de outra pessoa, ou de duas janelas com dois nomes. Se você experimentar com uma pasta compartilhada real, a página de testes da comunidade lista uma verificação que pede exatamente isso e aceita resultados.
