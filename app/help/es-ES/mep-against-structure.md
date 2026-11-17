---
title: Comprobar tuberías y conductos contra la estructura
summary: Ejecute los conjuntos de interferencias prefabricados de tuberías y conductos contra muros, forjados, vigas y pilares, encuentre tramos más cerca de la estructura que su aislamiento y una separación, y liste los huecos que necesitan los tramos en muros y forjados como CSV y BCF.
keywords: mep, interferencia, detección de interferencias, interferencia blanda, coordinación, estructura, muros, forjados, vigas, pilares, holgura, aislamiento, separación, hueco, huecos, paso, pasamuros, núcleo, obra de albañilería, bcf, csv
from: 2d597f01
---

## Qué hará

Asegúrese de que las instalaciones encajan en el edificio: qué choca con la estructura, qué pasa demasiado cerca de ella y dónde los muros y forjados necesitan orificios. Abra {{ui:Detección de interferencias}} en el panel izquierdo; la sección **Tuberías y conductos contra la estructura** está bajo la comprobación habitual.

## Interferencias duras

Las dos listas de conjuntos ofrecen ahora también **Tuberías y conductos**, **Muros**, **Forjados y cubiertas**, **Vigas**, **Pilares** y **Estructura** (las cuatro), con cuántos elementos contiene cada una. Haga clic en {{ui:Tuberías y conductos × estructura}} para elegir la primera y la última y ejecutar la comprobación; o elija cualquier pareja usted mismo y haga clic en {{ui:Ejecutar}}. Consulte [Comprobar interferencias](topic:clash-check).

## Holguras

Algunas instalaciones necesitan espacio alrededor: su aislamiento, y espacio para trabajar o para un pasamuros.

1. Dé a un tramo de tubería o conducto su espesor de **Aislamiento** en Propiedades (no se dibuja nada para él).
2. Escriba la **Separación alrededor de tuberías y conductos** (mm) en Detección de interferencias.
3. Haga clic en {{ui:Comprobar holguras}}: cada parte más cerca de un muro, forjado, viga o pilar que su aislamiento más la separación se lista con la distancia que tiene y la distancia que debería tener. Haga clic en una línea para ver las dos.

Una parte que atraviesa un muro o forjado es un hueco, no una holgura, y se lista allí.

## Huecos necesarios

Haga clic en {{ui:Huecos necesarios}}. Cuando la línea central de un tramo atraviesa un muro o un forjado, BimCraft lista el hueco que necesita: redondo para una tubería o conducto redondo, y si no, rectangular; tan grande como el tamaño exterior del tramo, más dos veces su aislamiento, más dos veces la separación, y centrado donde el tramo cruza. Haga clic en una línea para ver el tramo y el muro o forjado.

- {{ui:Huecos como CSV}}: una línea por hueco, con el tramo, su tamaño y aislamiento, el tamaño del hueco, el elemento que atraviesa y su GlobalId, la planta, las coordenadas X, Y y Z del centro, y cuánto atraviesa el tramo.
- {{ui:Huecos como incidencias BCF}}: una incidencia por hueco, con una cámara que lo enfoca y el tramo y el elemento elegidos, para el programa del ingeniero de estructuras.

:::note
No se corta nada: los huecos son un listado para quienes los dimensionan. La separación la escribe usted; ningún código dice qué tamaño debe tener un hueco. Las vigas y pilares son interferencias, no huecos: si una tubería puede atravesar uno lo decide el ingeniero de estructuras.
:::
