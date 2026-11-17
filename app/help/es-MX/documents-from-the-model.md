---
title: Documentos desde el modelo
summary: Escriba una especificación o una descripción una vez como plantilla, con campos para cantidades, propiedades y etiquetas, y llénela desde el IFC abierto como PDF o como documento de Word.
keywords: documento, documentos, especificación, espec, descripción, plantilla, markdown, informe, word, docx, pdf, cantidades, cuadro, oficio, acabados, documentcad
from: 2b0c9156
---

## Qué hará

Una plantilla es un texto en Markdown con campos entre llaves dobles. BimCraft llena los campos desde el modelo abierto (conteos, cantidades por tipo, propiedades, sus [etiquetas](topic:tags-and-schedules)) y guarda el resultado como PDF, como documento de Word (.docx) o como Markdown.

## Pasos

1. Abra un modelo IFC.
2. En el panel izquierdo, bajo {{ui:Cantidades}}, abra {{ui:Documentos desde el modelo}}.
3. Elija una plantilla: {{ui:Puertas y herrajes}} o {{ui:Muros, revestimientos y acabados}}, o {{ui:Cargar una plantilla (.md)…}} para la suya.
4. Si la plantilla lee etiquetas que el modelo aún no define, haga clic en {{ui:Agregar las etiquetas de esta plantilla}}, luego etiquete elementos en {{ui:Etiquetas}}.
5. Cambie el texto como quiera y haga clic en {{ui:Mostrar el documento}}.
6. Haga clic en {{ui:PDF}} (elija primero A4 o Carta) o en {{ui:Word (.docx)}}.

## Lo que debe ver

- El documento lleno bajo los botones, con sus tablas.
- Una lista de advertencias cuando un campo no se puede leer (una etiqueta no definida, una propiedad que el modelo no tiene, un bloque que nunca se cierra); ese campo se imprime como `[?…]`.
- Páginas PDF con el título del documento y "Página 1 de 3" al pie de cada página; las tablas largas repiten su fila de encabezado.

## Campos

| Campo | Devuelve |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | el nombre y la descripción del proyecto, el nombre del archivo, la fecha de hoy |
| `{{count IfcDoor}}` | cuántas puertas hay |
| `{{sum IfcWall NetSideArea}}` | un total, con su unidad |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmética (`+ - * /` y paréntesis) sobre términos entre corchetes: `[sum …]`, `[count …]`, y dentro de un each `[qty Width]`. `round n` define los decimales, `unit` agrega una unidad. Algo que no puede leer, o una división entre cero, se imprime como `[?…]` y advierte |
| `{{qty IfcWall NetSideArea by Type}}` | una tabla: una fila por tipo con su conteo y total, y una fila de total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | una tabla, una fila por elemento |
| `{{tag Finish}}` | en un bucle, el valor del elemento; en otro caso, todos los valores usados (Roble, Pintura) |
| `{{tags}}` | las definiciones de etiquetas como tabla |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | el texto una vez por elemento; la parte después de `{{else}}` cuando no hay ninguno |
| `{{#group IfcWall by Type}} … {{/group}}` | el texto una vez por tipo, con `{{value}}`, `{{count}}`, `{{sum Length}}` y un `{{#each}}` simple dentro |

Dentro de `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (la etiqueta IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (la propia del elemento, con su unidad).

Una clase puede ser varias (`IfcDoor|IfcWindow`) o cada elemento (`*`). Limite cualquiera de ellas con `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Las pruebas son `=`, `!=`, `~` (contiene), `>`, `<`, `>=`, `<=`, `has` y `hasnot`; una varias condiciones con `and`; escriba un valor con espacios entre comillas. `sort Name` ordena un bucle.

## Cuadros y la especificación en un documento

`{{schedule doors}}` imprime un cuadro del modelo como tabla, con su disposición de la oficina: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, o el nombre de una configuración que guardó en Cuadros. `{{specification}}` imprime la especificación del proyecto. Las plantillas **Cuadros de planos de trabajo** y **Especificación** los usan. En la vista previa, haga clic en una cifra de estos cuadros para seleccionar los elementos de los que salió. Vea [Disponer, guardar y exportar un cuadro](topic:schedule-layouts) y [Escribir la especificación desde el modelo](topic:specification).

## Cosas que conviene saber

- Un campo nombra un dato integrado (Name, Type, Storey, Class, Material, Mark), una etiqueta (`tag:Fire rating`, o su nombre), una propiedad (`Pset_WallCommon.FireRating`) o solo el nombre de una propiedad (`NetSideArea`, `Width`). Un nombre suelto lee el conjunto propio de cada elemento, primero los conjuntos de cantidades, así que `Width` en una puerta es el ancho de la puerta, no el espesor de un muro. Dentro de `where`, un nombre suelto lee el conjunto que tienen la mayoría de los elementos elegidos.
- Las cantidades son lo que dicen los conjuntos de cantidades del archivo (BimCraft los escribe para lo que dibuja); las unidades vienen de la configuración de unidades del archivo.
- Las palabras de campo (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) se quedan en inglés en todos los idiomas. Las plantillas de ejemplo están en inglés.
- El texto del modelo nunca se convierte en formato: un nombre con un `*` o un `|` se imprime tal cual.
- Guarde una plantilla que cambió con {{ui:Guardar en este navegador}} (solo este navegador la tiene) o con {{ui:Descargar la plantilla}}.
- El texto del PDF usa las fuentes PDF estándar: un carácter fuera del texto de Europa occidental se imprime como "?" y la línea de estado indica cuántos.
- Las plantillas por oficio viven en la Biblioteca (tipo Plantilla de documento). En Documentos desde el modelo, elija Desde la Biblioteca…, escoja una, y entran su texto y las etiquetas que lee; edítela como quiera. Publicar su propia plantilla en la Biblioteca es la misma carga que cualquier otro elemento. Aún no está hecho: cálculos más allá de conteos y totales.
