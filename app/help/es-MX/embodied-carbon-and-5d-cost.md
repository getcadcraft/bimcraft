---
title: Carbono incorporado y costos en el programa
summary: Sume el carbono incorporado del modelo a partir de una tabla de factores abierta y editable, y reparta los precios sobre el programa 4D en una curva de costo y de flujo de caja. Ambas partes de valores que usted escribe o importa.
keywords: carbono incorporado, carbono, co2, kgCO2e, emisiones, tabla de factores, epd, 5d, costo, flujo de caja, curva s, costo del programa, precios, precios de cuantificación
from: 83e82840
---

## Carbono incorporado

Abra el panel **Carbono**. La cantidad de cada elemento (volumen, área o longitud) se multiplica por un factor de la tabla, por módulo del ciclo de vida: la etapa de producto es obligatoria; el transporte y el desperdicio son opcionales. Los totales se obtienen por material, clase y nivel, y por metro cuadrado de piso.

**La tabla de factores es suya.** Las filas que vienen con BimCraft son valores iniciales genéricos del orden de magnitud correcto. No provienen de una base de datos, están marcadas como sin verificar y deben reemplazarse por la fuente que usted use (una EPD, una base de datos nacional o las cifras de su empresa). Edite las filas en el panel, o importe y exporte la tabla como CSV o JSON. Las filas que agregue reemplazan la fila inicial con el mismo id. La tabla se guarda en el modelo.

Los elementos sin coincidencia, o sin cantidad, aparecen como **Problemas** y no se cuentan como cero.

## Costos en el programa 4D

Abra el panel **Costo** junto al programa 4D. Asígnele precios (escríbalos, importe un CSV o JSON, o traiga las partidas de TakeoffCraft), relacione cada precio con materiales del modelo mediante palabras clave, y el panel valorará los elementos de cada tarea. El costo de una tarea se reparte entre sus días de inicio y fin (de forma uniforme, o con carga al inicio o al final), y el panel dibuja la curva acumulada de flujo de caja por día, semana o mes, con costo por etapa y paquete, y lo planeado contra lo construido en una fecha. Exporta en CSV. Nada se valora hasta que usted dé precios: no se incluye ninguno.

## Moneda

Una tabla de precios puede indicar en qué moneda están sus precios (tres letras, como USD o EUR). El panel 5D tiene un campo para ello; se guarda en el archivo junto con los precios, y las exportaciones JSON la incluyen. Una tabla hecha antes de esto, o en la que la dejó vacía, no tiene moneda: sus costos se muestran en USD, la moneda predeterminada de la aplicación, y el panel y los totales acumulados lo indican. No se convierte nada entre monedas.
