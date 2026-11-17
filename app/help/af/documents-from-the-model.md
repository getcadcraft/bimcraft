---
title: Dokumente uit die model
summary: Skryf 'n spesifikasie of beskrywing een keer as 'n sjabloon, met velde vir hoeveelhede, eienskappe en etikette, en vul dit uit die oop IFC as 'n PDF of 'n Word-dokument.
keywords: dokument, dokumente, spesifikasie, spes, beskrywing, sjabloon, markdown, verslag, word, docx, pdf, hoeveelhede, skedule, vak, deureskedule, afwerkings, documentcad
from: 2b0c9156
---

## Wat jy gaan doen

'n Sjabloon is 'n teks in Markdown met velde in dubbele krulhakies. BimCraft vul die velde uit die oop model (tellings, hoeveelhede volgens tipe, eienskappe, jou [etikette](topic:tags-and-schedules)) en stoor die resultaat as 'n PDF, 'n Word-dokument (.docx) of Markdown.

## Stappe

1. Open 'n IFC-model.
2. In die linkerpaneel, onder {{ui:Quantities}}, maak {{ui:Documents from the model}} oop.
3. Kies 'n sjabloon: {{ui:Doors and hardware}} of {{ui:Walls, linings and finishes}}, of {{ui:Load a template (.md)…}} vir jou eie.
4. As die sjabloon etikette lees wat die model nog nie definieer nie, klik {{ui:Add this template’s tags}}, en merk dan elemente onder {{ui:Tags}}.
5. Verander die teks soos jy wil en klik {{ui:Show the document}}.
6. Klik {{ui:PDF}} (kies eers A4 of Letter) of {{ui:Word (.docx)}}.

## Wat jy moet sien

- Die ingevulde dokument onder die knoppies, met sy tabelle.
- 'n Lys waarskuwings wanneer 'n veld nie gelees kan word nie ('n etiket wat nie gedefinieer is nie, 'n eienskap wat die model nie het nie, 'n blok wat nooit gesluit word nie); so 'n veld druk as `[?…]`.
- PDF-bladsye met die dokument se titel en "Bladsy 1 van 3" onderaan elke bladsy; lang tabelle gaan oor met hul kopry.

## Velde

| Veld | Gee |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | die projek se naam en beskrywing, die lêer se naam, vandag |
| `{{count IfcDoor}}` | hoeveel deure |
| `{{sum IfcWall NetSideArea}}` | 'n totaal, met sy eenheid |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | rekenkunde (`+ - * /` en hakies) oor terme in vierkantige hakies: `[sum …]`, `[count …]`, en binne `{{#each}}` `[qty Width]`. `round n` stel die desimale, `unit` voeg 'n eenheid by. Iets wat dit nie kan lees nie, of 'n deling deur nul, druk `[?…]` en waarsku |
| `{{qty IfcWall NetSideArea by Type}}` | 'n tabel: een ry per tipe met sy telling en totaal, en 'n totaalry |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | 'n tabel, een ry per element |
| `{{tag Finish}}` | in 'n lus, die element se waarde; elders elke waarde wat gebruik is (Eik, Verf) |
| `{{tags}}` | die etiketdefinisies as 'n tabel |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | die teks een keer per element; die deel ná `{{else}}` as daar geen is nie |
| `{{#group IfcWall by Type}} … {{/group}}` | die teks een keer per tipe, met `{{value}}`, `{{count}}`, `{{sum Length}}` en 'n gewone `{{#each}}` binne |

Binne `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (die IFC-etiket), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (die element se eie, met sy eenheid).

'n Klas kan verskeie wees (`IfcDoor|IfcWindow`) of elke element (`*`). Beperk enige van hulle met `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Die toetse is `=`, `!=`, `~` (bevat), `>`, `<`, `>=`, `<=`, `has` en `hasnot`; verbind verskeie met `and`; plaas 'n waarde met spasies tussen "aanhalingstekens". `sort Name` orden 'n lus.

## Skedules en die spesifikasie in 'n dokument

`{{schedule doors}}` druk 'n modelskedule as 'n tabel, in jou kantoor se uitleg: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, of die naam van 'n opstelling wat jy in Skedules gestoor het. `{{specification}}` druk die projek se spesifikasie. Die sjablone **Werkstekening-skedules** en **Spesifikasie** gebruik hulle. In die voorskou, klik op 'n syfer van so 'n skedule om die elemente te kies waaruit dit gekom het. Sien [Lê 'n skedule uit, stoor en voer dit uit](topic:schedule-layouts) en [Skryf die spesifikasie uit die model](topic:specification).

## Goed om te weet

- 'n Veld noem 'n ingeboude een (Name, Type, Storey, Class, Material, Mark), 'n etiket (`tag:Fire rating`, of sy naam), 'n eienskap (`Pset_WallCommon.FireRating`) of net 'n eienskap se naam (`NetSideArea`, `Width`): 'n kaal naam lees elke element se eie stel, hoeveelheidstelle eerste, so `Width` op 'n deur is die deur se breedte, nie 'n muur se dikte nie. Binne `where` lees 'n kaal naam die stel wat die meeste van die gekose elemente het.
- Hoeveelhede is wat die lêer se hoeveelheidstelle sê (BimCraft skryf hulle vir wat dit teken); eenhede kom uit die lêer se eenheidinstellings.
- Die veldwoorde (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) bly in Engels in elke taal. Die voorbeeldsjablone is in Engels.
- Teks uit die model word nooit opmaak nie: 'n naam met 'n `*` of `|` daarin druk soos dit is.
- Hou 'n sjabloon wat jy verander het met {{ui:Keep in this browser}} (net hierdie blaaier het dit) of {{ui:Download the template}}.
- PDF-teks gebruik die standaard PDF-lettertipes: 'n karakter buite Wes-Europese teks druk as "?" en die statuslyn sê hoeveel.
- Sjablone per vak lewe in die Biblioteek (soort Dokumentsjabloon). In Dokumente uit die model, kies **Uit die Biblioteek…**, kies een, en sy teks en die etikette wat dit lees, kom in; wysig dit soos jy wil. Om jou eie sjabloon na die Biblioteek te publiseer is dieselfde oplaai as enige ander item. Nog nie gebou nie: berekeninge behalwe tellings en totale.
