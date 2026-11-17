---
title: Documents des del model
summary: Escriviu una especificació o una descripció una vegada com a plantilla, amb camps per a quantitats, propietats i etiquetes, i ompliu-la des de l'IFC obert com a PDF o document de Word.
keywords: document, documents, especificació, espec., descripció, plantilla, markdown, informe, word, docx, pdf, quantitats, quadre, gremi, quadre de portes, acabats, documentcad
from: 2b0c9156
---

## Què farà

Una plantilla és un text en Markdown amb camps entre claus dobles. BimCraft omple els camps des del model obert (recomptes, quantitats per tipus, propietats, les vostres [etiquetes](topic:tags-and-schedules)) i desa el resultat com a PDF, document de Word (.docx) o Markdown.

## Passos

1. Obriu un model IFC.
2. Al panell de l'esquerra, sota {{ui:Quantitats}}, obriu {{ui:Documents del model}}.
3. Trieu una plantilla: {{ui:Portes i ferreteria}} o {{ui:Parets, revestiments i acabats}}, o {{ui:Carrega una plantilla (.md)…}} per a la vostra.
4. Si la plantilla llegeix etiquetes que el model encara no defineix, feu clic a {{ui:Afegeix les etiquetes d'aquesta plantilla}}, i després etiqueteu elements sota {{ui:Etiquetes}}.
5. Canvieu el text com vulgueu i feu clic a {{ui:Mostra el document}}.
6. Feu clic a {{ui:PDF}} (trieu primer A4 o Letter) o a {{ui:Word (.docx)}}.

## Què hauríeu de veure

- El document omplert sota els botons, amb les seves taules.
- Una llista d'avisos quan un camp no es pot llegir (una etiqueta no definida, una propietat que el model no té, un bloc que no es tanca mai); aquest camp s'imprimeix com a `[?…]`.
- Pàgines PDF amb el títol del document i "Pàgina 1 de 3" al peu de cada pàgina; les taules llargues es continuen amb la seva fila d'encapçalament.

## Camps

| Camp | Dona |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | el nom i la descripció del projecte, el nom del fitxer, avui |
| `{{count IfcDoor}}` | quantes portes |
| `{{sum IfcWall NetSideArea}}` | un total, amb la seva unitat |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmètica (`+ - * /` i parèntesis) sobre termes entre claudàtors: `[sum …]`, `[count …]`, i dins d'un each `[qty Width]`. `round n` fixa els decimals, `unit` afegeix una unitat. Allò que no pot llegir, o una divisió per zero, s'imprimeix com a `[?…]` i avisa |
| `{{qty IfcWall NetSideArea by Type}}` | una taula: una fila per tipus amb el seu recompte i total, i una fila de total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | una taula, una fila per element |
| `{{tag Finish}}` | dins d'un bucle, el valor de l'element; en altres llocs, tots els valors usats (Oak, Paint) |
| `{{tags}}` | les definicions d'etiqueta com a taula |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | el text una vegada per element; la part després de `{{else}}` quan no n'hi ha cap |
| `{{#group IfcWall by Type}} … {{/group}}` | el text una vegada per tipus, amb `{{value}}`, `{{count}}`, `{{sum Length}}` i un `{{#each}}` simple a dins |

Dins de `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (l'IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (el de l'element mateix, amb la seva unitat).

Una classe pot ser-ne diverses (`IfcDoor|IfcWindow`) o tots els elements (`*`). Restringiu-les amb `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Les proves són `=`, `!=`, `~` (conté), `>`, `<`, `>=`, `<=`, `has` i `hasnot`; uniu-ne diverses amb `and`; poseu un valor amb espais entre "cometes". `sort Name` ordena un bucle.

## Quadres i l'especificació en un document

`{{schedule doors}}` imprimeix un quadre del model com a taula, amb la vostra disposició d'oficina: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, o el nom d'una configuració que hàgiu desat a Quadres. `{{specification}}` imprimeix l'especificació del projecte. Les plantilles **Quadres de plànols de treball** i **Especificació** les fan servir. A la vista prèvia, feu clic a una xifra d'aquest quadre per seleccionar els elements d'on ve. Vegeu [Disposa, desa i exporta un quadre](topic:schedule-layouts) i [Escriu l'especificació a partir del model](topic:specification).

## Bon a saber

- Un camp pot anomenar un element integrat (Name, Type, Storey, Class, Material, Mark), una etiqueta (`tag:Fire rating`, o el seu nom), una propietat (`Pset_WallCommon.FireRating`) o només el nom d'una propietat (`NetSideArea`, `Width`): un nom simple llegeix el conjunt propi de cada element, primer els conjunts de quantitats, de manera que `Width` en una porta és l'amplada de la porta, no el gruix d'un mur. Dins de `where`, un nom simple llegeix el conjunt que tenen la majoria dels elements triats.
- Les quantitats són el que diuen els conjunts de quantitats del fitxer (BimCraft els escriu per al que dibuixa); les unitats vénen de la configuració d'unitats del fitxer.
- Les paraules de camp (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) queden en anglès en totes les llengües. Les plantilles d'exemple són en anglès.
- El text del model mai no es converteix en format: un nom amb un `*` o un `|` s'imprimeix tal com és.
- Deseu una plantilla que heu canviat amb {{ui:Guarda en aquest navegador}} (només aquest navegador la té) o {{ui:Baixa la plantilla}}.
- El text del PDF fa servir les fonts PDF estàndard: un caràcter fora del text d'Europa occidental s'imprimeix com a "?" i la barra d'estat indica quants n'hi ha.
- Les plantilles per gremi viuen a la Biblioteca (tipus Plantilla de document). A Documents del model, trieu Des de la Biblioteca…, escolliu-ne una, i en surten el seu text i les etiquetes que llegeix; editeu-la com vulgueu. Publicar la vostra plantilla a la Biblioteca és la mateixa pujada que qualsevol altre element. Encara no implementat: càlculs més enllà de recomptes i totals.
