---
title: Reproducir una inundación, un viento o un sismo en el edificio
summary: Agua que sube por las habitaciones, presión del viento en cada nivel o un sismo que sacude los niveles, reproducidos en una planta o un alzado con un control deslizante de tiempo. Modelos simples con sus supuestos enumerados; no es una verificación de normativa ni un diseño estructural.
keywords: amenaza, inundación, viento, sismo, sísmico, deriva, balanceo, cortante basal, nivel de agua, clima, escenario, nivel del mar, reproducción, nivel, periodo
from: ff0d34d1
---

La sección {{ui:Reproducción de amenazas}} del panel izquierdo reproduce una amenaza sobre el modelo IFC abierto. No se cambia nada del modelo.

:::warning
Estos son **modelos simples para ver qué le hace una amenaza a esta distribución**, no un estudio de inundación, una verificación de código de viento ni un diseño estructural. Cada resultado enumera sus supuestos.
:::

## Inundación

Fije el nivel máximo del agua por encima del piso más bajo y los minutos de subida, permanencia y bajada. El agua entra a una habitación por una abertura cuyo alféizar ya haya superado, y las habitaciones unidas a habitaciones mojadas por aberturas bajo el agua quedan al mismo nivel (cuasiestático). La tabla indica cuándo se moja cada habitación por primera vez y qué tan profunda queda el agua; la planta la reproduce. Escriba la mayor cantidad de agua que puede admitir una habitación, y las que la superen aparecen como advertencias. **Escenarios climáticos:** cargue su propio archivo de escenario (JSON o CSV con un año, una elevación del nivel del mar y un factor de inundación) y elija un año. O active el complemento Escenarios climáticos y elija un escenario y un año: la inundación se calcula dos veces, actual junto a futura (consulte «Escenarios climáticos: inundación, calor e incendios forestales de 2050 y 2080»). Los tipos Exposición a incendios forestales y Calor: archivo de clima futuro también aparecen en la misma lista.

## Viento

La presión sigue ½ρV², con la velocidad que aumenta con la altura; la fuerza sobre un nivel es esa presión por un factor de ráfaga, por los dos coeficientes de presión, por el ancho y por la altura del nivel. Obtiene el cortante, el momento de volteo y el balanceo.

## Sismo

Un edificio de cortante: una masa por piso (huella × kilogramos por metro cuadrado, que usted fija), la misma rigidez en cada nivel ajustada al primer periodo que dé (una décima de segundo por nivel si lo deja en blanco, y lo indica), amortiguamiento, y un movimiento del terreno generado (un pulso o ruido filtrado) con la aceleración máxima que elija. El resultado es la deriva de cada nivel, las aceleraciones de piso y el cortante basal; el alzado reproduce el balanceo, dibujado más grande de lo que es. Escriba una relación de deriva permitida y los niveles que la superen aparecen como advertencias. Es elástico: nada cede ni se agrieta.

## Rigidez de piso desde el marco de análisis

Para un sismo o para el balanceo por viento, elija **El marco de análisis** como origen de la rigidez en lugar de escribir un periodo. Cada piso se empuja lateralmente por turno, se resuelve el marco (vigas, columnas, arriostramientos, losas) y la rigidez de los pisos con todo trabajando en conjunto gobierna la corrida. El peso es el de los propios miembros más la carga de piso por metro cuadrado que fija en el cuadro de la planta de cada piso. Se muestra el primer periodo real. Es elástico: nada cede, y la torsión no se modela. Para viento, las fuerzas por nivel siguen siendo las supuestas arriba (un perfil de ley de potencias, su factor de ráfaga y los coeficientes de presión fijos, no un código de viento); solo el balanceo proviene del marco, al resolver la matriz de rigidez completa del marco frente a esas fuerzas. El modelo necesita un IFC con un marco que la pestaña Análisis pueda leer.

## Unidades

Las profundidades de agua, el balanceo y la deriva por piso, las distancias y las áreas se muestran en las {{ui:Unidades}} que eligió. Las fuerzas (kN), los tiempos y las aceleraciones conservan sus propias unidades, y un valor que escriba en un cuadro etiquetado en metros se queda en metros. Lo mismo vale para los resultados de evacuación, luz natural, calefacción y enfriamiento y amueblado: las longitudes, áreas y volúmenes siguen su elección; la presión, el caudal, la temperatura, la energía y la potencia nunca se convierten.
