---
title: Dar forma a un muro: acoplar, perfil, inclinar y huecos
summary: Acople la parte superior de un muro a una cubierta, forjado o techo, dele su propio contorno de alzado, inclínelo o practique un hueco sin puerta ni ventana, en Propiedades, en un alzado o sección, en la vista de su propia cara o en 3D; cada acción es un paso de deshacer.
keywords: acoplar, acoplar arriba, acoplar base, cubierta, forjado, techo, hastial, perfil, editar perfil, contorno de alzado, escalonado, pretil, inclinación, inclinado, inclinar, ladear, cónico, doble inclinación, hueco, hueco de muro, agujero, paso, sin puerta, pinzamientos, alzado, sección, 3D, vista de cara, muro curvo, copia
from: f558b269
---

## Qué hará

Cambie la forma de un muro por encima y por debajo de su planta: su parte superior puede seguir una cubierta, un forjado o un techo; puede tener su propio contorno visto de lado; puede inclinarse, y puede tener huecos sin puerta ni ventana. La planta del muro, sus esquinas y su línea de referencia se mantienen como estaban.

## Dónde puede hacerlo

- **Propiedades**: con {{ui:Dibujo}} y {{ui:Seleccionar}} activados, haga clic en un muro que haya dibujado. **Propiedades** muestra las filas del muro, y después **Forma**, donde todo se escribe.
- **Un alzado o una sección**: el lápiz del explorador de proyecto ({{ui:Editar en esta vista}}) abre la vista; seleccione un muro allí y arrastre sus pinzamientos. Véase "En un alzado o una sección" más abajo.
- **La vista de la cara propia del muro**: {{ui:Muros}} › {{ui:Editar perfil}}, y después haga clic en el muro en la planta. Funciona para cualquier muro, también para uno que ningún alzado mire de frente, y para un muro curvo (se muestra desarrollado).
- **La planta y la vista 3D**: los cuatro comandos de {{ui:Muros}} (grupo Editar): {{ui:Adjuntar parte superior / base}}, {{ui:Editar perfil}}, {{ui:Inclinación}} y {{ui:Hueco en muro}}. Véase "En la planta y en 3D" más abajo.

Elija la forma que elija, es el mismo cambio: un paso en **Cambios**, y {{ui:Deshacer}} lo revierte.

Los muros rectos y los curvos admiten todas las herramientas de forma. En un muro curvo, las distancias se miden a lo largo de su arco.

## Acoplar la parte superior o la base

- **{{ui:Acoplar arriba}}**: elija una cubierta, un forjado o un techo. La parte superior del muro sigue la cara inferior de lo elegido, justo encima de cada esquina del muro. Bajo una cubierta a dos aguas, el muro tiene una parte superior inclinada, y donde la cubierta cambia de plano (una cumbrera o una limatesa), la parte superior del muro se dobla con ella.
- **{{ui:Acoplar base}}**: elija un forjado o un techo. La base del muro sigue su cara superior.
- Donde no haya nada encima (o debajo) de una parte del muro, esa parte conserva la altura propia del muro.
- El vínculo se mantiene: cambie la pendiente o el vuelo de la cubierta, o la altura del techo, y los muros acoplados le siguen en el mismo paso.
- Elija **Altura propia** para soltarlo.

## Editar el perfil

{{ui:Editar perfil…}} abre el contorno del muro visto desde su lado:

- **Línea superior**: filas de **A lo largo** (la distancia desde el inicio del muro) y **Altura** (sobre la base del muro). Tres filas 0 / 3000, 2500 / 4500, 5000 / 3000 forman un hastial en un muro de 5 m.
- **Línea inferior**: déjela vacía para una base de planta, o dé filas para un muro sobre una zapata escalonada.
- {{ui:Añadir un punto}} añade una fila; **Quitar** la elimina. {{ui:Usar este perfil}} lo aplica; {{ui:Volver a recto}} lo quita.

Cada línea recorre el muro una vez, desde su inicio hasta su final; una línea que vuelve sobre sí misma, o una parte superior que baja hasta la base, se rechaza. Con una parte superior acoplada también, se usa la más baja de las dos.

## Inclinar el muro

**{{ui:Inclinación}}**: **Vertical**, **Inclinado** (ambas caras se inclinan en el mismo sentido, el espesor se mantiene) o **Doble inclinación** (cada cara con su propio ángulo: un muro que se adelgaza o engruesa al subir). Escriba los grados desde la vertical; un ángulo positivo se inclina hacia la izquierda del muro, visto desde su inicio. El muro se queda donde está dibujado en su base; los muros unidos a él no se inclinan con él.

## Huecos sin puerta ni ventana

{{ui:Añadir hueco}} practica un hueco de 900 de ancho en medio del muro. Su fila en **Huecos** fija **Desde el inicio**, **Anchura**, **Antepecho** (desde el nivel) y **Altura**; **Quitar** lo elimina. El hueco atraviesa todo el muro, las cantidades del muro lo excluyen, y la planta muestra un vacío donde llega a la altura de corte de la planta. Cuando el inicio del muro se desliza a lo largo de su línea, el hueco conserva su sitio; un cambio que lo dejara fuera del muro se rechaza.

## En un alzado o una sección

Abra la vista con el lápiz del explorador de proyecto. Con {{ui:Seleccionar y mover}} activado:

- **Perfil**: haga clic en un muro que mire hacia la vista. Sus líneas superior e inferior se vuelven azules, con un pinzamiento cuadrado en cada punto y un punto en el centro de cada tramo.
  - Arrastre un cuadrado para mover ese punto (los dos puntos extremos solo se mueven arriba y abajo).
  - Arrastre un punto para mover todo el tramo arriba o abajo.
  - Haga doble clic en una línea (o clic derecho sobre ella) para añadir un punto allí; {{ui:Añadir un punto (superior)}} y {{ui:Añadir un punto (inferior)}} añaden uno en el centro del tramo más largo.
  - Haga clic en un cuadrado y pulse Delete (o clic derecho sobre él) para quitar ese punto. {{ui:Volver a recto}} elimina el perfil.
  - Con un punto seleccionado, escriba su **A lo largo** y su **Altura** en la barra bajo la barra de herramientas.
- **Acoplar**: la barra tiene las listas **Acoplar arriba** y **Acoplar base** para el muro seleccionado. O use la herramienta {{ui:Acoplar arriba}} o {{ui:Acoplar base}}: haga clic en el muro o muros, y después en la cubierta, el forjado o el techo, que se muestran como cajas discontinuas. Todos los muros seleccionados se acoplan en un solo paso.
- **Huecos en muros**: con la herramienta {{ui:Hueco en muro}}, arrastre un rectángulo en la cara de un muro. De vuelta en {{ui:Seleccionar y mover}}, arrastre un hueco para moverlo, arrastre uno de sus ocho pinzamientos para cambiar su tamaño, escriba **Desde el inicio**, **Anchura**, **Antepecho** y **Altura** en la barra, o pulse Delete para eliminarlo.
- **Inclinación**: un muro en el que la vista se mira a lo largo (visto de extremo, como sección a través de él o en un alzado desde su extremo) también puede seleccionarse con clic. Arrastre el mango redondo de su parte superior para inclinarlo, o elija **Vertical**, **Inclinado** o **Doble inclinación** en la barra y escriba los ángulos.

Las medidas encajan en múltiplos de 10 mm; escriba un valor para algo más fino. Un muro curvo puede editarse en un alzado mientras recorre una dirección a lo largo de la vista; su vista de cara siempre funciona.

## En la planta y en 3D

Abra {{ui:Muros}} en el grupo Editar:

- {{ui:Adjuntar parte superior / base}}: elija **Acoplar arriba** o **Acoplar base** en la fila de la herramienta. Haga clic en el muro o muros (en la planta o en la vista 3D), y después en aquello a lo que se acoplan: en 3D, haga clic en la cubierta, el forjado o el techo en sí; en la planta, haga clic en un punto bajo ellos (cuando hay más de uno, una lista pregunta cuál).
- {{ui:Editar perfil}}: en la planta, haga clic en un muro para abrir su vista de cara. En 3D, haga clic en un muro: sus puntos de perfil tendrán pinzamientos; arrastre uno en el plano del muro.
- {{ui:Inclinación}}: haga clic en un muro (planta o 3D) y escriba cuánto se inclina.
- {{ui:Hueco en muro}}: en la planta, haga clic en un muro donde va el hueco; su **Anchura**, **Altura** y **Antepecho** están en la fila de la herramienta. En 3D, haga clic en una esquina sobre la cara del muro, y después en la esquina opuesta. Con un muro seleccionado en 3D, sus huecos tienen pinzamientos: las esquinas cambian el tamaño y el centro lo mueve.

Los pinzamientos 3D son los de la propia vista 3D, por lo que esperan mientras la caja de sección muestra sus pinzamientos.

## En la planta

Un muro inclinado se dibuja donde lo corta la planta (1200 sobre el nivel, salvo que la vista indique otra cosa): su contorno se desplaza según cuánto se inclina a esa altura, y una doble inclinación es allí más ancha o más estrecha. Su contorno en el suelo se dibuja con las líneas finas de lo que queda bajo el corte. Las esquinas, los pinzamientos y las cotas del muro se mantienen en su base.

## Copias

{{ui:Copiar esta planta…}} y Mover con **Copiar** llevan consigo el perfil, la inclinación y los huecos del muro. Un muro acoplado a un forjado o un techo queda acoplado al forjado o techo copiado de la nueva planta; un acoplamiento a una cubierta no se copia con la planta (las cubiertas no se copian). Una copia en la misma planta sigue acoplada a la misma cubierta, forjado o techo.

## En el archivo

Un muro con forma se escribe como un sólido facetado (IfcFacetedBrep), que otros programas leen tal como se dibuja; sus ajustes están en el muro (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Un hueco es un IfcOpeningElement en el muro, sin nada que lo rellene.

## Aún no disponible

- Un perfil con voladizos o agujeros en el contorno (use huecos para los agujeros).
- En 3D: añadir o quitar puntos de perfil, y la inclinación mediante un mango (use la vista de cara del muro, un alzado o una sección, o escríbala).
- {{ui:Desfase}} con Copiar activado no copia la forma ni los huecos del muro (Mover con Copiar sí lo hace).
- Las capas de un muro inclinado no se dibujan en las plantas de detalle medio y fino (sí su contorno).
- Huecos que no son rectángulos.
