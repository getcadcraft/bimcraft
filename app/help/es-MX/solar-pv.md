---
title: Arreglos solares FV, sombreado y producción
summary: Coloque arreglos solares en techos o en el terreno, calcule sus sombras a partir del modelo, estime la energía anual, dimensione las cadenas y genere los datos del diagrama unifilar. Todas las entradas se muestran y el módulo de ejemplo y las pérdidas son genéricos.
keywords: solar, fv, fotovoltaico, arreglo, módulo, techo, sombreado, producción, kwh, kwp, dimensionamiento de cadenas, inversor, unifilar, diagrama de una línea, inclinación, azimut, separación entre filas
from: adf4aaf3
---

## Lo que hará

Abra el panel **Solar FV**. Elija una cara de techo (su inclinación y orientación se leen del modelo) o trace un arreglo en el terreno con una inclinación y una orientación; los módulos se ajustan dentro con sus retiros y se cuentan, y se obtiene la potencia en CD en kWp. Colocar el arreglo lo escribe en el modelo como dispositivos solares, en un solo paso de deshacer.

## Sombreado, producción y cadenas

- **Sombreado** lanza un rayo desde cada módulo hacia el sol, para días típicos de cada mes, contra la geometría propia del modelo, de modo que cuentan los edificios vecinos, los antepechos y las filas de delante. Solo se reduce la luz solar directa, y un arreglo parcialmente sombreado pierde potencia en proporción.
- **Producción** da los kWh por mes y por año, los kWh por kWp y la razón de rendimiento. El sol proviene de sus propios totales mensuales sobre una superficie horizontal, si los escribe. Sin ellos, el panel usa una cota superior de cielo despejado, y lo indica. **Obtener el clima de NASA POWER** con un botón en la pestaña Producción: envía solo la latitud y la longitud del sitio, una vez, y guarda la respuesta en esta computadora (verificado desde el navegador el 2026-10-30). PVGIS no permite que una página web lea su respuesta, así que la pestaña ofrece un enlace que abre en una pestaña nueva los datos mensuales de PVGIS para el sitio; pegue lo que muestra en el cuadro y se llenan los doce meses.
- **Cadenas** revisa los módulos por cadena frente a la ventana de voltaje del inversor en el día más frío y en el más caluroso, y las cadenas en paralelo frente a su corriente.
- **Unifilar** genera los datos del diagrama (arreglo, combinador, desconectador, inversor, tablero, red de suministro) con los calibres de conductor y de fusibles según los factores que escriba. Son datos y un SVG; el complemento Eléctrico de CadCraft puede colocarlos como símbolos.

Los módulos, el inversor, las pérdidas y los factores de conductor que vienen con BimCraft son ejemplos genéricos, rotulados en cada resultado. Escriba los datos del fabricante y los valores de norma para los que diseña, y haga que la persona responsable del diseño lo revise.
