---
title: Vea qué se desgasta en cincuenta años
summary: Las ventanas, puertas, acabados y techo que contiene el modelo, su vida útil, los años en que se reemplaza cada uno, y el costo por año y su valor presente cuando escriba un costo por unidad.
keywords: ciclo de vida, vida del ciclo, vida útil, reemplazo, mantenimiento, costo, valor presente, descuento, inflación, 50 años, ventanas, pintura, techo, acabados, costo total de vida
from: 1b849545
---

La sección {{ui:Vista del ciclo de vida}} del panel izquierdo enumera lo que contiene el modelo y que se desgasta, y cuándo se reemplaza durante el periodo de estudio (50 años para empezar). No se cambia nada en el modelo.

## Cómo leerla

Cada parte muestra su cantidad (medida del modelo: área de ventanas, puertas interiores y exteriores, acabado del muro exterior, pintura interior, acabado de piso y plafón, la proyección del techo, escaleras), una **vida en años** y un **costo por unidad**. Una parte se reemplaza al cumplirse su vida, al doble de su vida y así sucesivamente, mientras ese momento esté antes del fin del estudio. Por ejemplo, una ventana de 30 años en un estudio de 50 años se reemplaza una vez, en el año 30. Las vidas útiles son cifras típicas de planeación: cámbielas según sus productos y clima. No se supone ningún costo; escriba uno para ver el dinero por año, el total y su valor presente. Agregue una tasa de descuento y una tasa de inflación si las quiere.

{{ui:Guardar el programa (CSV)}} escribe los componentes y los años. Las tuberías, ductos, cableado y equipos también aparecen en la lista (vea abajo).

## Tuberías, ductos, cableado y equipos

- **Tuberías y ductos** son los metros de cada tramo dibujado. Los **equipos** (bombas, ventiladores, válvulas, terminales, accesorios, salidas, interruptores, tableros y demás elementos que registra la pestaña Activos) se cuentan por tipo, y cada tipo tiene una vida de planeación. Un elemento cuya propia *vida útil* esté definida en la pestaña Activos aparece en una línea propia con esa vida; si tiene una fecha de instalación, empieza con su edad: una bomba de 16 años con vida de 10 años vence ahora, y luego cada diez años.
- El **cableado** es una **estimación**: la distancia en planta desde el tablero, a lo largo de los dispositivos de cada circuito, del más cercano al más lejano, multiplicada por 1.25 por el trazado. El modelo no dibuja cable, así que compárelo con su propia cuantificación.
- Las vidas son cifras de planeación para revisar, no una fuente.

## Carbono por reemplazo

Marque {{ui:Incluir el carbono incorporado de cada reemplazo}}. Una nueva ventana, puerta, escalera, techo, tubería o equipo se cuenta con el carbono que tienen los elementos del mismo tipo en el propio modelo (los factores de la pestaña Carbono, por unidad). Una parte sin elemento ni factor, como la pintura, los acabados y el cableado, muestra un guion y aparece en la lista. El fin de vida de la parte anterior y el trabajo de reemplazarla no se cuentan.
