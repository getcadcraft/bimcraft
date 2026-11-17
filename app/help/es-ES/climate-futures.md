---
title: "Clima futuro: inundación, calor e incendio forestal en 2050 y 2080"
summary: Vuelva a ejecutar la inundación, el año energético y un cribado de incendio forestal con clima futuro (escenarios SSP2-4.5 y SSP5-8.5, años 2050 y 2080) desde un paquete de datos climáticos, presentado junto al presente.
keywords: clima, cambio climático, futuro, 2050, 2080, ssp, cmip6, escenario, nivel del mar, inundación, calor, archivo meteorológico, epw, morph, energyplus, incendio forestal, incendio de vegetación, meteorología de incendios
from: 224ecd08
---

Las cifras climáticas proceden de un **paquete de datos**, no de la aplicación. Active el complemento {{ui:Climate futures}} en Configuración › Complementos, o cargue un archivo de paquete propio en el bloque {{ui:Climate future}}.

:::warning
El paquete que viene con el complemento es una **muestra**: tres lugares (Denver, Miami, Johannesburgo), un modelo climático, cinco años en cada periodo de 20 años. Sirve para probar las herramientas, **no para diseñar**. El panel lo indica en negrita mientras está en uso. Un paquete completo (muchos modelos, todos los años, más lugares) se genera con `tools/climate/build-pack.mjs` a partir de los datos NEX-GDDP-CMIP6 de la NASA.
:::

## Elegir un futuro

En {{ui:Hazard playback}} del panel izquierdo, elija un **Escenario** (SSP2-4.5, el término medio, o SSP5-8.5, emisiones altas) y un **Año** (2050 significa 2041-2060, 2080 significa 2071-2090; ambos frente a 1995-2014). El **Lugar** es el del paquete más cercano al emplazamiento del modelo (latitud y longitud de IfcSite), o el que elija. Si está lejos de todos los lugares, se usan los cambios medios globales del paquete y el panel lo indica.

## Inundación, presente junto a futuro

Con un escenario elegido, fije el **Tipo de inundación**: costera (añade la subida del nivel del mar), fluvial o lluvia intensa (más profunda por el cambio en la lluvia del día más lluvioso), o ambas. Pulse Ejecutar: la inundación se reproduce como antes, y una tabla muestra la inundación actual y la futura lado a lado (nivel del agua, espacios que se mojan, agua más profunda). Debajo se listan las hipótesis:

- un nivel costero sube por la subida total del nivel del mar; no se cambian la marejada ni el oleaje;
- el caudal fluvial sube uno a uno con la lluvia del día más lluvioso, y la profundidad sigue al caudal elevado a 0.6 (ecuación de Manning para un cauce ancho);
- las dos partes simplemente se suman.

## Calor: un archivo meteorológico futuro

Elija el tipo {{ui:Heat: future weather file}}, seleccione un archivo meteorológico `.epw` del clima actual y pulse {{ui:Make the future weather file}}. El archivo se **morfea** mes a mes con el método publicado de desplazamiento y estiramiento (Belcher, Hacker y Powell 2005): la media del mes se calienta según el cambio del paquete, las tardes calurosas según el cambio en la máxima diaria y las noches frías según el cambio en la mínima diaria; la humedad relativa cambia según el cambio del paquete y el punto de rocío se recalcula. La presión y el viento no cambian. La tabla compara las temperaturas media y más alta, las temperaturas de diseño de refrigeración al 0.4 % y de calefacción al 99.6 %, las horas a 30 °C y 35 °C y los grados-día.

{{ui:Save the future weather file}} lo guarda; {{ui:Use it in the energy check}} lo pasa a la comprobación de EnergyPlus (pestaña Energía). El archivo futuro es el mismo año típico, más cálido: no añade nuevas olas de calor.

## Año energético, presente junto a futuro

En la comprobación de EnergyPlus de la pestaña Energía (un complemento propio, con su propio motor), elija un archivo meteorológico actual y después un escenario y un año en su bloque {{ui:Climate future}}, y pulse {{ui:Simulate a year: present and future}}: el año se ejecuta con el archivo actual y con su versión futura morfeada, y la calefacción y la refrigeración de cada espacio se listan lado a lado.

## Exposición a incendios forestales (solo cribado)

Elija el tipo {{ui:Wildfire exposure (screening only)}}: la vegetación más cercana, la pendiente desde ella hasta el edificio y la distancia hasta ella. El resultado es una banda de muy baja a extrema, presente y futura.

:::warning
**Solo cribado.** Es nuestra propia escala relativa para saber si un emplazamiento necesita una evaluación de incendio forestal en condiciones, no una calificación de código ni un nivel de ataque de incendio forestal. Multiplica un peso por la vegetación, un factor de pendiente (un incendio casi duplica su velocidad por cada 10 grados de subida, contando hasta 20 grados), un factor de distancia (10 m divididos por la distancia, como máximo 1) y el cambio del paquete en el índice meteorológico de incendios.
:::

## De dónde proceden los números

- **Temperatura, humedad, insolación, lluvia, meteorología de incendios:** NASA NEX-GDDP-CMIP6, salida diaria reducida a escala de modelos CMIP6. La salida de cada modelo está bajo CC BY 4.0. El cambio en la meteorología de incendios es el Índice Canadiense de Meteorología de Incendios (Canadian Fire Weather Index) calculado día a día a partir del tiempo del modelo, con la humedad diaria en lugar de la humedad del mediodía.
- **Subida del nivel del mar:** la media global del IPCC AR6 (no local; el ascenso o hundimiento del terreno no está incluido), salvo que un paquete incluya cifras locales.
- El paquete indica su fuente, su licencia y su fecha; el panel las muestra.
