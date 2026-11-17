---
title: Revisar la reverberación de un cuarto y escucharla
summary: Tiempo de reverberación por banda de octava para cada cuarto (Sabine y Eyring) a partir de su tamaño y acabados, un objetivo propio, y una voz, un aplauso o música reproducidos a través de una respuesta al impulso calculada del cuarto.
keywords: acústica, reverberación, tiempo de reverberación, rt60, sabine, eyring, absorción, eco, sonido, escuchar, respuesta al impulso, habla, aula, oficina, alfombra, plafón, ruido
from: 16996cbb
---

La sección {{ui:Acústica de cuartos}} del panel izquierdo calcula cuánto tiempo persiste el sonido en cada cuarto. Lee el área del piso, la altura, los muros, las puertas y las ventanas del modelo IFC abierto. No se modifica nada del modelo.

## Elija los acabados

Cuando el modelo indica qué hay en una superficie, el cuarto lo toma: la capa interior del tipo de cada muro (se reconocen yeso, aplanado, ladrillo, concreto y block), el tipo de piso (madera o concreto) y si un techo tiene plafón. La etiqueta junto a cada opción indica si proviene del modelo, es un valor predeterminado o es de su elección; elija otro acabado para reemplazarlo. Lo que el modelo no indica se queda con el valor predeterminado. Los coeficientes son **valores típicos publicados**; sustitúyalos por los datos de ensayo de un producto cuando los tenga. Escriba un **objetivo** (la reverberación más larga en frecuencias medias que desea) y cualquier cuarto que lo supere mostrará una advertencia, con la absorción que lo reduciría.

## Lea la tabla

La reverberación se indica de 125 Hz a 4 kHz. Sabine es adecuado para cuartos vivos y Eyring para cuartos apagados; la línea marcada *Usado* toma Eyring cuando la absorción promedio es mayor que 0.2. Se incluye la absorción del aire (acorta las bandas altas en cuartos grandes). Es un modelo estadístico: supone que el sonido se distribuye uniformemente, así que los cuartos largos o planos y los muy pequeños son una guía aproximada, y no se cuentan muebles, personas ni puertas abiertas.

## Escuchar

{{ui:Reproducir en este cuarto}} reproduce una voz (generada aquí), un aplauso, notas pulsadas o **su propio archivo de sonido** (se queda en su computadora) a través de una respuesta al impulso calculada para el cuarto: el sonido directo, las primeras reflexiones de una caja de ese tamaño y una cola que se extingue con el tiempo de reverberación propio del cuarto en cada banda. {{ui:Reproducir sin cuarto}} reproduce el mismo sonido con el mismo nivel, sin el cuarto. Puede guardar la respuesta al impulso o el sonido del cuarto como archivos WAV. Suena como un cuarto de ese tamaño y acabado, no como algún cuarto real.

## Personas y muebles

Escriba el número de **personas en este cuarto** para agregar su absorción. Los muebles que contiene el modelo (sofás, camas, sillas, mesas, roperos, identificados por su nombre) aportan la suya. Las cifras son valores de planeación aproximados y redondeados; sustitúyalas por mediciones en un cuarto importante.

## Fuente y oyente

En {{ui:Fuente y oyente}}, presione {{ui:Colocar la fuente}} o {{ui:Colocar al oyente}} y haga clic en el plano del cuarto. El sonido que reproduce se escucha desde ahí: el sonido directo llega después de la distancia, y la parte reverberante tiene el nivel correspondiente a esa distancia. Quite ambos para volver a la casilla de distancia.

## Absorción no uniforme y modos del cuarto

En {{ui:Absorción no uniforme (sala cúbica)}}, escriba el cuarto como una caja y elija los acabados de su piso, techo y muros. La tabla agrega Fitzroy y Arau-Puchades a Sabine y Eyring: tratan por separado los tres pares de superficies opuestas, de modo que un cuarto con alfombra y techo duro no se lee demasiado corto. Cuando los pares difieren mucho, una nota indica cuál conviene usar. Debajo de la tabla, **Modos del cuarto** enumera las ondas estacionarias más bajas de la caja y la frecuencia por debajo de la cual el cuarto tiene modos separados en lugar de un campo sonoro uniforme. Son predicciones para un cuarto en forma de caja, una ayuda de diseño y no una medición.

## Unidades

Las áreas, alturas, volúmenes y distancias de los cuartos se muestran en las {{ui:Unidades}} que eligió (pies cuadrados y cúbicos, pulgadas, milímetros, centímetros o metros). El cálculo en sí permanece en SI; solo cambia la presentación. Los tiempos (segundos), frecuencias y niveles no cambian.
