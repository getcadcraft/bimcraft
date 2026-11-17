---
title: Elevaciones, cortes y hojas
summary: Dibujá líneas de corte sobre el plano, y después abrí Hojas para un juego listo para imprimir hecho a partir del modelo: planos de cada nivel, las cuatro elevaciones, cortes de edificio, planillas y estructura de muros, con cajetines y escalas, en un solo PDF.
keywords: hojas, juego de dibujos, documentos de construcción, imprimir, trazar, pdf, elevación, elevaciones, elevación norte, corte, cortes, corte de edificio, línea de corte, cortar, líneas ocultas, cajetín, número de hoja, escala, 1/4" = 1'-0", 1:50, 1:100, papel, 11x17, 24x36, A3, A1, juego para permiso
from: 91ed0cde
---

## Lo que vas a hacer

Hacer un juego de dibujos a partir del modelo: el plano de cada nivel, las elevaciones norte, este, sur y oeste, un corte de edificio por cada línea de corte, las planillas de puertas, ventanas, ambientes y madera, y una elevación de cada muro con estructura. El juego se vuelve a dibujar desde el modelo cada vez que lo abrís, así siempre coincide con lo que construiste.

## Dibujar una línea de corte

1. En un nivel, abrí {{ui:Build}} y elegí {{ui:Section line}}.
2. Hacé clic donde empieza la línea y donde termina. La línea corta en el medio muestra el lado hacia donde mira el corte: la izquierda de la línea, yendo del primer clic al segundo.
3. La línea aparece en el plano con sus extremos y su letra (A, después B, y así).

Seleccioná la línea para cambiarla en **Propiedades**: su letra, **Flip the view** para mirar en el otro sentido, y **Look as far as** para detener la vista a una distancia fija detrás del corte (0 muestra todo lo que queda detrás). Apretá {{key:Delete}} para quitarla.

## Abrir las hojas

1. Hacé clic en {{ui:Sheets}} en la barra del modelo (al lado de {{ui:Print}}).
2. Las hojas aparecen listadas a la izquierda: **A-101** y siguientes para planos, **A-201** para elevaciones, **A-301** para cortes, **A-401** para planillas y **S-101** para estructura de muros. Hacé clic en una para verla.
3. Elegí el **Paper**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 o A1. El papel conserva su nombre estándar y su tamaño se escribe en las {{ui:Units}} que elegiste, por ejemplo *Letter · 8.5 × 11 in* o *A3 · 297 × 420 mm*.
4. Hacé clic en {{ui:Download the set as PDF}}: una página por hoja.

## Notas estándar de un paquete de normativa

En una hoja, {{ui:Standard notes}} te permite poner notas de un paquete de normativa (por disciplina) en la columna derecha de la hoja. Cada nota guarda el paquete y la cláusula de donde viene, y la hoja impresa dice cuándo ese paquete no está verificado. Las notas son un punto de partida: la persona responsable del dibujo decide lo que dicen. Necesitan el complemento Building regulations.

## Qué hay en las hojas

- **Los planos** muestran muros, puertas, ventanas, ambientes con sus superficies, cotas y líneas de corte, en la mayor escala estándar que entra: 1/4" = 1'-0" o menor (1:50 o menor en milímetros).
- **Las elevaciones** se dibujan desde el modelo 3D con las líneas ocultas quitadas, dos por hoja, todas a la misma escala, con una línea de suelo debajo. El techo, las fundaciones y el terreno se muestran tal como están modelados.
- **Los cortes** llenan lo que atraviesa el corte (muros, pisos, techo) y dibujan lo que se ve más allá.
- **Las elevaciones y cortes llevan sus notas:** una marca por cada nivel con su nombre y altura a la derecha, la altura entre niveles a la izquierda, y en una elevación el ancho del edificio debajo y una etiqueta (D1, W1) en cada puerta y ventana de un muro que mira hacia vos. Para los muros propios de un ambiente, ver [Elevaciones interiores](topic:interior-elevations).
- **Las planillas** son las mismas tablas que {{ui:Schedules}} en la barra del modelo.
- **La estructura** muestra los montantes, soleras, dinteles y umbrales de cada muro con estructura, vistos desde su exterior, para que una cuadrilla pueda marcarlos. Ver [Estructura de muros, pisos y techos](topic:framing).

Cada hoja tiene un cajetín con su número, su título, el nombre del archivo y la fecha.

:::tip
Las hojas salen del modelo: para cambiar un dibujo, cambiá el modelo y volvé a abrir {{ui:Sheets}}.
:::

:::note
Las elevaciones y cortes muestran solo líneas y rellenos: las cotas, marcas de nivel y notas sobre ellos todavía no están hechas.
:::
