---
title: "Futuros climáticos: inundación, calor e incendio forestal en 2050 y 2080"
summary: Vuelva a ejecutar la inundación, el año de energía y una evaluación de incendio forestal con clima futuro (escenarios SSP2-4.5 y SSP5-8.5, años 2050 y 2080) a partir de un paquete de datos climáticos, con el futuro mostrado junto al presente.
keywords: clima, cambio climático, futuro, 2050, 2080, ssp, cmip6, escenario, nivel del mar, inundación, calor, archivo de clima, epw, morph, energyplus, incendio forestal, incendio de vegetación, clima de incendios
from: 224ecd08
---

Las cifras climáticas provienen de un **paquete de datos**, no de la aplicación. Active el complemento {{ui:Futuros climáticos}} en Configuración › Complementos, o cargue un archivo de paquete propio en el bloque {{ui:Clima futuro}}.

:::warning
El paquete que viene con el complemento es una **muestra**: tres lugares (Denver, Miami, Johannesburgo), un modelo climático y cinco años en cada periodo de 20 años. Sirve para probar las herramientas, **no para diseñar**. El panel lo indica en negrita mientras está en uso. Un paquete completo (muchos modelos, todos los años y más lugares) se genera con `tools/climate/build-pack.mjs` a partir de los datos NEX-GDDP-CMIP6 de la NASA.
:::

## Elija un futuro

En {{ui:Reproducción de amenazas}} del panel izquierdo, elija un **Escenario** (SSP2-4.5, el camino intermedio, o SSP5-8.5, emisiones altas) y un **Año** (2050 significa 2041-2060, 2080 significa 2071-2090; ambos frente a 1995-2014). El **Lugar** es el del paquete más cercano al sitio del modelo (latitud y longitud de IfcSite), o el que elija usted. Si está lejos de todos los lugares, se usan los cambios del promedio global del paquete y el panel lo indica.

## Inundación, presente junto a futuro

Con un escenario elegido, defina el **Tipo de inundación**: costera (suma el aumento del nivel del mar), fluvial o lluvia intensa (más profunda según el cambio en la lluvia del día más lluvioso), o ambas. Pulse {{ui:Ejecutar}}: la inundación se reproduce como antes, y una tabla muestra la inundación actual y la futura lado a lado (nivel del agua, espacios que se mojan, el agua más profunda). Los supuestos se listan debajo:

- un nivel costero sube todo el aumento del nivel del mar; la marejada y el oleaje no cambian;
- el caudal del río sube uno a uno con la lluvia del día más lluvioso, y la profundidad sigue al caudal elevado a 0.6 (ecuación de Manning para un canal ancho);
- las dos partes simplemente se suman.

## Calor: un archivo de clima futuro

Elija el tipo {{ui:Calor: archivo de clima futuro}}, seleccione un archivo de clima `.epw` del presente y pulse {{ui:Generar el archivo de clima futuro}}. El archivo se **morfea** mes a mes con el método publicado de desplazamiento y estiramiento (Belcher, Hacker y Powell 2005): la media del mes se calienta según el cambio del paquete, las tardes calurosas según el cambio en la máxima diaria y las noches frías según el cambio en la mínima diaria; la humedad relativa cambia según el cambio del paquete y el punto de rocío se vuelve a calcular. La presión y el viento se mantienen como estaban. La tabla compara la temperatura media y la más alta, las temperaturas de diseño de enfriamiento al 0.4 % y de calefacción al 99.6 %, las horas a 30 °C y 35 °C y los grados-día.

{{ui:Guardar el archivo de clima futuro}} lo guarda; {{ui:Usarlo en la comprobación de energía}} lo entrega a la comprobación con EnergyPlus (pestaña Energía). El archivo futuro es el mismo año típico, pero más cálido: no añade nuevas olas de calor.

## Año de energía, presente junto a futuro

En la comprobación con EnergyPlus de la pestaña Energía (un complemento propio, con su propio motor), elija un archivo de clima del presente, luego un escenario y un año en su bloque {{ui:Clima futuro}}, y pulse {{ui:Simular un año: presente y futuro}}: el año se ejecuta con el archivo del presente y con su versión futura morfeada, y la calefacción y el enfriamiento de cada espacio se listan lado a lado.

## Exposición a incendios forestales (solo evaluación)

Elija el tipo {{ui:Exposición a incendio forestal (solo evaluación)}}: la vegetación más cercana, la pendiente hacia arriba desde ella hasta el edificio y la distancia a ella. El resultado es una banda, de muy baja a extrema, en el presente y en el futuro.

:::warning
**Solo evaluación.** Esta es nuestra propia escala relativa para saber si un sitio necesita una evaluación formal de incendio forestal; no es una calificación de código ni un nivel de ataque de incendio forestal. Multiplica un peso por la vegetación, un factor de pendiente (un incendio casi duplica su velocidad por cada 10 grados de subida, contados hasta 20 grados), un factor de distancia (10 m dividido entre la distancia, como máximo 1) y el cambio del paquete en el índice canadiense de clima de incendios.
:::

## De dónde salen las cifras

- **Temperatura, humedad, sol, lluvia, clima de incendios:** NASA NEX-GDDP-CMIP6, salida de modelos CMIP6 reducida diariamente. La salida de cada modelo está bajo CC BY 4.0. El cambio del clima de incendios es el índice canadiense de clima de incendios calculado día a día a partir del clima del modelo (con humedad diaria en lugar de la del mediodía).
- **Aumento del nivel del mar:** la media global del IPCC AR6 (no local; el ascenso o hundimiento del terreno no está incluido), salvo que un paquete traiga cifras locales.
- El paquete indica su fuente, su licencia y su fecha; el panel los muestra.
