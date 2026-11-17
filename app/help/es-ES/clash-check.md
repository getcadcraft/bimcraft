---
title: Buscar interferencias
summary: Encuentre dónde los elementos de un conjunto chocan con los de otro (conductos a través de vigas, muros en forjados), en un modelo o en varios, con una tolerancia, y convierta una interferencia en una incidencia.
keywords: interferencia, detección de interferencias, comprobación de interferencias, interferencia dura, solapamiento, colisión, coordinación, solape, tolerancia, mep, estructura
from: 9cb12346
---

## Qué hará

Encuentre los lugares donde dos conjuntos de elementos chocan, por ejemplo todo lo del modelo de instalaciones frente a la estructura, y luego revise cada uno y conserve como incidencias los que importen.

## Pasos

1. Abra un modelo IFC y añada los demás con {{ui:Add a model…}} si comprueba entre modelos. Véase [Ver varios modelos IFC juntos](topic:several-models).
2. Abra {{ui:Clash check}} en el panel izquierdo.
3. En {{ui:Check}} y {{ui:Against}}, elija dos conjuntos: los elementos que seleccionó, una clase (en todos los modelos abiertos), un conjunto de búsqueda guardado (véase [Buscar elementos por clase, nombre o propiedad](topic:find)), o todo.
4. Indique cuánto solape ignorar, en metros. 0.01 ignora los elementos que apenas se tocan.
5. Haga clic en {{ui:Run}}. La comprobación se ejecuta en segundo plano; {{ui:Cancel}} la detiene.
6. Haga clic en un resultado para verlo: los dos elementos se seleccionan y se muestran, el resto se ve transparente y la vista se acerca a ellos.
7. Haga clic en {{ui:Make an issue of it}} bajo un resultado para redactarlo en la pestaña {{ui:Issues}}. Véase [Incidencias y archivos BCF](topic:issues-bcf).

## Qué debe ver

- Las interferencias listadas con los nombres de ambos elementos (y sus archivos, cuando hay varios modelos abiertos) y cuánto se solapan, la más profunda primero.
- Las caras que solo se tocan, como un muro apoyado en un forjado o una puerta en su hueco, no son interferencias.

## Conviene saber

- Es una comprobación básica de interferencia dura: elementos cuyas superficies se cruzan. Un elemento oculto por completo dentro de otro (una tubería embebida en un muro) todavía no se encuentra.
- La profundidad es cuánto se solapan como mínimo los límites de los dos elementos: una guía, no una medida exacta.

## Siguiente

- [Medir distancias, áreas de caras y posiciones en 3D](topic:measure)
- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
