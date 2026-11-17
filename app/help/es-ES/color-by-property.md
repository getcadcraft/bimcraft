---
title: Colorear los elementos por una propiedad
summary: Pinte cada elemento según el valor de una propiedad, como su clase, tipo, nivel, material, clasificación de resistencia al fuego o coste; lea la leyenda, haga clic en un valor para mostrar solo esos elementos y guarde los colores como un esquema para usar en otros modelos.
keywords: color, colorear, color por, leyenda, vista inteligente, apariencia, propiedad, tipo, material, resistencia al fuego, filtro, aislar, tema, valores, esquema, esquema de colores, guardar colores, reutilizar, equipo, json, muestra
from: f081d343
---

## Lo que hará

Vea de un vistazo cómo se reparte una propiedad por el modelo: qué muros son exteriores, qué materiales se usan en cada sitio, qué elementos no tienen resistencia al fuego. Cada elemento toma el color de su valor, y la leyenda indica qué significa cada color y cuántos elementos lo tienen.

## Pasos

1. Abra un modelo IFC.
2. Haga clic en la pestaña {{ui:Color}} de la derecha.
3. Elija una propiedad de la lista. Las primeras pertenecen a todos los elementos ({{ui:Class}}, {{ui:Type}}, {{ui:Storey}}, {{ui:Material}}, {{ui:Name}}…); el resto proceden de los conjuntos de propiedades y de cantidades del modelo, bajo el nombre del conjunto. El número que aparece tras cada una indica cuántos elementos la tienen.
4. Lea la leyenda: un color, el valor y cuántos elementos lo tienen.
5. Haga clic en un valor para mostrar solo esos elementos. Mantenga pulsado {{key:Mod}} y haga clic para añadir más valores. Pulse {{key:Shift+H}} para volver a mostrar todo.
6. Haga clic en {{ui:Off}} para volver a los colores propios del modelo.

## Lo que debe ver

- Hasta siete valores reciben cada uno su color, empezando por el más frecuente. Los demás comparten un gris, indicado como **otros valores**.
- Un número con muchos valores distintos se divide en seis rangos iguales, de claro (bajo) a oscuro (alto).
- Los elementos sin la propiedad aparecen en gris pálido, indicados como **Sin valor**, para que destaquen los coloreados.
- Los colores cambian con Papel y Modelo, y se mantienen mientras edita el modelo.
- La propiedad de un tipo cuenta para todos los elementos de ese tipo; si un elemento tiene su propio valor para la misma propiedad, prevalece su valor propio.

## Cambiar colores y conservarlos como esquema

- Haga clic en la muestra de color de un valor en la leyenda para elegir otro color. El modelo se repinta al instante.
- {{ui:Save scheme}} descarga los colores como un pequeño archivo `.json` con el nombre de la propiedad, por ejemplo `Class colors.json`.
- En otro modelo, o en el ordenador de un compañero, haga clic en {{ui:Open scheme…}} y elija ese archivo. Cada valor del esquema recibe su color, de modo que la misma resistencia al fuego o el mismo sistema tienen el mismo color en todos los modelos.
- Un valor que el esquema no tiene se pinta de gris y aparece como "no está en el esquema"; los valores del esquema que este modelo no tiene siguen listados con 0, para que vea el esquema completo.
- Un esquema conserva sus colores en ambos temas. Al elegir una propiedad en la lista, se vuelve a partir de los colores automáticos.

## Errores habituales

- **"Este modelo no tiene valores de …".** El esquema se guardó para una propiedad que este modelo no tiene (por ejemplo, otro nombre de conjunto de propiedades). Abra un esquema creado para este tipo de modelo, o elija una propiedad de la lista.

- **Falta una propiedad en la lista.** Ningún elemento con forma del modelo la tiene. Las propiedades de los propios niveles y espacios no aparecen en la lista.
- **Todo tiene el mismo color.** Todos los elementos tienen el mismo valor, o ninguno: mire los recuentos de la leyenda.

## Siguiente

- [Ocultar, aislar y ver a través de elementos](topic:hide-and-isolate)
- [Oriéntese con el árbol del modelo](topic:model-tree)
