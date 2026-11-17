---
title: Carbono incorporado y costos en la planilla
summary: Sume el carbono incorporado del modelo a partir de una tabla de factores abierta y editable, y reparta los precios sobre el cronograma 4D en una curva de costo y de flujo de caja. Ambos parten de valores que usted escribe o importa.
keywords: carbono incorporado, carbono, co2, kgco2e, emisiones, tabla de factores, epd, 5d, costo, flujo de caja, curva en S, costo de cronograma, precios, precios de cómputo
from: 83e82840
---

## Carbono incorporado

Abra el panel **Carbono**. La cantidad de cada elemento (volumen, superficie o longitud) se multiplica por un factor de la tabla, según el módulo de ciclo de vida: la etapa de producto es obligatoria; el transporte y los residuos son opcionales. Los totales salen por material, clase y piso, y por metro cuadrado de piso.

**La tabla de factores es suya.** Las filas que vienen con BimCraft son valores iniciales genéricos del orden de magnitud correcto. No provienen de una base de datos, están marcadas como no verificadas, y deben reemplazarse por la fuente que usted use (una EPD, una base nacional o los datos de su empresa). Edite las filas en el panel, o importe y exporte la tabla como CSV o JSON. Las filas que agregue reemplazan la fila inicial con el mismo id. La tabla se guarda en el modelo.

Los elementos sin coincidencia, o sin cantidad, se listan como Problemas y no se cuentan como cero.

## Costos en el cronograma 4D

Abra el panel **Costo** al lado del cronograma 4D. Asigne precios (escríbalos, importe un CSV o JSON, o traiga las líneas de TakeoffCraft), vincule cada precio con los materiales del modelo mediante palabras clave, y el panel pondrá precio a los elementos de cada tarea. El costo de una tarea se reparte entre sus días de inicio y fin (uniforme, o cargado al principio o al final), y el panel dibuja la curva acumulada de flujo de caja por día, semana o mes, con el costo por etapa y paquete, y lo planificado contra lo construido en una fecha. Salida en CSV. Nada tiene precio hasta que usted lo asigne: no se entrega ninguno.

## Moneda

Una tabla de precios puede indicar en qué moneda están sus precios (tres letras, como USD o EUR). El panel 5D tiene un campo para ello; se guarda en el archivo junto con los precios, y las exportaciones JSON lo incluyen. Una tabla hecha antes de esto, o donde lo dejó vacío, no tiene moneda: sus costos se muestran en USD, la moneda por defecto del shell, y el panel y los totales corrientes lo indican. No se convierte nada entre monedas.
