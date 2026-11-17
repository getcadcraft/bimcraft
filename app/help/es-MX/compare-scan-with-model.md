---
title: Compare un escaneo con el modelo y el cronograma 4D
summary: Juzgue cada elemento del modelo contra una nube de puntos abierta (construido, parcial, faltante, no alcanzado), vea el porcentaje construido, coloree el modelo según eso, y con un cronograma 4D cargado liste qué va atrasado o adelantado en el día 4D.
keywords: escaneo, nube de puntos, avance, porcentaje completado, construido, faltante, atrasado, adelantado, 4D, avance en obra, desviación, como construido, escaneo láser, dron, comparar
from: 6fdc9003
---

Abra un IFC, abra una nube de puntos junto a él (vea [Nubes de puntos](topic:point-clouds)) y colóquela sobre el modelo. La sección {{ui:Comparar el escaneo con el modelo}} aparece en el panel derecho mientras una nube está abierta.

## Qué hace

Pulse {{ui:Comparar}}. Cada elemento del modelo se juzga por su superficie, porque eso es lo que ve un escáner. Las seis caras de su caja se dividen en celdas de unos 20 cm; una celda cuenta cuando un punto del escaneo está dentro de su {{ui:Tolerancia}} (50 mm para empezar) de la cara. Cuenta la cara grande que mejor se ve, así que un muro escaneado desde un lado no se penaliza por su otro lado.

- **Construido**: al menos el 40 % de la superficie se ve.
- **Parcial**: del 10 % al 40 %.
- **Faltante**: menos que eso, pero el escaneo llega al elemento (puntos a menos de 1.5 m de él).
- **No alcanzado**: el escaneo nunca llegó ahí, así que no se dice nada de él.

Para los elementos construidos y parciales también da el desfase medio de los puntos del escaneo respecto de la superficie del modelo, y dice si el elemento está en su lugar (dentro de la tolerancia), cerca (dentro de tres veces) o desviado (más lejos). Solo ve desfases de hasta cinco veces la tolerancia: un elemento construido más lejos de su lugar que eso se lee como faltante.

El resumen da el porcentaje construido entre los elementos que alcanza el escaneo, por conteo y por volumen. Los elementos parcialmente construidos se cuentan por separado y no se suman a los construidos.

## Contra el cronograma 4D

Con un cronograma 4D cargado (vea [Cronograma 4D](topic:4d-schedule)), el resultado también usa el día que fijó en el control deslizante 4D: los elementos que deberían estar listos a ese día y que el escaneo no muestra como construidos están **atrasados**; los elementos que todavía no vencen y ya están construidos están **adelantados**. Los elementos atrasados se listan en {{ui:Problemas}}, y la tabla se puede filtrar para verlos. Sin cronograma no se dice nada de atrasos ni adelantos.

## La tabla y el modelo

Haga clic en una fila para seleccionar el elemento. {{ui:Colorear el modelo}} pinta los elementos de verde (construido), ámbar (parcial), rojo (faltante) o gris (no alcanzado); {{ui:Colores propios}} los devuelve a su color. {{ui:Guardar CSV}} escribe la tabla. {{ui:Marcar los elementos correspondientes como verificados en campo}} marca cada elemento visto como construido y dentro de la tolerancia como verificado en campo (LOD 500, método escaneo), en un solo paso que puede deshacer. Vea [Marque elementos como revisados o verificados en campo](topic:verification).

:::warning
Esto compara la caja de cada elemento con puntos del escaneo dentro de una tolerancia. **No es un levantamiento, una cuantificación ni una base para pagos.** Un elemento oculto tras uno escaneado (un muro detrás de un recubrimiento, una losa bajo un acabado de piso) comparte su superficie y puede leerse como construido; un elemento curvo o inclinado tiene una caja más grande que su cuerpo y puede leerse como parcial o faltante. Revise la lista antes de actuar con ella. Los comentarios de permisos y las notas de avance no forman parte de esto: se quedan en las columnas donde los guarde.
:::

Un asistente puede ejecutar la misma comparación con la herramienta {{ui:Comparar el escaneo con el modelo}}; no cambia nada en el modelo.
