---
title: Muros y puertas a partir de un escaneo con teléfono o láser
summary: Convierta un escaneo de una habitación en muros, puertas y habitaciones propuestos que acepta uno a uno.
keywords: escaneo, escaneo con teléfono, lidar, nube de puntos, muros desde escaneo, puertas desde escaneo, escaneo de habitación, ply, e57, las, obj, sugerir
from: a4ef0f10
---

## Qué hace

Con un escaneo abierto (una nube de puntos como PLY, E57 o LAS, o una malla como OBJ), BimCraft corta el escaneo a la altura del plano, lo alinea en escuadra con el edificio y busca series largas y finas de puntos: esos son muros. Un hueco del ancho aproximado de una puerta entre dos series en una misma línea se convierte en un muro con una puerta. Los muros que cierran un espacio forman una habitación.

No se dibuja nada hasta que lo acepte. Los muros y puertas llegan como una lista de propuestas (son cambios en modo Sugerir): conserve los correctos, rechace los demás, y todo lo que conserve se dibuja en un solo paso de Deshacer. Las habitaciones aparecen por sí solas.

## Qué comprueba

Los muros que no cierran, los tramos de muro más cortos que el grosor de un muro, y un hueco del tamaño de una puerta sin muro alrededor se notifican como Problemas con una posición, para que mire el escaneo en ese punto.

## Sin verificar hasta comprobarlos

Los muros, puertas y habitaciones que acepte de un escaneo se marcan como sin verificar: un recuadro discontinuo y un "?" en el plano hasta que los marque como comprobados. Véase [Marcar elementos como comprobados o verificados en obra](topic:verification).

## Lo que no puede hacer

- Encuentra muros que siguen dos direcciones perpendiculares. Un muro diagonal o curvo no se encuentra.
- Una planta cada vez. No se encuentran ventanas (una ventana solo es un hueco cuando el corte está a la altura del antepecho).
- Se ha probado con escaneos y mallas de habitaciones generados, pero todavía no con escaneos de un teléfono real. No se sabe con qué precisión funciona con un escaneo real (deriva en un recorrido largo, mobiliario junto a los muros, vidrio, puertas abiertas); ajustarlo con escaneos reales es el siguiente paso. Compruebe cada propuesta contra el escaneo antes de aceptarla.
