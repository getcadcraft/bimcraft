---
title: Resolver interferencias con las correcciones de cada disciplina
summary: Desde los resultados de interferencias, Proponer correcciones enumera para cada interferencia lo que cada disciplina podría hacer al respecto (un ducto desviado bajo una viga, un tubo corrido a un lado, una columna movida, una abertura en una viga), cada una probada en una copia del modelo con sus compensaciones, para que usted acepte o rechace. Las correcciones aceptadas se aplican como un solo paso de deshacer.
keywords: interferencia, corrección de interferencias, resolver interferencias, coordinación, proponer correcciones, desviar, rodeo, desfase, ducto, tubo, charola, viga, columna, abertura, pasamuros, compensación, disciplina, estructura, mecánica, plomería, eléctrica, arquitectura, asistente
from: f7bafdd9
---

## Qué hará

Convierta una lista de interferencias en decisiones. Cada disciplina (estructura, mecánica, plomería, eléctrica, arquitectura) propone correcciones solo para sus propios elementos, cada propuesta se comprueba en una copia del modelo, y usted elige.

## Pasos

1. Ejecute primero la comprobación de interferencias. Vea [Comprobar interferencias](topic:clash-check) y [Comprobar tuberías y ductos contra la estructura](topic:mep-against-structure).
2. Debajo de los resultados, haga clic en {{ui:Proponer correcciones}}. El panel **Correcciones propuestas** se abre junto al modelo.
3. Para cada interferencia verá las propuestas de cada disciplina, la mejor primero. Cada línea dice qué hace y cuáles son sus compensaciones: si resuelve la interferencia, cuántas interferencias nuevas genera, qué reglas incumple, cuánto recorrido agrega o cuánto se mueve, cuántos accesorios y una puntuación de costo.
4. Haga clic en {{ui:Mostrar}} para ver los elementos en 3D. Haga clic en {{ui:Aceptar}} en la corrección que quiera (una por interferencia), o en {{ui:Rechazar}}.
5. La línea de abajo dice qué hacen todas sus correcciones aceptadas en conjunto: cuántas interferencias se resuelven, cuántas quedan y si algo nuevo choca.
6. Haga clic en {{ui:Aplicar correcciones aceptadas (un paso de deshacer)}}. La comprobación de interferencias se ejecuta de nuevo. {{ui:Deshacer}} las revierte todas a la vez.

## Lo que puede hacer cada disciplina

- **Mecánica** (ductos, tuberías de calefacción y enfriamiento): desviar por arriba o por abajo en el tramo que choca, subir o bajar todo el recorrido, moverlo a un costado, aplanar un ducto rectangular manteniendo la misma área.
- **Plomería** (agua, desagües, gas, contraincendios): los mismos movimientos, salvo que a un desagüe por gravedad nunca se le da un desvío; solo puede moverse como un todo, conservando su pendiente.
- **Eléctrica** (charolas y canalizaciones): los mismos movimientos; una charola debe mantener 150 mm libres por encima para tender el cable.
- **Estructura**: mover una columna (hasta 300 mm), o una abertura en el alma de una viga o en una losa para el recorrido que pasa. Toda corrección estructural indica que el ingeniero estructural debe aprobarla.
- **Arquitectura**: un pasamuros en un muro para el recorrido que pasa, o mover un muro que se sabe que no soporta carga.

## Qué debe ver

- Las correcciones que incumplen una regla se marcan: más cerca que la separación de 25 mm de otra cosa, por debajo de la línea de altura libre de 2,100 mm, una abertura en el alma mayor al 40 % del peralte de la viga o demasiado cerca de sus extremos, o una viga que cambiaría de claro.
- Las correcciones que BimCraft puede hacer se aplican al modelo: recorridos que dibujó con las herramientas Tubería y Ducto, y columnas que dibujó. Las demás dicen **Solo recomendación**: al aceptarlas se agrega una incidencia en la pestaña Incidencias.

## Conviene saber

- Las correcciones provienen de reglas integradas en la aplicación; no se usa IA para ellas.
- Si conecta un asistente (vea [Permita que un asistente de IA trabaje con su modelo](topic:assistants)), puede leer las interferencias y agregar sus propias propuestas para una disciplina al panel abierto. Se comprueban de la misma manera, marcadas con el nombre del asistente, y no se cambia nada hasta que usted acepte y aplique.
- La copia se comprueba con cajas alrededor de cada elemento y de cada tramo de un recorrido, así que un recorrido inclinado puede mostrar una interferencia que la comprobación de interferencias no detectaría. Ejecute de nuevo la comprobación después de aplicar: es la última palabra.
- Los límites (cuánto puede moverse un recorrido, cuánto puede subir un desvío, la separación) son los valores predeterminados escritos en el panel.

## Siguiente

- [Incidencias y archivos BCF](topic:issues-bcf)
- [Dibujar recorridos de tuberías y ductos](topic:pipes-and-ducts)
