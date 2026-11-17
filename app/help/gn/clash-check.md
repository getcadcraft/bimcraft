---
title: Verificar interferencias
summary: Encuentre dónde elementos de un conjunto chocan con elementos de otro (conductos a través de vigas, muros dentro de losas), en un modelo o en varios, con una tolerancia, y convierta una interferencia en una incidencia.
keywords: interferencia, detección de interferencias, control de interferencias, interferencia dura, colisión, choque, coordinación, superposición, tolerancia, mep, estructura
from: 9cb12346
---

## Mba'e rejapóta

Encuentre los lugares donde dos conjuntos de elementos chocan entre sí, por ejemplo todo el modelo de instalaciones contra la estructura, y luego revise cada uno y conserve como incidencias los que importan.

## Pasos

1. Abra un modelo IFC y agregue los demás con {{ui:Agregar un modelo…}} si verifica entre modelos. Ver [Ver varios modelos IFC juntos](topic:several-models).
2. Abra {{ui:Control de interferencias}} en el panel izquierdo.
3. En {{ui:Revisar}} y {{ui:Contra}}, elija dos conjuntos: los elementos que seleccionó, una clase (en todos los modelos abiertos), un conjunto de búsqueda guardado (ver [Buscar elementos por clase, nombre o propiedad](topic:find)), o todo.
4. Defina cuánta superposición ignorar, en metros. 0,01 ignora los elementos que apenas se tocan.
5. Haga clic en {{ui:Ejecutar}}. La verificación corre en segundo plano; {{ui:Cancelar}} la detiene.
6. Haga clic en un resultado para verlo: los dos elementos quedan seleccionados y a la vista, todo lo demás transparente, y la vista se acerca a ellos.
7. Haga clic en {{ui:Hacer una incidencia}} bajo un resultado para redactarlo en la pestaña {{ui:Incidencias}}. Ver [Incidencias y archivos BCF](topic:issues-bcf).

## Mba'e rehecháta

- Las interferencias listadas con los nombres de ambos elementos (y sus archivos, cuando hay varios modelos abiertos) y cuánto se superponen, la más profunda primero.
- Las caras que solo se tocan, como un muro apoyado en una losa o una puerta en su abertura, no son interferencias.

## Aikuaa porã

- Esta es una verificación básica de interferencia dura: elementos cuyas superficies se cruzan. Un elemento escondido por completo dentro de otro (un caño embutido en un muro) todavía no se encuentra.
- La profundidad es cuánto se superponen, como mínimo, los límites de los dos elementos: es una guía, no una medida exacta.

## Upéi

- [Medir distancias, áreas de caras y ubicaciones en 3D](topic:measure)
- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
