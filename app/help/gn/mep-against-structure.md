---
title: Revisá caños y conductos contra la estructura
summary: Emoñepyrũ listo kuéra clash set pipe ha conducto kuéra muro, losa, viga ha columna ndive, eheka mávape oĩ hasyeteve iaislación ha peteĩ separación, ha emoĩ oporomba'e abertura CSV ha BCF-pe.
keywords: mep, clash, control de interferencias, coordinación, estructura, muros, losas, vigas, columnas, holgura, clash blando, aislación, separación, abertura, aberturas, pasaje, manga, builder's work, bcf, csv
from: 2d597f01
---

## Mba'épa rejapóta

Eñangareko servicio kuéra oikóta edificio-pe: mba'épa oike estructura-pe, mba'épa oĩ hasyeteve upe-gui, ha mba'épa muro ha losa kuéra oporomba'e apyka. Emoĩ {{ui:Control de interferencias}} tembiguái ári; sección **Caños y conductos contra la estructura** oĩ usual control ipype.

## Interferencia dura

Set lista kuéra ko'ágã ojapy **Caños y conductos**, **Muros**, **Losas y techos**, **Vigas**, **Columnas** ha **Estructura** (mbohapy-mokõi), elemento mboyve ojehechágui. Eikotevẽ {{ui:Caños y conductos × estructura}} ojepyta peteĩ ha peteĩ ojejapo hag̃ua revisión; térã ejepyta mávape ha eikotevẽ {{ui:Ejecutar}}. Ehecha [Revisar interferencias](topic:clash-check).

## Holguras

Servicio ojeporúva oikotevẽ tenda upe-pe: iaislación ha espacio ojejapo hag̃ua térã manga-pe.

1. Emoĩ peteĩ caño térã conducto ruta-pe **Aislación** espesor Propiedades-pe (ndaipóri ojehecháva).
2. Emoĩ **Separación alrededor de caños y conductos** (mm) Control de interferencias-pe.
3. Ejepyta {{ui:Verificar holguras}}: pieza oĩva hasyeteve muro, losa, viga térã columna-gui iaislación ha separación mbohapy-pe oñemoñe'ẽ, distancia omoĩva ha distancia oikotevẽva ndive. Ejepyta línea peteĩ mokõi ehecha hag̃ua.

Pieza ojepasáva muro térã losa ndive ha'e abertura, holgura ndahaʼéi; upéicha oñemoñe'ẽ ko'ápe.

## Aberturas oikotevẽva

Ejepyta {{ui:Aberturas necesarias}}. Ruta ndive centro línea muro térã losa ojepasáva, BimCraft omoñe'ẽ abertura oikotevẽva: redondo caño redondo térã conducto-pe, ndaha'eichagua-pe rectangular, tamaño ruta externo ha aislación mokõi ha separación mokõi jeyhápe, centro ojoko rupi. Ejepyta línea peteĩ ruta ha muro térã losa ehecha hag̃ua.

- {{ui:Aberturas como CSV}}: peteĩ línea abertura peteĩteĩ-pe ruta, tamaño ha aislación, abertura tamaño, elemento ojepasáva ha GlobalId, nivel, centro X, Y, Z ha mávape ruta oike.
- {{ui:Aberturas como incidencias BCF}}: peteĩ incidencia abertura peteĩteĩ-pe, cámara oñeʼẽva hechapy ha ruta ha elemento ojeporavóva, estructural ingeniero programa-pe.

:::note
Ndojekytĩ nada: aberturas ha'e lista tamaño omoʼã-kuérape. Separación ha'e nde reheve peteĩ mboyve; ndaipóri código omoʼẽva abertura tuichaiterei. Viga ha columna ha'e clash, abertura ndahaʼéi; caño mbojoaporã ha upe rupi ha'e estructural ingeniero rembiapo.
:::
