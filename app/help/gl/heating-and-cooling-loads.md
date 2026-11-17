---
title: Estimar cargas de calefacción e refrixeración
summary: A perda de calor de cada cuarto, a súa calefacción ao longo dun ano por graos-día e o seu pico de refrixeración, a partir do que o delimita no modelo e do valor U de cada elemento, con cada entrada á vista. Unha axuda para o deseño, non un cálculo de cumprimento normativo.
keywords: enerxía, calefacción, refrixeración, perda de calor, carga de calor, carga de refrixeración, valor u, transmitancia térmica, graos-día, hdd, ventilación, renovacións de aire, ganancias internas, ganancia solar, lambda, condutividade, illamento, deseño preliminar, análise, cuartos, espazos
from: ec312d20
---

Na lapela {{ui:Daylight}}, despois de {{ui:Calculate}}, abra {{ui:Heating and cooling loads}} e prema {{ui:Work out the loads}}. Cada cuarto recibe a súa **perda de calor** nun día de deseño frío, a súa **calefacción ao longo dun ano** e o seu **pico de refrixeración** nun día cálido. Non se sube nada; non cambia nada no modelo a menos que escriba un valor U.

:::warning
Esta é **unha axuda para o deseño, non un cálculo de cumprimento normativo**: unha estimación en réxime estacionario con cada entrada na pantalla. **Non** é o método ISO 52016-1, nin unha simulación, nin un certificado enerxético; non dimensiona caldeiras, bombas de calor nin enfriadoras. Comprobe os resultados e dimensione os equipos cun enxeñeiro.
:::

## Que delimita cada cuarto

BimCraft atópao no propio modelo, así que funciona o IFC de calquera programa (non precisa dos límites de espazo que exportan algúns programas). Desde cada parte da superficie propia do cuarto mira en liña recta cara fóra:

- o primeiro muro, xanela, porta, piso, cuberta, revestimento, muro cortina ou viga co que se topa **delimita** esa parte;
- xusto despois dese elemento, ou **outro cuarto** (contado como veciño, á mesma temperatura: sen perda), ou **nada** (exterior), ou, debaixo dun piso no nivel máis baixo, **o terreo**;
- unha abertura de paso aberta a outro cuarto conta como veciño; unha parte que non se topa con nada (a menos de 1,5 m en horizontal ou cara abaixo, e 8 m cara arriba) aparece listada no cuarto e exclúese.

As xanelas e portas toman o seu propio tamaño do IFC (ancho total × alto) desde o muro no que están. Prema nun cuarto da táboa para ver cada elemento que o delimita, coa súa superficie, o seu valor U e de onde procede ese valor U.

## Valores U

Para cada elemento que BimCraft usa, na seguinte orde:

1. **O propio valor U do IFC**: o `ThermalTransmittance` no conxunto común de propiedades do elemento (por exemplo `Pset_WallCommon`) ou no do seu tipo. A maioría dos programas de deseño poden escribilo.
2. **As súas capas de material**: 1 ÷ (resistencia superficial interior + o espesor de cada capa ÷ a súa condutividade λ + resistencia superficial exterior), coas resistencias superficiais habituais (0,13 e 0,04 m²K/W para muros; 0,10 cara arriba e 0,17 cara abaixo no interior). Condutividades típicas para comezar (la mineral 0,035, ladrillo 0,77, formigón 1,4…); en {{ui:Condutividade dos materiais}} escriba a do fabricante, e todos os valores U dessas capas seguen o cambio.
3. **Un valor típico** (muros 0,3, cubertas 0,2, pisos 0,25, xanelas 1,4, portas 1,6 W/m²K), marcado como tal: escriba o seu.

Un valor U escrito nos detalles dun cuarto grávase no conxunto común de propiedades do elemento como `ThermalTransmittance` (un paso; {{key:Mod+Z}} desfai o cambio). Se varios elementos comparten ese conxunto (un tipo de muro, por exemplo), cambian todos xuntos, e a liña de estado indica cantos.

## Calefacción

- **Perda de calor** = Σ U × A × (interior − exterior) para todo o que dá ao exterior + Σ U × A × (interior − terreo) para os pisos sobre o terreo + 0,335 × renovacións de aire por hora × o volume do cuarto × (interior − exterior). 0,335 Wh por m³ e por kelvin é a densidade do aire (1,2 kg/m³) pola súa capacidade calorífica (1005 J/kgK).
- **Calefacción ao longo dun ano** = (a perda do cuarto por grao cara ao exterior, a través da envolvente e do aire, máis a súa perda polo terreo escalada á mesma diferenza) × os **graos-día** × 24 ÷ 1000, en kWh. Escriba os graos-día do lugar, ou {{ui:Ler graos-día dun CSV…}} (unha fila por día ou mes; súmase o último número de cada fila). Use graos-día á temperatura base que use a súa fonte: esa base xa conta co calor gratuíto de persoas, luces e sol.

## Refrixeración

O **pico de refrixeración** = o calor a través da envolvente e do aire á temperatura de deseño de verán + persoas (superficie por persoa × calor por persoa) + iluminación e equipos por m² de piso + **o sol**: o pico de {{ui:Sun through the windows on a date}} para ese cuarto. Calcule primeiro o sol, nun día cálido; ata entón o sol conta 0 e a sección o indica. Os picos de cada parte súmanse aínda que caian a horas distintas, o que engade un pouco de máis.

## Que deixa fóra

- Os métodos mensuais e horarios de ISO 52016-1 (unha norma de pago), o calor almacenado na masa do edificio, as pontes térmicas, o rendemento dos sistemas de calefacción e refrixeración, e os ficheiros de clima.
- Os cuartos contiguos tómanse á mesma temperatura; os espazos sen calefacción non se modelan.

Vexa tamén [Estimar a luz natural en cada cuarto](topic:daylight-factor).
