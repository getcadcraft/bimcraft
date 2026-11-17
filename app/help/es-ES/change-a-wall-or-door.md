---
title: Cambiar un muro, puerta o ventana
summary: Haga clic en un muro, puerta o ventana dibujados y cambie su tipo, tamaño, altura o lugar en Propiedades, o arrástrelo en la planta; cada cambio es un paso de deshacer.
keywords: cuadrar, escuadra, 90, ángulo recto, oblicuo, ángulo, orto, tamaño de espacio, cara interior, cara exterior, medir desde, distancia de desplazamiento, distancia escrita, curvo, arco, altura del arco, radio, línea de referencia, justificación, cambiar, editar, propiedades, tipo de muro, espesor, longitud, altura, desfase de base, cota superior, nivel, invertir, exterior, tamaño de puerta, tamaño de ventana, antepecho, distancia, mover, pinzamiento, arrastrar, cambiar tipo, varios
from: 63052d5d
---

## Qué hará

Cambie lo que dibujó: elija un muro, puerta o ventana y escriba un número nuevo en **Propiedades**, o arrástrelo en la planta. La planta y la vista 3D se actualizan, las esquinas vuelven a unirse, y las puertas y ventanas permanecen en sus muros.

## Cambiar un muro

1. Con {{ui:Dibujo}} y {{ui:Seleccionar}} activados, haga clic en el muro de la planta (o en la vista 3D).
2. **Propiedades** muestra un cuadro con los números del muro. Cambie uno y pulse {{key:Enter}}:
   - **Tipo de muro** (Wall type): otro de los tipos iniciales. El espesor y las capas cambian con él.
   - **Espesor** (Thickness): cualquier espesor. El tipo conserva sus otras capas, y su capa principal (los montantes o el bloque) absorbe la diferencia, por ejemplo «Exterior 2×6, 200 mm».
   - **Medir desde** (Measure from): **Línea central**, **Cara interior** o **Cara exterior**. **Longitud** (Length) y **Tamaño del espacio** (Room size) se leen y se fijan desde ahí. La cara exterior es lo que muestran las cotas de la planta.
   - **Longitud** (Length): el extremo del muro se mueve a lo largo de su línea. El muro unido en ese extremo se mueve en escuadra consigo mismo y conserva su ángulo.
   - **Tamaño del espacio** (Room size, cuando hay un muro paralelo al otro lado del espacio): escriba el tamaño que quiere. Este muro se mueve en escuadra y los muros unidos se estiran para seguirlo.
   - **Desplazar en escuadra** (Move square): escriba cuánto mover el muro en escuadra consigo mismo. Un número positivo lo saca; uno negativo lo mete.
   - **Ángulo con el muro unido** (Angle to joined wall): el ángulo con el muro unido en su inicio. Escriba 90 para ponerlo en escuadra. Un muro que no está unido a nada muestra **Dirección** (Direction), en grados desde el este.
   - {{ui:Cuadrar}}: vuelve a poner en ángulo recto los muros conectados a este, según la dirección en la que discurre la mayor parte de su longitud. Funciona sobre todo el espacio o conjunto conectado, sea cual sea el muro que elija. Un muro que se desvíe más de 10 grados del ángulo recto se queda como está, así que uno a 45 grados es seguro. Un {{ui:Deshacer}} lo deshace todo.
   - **Altura del muro** (Wall height): **Hasta la planta superior** sigue a esa planta; **Hasta la planta 3** (y cualquier planta más alta) crea un muro que atraviesa las plantas intermedias. Escribir una altura entonces fija a qué distancia por debajo o por encima de esa planta queda la cota superior. **Altura fija** mantiene el número que escriba. **Atraviesa** (Runs through) lista las plantas que atraviesa ese muro: se dibuja más claro en sus plantas, los espacios allí se cierran contra él, y desde esas plantas se pueden colocar puertas y ventanas en él. Se mueve y se reforma en la planta donde empieza.
   - **Desfase de base** (Base offset): a qué altura sobre la planta empieza el muro. Su cota superior se queda donde estaba.
   - **Exterior** (Outside): {{ui:Invertir}} pone las capas exteriores en la otra cara.
   - **Línea de referencia** (Location line): **Línea central**, **Cara exterior**, **Cara interior**, **Cara izquierda** o **Cara derecha**. Cambiarla no mueve nada. Más adelante, cuando el muro se engruese (por tipo o por **Espesor**) o se invierta su exterior, la línea de referencia se queda fija y el muro crece o se invierte alrededor de ella. Un muro recto que llegue a ella en una esquina la sigue, así que la esquina sigue cerrada. La línea de referencia del muro elegido se dibuja discontinua en la planta. Elija varios muros para fijarla en todos a la vez.
   - **Altura del arco** (Arc height, muros curvos): cuánto se abomba el centro respecto a una línea recta. 0 lo deja recto; un valor negativo lo abomba hacia el otro lado. El radio aparece junto a él.
3. Cada cambio es un paso en **Cambios**; {{ui:Deshacer}} lo deshace.

## Arrastrar un muro en la planta

Cuando hay un muro elegido, muestra tres pinzamientos: un cuadrado en cada extremo y un círculo en el centro.

- Arrastre un extremo para alargar, acortar o girar el muro. Se ajusta como la herramienta Muro, y se alinea en escuadra con el muro unido en su otro extremo cuando está a menos de 3 grados; {{key:Shift}} lo mantiene sobre los ejes de la planta.
- Los muros unidos en el extremo que arrastra conservan su ángulo: sus extremos se deslizan a lo largo de sus propias líneas hasta encontrar la nueva línea del muro, así que nada queda inclinado. Mantenga pulsado {{key:Mod}} para un arrastre libre (el extremo del muro unido sigue al suyo y ese muro gira), o {{key:Alt}} para romper las uniones en este muro.
- Arrastre el centro para mover todo el muro en escuadra consigo mismo, en cualquier dirección. Sus esquinas se deslizan a lo largo de los muros unidos, así que esos muros conservan su ángulo.
- Mantenga pulsado {{key:Mod}} mientras arrastra el centro para un movimiento libre, cuando sí quiera romper el ángulo. {{ui:Cuadrar}} lo devuelve a su sitio.
- Mientras mantiene un pinzamiento, escriba una distancia y pulse {{key:Enter}} (o suelte): el muro se mueve exactamente esa distancia, en la dirección en la que arrastraba. {{key:Esc}} cancela el movimiento.
- Un muro curvo elegido muestra pinzamientos en sus extremos y un pinzamiento redondo en el centro de su arco. Arrastre el pinzamiento redondo para curvarlo.
- Las puertas y ventanas permanecen en el muro. Un muro demasiado corto para lo que contiene se rechaza con el mensaje «No cabe en ese muro.»

## Cambiar una puerta o ventana

1. Haga clic en la puerta o ventana de la planta.
2. En **Propiedades**: **Tipo** (Type; otra puerta o ventana del mismo tipo), **Ancho** (Width), **Altura** (Height), **Antepecho** (Sill; ventanas), **Desde el inicio** (From the start) y **Desde el final** (From the end; la distancia desde cada extremo de la cara del muro hasta su borde), **Bisagras** (Hinges) {{ui:Invertir}} (puertas de una hoja y ventanas abatibles; las correderas, de cajón, de granero y plegables muestran **Abre hacia** en su lugar; las fijas, colgadas, de cuadro y las puertas dobles no tienen ninguno), y **Abre hacia** (Swings to; puertas) o **Lado del marco** (Frame side; ventanas) {{ui:Invertir}}.
3. O arrástrela a lo largo de su muro, o a otro muro: vea [Puertas y ventanas](topic:doors-and-windows).

## Cambiar varias a la vez

Elija varios muros (o varias puertas, o varias ventanas) con {{key:Shift}}+clic o {{key:Mod}}+clic. **Propiedades** ofrece lo que comparten: **Cambiar tipo…** (Change type…), la altura y el tamaño. Un solo cambio las ajusta todas, y un solo {{ui:Deshacer}} lo deshace todo.

## Conviene saber

- Los números se muestran en las {{ui:Unidades}} elegidas en la barra de herramientas.
- Los muros, puertas y ventanas de otros programas muestran sus datos IFC en **Propiedades**, como antes, sin este cuadro.
