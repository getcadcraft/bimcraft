---
title: Muros y puertas a partir de un escaneo con teléfono o láser
summary: Convierta un escaneo de un local en muros, puertas y locales propuestos que acepta uno por uno.
keywords: escaneo, escaneo con teléfono, lidar, nube de puntos, muros desde escaneo, puertas desde escaneo, escaneo de local, ply, e57, las, obj, sugerir
from: a4ef0f10
---

## Qué hace

Con un escaneo abierto (una nube de puntos como PLY, E57 o LAS, o una malla como OBJ), BimCraft corta el escaneo a la altura de la planta, lo gira a escuadra con el edificio y busca tramos largos y delgados de puntos: esos son muros. Un hueco del ancho aproximado de una puerta entre dos tramos sobre una misma línea se convierte en un solo muro con una puerta. Los muros que cierran un espacio forman un local.

Nada se dibuja hasta que lo acepte. Los muros y las puertas llegan como una lista de propuestas (son cambios en modo Sugerir): conserve los correctos, rechace los demás, y todo lo que conserve se dibuja en un solo paso de Deshacer. Los locales aparecen por sí solos.

## Qué revisa

Los muros que no cierran, los tramos de muro más cortos que el espesor de un muro, y un hueco del tamaño de una puerta sin muro alrededor se informan como Problemas con una posición, para que pueda revisar el escaneo ahí.

## No verificado hasta revisarlo

Los muros, puertas y locales que acepte de un escaneo se marcan como no verificados: un recuadro punteado y un «?» en el plano hasta que los marque como revisados. Vea [Marcar elementos como revisados o verificados en obra](topic:verification).

## Lo que no puede hacer

- Encuentra muros que van en dos direcciones perpendiculares. Un muro diagonal o curvo no se encuentra.
- Trabaja un nivel a la vez. Las ventanas no se encuentran (una ventana solo es un hueco cuando el corte está a la altura del antepecho).
- Se ha probado con escaneos y mallas de locales generados, aún no con escaneos de un teléfono real. No se sabe qué tan bien funciona con un escaneo real (deriva en un recorrido largo, muebles contra los muros, vidrio, puertas abiertas), y ajustarlo con escaneos reales es el siguiente paso. Revise cada propuesta contra el escaneo antes de aceptarla.
