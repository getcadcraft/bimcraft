---
title: Reproducir una inundación, un viento o un terremoto en el edificio
summary: Agua que sube por las habitaciones, presión del viento en cada planta o un terremoto que sacude las plantas, reproducidos en una planta o un alzado con un deslizador de tiempo. Modelos sencillos con sus supuestos enumerados; no es una comprobación normativa ni un diseño estructural.
keywords: peligro, inundación, viento, terremoto, sísmico, deriva, balanceo, cortante basal, nivel del agua, clima, escenario, nivel del mar, reproducción, planta, periodo
from: ff0d34d1
---

La sección {{ui:Reproducción de peligros}} del panel izquierdo reproduce un peligro sobre el modelo IFC abierto. No se modifica nada del modelo.

:::warning
Son **modelos sencillos para ver qué efecto tiene un peligro sobre esta distribución**, no un estudio de inundación, una comprobación del código de viento ni un diseño estructural. Cada resultado enumera sus supuestos.
:::

## Inundación

Indique el nivel de agua más alto por encima de la planta más baja y los minutos que tarda en subir, mantenerse y bajar. El agua entra en una habitación por una abertura cuyo antepecho ha superado, y las habitaciones unidas a estancias húmedas por aberturas situadas por debajo del nivel del agua se encuentran al mismo nivel (cuasiestático). La tabla indica cuándo se moja cada habitación por primera vez y con qué profundidad; la planta lo reproduce. Escriba la mayor cantidad de agua que puede admitir una habitación, y las que la superen aparecen como advertencias. **Escenarios climáticos futuros:** cargue su propio archivo de escenario (JSON o CSV con un año, una subida del nivel del mar y un factor de inundación) y elija un año. O active el complemento Futuros climáticos, y elija un escenario y un año: la inundación se calcula dos veces, la actual junto a la futura (véase «Futuros climáticos: inundación de 2050 y 2080, calor e incendio forestal»). Los tipos Exposición a incendios forestales y Calor: archivo meteorológico futuro están en la misma lista.

## Viento

La presión sigue ½ρV², con la velocidad aumentando con la altura; la fuerza sobre una planta es esa presión por un factor de ráfaga, los dos coeficientes de presión, el ancho y la altura de la planta. Obtiene el cortante, el momento de vuelco y el balanceo.

## Terremoto

Un edificio de cortante: una masa por planta (superficie en planta × kilogramos por metro cuadrado, que usted fija), la misma rigidez en cada planta ajustada al primer periodo que indique (una décima de segundo por planta si lo deja en blanco, y así lo señala), amortiguamiento y un movimiento del terreno generado (un pulso o ruido filtrado) a la aceleración máxima que elija. El resultado es la deriva de cada planta, las aceleraciones de cada planta y el cortante basal; el alzado reproduce el balanceo, dibujado más grande de lo que es. Escriba una relación de deriva admisible y las plantas que la superen aparecen como advertencias. Es elástico: nada cede ni se agrieta.

## Rigidez de planta desde el pórtico de análisis

Para un terremoto o para el balanceo por viento, elija **El pórtico de análisis** como fuente de la rigidez en lugar de escribir un periodo. Cada planta se empuja lateralmente por turnos, se resuelve el pórtico (vigas, pilares, arriostramientos y forjados) y la rigidez de las plantas, con todo trabajando en conjunto, impulsa la simulación. El peso es el de los propios elementos más la carga de planta por metro cuadrado que fije en el cuadro de cada planta. Se muestra el primer periodo real. Es elástico: nada cede, y la torsión no se modela. Para el viento, las fuerzas de planta siguen siendo las supuestas de arriba (un perfil de ley de potencia, su factor de ráfaga y los coeficientes de presión fijos, no un código de viento); solo el balanceo procede del pórtico, al resolver su matriz de rigidez completa frente a esas fuerzas. El modelo necesita un IFC con un pórtico que la pestaña Análisis pueda leer.

## Unidades

Las profundidades de agua, el balanceo y la deriva planta por planta, las distancias y las superficies se muestran en las {{ui:Unidades}} que haya elegido. Las fuerzas (kN), los tiempos y las aceleraciones conservan sus propias unidades, y un valor que escriba en un cuadro etiquetado en metros se queda en metros. Lo mismo vale para los resultados de evacuación, luz natural, calefacción y refrigeración y amueblado: longitudes, superficies y volúmenes siguen su elección; la presión, el caudal, la temperatura, la energía y la potencia nunca se convierten.
