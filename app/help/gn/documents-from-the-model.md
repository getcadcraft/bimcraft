---
title: Modelo-gui documentos
summary: Peteĩ jey especificación térã descripción plantilla-pe ejapo, cantidad, propiedad ha etiqueta campo-kuéra ndive, ha IFC abierto-gui PDF térã Word documento-pe completa.
keywords: documento, documentos, especificación, especificaciones, descripción, plantilla, markdown, informe, word, docx, pdf, cantidades, planilla, rubro, planilla de puertas, acabados, documentcad
from: 2b0c9156
---

## Mbaʼe reipuráta

Plantilla Markdown texto ha campo-kuéra llave doble-pe. BimCraft campo-kuéra oipytyvõ abierto modelo-gui (conteo, tipo rehe cantidad-kuéra, propiedad-kuéra, ejeporu [etiqueta-kuéra](topic:tags-and-schedules)) ha resultado PDF, Word documento (.docx) térã Markdown-pe ombosaraʼi.

## Pasos

1. Ejepe'a modelo IFC.
2. Panel izquierdo-pe, {{ui:Quantities}} rembe, eclik-e {{ui:Documents from the model}}.
3. Eiporavo plantilla: {{ui:Doors and hardware}} térã {{ui:Walls, linings and finishes}}, térã {{ui:Load a template (.md)…}} nde-ra'ãgui.
4. Plantilla oje'eva etiqueta modelo ndefinívape, eclik-e {{ui:Add this template’s tags}}, upéi elemento-kuéra etiqueta {{ui:Tags}} rembe.
5. Texto cambia tuichaite ha eclik-e {{ui:Show the document}}.
6. Eclik-e {{ui:PDF}} (A4 térã Letter emoĩ rire) térã {{ui:Word (.docx)}}.

## Mbaʼe ejehecha

- Botón-kuéra rembe campo-kuéra oñemboguenohẽ documento, tabla-kuéra ndive.
- Campo ojekuaa'ỹ rire avisos lista (ndefinívape etiqueta, modelo ndoguerekóiva propiedad, ndojeheʼỹva bloque): campo `[?…]`-pe ojehecha.
- PDF página-kuéra documento título ha "Page 1 of 3" peteĩteĩ página ryepy-pe; tabla guasúva encabezado fila ndive oñeme'ẽ ambue página-pe.

## Campo-kuéra

| Campo | Ohupi |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | proyecto nombre ha descripción, archivo nombre, ko árapy |
| `{{count IfcDoor}}` | mbovy puerta |
| `{{sum IfcWall NetSideArea}}` | total, unidad ndive |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmética (`+ - * /` ha paréntesis) corchete términos-pe: `[sum …]`, `[count …]`, ha each-pe `[qty Width]`. `round n` decimal emoĩ, `unit` unidad ombojoaju. Ndojekuaái térã cero-pe división, `[?…]` ohechauka ha aviso |
| `{{qty IfcWall NetSideArea by Type}}` | tabla: tipo peteĩteĩ fila cantidad ha total ndive, total fila |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | tabla, elemento peteĩteĩ fila |
| `{{tag Finish}}` | bucle-pe elemento valor; ambue-pe opavave valor ojeporúva (Oak, Paint) |
| `{{tags}}` | etiqueta definición tabla-pe |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | elemento peteĩteĩ texto; `{{else}}` rire parte ndaipóri rire |
| `{{#group IfcWall by Type}} … {{/group}}` | tipo peteĩteĩ texto, `{{value}}`, `{{count}}`, `{{sum Length}}` ha simple `{{#each}}` ryepy-pe |

`{{#each}}` ryepy-pe: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Etiqueta), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (elemento propio, unidad ndive).

Clase peteĩ térã heta (`IfcDoor|IfcWindow`) térã opavave elemento (`*`). `where` ndive restrinxí: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Prueba-kuéra `=`, `!=`, `~` (oguereko), `>`, `<`, `>=`, `<=`, `has` ha `hasnot`; `and` ndive; valor espacio ndive "comilla" ryepy-pe. `sort Name` bucle ordena.

## Planilla ha especificación documento-pe

`{{schedule doors}}` modelo planilla tabla-pe ombojehechaukáva, oficina disposición ndive: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, térã Planillas-pe ombosaraʼíva configuración nombre. `{{specification}}` proyecto especificación ombojehechauka. Plantilla **Planillas de planos de trabajo** ha **Especificación** oipoʼi. Vista previa-pe eclik ko planilla cifra rehe elemento-kuéra oúva oiporavo. Ehecha [Disponer, guardar ha exportar planilla](topic:schedule-layouts) ha [Escribir especificación modelo-gui](topic:specification).

## Mbaʼe ojeikuaa porã

- Campo nombra incorporado (Name, Type, Storey, Class, Material, Mark), etiqueta (`tag:Fire rating`, térã iñe'ẽ), propiedad (`Pset_WallCommon.FireRating`) térã propiedad nombre-anga (`NetSideArea`, `Width`): nombre peteĩ ojeporu elemento propio conjunto-pe, cantidad conjunto-kuéra mboyve, upévare puerta-pe `Width` puerta ancho, muro grosor ndaha'éi. `where` ryepy-pe nombre hína ojeporu elemento hetave ha ojeporúva conjunto.
- Cantidades archivo cantidad conjunto-kuéra ohechaukáva (BimCraft ojapóva rehegua); unidades archivo unidad configuración-gui.
- Campo ñe'ẽ (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) opavave ñe'ẽ-pe inglés ojeikuaa. Plantilla ejemplo-kuéra inglés-pe.
- Modelo texto ndaiporiva formato: `*` térã `|` nombre ohechauka tal cual.
- Plantilla cambiado {{ui:Keep in this browser}} (ko navegador hína oguereko) térã {{ui:Download the template}} ombosaraʼi.
- PDF texto estándar PDF fuente oporavo: Europa occidental ndaipóri carácter "?" ohechauka ha línea de estado cuánto.
- Plantilla-kuéra rubro-pe Biblioteca-pe (tipo Plantilla de documento). Documentos modelo-gui-pe, Biblioteca-gui elegí, ejeporu, texto ha etiqueta-kuéra oike; emoambue nde-ra'ãgui. Nde plantilla Biblioteca-pe ombojehepa: ítem ambue carga ndive ijyvy. Ndaipóri ojapo: cuenta ha total rembe ambue cálculo.
