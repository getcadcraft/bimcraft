---
title: Estimar cargas de calefacción y refrigeración
summary: La pérdida de calor de cada ambiente, su calefacción a lo largo de un año por grados-día y su pico de refrigeración, a partir de lo que lo limita en el modelo y del valor U de cada elemento, con cada dato mostrado. Una ayuda de diseño, no un cálculo de cumplimiento.
keywords: energía, calefacción, refrigeración, pérdida de calor, carga de calor, carga de refrigeración, valor u, transmitancia térmica, grados-día, hdd, ventilación, renovaciones de aire, ganancias internas, ganancia solar, lambda, conductividad, aislación, diseño temprano, análisis, ambientes, espacios
from: ec312d20
---

En la pestaña {{ui:Luz natural}}, después de {{ui:Calcular}}, abrí {{ui:Cargas de calefacción y refrigeración}} y clickeá {{ui:Calcular las cargas}}. Cada ambiente obtiene su **pérdida de calor** en un día de diseño frío, su **calefacción a lo largo de un año** y su **pico de refrigeración** en un día caluroso. Nada se sube; nada del modelo cambia salvo que escribas un valor U.

:::warning
Esta es **una ayuda de diseño, no un cálculo de cumplimiento**: una estimación en régimen estacionario con cada dato en pantalla. **No** es el método ISO 52016-1, no es una simulación ni un certificado energético; no dimensiona calderas, bombas de calor ni enfriadoras. Verificá los resultados, y dimensioná los equipos, con un ingeniero.
:::

## Qué limita a cada ambiente

BimCraft lo encuentra en el propio modelo, así que sirve el IFC de cualquier programa (no necesita los límites de espacio que algunos programas exportan). Desde cada pedazo de la superficie propia de cada ambiente mira derecho hacia afuera:

- el primer muro, ventana, puerta, piso, techo, revestimiento, muro cortina o viga que encuentra **limita** ese pedazo;
- justo después de ese elemento, o **otro ambiente** (contado como vecino, a la misma temperatura: sin pérdida), o **nada** (afuera), o, debajo de un piso en el nivel más bajo, **el suelo**;
- una puerta abierta hacia otro ambiente cuenta como vecino; un pedazo que no encuentra nada (dentro de 1,5 m a los costados o hacia abajo, 8 m hacia arriba) se lista bajo el ambiente y se deja afuera.

Las ventanas y puertas toman su propio tamaño del IFC (ancho total × altura) desde el muro donde están. Hacé clic en un ambiente de la tabla para ver cada elemento que lo limita con su superficie, su valor U y de dónde salió el valor U.

## Valores U

Para cada elemento BimCraft usa, en este orden:

1. **El valor U propio del IFC** — el `ThermalTransmittance` en el conjunto de propiedades comunes del elemento (por ejemplo `Pset_WallCommon`) o en el de su tipo. La mayoría de los programas de diseño pueden escribirlo.
2. **Sus capas de material** — 1 ÷ (resistencia superficial interior + el espesor de cada capa ÷ su conductividad λ + resistencia superficial exterior), con las resistencias superficiales usuales (0,13 y 0,04 m²K/W para muros; 0,10 hacia arriba, 0,17 hacia abajo en el interior). Conductividades típicas para empezar (lana mineral 0,035, ladrillo 0,77, hormigón 1,4…); en {{ui:Conductividad de los materiales}} escribí la del fabricante, y cada valor U de esas capas se actualiza.
3. **Un valor típico** (muros 0,3, techos 0,2, pisos 0,25, ventanas 1,4, puertas 1,6 W/m²K), marcado como tal — escribí el tuyo.

Un valor U escrito en el detalle de un ambiente se guarda en el conjunto de propiedades comunes del elemento como `ThermalTransmittance` (un paso; {{key:Mod+Z}} lo deshace). Si varios elementos comparten ese conjunto (un tipo de muro, por ejemplo), todos cambian juntos, y la línea de estado dice cuántos.

## Calefacción

- **Pérdida de calor** = Σ U × A × (interior − exterior) para todo lo que da afuera + Σ U × A × (interior − suelo) para los pisos sobre el suelo + 0,335 × renovaciones de aire por hora × el volumen del ambiente × (interior − exterior). 0,335 Wh por m³ por kelvin es la densidad del aire (1,2 kg/m³) por su capacidad calorífica (1005 J/kgK).
- **Calefacción en un año** = (la pérdida del ambiente por grado hacia afuera, a través de la envolvente y del aire, más su pérdida al suelo escalada a la misma diferencia) × los **grados-día** × 24 ÷ 1000, en kWh. Escribí los grados-día del lugar, o {{ui:Leer grados-día desde un CSV…}} (una fila por día o por mes; el último número de cada fila se suma). Usá grados-día a la temperatura base que use tu fuente: esa base ya tiene en cuenta el calor gratuito de las personas, las luces y el sol.

## Refrigeración

El **pico de refrigeración** = el calor a través de la envolvente y del aire a la temperatura de diseño de verano + personas (superficie por persona × calor por persona) + iluminación y equipos por m² de piso + **el sol**: el pico de {{ui:Sol a través de las ventanas en una fecha}} para ese ambiente. Calculá primero el sol, en un día caluroso; hasta entonces el sol cuenta 0 y la sección lo dice. El pico de cada parte se suma aunque caigan a horas distintas, lo que exagera un poco.

## Lo que deja afuera

- Los métodos mensual y horario de ISO 52016-1 (una norma paga), el calor almacenado en la masa del edificio, los puentes térmicos, cómo rinden los sistemas de calefacción y refrigeración, y los archivos de clima.
- Los ambientes contiguos se toman a la misma temperatura; los espacios no calefaccionados no se modelan.

Ver también [Estimar la luz natural en cada ambiente](topic:daylight-factor).
