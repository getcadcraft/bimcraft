---
title: Resolver interferencias con las soluciones de cada disciplina
summary: Desde los resultados de interferencias, Proponer soluciones enumera para cada interferencia lo que cada disciplina podría hacer: un conducto desviado bajo una viga, un caño corrido a un lado, una columna movida, una abertura en una viga. Cada una se prueba en una copia del modelo con sus compensaciones, para que usted acepte o rechace. Las soluciones aceptadas entran como un solo paso de deshacer.
keywords: interferencia, solución de interferencias, resolver interferencias, resolver choques, coordinación, proponer soluciones, desviar, rodeo, desplazar, conducto, caño, bandeja, viga, columna, abertura, manguito, compensación, disciplina, estructura, mecánica, sanitaria, eléctrica, arquitectura, asistente
from: f7bafdd9
---

## Mba'e rejapóta

Convierta una lista de interferencias en decisiones. Cada disciplina (estructura, mecánica, sanitaria, eléctrica, arquitectura) propone soluciones solo para sus propios elementos, cada propuesta se verifica en una copia del modelo, y usted elige.

## Pasos

1. Primero ejecute la verificación de interferencias. Ver [Verificar interferencias](topic:clash-check) y [Verificar caños y conductos contra la estructura](topic:mep-against-structure).
2. Bajo los resultados, haga clic en {{ui:Proponer soluciones}}. El panel **Soluciones propuestas** se abre junto al modelo.
3. Para cada interferencia verá las propuestas de cada disciplina, la mejor primero. Cada línea dice qué hace y sus compensaciones: si resuelve la interferencia, cuántas interferencias nuevas crea, qué reglas rompe, cuánto recorrido agrega o cuánto se mueve, cuántos accesorios y un puntaje de costo.
4. Haga clic en {{ui:Mostrar}} para ver los elementos en 3D. Haga clic en {{ui:Aceptar}} en la solución que quiera (una por interferencia), o en {{ui:Rechazar}}.
5. La línea al pie dice lo que hacen todas sus soluciones aceptadas en conjunto: cuántas interferencias quedan resueltas, cuántas faltan y si algo nuevo choca.
6. Haga clic en {{ui:Aplicar las soluciones aceptadas (un paso de Deshacer)}}. La verificación de interferencias vuelve a correr. {{ui:Deshacer}} las quita todas de una vez.

## Lo que puede hacer cada disciplina

- **Mecánica** (conductos, caños de calefacción y refrigeración): desviar por encima o por debajo en el tramo que choca, subir o bajar todo el recorrido, moverlo hacia un costado, o aplanar un conducto rectangular manteniendo la misma área.
- **Sanitaria** (agua, desagües, gas, incendio): los mismos movimientos, salvo que a un desagüe por gravedad nunca se le da un desvío; solo puede moverse como un todo, manteniendo su pendiente.
- **Eléctrica** (bandejas y conductos de cables): los mismos movimientos; una bandeja debe dejar 150 mm libres por encima para tender cable.
- **Estructura**: mover una columna (hasta 300 mm), o una abertura en el alma de una viga o en una losa para el recorrido que pasa. Cada solución estructural indica que el ingeniero estructural la debe aprobar.
- **Arquitectura**: un manguito en un muro para el recorrido que pasa, o mover un muro que se sabe que no lleva carga.

## Mba'e rehecháta

- Las soluciones que rompen una regla se marcan: más cerca que la separación de 25 mm de otra cosa, por debajo de la línea de altura libre de 2.100 mm, una abertura en el alma mayor al 40 % de la altura de la viga o demasiado cerca de sus extremos, una viga que cambiaría de luz.
- Las soluciones que BimCraft puede hacer se aplican al modelo: recorridos que dibujó con las herramientas de Caño y Conducto y columnas que dibujó. Las demás dicen **Solo asesoramiento**: al aceptarlas se agrega una incidencia en la pestaña Incidencias.

## Aikuaa porã

- Las soluciones vienen de reglas integradas en la aplicación; no se usa IA para ellas.
- Si conecta un asistente (ver [Deje que un asistente de IA trabaje con su modelo](topic:assistants)), puede leer las interferencias y agregar sus propias propuestas para una disciplina al panel abierto. Se verifican de la misma forma, se marcan con el nombre del asistente, y no se cambia nada hasta que acepte y aplique.
- La copia se verifica con cajas alrededor de cada elemento y de cada tramo de un recorrido, así que un recorrido inclinado puede mostrar una interferencia que la verificación no mostraría. Ejecute de nuevo la verificación de interferencias después de aplicar: esa es la última palabra.
- Los límites (cuánto puede moverse un recorrido, cuánto puede subir un desvío, la separación) son los valores por defecto escritos en el panel.

## Upéi

- [Incidencias y archivos BCF](topic:issues-bcf)
- [Dibujar recorridos de caños y conductos](topic:pipes-and-ducts)
