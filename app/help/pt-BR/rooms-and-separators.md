---
title: Ambientes e separadores de ambiente
summary: Selecione um ambiente para nomeá-lo e numerá-lo e para ler a sua área, o perímetro e o volume. Desenhe um separador de ambiente onde dois ambientes se encontram sem parede entre eles.
keywords: ambiente, ambientes, separador de ambiente, linha de separação, espaço, IfcSpace, nome, número, área, perímetro, volume, planta aberta, dividir um ambiente, cozinha e sala, não fechado
from: d4c1d66b
---

## O que você vai fazer

Nomeie os ambientes que as paredes formam e divida um ambiente aberto em dois, sem parede.

## Onde estão as ferramentas

- Layouts com faixa de opções: {{ui:Arquitetura}} › **Ambiente e área** › {{ui:Ambiente}} e {{ui:Separador de ambiente}}.
- Layout clássico: a barra Desenhar › menu {{ui:Ambientes}}.
- Qualquer estilo de menu: os comandos têm os nomes Room e Room Separator; a paleta de comandos os encontra.

## Passos

1. Desenhe as paredes. Todo circuito fechado de paredes já é um ambiente: o BimCraft o cria, numera e informa a sua área enquanto você desenha.
2. Escolha {{ui:Ambiente}}. Passe o ponteiro sobre a planta: o ambiente sob ele acende, com sua área, perímetro e volume.
3. Para nomear ambientes rapidamente, digite primeiro um {{ui:Nome}} e um {{ui:Número}} na linha e depois clique no ambiente. O número sobe em um para o próximo ambiente (101, 102; A-09, A-10).
4. Ou simplesmente clique em um ambiente: ele é selecionado, e Propriedades mostra o seu nome, número, área, perímetro, volume e etiqueta.
5. Para dividir um ambiente aberto, escolha {{ui:Separador de ambiente}} e clique em dois pontos: de parede a parede, ou de parede a outro separador. Continue clicando para fazer uma sequência; Enter, Esc ou um duplo clique a encerram.

## O que um separador faz

- Ele delimita ambientes como uma parede sem espessura. As áreas dos dois ambientes somam exatamente o ambiente que eles formavam.
- O ambiente que contém o meio do antigo ambiente mantém o nome e o número. O outro é novo.
- Um separador que para no meio do aberto, sem tocar nada em uma das extremidades, não divide nada. Estenda-o e ele passará a dividir.
- A parte de um separador que fica dentro de uma parede é ignorada, então você pode usar snap nas linhas de centro das paredes.
- Selecione um separador e pressione Delete para removê-lo: os dois ambientes voltam a ser um. Desfazer o restaura.

## Se não houver ambiente onde você clicar

A linha de status informa isso: as paredes não fecham ali. Feche a lacuna ou desenhe um separador sobre ela. Nada é recusado; simplesmente ainda não há um ambiente fechado.

## No IFC

Um ambiente é um IfcSpace, com o seu número (Name), nome (LongName) e Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. O volume é a área vezes a altura até o nível acima.

Um separador de ambiente é um IfcVirtualElement, a entidade que o IFC usa para um limite que não é construído. Ele tem uma linha e nenhum corpo, então outro programa não lê nenhuma parede nele e não conta nada por ele.

## Ainda não implementado

- Separadores curvos.
- Um ambiente que acompanha um forro inclinado: o volume é sempre a área vezes a altura do nível.
- Relações de limite de espaço (IfcRelSpaceBoundary) não são gravadas, nem para paredes nem para separadores.

Veja também [Etiquetas de ambientes e áreas](topic:room-and-area-tags), [Áreas e limites de área](topic:areas-and-area-boundaries).
