---
title: Carretes de tubería de acero y hojas de carretes
summary: Corte una línea de tubería de acero con soldadura a tope en carretes de una longitud máxima y en las soldaduras de campo que coloque, numérelos y descargue una hoja de carrete por cada uno (vista 3D, longitudes de corte, accesorios, soldaduras, lista de materiales) en PDF y CSV; los ductos reciben una lista de corte de piezas rectas.
keywords: carrete, carretes, hoja de carrete, isométrico, fabricación, prefabricación, soldadura de campo, soldadura de taller, soldadura a tope, longitud de corte, lista de corte, lista de materiales, bom, tubo de acero, cédula 40, número de línea, lista de corte de ductos, piezas de ducto
from: 539f51de
---

## Qué hará

Convierta una línea de tubería de acero en las piezas que un taller suelda y un instalador coloca: carretes que no superan una longitud que usted elige, divididos donde coloca soldaduras de campo, cada uno con su propia hoja.

Solo la **tubería de acero con soldadura a tope** se corta en carretes (diámetros ASME B36.10M, codos de radio largo ASME B16.9). El cobre, el PVC y el PEX no tienen uniones de soldadura a tope, así que sus tramos no tienen carretes.

## Cortar un tramo en carretes

1. Elija un tramo de tubería de acero. En {{ui:Propiedades}}, marque **Cortar en carretes**.
2. **Carrete más largo**: la mayor longitud a lo largo del eje que puede tener un carrete (6 m, unos 20 ft, para empezar).
3. **Número de línea**: parte del número de cada carrete. Un tramo nuevo con carretes recibe el siguiente número libre de su sistema.

Los carretes se numeran a lo largo del tramo desde su primer punto: `CHW-12-S01`, `CHW-12-S02` … (el sistema, el número de línea, el carrete). Un carrete crece pieza por pieza; la pieza que lo haría demasiado largo inicia el siguiente, y una longitud recta mayor que un carrete se corta donde el carrete está lleno.

## Colocar soldaduras de campo

1. Abra {{ui:Compilación}} y elija {{ui:Soldadura en campo}}.
2. Haga clic en una tubería con carretes donde va la soldadura de campo. Dentro de una longitud recta, la tubería se corta ahí; dentro de un accesorio o de una válvula, la soldadura se mueve a la unión más cercana.

{{ui:Propiedades}} enumera las soldaduras de campo del tramo, cada una con {{ui:Quitar}}. Cada cambio es un paso de {{ui:Deshacer}}.

## Hojas de carretes

En {{ui:Propiedades}} de un tramo con carretes:

- {{ui:Hojas de carretes (PDF)}}: una página por carrete. A la izquierda, el carrete en vista isométrica de 30°: sus longitudes rectas numeradas, las soldaduras de taller como puntos, las soldaduras de campo marcadas FW, y el norte del plano. A la derecha, el número del carrete, su diámetro, cédula y longitud, luego sus **longitudes de corte**, **accesorios**, **soldaduras** (una soldadura a tope de taller en cada unión dentro del carrete, y una soldadura de campo donde llega al siguiente carrete) y su **lista de materiales** con el peso de la tubería (peso de extremo liso ASME B36.10M).
- {{ui:Lista de carretes (CSV)}}: lo mismo, un bloque por carrete.

:::note
Las longitudes de corte son de extremo a extremo tal como se dibujan: no se descuenta separación de raíz ni margen de soldadura. Los codos son de radio largo B16.9; las tes, reducciones y válvulas son genéricas, dimensionadas según la tubería, no según B16.9 ni según un fabricante, y la hoja lo indica. No se dan pesos de accesorios. Auxiliar de dibujo y coordinación, dimensionado por un ingeniero.
:::

## En el archivo IFC

Cada pieza de un tramo con carretes lleva **CadCraft_Spool** con su SpoolId, el tramo, el número del carrete dentro del tramo, y dónde inicia y termina a lo largo del tramo. El tramo conserva sus reglas (carrete más largo, soldaduras de campo, número de línea) en su propio conjunto, así que los carretes vuelven iguales al abrir de nuevo el archivo.

## Ductos: una lista de corte

Abra {{ui:Compilación}} y haga clic en {{ui:Lista de corte de ductos}}: un CSV de las piezas rectas de ducto por sistema, forma y diámetro, con cada tramo recto cortado en piezas de la **Longitud de pieza** de la barra de Ducto (1500 mm, unos 5 ft, para empezar) y lo que sobra. Solo longitudes: sin costuras, calibres ni conectores.
