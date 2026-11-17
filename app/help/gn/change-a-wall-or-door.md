---
title: Cambiar un muro, puerta o ventana
summary: Hacé clic en un muro, puerta o ventana dibujado y cambiá su tipo, tamaño, altura o lugar en Propiedades, o arrastralo en la planta; cada cambio es un paso de deshacer.
keywords: escuadrar, cuadrar, 90, ángulo recto, sesgo, ángulo, orto, tamaño de ambiente, cara interior, cara exterior, medir desde, distancia de desplazamiento, distancia escrita, curvo, arco, altura de arco, radio, línea de ubicación, justificación, cambiar, editar, propiedades, tipo de muro, espesor, longitud, altura, desfase de base, tope, nivel, invertir, exterior, tamaño de puerta, tamaño de ventana, antepecho, distancia, mover, agarre, arrastrar, cambiar tipo, varios
from: 63052d5d
---

## Lo que vas a hacer

Cambiá lo que dibujaste: elegí un muro, puerta o ventana, y escribí un número nuevo en **Propiedades** o arrastralo en la planta. La planta y la vista 3D siguen el cambio, las esquinas se vuelven a unir, y las puertas y ventanas permanecen en sus muros.

## Cambiar un muro

1. Con {{ui:Draw}} activado y {{ui:Select}} activado, hacé clic en el muro en la planta (o en la vista 3D).
2. **Propiedades** muestra un recuadro con los números del muro. Cambiá uno y presioná {{key:Enter}}:
   - **Wall type**: otro de los tipos iniciales. El espesor y las capas cambian con él.
   - **Thickness**: cualquier espesor. El tipo conserva sus otras capas y su capa principal (los montantes o el bloque) absorbe la diferencia, por ejemplo "Exterior 2×6, 200 mm".
   - **Measure from**: **Centre line**, **Inside face** o **Outside face**. **Length** y **Room size** se leen y se fijan desde allí. Outside face es lo que muestran las cotas de la planta.
   - **Length**: el extremo del muro se mueve a lo largo de su línea. El muro unido en ese extremo se mueve en escuadra consigo mismo y conserva su ángulo.
   - **Room size** (cuando hay un muro paralelo al otro lado del ambiente): escribí el tamaño que querés. Este muro se mueve en escuadra y los muros unidos se estiran para seguirlo.
   - **Move square**: escribí cuánto mover el muro en escuadra consigo mismo: un número positivo lo saca, un número negativo lo mete.
   - **Angle to joined wall**: el ángulo con el muro unido en su inicio. Escribí 90 para ponerlo en escuadra. Un muro que no está unido a nada muestra **Direction**, en grados desde el este.
   - {{ui:Square up}}: devuelve a ángulos rectos los muros conectados a este, siguiendo la dirección en la que corre la mayor parte de su longitud. Funciona sobre todo el ambiente o conjunto conectado, sin importar cuál de sus muros elijas. Un muro más de 10 grados fuera de un ángulo recto queda como está, así que uno puesto a 45 grados está a salvo. Un {{ui:Undo}} deshace todo.
   - **Wall height**: **Up to the level above** sigue ese nivel; **Up to Level 3** (y cualquier nivel más arriba) hace un muro que atraviesa los niveles intermedios; escribir una altura fija cuánto queda el tope por debajo o por encima de ese nivel. **Fixed height** mantiene el número que escribas. **Runs through** lista los niveles que atraviesa ese muro: se dibuja más claro en sus plantas, los ambientes allí cierran contra él, y se pueden colocar puertas y ventanas en él desde esas plantas. Se mueve y se da forma en el nivel donde empieza.
   - **Base offset**: cuánto por encima del nivel empieza el muro. Su tope queda donde estaba.
   - **Outside**: {{ui:Flip}} pone las capas exteriores en la otra cara.
   - **Location line**: **Center line**, **Outside face**, **Inside face**, **Left face** o **Right face**. Cambiarla no mueve nada. Después, cuando el muro se hace más grueso (por tipo o por **Thickness**) o se invierte su exterior, la línea de ubicación queda en su lugar y el muro crece o se invierte alrededor de ella. Un muro recto que llega a ella en una esquina la sigue, así la esquina sigue cerrada. La línea de ubicación del muro elegido se dibuja de trazos en la planta. Elegí varios muros para fijarla en todos.
   - **Arc height** (muros curvos): cuánto se arquea el medio respecto de una línea recta. 0 lo deja recto; un valor negativo lo arquea hacia el otro lado. El radio se muestra al lado.
3. Cada cambio es un paso en **Cambios**; {{ui:Undo}} lo deshace.

## Arrastrar un muro en la planta

Cuando un muro está elegido, muestra tres agarres: un cuadrado en cada extremo y un círculo en el medio.

- Arrastrá un extremo para alargar, acortar o girar el muro. Se ajusta como la herramienta Wall, y se alinea en escuadra con el muro unido en su otro extremo cuando estás a menos de 3 grados; {{key:Shift}} lo mantiene en los ejes de la planta.
- Los muros unidos al extremo que arrastrás mantienen su ángulo: sus extremos se deslizan a lo largo de sus propias líneas para encontrar la nueva línea del muro, así que nada queda inclinado. Mantené presionado {{key:Mod}} para un arrastre libre (el extremo del muro unido sigue al tuyo y ese muro gira), o {{key:Alt}} para romper las uniones en este muro.
- Arrastrá el medio para mover todo el muro en escuadra consigo mismo, en cualquier dirección. Sus esquinas se deslizan a lo largo de los muros unidos, así que esos muros mantienen su ángulo.
- Mantené {{key:Mod}} mientras arrastrás el medio para un movimiento libre, cuando sí querés romper el ángulo. {{ui:Square up}} lo devuelve.
- Mientras sostenés un agarre, escribí una distancia y presioná {{key:Enter}} (o soltá): el muro va exactamente esa distancia, en la dirección en que arrastrabas. {{key:Esc}} cancela el movimiento.
- Un muro curvo elegido muestra agarres en sus extremos y un agarre redondo en el medio de su arco. Arrastrá el agarre redondo para curvarlo.
- Las puertas y ventanas permanecen en el muro. Un muro demasiado corto para lo que contiene se rechaza con "It doesn't fit in that wall."

## Cambiar una puerta o ventana

1. Hacé clic en la puerta o ventana en la planta.
2. En **Propiedades**: **Type** (otra puerta o ventana del mismo tipo), **Width**, **Height**, **Sill** (ventanas), **From the start** y **From the end** (la distancia desde cada extremo de la cara del muro hasta su borde), **Hinges** {{ui:Flip}} (puertas de una hoja y ventanas de abrir), en lugar de eso las puertas corredizas, de bolsillo, de granero y plegables dicen **Opens to**; las ventanas fijas, colgadas y de cuadro y las puertas dobles no tienen ninguno), y **Swings to** (puertas) o **Frame side** (ventanas) {{ui:Flip}}.
3. O arrastrala a lo largo de su muro, o hacia otro muro: ver [Puertas y ventanas](topic:doors-and-windows).

## Cambiar varios a la vez

Elegí varios muros (o varias puertas, o varias ventanas) con {{key:Shift}}+clic o {{key:Mod}}+clic. **Propiedades** ofrece lo que tienen en común: **Change type…**, la altura, el tamaño. Un cambio los fija a todos, y un {{ui:Undo}} deshace todo.

## Bueno saber

- Los números se muestran en las {{ui:Units}} elegidas en la barra de herramientas.
- Los muros, puertas y ventanas de otros programas muestran sus datos IFC en **Propiedades** como antes, sin este recuadro.
