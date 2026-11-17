---
title: Documentos e revisões (o cofre)
summary: Um percurso passo a passo por um trabalho real: pôr uma pasta de projeto de modelos IFC sob controlo, reservar um modelo, alterá-lo, devolvê-lo com uma nota, enviá-lo para revisão, aprová-lo e libertá-lo, ver o histórico e o que o usa, o que uma segunda pessoa vê enquanto está bloqueado, e como funciona com pastas na nuvem.
keywords: cofre, documentos, percurso, tutorial, reservar, devolver, revisão, libertar, aprovar, bloquear, histórico, onde é usado, ifc, modelo, pasta na nuvem, pasta de projeto, duas pessoas, pasta partilhada
from: 0a753f25
---

## O que vai fazer

A Ana trabalha no Riverside Clinic com um colega, o Ben. Os modelos IFC do projeto vivem numa pasta a que ambos chegam (uma pasta partilhada, uma pasta sincronizada ou uma pasta na nuvem). No fim, um ficheiro terá passado da sua primeira cópia a uma revisão **A** libertada, terá sido alterado de novo como **B.1**, terá visto quem fez o quê, e terá visto o que o Ben vê quando tem o ficheiro.

Tudo fica guardado numa pasta oculta `.ccvault` ao lado dos seus ficheiros: sem servidor, nada enviado para fora (uma pasta na nuvem é a exceção, veja o último passo). Para cada botão e regra num só sítio, veja o tópico *Documentos: reservar, revisões e libertação*, onde a sua aplicação o tiver.

## 1. Configurar a pasta do projeto

1. Escolha {{ui:Documentos}} ao lado de {{ui:Abrir uma pasta}} no ecrã inicial, ou {{ui:Documentos…}} no menu **Ficheiro**.
2. Escolha {{ui:Escolher a pasta do projeto}} e escolha a pasta que tem os modelos IFC do projeto. (As pastas de projeto funcionam no Studio e em navegadores que podem abrir uma pasta, como o Chrome e o Edge. Noutros navegadores, o painel diz isso.)
3. Escolha {{ui:Alteração}} ao lado de **Utilizador:** e escreva o seu nome, `Ana` (se pedir, também o nome deste computador). O painel passa a dizer *Utilizador: Ana em* e o seu computador. O seu nome fica em tudo o que fizer.
4. Escolha {{ui:Iniciar um cofre nesta pasta}} e escreva o nome do projeto, `Riverside clinic`. O painel diz *Cofre iniciado para Riverside clinic.*

## 2. Pôr um ficheiro sob controlo

1. Abra **Ficheiros fora do cofre** e escolha {{ui:Adicionar}} ao lado de `models/House.ifc`.
2. Aparece em **Ficheiros no cofre** na revisão **A.1**, estado **Em curso**. A.1 é a sua primeira cópia; o cofre guarda uma cópia de cada revisão.

## 3. Reservar, alterar, devolver

1. Escolha {{ui:Abrir}} ao lado de `models/House.ifc`. O modelo abre no BimCraft e o painel fecha-se para o poder ver. Volte a abrir o painel a partir de {{ui:Documentos}}.
2. Volte a abrir o painel e escolha {{ui:Reservar}}. A linha diz agora **Reservado para si**. Foi criado um ficheiro de bloqueio em `.ccvault/locks`; ninguém mais pode reservar este ficheiro até o devolver.
3. Altere o modelo: mova uma parede, acrescente uma porta. Guardar é recusado a não ser que o modelo esteja reservado para si, e diz porquê; Guardar como funciona sempre para uma cópia própria.
4. Abra o painel, escolha {{ui:Devolver}} e escreva o que mudou (`Porta movida`). O painel diz *devolvido como A.2*. O ficheiro na pasta do projeto é agora o modelo que tinha aberto, e o bloqueio desapareceu. Devolver sem alterações mantém a revisão.

Se mudar de ideias, {{ui:Anular reserva}} devolve o ficheiro sem nova revisão.

## 4. Revisão e libertação

1. Escolha {{ui:Enviar para revisão}}. O estado passa a **Para revisão** e o ficheiro fica só de leitura.
2. Antes de aprovar, escolha {{ui:Definições do projeto}} e indique quem pode aprovar (um nome por linha), por exemplo `Ben` e `Carla`, e marque a regra de que quem aprova tem de ser alguém diferente do autor. Escolha {{ui:Guardar definições}}. Agora o próprio cofre recusa qualquer outra pessoa.
3. O Ben (ou a Carla) escolhe {{ui:Aprovar}} e escreve o nome de quem aprova. O estado passa a **Libertado** e a revisão passa a **A**, com *aprovado por* e o nome. Um ficheiro libertado fica só de leitura. {{ui:Devolver ao autor}} tê-lo-ia devolvido a Em curso, com um motivo.

O nome de quem aprova é o nome escrito no painel; é um registo de quem assinou, não uma prova de identidade.

## 5. Uma nova revisão

1. No ficheiro libertado, escolha {{ui:Nova revisão}}. Fica reservado para a letra seguinte.
2. Altere-o e depois escolha {{ui:Devolver}}. A revisão é **B.1**, em curso. Liberte-a da mesma forma e passa a **B**. {{ui:Anular reserva}} antes da primeira devolução deixa-o em **A**.

As letras de revisão seguem A, B … Z, AA, AB. Se a sua norma deixa algumas letras de fora, a definição de projeto *Usar a sequência da ASME Y14.35* salta I, O, Q, S, X e Z nas revisões seguintes.

## 6. Ver o que aconteceu

Escolha o nome do ficheiro para abrir os seus detalhes:

- **{{ui:Histórico}}**: cada evento, o mais recente primeiro, com quem, em que computador e quando: *Devolvido A.2* pela Ana, *Libertado* pelo Ben, e assim por diante.
- **{{ui:Revisões}}**: a tabela de revisões: cada revisão guardada, com a data, quem a devolveu, a nota e quem aprovou. O cofre guarda uma cópia de cada uma em `.ccvault/revs`.
- **{{ui:Usa}}**: os documentos para os quais um modelo IFC aponta.
- **{{ui:Usado por}}**: lista cada modelo no cofre que aponta para este ficheiro.

## Modelos que apontam para outros documentos

Um modelo IFC que aponta para outros documentos da pasta (desenhos, mapas) mostra-os em **Usa**, e cada um desses mostra o modelo em **Usado por**. Ao devolver um documento, pode ver quais os modelos que o referem.

## 7. O que o Ben vê enquanto tem o ficheiro

Agora reserve o ficheiro de novo, e peça ao Ben que abra a mesma pasta de projeto no computador dele e abra o painel. Na linha do ficheiro ele vê **Reservado por Ana em** o computador da Ana **desde** a hora, e nenhum botão {{ui:Reservar}}. Se tentar na mesma, o cofre recusa: o bloqueio é um ficheiro que o sistema não deixa criar duas vezes, por isso duas pessoas não podem ter o ficheiro ao mesmo tempo, mesmo no mesmo instante, quando a pasta está no disco no Studio. (Num navegador, a pasta só garante o melhor esforço, e o painel diz isso em **Pasta**.)

Se a Ana estiver ausente e o Ben precisar do ficheiro, {{ui:Anular a reserva de outrem}} liberta-o. Tem de escrever um motivo; fica no registo, com a reserva de quem era. Quando o projeto indica administradores, só eles podem. Uma reserva mais antiga do que o limite de desatualização (14 dias por predefinição) é marcada como *há muito tempo*. Depois da quebra, a devolução atrasada da Ana é recusada, para que os dois não se sobrescrevam.

## 8. Pastas na nuvem

Uma pasta na nuvem é uma pasta de projeto guardada no armazenamento na nuvem da sua equipa, por isso a equipa não precisa de uma unidade partilhada. No Studio, com sessão iniciada na sua conta CadCraft, o painel mostra {{ui:Abrir uma pasta na nuvem}} ao lado de {{ui:Escolher a pasta do projeto}}. Escolha-a e escolha a pasta, listada como espaço de trabalho / pasta. O proprietário do espaço de trabalho cria primeiro a pasta, e o armazenamento na nuvem da equipa tem de estar ativo. Tudo o que está acima funciona da mesma forma; o servidor cria o bloqueio, que é estrito entre pessoas. Se não tiver sessão iniciada, o painel pede para a iniciar. Num separador de navegador comum, o botão da nuvem não é oferecido; use o Studio.

## Experimente

Faça os oito passos acima com uma cópia de um ficheiro real. Para os passos a duas pessoas precisa de outra pessoa, ou de duas janelas com dois nomes. Se o fizer com uma pasta partilhada real, a página de testes da comunidade tem uma verificação que pede exatamente isto, e aceita resultados.
