---
title: Resolver interferencias con las soluciones de cada disciplina
summary: Desde los resultados de interferencias, Proponer soluciones enumera para cada interferencia lo que cada disciplina podría hacer (un conducto desviado bajo una viga, una tubería apartada, un pilar movido, una abertura en una viga), probado en una copia del modelo con sus compensaciones, para que usted acepte o rechace. Las soluciones aceptadas se aplican como un solo paso de deshacer.
keywords: interferencia, solución de interferencias, resolver interferencias, coordinación, proponer soluciones, desvío, desplazamiento, conducto, tubería, bandeja, viga, pilar, abertura, manguito, compensación, disciplina, estructura, mecánica, fontanería, electricidad, arquitectura, asistente
from: f7bafdd9
---

## Qué hará

Convierta una lista de interferencias en decisiones. Cada disciplina (estructura, mecánica, fontanería, electricidad, arquitectura) propone soluciones solo para sus propios elementos, cada propuesta se comprueba en una copia del modelo, y usted elige.

## Pasos

1. Ejecute primero la comprobación de interferencias. Véase [Buscar interferencias](topic:clash-check) y [Comprobar tuberías y conductos frente a la estructura](topic:mep-against-structure).
2. Bajo los resultados, haga clic en {{ui:Propose fixes}} (Proponer soluciones). El panel **Soluciones propuestas** se abre junto al modelo.
3. Para cada interferencia verá las propuestas de cada disciplina, la mejor primero. Cada línea dice qué hace y sus compensaciones: si resuelve la interferencia, cuántas interferencias nuevas crea, qué reglas incumple, cuánto recorrido añade o cuánto se desplaza, cuántos accesorios y una puntuación de coste.
4. Haga clic en {{ui:Show}} para ver los elementos en 3D. Haga clic en {{ui:Accept}} en la solución que quiera (una por interferencia), o en {{ui:Reject}} (Rechazar).
5. La línea inferior indica lo que hacen todas sus soluciones aceptadas juntas: cuántas interferencias se resuelven, cuántas quedan y si algo nuevo interfiere.
6. Haga clic en {{ui:Apply accepted fixes (one undo step)}} (Aplicar soluciones aceptadas, un paso de deshacer). La comprobación de interferencias se ejecuta de nuevo. {{ui:Undo}} las devuelve todas de una vez.

## Qué puede hacer cada disciplina

- **Mecánica** (conductos, tuberías de calefacción y refrigeración): desviar por encima o por debajo en el tramo que choca, subir o bajar todo el recorrido, desplazarlo a un lado, aplanar un conducto rectangular con la misma superficie.
- **Fontanería** (agua, desagües, gas, incendios): los mismos movimientos, salvo que un desagüe por gravedad nunca recibe un desvío; solo puede desplazarse en conjunto, manteniendo su pendiente.
- **Electricidad** (bandejas y tubos): los mismos movimientos; una bandeja debe mantener 150 mm libres por encima para tender cable.
- **Estructura**: mover un pilar (hasta 300 mm), o una abertura en el alma de una viga o en un forjado para el recorrido que pasa. Toda solución estructural indica que el ingeniero estructural debe validarla.
- **Arquitectura**: un manguito en un muro para el recorrido que pasa, o mover un muro que se sabe que no soporta carga.

## Qué debe ver

- Las soluciones que incumplen una regla están marcadas: a menos de la separación de 25 mm respecto a otra cosa, por debajo de la línea de altura libre de 2,100 mm, una abertura en el alma mayor del 40% del canto de la viga o demasiado cerca de sus extremos, o una viga que cambiaría de luz.
- Las soluciones que BimCraft puede hacer se aplican al modelo: recorridos que dibujó con las herramientas Tubería y Conducto, y pilares que dibujó. Las demás indican **Solo consejo**: al aceptarlas se añade una incidencia en la pestaña Incidencias.

## Conviene saber

- Las soluciones provienen de reglas integradas en la aplicación; no se usa IA para ellas.
- Si conecta un asistente (véase [Permitir que un asistente de IA trabaje con su modelo](topic:assistants)), puede leer las interferencias y añadir sus propias propuestas para una disciplina en el panel abierto. Se comprueban igual, se marcan con el nombre del asistente, y no se cambia nada hasta que usted acepte y aplique.
- La copia se comprueba con cajas alrededor de cada elemento y de cada tramo de un recorrido, así que un recorrido inclinado puede mostrar una interferencia que la comprobación no detectaría. Vuelva a ejecutar la comprobación de interferencias después de aplicar: es la última palabra.
- Los límites (cuánto puede desplazarse un recorrido, cuánto puede subir un desvío, la separación) son los valores por defecto escritos en el panel.

## Siguiente

- [Incidencias y archivos BCF](topic:issues-bcf)
- [Dibujar recorridos de tuberías y conductos](topic:pipes-and-ducts)
