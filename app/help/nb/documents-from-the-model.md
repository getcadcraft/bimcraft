---
title: Dokumenter fra modellen
summary: Skriv en spesifikasjon eller en beskrivelse én gang som en mal, med felt for mengder, egenskaper og merker, og fyll den ut fra den åpne IFC-modellen som PDF eller Word-dokument.
keywords: dokument, dokumenter, spesifikasjon, spek, beskrivelse, mal, markdown, rapport, word, docx, pdf, mengder, liste, fag, dørliste, overflater, documentcad
from: 2b0c9156
---

## Hva du skal gjøre

En mal er en tekst i Markdown med felt i doble klammeparenteser. BimCraft fyller feltene fra den åpne modellen (antall, mengder etter type, egenskaper, dine [merker](topic:tags-and-schedules)) og lagrer resultatet som en PDF, et Word-dokument (.docx) eller Markdown.

## Steg

1. Åpne en IFC-modell.
2. I venstre panel, under {{ui:Mengder}}, åpner du {{ui:Dokumenter fra modellen}}.
3. Velg en mal: {{ui:Dører og beslag}} eller {{ui:Vegger, kledninger og overflater}}, eller {{ui:Last en mal (.md)…}} for din egen.
4. Hvis malen leser merker modellen ikke har definert ennå, klikker du på {{ui:Legg til malens merker}}, og merker deretter elementer under {{ui:Merker}}.
5. Endre teksten slik du vil, og klikk på {{ui:Vis dokumentet}}.
6. Klikk på {{ui:PDF}} (velg A4 eller Letter først) eller {{ui:Word (.docx)}}.

## Hva du skal se

- Det utfylte dokumentet under knappene, med tabellene sine.
- En liste med advarsler når et felt ikke kan leses (et merke som ikke er definert, en egenskap modellen ikke har, en blokk som aldri lukkes). Et slikt felt skrives ut som `[?…]`.
- PDF-sider med dokumentets tittel og «Side 1 av 3» nederst på hver side. Lange tabeller fortsetter med overskriftsraden.

## Felt

| Felt | Gir |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | prosjektets navn og beskrivelse, filens navn, i dag |
| `{{count IfcDoor}}` | hvor mange dører |
| `{{sum IfcWall NetSideArea}}` | en totalsum, med enheten sin |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | regning (`+ - * /` og parenteser) over ledd i hakeparenteser: `[sum …]`, `[count …]`, og inne i en each `[qty Width]`. `round n` angir desimalene, `unit` legger til en enhet. Noe den ikke kan lese, eller en deling på null, skrives ut som `[?…]` og gir en advarsel |
| `{{qty IfcWall NetSideArea by Type}}` | en tabell: én rad per type med antall og totalt, og en totalrad |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | en tabell, én rad per element |
| `{{tag Finish}}` | i en løkke, elementets verdi; ellers hver brukt verdi (Eik, Maling) |
| `{{tags}}` | merkedefinisjonene som en tabell |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | teksten én gang per element; delen etter `{{else}}` når det ikke finnes noen |
| `{{#group IfcWall by Type}} … {{/group}}` | teksten én gang per type, med `{{value}}`, `{{count}}`, `{{sum Length}}` og en vanlig `{{#each}}` inni |

Inne i `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC-merket), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (elementets eget, med enheten sin).

En klasse kan være flere (`IfcDoor|IfcWindow`) eller alle elementer (`*`). Snevr inn hver av dem med `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testene er `=`, `!=`, `~` (inneholder), `>`, `<`, `>=`, `<=`, `has` og `hasnot`. Sett flere sammen med `and`, og skriv en verdi med mellomrom i "anførselstegn". `sort Name` sorterer en løkke.

## Lister og spesifikasjonen i et dokument

`{{schedule doors}}` skriver ut en modellliste som en tabell, i ditt kontoroppsett: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, eller navnet på et oppsett du lagret under Lister. `{{specification}}` skriver ut prosjektets spesifikasjon. Malene **Arbeidstegningslister** og **Spesifikasjon** bruker dem. I forhåndsvisningen klikker du på et tall fra en slik liste for å velge elementene det kom fra. Se [Sett opp, lagre og eksporter en liste](topic:schedule-layouts) og [Skriv spesifikasjonen fra modellen](topic:specification).

## Greit å vite

- Et felt nevner en innebygd (Name, Type, Storey, Class, Material, Mark), et merke (`tag:Fire rating`, eller dets navn), en egenskap (`Pset_WallCommon.FireRating`) eller bare en egenskaps navn (`NetSideArea`, `Width`). Et bart navn leser hvert elements eget sett, mengdesettene først, så `Width` på en dør er dørens bredde, ikke en veggs tykkelse. Inne i `where` leser et bart navn settet de fleste av de valgte elementene har.
- Mengder er det filens mengdesett sier (BimCraft skriver dem for det den tegner). Enhetene kommer fra filens enhetsinnstillinger.
- Feltordene (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) står på engelsk i alle språk. Eksempelmalene er på engelsk.
- Tekst fra modellen blir aldri formatering: et navn med en `*` eller `|` i seg skrives ut slik det er.
- Ta vare på en mal du har endret, med {{ui:Behold i denne nettleseren}} (bare denne nettleseren har den), eller {{ui:Last ned malen}}.
- PDF-teksten bruker de standard PDF-skriftene: et tegn utenfor vesteuropeisk tekst skrives ut som «?», og statuslinjen sier hvor mange.
- Maler per fag ligger i Biblioteket (type Dokumentmal). I Dokumenter fra modellen velger du {{ui:Fra biblioteket…}}, velger en, og teksten og merkene den leser, hentes inn. Rediger den slik du vil. Å publisere din egen mal i biblioteket er samme opplasting som ethvert annet element. Ikke bygget ennå: beregninger utover antall og totaler.
