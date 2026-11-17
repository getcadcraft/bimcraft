---
title: Cimentación bajo los muros
summary: Coloque una losa sobre el terreno, muros de desplante con losa, un entrepiso ventilado o un sótano bajo un edificio con un clic; las zapatas se dimensionan según los muros y el número de niveles, y la cimentación se actualiza cuando se mueven los muros.
keywords: cimentación, zapata, losa sobre el terreno, borde engrosado, losa monolítica, muro de desplante, entrepiso ventilado, sótano, muro de sótano, heladas, concreto, ancho de zapata
from: c0e20172
---

## Qué va a hacer

Dé al edificio una cimentación que coincida con sus muros. BimCraft sigue el exterior de los muros, dimensiona las zapatas según el tipo de muro y cuántos niveles se apoyan en ellas, y vuelve a generar la cimentación cada vez que cambian los muros.

## Colocar una cimentación

1. En el nivel cuyos muros se apoyan en ella (normalmente el primero), abra {{ui:Compilación}} y elija {{ui:Cimentación}}.
2. Elija el tipo:
   - **Losa sobre el terreno**: una losa de concreto de 4" cuya parte superior es el piso, con un borde engrosado bajo los muros.
   - **Muros de desplante y losa**: muros de cimentación hasta el piso, sobre zapatas, con una losa dentro de ellos.
   - **Entrepiso ventilado**: muros de cimentación que terminan bajo la estructura del piso, sobre zapatas, sin losa.
   - **Sótano**: muros de cimentación de altura completa sobre zapatas, con losa de sótano, bajo la estructura del piso.
3. Apunte dentro del edificio: las zapatas se muestran con línea discontinua y su tamaño. Haga clic.

Hacer clic en un edificio que ya tiene cimentación la selecciona, así puede cambiarla en lugar de agregar una segunda.

## Cambiarla

Seleccione la cimentación (haga clic dentro del edificio con {{ui:Cimentación}}, o haga clic en cualquiera de sus partes en la vista 3D o en el árbol del modelo) y cámbiela en **Propiedades**: el tipo, el ancho y la profundidad de la zapata, qué tan abajo está su cara inferior, el espesor del muro, qué tanto bajo el piso terminan los muros, la altura del sótano y el espesor de la losa. Cada cambio es un paso de deshacer.

Las dimensiones marcadas **auto** provienen de los muros: zapatas de 12", 15" o 23" de ancho para uno, dos o tres niveles sobre losa o muros de desplante; 18", 22" o 27" sobre entrepiso ventilado o sótano; y 4" más anchas bajo muros de mampostería o concreto. Escriba una dimensión para fijar la suya; escriba `0` para volver a **auto**.

:::warning
Las dimensiones automáticas son valores predeterminados rotulados para casas típicas de entramado ligero; no son ingeniería. Un diseñador o ingeniero revisa las zapatas, las profundidades y los muros según el suelo, la profundidad de heladas y las cargas.
:::

## Qué se guarda

Una cimentación se guarda como un ensamblaje de elementos IFC («Cimentación») formado por una zapata (o el borde engrosado de una losa), un muro de cimentación y una losa según lo requiera su tipo, todo de concreto, cada uno con sus cantidades: longitudes, anchos, alturas, áreas y volúmenes, listos para las cuantificaciones.

## Conviene saber

- Mueva, agregue o elimine muros y la cimentación bajo ellos se vuelve a generar; si dibuja muros en el nivel superior, las zapatas de abajo se ensanchan por el nivel extra.
- {{key:Delete}} elimina una cimentación seleccionada con todas sus partes.
- Con el terreno del sitio en el modelo (vea [El terreno del sitio, la plataforma del edificio y la pavimentación](topic:terrain)), los muros de desplante y las zapatas del entrepiso bajan con él en escalones de 8".
- Todavía no se generan las zapatas bajo muros interiores.
