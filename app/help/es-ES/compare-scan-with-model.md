---
title: Comparar un escaneo con el modelo y el cronograma 4D
summary: Juzgue cada elemento del modelo frente a una nube de puntos abierta (construido, en parte, falta, no alcanzado), vea el porcentaje construido, coloree el modelo según ello y, con un cronograma 4D cargado, liste lo que va con retraso o adelantado en el día 4D.
keywords: escaneo, nube de puntos, avance, porcentaje completado, construido, falta, retrasado, adelantado, 4D, avance de obra, desviación, tal como construido, escaneo láser, dron, comparar
from: 6fdc9003
---

Abra un IFC, abra una nube de puntos junto a él (vea [Nubes de puntos](topic:point-clouds)) y colóquela sobre el modelo. La sección {{ui:Compare the scan with the model}} aparece en el panel derecho mientras haya una nube abierta.

## Qué hace

Pulse {{ui:Compare}}. Cada elemento del modelo se juzga por su superficie, porque eso es lo que ve un escáner. Las seis caras de su caja se dividen en celdas de unos 20 cm; una celda cuenta cuando un punto del escaneo está dentro de la {{ui:Tolerance}} (50 mm al inicio) de la cara. Cuenta la mayor cara grande, de modo que un muro escaneado desde un lado no se penaliza por su otro lado.

- **Construido**: al menos el 40 % de la superficie se ve.
- **En parte**: del 10 % al 40 %.
- **Falta**: menos que eso, pero el escaneo llega al elemento (puntos a menos de 1.5 m de él).
- **No alcanzado**: el escaneo nunca fue allí, así que no se dice nada de él.

Para los elementos construidos y en parte construidos también da el desvío medio de los puntos del escaneo respecto a la superficie del modelo, y dice si el elemento está en su sitio (dentro de la tolerancia), cerca (dentro del triple) o desplazado (más lejos). Solo ve desvíos de hasta cinco veces la tolerancia: un elemento construido más lejos de su sitio que eso aparece como faltante.

El resumen da el porcentaje construido entre los elementos que alcanza el escaneo, por número y por volumen. Los elementos en parte construidos se cuentan aparte y no se suman a los construidos.

## Frente al cronograma 4D

Con un cronograma 4D cargado (vea [Cronograma 4D](topic:4d-schedule)), el resultado también usa el día que haya fijado en el control deslizante 4D: los elementos que deben estar listos para ese día y que el escaneo no muestra como construidos están **retrasados**; los elementos que todavía no toca construir y que sí lo están, **adelantados**. Los elementos retrasados aparecen en {{ui:Problems}}, y la tabla se puede filtrar por ellos. Sin cronograma no se dice nada de retrasos ni de adelantos.

## La tabla y el modelo

Haga clic en una fila para seleccionar el elemento. {{ui:Colour the model}} pinta los elementos en verde (construido), ámbar (en parte), rojo (falta) o gris (no alcanzado); {{ui:Own colours}} los devuelve a sus colores. {{ui:Save CSV}} escribe la tabla. {{ui:Marcar los elementos coincidentes como verificados en obra}} marca cada elemento visto como construido y dentro de la tolerancia como verificado en obra (LOD 500, método escaneo), en un solo paso que puede deshacer. Vea [Marcar elementos como comprobados o verificados en obra](topic:verification).

:::warning
Esto compara la caja de cada elemento con puntos del escaneo dentro de una tolerancia. **No es un levantamiento, una medición de cantidades ni una base para el pago.** Un elemento oculto frente a uno escaneado (un muro tras un revestimiento, una losa bajo un acabado de suelo) comparte su superficie y puede leerse como construido; un elemento curvo o inclinado tiene una caja mayor que su cuerpo y puede leerse como en parte o como faltante. Revise la lista antes de actuar sobre ella. Los comentarios de permisos y las notas de avance no forman parte de esto: permanecen en las columnas donde los guarde.
:::

Un asistente puede ejecutar la misma comparación con la herramienta {{ui:Compare the scan with the model}}; no cambia nada en el modelo.
