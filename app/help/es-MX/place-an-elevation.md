---
title: Colocar una elevación y abrir su vista
summary: Coloque un marcador de elevación en la planta, oriéntelo hacia donde debe mirar y luego busque su dibujo en el navegador del proyecto, edítelo y colóquelo en una hoja. Pasos para los diseños de cinta y para el diseño clásico.
keywords: elevación, vista de elevación, marcador de elevación, etiqueta de elevación, colocar una elevación, nueva elevación, crear una elevación, elevación exterior, vista lateral, vista frontal, vista desde un punto, dónde está mi elevación, abrir elevación, elevación en una hoja, invertir elevación, renombrar elevación, elevación norte, mosaico de vistas, dividir vista, planta y 3D lado a lado
from: a7cfd2b9
---

## Lo que hará

Cree una elevación propia: un dibujo del edificio visto desde un punto que usted elige, mirando en la dirección que elige. Requiere dos clics en una planta. Después, el dibujo aparece en la lista junto con las demás elevaciones del edificio.

:::note
Los cuatro lados ya existen. Todo edificio tiene elevaciones Norte, Este, Sur y Oeste en el {{ui:Navegador del proyecto}}, bajo {{ui:Alzados}}, sin necesidad de colocar nada. Coloque una elevación propia cuando quiera una vista desde otro lugar: de frente a un ala en ángulo, desde dentro de un patio o de un muro dentro de un cuarto.
:::

## Dónde está la herramienta

- Diseños de cinta: {{ui:Vista}} › **Crear** › {{ui:Elevación}}.
- Diseño clásico: active {{ui:Dibujo}} y luego vaya a {{ui:Compilación}} › {{ui:Elevación}}.
- Cualquier estilo de menú: el comando se llama Elevación; la paleta de comandos lo encuentra, y la línea de comandos acepta ELEVATION.

## Pasos

1. Elija {{ui:Elevación}}. La elevación se coloca sobre una planta, así que si estaba en la vista 3D, BimCraft muestra la planta del nivel en el que se encontraba. El cursor indica **Precise dónde se sitúa la elevación**.
2. Precise desde dónde se toma la vista. Para una elevación exterior, precise fuera del edificio, a poca distancia del muro que quiere ver.
3. El cursor ahora indica **Precise la forma en que se ve**. Mueva el cursor hacia el edificio: una flecha muestra la dirección, y la línea corta que cruza su primer clic es el borde desde el que se mira la vista. Precise.
4. Aparece en la planta un círculo con un número y un puntero. Es el marcador de elevación. El primero es 1, el siguiente 2.
5. Pulse Esc para terminar, o siga y coloque otro.

Colocar un marcador es un solo paso: {{key:Mod+Z}} lo deshace.

## Abrir el dibujo

La planta permanece frente a usted después del segundo clic. El dibujo está en el {{ui:Navegador del proyecto}}:

1. Abra {{ui:Alzados}}. La suya aparece después de los cuatro lados como **Elevación 1**.
2. Pulse el botón de lápiz {{ui:Editar en esta vista}} en su fila para ver el dibujo y trabajar en él: mueva muros, puertas, ventanas y niveles, y añada notas y cotas. Consulte [Editar en elevaciones y secciones](topic:edit-in-elevations).
3. Pulse la fila misma para abrir el juego de dibujos, o añada la vista a una hoja propia. Consulte [Vistas y hojas](topic:views-and-sheets).

En el diseño clásico, el navegador del proyecto está en el panel izquierdo mientras {{ui:Dibujo}} esté activado. En los diseños de cinta, está en la pestaña {{ui:Navegador de proyectos}}, en Propiedades.

## Lo que muestra la vista

- Todo lo que está frente al marcador, hasta donde llega el edificio. Nada detrás de él.
- Los niveles, con sus nombres y alturas.
- Si el marcador está dentro del edificio, lo que lo rodea se corta en ese punto, como lo corta una sección. Para una elevación exterior limpia, colóquese fuera.

## Cambiarla

Seleccione el marcador en la planta (pulse su círculo con {{ui:Seleccionar}}). Propiedades tiene:

- {{ui:Etiqueta}}: su número o un nombre propio, de hasta 8 caracteres.
- {{ui:Invertir la vista}}: mira en sentido contrario desde el mismo punto.
- {{ui:Mirar hasta}}: qué tan lejos, frente al marcador, llega la vista. 0 muestra todo.

Pulse Delete para quitar el marcador y su dibujo. Deshacer los devuelve a ambos.

:::tip
Para ver la planta y la vista 3D al mismo tiempo mientras trabaja, use {{ui:Vista}} › **Ventanas** › {{ui:Mosaico de vistas}} en los diseños de cinta, o {{ui:Dividir}} en el diseño clásico. Al pulsar la pestaña de una vista se regresa a una sola vista.
:::

## Limitaciones

- Un marcador todavía no se puede arrastrar ni girar en la planta. Bórrelo y colóquelo de nuevo, o use {{ui:Invertir la vista}}.
- En la lista de vistas que puede añadir a una hoja, una elevación propia aparece junto con las secciones.
- Las etiquetas de puertas y ventanas se dibujan en las cuatro elevaciones de los lados, no en una que usted haya colocado.

## En el IFC

El marcador se guarda en el archivo como un IfcAnnotation llamado "Elevation 1", con el tipo de objeto "Elevation marker", en el nivel en el que se colocó. Otro programa lo muestra como una anotación; el dibujo en sí lo genera BimCraft a partir del modelo cada vez.
