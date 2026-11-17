---
title: Dar forma a un muro: unir, perfil, inclinación y aberturas
summary: Una la parte superior del muro a una cubierta, piso o plafón, dele su propio contorno de alzado, inclínelo o corte una abertura sin puerta ni ventana, en Propiedades, en un alzado o una sección, en la vista de cara propia del muro o en 3D; cada cambio es un paso de deshacer.
keywords: unir, unir parte superior, unir base, cubierta, losa, plafón, frontón, perfil, editar perfil, contorno de alzado, escalonado, pretil, inclinación, inclinado, inclinar, ahusado, doble inclinación, abertura, abertura en muro, agujero, paso, sin puerta, pinzamientos, alzado, sección, 3D, vista de cara, muro curvo, copia
from: f558b269
---

## Qué hará

Cambie la forma de un muro por encima y por debajo de su planta: su parte superior puede seguir una cubierta, una losa de piso o un plafón; puede tener su propio contorno visto de lado; puede inclinarse; y puede tener aberturas sin puerta ni ventana. La planta del muro, sus esquinas y su línea de ubicación se quedan como estaban.

## Dónde puede hacerlo

- **Propiedades**: con {{ui:Dibujo}} y {{ui:Seleccionar}} activados, haga clic en un muro que dibujó. **Propiedades** muestra las filas del muro y luego **Forma**, donde todo se escribe.
- **Un alzado o una sección**: el lápiz del navegador de proyectos ({{ui:Editar en esta vista}}) abre la vista; elija allí un muro y arrastre sus pinzamientos. Vea "En un alzado o una sección" más abajo.
- **La vista de cara propia del muro**: {{ui:Muros}} › {{ui:Editar perfil}}, luego haga clic en el muro en la planta. Sirve para cualquier muro, también para uno que ningún alzado mira de frente, y para un muro curvo (se muestra desenrollado).
- **La planta y la vista 3D**: los cuatro comandos de {{ui:Muros}} (grupo Editar): {{ui:Unir parte superior / base}}, {{ui:Editar perfil}}, {{ui:Inclinación}} y {{ui:Abertura en muro}}. Vea "En la planta y en 3D" más abajo.

Cualquiera que elija, es el mismo cambio: un paso en **Cambios**, y {{ui:Deshacer}} lo revierte.

Un muro recto y uno curvo aceptan todas las herramientas de Forma. En un muro curvo, las distancias siguen su arco.

## Unir la parte superior o la base

- **Unir parte superior**: elija una cubierta, un piso o un plafón. La parte superior del muro sigue la cara inferior de lo que eligió, en línea recta sobre cada esquina del muro. Bajo una cubierta inclinada, el muro obtiene una parte superior en pendiente, y donde la cubierta cambia de plano (una cumbrera o una cadera), la parte superior del muro se dobla con ella.
- **Unir base**: elija un piso o un plafón. La base del muro sigue su cara superior.
- Donde no hay nada encima (o debajo) de una parte del muro, esa parte conserva la altura propia del muro.
- La unión se mantiene: si cambia la pendiente o el alero de la cubierta, o la altura del plafón, los muros unidos la siguen en el mismo paso.
- Elija **Su propia altura** para soltarla.

## Editar el perfil

{{ui:Editar perfil…}} abre el contorno del muro visto desde su lado:

- **Línea superior**: filas de **A lo largo** (la distancia desde el inicio del muro) y **Altura** (sobre la base del muro). Tres filas 0 / 3000, 2500 / 4500, 5000 / 3000 forman un frontón en un muro de 5 m.
- **Línea inferior**: déjela vacía para una base de nivel, o dé filas para un muro sobre una cimentación escalonada.
- {{ui:Agregar un punto}} agrega una fila; **Quitar** saca una. {{ui:Usar este perfil}} lo aplica; {{ui:Volver a recto}} lo quita.

Cada línea recorre el muro una vez, desde su inicio hasta su final; una línea que vuelve sobre sí misma, o una parte superior que baja hasta la base, se rechaza. Si además hay una parte superior unida, se usa la más baja de las dos.

## Inclinar el muro

**Inclinación**: **Vertical**, **Inclinada** (ambas caras se inclinan en el mismo sentido, el espesor se mantiene) o **Doble inclinación** (cada cara con su propio ángulo: un muro que se hace más delgado o más grueso al subir). Escriba los grados desde la vertical; un ángulo positivo se inclina hacia la izquierda del muro, visto desde su inicio. El muro se queda donde está dibujado en su base; los muros unidos a él no se inclinan con él.

## Aberturas sin puerta ni ventana

{{ui:Agregar abertura}} corta un hueco de 900 de ancho en el centro del muro. Su fila en **Aberturas** define **Desde el inicio**, **Ancho**, **Antepecho** (desde el nivel) y **Altura**; **Quitar** la saca. La abertura atraviesa todo el muro, las cantidades del muro la excluyen, y la planta muestra un hueco donde llega a la altura de corte de la planta. Cuando el inicio del muro se desliza a lo largo de su línea, la abertura conserva su lugar; un cambio que la dejaría fuera del muro se rechaza.

## En un alzado o una sección

Abra la vista con el lápiz del navegador de proyectos. Con {{ui:Seleccionar y mover}} activado:

- **Perfil**: haga clic en un muro que mira hacia la vista. Sus líneas superior e inferior se vuelven azules, con un pinzamiento cuadrado en cada punto y un punto en el centro de cada tramo.
  - Arrastre un cuadrado para mover ese punto (los dos puntos extremos se mueven solo hacia arriba y hacia abajo).
  - Arrastre un punto para mover todo el tramo hacia arriba o hacia abajo.
  - Haga doble clic en una línea (o clic derecho) para agregar un punto ahí; {{ui:Agregar un punto (superior)}} y {{ui:Agregar un punto (inferior)}} agregan uno en el centro del tramo más largo.
  - Haga clic en un cuadrado y pulse {{key:Delete}} (o clic derecho sobre él) para quitar ese punto. {{ui:Volver a recto}} quita el perfil.
  - Con un punto elegido, escriba su **A lo largo** y **Altura** en la barra bajo la barra de herramientas.
- **Unir**: la barra tiene las listas **Unir parte superior** y **Unir base** para el muro elegido. O use la herramienta {{ui:Unir parte superior}} o {{ui:Unir base}}: haga clic en el muro o muros, luego en la cubierta, el piso o el plafón, que se muestran como cajas punteadas. Todos los muros elegidos se unen en un solo paso.
- **Aberturas en muro**: con la herramienta {{ui:Abertura en muro}}, arrastre un rectángulo sobre la cara de un muro. De vuelta en {{ui:Seleccionar y mover}}, arrastre una abertura para moverla, arrastre uno de sus ocho pinzamientos para cambiar su tamaño, escriba **Desde el inicio**, **Ancho**, **Antepecho** y **Altura** en la barra, o pulse {{key:Delete}} para quitarla.
- **Inclinación**: un muro que la vista recorre (visto de frente, como una sección que lo atraviesa, o en un alzado desde su extremo) también puede elegirse con un clic. Arrastre el asa redonda de su parte superior para inclinarlo, o elija **Vertical**, **Inclinada** o **Doble inclinación** en la barra y escriba los ángulos.

Los tamaños se ajustan a 10 mm; escriba un valor para algo más fino. Un muro curvo puede editarse en un alzado mientras recorre la vista en un sentido; su vista de cara propia siempre funciona.

## En la planta y en 3D

Abra {{ui:Muros}} en el grupo Editar:

- {{ui:Unir parte superior / base}}: elija **Unir parte superior** o **Unir base** en la fila de la herramienta. Haga clic en el muro o muros (en la planta o en la vista 3D), luego en aquello a lo que se unen: en 3D, haga clic en la cubierta, el piso o el plafón mismo; en la planta, haga clic en un punto debajo de él (cuando hay más de uno, una lista pregunta cuál).
- {{ui:Editar perfil}}: en la planta, haga clic en un muro para abrir su vista de cara. En 3D, haga clic en un muro: sus puntos de perfil reciben pinzamientos; arrástrelos en el plano del muro.
- {{ui:Inclinación}}: haga clic en un muro (planta o 3D) y escriba cuánto se inclina.
- {{ui:Abertura en muro}}: en la planta, haga clic en un muro donde va la abertura; su **Ancho**, **Altura** y **Antepecho** están en la fila de la herramienta. En 3D, haga clic en una esquina sobre la cara del muro, luego en la esquina opuesta. Con un muro elegido en 3D, sus aberturas tienen pinzamientos: las esquinas cambian el tamaño y el centro la mueve.

Los pinzamientos 3D son los de la propia vista 3D, así que esperan mientras la caja de sección muestra sus pinzamientos.

## En la planta

Un muro inclinado se dibuja donde la planta lo corta (a 1200 sobre el nivel, salvo que la vista indique otra cosa): su contorno se desplaza según cuánto se inclina a esa altura, y una doble inclinación es más ancha o más angosta ahí. Su contorno en el piso se dibuja con las líneas finas de lo que queda debajo del corte. Las esquinas, los pinzamientos y las cotas del muro se quedan en su base.

## Copias

{{ui:Copiar este nivel…}} y Mover con **Copiar** llevan consigo el perfil, la inclinación y las aberturas del muro. Un muro unido a un piso o plafón queda unido al piso o plafón copiado del nuevo nivel; una unión a una cubierta no se copia con el nivel (las cubiertas no se copian). Una copia en el mismo nivel sigue unida a la misma cubierta, piso o plafón.

## En el archivo

Un muro con forma se escribe como un sólido facetado (IfcFacetedBrep), que otros programas leen tal como se dibuja; sus ajustes están en el muro (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Una abertura es un IfcOpeningElement dentro del muro, sin nada que la llene.

## Lo que aún no está hecho

- Un perfil con voladizos o agujeros en el contorno (use aberturas para los huecos).
- En 3D: agregar o quitar puntos de perfil, y la inclinación mediante un asa (use la vista de cara del muro, un alzado o una sección, o escriba los valores).
- {{ui:Desfase}} con Copiar activado no copia la forma ni las aberturas del muro (Mover con Copiar sí lo hace).
- Las capas de un muro inclinado no se dibujan en las plantas de detalle Medio y Fino (sí su contorno).
- Aberturas que no son rectángulos.
