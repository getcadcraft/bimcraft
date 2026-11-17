---
title: Somar quantidades, listar elementos e agendar espaços
summary: Contar elementos e somar os seus comprimentos, áreas, volumes ou qualquer propriedade numérica, agrupados por qualquer propriedade; listar uma linha por elemento; ou agendar os espaços com as suas áreas e volumes. Cada um se transfere como CSV.
keywords: quantidade, quantidades, medição, totais, soma, mapa, mapa de quantidades, boq, qto, csv, agrupar por, contar, comprimento, área, volume, espaços, salas, mapa de salas, mapa de áreas, lista de elementos
from: e2e7210c
---

## O que vai fazer

Obter totais de um modelo: comprimentos de paredes por piso, contagens de portas por tipo, volume de lajes por material, o custo de cada zona.

## Passos

1. Abra um modelo IFC.
2. Abra {{ui:Totais de quantidades}} no painel esquerdo.
3. Em {{ui:Contar}}, escolha {{ui:Todos os elementos}} ou apenas os selecionados.
4. Em {{ui:Agrupar por}}, escolha uma propriedade, como {{ui:Classe}}. Clique em {{ui:Adicionar um grupo}} para dividir mais, até três, por exemplo por {{ui:Piso}}.
5. Em {{ui:Somar}}, marque os números a totalizar. Os conjuntos de quantidades do modelo vêm marcados para começar.
6. Clique em {{ui:Transferir CSV}} para abrir a tabela numa folha de cálculo.

## O que deve ver

- Uma linha por grupo, com quantos elementos tem e cada total, e uma linha de total.
- Os elementos sem valor são contados, mas não somam nada. Quando isso acontece, o CSV acrescenta uma coluna "Excluídos" junto ao total, para que veja quantos são.
- Os números estão nas unidades do ficheiro, tal como o ficheiro os guarda, muitas vezes milímetros para comprimentos.

## Uma linha por elemento, ou os espaços

Altere {{ui:Mostrar}}:

- **Uma linha por elemento**: cada elemento numa linha própria, com as propriedades em {{ui:Colunas}} e os números em {{ui:Somar}}. O CSV começa com o GlobalId de cada elemento. Clique no primeiro valor de uma linha para selecionar esse elemento.
- **Espaços**: cada sala com o seu número, nome, piso, área e volume, e os respetivos totais. As áreas e os volumes vêm das quantidades do espaço, tal como o ficheiro os indica. Quando o ficheiro não os tem, são medidos a partir da forma do espaço em m² e m³ e mostrados em itálico; o CSV indica qual é qual.

## Seguinte

- [Procurar elementos por classe, nome ou propriedade](topic:find)
- [Colorir elementos por uma propriedade](topic:color-by-property)

## Infraestrutura (IFC 4.3)

Escolha **Infraestrutura (IFC 4.3)** na lista de vistas para ver estradas, caminhos-de-ferro, pontes e obras marítimas totalizados por classe e tipo, com o comprimento, a área e o volume que o próprio ficheiro indica. Uma quantidade que o ficheiro não indica fica em branco, nunca é calculada. **Enviar quantidades de infraestrutura para o TakeoffCraft** guarda um ficheiro `.quantities.json` que o TakeoffCraft abre como quantidades tipificadas.
