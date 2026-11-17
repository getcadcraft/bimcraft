---
title: Carbono incorporado y costes en la programación
summary: Sume el carbono incorporado del modelo a partir de una tabla de factores abierta y editable, y reparta los precios sobre la programación 4D en una curva de coste y flujo de caja. Ambas partes de valores que escriba o importe.
keywords: carbono incorporado, carbono, co2, kgco2e, emisiones, tabla de factores, epd, 5d, coste, flujo de caja, curva en S, coste de la programación, precios, precios de mediciones
from: 83e82840
---

## Carbono incorporado

Abra el panel **Carbono**. La cantidad de cada elemento (volumen, área o longitud) se multiplica por un factor de la tabla, por módulo de ciclo de vida: la etapa de producto es obligatoria; el transporte y los residuos son opcionales. Los totales se obtienen por material, clase y planta, y por metro cuadrado de planta.

**La tabla de factores es suya.** Las filas que vienen con BimCraft son valores iniciales genéricos, del orden de magnitud correcto. No proceden de una base de datos, están marcadas como no comprobadas y deben sustituirse por la fuente que use (una EPD, una base de datos nacional o las cifras de su empresa). Edite las filas en el panel, o importe y exporte la tabla como CSV o JSON. Las filas que añada prevalecen sobre la fila inicial con el mismo id. La tabla se guarda en el modelo.

Los elementos sin coincidencia, o sin cantidad, se listan como Problemas en lugar de contarse como cero.

## Costes en la programación 4D

Abra el panel **Coste** junto a la programación 4D. Introduzca precios (escríbalos, importe un CSV o JSON, o traiga las líneas de TakeoffCraft), asigne cada precio a los materiales del modelo mediante palabras clave, y el panel valorará los elementos de cada tarea. El coste de una tarea se reparte entre sus días de inicio y fin (de forma uniforme, o con carga al principio o al final), y el panel dibuja la curva acumulada de flujo de caja por día, semana o mes, con el coste por etapa y por paquete, y lo planificado frente a lo construido en una fecha. Exportación en CSV. No se valora nada hasta que dé precios: no se incluye ninguno.

## Divisa

Una tabla de precios puede indicar en qué divisa están sus precios (tres letras, como USD o EUR). El panel 5D tiene un campo para ello; se guarda en el archivo junto con los precios, y las exportaciones JSON la incluyen. Una tabla hecha antes de esto, o en la que la dejó vacía, no tiene divisa: sus costes se muestran en USD, la divisa predeterminada de la aplicación, y el panel y los totales acumulados lo indican. No se convierte nada entre divisas.
