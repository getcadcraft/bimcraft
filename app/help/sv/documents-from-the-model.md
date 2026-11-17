---
title: Dokument från modellen
summary: Skriv en specifikation eller en beskrivning en gång som en mall, med fält för mängder, egenskaper och taggar, och fyll i den från den öppna IFC-modellen som en PDF eller ett Word-dokument.
keywords: dokument, specifikation, spec, beskrivning, mall, markdown, rapport, word, docx, pdf, mängder, förteckning, yrke, dörrförteckning, ytskikt, DocumentCAD
from: 2b0c9156
---

## Vad du gör

En mall är en text i Markdown med fält inom dubbla klammerparenteser. BimCraft fyller i fälten från den öppna modellen (antal, mängder per typ, egenskaper och dina [taggar](topic:tags-and-schedules)) och sparar resultatet som en PDF, ett Word-dokument (.docx) eller Markdown.

## Steg

1. Öppna en IFC-modell.
2. Öppna {{ui:Dokument från modellen}} i den vänstra panelen, under {{ui:Mängder}}.
3. Välj en mall: {{ui:Dörrar och beslag}} eller {{ui:Väggar, beklädnader och ytskikt}}, eller {{ui:Läs in en mall (.md)…}} för en egen.
4. Om mallen läser taggar som modellen ännu inte definierar klickar du på {{ui:Lägg till den här mallens taggar}} och taggar sedan element under {{ui:Taggar}}.
5. Ändra texten som du vill och klicka på {{ui:Visa dokumentet}}.
6. Klicka på {{ui:PDF}} (välj A4 eller Letter först) eller {{ui:Word (.docx)}}.

## Vad du bör se

- Det ifyllda dokumentet under knapparna, med dess tabeller.
- En lista med varningar när ett fält inte kan läsas (en tagg som inte är definierad, en egenskap modellen inte har, ett block som aldrig stängs). Ett sådant fält skrivs ut som `[?…]`.
- PDF-sidor med dokumentets titel och "Sida 1 av 3" längst ner på varje sida. Långa tabeller fortsätter på nästa sida med sin rubrikrad.

## Fält

| Fält | Ger |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | projektets namn och beskrivning, filens namn, dagens datum |
| `{{count IfcDoor}}` | hur många dörrar |
| `{{sum IfcWall NetSideArea}}` | en summa, med sin enhet |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetik (`+ - * /` och parenteser) över termer inom hakparenteser: `[sum …]`, `[count …]`, och inom en each `[qty Width]`. `round n` anger decimalerna, `unit` lägger till en enhet. Något den inte kan läsa, eller en division med noll, skrivs ut som `[?…]` och ger en varning |
| `{{qty IfcWall NetSideArea by Type}}` | en tabell: en rad per typ med dess antal och summa, och en totalrad |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | en tabell, en rad per element |
| `{{tag Finish}}` | i en loop, elementets värde; annars varje värde som används (Oak, Paint) |
| `{{tags}}` | taggdefinitionerna som en tabell |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | texten en gång per element; delen efter `{{else}}` när det inte finns några |
| `{{#group IfcWall by Type}} … {{/group}}` | texten en gång per typ, med `{{value}}`, `{{count}}`, `{{sum Length}}` och en vanlig `{{#each}}` inuti |

Inuti `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC-taggen), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (elementets eget värde, med sin enhet).

En klass kan vara flera (`IfcDoor|IfcWindow`) eller alla element (`*`). Begränsa någon av dem med `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testerna är `=`, `!=`, `~` (innehåller), `>`, `<`, `>=`, `<=`, `has` och `hasnot`. Koppla ihop flera med `and`. Sätt ett värde med mellanslag inom "citattecken". `sort Name` sorterar en loop.

## Förteckningar och specifikationen i ett dokument

`{{schedule doors}}` skriver ut en modellförteckning som en tabell, i din kontorslayout: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, eller namnet på en uppställning du sparat i Förteckningar. `{{specification}}` skriver ut projektets specifikation. Mallarna **Arbetsritningsförteckningar** och **Specifikation** använder dem. I förhandsvisningen klickar du på en siffra från en sådan förteckning för att markera de element den kom från. Se [Lägg upp, spara och exportera en förteckning](topic:schedule-layouts) och [Skriv specifikationen från modellen](topic:specification).

## Bra att veta

- Ett fält anger ett inbyggt värde (Name, Type, Storey, Class, Material, Mark), en tagg (`tag:Fire rating`, eller dess namn), en egenskap (`Pset_WallCommon.FireRating`) eller bara en egenskaps namn (`NetSideArea`, `Width`). Ett kalt namn läser varje elements egen uppsättning, med mängduppsättningar först. `Width` på en dörr är alltså dörrens bredd, inte en väggs tjocklek. Inuti `where` läser ett kalt namn den uppsättning som de flesta av de valda elementen har.
- Mängder är vad filens mängduppsättningar säger (BimCraft skriver dem för det den ritar). Enheterna kommer från filens enhetsinställningar.
- Fältorden (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) står kvar på engelska på alla språk. Exempelmallarna är på engelska.
- Text från modellen blir aldrig formatering. Ett namn med ett `*` eller `|` i skrivs ut precis som det är.
- Behåll en mall du ändrat med {{ui:Behåll i den här webbläsaren}} (bara den här webbläsaren har den) eller {{ui:Ladda ner mallen}}.
- PDF-texten använder de standardiserade PDF-typsnitten. Ett tecken utanför västeuropeisk text skrivs ut som "?", och statusraden anger hur många.
- Mallar per yrke finns i biblioteket (typen Dokumentmall). I Dokument från modellen väljer du Från biblioteket…, väljer en mall, och dess text och de taggar den läser kommer in. Redigera den som du vill. Att publicera din egen mall i biblioteket är samma uppladdning som för vilket annat objekt som helst. Ännu inte byggt: beräkningar utöver antal och summor.
