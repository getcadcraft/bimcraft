---
title: Cambie un muro, una puerta o una ventana
summary: Haga clic en un muro, puerta o ventana dibujado y cambie su tipo, tamaño, altura o lugar en Propiedades, o arrástrelo en la planta; cada cambio es un paso de deshacer.
keywords: escuadrar, cuadrar, 90, ángulo recto, sesgo, ángulo, ortho, tamaño de habitación, cara interior, cara exterior, medir desde, distancia de desplazamiento, distancia escrita, curvo, arco, altura del arco, radio, línea de ubicación, justificación, cambiar, editar, propiedades, tipo de muro, espesor, longitud, altura, desfase de base, superior, nivel, invertir, exterior, tamaño de puerta, tamaño de ventana, antepecho, distancia, mover, pinzamiento, arrastrar, cambiar tipo, varios
from: 63052d5d
---

## Lo que hará

Cambie lo que dibujó: seleccione un muro, puerta o ventana, y luego escriba un número nuevo en **Propiedades** o arrástrelo en la planta. La planta y la vista 3D se actualizan, las esquinas se vuelven a unir, y las puertas y ventanas permanecen en sus muros.

## Cambiar un muro

1. Con {{ui:Dibujo}} y {{ui:Seleccionar}} activados, haga clic en el muro en la planta (o en la vista 3D).
2. **Propiedades** muestra un cuadro con los números del muro. Cambie uno y pulse {{key:Enter}}:
   - **Tipo de muro**: otro de los tipos iniciales. El espesor y las capas cambian con él.
   - **Espesor**: cualquier espesor. El tipo conserva sus otras capas, y su capa principal (los montantes o el bloque) absorbe la diferencia, por ejemplo "Exterior 2×6, 200 mm".
   - **Medir desde**: **Línea central**, **Cara interior** o **Cara exterior**. **Longitud** y **Tamaño de habitación** se leen y se definen desde él. Cara exterior es lo que muestran las cotas de la planta.
   - **Longitud**: el extremo del muro se mueve a lo largo de su línea. El muro unido en ese extremo se mueve en escuadra consigo mismo y conserva su ángulo.
   - **Tamaño de habitación** (cuando hay un muro paralelo al otro lado de la habitación): escriba el tamaño que quiere. Este muro se mueve en escuadra y los muros unidos se estiran para seguirlo.
   - **Mover en escuadra**: escriba cuánto mover el muro en escuadra consigo mismo: un número positivo lo mueve hacia afuera, un número negativo hacia adentro.
   - **Ángulo con el muro unido**: el ángulo con el muro unido en su inicio. Escriba 90 para ponerlo en escuadra. Un muro que no está unido a nada muestra **Dirección**, en grados desde el este.
   - {{ui:Escuadrar}}: vuelve a poner en ángulo recto los muros conectados a este, a lo largo de la dirección en que corre la mayor parte de su longitud. Funciona sobre toda la habitación o disposición conectada, con cualquiera de sus muros que seleccione. Un muro a más de 10 grados de un ángulo recto se queda como está, así que uno definido a 45 grados está a salvo. Un {{ui:Deshacer}} lo revierte todo.
   - **Altura del muro**: **Hasta el nivel superior** sigue ese nivel; **Hasta el Nivel 3** (y cualquier nivel más arriba) crea un muro que atraviesa los niveles intermedios. Al escribir una altura, se define cuánto por debajo o por encima de ese nivel queda la parte superior. **Altura fija** conserva el número que escriba. **Atraviesa** enumera los niveles que cruza ese muro: se dibuja más claro en sus plantas, las habitaciones allí cierran contra él, y puertas y ventanas se pueden colocar en él desde esas plantas. Se mueve y se reforma en el nivel donde empieza.
   - **Desfase de base**: qué tan por encima del nivel empieza el muro. Su parte superior se queda donde estaba.
   - **Exterior**: {{ui:Invertir}} pone las capas exteriores en la otra cara.
   - **Línea de ubicación**: **Línea central**, **Cara exterior**, **Cara interior**, **Cara izquierda** o **Cara derecha**. Cambiarla no mueve nada. Después, cuando el muro se engruesa (por tipo o por **Espesor**) o se invierte su exterior, la línea de ubicación permanece fija y el muro crece o se invierte alrededor de ella. Un muro recto que se encuentra con ella en una esquina la sigue, así que la esquina sigue cerrada. La línea de ubicación del muro seleccionado se dibuja con trazos en la planta. Seleccione varios muros para definirla en todos.
   - **Altura del arco** (muros curvos): cuánto se curva el centro respecto a una línea recta. 0 lo deja recto; un valor negativo lo curva hacia el otro lado. El radio se muestra junto a él.
3. Cada cambio es un paso en **Cambios**; {{ui:Deshacer}} lo revierte.

## Arrastrar un muro en la planta

Cuando un muro está seleccionado, muestra tres pinzamientos: un cuadrado en cada extremo y un círculo en el centro.

- Arrastre un extremo para alargar el muro, acortarlo o girarlo. Se ajusta igual que la herramienta Muro, y se alinea en escuadra con el muro unido en su otro extremo cuando está a menos de 3 grados; {{key:Shift}} lo mantiene sobre los ejes de la planta.
- Los muros unidos en el extremo que arrastra conservan su ángulo: sus extremos se deslizan a lo largo de sus propias líneas para encontrar la nueva línea del muro, así que nada queda inclinado. Mantenga presionado {{key:Mod}} para un arrastre libre (el extremo del muro unido sigue al suyo y ese muro gira), o {{key:Alt}} para romper las uniones en este muro.
- Arrastre el centro para mover el muro entero en escuadra consigo mismo, sin importar hacia dónde arrastre. Sus esquinas se deslizan a lo largo de los muros unidos, así que esos muros conservan su ángulo.
- Mantenga {{key:Mod}} mientras arrastra el centro para un movimiento libre, cuando sí quiera romper el ángulo. {{ui:Escuadrar}} lo devuelve.
- Mientras se mantiene un pinzamiento, escriba una distancia y pulse {{key:Enter}} (o suelte): el muro avanza exactamente esa distancia, en la dirección en que arrastraba. {{key:Esc}} cancela el movimiento.
- Un muro curvo seleccionado muestra pinzamientos en sus extremos y un pinzamiento redondo en el centro de su arco. Arrastre el pinzamiento redondo para curvarlo.
- Las puertas y ventanas permanecen en el muro. Un muro demasiado corto para lo que contiene se rechaza con "No cabe en ese muro."

## Cambiar una puerta o ventana

1. Haga clic en la puerta o ventana en la planta.
2. En **Propiedades**: **Tipo** (otra puerta o ventana del mismo tipo), **Ancho**, **Alto**, **Antepecho** (ventanas), **Desde el inicio** y **Desde el final** (la distancia desde cada extremo de la cara del muro hasta su borde), **Bisagras** {{ui:Invertir}} (puertas de una hoja y ventanas abatibles; las puertas corredizas, de cajón, de granero y plegables dicen **Abre hacia** en su lugar; las ventanas fijas, colgadas y de cuadro, y las puertas dobles, no tienen ninguno), y **Sentido de apertura** (puertas) o **Lado del marco** (ventanas) {{ui:Invertir}}.
3. O arrástrela a lo largo de su muro, o hacia otro muro: vea [Puertas y ventanas](topic:doors-and-windows).

## Cambiar varios a la vez

Seleccione varios muros (o varias puertas, o varias ventanas) con {{key:Shift}}+clic o {{key:Mod}}+clic. **Propiedades** ofrece lo que comparten: **Cambiar tipo…**, la altura, el tamaño. Un solo cambio los define todos, y un {{ui:Deshacer}} revierte todo.

## Bueno saber

- Los números se muestran en las {{ui:Unidades}} elegidas en la barra de herramientas.
- Los muros, puertas y ventanas de otros programas muestran sus datos IFC en **Propiedades**, como antes, sin este cuadro.
