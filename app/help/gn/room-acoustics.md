---
title: Revisá la reverberación de un ambiente y escuchalo
summary: Tiempo de reverberación por banda de octava para cada ambiente (Sabine y Eyring), a partir de su tamaño y sus terminaciones, con un objetivo propio y una voz, un aplauso o música reproducidos a través de una respuesta al impulso calculada del ambiente.
keywords: acústica, reverberación, tiempo de reverberación, rt60, sabine, eyring, absorción, eco, sonido, escuchar, respuesta al impulso, habla, aula, oficina, alfombra, cielorraso, ruido
from: 16996cbb
---

La sección {{ui:Acústica de ambientes}} del panel izquierdo calcula cuánto tiempo permanece el sonido en cada ambiente. Lee del modelo IFC abierto la superficie del piso, la altura, los muros, las puertas y las ventanas de cada ambiente. No se cambia nada del modelo.

## Elegí las terminaciones

Cuando el modelo indica qué hay en una superficie, el ambiente lo lee: la capa interior del tipo de cada muro (se reconocen yeso, revoque, ladrillo, hormigón y bloque), el tipo de piso (madera u hormigón) y si el cielorraso es de placas. La etiqueta al lado de cada opción indica si viene del modelo, es un valor por defecto o es una elección tuya; elegí otra terminación para cambiarla. Lo que el modelo no indica queda con el valor por defecto. Los coeficientes son **valores publicados típicos**; reemplazalos por los datos de ensayo de un producto cuando los tengas. Escribí un **objetivo** (el mayor tiempo de reverberación en frecuencias medias que querés) y cualquier ambiente que lo supere mostrará un aviso, con la absorción que lo reduciría.

## Leé la tabla

La reverberación se da de 125 Hz a 4 kHz. Sabine sirve para ambientes vivos y Eyring para los apagados; la línea marcada *Usado* toma Eyring cuando la absorción media es mayor que 0,2. La absorción del aire está incluida (acorta las bandas altas en ambientes grandes). Es un modelo estadístico: supone que el sonido se reparte de forma pareja, así que los ambientes largos o chatos y los muy pequeños son una guía aproximada, y no se cuentan los muebles, las personas ni las puertas abiertas.

## Escuchá

{{ui:Reproducir en este ambiente}} reproduce una voz (generada aquí), un aplauso, notas pulsadas o **tu propio archivo de sonido** (queda en tu computadora) a través de una respuesta al impulso calculada para el ambiente: el sonido directo, las primeras reflexiones de una caja de ese tamaño y una cola que se apaga con el tiempo de reverberación propio del ambiente en cada banda. {{ui:Reproducir seco}} reproduce el mismo sonido, con el mismo nivel, sin el ambiente. Podés guardar la respuesta al impulso o el sonido del ambiente como archivos WAV. Suena como un ambiente de ese tamaño y esas terminaciones, no como algún ambiente real.

## Personas y muebles

Escribí el número de **personas en este ambiente** para sumar su absorción. Los muebles que tiene el modelo (sillones, camas, sillas, mesas, roperos, reconocidos por nombre) suman la suya. Las cifras son valores aproximados de planificación, redondeados; reemplazalos por mediciones en un ambiente importante.

## Fuente y receptor

En {{ui:Fuente y receptor}}, presioná {{ui:Colocar la fuente}} o {{ui:Colocar el receptor}} y hacé clic en el plano del ambiente. El sonido que reproducís se escucha entonces desde ahí: el sonido directo llega después de la distancia, y la parte reverberante queda al nivel correspondiente a esa distancia. Quitá ambos para volver al cuadro de distancia.

## Absorción irregular y modos del ambiente

En {{ui:Absorción ndaipóri parejo (cuarto caja)}}, escribí el ambiente como una caja y elegí las terminaciones de piso, cielorraso y muros. La tabla agrega Fitzroy y Arau-Puchades a Sabine y Eyring: tratan por separado los tres pares de superficies opuestas, de modo que un ambiente con alfombra y cielorraso duro no se lee como demasiado corto. Cuando los pares difieren mucho, una nota indica en cuál confiar. Debajo de la tabla, **Modos del ambiente** lista las ondas estacionarias más bajas de la caja y la frecuencia por debajo de la cual el ambiente tiene modos separados en lugar de un campo sonoro parejo. Son predicciones para una caja, una ayuda de diseño y no una medición.

## Unidades

Las superficies, alturas, volúmenes y distancias de los ambientes se muestran en las {{ui:Unidades}} que elegiste (pies y pulgadas cuadradas y cúbicas, pulgadas, milímetros, centímetros o metros). El cálculo en sí queda en SI; solo cambia la visualización. Los tiempos (segundos), las frecuencias y los niveles no cambian.
