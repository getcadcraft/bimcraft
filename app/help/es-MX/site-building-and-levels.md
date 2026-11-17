---
title: El terreno, el edificio sobre él y sus niveles
summary: Dibuje el contorno del terreno, coloque y gire el edificio en el terreno, agregue niveles a alturas indicadas o divida la altura del edificio, y dibuje en el nivel que elija.
keywords: terreno, sitio, plano del sitio, línea de construcción, retiro, servidumbre, derecho de paso, línea de propiedad, lote, predio, colindancia, colocación del edificio, girar edificio, colocar edificio, niveles, pisos, plantas, agregar niveles, dividir altura, altura de piso a piso, IfcSite, IfcBuilding, IfcBuildingStorey, estructura espacial
from: 48d10c1e
---

## Lo que hará

Configure las partes de un modelo IFC que contienen todo lo demás: el terreno, el edificio sobre él y los niveles del edificio.

Un modelo se organiza como un **terreno** que contiene un **edificio**, que a su vez contiene sus **niveles** (pisos); los muros, pisos y todo lo demás pertenecen a un nivel. {{ui:Archivo}} › {{ui:Edificio nuevo}} configura los tres. Un modelo de otro programa que tiene un edificio pero no terreno obtiene un terreno la primera vez que dibuje uno: el edificio se coloca en él donde ya estaba.

## Dibujar el terreno

1. Active {{ui:Dibujo}} y luego elija {{ui:Compilación}} › {{ui:Sitio}}.
2. Haga clic en las esquinas del terreno (la herramienta se ajusta igual que la herramienta Muro). Haga clic de nuevo en la primera esquina, haga doble clic o pulse {{key:Enter}} para terminar. {{key:Backspace}} quita una esquina.
3. La fila muestra el área del terreno. Vuelva a dibujarlo para cambiarlo.

La planta de cada nivel muestra el contorno del terreno como línea de propiedad.

## Colocar el edificio en el terreno

Con {{ui:Sitio}} activado, escriba la **X** y la **Y** del edificio en el terreno y su **Giro** en grados, o haga clic en {{ui:Colocar el edificio con un clic}} y haga clic donde debe ir el origen del edificio. Todo lo que hay en el edificio (niveles, muros, rejillas, todo lo que dibujó) se mueve con él; el terreno y su contorno no se mueven. Las plantas siguen mostrando cada nivel en escuadra con el edificio.

## Líneas de construcción y servidumbres

Las líneas de construcción y las servidumbres (derechos de paso) se dibujan en el terreno como restricciones. **Advierten, nunca bloquean**: un muro sobre una de ellas se dibuja como lo pidió, y aparece en Problemas una advertencia que nombra el muro y la línea o servidumbre. Mueva el muro hacia atrás y la advertencia desaparece. Una advertencia puede aceptarse con un motivo (una flexibilización que concedió la autoridad, por ejemplo).

- **Línea de construcción desde retiros.** {{ui:Compilación}} › {{ui:Línea de construcción}}, luego {{ui:Retiros}}: escriba a qué distancia se mete la línea desde cada límite del terreno. Los límites se numeran en la planta mientras la herramienta está activa. La línea se calcula a partir de esas distancias y sigue el contorno del terreno si lo vuelve a dibujar con la misma cantidad de límites. Las distancias son suyas, tomadas de su escritura o de su plan de zonificación; BimCraft no pone ninguna.
- **Una línea de construcción dibujada.** Con {{ui:Línea de construcción}} activa, haga clic en sus puntos y termine con doble clic o {{key:Enter}}. Termine en el primer punto para una línea cerrada: el área interior es donde se puede construir, y un muro con alguna parte fuera de ella recibe una advertencia. Una línea abierta solo advierte sobre un muro que la cruza.
- **Una servidumbre.** {{ui:Compilación}} › {{ui:Servidumbre}}: elija su tipo, escriba su nombre, su referencia registrada y su ancho, luego haga clic en su eje central y termine (una franja), o ciérrela en su primer punto (un área). Un muro con alguna parte sobre ella recibe una advertencia, en todos los niveles.
- Una cara exactamente sobre una línea está tocando, no cruzando (la tolerancia es de 1 mm).
- La opción de volumetría vigente de cada conjunto de opciones se verifica igual que los muros: una masa fuera del límite, sobre una línea de construcción o en una servidumbre recibe una advertencia. Vea [Opciones de volumetría una al lado de otra](topic:massing-options).
- Designe una con {{ui:Seleccionar}} para cambiar su nombre, referencia, tipo o ancho, moverla o eliminarla.

Se dibujan en la planta de cada nivel, en las hojas y en el PDF de planos: las líneas de construcción con trazos, las servidumbres con puntos, cada una con su etiqueta. En el archivo IFC cada una es una anotación (IfcAnnotation, tipo BuildingLine o Servitude) en el terreno, con su línea como curva simple que otros programas pueden leer. La verificación usa el contorno real de cada muro en la planta, con sus uniones tal como se dibujaron; un muro curvo se verifica por su propio espesor respecto a su eje.

## Agregar niveles

En el panel {{ui:Niveles}}, {{ui:Agregar un nivel encima}} agrega uno, {{ui:Agregar un nivel debajo}} agrega uno por debajo del más bajo (un sótano, con elevación negativa). {{ui:Agregar niveles…}} agrega varios a la vez:

- **A estas alturas**: escriba las alturas por encima del nivel más bajo, separadas por comas (por ejemplo `12', 24', 36'`). Las alturas que ya tienen un nivel se omiten.
- **Dividir la altura del edificio**: escriba la altura del edificio y el número de niveles. Los niveles que tiene se mueven a sus nuevas alturas de abajo hacia arriba, se agregan los que faltan, y los que estén por encima se quedan donde están.

Los muros que llegan al nivel superior lo siguen, al igual que las columnas y las rampas.

{{ui:Copiar este nivel…}} (en el mismo panel) copia lo dibujado en el nivel que está viendo a otro nivel o a un nivel nuevo encima, para subir una planta por el edificio en un solo paso. Vea [Dibujar muros](topic:draw-walls).

## Dibujar en un nivel

Cada herramienta de {{ui:Dibujo}} trabaja en el nivel elegido en la lista de niveles de la planta (o designado en el panel {{ui:Niveles}}): lo que dibuja pertenece a ese nivel.

## Lo que debe ver

- Cada uno de estos cambios es un paso: {{key:Mod+Z}} lo deshace.
- En el archivo IFC: el terreno (IfcSite) con su contorno y área, el edificio (IfcBuilding) colocado en él, y los niveles (IfcBuildingStorey) dentro del edificio.

Vea también [Coordenadas en BimCraft](topic:coordinates) para el origen del proyecto y el punto de levantamiento.
