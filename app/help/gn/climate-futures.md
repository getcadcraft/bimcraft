---
title: "Escenarios climáticos: inundación, calor e incendio forestal en 2050 y 2080"
summary: Vuelva a correr la inundación, el año de energía y una evaluación preliminar de incendio forestal con clima futuro (escenarios SSP2-4.5 y SSP5-8.5, años 2050 y 2080) desde un paquete de datos climáticos, presentado junto al presente.
keywords: clima, cambio climático, futuro, 2050, 2080, ssp, cmip6, escenario, nivel del mar, inundación, calor, archivo meteorológico, epw, morph, energyplus, incendio forestal, fuego, clima de incendio
from: 224ecd08
---

Las cifras climáticas vienen de un **paquete de datos**, no de la aplicación. Active el complemento {{ui:Escenarios climáticos}} en Configuración › Complementos, o cargue un archivo de paquete propio en el bloque {{ui:Clima futuro}}.

:::warning
El paquete que viene con el complemento es una **muestra**: tres lugares (Denver, Miami, Johannesburgo), un modelo climático y cinco años en cada período de 20 años. Sirve para probar las herramientas, **no para diseñar**. El panel lo dice en negrita mientras está en uso. Un paquete completo (muchos modelos, todos los años, más lugares) se arma con `tools/climate/build-pack.mjs` a partir de los datos NEX-GDDP-CMIP6 de la NASA.
:::

## Elegir un futuro

En {{ui:Reproducción de peligro}} del panel izquierdo, elija un **Escenario** (SSP2-4.5, el camino intermedio, o SSP5-8.5, emisiones altas) y un **Año** (2050 significa 2041-2060, 2080 significa 2071-2090; ambos comparados con 1995-2014). El **Lugar** es el lugar del paquete más cercano al sitio del modelo (latitud y longitud de IfcSite), o el que usted elija. Si está lejos de todos los lugares, se usan los cambios del promedio global del paquete y el panel lo indica.

## Inundación, presente junto a futuro

Con un escenario elegido, defina el **Tipo de inundación**: costera (suma la subida del nivel del mar), fluvial o lluvia intensa (más profunda según el cambio en la lluvia del día más húmedo), o ambas. Presione Ejecutar: la inundación se reproduce como antes, y una tabla muestra la inundación presente y la futura lado a lado (nivel del agua, ambientes que se mojan, el agua más profunda). Los supuestos se listan debajo:

- un nivel costero sube en todo el aumento del nivel del mar; la marejada y las olas no cambian;
- el caudal del río sube uno a uno con la lluvia del día más húmedo, y la profundidad sigue al caudal elevado a 0,6 (ecuación de Manning para un canal ancho);
- las dos partes simplemente se suman.

## Calor: un archivo meteorológico futuro

Elija el tipo {{ui:Calor: archivo meteorológico futuro}}, elija un archivo meteorológico `.epw` del presente y presione {{ui:Crear el archivo meteorológico futuro}}. El archivo se **morfa** mes a mes con el método publicado de desplazamiento y estiramiento (Belcher, Hacker y Powell 2005): el promedio del mes se calienta según el cambio del paquete, las tardes calurosas según el cambio en la máxima diaria y las noches frías según el cambio en la mínima diaria; la humedad relativa se mueve según el cambio del paquete y el punto de rocío se vuelve a calcular. La presión y el viento no cambian. La tabla compara las temperaturas promedio y máximas, las temperaturas de diseño de refrigeración al 0,4 % y de calefacción al 99,6 %, las horas a 30 °C y 35 °C y los grados-día.

{{ui:Guardar el archivo meteorológico futuro}} lo guarda; {{ui:Usarlo en la verificación energética}} lo pasa a la verificación de EnergyPlus (pestaña Energía). El archivo futuro es el mismo año típico, más cálido: no agrega olas de calor nuevas.

## Año de energía, presente junto a futuro

En la verificación de EnergyPlus de la pestaña Energía (un complemento propio, con su propio motor), elija un archivo meteorológico del presente, luego un escenario y un año en su bloque {{ui:Clima futuro}}, y presione {{ui:Simular un año: presente y futuro}}: el año corre sobre el archivo del presente y sobre su versión futura morfada, y la calefacción y refrigeración de cada ambiente se listan lado a lado.

## Exposición a incendio forestal (solo cribado)

Elija el tipo {{ui:Exposición a incendios forestales (solo cribado)}}: la vegetación más cercana, la pendiente desde ella hasta el edificio y la distancia hasta ella. El resultado es una banda de muy baja a extrema, presente y futura.

:::warning
**Solo cribado.** Es nuestra propia escala relativa para saber si un sitio necesita una evaluación real de incendio forestal; no es una calificación de código ni un nivel de ataque de incendio forestal. Multiplica un peso por la vegetación, un factor de pendiente (un fuego casi duplica su velocidad por cada 10 grados de subida, contados hasta 20 grados), un factor de distancia (10 m divididos por la distancia, como máximo 1) y el cambio del paquete en el índice de clima de incendio.
:::

## De dónde salen las cifras

- **Temperatura, humedad, sol, lluvia, clima de incendio:** NASA NEX-GDDP-CMIP6, salida de modelos CMIP6 reducida diariamente. La salida de cada modelo está bajo CC BY 4.0. El cambio del clima de incendio es el Índice Canadiense de Clima de Incendio calculado día a día a partir del clima del modelo (con la humedad diaria en lugar de la humedad del mediodía).
- **Subida del nivel del mar:** el promedio global del IPCC AR6 (no local; el ascenso o hundimiento del terreno no está incluido), salvo que un paquete traiga cifras locales.
- El paquete indica su fuente, su licencia y su fecha; el panel las muestra.
