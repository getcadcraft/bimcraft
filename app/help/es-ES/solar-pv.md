---
title: Campos solares fotovoltaicos, sombreado y producción
summary: Coloque campos solares en cubiertas o en el suelo, calcule su sombreado a partir del modelo, estime la energía anual, dimensione las cadenas y genere los datos del esquema unifilar. Todas las entradas se muestran, y el módulo inicial y las pérdidas son genéricos.
keywords: solar, fv, fotovoltaico, campo, módulo, cubierta, sombreado, producción, kwh, kwp, dimensionado de cadenas, inversor, unifilar, esquema unifilar, inclinación, azimut, separación entre filas
from: adf4aaf3
---

## Qué hará

Abra el panel **Solar FV**. Elija un faldón de cubierta (su inclinación y orientación se leen del modelo) o disponga un campo en el suelo con una inclinación y una orientación; los módulos se colocan dentro con retranqueos y se cuentan, dando la potencia en CC en kWp. Colocar el campo lo escribe en el modelo como dispositivos solares, en un solo paso de Deshacer.

## Sombreado, producción y cadenas

- **Sombreado** lanza un rayo desde cada módulo hacia el sol, para días típicos de cada mes, contra la propia geometría del modelo: así cuentan los edificios vecinos, los antepechos y las filas situadas delante. Solo se reduce la luz solar directa, y un campo parcialmente sombreado pierde potencia en proporción.
- **Producción** da los kWh por mes y por año, los kWh por kWp y el índice de rendimiento. La radiación solar procede de sus propios totales mensuales sobre una superficie horizontal, si los escribe. Sin ellos, el panel usa una cota superior de cielo despejado, y lo indica. **Obtener el clima de NASA POWER** con un botón en la pestaña Producción: envía solo la latitud y la longitud del terreno, una vez, y conserva la respuesta en este equipo (comprobado desde el navegador el 30/10/2026). PVGIS no permite que una página web lea su respuesta, así que la pestaña ofrece un enlace que abre en una pestaña nueva los datos mensuales de PVGIS para el terreno; pegue lo que muestra en el cuadro y se rellenan los doce meses.
- **Cadenas** comprueba los módulos por cadena frente a la ventana de tensión del inversor en el día más frío y en el más caluroso, y las cadenas en paralelo frente a su intensidad.
- **Unifilar** genera los datos del esquema (campo, cuadro combinador, seccionador, inversor, cuadro y red de distribución) con las secciones de cable y los fusibles a partir de los factores que escriba. Son datos y un SVG; el complemento Eléctrico de CadCraft puede colocarlos como símbolos.

Los datos del módulo, del inversor, las pérdidas y los factores de cable que vienen con BimCraft son ejemplos genéricos, indicados en cada resultado. Escriba los datos del fabricante y los valores normativos a los que diseña, y haga revisar el diseño por la persona que responde de él.
