---
title: El terreno, el edificio sobre él y sus plantas
summary: Dibuje el contorno del terreno, coloque y gire el edificio en el terreno, añada plantas a alturas indicadas o reparta la altura del edificio, y dibuje en la planta que elija.
keywords: terreno, plano de situación, línea de edificación, retranqueo, servidumbre, servidumbre de paso, linde, parcela, lote, límite, colocación del edificio, girar edificio, colocar edificio, niveles, plantas, pisos, añadir niveles, repartir altura, altura entre forjados, IfcSite, IfcBuilding, IfcBuildingStorey, estructura espacial
from: 48d10c1e
---

## Qué hará

Configure las partes de un modelo IFC que contienen todo lo demás: el terreno, el edificio sobre él y las plantas del edificio.

Un modelo se organiza como un **terreno** que contiene un **edificio**, que contiene sus **plantas** (niveles); los muros, los forjados y todo lo demás pertenecen a una planta. {{ui:Archivo}} › {{ui:Edificio nuevo}} configura los tres. Un modelo de otro programa que tiene un edificio pero no terreno recibe un terreno la primera vez que dibuja uno: el edificio se coloca en él donde ya estaba.

## Dibujar el terreno

1. Active {{ui:Dibujo}} y elija {{ui:Compilación}} › {{ui:Terreno}}.
2. Haga clic en las esquinas del terreno (la herramienta se ajusta como la herramienta Muro). Haga clic de nuevo en la primera esquina, haga doble clic o pulse {{key:Enter}} para terminar. {{key:Backspace}} deshace una esquina.
3. La fila muestra el área del terreno. Vuelva a dibujarlo para cambiarlo.

El plano de cada planta muestra el contorno del terreno como línea de propiedad.

## Colocar el edificio en el terreno

Con {{ui:Terreno}} activado, escriba la **X** y la **Y** del edificio en el terreno y su **Giro** en grados, o haga clic en {{ui:Colocar el edificio con un clic}} y haga clic donde debe ir el origen del edificio. Todo lo que contiene el edificio (plantas, muros, ejes, todo lo que dibujó) se mueve con él; el terreno y su contorno se mantienen. Los planos siguen mostrando cada planta a escuadra con el edificio.

## Líneas de edificación y servidumbres

Las líneas de edificación y las servidumbres (de paso, derechos de paso) se dibujan en el terreno como restricciones. **Avisan, nunca bloquean**: un muro sobre una de ellas se dibuja como lo pidió, y aparece en Problemas un aviso con el nombre del muro y de la línea o servidumbre. Mueva el muro hacia atrás y el aviso desaparece. Un aviso puede aceptarse con un motivo (una dispensa concedida por la autoridad, por ejemplo).

- **Línea de edificación a partir de retranqueos.** {{ui:Compilación}} › {{ui:Línea de edificación}}, luego {{ui:Retranqueos}}: escriba a qué distancia se separa la línea de cada límite del terreno. Los límites están numerados en el plano mientras la herramienta está activa. La línea se calcula a partir de esas distancias y sigue el contorno del terreno si lo vuelve a dibujar con el mismo número de límites. Las distancias son suyas, tomadas de su escritura o de su plan urbanístico; BimCraft no rellena ninguna.
- **Una línea de edificación dibujada.** Con {{ui:Línea de edificación}} activada, haga clic en sus puntos y termine con doble clic o con {{key:Enter}}. Termine en el primer punto para obtener una línea cerrada: el área interior es donde se puede construir, y se avisa de un muro con cualquier parte fuera de ella. Una línea abierta solo avisa de un muro que la cruza.
- **Una servidumbre.** {{ui:Compilación}} › {{ui:Servidumbre}}: elija su tipo, escriba su nombre, su referencia registral y su anchura, y luego haga clic en su línea central y termine (una franja), o ciérrela en su primer punto (un área). Se avisa de un muro con cualquier parte sobre ella, en todas las plantas.
- Una cara exactamente sobre una línea se considera tocando, no cruzando (la tolerancia es de 1 mm).
- La opción de volumen actual de cada conjunto de opciones se comprueba igual que los muros: un volumen fuera del límite, sobre una línea de edificación o en una servidumbre recibe un aviso. Consulte [Opciones de volumen mantenidas en paralelo](topic:massing-options).
- Designe una con {{ui:Seleccionar}} para cambiar su nombre, referencia, tipo o anchura, moverla o borrarla.

Se dibujan en el plano de cada planta, en las hojas y en el PDF de planta: las líneas de edificación de trazo discontinuo y las servidumbres de puntos, cada una con su etiqueta. En el archivo IFC cada una es una anotación (IfcAnnotation, tipo BuildingLine o Servitude) en el terreno, con su línea como curva simple que otros programas pueden leer. La comprobación usa el contorno real de cada muro en el plano, con sus uniones tal como se dibujaron; un muro curvo se comprueba por su propio espesor respecto a su línea central.

## Añadir plantas

En el panel {{ui:Niveles}}, {{ui:Agregar un nivel encima}} añade una; {{ui:Añadir un nivel inferior}} añade una debajo de la más baja (un sótano, a una cota negativa). {{ui:Agregar niveles…}} añade varias a la vez:

- **A estas alturas**: escriba alturas por encima de la planta más baja, separadas por comas (por ejemplo `12', 24', 36'`). Las alturas que ya tienen una planta se omiten.
- **Repartir la altura del edificio**: escriba la altura del edificio y el número de plantas. Las plantas existentes se mueven a sus nuevas alturas desde la más baja hacia arriba, se añaden las que faltan, y las que estén por encima se quedan donde están.

Los muros que llegan a la planta superior la siguen, igual que los pilares y las rampas.

{{ui:Copiar esta planta…}} (en el mismo panel) copia lo dibujado en la planta que está viendo a otra planta o a una nueva planta encima, para subir un plano de planta por el edificio en un solo paso. Consulte [Dibujar muros](topic:draw-walls).

## Dibujar en una planta

Cada herramienta de {{ui:Dibujo}} trabaja en la planta elegida en la lista de plantas del plano (o designada en el panel {{ui:Niveles}}): lo que dibuja pertenece a esa planta.

## Lo que debe ver

- Cada uno de estos cambios es un paso: {{key:Mod+Z}} lo deshace.
- En el archivo IFC: el terreno (IfcSite) con su contorno y su área, el edificio (IfcBuilding) colocado en él, y las plantas (IfcBuildingStorey) dentro del edificio.

Consulte también [Coordenadas en BimCraft](topic:coordinates) para el origen del proyecto y el punto topográfico.
