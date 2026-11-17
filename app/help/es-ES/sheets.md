---
title: Alzados, secciones y hojas
summary: Dibuje líneas de sección en la planta y abra Hojas para obtener un juego listo para imprimir hecho a partir del modelo: plantas de cada nivel, los cuatro alzados, secciones de edificio, tablas y entramado de muros, con cajetines y escalas, como un único PDF.
keywords: hojas, juego de dibujos, documentación de obra, imprimir, trazar, pdf, alzado, alzados, alzado norte, sección, sección de edificio, línea de sección, cortar, líneas ocultas, cajetín, número de hoja, escala, 1/4" = 1'-0", 1:50, 1:100, papel, 11x17, 24x36, A3, A1, juego para licencia de obra
from: 91ed0cde
---

## Qué hará

Haga un juego de dibujos a partir del modelo: la planta de cada nivel, los alzados norte, este, sur y oeste, una sección de edificio por cada línea de sección, las tablas de puertas, ventanas, habitaciones y madera, y un alzado de cada muro con entramado. El juego se vuelve a dibujar a partir del modelo cada vez que lo abre, así que siempre coincide con lo que construyó.

## Dibujar una línea de sección

1. En una planta, abra {{ui:Compilación}} y elija {{ui:Línea de sección}}.
2. Haga clic donde empieza la línea y donde termina. El trazo corto en su punto medio indica el lado hacia el que mira la sección: la izquierda de la línea, yendo del primer clic al segundo.
3. La línea aparece en la planta con sus extremos y su letra (A, luego B, y así sucesivamente).

Designe la línea para cambiarla en **Propiedades**: su letra, **Invertir la vista** para mirar en la otra dirección, y **Mirar hasta** para detener la vista a una distancia fijada detrás del corte (0 muestra todo lo que hay detrás). Pulse {{key:Delete}} para eliminarla.

## Abrir las hojas

1. Haga clic en {{ui:Hojas}} en la barra del modelo (junto a {{ui:Imprimir}}).
2. Las hojas aparecen en una lista a la izquierda: **A-101** y siguientes para plantas, **A-201** para alzados, **A-301** para secciones, **A-401** para tablas y **S-101** para entramado de muros. Haga clic en una para verla.
3. Elija el **Papel**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 o A1. El papel conserva su nombre estándar y su tamaño se escribe en las {{ui:Unidades}} que eligió, por ejemplo *Letter · 8.5 × 11 in* o *A3 · 297 × 420 mm*.
4. Haga clic en {{ui:Descargar el juego como PDF}}: una página por hoja.

## Notas estándar de un paquete normativo

En una hoja, {{ui:Notas estándar}} le permite colocar notas de un paquete normativo (por disciplina) en la columna derecha de la hoja. Cada nota conserva el paquete y la cláusula de los que procede, y la hoja impresa indica cuándo ese paquete no está verificado. Las notas son un punto de partida: la persona responsable del dibujo decide lo que dicen. Necesitan el complemento de normativa de edificación.

## Lo que hay en las hojas

- **Las plantas** muestran muros, puertas, ventanas, habitaciones con sus áreas, cotas y líneas de sección, a la mayor escala estándar que quepa: 1/4" = 1'-0" o menor (1:50 o menor en milímetros).
- **Los alzados** se dibujan a partir del modelo 3D con las líneas ocultas eliminadas, dos por hoja, todos a la misma escala, con una línea de terreno debajo. La cubierta, las cimentaciones y el terreno se muestran tal como están modelados.
- **Las secciones** rellenan lo que atraviesa el corte (muros, forjados, cubierta) y dibujan lo que se ve más allá.
- **Alzados y secciones llevan sus notas:** una marca por cada nivel con su nombre y su altura a la derecha, la altura entre niveles a la izquierda, y en un alzado la anchura del edificio bajo él y una etiqueta (D1, W1) en cada puerta y ventana de un muro que mira hacia usted. Para los muros propios de una habitación, consulte [Alzados interiores](topic:interior-elevations).
- **Las tablas** son las mismas que {{ui:Tablas}} en la barra del modelo.
- **El entramado** muestra los montantes, soleras, dinteles y alféizares de cada muro con entramado tal como se ven desde su exterior, para que una cuadrilla pueda replantearlo. Consulte [Entramado de muros, forjados y cubiertas](topic:framing).

Cada hoja tiene un cajetín con su número, su título, el nombre del archivo y la fecha.

:::tip
Las hojas se generan a partir del modelo: para cambiar un dibujo, cambie el modelo y vuelva a abrir {{ui:Hojas}}.
:::

:::note
Los alzados y las secciones muestran solo líneas y rellenos: las cotas, las marcas de nivel y las notas sobre ellos todavía no están disponibles.
:::
