---
title: Crear una tabla de equipos y exportar CSV
summary: Convierta las etiquetas de elementos de un plano de hostelería en una tabla de equipos, fíltrela, vaya a cada elemento en su hoja y descárguela como CSV.
keywords: equipos, tabla de equipos, hostelería, cocina, etiquetas de elementos, kcl, atributos, bom, lista de materiales, csv, hoja de cálculo, exportar, extracción de datos
from: e3faa1c8
---

## Lo que hará

Lea la lista de equipos de un plano de cocina o de hostelería, compruébela, localice cada elemento en el plano y descárguela como archivo de hoja de cálculo.

Esto funciona en planos cuyas etiquetas de equipo llevan sus datos como atributos de bloque, como lo hacen bibliotecas de diseño de cocinas como KCL: cada etiqueta contiene el número de elemento (`KCL-ITEM`), la cantidad, la categoría, el fabricante, el modelo, los datos eléctricos y de fontanería, y las observaciones. Otros planos no tienen la pestaña {{ui:Equipos}}.

## Pasos

1. Abra el plano, idealmente desde su carpeta de proyecto, para que también se carguen sus planos vinculados.
2. Haga clic en la pestaña {{ui:Equipos}} sobre el plano. Su etiqueta indica cuántos elementos hay en hojas, por ejemplo "Equipos (88)".
3. Lea la tabla: **Elemento**, **Cant.**, **Equipo**, **Fabricante**, **Modelo**, **Eléctrico**, **Fontanería** y **Ubicación**.
4. Elija qué listar en el menú sobre la tabla: **Todas las hojas**, una hoja, **En ninguna hoja** o **Todo lo etiquetado en el plano**. Cada opción muestra su recuento.
5. Escriba en el cuadro de filtro ("Filtro: categoría, fabricante, modelo…") para reducir la lista, por ejemplo `refrigerador` o `208`.
6. Haga clic en el nombre de la hoja de un elemento, en la columna **Ubicación**.
7. Mire el plano: BimCraft cambia a esa hoja, amplía el elemento y dibuja un anillo alrededor. La línea de estado dice "Elemento *n*, *categoría* está rodeado en *hoja*."
8. Haga clic en {{ui:Equipos}} para volver a la tabla.
9. Haga clic en {{ui:Descargar CSV}}.

## Qué debería ver

- Un archivo llamado "*nombre del plano* equipment.csv" (con el nombre de la hoja entre corchetes si listó una sola hoja) en su carpeta de descargas. Se abre en Excel, Numbers, LibreOffice o Google Sheets.
- La línea de estado: "Descargado *nombre de archivo* (*n* elementos)."

El CSV tiene estas columnas: Elemento, Cant., Categoría, Fabricante, Modelo, Eléctrico, Fontanería, Observaciones, Observaciones eléctricas, Observaciones de fontanería, Hojas y Colocadas (número de etiquetas). Descarga exactamente las filas que muestra la tabla, después del menú y del filtro.

## Cómo se construye la tabla

- Se lee de las **propias etiquetas**, no de la tabla de equipos dibujada en la hoja. La nota sobre la tabla indica cuántas etiquetas se leyeron.
- Una fila es un número de elemento con un conjunto de datos. Su cantidad es la **suma** de sus etiquetas, como la cuenta una tabla impresa: estanterías etiquetadas "5" en un sitio y "3" en otro suman 8, y se muestran como "5 + 3".
- **Ubicación** lista las hojas que muestran cada elemento, según lo que muestran las ventanas gráficas de cada hoja, que es lo que se imprime. "Solo modelo" significa que ninguna hoja lo muestra.
- **Número usado dos veces** marca un número de elemento en dos equipos distintos. La fila lleva una marca ámbar.
- Las etiquetas que ninguna hoja muestra se separan bajo **En ninguna hoja**. Suelen ser restos de planos anteriores u otros trabajos, y nunca se mezclan en **Todas las hojas**.
- **Eléctrico** muestra amperios, kW, HP, voltios, fase, conexión y enchufe tal como están etiquetados. **Fontanería** muestra los tamaños de conexión: CW agua fría, HW agua caliente, DD desagüe directo, ID desagüe indirecto, y gas. Otros campos de etiqueta todavía no se muestran.

## Errores habituales

- **No hay pestaña {{ui:Equipos}}.** El plano no tiene etiquetas `KCL-ITEM`, o su equipo está dibujado sin datos. No hay nada que leer.
- **Los recuentos no coinciden con la tabla impresa.** Una tabla impresa puede incluir números de repuesto o usar nombres más cortos que las etiquetas. Fíese de las etiquetas para lo colocado y compruebe las diferencias con el diseñador.
- **Al abrir el CSV aparecen caracteres extraños.** El archivo está en UTF-8. Ábralo con el comando de importación de su hoja de cálculo y elija UTF-8 si el programa lo pide.
- **Una celda empieza por un apóstrofo.** Los valores que empiezan por `=`, `+`, `-` o `@` llevan un `'` delante para que las hojas de cálculo no los ejecuten como fórmulas.
- **{{key:F}} y {{key:P}} no hacen nada.** Actúan sobre el plano, no sobre la tabla. Haga clic antes en una pestaña de hoja.
