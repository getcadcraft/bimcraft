---
title: Crear una planilla de equipos y exportar CSV
summary: Convierta las etiquetas de ítems de un plano de servicio de comidas en una planilla de equipos, fíltrela, vaya a cada ítem en su hoja y descárguela como CSV.
keywords: equipos, planilla, servicio de comidas, cocina, etiquetas de ítems, kcl, atributos, bom, lista de materiales, csv, planilla de cálculo, exportar, extracción de datos
from: e3faa1c8
---

## Lo que hará

Leerá la lista de equipos de un plano de cocina o de servicio de comidas, la revisará, encontrará cada ítem en el plano y la descargará como archivo de planilla de cálculo.

Esto funciona en planos cuyas etiquetas de equipos llevan sus datos como atributos de bloque, como lo hacen bibliotecas de diseño de cocinas como KCL: cada etiqueta contiene el número de ítem (`KCL-ITEM`), cantidad, categoría, fabricante, modelo, datos eléctricos y sanitarios, y observaciones. Otros planos no tienen una pestaña de {{ui:Equipment}}.

## Pasos

1. Abra el plano, idealmente desde su carpeta de proyecto para que también carguen sus planos vinculados.
2. Haga clic en la pestaña {{ui:Equipment}} encima del plano. Su rótulo indica cuántos ítems están en hojas, por ejemplo "Equipos (88)".
3. Lea la planilla: **Ítem**, **Cant.**, **Equipo**, **Fabricante**, **Modelo**, **Eléctrico**, **Sanitaria** y **Ubicación**.
4. Elija qué listar en el menú sobre la tabla: **Todas las hojas**, una hoja, **Fuera de toda hoja** o **Todo lo etiquetado en el plano**. Cada opción muestra su cantidad.
5. Escriba en el cuadro de filtro ("Filtro: categoría, fabricante, modelo…") para reducir la lista, por ejemplo `refrigerador` o `208`.
6. Haga clic en el nombre de hoja de un ítem en la columna **Ubicación**.
7. Mire el plano: BimCraft cambia a esa hoja, acerca la vista al ítem y dibuja un anillo a su alrededor. La línea de estado dice "El ítem *n*, *categoría* está marcado con un anillo en *hoja*."
8. Haga clic en {{ui:Equipment}} para volver a la planilla.
9. Haga clic en {{ui:Download CSV}}.

## Lo que debe ver

- Un archivo llamado "*nombre del plano* equipment.csv" (con el nombre de la hoja entre corchetes cuando listó una sola hoja) en su carpeta de descargas. Se abre en Excel, Numbers, LibreOffice o Google Sheets.
- La línea de estado: "Descargado *nombre de archivo* (*n* ítems)."

El CSV tiene estas columnas: Ítem, Cant., Categoría, Fabricante, Modelo, Eléctrico, Sanitaria, Observaciones, Observaciones eléctricas, Observaciones sanitarias, Hojas, Colocado (cuántas etiquetas). Descarga exactamente las filas que muestra la tabla, después del menú y del filtro.

## Cómo se arma la planilla

- Se lee de las **propias etiquetas**, no de la tabla de planilla dibujada en la hoja. La nota sobre la tabla indica cuántas etiquetas se leyeron.
- Una fila es un número de ítem con un conjunto de datos. Su cantidad es la **suma** de sus etiquetas, como la cuenta una planilla impresa: estantería etiquetada "5" en un lugar y "3" en otro da 8, mostrado como "5 + 3".
- **Ubicación** lista las hojas que muestran cada ítem, calculado según lo que muestran las ventanas gráficas de cada hoja, que es lo que se imprime. "Solo modelo" significa que ninguna hoja lo muestra.
- **Número usado dos veces** marca un número de ítem en dos equipos distintos. La fila lleva una marca ámbar.
- Las etiquetas que ninguna hoja muestra se separan bajo **Fuera de toda hoja**. Suelen quedar de planos anteriores u otras obras, y nunca se mezclan en **Todas las hojas**.
- **Eléctrico** muestra amperios, kW, HP, voltios, fase, conexión y enchufe tal como están etiquetados. **Sanitaria** muestra tamaños de conexión: CW agua fría, HW agua caliente, DD desagüe directo, ID desagüe indirecto, y gas. Los demás campos de la etiqueta todavía no se muestran.

## Errores comunes

- **No hay pestaña {{ui:Equipment}}.** El plano no tiene etiquetas `KCL-ITEM`, o sus equipos están dibujados sin datos. No hay nada que leer.
- **Las cantidades difieren de la planilla impresa.** Una planilla impresa puede listar números de repuesto o usar nombres más cortos que las etiquetas. Confíe en las etiquetas para saber qué está colocado; revise las diferencias con el diseñador.
- **Al abrir el CSV aparecen caracteres raros.** El archivo está en UTF-8. Ábralo con el comando de importación de su planilla y elija UTF-8 si el programa lo pide.
- **Una celda empieza con apóstrofe.** Los valores que empiezan con `=`, `+`, `-` o `@` reciben un `'` al inicio para que las planillas no los ejecuten como fórmulas.
- **{{key:F}} y {{key:P}} no hacen nada.** Actúan sobre el plano, no sobre la planilla. Haga clic antes en una pestaña de hoja.
