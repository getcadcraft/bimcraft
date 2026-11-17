---
title: Spools de caño de acero y hojas de spool
summary: Cortá un tramo de caño de acero a tope soldado en spools de una longitud máxima y en las soldaduras de obra que ubicás, numeralos, y descargá una hoja de spool por cada uno (vista 3D, longitudes de corte, accesorios, soldaduras, lista de materiales) en PDF y CSV; los conductos reciben una lista de corte de piezas rectas.
keywords: spool, spools, hoja de spool, isométrico, fabricación, prefabricación, soldadura de obra, soldadura de taller, soldadura a tope, longitud de corte, lista de corte, lista de materiales, bom, caño de acero, planilla 40, número de línea, lista de corte de conductos, piezas de conductos
from: 539f51de
---

## Mba'e pe ojapóta

Convertí un tramo de caño de acero en las piezas que un taller suelda y un instalador coloca: spools que no pasan de una longitud que elegís, divididos donde ubicás soldaduras de obra, cada uno con su propia hoja.

Solo el **caño de acero a tope soldado** se corta en spools (tamaños de caño ASME B36.10M, codos en radio largo ASME B16.9). El cobre, el PVC y las uniones PEX no son soldaduras a tope, así que sus tramos no tienen spools.

## Cortar un tramo en spools

1. Elegí un tramo de caño de acero. En {{ui:Properties}}, marcá **Cut into spools**.
2. **Longest spool**: la mayor longitud de eje que puede tener un spool (6 m, unos 20 ft, para empezar).
3. **Line number**: parte del número de cada spool. Un tramo nuevo con spools toma el siguiente número libre de su sistema.

Los spools se numeran a lo largo del tramo desde su primer punto: `CHW-12-S01`, `CHW-12-S02` … (el sistema, el número de línea, el spool). Un spool crece pieza por pieza; la pieza que lo haría demasiado largo empieza el siguiente, y una longitud recta mayor que un spool se corta donde el spool se llena.

## Ubicar soldaduras de obra

1. Abrí {{ui:Build}} y elegí {{ui:Field weld}}.
2. Hacé clic en el caño con spool donde va la soldadura de obra. En una longitud recta, el caño se corta ahí; dentro de un accesorio o una válvula, la soldadura se mueve a la unión más cercana.

{{ui:Properties}} lista las soldaduras de obra del tramo, cada una con {{ui:Remove}}. Cada cambio es un paso de {{ui:Undo}}.

## Hojas de spool

En {{ui:Properties}} de un tramo con spools:

- {{ui:Spool sheets (PDF)}}: una página por spool. A la izquierda, el spool en vista isométrica de 30°: sus longitudes rectas numeradas, las soldaduras de taller como puntos, las soldaduras de obra marcadas FW, y el norte del plano. A la derecha, el número del spool, el tamaño, la planilla y la longitud, después sus **cut lengths** (longitudes de corte), **fittings** (accesorios), **welds** (soldaduras: una soldadura de taller a tope en cada unión dentro del spool, una soldadura de obra donde se encuentra con el siguiente spool) y su lista de materiales con el peso del caño (peso de extremo liso ASME B36.10M).
- {{ui:Spool list (CSV)}}: lo mismo, un bloque por spool.

:::note
Las longitudes de corte son de extremo a extremo como están dibujadas: no se descuenta ninguna separación de raíz ni margen de soldadura. Los codos son de radio largo B16.9; las tes, reducciones y válvulas son genéricas, dimensionadas según el caño, no según B16.9 ni según un fabricante, y la hoja lo indica. No se dan pesos de accesorios. Es una ayuda para el dibujo y la coordinación, dimensionada por un ingeniero.
:::

## En el archivo IFC

Cada pieza de un tramo con spools lleva **CadCraft_Spool** con su SpoolId, el tramo, el número del spool dentro del tramo, y dónde empieza y termina a lo largo del tramo. El tramo guarda sus reglas (longitud máxima de spool, soldaduras de obra, número de línea) en su propio conjunto, así que los spools vuelven iguales al abrir el archivo otra vez.

## Conductos: una lista de corte

Abrí {{ui:Build}} y hacé clic en {{ui:Duct cut list}}: un CSV de las piezas rectas de conducto por sistema, forma y tamaño, cada longitud recta cortada en piezas de la **Piece length** de la barra Conducto (1500 mm, unos 5 ft, para empezar) y lo que sobra. Solo longitudes: no incluye costuras, calibres ni conectores.
