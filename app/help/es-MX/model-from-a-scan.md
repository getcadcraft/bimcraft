---
title: Modelar desde un escaneo
summary: Un recorrido breve desde un escaneo láser hasta los muros: abra la nube de puntos junto a un edificio nuevo, alínela con un nivel y trace sus muros en la planta.
keywords: escaneo, escaneo láser, nube de puntos, según lo construido, edificio existente, levantamiento, trazar, escaneo a BIM, modelo desde escaneo, corte, alinear, escuadra, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Qué hará

Dibuje un edificio existente a partir de su escaneo láser: muros donde el escaneo los muestra, en el nivel correcto y a escuadra entre sí.

## Pasos

1. **Un edificio donde dibujar.** {{ui:Archivo}} › {{ui:Edificio nuevo}}, con tantos niveles como tenga el edificio (puede agregar niveles después; vea [El terreno, el edificio sobre él y sus niveles](topic:site-building-and-levels)). {{ui:Dibujo}} se activa.
2. **El escaneo.** {{ui:Mostrar}} › {{ui:Nube de puntos}} y elija el archivo (LAS, LAZ, E57, PLY, PCD, PTX o XYZ: vea [Mostrar una nube de puntos junto al modelo](topic:point-clouds)). La nube aparece en la vista 3D, y la planta muestra su **corte**: los puntos escaneados a 1200 mm (4 ft) por encima del nivel, como puntos. Esa es la altura donde los muros, puertas y ventanas se leen mejor.
3. **Alínela con el nivel.** Abra el menú {{ui:Escaneo}} de la barra del modelo y haga clic en {{ui:Alinear su piso con este nivel}}: la nube sube o baja hasta que el piso que escaneó quede sobre el nivel mostrado. Compruebe que el corte ahora atraviese los muros.
4. **A escuadra con el edificio.** {{ui:Escaneo}} › {{ui:Girarla a escuadra con el edificio}} gira la nube para que los muros de su corte queden paralelos a los ejes de la planta, de modo que los muros que dibuje manteniendo presionada {{key:Shift}} se alineen con el escaneo. Gira alrededor del centro de los muros que encontró, así que árboles o un muro del vecino que queden en el corte no desvían el escaneo. Alinee primero el piso: así el corte atraviesa los muros.
5. **Trace los muros.** Elija {{ui:Muro}} y haga clic a lo largo de los puntos: la herramienta se ajusta a los puntos escaneados (la marca de ajuste es un pequeño rombo) y también a los muros que ya dibujó. Un muro se dibuja sobre su línea central, así que haga clic en el centro de las dos filas de puntos que deja un muro; para indicar su espesor, elija primero el tipo de muro. Después agregue las puertas y ventanas donde el corte muestre los huecos.
6. **El siguiente nivel.** Elija el nivel superior en la lista de niveles de la planta: el corte sigue la altura de corte del nivel. Alinee el piso con ese nivel otra vez solo si los pisos del escaneo no coinciden con sus niveles.

## Qué debe ver

- El corte cambia al cambiar de nivel, y un corte más grueso ({{ui:Escaneo}} › {{ui:Espesor del corte}}) muestra más puntos donde el escaneo es escaso.
- {{ui:Escaneo}} › {{ui:Deshacer la alineación}} devuelve la nube a la posición que tenía al abrirse. Alinear mueve la nube solo en la vista: no se guarda en el archivo IFC, y los muros que dibujó permanecen en su lugar. La alineación se va con la nube al cambiar {{ui:Colocar}} o {{ui:Unidades}}, o al abrir otro modelo.
- {{ui:Escaneo}} › {{ui:Mostrar el corte en el plano}} oculta o muestra los puntos.

:::tip
Escaneos grandes: la planta dibuja hasta 60,000 puntos del corte y la vista 3D unos pocos millones de la nube completa, ambos tomados de manera uniforme a lo largo del escaneo, así un archivo grande sigue siendo rápido. Para trazar en la aplicación de dibujo, use {{ui:Trazar en CadCraft}} en la barra de la nube.
:::
