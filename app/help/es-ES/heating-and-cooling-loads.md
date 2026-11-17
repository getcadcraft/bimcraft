---
title: Estimar las cargas de calefacción y refrigeración
summary: La pérdida de calor de cada habitación, su calefacción a lo largo de un año según los grados-día y su pico de refrigeración, a partir de lo que la delimita en el modelo y del valor U de cada elemento, con todas las entradas visibles. Una ayuda para el diseño, no un cálculo de cumplimiento normativo.
keywords: energía, calefacción, refrigeración, pérdida de calor, carga térmica, carga de refrigeración, valor U, transmitancia térmica, grados-día, GD, ventilación, renovaciones de aire, ganancias internas, ganancia solar, lambda, conductividad, aislamiento, diseño preliminar, análisis, habitaciones, espacios
from: ec312d20
---

En la pestaña {{ui:Luz natural}}, después de {{ui:Calcular}}, abra {{ui:Cargas de calefacción y refrigeración}} y haga clic en {{ui:Calcular las cargas}}. Cada habitación obtiene su **pérdida de calor** en un día de proyecto frío, su **calefacción a lo largo de un año** y su **pico de refrigeración** en un día caluroso. No se envía nada, y nada cambia en el modelo salvo que escriba un valor U.

:::warning
Es **una ayuda para el diseño, no un cálculo de cumplimiento normativo**: una estimación en régimen estacionario con todas las entradas en pantalla. **No** es el método ISO 52016-1, ni una simulación, ni un certificado energético; no dimensiona calderas, bombas de calor ni enfriadoras. Revise los resultados y dimensione los equipos con un ingeniero.
:::

## Qué delimita cada habitación

BimCraft lo encuentra en el propio modelo, así que sirve el IFC de cualquier programa (no necesita los límites de espacio que exportan algunos programas). Desde cada trozo de la superficie propia de la habitación mira en línea recta hacia fuera:

- el primer muro, ventana, puerta, forjado, cubierta, revestimiento, muro cortina o viga con el que se encuentra **delimita** ese trozo;
- justo después de ese elemento, o bien **otra habitación** (se cuenta como contigua, a la misma temperatura: sin pérdida), o bien **nada** (exterior), o, bajo un forjado de la planta más baja, **el terreno**;
- un vano abierto hacia otra habitación cuenta como contiguo; un trozo que no encuentra nada (a menos de 1,5 m a los lados o hacia abajo, y 8 m hacia arriba) aparece bajo la habitación y se excluye.

Las ventanas y las puertas toman su propio tamaño del IFC (anchura total × altura) del muro en el que están. Haga clic en una habitación de la tabla para ver todos los elementos que la delimitan, con su superficie, su valor U y de dónde procede el valor U.

## Valores U

Para cada elemento, BimCraft usa, en este orden:

1. **El valor U propio del IFC**: el `ThermalTransmittance` del conjunto de propiedades comunes del elemento (por ejemplo `Pset_WallCommon`) o de su tipo. La mayoría de los programas de diseño pueden escribirlo.
2. **Sus capas de material**: 1 ÷ (resistencia superficial interior + el espesor de cada capa ÷ su conductividad λ + resistencia superficial exterior), con las resistencias superficiales habituales (0,13 y 0,04 m²K/W para muros; 0,10 hacia arriba y 0,17 hacia abajo en el interior). Conductividades típicas para empezar (lana mineral 0,035, ladrillo 0,77, hormigón 1,4…); en {{ui:Conductividad de los materiales}} escriba la del fabricante, y todos los valores U que dependan de esas capas se actualizan.
3. **Un valor típico** (muros 0,3, cubiertas 0,2, forjados 0,25, ventanas 1,4, puertas 1,6 W/m²K), marcado como tal: escriba el suyo.

Un valor U escrito en el detalle de una habitación se guarda como `ThermalTransmittance` en el conjunto de propiedades comunes del elemento (un paso; {{key:Mod+Z}} lo deshace). Si varios elementos comparten ese conjunto (un tipo de muro, por ejemplo), cambian todos a la vez, y la línea de estado indica cuántos son.

## Calefacción

- **Pérdida de calor** = Σ U × A × (interior − exterior) para todo lo que da al exterior + Σ U × A × (interior − terreno) para los forjados sobre el terreno + 0,335 × renovaciones de aire por hora × volumen de la habitación × (interior − exterior). 0,335 Wh por m³ y kelvin es la densidad del aire (1,2 kg/m³) por su capacidad calorífica (1005 J/kgK).
- **Calefacción a lo largo de un año** = (la pérdida de la habitación por grado hacia el exterior, a través de la envolvente y del aire, más su pérdida hacia el terreno escalada a la misma diferencia) × los **grados-día** × 24 ÷ 1000, en kWh. Escriba los grados-día del lugar, o use {{ui:Leer los grados-día de un CSV…}} (una fila por día o por mes; se suma el último número de cada fila). Use grados-día a la temperatura base de su fuente: esa base ya tiene en cuenta el calor gratuito de las personas, las luces y el sol.

## Refrigeración

El **pico de refrigeración** = el calor a través de la envolvente y del aire a la temperatura de proyecto de verano + personas (superficie de suelo por persona × calor por persona) + iluminación y equipos por m² de suelo + **el sol**: el pico de {{ui:Sol a través de las ventanas en una fecha}} para esa habitación. Calcule antes el sol, en un día caluroso; hasta entonces el sol cuenta como 0 y la sección lo indica. El pico de cada parte se suma aunque se den a horas distintas, lo que exagera un poco el resultado.

## Qué deja fuera

- Los métodos mensual y horario de ISO 52016-1 (una norma de pago), el calor almacenado en la masa del edificio, los puentes térmicos, el rendimiento de los sistemas de calefacción y refrigeración, y los archivos climáticos.
- Las habitaciones contiguas se toman a la misma temperatura; los espacios no calefactados no se modelan.

Vea también [Estimar la luz natural en cada habitación](topic:daylight-factor).
