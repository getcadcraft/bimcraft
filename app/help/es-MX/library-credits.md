---
title: Ver créditos de la biblioteca e iniciar sesión en la biblioteca
summary: Vea cada elemento de la biblioteca usado en un modelo con su licencia y atribución, copie los créditos o descárguelos junto con la cédula, e inicie sesión para ver los elementos de su equipo.
keywords: créditos, atribución, licencia, cc by, cc0, derechos de autor, biblioteca del equipo, iniciar sesión, conectar, clave de acceso, cédula de equipos, csv
from: 81971658
---

## Qué hará

Dé crédito cuando una licencia lo pida y acceda a los elementos de la biblioteca de su equipo.

## Créditos de la biblioteca

1. Abra el modelo.
2. Haga clic en {{ui:Créditos}} en la barra de herramientas.
3. Lea la lista: cada elemento usado, su versión, licencia, atribución y los números de elemento con los que está colocado.
4. Haga clic en {{ui:Copiar créditos}} para copiar las líneas de atribución, o en {{ui:CSV con la cédula}} para obtener una hoja de cálculo con cada colocación y su crédito.

La licencia y la atribución también se muestran en {{ui:Propiedades}} cuando selecciona un elemento colocado, y se guardan en el IFC (`CadCraft_LibraryItem`), así que viajan con el archivo.

## La cédula de equipos de un modelo

Haga clic en {{ui:Equipos}} en la barra de herramientas. La cédula se genera a partir de los elementos de biblioteca colocados: número de elemento, cantidad, nombre, fabricante, modelo, datos eléctricos y sanitarios, agrupados por nivel. Se descarga como el mismo CSV que la cédula de un dibujo.

## Inicie sesión en la biblioteca

1. En la pestaña {{ui:Biblioteca}}, elija **Biblioteca**.
2. Haga clic en {{ui:Inicie sesión en la biblioteca}}. Se abre una ventana pequeña en este sitio.
3. Inicie sesión si se le pide y luego haga clic en **Conectar**. La ventana entrega a BimCraft una clave de biblioteca y puede cerrarla.

## Lo que debe ver

- "Sesión iniciada en la biblioteca" en la parte superior de la lista de Biblioteca. Los elementos de su equipo aparecen junto a los públicos.
- Los elementos que coloca se registran como usados, para que la biblioteca le avise cuando cambien.

## Conviene saber

- La clave se guarda solo en esta pestaña y termina al cerrarla. {{ui:Olvidar la sesión}} la elimina antes.
- La página de seguridad de su cuenta muestra la clave como "BimCraft library (browser)"; revóquela allí.
- No se envía nada de su modelo: solo qué elementos de biblioteca colocó.
