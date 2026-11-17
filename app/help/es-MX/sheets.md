---
title: Elevaciones, secciones y hojas
summary: Dibuje líneas de sección en la planta y luego abra Hojas para obtener un juego listo para imprimir hecho a partir del modelo: plantas de cada nivel, las cuatro elevaciones, secciones del edificio, tablas y entramado de muros, con cajetines y escalas, como un solo PDF.
keywords: hojas, juego de planos, documentos de construcción, imprimir, trazar, pdf, elevación, elevaciones, elevación norte, sección, sección de edificio, línea de sección, corte, líneas ocultas, cajetín, número de hoja, escala, 1/4" = 1'-0", 1:50, 1:100, papel, 11x17, 24x36, A3, A1, juego para permiso
from: 91ed0cde
---

## Lo que hará

Haga un juego de planos a partir del modelo: la planta de cada nivel, las elevaciones norte, este, sur y oeste, una sección del edificio por cada línea de sección, las tablas de puertas, ventanas, habitaciones y madera, y una elevación de cada muro con entramado. El juego se vuelve a dibujar a partir del modelo cada vez que lo abre, así que siempre coincide con lo que construyó.

## Dibujar una línea de sección

1. En un nivel, abra {{ui:Compilación}} y elija {{ui:Línea de sección}}.
2. Haga clic donde empieza la línea y donde termina. La línea corta en su punto medio indica el lado hacia el que mira la sección: la izquierda de la línea, yendo del primer clic al segundo.
3. La línea aparece en la planta con sus extremos y su letra (A, luego B, y así sucesivamente).

Designe la línea para cambiarla en **Propiedades**: su letra, **Voltear la vista** para mirar en sentido contrario, y **Mirar hasta** para detener la vista a una distancia determinada detrás del corte (0 muestra todo lo que hay detrás). Pulse {{key:Delete}} para eliminarla.

## Abrir las hojas

1. Haga clic en {{ui:Hojas}} en la barra del modelo (junto a {{ui:Imprimir}}).
2. Las hojas aparecen en la lista a la izquierda: **A-101** y siguientes para plantas, **A-201** para elevaciones, **A-301** para secciones, **A-401** para tablas y **S-101** para entramado de muros. Haga clic en una para verla.
3. Elija el **Papel**: Carta, Tabloide (11 × 17), Arch D (24 × 36), A3 o A1. El papel conserva su nombre estándar y su tamaño se escribe en las {{ui:Unidades}} que eligió, por ejemplo *Carta · 8.5 × 11 in* o *A3 · 297 × 420 mm*.
4. Haga clic en {{ui:Descargar el juego como PDF}}: una página por hoja.

## Notas estándar de un paquete de normativa

En una hoja, {{ui:Notas estándar}} le permite colocar notas de un paquete de normativa (por disciplina) en la columna derecha de la hoja. Cada nota conserva el paquete y la cláusula de donde viene, y la hoja impresa indica cuándo ese paquete no está verificado. Las notas son un punto de partida: la persona responsable del dibujo decide lo que dicen. Requieren el complemento Reglamentos de construcción.

## Qué hay en las hojas

- **Plantas** muestran muros, puertas, ventanas, habitaciones con sus áreas, cotas y líneas de sección, a la escala estándar más grande que quepa: 1/4" = 1'-0" o menor (1:50 o menor en milímetros).
- **Elevaciones** se dibujan a partir del modelo 3D con las líneas ocultas eliminadas, dos por hoja, todas a la misma escala, con una línea de terreno debajo. La cubierta, las cimentaciones y el terreno se muestran tal como están modelados.
- **Secciones** rellenan lo que atraviesa el corte (muros, pisos, cubierta) y dibujan lo que se ve más allá.
- **Elevaciones y secciones llevan sus notas:** una marca por cada nivel con su nombre y altura a la derecha, la altura entre niveles a la izquierda, y en una elevación el ancho del edificio debajo y una etiqueta (D1, W1) en cada puerta y ventana de un muro que le da frente. Para los muros propios de una habitación, vea [Elevaciones interiores](topic:interior-elevations).
- **Tablas** son las mismas tablas que {{ui:Tablas}} en la barra del modelo.
- **Entramado** muestra los montantes, soleras, dinteles y alféizares de cada muro con entramado, vistos desde su exterior, para que una cuadrilla pueda trazarlo. Vea [Entramado de muros, pisos y cubiertas](topic:framing).

Cada hoja tiene un cajetín con su número, su título, el nombre del archivo y la fecha.

:::tip
Las hojas salen del modelo: para cambiar un dibujo, cambie el modelo y vuelva a abrir {{ui:Hojas}}.
:::

:::note
Las elevaciones y secciones muestran solo líneas y rellenos: las cotas, las marcas de nivel y las notas sobre ellas todavía no están disponibles.
:::
