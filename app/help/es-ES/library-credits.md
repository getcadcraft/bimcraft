---
title: Listar créditos de la biblioteca e iniciar sesión en la biblioteca
summary: Vea cada elemento de la biblioteca usado en un modelo con su licencia y atribución, copie los créditos o descárguelos con la tabla, e inicie sesión para ver los elementos de su equipo.
keywords: créditos, atribución, licencia, cc by, cc0, derechos de autor, biblioteca de equipo, iniciar sesión, conectar, token, tabla de equipos, csv
from: 81971658
---

## Qué va a hacer

Dé crédito cuando una licencia lo exija, y acceda a los elementos propios de su equipo en la biblioteca.

## Créditos de la biblioteca

1. Abra el modelo.
2. Pulse {{ui:Créditos}} en la barra de herramientas.
3. Lea la lista: cada elemento usado, su versión, licencia, atribución y los números de elemento con que está colocado.
4. Pulse {{ui:Copiar créditos}} para copiar las líneas de atribución, o {{ui:CSV con la cédula}} para obtener una hoja de cálculo con cada colocación y su crédito.

La licencia y la atribución también aparecen en {{ui:Propiedades}} al seleccionar un elemento colocado, y se guardan en el IFC (`CadCraft_LibraryItem`), de modo que viajan con el archivo.

## La tabla de equipos de un modelo

Pulse {{ui:Equipos}} en la barra de herramientas. La tabla se genera a partir de los elementos de biblioteca colocados: número de elemento, cantidad, nombre, fabricante, modelo, datos eléctricos y de fontanería, agrupados por planta. Se descarga como el mismo CSV que la tabla de un dibujo.

## Iniciar sesión en la biblioteca

1. En la pestaña {{ui:Biblioteca}}, elija **Biblioteca**.
2. Pulse {{ui:Inicie sesión en la biblioteca}}. Se abre una pequeña ventana en este sitio.
3. Inicie sesión si se le pide y, después, pulse **Conectar**. La ventana entrega a BimCraft una clave de la biblioteca y puede cerrarla.

## Qué debería ver

- "Sesión iniciada en la biblioteca" en la parte superior de la lista Biblioteca. Los elementos de su equipo aparecen junto a los públicos.
- Los elementos que coloca quedan registrados como usados, para que la biblioteca le avise cuando cambien.

## Conviene saber

- La clave se guarda solo en esta pestaña y termina al cerrarla. {{ui:Olvidar la sesión}} la elimina antes.
- La página de seguridad de su cuenta muestra la clave como "BimCraft library (browser)"; revóquela allí.
- No se envía nada de su modelo: solo qué elementos de la biblioteca ha colocado.
