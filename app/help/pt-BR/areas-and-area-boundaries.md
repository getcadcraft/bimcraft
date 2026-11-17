---
title: Áreas e limites de área
summary: Meça a área bruta da edificação ou a área locável dentro de linhas de limite que você desenha ou tira das paredes, e liste as áreas em uma tabela.
keywords: área, áreas, limite de área, esquema de área, área bruta da edificação, área bruta de piso, GFA, locável, planta de áreas, tabela de áreas, selecionar paredes, não fechada
from: c79f96d2
---

## O que você vai fazer

Desenhe os limites de um esquema de área, posicione áreas dentro deles e leia os totais.

## Onde ficam as ferramentas

- Layouts em faixa de opções: {{ui:Arquitetura}} › **Ambiente e área** › {{ui:Área}} e {{ui:Limite de área}}.
- Layout clássico: barra Desenhar › menu {{ui:Ambientes}}.

## Passos

1. Escolha {{ui:Limite de área}}. Na linha, escolha o {{ui:Esquema}}: Área bruta da edificação ou Área locável. Cada esquema tem seus próprios limites.
2. Escolha como fazer as linhas em {{ui:Criar por}}:
   - **Desenhar**: clique ponto a ponto.
   - **Selecionar paredes: linha central**: clique em uma parede, e a linha central dela é um limite.
   - **Selecionar paredes: a face clicada**: clique em uma parede do lado desejado; essa face é o limite. Para a área bruta da edificação, clique na parte externa das paredes externas.
3. Escolha {{ui:Área}}. Escolha o mesmo esquema, digite um nome, número ou tipo, se quiser, e clique dentro dos limites.
4. A área é medida de imediato. Selecione a área para alterar seu nome, número ou tipo em Propriedades.

## O que depende do quê

- Um limite feito selecionando uma parede acompanha essa parede: mova a parede e a área é medida de novo na mesma etapa.
- Um limite que você desenhou fica onde você o desenhou.
- Faces de paredes que se encontram em um canto também se encontram ali, então quatro paredes selecionadas fecham uma área sem falhas.
- Os limites de área aparecem na planta enquanto uma ferramenta de ambiente ou de área está em uso, para que não poluam a planta no restante do tempo.

## Se os limites não fecham

A área é colocada assim mesmo. Ela mostra **Não fechada** e não mede nada até que os limites a fechem. Isto é uma orientação: nada é recusado.

## A tabela

Painel esquerdo › {{ui:Tabelas}} › **Áreas**: esquema, número, nome, tipo, nível, área e perímetro, com um total. Um clique em uma linha seleciona a área. {{ui:Baixar CSV}} gera a mesma tabela.

## No IFC

Uma área é um IfcSpace sem corpo: PredefinedType GFA para o esquema de área bruta da edificação, USERDEFINED com ObjectType Rentable para a área locável. Ela carrega GrossFloorArea e GrossPerimeter, e não tem área líquida, para não ser confundida com um ambiente. Um limite é um IfcVirtualElement.

## Ainda não implementado

- Esquemas próprios (somente Área bruta da edificação e Locável).
- Preenchimento de cor por tipo de área.
- Regras que posicionam o limite por você, como "até a linha do vidro".

Veja também [Ambientes e separadores de ambiente](topic:rooms-and-separators), [Etiquetas de ambiente e área](topic:room-and-area-tags).
