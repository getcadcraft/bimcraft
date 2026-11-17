---
title: Muros y puertas desde un escaneo con teléfono o láser
summary: Convertí un escaneo de un ambiente en muros, puertas y ambientes propuestos que aceptás uno por uno.
keywords: escaneo, escaneo con teléfono, lidar, nube de puntos, muros desde escaneo, puertas desde escaneo, escaneo de ambiente, ply, e57, las, obj, sugerir
from: a4ef0f10
---

## Qué hace

Con un escaneo abierto (una nube de puntos como PLY, E57 o LAS, o una malla como OBJ), BimCraft corta el escaneo a la altura de la planta, lo gira a escuadra respecto al edificio y busca tramos largos y delgados de puntos: esos son muros. Un hueco de aproximadamente el ancho de una puerta entre dos tramos sobre una misma línea se convierte en un muro con una puerta. Los muros que cierran un espacio forman un ambiente.

No se dibuja nada hasta que lo aceptes. Los muros y puertas llegan como una lista de propuestas (son cambios en modo Sugerir): conservá los que están bien, rechazá los demás, y todo lo que conservaste se dibuja en un solo paso de Deshacer. Los ambientes aparecen solos.

## Qué revisa

Los muros que no cierran, los tramos de muro más cortos que el espesor de un muro, y un hueco del tamaño de una puerta sin muro alrededor se informan como Problemas con su posición, para que mires el escaneo en ese lugar.

## Sin verificar hasta revisarlo

Los muros, puertas y ambientes que aceptás desde un escaneo quedan marcados como no verificados: un recuadro de trazos y un "?" en la planta hasta que los marques como revisados. Ver [Marcar elementos como revisados o verificados en obra](topic:verification).

## Lo que no puede hacer

- Encuentra muros que van en dos direcciones perpendiculares. Un muro diagonal o curvo no se encuentra.
- Un piso por vez. Las ventanas no se encuentran (una ventana es solo un hueco cuando el corte está a la altura del antepecho).
- Se probó con escaneos y mallas de ambientes generados, todavía no con escaneos de un teléfono real. No se sabe qué tan bien funciona con un escaneo real (deriva en un recorrido largo, muebles contra los muros, vidrio, puertas abiertas), y ajustarlo con escaneos reales es el siguiente paso. Revisá cada propuesta contra el escaneo antes de aceptarla.
