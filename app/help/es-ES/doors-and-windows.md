---
title: "Puertas y ventanas"
summary: "Coloque puertas y ventanas en muros dibujados: señale un muro, vea el sentido de apertura y las distancias a las esquinas, y haga clic; el hueco del muro se recorta solo."
keywords: puerta, puertas, ventana, ventanas, hueco, apertura, bisagra, sentido, mano, invertir, puerta corredera, puerta empotrada, puerta de garaje, puerta doble, ventana abatible, ventana de guillotina simple, ventana de guillotina doble, ventana corredera, ventana fija, antepecho, dintel, plegable, puerta de armario, puertas francesas, puerta de granero, paños laterales, puerta de entrada, proyectante, ventana panorámica, sobreluz
from: 4d8ac009
---

## Qué va a hacer

Coloque puertas y ventanas en muros que haya dibujado ([Dibujar muros](topic:draw-walls)). Señale un muro y la puerta o ventana muestra dónde iría, hacia qué lado abre y a qué distancia está de cada esquina. Haga clic, y el hueco se recorta solo en el muro, en la planta y en 3D.

## Colocar una puerta

1. Con {{ui:Dibujo}} activado, haga clic en {{ui:Puerta}} (o pulse {{key:D}}).
2. Elija el tipo: **Puerta batiente simple**, **Puerta batiente doble**, **Puerta corredera**, **Puerta empotrada**, **Puerta de garaje**, **Puerta plegable de armario**, **Puertas francesas**, **Puerta de granero (sobre el muro)** o **Puerta de entrada con paños laterales**. Su tamaño habitual rellena **A** y **H**; elija otro de la lista de tamaños junto a ella, o escriba otros, por ejemplo `2'-8"` o `800`. La lista ofrece también las familias de puertas de este modelo (consulte [Familias y sus tamaños](topic:families)).
3. Señale un muro. El símbolo de la puerta sigue al puntero a lo largo del muro, y la distancia desde cada extremo de esa cara aparece en la planta.
4. La puerta abre hacia el lado del muro en que está el puntero. Pulse {{key:H}} (o haga clic en {{ui:Invertir}}) para poner las bisagras en el otro extremo.
5. Haga clic. La puerta queda colocada y la herramienta sigue activa para la siguiente. Señale el centro de un muro y la puerta se centra sola.

Para colocarla a una distancia exacta, señale el muro cerca de la esquina desde la que mide, escriba la distancia (por ejemplo `2'` o `600`) y pulse {{key:Enter}}. La distancia va desde el extremo más cercano de la cara del muro hasta el borde de la puerta.

## Colocar una ventana

1. Haga clic en {{ui:Ventana}} (o pulse {{key:N}}).
2. Elija el tipo: **Ventana fija**, **Ventana de guillotina simple**, **Ventana de guillotina doble**, **Ventana abatible**, **Ventana corredera**, **Ventana proyectante**, **Ventana panorámica** o **Sobreluz**, y su **A**, **H** y **Antepecho** (la altura de la parte inferior de la ventana sobre el suelo).
3. Señale un muro y haga clic, o escriba una distancia y pulse {{key:Enter}} como con las puertas. Una ventana se sitúa en la cara exterior del muro.

## Mover, invertir, eliminar

- Con {{ui:Seleccionar}} activado, arrastre una puerta o ventana a lo largo de su muro. Arrástrela a otro muro para moverla allí.
- {{key:Delete}} elimina las puertas y ventanas seleccionadas; el muro se cierra.
- Mover o eliminar un muro mueve o elimina lo que contiene. Cuando el inicio de un muro se desplaza a lo largo de su propia línea, sus puertas y ventanas conservan su posición.
- {{ui:Deshacer}} y {{ui:Rehacer}} deshacen y rehacen cada colocación, movimiento o eliminación.

## Qué se rechaza

- **No cabe en ese muro.** La puerta o ventana es más ancha que el muro, o sobresaldría por uno de sus extremos. Pruebe con una anchura menor o con un muro más largo.
- **Es más alta que el muro.** El antepecho más la altura supera la parte superior del muro.

## Qué se guarda

Cada puerta o ventana es una puerta o ventana IFC con su tamaño, su funcionamiento (por ejemplo, batiente simple a izquierda), su tipo de tamaño (un tipo para cada tamaño de su familia), `Pset_DoorCommon` o `Pset_WindowCommon` y cantidades base, y ocupa un hueco IFC en su muro. El área neta lateral y el volumen del muro no incluyen el hueco. Otros programas BIM la abren como una puerta en un muro.

## Conviene saber

- La planta muestra las puertas abiertas a 90° con su sentido de apertura, las puertas correderas como dos hojas, las puertas empotradas deslizándose dentro del muro, las puertas de garaje como línea discontinua en alto, y las ventanas con su marco y sus líneas de vidrio.
- La anchura es la anchura total del marco; la hoja de la puerta es la anchura menos las dos jambas.
- Copiar puertas y ventanas dibujadas todavía no está disponible: coloque otra.

## Ventana de salida de sótano con pozo

Elija **Salida de sótano con pozo** en la lista de tipos de ventana. Empieza como una ventana abatible de 36 × 48 inch, con un antepecho a 36 inch sobre el nivel. El pozo está en el exterior del muro, con al menos 48 inch de anchura libre, 36 inch de vuelo y un fondo 6 inch por debajo del antepecho. Aparece como líneas discontinuas en planta y como tres lados abiertos por arriba en 3D. El pozo forma parte del volumen IFC de la ventana, así que guardar, mover, redimensionar o eliminar la ventana lo arrastra consigo. Al redimensionar se mantienen al menos 6 inch junto a cada jamba.

Estas son dimensiones de modelado predeterminadas, no una certificación de cumplimiento de la salida de emergencia. Compruebe por separado la luz libre real del fabricante, la normativa local, la rasante, el drenaje y cualquier escalera necesaria. La profundidad y la altura del pozo son dimensiones predefinidas; no siguen el terreno.
