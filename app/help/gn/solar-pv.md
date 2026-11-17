---
title: Arreglos solares fotovoltaicos, sombra y producción
summary: Colocá arreglos solares en techos o en el suelo, calculá la sombra desde el modelo, estimá la energía anual, dimensioná las cadenas y generá los datos del diagrama unifilar. Todos los datos de entrada se muestran, y el módulo de referencia y las pérdidas son genéricos.
keywords: solar, pv, fotovoltaico, arreglo, módulo, techo, sombra, producción, kwh, kwp, dimensionado de cadenas, inversor, unifilar, línea simple, inclinación, azimut, separación entre filas
from: adf4aaf3
---

## Lo que vas a hacer

Abrí el panel **Solar PV**. Elegí una cara de techo (su inclinación y orientación se leen del modelo) o armá un arreglo en el suelo con una inclinación y una orientación; los módulos se ajustan adentro con retiros y se cuentan, y eso da la potencia de CC en kWp. Al colocar el arreglo, se escribe en el modelo como dispositivos solares, en un solo paso de deshacer.

## Sombra, producción y cadenas

- **Sombra** lanza un rayo desde cada módulo hacia el sol para los días típicos de cada mes, contra la geometría propia del modelo, así que los edificios vecinos, los antepechos y las filas delante cuentan. Solo se reduce la luz solar directa, y un arreglo con sombra parcial pierde potencia en proporción.
- **Producción** da kWh por mes y por año, kWh por kWp y la relación de rendimiento. El sol sale de tus propios totales mensuales sobre una superficie horizontal, si los escribís. Sin ellos, el panel usa un límite superior de cielo despejado, y lo indica. **Obtener el clima de NASA POWER** con un botón en la pestaña Producción: envía solo la latitud y longitud del sitio, una vez, y guarda la respuesta en esta computadora (verificado desde el navegador el 2026-10-30). PVGIS no permite que una página web lea su respuesta, así que la pestaña muestra un enlace que abre en una pestaña nueva los datos mensuales de PVGIS para el sitio; pegá lo que muestra en la casilla y se completan los doce meses.
- **Cadenas** verifica los módulos por cadena contra la ventana de tensión del inversor en el día más frío y en el más caluroso, y las cadenas en paralelo contra su corriente.
- **Unifilar** genera los datos del diagrama (arreglo, caja combinadora, desconectador, inversor, tablero y red) con los tamaños de cable y fusibles según los factores que escribas. Son datos y un SVG; el complemento Eléctrico de CadCraft puede colocarlos como símbolos.

Los factores de módulo, inversor, pérdidas y cable que vienen con BimCraft son ejemplos genéricos, rotulados en cada resultado. Escribí los datos del fabricante y los valores de norma con los que diseñás, y hacé que el diseño lo revise la persona que responde por él.
