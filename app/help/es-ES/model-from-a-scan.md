---
title: Modelar a partir de un escaneo
summary: Un recorrido breve desde un escaneo láser hasta los muros: abra la nube de puntos junto a un edificio nuevo, alinéela con una planta y trace sus muros en el plano.
keywords: escaneo, escaneo láser, nube de puntos, as-built, edificio existente, levantamiento, trazar, escaneo a BIM, modelo desde escaneo, corte, alinear, escuadra, LAS, LAZ, E57, PLY, PCD, PTX, XYZ
from: ce3b9b37
---

## Qué va a hacer

Dibujará un edificio existente a partir de su escaneo láser: muros donde los muestra el escaneo, en la planta correcta y a escuadra entre sí.

## Pasos

1. **Un edificio donde dibujar.** {{ui:Archivo}} › {{ui:Edificio nuevo}}, con tantas plantas como tenga el edificio (puede añadir plantas más adelante, véase [El solar, el edificio sobre él y sus plantas](topic:site-building-and-levels)). {{ui:Dibujo}} se activa.
2. **El escaneo.** {{ui:Mostrar}} › {{ui:Nube de puntos}} y elija el archivo (LAS, LAZ, E57, PLY, PCD, PTX o XYZ: véase [Mostrar una nube de puntos junto al modelo](topic:point-clouds)). La nube se muestra en la vista 3D, y el plano muestra su **corte**: los puntos escaneados a 1200 mm (4 feet) por encima de la planta, como puntos. Es la altura a la que mejor se leen los muros, puertas y ventanas.
3. **Alinear con la planta.** Abra el menú {{ui:Escaneo}} de la barra del modelo y haga clic en {{ui:Alinear su piso con este nivel}}: la nube sube o baja hasta que el piso escaneado quede sobre la planta mostrada. Compruebe que el corte ahora atraviesa los muros.
4. **Escuadra con el edificio.** {{ui:Escaneo}} › {{ui:Girarla a escuadra con el edificio}} gira la nube para que los muros de su corte sigan los ejes del plano, de modo que los muros que dibuje con {{key:Shift}} pulsado coincidan con el escaneo. Gira alrededor del centro de los muros que encontró, así que los árboles o un muro del vecino que caigan en el corte no desvían el escaneo. Alinee primero el piso: así el corte atraviesa los muros.
5. **Trazar los muros.** Elija {{ui:Muro}} y haga clic a lo largo de los puntos: la herramienta se ajusta a los puntos escaneados (la marca de ajuste es un pequeño rombo) y también a los muros que ya haya dibujado. Un muro se dibuja sobre su eje; haga clic en el centro de las dos filas de puntos que deja un muro. Escriba su espesor eligiendo antes el tipo de muro. Después añada las puertas y ventanas donde el corte muestre los huecos.
6. **La planta siguiente.** Elija la planta superior en la lista de plantas del plano: el corte sigue la altura de corte de la planta. Vuelva a alinear el piso con esa planta solo si los pisos del escaneo no están donde están sus plantas.

## Lo que debe ver

- El corte cambia al cambiar de planta, y un corte más grueso ({{ui:Escaneo}} › {{ui:Espesor del corte}}) muestra más puntos donde el escaneo es escaso.
- {{ui:Escaneo}} › {{ui:Deshacer la alineación}} devuelve la nube a la posición que tenía al abrirla. Alinear mueve la nube solo en la vista: no se guarda en el archivo IFC, y los muros que haya dibujado no se mueven. La alineación se pierde con la nube al cambiar {{ui:Colocar}} o {{ui:Unidades}}, o al abrir otro modelo.
- {{ui:Escaneo}} › {{ui:Mostrar el corte en el plano}} oculta o muestra los puntos.

:::tip
Escaneos grandes: el plano dibuja hasta 60,000 puntos del corte y la vista 3D unos pocos millones de toda la nube, ambos elegidos de forma uniforme a lo largo del escaneo, así que un archivo grande sigue siendo rápido. Para trazar en la aplicación de dibujo, use {{ui:Trazar en CadCraft}} de la barra de la nube.
:::
