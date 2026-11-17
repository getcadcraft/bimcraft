---
title: "Documentos a partir del modelo"
summary: "Escriba una especificación o una descripción una vez como plantilla, con campos para cantidades, propiedades y etiquetas, y rellénela desde el IFC abierto como PDF o documento de Word."
keywords: documento, documentos, especificación, especificaciones, descripción, plantilla, markdown, informe, word, docx, pdf, cantidades, tabla, especialidad, tabla de puertas, acabados, documentcad
from: 2b0c9156
---

## Qué va a hacer

Una plantilla es un texto en Markdown con campos entre dobles llaves. BimCraft rellena los campos desde el modelo abierto (recuentos, cantidades por tipo, propiedades, sus [etiquetas](topic:tags-and-schedules)) y guarda el resultado como PDF, documento de Word (.docx) o Markdown.

## Pasos

1. Abra un modelo IFC.
2. En el panel izquierdo, en {{ui:Cantidades}}, abra {{ui:Documentos a partir del modelo}}.
3. Elija una plantilla: {{ui:Puertas y herrajes}} o {{ui:Muros, trasdosados y acabados}}, o {{ui:Cargar una plantilla (.md)…}} para una propia.
4. Si la plantilla lee etiquetas que el modelo aún no define, haga clic en {{ui:Añadir las etiquetas de esta plantilla}} y después etiquete elementos en {{ui:Etiquetas}}.
5. Cambie el texto como desee y haga clic en {{ui:Mostrar el documento}}.
6. Haga clic en {{ui:PDF}} (elija antes A4 o Letter) o en {{ui:Word (.docx)}}.

## Qué debe ver

- El documento rellenado debajo de los botones, con sus tablas.
- Una lista de avisos cuando un campo no se puede leer (una etiqueta no definida, una propiedad que el modelo no tiene, un bloque que nunca se cierra); ese campo se imprime como `[?…]`.
- Páginas PDF con el título del documento y «Página 1 de 3» al pie de cada página; las tablas largas continúan con su fila de encabezado.

## Campos

| Campo | Devuelve |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | el nombre y la descripción del proyecto, el nombre del archivo, la fecha de hoy |
| `{{count IfcDoor}}` | cuántas puertas hay |
| `{{sum IfcWall NetSideArea}}` | un total, con su unidad |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | operaciones aritméticas (`+ - * /` y paréntesis) sobre términos entre corchetes: `[sum …]`, `[count …]`, y dentro de un each `[qty Width]`. `round n` fija los decimales, `unit` añade una unidad. Algo que no puede leer, o una división por cero, se imprime como `[?…]` y genera un aviso |
| `{{qty IfcWall NetSideArea by Type}}` | una tabla: una fila por tipo con su recuento y su total, y una fila de total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | una tabla, con una fila por elemento |
| `{{tag Finish}}` | en un bucle, el valor del elemento; fuera de él, todos los valores usados (Roble, Pintura) |
| `{{tags}}` | las definiciones de etiqueta como tabla |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | el texto una vez por elemento; la parte después de `{{else}}` cuando no hay ninguno |
| `{{#group IfcWall by Type}} … {{/group}}` | el texto una vez por tipo, con `{{value}}`, `{{count}}`, `{{sum Length}}` y un `{{#each}}` simple dentro |

Dentro de `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (la etiqueta IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (el propio del elemento, con su unidad).

Una clase puede ser varias (`IfcDoor|IfcWindow`) o todos los elementos (`*`). Restrinja cualquiera con `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Las pruebas son `=`, `!=`, `~` (contiene), `>`, `<`, `>=`, `<=`, `has` y `hasnot`; una varias con `and`; ponga un valor con espacios entre «comillas». `sort Name` ordena un bucle.

## Tablas y la especificación en un documento

`{{schedule doors}}` imprime una tabla del modelo con la disposición de su oficina: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, o el nombre de una configuración que haya guardado en Tablas. `{{specification}}` imprime la especificación del proyecto. Las plantillas **Tablas de planos de trabajo** y **Especificación** las usan. En la vista previa, haga clic en una cifra de una de estas tablas para seleccionar los elementos de los que procede. Consulte [Disponer, guardar y exportar una tabla](topic:schedule-layouts) y [Redactar la especificación a partir del modelo](topic:specification).

## Conviene saber

- Un campo nombra un dato integrado (Name, Type, Storey, Class, Material, Mark), una etiqueta (`tag:Fire rating`, o su nombre), una propiedad (`Pset_WallCommon.FireRating`) o solo el nombre de una propiedad (`NetSideArea`, `Width`): un nombre suelto lee el conjunto propio de cada elemento, primero los conjuntos de cantidades, así que `Width` en una puerta es la anchura de la puerta, no el espesor de un muro. Dentro de `where`, un nombre suelto lee el conjunto que tienen la mayoría de los elementos elegidos.
- Las cantidades son lo que dicen los conjuntos de cantidades del archivo (BimCraft los escribe para lo que dibuja); las unidades proceden de los ajustes de unidades del archivo.
- Las palabras de campo (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) se mantienen en inglés en todos los idiomas. Las plantillas de ejemplo están en inglés.
- El texto del modelo nunca se convierte en formato: un nombre con un `*` o un `|` se imprime tal cual.
- Guarde una plantilla modificada con {{ui:Guardar en este navegador}} (solo este navegador la tiene) o con {{ui:Descargar la plantilla}}.
- El texto del PDF usa las fuentes PDF estándar: un carácter fuera del texto de Europa occidental se imprime como «?» y la barra de estado indica cuántos.
- Las plantillas por especialidad están en la Biblioteca (tipo Plantilla de documento). En Documentos a partir del modelo, elija Desde la Biblioteca…, seleccione una, y entran su texto y las etiquetas que lee; edítela como quiera. Publicar su propia plantilla en la Biblioteca es la misma subida que cualquier otro elemento. Todavía no está disponible: cálculos más allá de recuentos y totales.
