---
title: Comprobar la reverberación de una habitación y escucharla
summary: Tiempo de reverberación por banda de octava en cada habitación (Sabine y Eyring) a partir de su tamaño y sus acabados, con un objetivo propio, y una voz, un aplauso o música reproducidos a través de una respuesta al impulso calculada de la habitación.
keywords: acústica, reverberación, tiempo de reverberación, rt60, sabine, eyring, absorción, eco, sonido, escuchar, respuesta al impulso, voz, aula, oficina, moqueta, falso techo, ruido
from: 16996cbb
---

La sección {{ui:Acústica de habitaciones}} del panel izquierdo calcula cuánto tiempo perdura el sonido en cada habitación. Lee la superficie del suelo, la altura, los muros, las puertas y las ventanas de cada habitación a partir del modelo IFC abierto. No se cambia nada en el modelo.

## Elegir los acabados

Cuando el modelo indica qué hay en una superficie, la habitación lo lee: la capa interior del tipo de cada muro (se reconocen yeso, revoco, ladrillo, hormigón y bloque), el tipo de suelo (madera u hormigón) y si el techo es de falso techo. La etiqueta junto a cada opción indica si procede del modelo, si es un valor por defecto o si lo ha elegido usted; elija otro acabado para sustituirlo. Lo que el modelo no indique se queda con el valor por defecto. Los coeficientes son **valores publicados típicos**; sustitúyalos por los datos de ensayo de un producto cuando los tenga. Escriba un **objetivo** (el tiempo de reverberación en frecuencias medias más largo que desea) y cualquier habitación que lo supere aparecerá como aviso, con la absorción que la reduciría.

## Leer la tabla

La reverberación se indica de 125 Hz a 4 kHz. Sabine es adecuado para salas vivas y Eyring para salas muertas; la línea marcada como *Usado* toma Eyring cuando la absorción media es superior a 0.2. Se incluye la absorción del aire (acorta las bandas agudas en salas grandes). Es un modelo estadístico: supone que el sonido se reparte uniformemente, así que las salas largas o planas y las muy pequeñas sirven como guía aproximada, y no se cuentan el mobiliario, las personas ni las puertas abiertas.

## Escuchar

{{ui:Reproducirlo en esta habitación}} reproduce una voz (generada aquí), un aplauso, notas pulsadas o **su propio archivo de sonido** (se queda en su ordenador) a través de una respuesta al impulso calculada para la habitación: el sonido directo, las primeras reflexiones de una caja de ese tamaño y una cola que se apaga con el tiempo de reverberación propio de la habitación en cada banda. {{ui:Reproducirlo en seco}} reproduce el mismo sonido, al mismo nivel, sin la habitación. Puede guardar la respuesta al impulso o el sonido en la habitación como archivos WAV. Suena como una habitación de ese tamaño y acabado, no como una habitación real concreta.

## Personas y mobiliario

Escriba el número de **personas en esta habitación** para agregar su absorción. El mobiliario que contiene el modelo (sofás, camas, sillas, mesas, armarios, reconocidos por su nombre) agrega la suya. Las cifras son valores orientativos de planificación, redondeados; sustitúyalos por mediciones en una habitación importante.

## Fuente y oyente

En {{ui:Fuente y oyente}}, pulse {{ui:Colocar la fuente}} o {{ui:Colocar el oyente}} y haga clic en el plano de la habitación. El sonido que reproduzca se oirá desde ese punto: el sonido directo llega tras la distancia, y la parte reverberante se oye al nivel que corresponde a esa distancia. Borre ambos para volver al cuadro de distancia.

## Absorción desigual y modos de la habitación

En {{ui:Absorción desigual (sala en caja)}}, escriba la habitación como una caja y elija los acabados de su suelo, techo y muros. La tabla agrega Fitzroy y Arau-Puchades a Sabine y Eyring: tratan por separado los tres pares de superficies opuestas, de modo que una habitación con moqueta y techo duro no se lee como demasiado corta. Cuando los pares difieren mucho, una nota indica en cuál confiar. Debajo de la tabla, **Modos de la habitación** enumera las ondas estacionarias más bajas de la caja y la frecuencia por debajo de la cual la habitación tiene modos separados en lugar de un campo sonoro uniforme. Son predicciones para una habitación en forma de caja, una ayuda para el diseño y no una medición.

## Unidades

Las superficies, alturas, volúmenes y distancias de las habitaciones se muestran en las {{ui:Unidades}} que haya elegido (pies cuadrados y cúbicos, pulgadas, milímetros, centímetros o metros). El cálculo en sí sigue en SI; solo cambia la visualización. Los tiempos (segundos), las frecuencias y los niveles no cambian.
