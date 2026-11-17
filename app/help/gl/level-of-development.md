---
title: Nivel de desenvolvemento (LOD) e comprobacións de fitos
summary: Asigne un nivel de desenvolvemento aos elementos, vexa de onde procede, compare o modelo co LOD que pide un fito e corrixa as etiquetas que faltan e os cuartos sen nome. Todas as comprobacións aconsellan; ningunha bloquea.
keywords: lod, nivel de desenvolvemento, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, fito, táboa de fitos, comprobacións do modelo, etiquetas que faltan, cuartos sen nome, xenérico cedo, clase IFC, clasificación
from: 2091c79b
---

## Que vai facer

Indique canto está desenvolvido cada elemento e despois comprobe o modelo completo contra o que pide un fito do proxecto.

## Pasos

1. Escolla un elemento (ou varios) e abra {{ui:Propiedades}}. Busque {{ui:Nivel de desenvolvemento}}.
2. Escolla un nivel da lista. Cada nivel recibe o nome do que significa e inclúe os niveis inferiores. Un paso de Desfacer cobre toda a selección.
3. Lea de onde procede o nivel: deste elemento, do seu tipo ou dunha marca verificada en obra.
4. Para comprobar o modelo, abra {{ui:Comprobacións do modelo}} á esquerda e despois {{ui:Fitos LOD}}. Escolla o fito e a táboa (a táboa inicial ou o seu propio ficheiro CSV ou JSON con {{ui:Carga}}).
5. Prema {{ui:Comprobar o modelo}}. Os totais e unha liña para cada fila da táboa mostran o que chegou ao seu nivel e o que non; os achados aparecen tamén na lista de Problemas.
6. En {{ui:Etiquetas que faltan e cuartos sen nome}}, prema {{ui:Buscar}}, edite as propostas se o desexa e prema {{ui:Aplicar}}.

## Que debe ver

- O nivel que escolleu no elemento, xunto coa súa clase IFC e os códigos de clasificación.
- Totais e filas para o fito. Unha táboa nunca cambia o que significa un nivel: a escala está fixa e a táboa só indica que nivel necesita un fito.
- «Manterse xenérico cedo»: consello para manter os elementos xenéricos nun fito inicial. É só un consello.

## Cousas que convén saber

- Nada aquí bloquea. Un modelo por debaixo do nivel que pide un fito aparece listado, non rexeitado.
- As tres partes dun nivel (xeometría, información e documentación) poden definirse cada unha; unha marca indica cumprido, por debaixo ou sen indicar.
