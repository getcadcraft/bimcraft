---
title: Grupos de modelos
summary: Faça de elementos escolhidos um grupo com nome, volte a colocar o grupo noutro lugar e altere uma cópia para as alterar todas.
keywords: grupo, grupo de modelos, agrupar, desagrupar, instância, cópia, repetir, unidade tipo, vão, apartamento, editar grupo, IfcGroup
from: 121c5027
---

## O que vai fazer

Agrupe um vão tipo, coloque-o várias vezes e altere todas as cópias alterando uma só.

## Onde está a ferramenta

- Disposições em friso: {{ui:Arquitetura}} › **Modelo** › {{ui:Grupo de modelo}}.
- Disposição clássica: a barra Desenhar › menu {{ui:Compartimentos}} › Grupo de modelo.

## Passos

1. Com Selecionar, escolha os elementos: clique num, e {{key:Ctrl}}+clique ou {{key:Shift}}+clique nos outros.
2. Escolha {{ui:Grupo de modelo}}. Passam a formar um grupo de imediato. Escreva primeiro um {{ui:Nome do grupo}} na linha para lhe dar nome, ou escreva um depois para o renomear.
3. Prima {{ui:Colocar outro}} e clique onde a cópia deve ficar: o seu canto inferior esquerdo fica no ponto em que clicou.
4. Altere qualquer cópia: mova a extremidade de uma parede, redimensione uma porta, elimine um pilar. Todas as outras cópias do grupo mudam no mesmo passo, e uma ação de Anular desfaz tudo.
5. Enquanto a ferramenta Grupo de modelo estiver ativa, um clique num elemento escolhe o grupo inteiro.

## Outras coisas que pode fazer

- {{ui:Adicionar os selecionados}}: acrescente mais elementos ao grupo que escolheu por último.
- {{ui:Desagrupar}}: esta cópia passa a ser elementos comuns. As outras cópias mantêm-se como grupo.
- Mova uma cópia inteira com {{ui:Mover}}: continua a ser o mesmo grupo num novo lugar; as outras não se movem.
- Elimine os elementos de uma cópia e essa cópia desaparece.

## O que pode estar num grupo

Paredes com as suas portas e janelas, pilares e pavimentos desenhados podem ser colocados de novo e mantidos iguais. Um grupo pode conter outros elementos também, mas então não pode ser colocado de novo ainda; a linha diz o motivo.

As cópias são movidas, não rodadas nem espelhadas.

## No IFC

Um grupo é um IfcGroup com um IfcRelAssignsToGroup para os seus membros, que continuam a ser paredes, pilares e pavimentos comuns. Cada cópia de um mesmo grupo traz o mesmo id de definição.

## Ainda não implementado

- Rodar ou espelhar uma cópia.
- Escadas, coberturas, pavimentos de compartimentos e bibliotecas de itens num grupo que volta a ser colocado.
- O perfil, a inclinação e as aberturas de uma parede não passam para as cópias.
- Grupos dentro de grupos.

Veja também [Mover, alinhar e distribuir](topic:move-align-distribute).
