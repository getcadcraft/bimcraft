---
title: Revisar tuberías y ductos contra la estructura
summary: Ejecute los conjuntos de interferencias predefinidos de tuberías y ductos contra muros, losas, vigas y columnas, encuentre tramos más cerca de la estructura de lo que permiten su aislamiento y una separación, y liste los pasos que necesitan los tramos a través de muros y losas en CSV y BCF.
keywords: mep, interferencia, detección de interferencias, coordinación, estructura, muros, losas, vigas, columnas, holgura, interferencia blanda, aislamiento, separación, paso, pasos, penetración, manguito, núcleo, trabajo de obra civil, bcf, csv
from: 2d597f01
---

## Qué hará

Asegure que las instalaciones encajen en el edificio: qué entra en la estructura, qué pasa demasiado cerca de ella y dónde los muros y las losas necesitan perforaciones. Abra {{ui:Detección de interferencias}} en el panel izquierdo; la sección **Tuberías y ductos contra la estructura** está debajo de la comprobación habitual.

## Interferencias duras

Las dos listas de conjuntos ahora también ofrecen **Tuberías y ductos**, **Muros**, **Losas y cubiertas**, **Vigas**, **Columnas** y **Estructura** (las cuatro), con cuántos elementos tiene cada una. Haga clic en {{ui:Tuberías y ductos × estructura}} para seleccionar la primera y la última y ejecutar la comprobación; o seleccione cualquier par usted mismo y haga clic en {{ui:Ejecutar}}. Vea [Comprobar interferencias](topic:clash-check).

## Holguras

Algunas instalaciones necesitan espacio a su alrededor: su aislamiento y espacio para trabajar o para un manguito.

1. Asigne a un tramo de tubería o ducto su espesor de **Aislamiento** en Propiedades (no se dibuja nada para él).
2. Escriba la **Separación alrededor de tuberías y ductos** (mm) en {{ui:Detección de interferencias}}.
3. Haga clic en {{ui:Revisar holguras}}: cada parte más cerca de un muro, losa, viga o columna que su aislamiento más la separación aparece en la lista con la distancia que tiene y la distancia que requiere. Haga clic en una línea para ver las dos.

Una parte que atraviesa un muro o una losa es un paso, no una holgura, y aparece en esa lista.

## Pasos necesarios

Haga clic en {{ui:Pasos necesarios}}. Donde la línea central de un tramo atraviesa un muro o una losa, BimCraft lista el paso que necesita: redondo para una tubería o ducto redondo, y si no, rectangular, con un tamaño igual al tamaño exterior del tramo más dos veces su aislamiento más dos veces la separación, centrado donde el tramo cruza. Haga clic en una línea para ver el tramo y el muro o la losa.

- {{ui:Pasos como CSV}}: una línea por paso con el tramo, su tamaño y aislamiento, el tamaño del paso, el elemento que atraviesa y su GlobalId, el nivel, las coordenadas X, Y y Z del centro y cuánto avanza el tramo a través de él.
- {{ui:Pasos como incidencias BCF}}: una incidencia por paso, con una cámara que lo enfoca y el tramo y el elemento seleccionados, para el programa del ingeniero estructural.

:::note
Nada se corta: los pasos son una lista para quienes los dimensionan. La separación la escribe usted; ningún código dice qué tamaño debe tener un paso. Las vigas y columnas son interferencias, no pasos: si una tubería puede atravesar una, lo decide el ingeniero estructural.
:::
