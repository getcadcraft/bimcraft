---
title: Colocar una elevación y abrir su vista
summary: Coloque un marcador de elevación en la planta, oriéntelo hacia lo que quiere ver, y luego localice su dibujo en el navegador del proyecto, edítelo y colóquelo en una hoja. Pasos para los diseños de cinta y para el diseño clásico.
keywords: elevación, vista de elevación, marcador de elevación, etiqueta de elevación, colocar una elevación, nueva elevación, crear una elevación, elevación exterior, vista lateral, vista frontal, vista desde un punto, dónde está mi elevación, abrir elevación, elevación en una hoja, invertir elevación, renombrar elevación, elevación norte, mosaico de vistas, dividir vista, planta y 3D lado a lado
from: a7cfd2b9
---

## Qué hará

Cree una elevación propia: un dibujo del edificio visto desde un punto que usted elige, mirando en la dirección que elija. Requiere dos clics sobre una planta. El dibujo aparece después en la lista con las demás elevaciones del edificio.

:::note
Los cuatro lados ya existen. Todo edificio tiene elevaciones Norte, Este, Sur y Oeste en el {{ui:Navegador del proyecto}} bajo {{ui:Alzados}}, sin colocar nada. Coloque una propia cuando quiera una vista desde otro lugar: perpendicular a un ala en ángulo, desde dentro de un patio o de un muro dentro de una habitación.
:::

## Dónde está la herramienta

- Diseños de cinta: {{ui:Vista}} › **Crear** › {{ui:Elevación}}.
- Diseño clásico: active {{ui:Dibujo}} y luego {{ui:Compilación}} › {{ui:Elevación}}.
- Cualquier estilo de menú: el comando se llama Elevation; la paleta de comandos lo encuentra y la línea de comandos acepta ELEVATION.

## Pasos

1. Elija {{ui:Elevación}}. La elevación se coloca sobre una planta, así que si estaba en la vista 3D, BimCraft muestra la planta del nivel en el que se encontraba. El puntero indica **Haga clic donde se sitúa la elevación**.
2. Haga clic desde donde se toma la vista. Para una elevación exterior, haga clic fuera del edificio, a poca distancia del muro que quiere ver.
3. El puntero indica ahora **Haga clic en la dirección en que mira**. Desplácese hacia el edificio: una flecha muestra la dirección y la línea corta que cruza su primer clic es el borde desde el que se ve la vista. Haga clic.
4. En la planta aparece un círculo con un número y un puntero. Es el marcador de elevación. El primero es 1, el siguiente 2.
5. Pulse Esc para terminar, o continúe y coloque otro.

Colocar un marcador es un solo paso: {{key:Mod+Z}} lo deshace.

## Abrir el dibujo

Tras el segundo clic, la planta sigue delante de usted. El dibujo está en el {{ui:Navegador del proyecto}}:

1. Abra {{ui:Alzados}}. La suya aparece después de los cuatro lados como **Elevación 1**.
2. Haga clic en el botón de lápiz {{ui:Editar en esta vista}} de su fila para ver el dibujo y trabajar en él: mover muros, puertas, ventanas y niveles, añadir notas y cotas. Consulte [Editar en alzados y secciones](topic:edit-in-elevations).
3. Haga clic en la propia fila para abrir el conjunto de dibujos, o añada la vista a una hoja propia. Consulte [Vistas y hojas](topic:views-and-sheets).

En el diseño clásico, el navegador del proyecto está en el panel izquierdo mientras {{ui:Dibujo}} está activo. En los diseños de cinta, es la pestaña {{ui:Navegador de proyectos}} dentro de Propiedades.

## Qué muestra la vista

- Todo lo que hay delante del marcador, hasta donde llega el edificio. Nada detrás de él.
- Los niveles, con sus nombres y alturas.
- Si el marcador está dentro del edificio, lo que lo rodea se corta en ese punto, como lo haría una sección. Para una elevación exterior limpia, sitúese fuera.

## Cambiarla

Seleccione el marcador en la planta (haga clic en su círculo con {{ui:Seleccionar}}). Propiedades tiene:

- {{ui:Etiqueta}}: su número o un nombre propio, de hasta 8 caracteres.
- {{ui:Invertir la vista}}: mirar en sentido contrario desde el mismo punto.
- {{ui:Mirar hasta}}: hasta dónde llega la vista delante del marcador. 0 muestra todo.

Pulse Delete para eliminar el marcador y su dibujo. Deshacer los devuelve ambos.

:::tip
Para ver la planta y la vista 3D a la vez mientras trabaja, use {{ui:Vista}} › **Ventanas** › {{ui:Mosaico de vistas}} en los diseños de cinta, o {{ui:Dividir}} en el diseño clásico. Un clic en la pestaña de una vista vuelve a mostrar una sola vista.
:::

## Límites

- Un marcador todavía no se puede arrastrar ni girar en la planta. Elimínelo y colóquelo de nuevo, o use {{ui:Invertir la vista}}.
- En la lista de vistas que puede añadir a una hoja, una elevación propia aparece junto a las secciones.
- Las etiquetas de puertas y ventanas se dibujan en los cuatro lados principales, no en una elevación que usted haya colocado.

## En el IFC

El marcador se guarda en el archivo como un IfcAnnotation llamado "Elevation 1" con el tipo de objeto "Elevation marker", en el nivel en el que se colocó. Otro programa lo muestra como una anotación; el dibujo en sí lo genera BimCraft cada vez a partir del modelo.
