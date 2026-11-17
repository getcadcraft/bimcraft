---
title: Documenten uit het model
summary: Schrijf een specificatie of beschrijving één keer als sjabloon, met velden voor hoeveelheden, eigenschappen en tags, en vul die vanuit het geopende IFC-model als PDF of Word-document.
keywords: document, documenten, specificatie, spec, beschrijving, sjabloon, markdown, rapport, word, docx, pdf, hoeveelheden, staat, vakgebied, deurstaat, afwerkingen, documentcad
from: 2b0c9156
---

## Wat u gaat doen

Een sjabloon is een tekst in Markdown met velden tussen dubbele accolades. BimCraft vult de velden in vanuit het geopende model (aantallen, hoeveelheden per type, eigenschappen, uw [tags](topic:tags-and-schedules)) en slaat het resultaat op als PDF, Word-document (.docx) of Markdown.

## Stappen

1. Open een IFC-model.
2. Open in het linkerpaneel, onder {{ui:Hoeveelheden}}, {{ui:Documenten uit het model}}.
3. Kies een sjabloon: {{ui:Deuren en beslag}} of {{ui:Wanden, bekleding en afwerking}}, of {{ui:Een sjabloon laden (.md)…}} voor uw eigen sjabloon.
4. Als het sjabloon tags leest die het model nog niet definieert, klik op {{ui:De tags van dit sjabloon toevoegen}} en tag daarna elementen onder {{ui:Tags}}.
5. Wijzig de tekst naar wens en klik op {{ui:Het document tonen}}.
6. Klik op {{ui:PDF}} (kies eerst A4 of Letter) of {{ui:Word (.docx)}}.

## Wat u ziet

- Het ingevulde document onder de knoppen, met de tabellen.
- Een lijst met waarschuwingen wanneer een veld niet gelezen kan worden (een tag die niet gedefinieerd is, een eigenschap die het model niet heeft, een blok dat nooit wordt gesloten); zo'n veld wordt afgedrukt als `[?…]`.
- PDF-pagina's met de titel van het document en "Pagina 1 van 3" onderaan elke pagina; lange tabellen lopen door met hun kopregel.

## Velden

| Veld | Levert |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | de naam en beschrijving van het project, de naam van het bestand, vandaag |
| `{{count IfcDoor}}` | hoeveel deuren |
| `{{sum IfcWall NetSideArea}}` | een totaal, met de eenheid |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | rekenkunde (`+ - * /` en haakjes) over termen tussen vierkante haken: `[sum …]`, `[count …]`, en binnen een each `[qty Width]`. `round n` stelt de decimalen in, `unit` voegt een eenheid toe. Iets wat het niet kan lezen, of een deling door nul, wordt afgedrukt als `[?…]` en geeft een waarschuwing |
| `{{qty IfcWall NetSideArea by Type}}` | een tabel: één rij per type met zijn aantal en totaal, en een totaalrij |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | een tabel, één rij per element |
| `{{tag Finish}}` | in een lus de waarde van het element; elders elke gebruikte waarde (Oak, Paint) |
| `{{tags}}` | de tagdefinities als tabel |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | de tekst één keer per element; het deel na `{{else}}` als er geen zijn |
| `{{#group IfcWall by Type}} … {{/group}}` | de tekst één keer per type, met `{{value}}`, `{{count}}`, `{{sum Length}}` en een gewone `{{#each}}` erin |

Binnen `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (de IFC-tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (de eigen waarde van het element, met zijn eenheid).

Een klasse mag meerdere zijn (`IfcDoor|IfcWindow`) of alle elementen (`*`). Beperk elk ervan met `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. De tests zijn `=`, `!=`, `~` (bevat), `>`, `<`, `>=`, `<=`, `has` en `hasnot`; verbind er meerdere met `and`; zet een waarde met spaties tussen "aanhalingstekens". `sort Name` ordent een lus.

## Staten en de specificatie in een document

`{{schedule doors}}` drukt een modelstaat af als tabel, in uw kantoorindeling: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, of de naam van een indeling die u hebt opgeslagen onder Staten. `{{specification}}` drukt de specificatie van het project af. De sjablonen **Werktekeningstaten** en **Specificatie** gebruiken ze. Klik in het voorbeeld op een cijfer van zo'n staat om de elementen te selecteren waar het vandaan komt. Zie [Een staat indelen, opslaan en exporteren](topic:schedule-layouts) en [De specificatie uit het model schrijven](topic:specification).

## Goed om te weten

- Een veld noemt een ingebouwd veld (Name, Type, Storey, Class, Material, Mark), een tag (`tag:Fire rating`, of zijn naam), een eigenschap (`Pset_WallCommon.FireRating`) of alleen de naam van een eigenschap (`NetSideArea`, `Width`): een losse naam leest de eigen set van elk element, hoeveelheidssets eerst, dus `Width` op een deur is de breedte van de deur, niet de wanddikte. Binnen `where` leest een losse naam de set die de meeste gekozen elementen hebben.
- Hoeveelheden zijn wat de hoeveelheidssets van het bestand zeggen (BimCraft schrijft ze voor wat het tekent); eenheden komen uit de eenheidsinstellingen van het bestand.
- De veldwoorden (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) blijven in elke taal in het Engels. De voorbeeldsjablonen zijn in het Engels.
- Tekst uit het model wordt nooit opmaak: een naam met een `*` of `|` erin wordt afgedrukt zoals hij is.
- Bewaar een gewijzigd sjabloon met {{ui:In deze browser bewaren}} (alleen deze browser heeft het) of {{ui:Het sjabloon downloaden}}.
- PDF-tekst gebruikt de standaard PDF-lettertypen: een teken buiten West-Europese tekst wordt afgedrukt als "?" en de statusregel zegt hoeveel.
- Sjablonen per vakgebied staan in de Bibliotheek (soort Documentsjabloon). Kies bij Documenten uit het model de optie Uit de bibliotheek…, kies er een, en de tekst en de tags die het leest komen mee; bewerk het naar wens. Het publiceren van uw eigen sjabloon naar de Bibliotheek is dezelfde upload als elk ander item. Nog niet beschikbaar: berekeningen die verder gaan dan tellingen en totalen.
