---
title: Carretes de tubería de acero y hojas de carretes
summary: Corte un tramo de tubería de acero soldada a tope en carretes de una longitud máxima y en las soldaduras en obra que coloque, numérelos y descargue una hoja de carrete por cada uno (vista 3D, longitudes de corte, accesorios, soldaduras, lista de materiales) en PDF y CSV; los conductos obtienen una lista de corte de piezas rectas.
keywords: carrete, carretes, hoja de carrete, isométrico, fabricación, prefabricación, soldadura en obra, soldadura en taller, soldadura a tope, longitud de corte, lista de corte, lista de materiales, bom, tubería de acero, schedule 40, número de línea, lista de corte de conductos, piezas de conductos
from: 539f51de
---

## Qué hará

Convierta un tramo de tubería en las piezas que un taller suelda y un montador instala: carretes no más largos que una longitud que usted elija, divididos donde coloque soldaduras en obra, cada uno con su propia hoja.

Solo se cortan en carretes las **tuberías de acero soldadas a tope** (diámetros ASME B36.10M, codos de radio largo ASME B16.9). El cobre, el PVC y las uniones de PEX no son soldaduras a tope, así que sus tramos no tienen carretes.

## Cortar un tramo en carretes

1. Seleccione un tramo de tubería de acero. En {{ui:Propiedades}}, marque **Cortar en carretes**.
2. **Carrete más largo**: la longitud máxima a lo largo de la línea central que puede tener un carrete (6 m, unos 20 ft, como valor inicial).
3. **Número de línea**: parte del número de cada carrete. Un tramo nuevo con carretes recibe el siguiente número libre de su sistema.

Los carretes se numeran a lo largo del tramo desde su primer punto: `CHW-12-S01`, `CHW-12-S02` … (el sistema, el número de línea, el carrete). Un carrete crece pieza a pieza; la pieza que lo haría demasiado largo inicia el siguiente, y un tramo recto más largo que un carrete se corta donde el carrete está lleno.

## Colocar soldaduras en obra

1. Abra {{ui:Compilación}} y elija {{ui:Soldadura en obra}}.
2. Haga clic en una tubería con carrete donde va la soldadura en obra. Dentro de un tramo recto, la tubería se corta allí; dentro de un accesorio o una válvula, la soldadura se mueve a la unión más cercana.

Las Propiedades enumeran las soldaduras en obra del tramo, cada una con {{ui:Quitar}}. Cada cambio es un paso de {{ui:Deshacer}}.

## Hojas de carretes

En las Propiedades de un tramo con carretes:

- {{ui:Hojas de carretes (PDF)}}: una página por carrete. A la izquierda, el carrete en vista isométrica de 30°: sus tramos rectos numerados, las soldaduras en taller como puntos, las soldaduras en obra marcadas FW, y el norte del plano. A la derecha, el número, el tamaño, la serie y la longitud del carrete, y después sus **longitudes de corte**, sus **accesorios**, sus **soldaduras** (una soldadura a tope en taller en cada unión dentro del carrete, y una soldadura en obra donde se une con el siguiente carrete) y su **lista de materiales** con el peso de la tubería (peso de extremo liso ASME B36.10M).
- {{ui:Lista de carretes (CSV)}}: lo mismo, un bloque por carrete.

:::note
Las longitudes de corte son de extremo a extremo tal como se dibujan: no se descuenta separación de raíz ni margen de soldadura. Los codos son de radio largo B16.9; las tes, reducciones y válvulas son genéricas, dimensionadas a partir de la tubería, no según B16.9 ni según un fabricante, y la hoja lo indica. No se dan pesos de accesorios. Es una ayuda de delineación y coordinación, y debe dimensionarla un ingeniero.
:::

## En el archivo IFC

Cada parte de un tramo con carretes lleva **CadCraft_Spool** con su SpoolId, el tramo, el número del carrete dentro del tramo, y dónde empieza y termina a lo largo del tramo. El tramo conserva sus reglas (carrete más largo, soldaduras en obra, número de línea) en su propio conjunto, de modo que los carretes salen iguales al volver a abrir el archivo.

## Conductos: una lista de corte

Abra {{ui:Compilación}} y haga clic en {{ui:Lista de corte de conductos}}: un CSV de las piezas rectas de conducto por sistema, forma y tamaño, con cada tramo recto cortado en piezas de la **Longitud de pieza** de la barra de Conducto (1500 mm, unos 5 ft, como valor inicial) y lo que sobra. Solo longitudes: sin juntas, calibres ni conectores.
