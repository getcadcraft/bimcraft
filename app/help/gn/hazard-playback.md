---
title: Reproducí una inundación, viento o terremoto en el edificio
summary: Agua que sube por los ambientes, presión del viento en cada piso, o un terremoto que sacude los pisos, reproducidos en un plano o una elevación con un deslizador de tiempo. Modelos simples con sus supuestos listados; no es una verificación de norma ni un diseño estructural.
keywords: peligro, inundación, viento, terremoto, sísmico, deriva, balanceo, cortante basal, nivel de agua, clima, escenario, nivel del mar, reproducción, piso, periodo
from: ff0d34d1
---

La sección {{ui:Reproducción de peligro}} del panel izquierdo reproduce un peligro en el modelo IFC abierto. Nada del modelo se cambia.

:::warning
Estos son **modelos simples para ver qué le hace un peligro a esta distribución**, no un estudio de inundación, una verificación del código de viento ni un diseño estructural. Cada resultado lista sus supuestos.
:::

## Inundación

Fijá el nivel de agua más alto por encima del piso más bajo y los minutos para subir, mantener y bajar. El agua entra a un ambiente por una abertura cuyo umbral ya pasó, y los ambientes unidos a ambientes mojados por aberturas por debajo del agua quedan al mismo nivel (cuasi estático). La tabla da cuándo se moja cada ambiente por primera vez y cuán hondo; el plano lo reproduce. Escribí la mayor cantidad de agua que puede tomar un ambiente, y los ambientes que la superan son avisos. **Climate futures:** cargá tu propio archivo de escenario (JSON o CSV con un año, una suba del nivel del mar y un factor de inundación) y elegí un año. O activá el complemento Climate futures y escogé un escenario y un año: la inundación corre dos veces, presente al lado del futuro (ver "Climate futures: inundación, calor e incendio forestal de 2050 y 2080"). Los tipos Exposición a incendio forestal y Calor: archivo de clima futuro también están en la misma lista.

## Viento

La presión sigue ½ρV², con la velocidad subiendo con la altura; la fuerza sobre un piso es esa presión por un factor de ráfaga, los dos coeficientes de presión, el ancho y la altura del piso. Obtenés el cortante, el momento de vuelco y el balanceo.

## Terremoto

Un edificio de cortante: una masa por piso (huella × kilogramos por metro cuadrado, que vos fijás), la misma rigidez en cada piso ajustada al primer periodo que des (una décima de segundo por piso si lo dejás en blanco, y lo dice), amortiguamiento, y un movimiento del suelo hecho (un pulso o ruido filtrado) a la aceleración máxima que elijas. El resultado es la deriva de cada piso, las aceleraciones de los pisos y el cortante basal; la elevación reproduce el balanceo, dibujado más grande de lo que es. Escribí una relación de deriva permitida y los pisos que la superen son avisos. Es elástico: nada cede ni se agrieta.

## Rigidez de piso desde el Marco de análisis

Para un terremoto o para el balanceo por viento, elegí **El marco de análisis** como fuente de la rigidez en vez de escribir un periodo. Cada piso se empuja de costado por turno, se resuelve el marco (vigas, columnas, arriostramientos, losas) y la rigidez de los pisos con todo trabajando junto impulsa la corrida. El peso son los elementos propios más la carga de piso por metro cuadrado que fijás en la caja del plano de cada piso. Se muestra el primer periodo real. Es elástico: nada cede, y no se modela la torsión. Para viento, las fuerzas por piso siguen siendo las supuestas de arriba (un perfil de ley de potencia, tu factor de ráfaga y los coeficientes de presión fijos, no un código de viento); solo el balanceo sale del marco, resolviendo la matriz de rigidez completa del marco contra esas fuerzas. El modelo necesita un IFC con un marco que la pestaña Análisis pueda leer.

## Unidades

Las profundidades del agua, el balanceo y la deriva piso por piso, las distancias y las superficies se muestran en las {{ui:Unidades}} que elegiste. Las fuerzas (kN), los tiempos y las aceleraciones mantienen sus propias unidades, y un valor que escribís en una casilla con etiqueta en metros queda en metros. Lo mismo vale para los resultados de evacuación, luz natural, calefacción y refrigeración y amueblado: longitudes, superficies y volúmenes siguen tu elección; presión, caudal, temperatura, energía y potencia nunca se convierten.
