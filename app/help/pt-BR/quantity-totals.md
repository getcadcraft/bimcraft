---
title: Somar quantitativos, listar elementos e tabelar espaços
summary: Conte elementos e some os seus comprimentos, áreas, volumes ou qualquer propriedade numérica, agrupados por qualquer propriedade; liste uma linha por elemento; ou tabele os espaços com as suas áreas e volumes. Cada um é baixado como CSV.
keywords: quantitativo, quantidades, levantamento, totais, soma, orçamento, tabela, planilha de quantitativos, boq, qto, csv, agrupar por, contar, comprimento, área, volume, espaços, ambientes, tabela de ambientes, tabela de áreas, lista de elementos
from: e2e7210c
---

## O que você vai fazer

Obter totais de um modelo: comprimentos de paredes por pavimento, contagens de portas por tipo, volume de lajes por material, o custo de cada zona.

## Passos

1. Abra um modelo IFC.
2. Abra {{ui:Totais de quantitativos}} no painel esquerdo.
3. Em {{ui:Contar}}, escolha {{ui:Todos os elementos}} ou apenas os escolhidos.
4. Em {{ui:Agrupar por}}, escolha uma propriedade, como {{ui:Classe}}. Clique em {{ui:Adicionar um grupo}} para dividir mais, até três, por exemplo por {{ui:Pavimento}}.
5. Em {{ui:Somar}}, marque os números a totalizar. Os conjuntos de quantidades do modelo já vêm marcados.
6. Clique em {{ui:Baixar CSV}} para abrir a tabela em uma planilha.

## O que você deve ver

- Uma linha por grupo com quantos elementos ele tem e cada total, e uma linha de total.
- Elementos sem valor são contados, mas não somam nada. Quando isso acontece, o CSV adiciona uma coluna "de fora" ao lado do total para você ver quantos são.
- Os números estão nas unidades do próprio arquivo, como o arquivo os guarda, frequentemente milímetros para comprimentos.

## Uma linha por elemento, ou os espaços

Altere {{ui:Exibir}}:

- **Uma linha por elemento**: cada elemento em sua própria linha, com as propriedades em {{ui:Colunas}} e os números em {{ui:Somar}}. O CSV começa com o GlobalId de cada elemento. Clique no primeiro valor de uma linha para escolher esse elemento.
- **Espaços**: cada ambiente com o seu número, nome, pavimento, área e volume, e os totais deles. Áreas e volumes vêm das quantidades do espaço como o arquivo as declara. Quando o arquivo não as tem, são medidos a partir da forma do espaço em m² e m³ e exibidos em itálico; o CSV indica qual é qual.

## Próximos passos

- [Localizar elementos por classe, nome ou propriedade](topic:find)
- [Colorir elementos por uma propriedade](topic:color-by-property)

## Infraestrutura (IFC 4.3)

Escolha **Infraestrutura (IFC 4.3)** na lista de vistas para ver estradas, ferrovias, pontes e obras marítimas totalizadas por classe e tipo, com o comprimento, a área e o volume que o próprio arquivo declara. Uma quantidade que o arquivo não declara fica em branco, nunca calculada. **Enviar quantitativos de infraestrutura ao TakeoffCraft** salva um arquivo `.quantities.json` que o TakeoffCraft abre como quantitativos tipados.
