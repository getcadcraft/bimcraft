---
title: El sitio, el edificio en él y sus niveles
summary: Dibujá el contorno del sitio, colocá y girá el edificio en el sitio, agregá niveles a alturas dadas o dividí la altura del edificio, y dibujá en el nivel que elijas.
keywords: sitio, plan del sitio, línea de edificación, retiro, servidumbre, servidumbre de paso, derecho de paso, línea de propiedad, lote, parcela, límite, ubicación del edificio, girar edificio, colocar edificio, niveles, pisos, agregar niveles, dividir altura, altura de piso a piso, IfcSite, IfcBuilding, IfcBuildingStorey, estructura espacial
from: 48d10c1e
---

## Lo que vas a hacer

Armar las partes de un modelo IFC que sostienen todo lo demás: el sitio, el edificio en él y los niveles del edificio.

Un modelo se organiza como un **sitio** que contiene un **edificio**, que contiene sus **niveles** (pisos); los muros, pisos y todo lo demás pertenecen a un nivel. {{ui:File}} › {{ui:New building}} arma los tres. Un modelo de otro programa que tiene un edificio pero no un sitio recibe un sitio la primera vez que dibujes uno: el edificio se coloca en él donde ya estaba.

## Dibujar el sitio

1. Activá {{ui:Draw}} y después elegí {{ui:Build}} › {{ui:Site}}.
2. Hacé clic en las esquinas del sitio (la herramienta se ajusta como la herramienta Muro). Volvé a hacer clic en la primera esquina, hacé doble clic o apretá {{key:Enter}} para terminar. {{key:Backspace}} quita una esquina.
3. La fila muestra la superficie del sitio. Volvé a dibujarlo para cambiarlo.

El plano de cada nivel muestra el contorno del sitio como línea de propiedad.

## Colocar el edificio en el sitio

Con {{ui:Site}} activado, escribí la **X** y la **Y** del edificio en el sitio y su **Turn** en grados, o hacé clic en {{ui:Place the building by a click}} y hacé clic donde va el origen del edificio. Todo lo del edificio (niveles, muros, grillas, todo lo que dibujaste) se mueve con él; el sitio y su contorno quedan donde están. Los planos siguen mostrando cada nivel derecho respecto al edificio.

## Líneas de edificación y servidumbres

Las líneas de edificación y las servidumbres (servidumbres de paso, derechos de paso) se dibujan sobre el sitio como restricciones. **Advierten, nunca bloquean**: un muro sobre una de ellas se dibuja como lo pediste, y aparece una advertencia en Problemas que nombra el muro y la línea o servidumbre. Si movés el muro hacia atrás, la advertencia desaparece. Una advertencia puede aceptarse con una razón (una flexibilización que concedió la autoridad, por ejemplo).

- **Línea de edificación desde retiros.** {{ui:Build}} › {{ui:Building line}}, y después {{ui:Setbacks}}: escribí a qué distancia se mete la línea desde cada límite del sitio. Los límites se numeran en el plano mientras la herramienta está activa. La línea se calcula con esas distancias y sigue el contorno del sitio si lo volvés a dibujar con la misma cantidad de límites. Las distancias son tuyas, las tomás de tu título de propiedad o de tu esquema de zonificación; BimCraft no completa ninguna.
- **Una línea de edificación dibujada.** Con {{ui:Building line}} activado, hacé clic en sus puntos y terminá con doble clic o {{key:Enter}}. Terminá en el primer punto para una línea cerrada: el área adentro es donde se puede construir, y un muro con cualquier parte afuera recibe una advertencia. Una línea abierta advierte solo sobre un muro que la cruza.
- **Una servidumbre.** {{ui:Build}} › {{ui:Servitude}}: elegí su tipo, escribí su nombre, su referencia registrada y su ancho, y después hacé clic en su línea central y terminá (una franja), o cerrala en su primer punto (un área). Un muro con cualquier parte sobre ella recibe una advertencia, en todos los niveles.
- Una cara exactamente sobre una línea está tocando, no cruzando (la tolerancia es de 1 mm).
- La opción de volumen vigente de cada conjunto de opciones se verifica igual que los muros: un volumen fuera del límite, sobre una línea de edificación o en una servidumbre recibe una advertencia. Ver [Opciones de volumen puestas lado a lado](topic:massing-options).
- Elegí una con {{ui:Select}} para cambiar su nombre, referencia, tipo o ancho, moverla o eliminarla.

Se dibujan en el plano de cada nivel, en las hojas y en el PDF del plano: las líneas de edificación con trazos, las servidumbres con puntos, cada una con su etiqueta. En el archivo IFC, cada una es una anotación (IfcAnnotation, tipo BuildingLine o Servitude) sobre el sitio, con su línea como curva simple que otros programas pueden leer. La verificación usa el contorno real de cada muro en el plano, con sus uniones como se dibujaron; un muro curvo se verifica por su propio espesor respecto de su línea central.

## Agregar niveles

En el panel {{ui:Levels}}, {{ui:Add a level on top}} agrega uno, {{ui:Add a level below}} agrega uno debajo del más bajo (un sótano, a una elevación negativa). {{ui:Add levels…}} agrega varios a la vez:

- **En estas alturas**: escribí alturas por encima del nivel más bajo, separadas por comas (por ejemplo `12', 24', 36'`). Las alturas que ya tienen un nivel se omiten.
- **Dividir la altura del edificio**: escribí la altura del edificio y la cantidad de niveles. Los niveles que tenés se mueven a sus nuevas alturas desde el más bajo hacia arriba, se agregan los que faltan, y los que quedan por encima se quedan donde están.

Los muros que llegan al nivel de arriba lo siguen, igual que las columnas y las rampas.

{{ui:Copy this level…}} (mismo panel) copia lo que está dibujado en el nivel que estás viendo a otro nivel o a un nivel nuevo arriba, para que un plano de piso suba por el edificio en un solo paso. Ver [Dibujar muros](topic:draw-walls).

## Dibujar en un nivel

Cada herramienta de {{ui:Draw}} trabaja sobre el nivel elegido en la lista de niveles del plano (o elegido en el panel {{ui:Levels}}): lo que dibujes pertenece a ese nivel.

## Lo que deberías ver

- Cada uno de estos cambios es un paso: {{key:Mod+Z}} lo deshace.
- En el archivo IFC: el sitio (IfcSite) con su contorno y superficie, el edificio (IfcBuilding) colocado en él, y los niveles (IfcBuildingStorey) dentro del edificio.

Ver también [Coordenadas en BimCraft](topic:coordinates) para el origen del proyecto y el punto de relevamiento.
