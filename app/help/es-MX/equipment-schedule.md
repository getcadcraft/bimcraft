---
title: Crear una tabla de equipos y exportar CSV
summary: Convierta las etiquetas de elementos de un dibujo de servicio de alimentos en una tabla de equipos, fíltrela, vaya a cada elemento en su hoja y descárguela como CSV.
keywords: equipos, tabla de equipos, servicio de alimentos, cocina, etiquetas de elementos, kcl, atributos, lista de materiales, bom, csv, hoja de cálculo, exportar, extracción de datos
from: e3faa1c8
---

## Qué va a hacer

Leerá la lista de equipos de un dibujo de cocina o de servicio de alimentos, la revisará, localizará cada elemento en el plano y la descargará como archivo de hoja de cálculo.

Esto funciona en dibujos cuyas etiquetas de equipo llevan sus datos como atributos de bloque, como lo hacen bibliotecas de diseño de cocinas como KCL: cada etiqueta contiene el número de partida (`KCL-ITEM`), cantidad, categoría, fabricante, modelo, datos eléctricos y de plomería, y observaciones. Otros dibujos no tienen pestaña {{ui:Equipment}}.

## Pasos

1. Abra el dibujo, idealmente desde su carpeta de proyecto para que también carguen sus dibujos vinculados.
2. Haga clic en la pestaña {{ui:Equipment}} sobre el dibujo. Su etiqueta muestra cuántos elementos hay en hojas, por ejemplo "Equipos (88)".
3. Lea la tabla: **Partida**, **Cant.**, **Equipo**, **Fabricante**, **Modelo**, **Eléctrico**, **Plomería** y **Dónde**.
4. Elija qué listar en el menú sobre la tabla: **Cada hoja**, una hoja, **No está en ninguna hoja** o **Todo lo etiquetado en el dibujo**. Cada opción muestra su conteo.
5. Escriba en el cuadro de filtro ("Filtrar: categoría, fabricante, modelo…") para reducir la lista, por ejemplo `refrigerador` o `208`.
6. Haga clic en el nombre de la hoja de un elemento en la columna **Dónde**.
7. Mire el dibujo: BimCraft cambia a esa hoja, acerca el zoom al elemento y dibuja un anillo alrededor. La línea de estado dice "El elemento *n*, *categoría* está marcado con un anillo en *hoja*."
8. Haga clic en {{ui:Equipment}} para volver a la tabla.
9. Haga clic en {{ui:Download CSV}}.

## Qué debe ver

- Un archivo llamado "*nombre del dibujo* equipment.csv" (con el nombre de la hoja entre corchetes cuando listó una sola hoja) en su carpeta de descargas. Se abre en Excel, Numbers, LibreOffice o Google Sheets.
- La línea de estado: "Descargado *nombre del archivo* (*n* elementos)."

El CSV tiene estas columnas: Partida, Cant., Categoría, Fabricante, Modelo, Eléctrico, Plomería, Observaciones, Observaciones eléctricas, Observaciones de plomería, Hojas y Colocadas (cuántas etiquetas). Descarga exactamente las filas que muestra la tabla, después del menú y del filtro.

## Cómo se construye la tabla

- Se lee de las **etiquetas mismas**, no de la tabla de programa dibujada en la hoja. La nota sobre la tabla indica cuántas etiquetas se leyeron.
- Una fila es un número de partida con un solo conjunto de datos. Su cantidad es la **suma** de sus etiquetas, como cuenta una tabla impresa: estantes etiquetados "5" en un lugar y "3" en otro suman 8, y se muestran como "5 + 3".
- **Dónde** enumera las hojas que muestran cada elemento, calculado a partir de lo que muestran las ventanas gráficas de cada hoja, que es lo que se imprime. "Solo modelo" significa que ninguna hoja lo muestra.
- **Número usado dos veces** marca un número de partida en dos equipos distintos. La fila lleva una marca ámbar.
- Las etiquetas que ninguna hoja muestra se separan bajo **No está en ninguna hoja**. Suelen ser restos de planos anteriores u otros trabajos, y nunca se mezclan con **Cada hoja**.
- **Eléctrico** muestra amperes, kW, HP, volts, fase, conexión y clavija tal como están etiquetados. **Plomería** muestra tamaños de conexión: CW agua fría, HW agua caliente, DD desagüe directo, ID desagüe indirecto, y gas. Otros campos de la etiqueta todavía no se muestran.

## Errores comunes

- **Sin pestaña {{ui:Equipment}}.** El dibujo no tiene etiquetas `KCL-ITEM`, o su equipo está dibujado sin datos. No hay nada que leer.
- **Los conteos difieren de la tabla impresa.** Una tabla impresa puede listar números de repuesto o usar nombres más cortos que las etiquetas. Confíe en las etiquetas para lo colocado; revise las diferencias con el diseñador.
- **Al abrir el CSV aparecen caracteres extraños.** El archivo está en UTF-8. Ábralo con el comando de importación de su hoja de cálculo y elija UTF-8 si el programa lo pide.
- **Una celda empieza con un apóstrofo.** Los valores que empiezan con `=`, `+`, `-` o `@` llevan un `'` al inicio para que las hojas de cálculo no los ejecuten como fórmulas.
- **{{key:F}} y {{key:P}} no hacen nada.** Actúan sobre el dibujo, no sobre la tabla. Haga clic primero en una pestaña de hoja.
