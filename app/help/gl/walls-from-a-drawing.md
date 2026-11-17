---
title: Muros a partir dun debuxo calcado
summary: Convirta unha planta en DWG ou DXF en muros, portas e xanelas nun nivel, e manteña o debuxo debaixo da planta como referencia.
keywords: dwg, dxf, calcar, calcado, importar planta, converter, de CAD a BIM, de 2D a 3D, muros a partir de liñas, capas, bloques, portas a partir de bloques, subxacente, debuxo de referencia, fondo, xref, aplicación de debuxo
from: 3bf213f1
---

## Que vai facer

Use unha planta que vostede (ou outra persoa) debuxou na aplicación de debuxo como punto de partida do modelo: as súas liñas de muro convértense en muros, e os seus bloques de porta e xanela, en portas e xanelas.

## Pasos

1. Active {{ui:Debuxar}} e escolla na lista de niveis da planta o nivel que mostra o debuxo.
2. Escolla {{ui:Compilación}} › {{ui:Desde un debuxo…}}, despois {{ui:Escoller un debuxo…}} e escolla o DWG ou DXF.
3. No diálogo:
   - As **Unidades do debuxo** veñen do propio debuxo; escolla outras se non son as correctas (unha planta debuxada en pés e lida como polgadas sae doce veces máis pequena).
   - **Capas cos muros**: marque as capas nas que están as liñas de muro. As capas cuxos nomes dicen «muro» márcanse por vostede.
   - **As liñas son**: **as dúas caras de cada muro** (o xeito habitual de debuxar as plantas: cada par de liñas paralelas a menos de 600 mm pasa a ser un muro tan grosor como a separación), **as liñas centrais dos muros**, ou **unha cara**, con o muro á súa esquerda ou á súa dereita. Coas liñas centrais ou dunha cara, o tipo de muro fixa o grosor.
   - **Tipo de muro** e **Altura do muro**, igual que para a ferramenta {{ui:Muro}}.
   - **Bloques**: escolla un tipo de porta ou de xanela para cada bloque que sexa unha porta ou unha xanela, ou déixeo fóra. Os bloques cuxos nomes dicen «porta» ou «xanela» escóllense por vostede. Cada un colócase no muro onde está, tan ancho como o bloque ao longo do muro; unha porta abre cara ao lado onde se debuxa o seu arco.
   - **Onde vai**: nas coordenadas propias do debuxo, ou coa súa esquina inferior esquerda na orixe da planta.
   - **Manter o debuxo debaixo da planta deste nivel**: déixeo marcado para ver o debuxo como liñas finas debaixo do que vai facendo.
4. A liña debaixo das opcións indica cantos muros, portas e xanelas vai facer. Prema {{ui:Facelas}}.

## Que debería ver

- Os muros, portas e xanelas do nivel, unidos onde se encontran, cos espazos que pechan; todo é un só paso, así que {{key:Mod+Z}} o desfai.
- O debuxo como liñas finas debaixo da planta. {{ui:Compilación}} › {{ui:Desde un debuxo…}} lista os debuxos gardados no nivel, cada un con {{ui:Eliminar}}; eliminar un deles deixa os muros.
- No ficheiro IFC, o debuxo gardado é unha anotación do nivel (as súas liñas), así que outros programas BIM tamén o mostran.

:::note
Tamén funciona un PDF ou un escaneado: vexa [Muros a partir dun conxunto de planos](topic:walls-from-plans). Os arcos quedan fóra (BimCraft debuxa muros rectos), e tamén as liñas dentro dos bloques. As liñas sen parella en «as dúas caras» contanse no diálogo e quedan fóra: debuxe eses muros coa ferramenta {{ui:Muro}}, ou ordénos con {{ui:Modificar}} › {{ui:Recortar / estender}} (vexa [Recortar, estender e unir muros](topic:trim-extend-walls)).
:::

:::tip
¿Calcado sobre un escaneado na aplicación de debuxo? Abra aquí tamén o escaneado e comprobe os muros contra el: vexa [Modelo a partir dun escaneado](topic:model-from-a-scan).
:::
