---
title: Ver qué se desgasta en cincuenta años
summary: Las ventanas, puertas, acabados y cubierta del modelo, su vida útil, los años en que se sustituye cada uno, y el coste por año y su valor actual cuando introduce un coste por unidad.
keywords: ciclo de vida, vida útil, sustitución, mantenimiento, coste, valor actual, descuento, inflación, 50 años, ventanas, pintura, cubierta, acabados, coste total del ciclo de vida
from: 1b849545
---

La sección {{ui:Vista del ciclo de vida}} del panel izquierdo enumera lo que contiene el modelo y se desgasta, y cuándo se sustituye durante el periodo de estudio (50 años como punto de partida). No se modifica nada del modelo.

## Cómo leerla

Cada parte muestra su cantidad (medida en el modelo: superficie de ventanas, puertas exteriores e interiores, acabado del muro exterior, pintura interior, acabado de suelos y techos, huella de la cubierta, escaleras), una **vida útil en años** y un **coste por unidad**. Una parte se sustituye al cumplir su vida útil, después al doble y así sucesivamente, mientras esa fecha sea anterior al final del estudio; así, una ventana de 30 años en un estudio de 50 se sustituye una vez, en el año 30. Las vidas útiles son cifras habituales de planificación: cámbielas según sus productos y su clima. No se supone ningún coste; introduzca uno para ver el importe por año, el total y su valor actual. Añada una tasa de descuento y una tasa de inflación si las quiere.

{{ui:Guardar el calendario (CSV)}} escribe los componentes y los años. También se listan las tuberías, los conductos, el cableado y los equipos (véase más abajo).

## Tuberías, conductos, cableado y equipos

- **Tuberías y conductos** son los metros de cada tramo dibujado. Los **equipos** (bombas, ventiladores, válvulas, terminales, aparatos, tomas de corriente, interruptores, cuadros y los demás elementos que sigue la pestaña Activos) se cuentan por tipo, cada uno con una vida útil de planificación. Un elemento cuya *vida útil* se haya fijado en la pestaña Activos aparece en una línea propia con esa vida, y si tiene fecha de instalación empieza con su antigüedad: una bomba de 16 años con una vida útil de 10 vence ahora y después cada diez años.
- El **cableado** es una **estimación**: la distancia en planta desde el cuadro a lo largo de los dispositivos de cada circuito, empezando por el más cercano, multiplicada por 1.25 para el trazado. El modelo no dibuja cable, así que compárelo con su propia medición.
- Las vidas útiles son cifras de planificación que hay que revisar, no una fuente.

## Carbono por sustitución

Marque {{ui:Incluir el carbono incorporado de cada sustitución}}. Una ventana, puerta, escalera, cubierta, tubería o equipo nuevos se cuentan con el carbono que llevan los elementos del mismo tipo del modelo (los factores de la pestaña Carbono, por unidad). Una parte sin elemento ni factor, como la pintura, los acabados y el cableado, muestra un guion y aparece en la lista. No se cuentan ni el final de vida de la parte antigua ni el trabajo de sustituirla.
