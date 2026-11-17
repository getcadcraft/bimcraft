---
title: Compartimentos e separadores de compartimentos
summary: Escolha um compartimento para lhe dar nome e número e ler a sua área, perímetro e volume. Desenhe um separador de compartimento onde dois compartimentos se encontram sem parede entre eles.
keywords: compartimento, compartimentos, separador de compartimento, linha de separação, espaço, IfcSpace, nome, número, área, perímetro, volume, planta aberta, dividir um compartimento, cozinha e sala, não fechado
from: d4c1d66b
---

## O que vai fazer

Dar nome aos compartimentos que as paredes formam, e dividir um compartimento aberto em dois sem parede.

## Onde estão as ferramentas

- Esquemas de friso: {{ui:Architecture}} › **Compartimento e área** › {{ui:Room}} e {{ui:Room Separator}}.
- Esquema clássico: a barra Desenhar › menu {{ui:Rooms}}.
- Qualquer estilo de menu: os comandos chamam-se Room e Room Separator; a paleta de comandos encontra-os.

## Passos

1. Desenhe as paredes. Cada circuito fechado de paredes já é um compartimento: o BimCraft cria-o, numera-o e atribui-lhe a área à medida que desenha.
2. Escolha {{ui:Room}}. Passe sobre a planta: o compartimento sob o cursor fica realçado com a sua área, perímetro e volume.
3. Para dar nomes depressa a compartimentos, escreva primeiro na linha um {{ui:Name}} e um {{ui:Number}}, e depois clique no compartimento. O número avança um a um para o compartimento seguinte (101, 102; A-09, A-10).
4. Ou clique simplesmente num compartimento: fica selecionado, e em Propriedades estão o seu nome, número, área, perímetro, volume e a sua etiqueta.
5. Para dividir um compartimento aberto, escolha {{ui:Room Separator}} e clique em dois pontos: de parede a parede, ou de parede a outro separador. Continue a clicar para uma cadeia; Enter, Esc ou duplo clique termina.

## O que faz um separador

- Limita os compartimentos como uma parede sem espessura. As áreas dos dois compartimentos somam exatamente a área do compartimento original.
- O compartimento que contém o meio do antigo mantém o nome e o número. O outro é novo.
- Um separador que termina em aberto, sem tocar em nada numa extremidade, não divide nada. Prolongue-o e passará a dividir.
- A parte de um separador que fica dentro de uma parede é ignorada, pelo que pode encaixar nos eixos centrais das paredes.
- Selecione um separador e prima Delete para o remover: os dois compartimentos voltam a ser um só. Anular repõe-no.

## Se não houver compartimento onde clicar

A barra de estado indica-o: as paredes não fecham ali. Feche a lacuna, ou desenhe um separador através dela. Nada é recusado; simplesmente ainda não há um compartimento fechado.

## No IFC

Um compartimento é um IfcSpace com o seu número (Name), nome (LongName) e Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. O volume é a área vezes a altura até ao piso seguinte.

Um separador de compartimento é um IfcVirtualElement, a entidade que o IFC usa para uma fronteira que não é construída. Tem uma linha e nenhum corpo, pelo que outro programa não lê parede nenhuma e não conta nada para ele.

## Ainda não implementado

- Separadores curvos.
- Um compartimento que segue um teto inclinado: o volume é sempre a área vezes a altura do piso.
- As relações de fronteira de espaço (IfcRelSpaceBoundary) não são escritas, nem para paredes nem para separadores.

Ver também [Etiquetas de compartimentos e áreas](topic:room-and-area-tags), [Áreas e fronteiras de área](topic:areas-and-area-boundaries).
