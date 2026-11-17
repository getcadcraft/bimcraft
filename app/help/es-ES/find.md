---
title: Buscar elementos por clase, nombre o propiedad
summary: Busque todos los elementos que cumplan una o varias reglas (su clase, nombre, tipo, nivel, material o cualquier valor de propiedad), selecciónelos todos y guarde las reglas como un conjunto de búsqueda con nombre.
keywords: buscar, búsqueda, filtrar, consulta, regla, conjunto de búsqueda, conjunto de selección, búsqueda guardada, propiedad, valor, clase, material, seleccionar todos
from: 3d293bc2
---

## Qué hará

Seleccione de una vez todos los elementos de un mismo tipo o con un mismo valor: todas las puertas, todos los muros del nivel 2, todos los elementos cuya resistencia al fuego sea EI60, todos los muros que cuestan más de una cantidad fijada.

## Pasos

1. Abra un modelo IFC.
2. Abra {{ui:Buscar}} en el panel izquierdo.
3. En la primera regla, elija una propiedad (primero las propias del elemento, como {{ui:Clase}} y {{ui:Nivel}}, y después los conjuntos de propiedades del modelo), la forma de comparar y un valor. El cuadro de valor sugiere los valores que tiene el modelo.
4. Para acotar la búsqueda, haga clic en {{ui:Agregar una regla}}. Elija {{ui:Todas las reglas}} si necesita que se cumplan todas, o {{ui:Cualquier regla}} si basta con una.
5. Haga clic en {{ui:Buscar}} o pulse {{key:Enter}} en un cuadro de valor. Lo que coincida quedará seleccionado.
6. Para conservar las reglas, haga clic en {{ui:Guardar como conjunto}}, escriba un nombre y vuelva a hacer clic en él. Más adelante, haga clic en el nombre de un conjunto para buscar con él.

## Qué debería ver

- Las coincidencias seleccionadas en la vista 3D y en el árbol del modelo, y en {{ui:Propiedades}} el número de coincidencias por clase. Pulse {{key:I}} para mostrar solo ellas, y {{key:H}} para ocultarlas.
- Las palabras coinciden sin distinguir mayúsculas de minúsculas. Los números se comparan como números: "es mayor que 1000" compara el valor, no el texto.
- {{ui:tiene un valor}} y {{ui:no tiene valor}} no necesitan un valor: encuentran lo que está rellenado o lo que falta.
- Los conjuntos guardados permanecen en este navegador para todos los modelos que abra.

## Errores habituales

- **No se encuentra nada.** Una regla necesita un valor que pueda coincidir: revise las sugerencias del cuadro de valor.
- **Falta una propiedad en la lista.** Ningún elemento con forma en este modelo la tiene.

## Siguiente

- [Colorear elementos según una propiedad](topic:color-by-property)
- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
