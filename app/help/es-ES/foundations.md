---
title: Cimentación bajo los muros
summary: Coloque una losa sobre el terreno, muros de cimentación con losa, un espacio bajo forjado o un sótano bajo un edificio con un solo clic; las zapatas se dimensionan a partir de los muros y del número de plantas, y la cimentación sigue a los muros cuando se mueven.
keywords: cimentación, zapata, losa sobre el terreno, borde engrosado, losa monolítica, muro de cimentación, espacio bajo forjado, sótano, muro de sótano, helada, hormigón, ancho de zapata
from: c0e20172
---

## Qué hará

Dé al edificio una cimentación acorde con sus muros. BimCraft sigue el exterior de los muros, dimensiona las zapatas según el tipo de muro y el número de plantas que se apoyan en ellas, y vuelve a generar la cimentación cada vez que cambian los muros.

## Colocar una cimentación

1. En el nivel cuyos muros se apoyan en ella (normalmente el primero), abra {{ui:Compilación}} y elija {{ui:Cimentación}}.
2. Elija el tipo:
   - **Losa sobre el terreno**: una losa de hormigón de 4" cuya cara superior es el piso, con un borde engrosado bajo los muros.
   - **Muros de cimentación y losa**: muros de cimentación hasta el piso sobre zapatas, con una losa dentro de ellos.
   - **Espacio bajo forjado**: muros de cimentación que se detienen bajo la estructura del piso, sobre zapatas, sin losa.
   - **Sótano**: muros de cimentación de altura completa sobre zapatas, con una losa de sótano, bajo la estructura del piso.
3. Sitúe el cursor dentro del edificio: las zapatas aparecen a trazos con su tamaño. Haga clic.

Hacer clic en un edificio que ya tiene cimentación la selecciona, así puede cambiarla en lugar de añadir una segunda.

## Cambiarla

Seleccione la cimentación (haciendo clic dentro del edificio con {{ui:Cimentación}}, o haciendo clic en cualquiera de sus partes en la vista 3D o en el árbol del modelo) y cámbiela en **Propiedades**: el tipo, el ancho y la profundidad de la zapata, la profundidad de su cara inferior, el espesor del muro, cuánto bajo el piso se detienen los muros, la altura del sótano y el espesor de la losa. Cada cambio es un paso de deshacer.

Los tamaños marcados **auto** vienen de los muros: zapatas de 12", 15" o 23" de ancho para una, dos o tres plantas sobre losa o muros de cimentación; de 18", 22" o 27" sobre un espacio bajo forjado o un sótano; y 4" más anchas bajo muros de mampostería u hormigón. Escriba un tamaño para fijar el suyo; escriba `0` para volver a auto.

:::warning
Los tamaños automáticos son valores predeterminados etiquetados para casas típicas de entramado ligero, no cálculos de ingeniería. Un proyectista o un ingeniero comprueba las zapatas, las profundidades y los muros según el terreno, la profundidad de helada y las cargas.
:::

## Qué se guarda

Una cimentación se guarda como un conjunto de elementos IFC ("Foundation") formado por una zapata (o el borde engrosado de una losa), un muro de cimentación y una losa según requiera su tipo, todos de hormigón, cada uno con sus cantidades: longitudes, anchos, alturas, superficies y volúmenes, listos para las mediciones.

## Conviene saber

- Mover, añadir o borrar muros vuelve a generar la cimentación situada bajo ellos; si dibuja muros en el nivel superior, las zapatas inferiores se ensanchan para la planta adicional.
- {{key:Delete}} elimina una cimentación seleccionada con todas sus partes.
- Con el terreno del emplazamiento en el modelo (véase [El terreno del emplazamiento, la plataforma del edificio y la pavimentación](topic:terrain)), los muros de cimentación y las zapatas de espacio bajo forjado bajan con él en escalones de 8".
- Las zapatas bajo muros interiores todavía no se generan.
