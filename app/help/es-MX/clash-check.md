---
title: Comprobar interferencias
summary: Encuentre dónde los elementos de un conjunto chocan con los de otro (ductos que atraviesan vigas, muros que entran en losas), en un modelo o en varios, con una tolerancia, y convierta una interferencia en una incidencia.
keywords: interferencia, detección de interferencias, comprobación de interferencias, interferencia dura, colisión, coordinación, solapamiento, tolerancia, mep, estructura
from: 9cb12346
---

## Qué hará

Encuentre los lugares donde dos conjuntos de elementos chocan entre sí, por ejemplo todo lo del modelo de instalaciones contra la estructura, y luego revise cada uno y conserve como incidencias los que importan.

## Pasos

1. Abra un modelo IFC, y agregue los demás con {{ui:Agregar un modelo…}} si va a comprobar entre modelos. Vea [Ver varios modelos IFC juntos](topic:several-models).
2. Abra {{ui:Detección de interferencias}} en el panel izquierdo.
3. En {{ui:Comprobar}} y {{ui:Contra}}, elija dos conjuntos: los elementos que seleccionó, una clase (en todos los modelos abiertos), un conjunto de búsqueda guardado (vea [Buscar elementos por clase, nombre o propiedad](topic:find)), o todo.
4. Defina cuánta superposición ignorar, en metros. 0.01 ignora los elementos que apenas se tocan.
5. Haga clic en {{ui:Ejecutar}}. La comprobación corre en segundo plano; {{ui:Cancelar}} la detiene.
6. Haga clic en un resultado para verlo: los dos elementos se seleccionan y se muestran, todo lo demás se ve transparente, y la vista se acerca a ellos.
7. Haga clic en {{ui:Crear una incidencia}} bajo un resultado para documentarlo en la pestaña {{ui:Incidencias}}. Vea [Incidencias y archivos BCF](topic:issues-bcf).

## Qué debe ver

- Las interferencias enumeradas con los nombres de ambos elementos (y sus archivos, cuando hay varios modelos abiertos) y qué tan profunda es la superposición, la más profunda primero.
- Las caras que solo se tocan, como un muro apoyado sobre una losa o una puerta en su vano, no son interferencias.

## Conviene saber

- Esta es una comprobación básica de interferencia dura: elementos cuyas superficies se cruzan. Un elemento totalmente oculto dentro de otro (un tubo embebido en un muro) todavía no se encuentra.
- La profundidad es cuánto se superponen, como mínimo, los límites de los dos elementos: es una guía, no una medición exacta.

## Siguiente

- [Medir distancias, áreas de caras y ubicaciones en 3D](topic:measure)
- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
