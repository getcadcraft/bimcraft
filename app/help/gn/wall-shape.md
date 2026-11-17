---
title: Dar forma a un muro: unir, perfil, inclinar y aberturas
summary: Uní la parte superior de un muro a un techo, piso o cielorraso, dale su propio contorno de elevación, inclinalo o cortá una abertura sin puerta ni ventana, en Propiedades, en una elevación o corte, en la vista de cara propia del muro o en 3D; cada cambio es un paso de deshacer.
keywords: unir, unir superior, unir base, techo, losa, cielorraso, a dos aguas, perfil, editar perfil, contorno de elevación, escalonado, pretil, inclinación, inclinado, inclinar, ladeado, cónico, doble inclinación, abertura, abertura de muro, agujero, pasante, sin puerta, agarres, elevación, corte, 3D, vista de cara, muro curvo, copia
from: f558b269
---

## Mba'e rejapóta

Cambiá la forma de un muro encima y debajo de su planta: su parte superior puede seguir un techo, una losa de piso o un cielorraso, puede tener su propio contorno visto de costado, puede inclinarse, y puede tener aberturas sin puerta ni ventana. La planta del muro, sus esquinas y su línea de ubicación quedan como estaban.

## Dónde podés hacerlo

- **Propiedades**: con {{ui:Draw}} activado y {{ui:Select}} activado, hacé clic en un muro que dibujaste. **Propiedades** muestra las filas del muro, luego **Forma**, donde todo se escribe.
- **Una elevación o un corte**: el lápiz del navegador de proyecto ({{ui:Edit in this view}}) abre la vista; elegí un muro ahí y arrastrá sus agarres. Ver "En una elevación o un corte" más abajo.
- **La vista de cara propia del muro**: {{ui:Walls}} › {{ui:Editar perfil}}, luego hacé clic en el muro en la planta. Funciona para cualquier muro, también para uno que ninguna elevación mira de frente, y para un muro curvo (se muestra desenrollado).
- **La planta y la vista 3D**: los cuatro comandos en {{ui:Walls}} (grupo Editar): {{ui:Attach top / base}}, {{ui:Edit profile}}, {{ui:Slant}} y {{ui:Wall opening}}. Ver "En la planta y en 3D" más abajo.

Sea cual sea la forma que elijas, es el mismo cambio: un paso en **Cambios**, y {{ui:Undo}} lo deshace.

Los muros rectos y curvos aceptan todas las herramientas de Forma. En un muro curvo, las distancias se miden a lo largo de su arco.

## Unir la parte superior o la base

- **Attach top**: elegí un techo, un piso o un cielorraso. La parte superior del muro sigue la cara inferior de lo que elegiste, recta sobre cada esquina del muro. Debajo de un techo a dos aguas, un muro tiene una parte superior inclinada, y donde el techo cambia de plano (una cumbrera o un faldón) la parte superior del muro se dobla con él.
- **Attach base**: elegí un piso o un cielorraso. La base del muro sigue su cara superior.
- Donde no hay nada arriba (o abajo) de una parte del muro, esa parte conserva la altura propia del muro.
- El vínculo se mantiene: si cambiás la pendiente o el alero del techo, o la altura del cielorraso, los muros unidos siguen en el mismo paso.
- Elegí **Su propia altura** para soltarlo.

## Editar el perfil

{{ui:Editar perfil…}} abre el contorno del muro visto de costado:

- **Línea superior**: filas de **Along** (la distancia desde el inicio del muro) y **Height** (sobre la base del muro). Tres filas 0 / 3000, 2500 / 4500, 5000 / 3000 hacen un frontón en un muro de 5 m.
- **Línea inferior**: dejala vacía para una base de nivel, o dale filas para un muro sobre un cimiento escalonado.
- {{ui:Add a point}} agrega una fila, **Remove** quita una. {{ui:Use this profile}} lo aplica; {{ui:Back to straight}} lo quita.

Cada línea recorre el muro una sola vez, desde su inicio hasta su final; una línea que vuelve sobre sí misma, o una parte superior que baja hasta la base, se rechaza. Si también hay una parte superior unida, se usa la más baja de las dos.

## Inclinar el muro

**Slant**: **Upright** (vertical), **Slanted** (ambas caras se inclinan en la misma dirección, el espesor se mantiene) o **Double slant** (cada cara con su propio ángulo: un muro que se adelgaza o engrosa al subir). Escribí grados desde la vertical; un ángulo positivo se inclina hacia la izquierda del muro, visto desde su inicio. El muro queda donde se dibujó en su base; los muros unidos a él no se inclinan con él.

## Aberturas sin puerta ni ventana

{{ui:Add opening}} corta un hueco de 900 de ancho en el medio del muro. Su fila en **Aberturas** fija **From start**, **Width**, **Sill** (desde el nivel) y **Height**; **Remove** la quita. La abertura atraviesa todo el muro, las cantidades del muro la excluyen, y la planta muestra un hueco donde llega a la altura de corte de la planta. Cuando el inicio del muro se desliza a lo largo de su línea, la abertura mantiene su lugar; un cambio que la dejaría fuera del muro se rechaza.

## En una elevación o un corte

Abrí la vista con el lápiz del navegador de proyecto. Con {{ui:Select and move}} activado:

- **Perfil**: hacé clic en un muro que mira hacia la vista. Sus líneas superior e inferior se vuelven azules, con un agarre cuadrado en cada punto y un punto en el medio de cada tramo.
  - Arrastrá un cuadrado para mover ese punto (los dos puntos extremos se mueven solo hacia arriba y abajo).
  - Arrastrá un punto para mover todo el tramo hacia arriba o abajo.
  - Hacé doble clic en una línea (o clic derecho) para agregar un punto ahí; {{ui:Add a point (top)}} y {{ui:Add a point (bottom)}} agregan uno en el medio del tramo más largo.
  - Hacé clic en un cuadrado y presioná Delete (o clic derecho) para quitar ese punto. {{ui:Back to straight}} quita el perfil.
  - Con un punto elegido, escribí su **Along** y **Height** en la barra debajo de la barra de herramientas.
- **Unir**: la barra tiene las listas **Attach top** y **Attach base** para el muro elegido. O usá la herramienta {{ui:Attach top}} o {{ui:Attach base}}: hacé clic en el muro o muros, luego en el techo, piso o cielorraso, que se muestran como cajas punteadas. Todos los muros elegidos se unen en un paso.
- **Aberturas de muro**: con la herramienta {{ui:Wall opening}}, arrastrá un rectángulo sobre la cara de un muro. De vuelta en {{ui:Select and move}}, arrastrá una abertura para moverla, arrastrá uno de sus ocho agarres para cambiar su tamaño, escribí **From start**, **Width**, **Sill** y **Height** en la barra, o presioná Delete para quitarla.
- **Inclinación**: un muro que la vista mira de canto (visto de punta, como un corte a través de él o en una elevación desde su extremo) también se puede hacer clic. Arrastrá el mango redondo de su parte superior para inclinarlo, o elegí **Upright**, **Slanted** o **Double slant** en la barra y escribí los ángulos.

Los tamaños se ajustan a 10 mm; escribí un valor para algo más fino. Un muro curvo se puede editar en una elevación mientras atraviesa la vista en una dirección; su vista de cara propia siempre funciona.

## En la planta y en 3D

Abrí {{ui:Walls}} en el grupo Editar:

- {{ui:Adjuntar superior / base}}: elegí **Attach top** o **Attach base** en la fila de la herramienta. Hacé clic en el muro o muros (en la planta o en la vista 3D), luego en aquello a lo que se unen: en 3D hacé clic en el techo, piso o cielorraso mismo; en la planta hacé clic en un punto debajo de él (cuando hay más de uno, una lista pregunta cuál).
- {{ui:Edit profile}}: en la planta, hacé clic en un muro para abrir su vista de cara. En 3D, hacé clic en un muro: sus puntos de perfil reciben agarres; arrastrá uno en el plano del muro.
- {{ui:Slant}}: hacé clic en un muro (planta o 3D) y escribí cuánto se inclina.
- {{ui:Wall opening}}: en la planta, hacé clic en un muro donde va la abertura; su **Width**, **Height** y **Sill** están en la fila de la herramienta. En 3D, hacé clic en una esquina sobre la cara del muro, luego en la esquina opuesta. Con un muro elegido en 3D, sus aberturas tienen agarres: las esquinas cambian el tamaño, el medio la mueve.

Los agarres 3D son los propios de la vista 3D, así que esperan mientras la caja de corte muestra sus agarres.

## En la planta

Un muro inclinado se dibuja donde la planta lo corta (1200 sobre el nivel salvo que la vista indique otra cosa): su contorno se corre según cuánto se inclina a esa altura, y una doble inclinación es más ancha o más angosta ahí. Su contorno en el piso se dibuja con las líneas finas de lo que queda debajo del corte. Las esquinas, agarres y cotas del muro quedan en su base.

## Copias

{{ui:Copy this level…}} y Mover con **Copiar** llevan consigo el perfil, la inclinación y las aberturas de muro. Un muro unido a un piso o cielorraso queda unido al piso o cielorraso copiado del nivel nuevo; un vínculo a un techo no se copia con un nivel (los techos no se copian). Una copia en el mismo nivel sigue unida al mismo techo, piso o cielorraso.

## En el archivo

Un muro con forma se escribe como un sólido facetado (IfcFacetedBrep), que otros programas leen tal como se dibuja; sus ajustes están en el muro (CadCraft_Wall Profile, AttachTop, AttachBase, Slant). Una abertura es un IfcOpeningElement dentro del muro sin nada que la rellene.

## Todavía no está hecho

- Un perfil con voladizos o agujeros en el contorno (usá aberturas para los huecos).
- En 3D: agregar o quitar puntos de perfil, y la inclinación mediante un mango (usá la vista de cara del muro, una elevación o un corte, o escribí los valores).
- {{ui:Offset}} con Copiar activado no copia la forma ni las aberturas del muro (Mover con Copiar sí lo hace).
- Las capas de un muro inclinado no se dibujan en plantas de detalle Medio y Fino (sí se dibuja su contorno).
- Aberturas que no son rectángulos.
