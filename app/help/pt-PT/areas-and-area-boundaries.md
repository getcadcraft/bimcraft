---
title: Áreas e limites de área
summary: Meça a área bruta de construção ou a área arrendável dentro de linhas de limite que desenha ou que tira das paredes, e liste as áreas num mapa.
keywords: área, áreas, limite de área, esquema de área, área bruta de construção, área bruta de pavimento, GFA, arrendável, plano de áreas, mapa de áreas, selecionar paredes, não fechado
from: c79f96d2
---

## O que vai fazer

Desenhe os limites de um esquema de áreas, coloque as áreas dentro deles e leia os totais.

## Onde estão as ferramentas

- Layout em friso: {{ui:Arquitetura}} › **Compartimento e área** › {{ui:Área}} e {{ui:Limite de área}}.
- Layout clássico: a barra Desenhar › menu {{ui:Compartimentos}}.

## Passos

1. Escolha {{ui:Limite de área}}. Na linha, escolha o {{ui:Esquema}}: Área bruta de construção ou Arrendável. Cada esquema tem os seus próprios limites.
2. Escolha como fazer as linhas em {{ui:Criar por}}:
   - **Desenhar**: clique ponto a ponto.
   - **Selecionar paredes: linha de centro**: clique numa parede, e a sua linha de centro passa a ser um limite.
   - **Selecionar paredes: a face onde clicou**: clique numa parede do lado que quer; essa face passa a ser o limite. Para a área bruta de construção, clique na face exterior das paredes exteriores.
3. Escolha {{ui:Área}}. Escolha o mesmo esquema, escreva um nome, número ou tipo se quiser, e clique dentro dos limites.
4. A área é medida de imediato. Selecione-a para mudar o seu nome, número ou tipo em **Propriedades**.

## O que depende de quê

- Um limite feito ao selecionar uma parede segue essa parede: mova a parede e a área é medida de novo no mesmo passo.
- Um limite que desenhou fica onde o desenhou.
- As faces de paredes que se encontram num canto encontram-se também ali, por isso quatro paredes selecionadas fecham uma área sem lacunas.
- Os limites das áreas aparecem na planta enquanto tiver uma ferramenta de compartimento ou área ativa, para que não sobrecarreguem a planta no resto do tempo.

## Se os limites não fecharem

A área fica colocada. Indica **Não fechada** e não mede nada até os limites a fecharem. Isto é apenas um aviso: nada é recusado.

## O mapa

Painel esquerdo › {{ui:Mapas}} › **Áreas**: esquema, número, nome, tipo, nível, área e perímetro, com um total. Clicar numa linha seleciona a área. {{ui:Transferir CSV}} dá a mesma tabela.

## No IFC

Uma área é um IfcSpace sem corpo: PredefinedType GFA para o esquema de área bruta de construção, USERDEFINED com ObjectType Rentable para a arrendável. Tem GrossFloorArea e GrossPerimeter, e não tem área líquida, para não ser confundida com um compartimento. Um limite é um IfcVirtualElement.

## Ainda não implementado

- Esquemas próprios (apenas Área bruta de construção e Arrendável).
- Preenchimentos a cor por tipo de área.
- Regras que colocam o limite por si, como «até à linha do vidro».

Ver também [Compartimentos e separadores de compartimentos](topic:rooms-and-separators), [Etiquetas de compartimento e área](topic:room-and-area-tags).
