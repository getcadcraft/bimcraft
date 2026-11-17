---
title: Puertas y ventanas
summary: Coloque puertas y ventanas en muros dibujados: apunte a un muro, vea el sentido de giro y las distancias a las esquinas, haga clic; la abertura del muro se corta sola.
keywords: puerta, puertas, ventana, ventanas, abertura, giro, bisagra, sentido, invertir, puerta corrediza, puerta de bolsillo, puerta de cochera, puerta doble, ventana de batiente, ventana de guillotina, ventana corrediza, ventana fija, antepecho, dintel, plegable, puerta de clóset, puertas francesas, puerta de granero, laterales de luz, puerta de acceso, toldo, ventanal, travesaño
from: 4d8ac009
---

## Qué hará

Coloque puertas y ventanas en muros que dibujó ([Dibujar muros](topic:draw-walls)). Apunte a un muro y la puerta o la ventana muestran dónde iría, hacia dónde gira y qué tan lejos está de cada esquina. Haga clic, y la abertura se corta sola del muro en la planta y en 3D.

## Colocar una puerta

1. Con {{ui:Dibujo}} activado, haga clic en {{ui:Puerta}} (o presione {{key:D}}).
2. Elija el tipo: **Puerta batiente sencilla**, **Puerta batiente doble**, **Puerta corrediza**, **Puerta de bolsillo**, **Puerta de cochera**, **Puerta plegable de clóset**, **Puertas francesas**, **Puerta de granero (sobre el muro)** o **Puerta de acceso con laterales de luz**. Su tamaño habitual llena **W** y **H**; elija otro de la lista de tamaños junto a ella, o escriba otros, por ejemplo `2'-8"` o `800`. La lista también ofrece las familias de puertas de este modelo (vea [Familias y sus tamaños](topic:families)).
3. Apunte a un muro. El símbolo de la puerta sigue al puntero a lo largo del muro, y la distancia desde cada extremo de esa cara aparece en la planta.
4. La puerta gira hacia el lado del muro donde está el puntero. Presione {{key:H}} (o haga clic en {{ui:Invertir}}) para poner las bisagras en el otro extremo.
5. Haga clic. La puerta se coloca y la herramienta sigue activa para la siguiente. Apunte al centro de un muro y la puerta se centra sola.

Para colocarla a una distancia exacta, apunte al muro cerca de la esquina desde la que mide, escriba la distancia (por ejemplo `2'` o `600`) y presione {{key:Enter}}. La distancia va desde el extremo más cercano de la cara del muro hasta el borde de la puerta.

## Colocar una ventana

1. Haga clic en {{ui:Ventana}} (o presione {{key:N}}).
2. Elija el tipo: **Ventana fija**, **Ventana de guillotina sencilla**, **Ventana de guillotina doble**, **Ventana de batiente**, **Ventana corrediza**, **Toldo**, **Ventanal** o **Travesaño**, y su **W**, **H** y **Antepecho** (la altura de la parte inferior de la ventana sobre el piso).
3. Apunte a un muro y haga clic, o escriba una distancia y presione {{key:Enter}} como con las puertas. Una ventana se coloca en el exterior del muro.

## Mover, invertir, eliminar

- Con {{ui:Seleccionar}} activado, arrastre una puerta o ventana a lo largo de su muro. Arrástrela a otro muro para moverla allí.
- {{key:Delete}} elimina las puertas y ventanas elegidas; el muro se cierra.
- Mover o eliminar un muro mueve o elimina lo que tiene dentro. Cuando el inicio de un muro se mueve sobre su propia línea, sus puertas y ventanas conservan su lugar.
- {{ui:Deshacer}} y {{ui:Rehacer}} llevan cada colocación, movimiento o eliminación hacia atrás y hacia adelante.

## Lo que se rechaza

- **No cabe en ese muro.** La puerta o la ventana es más ancha que el muro, o sobresaldría por uno de sus extremos. Pruebe un ancho menor o un muro más largo.
- **Es más alta que el muro.** El antepecho más la altura queda por encima de la parte superior del muro.

## Lo que se guarda

Cada puerta o ventana es una puerta o ventana IFC con su tamaño, su operación (por ejemplo, batiente sencilla izquierda), su tipo de tamaño (un tipo por cada tamaño de su familia), `Pset_DoorCommon` o `Pset_WindowCommon` y cantidades base, y llena una abertura IFC en su muro. El área neta lateral y el volumen del muro no incluyen la abertura. Otros programas BIM la abren como una puerta en un muro.

## Cosas que conviene saber

- La planta muestra las puertas abiertas a 90° con su sentido de giro, las puertas corredizas como dos paneles, las puertas de bolsillo deslizándose dentro del muro, las puertas de cochera como una línea discontinua arriba, y las ventanas con sus líneas de marco y de vidrio.
- El ancho es el ancho total del marco; la hoja de la puerta es el ancho menos las dos jambas.
- Copiar puertas y ventanas dibujadas todavía no está disponible: coloque otra.

## Ventana de escape de sótano con pozo

Elija **Escape de sótano con pozo** en la lista de tipos de ventana. Empieza como una ventana de batiente de 36 × 48 in con un antepecho de 36 in sobre el nivel. El pozo está en el exterior del muro, con al menos 48 in de ancho libre, 36 in de proyección y un fondo 6 in debajo del antepecho. Aparece como líneas discontinuas en la planta y como tres lados abiertos por arriba en 3D. El pozo forma parte del cuerpo IFC de la ventana, así que guardar, mover, cambiar el tamaño o eliminar la ventana lo lleva consigo. Al cambiar el tamaño se mantienen al menos 6 in a cada lado de la jamba.

Estos son valores predeterminados de modelado, no una certificación de cumplimiento de escape. Verifique por separado la abertura libre real del fabricante, los requisitos locales, el nivel del terreno, el drenaje y cualquier escalera requerida. La profundidad y la altura del pozo son medidas preestablecidas; no siguen el terreno.
