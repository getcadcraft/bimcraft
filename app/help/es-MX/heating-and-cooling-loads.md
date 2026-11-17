---
title: Estimar las cargas de calefacción y enfriamiento
summary: La pérdida de calor de cada habitación, su calefacción a lo largo de un año por grados-día y su pico de enfriamiento, a partir de lo que la delimita en el modelo y del valor U de cada elemento, con todas las entradas a la vista. Una ayuda de diseño, no un cálculo de cumplimiento.
keywords: energía, calefacción, enfriamiento, pérdida de calor, carga de calor, carga de enfriamiento, valor u, transmitancia térmica, grados-día, hdd, ventilación, cambios de aire, ganancias internas, ganancia solar, lambda, conductividad, aislamiento, diseño preliminar, análisis, habitaciones, espacios
from: ec312d20
---

En la pestaña {{ui:Luz natural}}, después de {{ui:Calcular}}, abra {{ui:Cargas de calefacción y enfriamiento}} y haga clic en {{ui:Calcular las cargas}}. Cada habitación obtiene su **pérdida de calor** en un día de diseño frío, su **calefacción a lo largo de un año** y su **pico de enfriamiento** en un día caluroso. No se sube nada; no cambia nada del modelo a menos que escriba un valor U.

:::warning
Esta es **una ayuda de diseño, no un cálculo de cumplimiento**: una estimación en régimen permanente con cada entrada en pantalla. **No** es el método ISO 52016-1, no es una simulación ni un certificado energético; no dimensiona calderas, bombas de calor ni enfriadoras. Verifique los resultados, y dimensione los equipos, con un ingeniero.
:::

## Qué delimita cada habitación

BimCraft lo encuentra en el propio modelo, así que sirve el IFC de cualquier programa (no necesita las fronteras de espacio que exportan algunos programas). Desde cada porción de la superficie propia de la habitación, mira directamente hacia afuera:

- el primer muro, ventana, puerta, piso, techo, revestimiento, muro cortina o viga que encuentra **delimita** esa porción;
- justo después de ese elemento, puede haber **otra habitación** (se cuenta como contigua, a la misma temperatura: sin pérdida), **nada** (exterior), o, bajo un piso del nivel más bajo, **el terreno**;
- un vano abierto hacia otra habitación cuenta como contiguo; una porción que no toca nada (a 1.5 m de distancia lateral o hacia abajo, u 8 m hacia arriba) se enumera bajo la habitación y se excluye.

Las ventanas y las puertas toman su propio tamaño del IFC (ancho total × alto) desde el muro en el que están. Haga clic en una habitación de la tabla para ver cada elemento que la delimita, con su área, su valor U y de dónde proviene el valor U.

## Valores U

Para cada elemento, BimCraft usa, en este orden:

1. **El valor U propio del IFC**: el `ThermalTransmittance` en el conjunto de propiedades comunes del elemento (por ejemplo `Pset_WallCommon`) o en el de su tipo. La mayoría de los programas de diseño pueden escribirlo.
2. **Sus capas de material**: 1 ÷ (resistencia superficial interior + el espesor de cada capa ÷ su conductividad λ + resistencia superficial exterior), con las resistencias superficiales habituales (0.13 y 0.04 m²K/W para muros; 0.10 hacia arriba y 0.17 hacia abajo en el interior). Conductividades típicas para empezar (lana mineral 0.035, ladrillo 0.77, concreto 1.4…); en {{ui:Conductividad de materiales}} escriba la del fabricante, y cada valor U que dependa de esas capas se actualiza.
3. **Un valor típico** (muros 0.3, techos 0.2, pisos 0.25, ventanas 1.4, puertas 1.6 W/m²K), marcado como tal: escriba el suyo.

Un valor U escrito en el detalle de una habitación se guarda en el conjunto de propiedades comunes del elemento como `ThermalTransmittance` (un solo paso; {{key:Mod+Z}} lo deshace). Si varios elementos comparten ese conjunto (un tipo de muro, por ejemplo), todos cambian juntos, y la línea de estado indica cuántos.

## Calefacción

- **Pérdida de calor** = Σ U × A × (interior − exterior) para todo lo que da al exterior + Σ U × A × (interior − terreno) para los pisos sobre el terreno + 0.335 × cambios de aire por hora × el volumen de la habitación × (interior − exterior). 0.335 Wh por m³ por kelvin es la densidad del aire (1.2 kg/m³) por su capacidad calorífica (1005 J/kgK).
- **Calefacción a lo largo de un año** = (la pérdida de la habitación por grado hacia el exterior, a través de la envolvente y del aire, más su pérdida hacia el terreno ajustada a la misma diferencia) × los **grados-día** × 24 ÷ 1000, en kWh. Escriba los grados-día del lugar, o use {{ui:Leer grados-día de un CSV…}} (una fila por día o por mes; se suma el último número de cada fila). Use grados-día a la temperatura base de su fuente: esa base ya considera el calor gratuito de las personas, las luces y el sol.

## Enfriamiento

El **pico de enfriamiento** = el calor a través de la envolvente y del aire a la temperatura de diseño de verano + personas (superficie de piso por persona × calor por persona) + iluminación y equipos por m² de piso + **el sol**: el pico de {{ui:El sol por las ventanas en una fecha}} para esa habitación. Calcule primero el sol, en un día caluroso; hasta entonces el sol cuenta 0 y la sección lo indica. El pico de cada parte se suma aunque ocurran a horas distintas, lo que sobrestima un poco.

## Lo que deja fuera

- El método mensual y horario de ISO 52016-1 (una norma de pago), el calor almacenado en la masa del edificio, los puentes térmicos, el desempeño de los sistemas de calefacción y enfriamiento, y los archivos climáticos.
- Las habitaciones contiguas se toman a la misma temperatura; los espacios no calefaccionados no se modelan.

Vea también [Estimar la luz natural de cada habitación](topic:daylight-factor).
