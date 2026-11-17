---
title: Hacer caminar a las personas por el edificio
summary: Una evacuación o las llegadas normales de un día por sus habitaciones, puertas y escaleras, con colas donde el edificio se estrecha, el recorrido más largo hasta una salida desde cada habitación y los resultados como Problemas. Un modelo de multitudes aproximado para decisiones de diseño, no un certificado de protección contra incendios.
keywords: personas, evacuación, salida de emergencia, escape, salida, distancia de recorrido, cola, multitud, flujo, ancho de puerta, escaleras, llegadas, cuello de botella, simulación, ocupantes, peatón, qué pasaría si, puerta bloqueada
from: 84aa8920
---

La sección {{ui:Personas en el edificio}} del panel izquierdo hace caminar a las personas por las habitaciones, puertas y escaleras del modelo IFC abierto. No se modifica nada del modelo y no se sube nada.

:::warning
Esto es **una ayuda de diseño, no un certificado de protección contra incendios**. No tiene en cuenta el fuego, el humo, el pánico, las diferencias de movilidad ni lo que exige una norma. Los límites son suyos: el recorrido más largo hasta una salida y el tiempo disponible son cifras que usted escribe, y no se supone ninguna.
:::

## Ejecutarla

1. Abra un modelo con habitaciones y puertas cerradas. Una puerta con una habitación solo a un lado es una salida; una puerta entre dos habitaciones las une; una escalera une las habitaciones de sus extremos.
2. Elija **Evacuación** (todos caminan hacia una salida), **Llegadas** (todos entran y caminan hasta una habitación) o **Intercambio** (las personas de las habitaciones salen mientras entran tantas como salen), y la superficie por persona. Las habitaciones con nombre de pasillo, escalera, vestíbulo o aseo no albergan a nadie.
3. Haga clic en {{ui:Ejecutar}}. Obtiene el tiempo en que sale la última persona (y cuándo salen la mitad y nueve de cada diez), la cola en cada puerta y escalera, la habitación con el recorrido más largo, y un plano que reproduce la simulación.

## Qué pasaría si

Marque {{ui:Cerrada}} en una puerta de la tabla y ejecute de nuevo: las personas buscan otro camino, o las habitaciones sin salida se enumeran como errores. Una puerta el doble de ancha vacía una habitación mucho antes; la tabla muestra dónde están las colas.

## Cómo funciona

Cada habitación es una cuadrícula, así que las personas caminan alrededor de las esquinas, no a través de los muros. La velocidad baja a medida que una habitación se llena (S = 1.4 (1 − 0.266 D) m/s, D en personas por m²). Una puerta deja pasar 1.3 personas por segundo por cada metro de su ancho, menos 150 mm a cada lado; una escalera, 1.0, y caminando más despacio. Las personas esperan en una cola por orden de llegada. Un número de simulación repite exactamente la misma ejecución.

El asistente puede ejecutar lo mismo: pídale una evacuación o el recorrido más largo hasta una salida desde cada habitación.

## Personas en cada habitación

Abra {{ui:Personas en cada habitación}} para escribir un número en cualquier habitación. Una casilla vacía usa la cifra de superficie (que se muestra en gris); 0 vacía una habitación. Sus números se usan en la ejecución y se guardan en este navegador.

## Contraflujo en las puertas

En **Intercambio**, las personas que salen y las que entran coinciden en las mismas puertas. Cuando una puerta deja pasar a alguien en sentido contrario justo detrás de la última persona, conserva parte de su ritmo (0.8 aquí; es una hipótesis, ya que los valores publicados varían), y la tabla cuenta los cambios de sentido. Una puerta que cambia de sentido con frecuencia se enumera en Problemas como nota.

## Escaleras y descansillos

Cada descansillo de una escalera le cuesta a quien camina un segundo para girar (una hipótesis). Una escalera recta no tiene ninguno; una escalera en L o en U tiene uno. El ritmo de la escalera sigue dependiendo del ancho de su tramo.

## En la vista 3D

Marque {{ui:Mostrar las personas en la vista 3D}} y los peatones aparecen como figuras en el modelo, coloreadas según lo que hacen, y se mueven al reproducir la ejecución. No se añade nada al modelo.
