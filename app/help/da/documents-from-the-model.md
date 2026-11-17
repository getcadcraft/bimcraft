---
title: "Dokumenter fra modellen"
summary: "Skriv en specifikation eller en beskrivelse én gang som en skabelon med felter til mængder, egenskaber og tags, og udfyld den fra den åbne IFC som en PDF eller et Word-dokument."
keywords: dokument, dokumenter, specifikation, spec, beskrivelse, skabelon, markdown, rapport, word, docx, pdf, mængder, liste, fag, dørliste, overflader, documentcad
from: 2b0c9156
---

## Hvad du gør

En skabelon er en tekst i Markdown med felter i dobbelte klammer. BimCraft udfylder felterne fra den åbne model (antal, mængder pr. type, egenskaber, dine [tags](topic:tags-and-schedules)) og gemmer resultatet som en PDF, et Word-dokument (.docx) eller Markdown.

## Trin

1. Åbn en IFC-model.
2. I venstre panel, under {{ui:Mængder}}, åbner du {{ui:Dokumenter fra modellen}}.
3. Vælg en skabelon: {{ui:Døre og beslag}} eller {{ui:Vægge, beklædning og overflader}}, eller {{ui:Indlæs en skabelon (.md)…}} for din egen.
4. Hvis skabelonen læser tags, som modellen ikke definerer endnu, klik på {{ui:Tilføj denne skabelons tags}}, og mærk derefter elementer under {{ui:Tags}}.
5. Ændr teksten, som du vil, og klik på {{ui:Vis dokumentet}}.
6. Klik på {{ui:PDF}} (vælg A4 eller Letter først) eller {{ui:Word (.docx)}}.

## Hvad du skal se

- Det udfyldte dokument under knapperne, med sine tabeller.
- En liste over advarsler, når et felt ikke kan læses (et tag, der ikke er defineret, en egenskab modellen ikke har, en blok, der aldrig lukkes). Et sådant felt skrives ud som `[?…]`.
- PDF-sider med dokumentets titel og »Side 1 af 3« nederst på hver side; lange tabeller fortsætter med deres overskriftsrække.

## Felter

| Felt | Giver |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | projektets navn og beskrivelse, filens navn, i dag |
| `{{count IfcDoor}}` | hvor mange døre |
| `{{sum IfcWall NetSideArea}}` | en total, med sin enhed |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetik (`+ - * /` og parenteser) over led i firkantede parenteser: `[sum …]`, `[count …]`, og inde i en each `[qty Width]`. `round n` angiver decimalerne, `unit` tilføjer en enhed. Noget, den ikke kan læse, eller en division med nul, skrives ud som `[?…]` og giver en advarsel |
| `{{qty IfcWall NetSideArea by Type}}` | en tabel: én række pr. type med dens antal og total, og en totalrække |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | en tabel, én række pr. element |
| `{{tag Finish}}` | i en løkke elementets værdi; ellers hver værdi, der er brugt (Eg, Maling) |
| `{{tags}}` | tag-definitionerne som en tabel |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | teksten én gang pr. element; delen efter `{{else}}`, når der ingen er |
| `{{#group IfcWall by Type}} … {{/group}}` | teksten én gang pr. type, med `{{value}}`, `{{count}}`, `{{sum Length}}` og en almindelig `{{#each}}` inde i |

Inde i `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC-tagget), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (elementets eget, med sin enhed).

En klasse kan være flere (`IfcDoor|IfcWindow`) eller alle elementer (`*`). Indsnævr en af dem med `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testene er `=`, `!=`, `~` (indeholder), `>`, `<`, `>=`, `<=`, `has` og `hasnot`; sammenkæd flere med `and`; skriv en værdi med mellemrum i »anførselstegn«. `sort Name` sorterer en løkke.

## Lister og specifikationen i et dokument

`{{schedule doors}}` udskriver en modelliste som en tabel i dit kontors layout: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, eller navnet på en opsætning, du har gemt i Lister. `{{specification}}` udskriver projektets specifikation. Skabelonerne **Arbejdstegningslister** og **Specifikation** bruger dem. I forhåndsvisningen klikker du på et tal i en sådan liste for at vælge de elementer, det kom fra. Se [Opsæt, gem og eksportér en liste](topic:schedule-layouts) og [Skriv specifikationen ud fra modellen](topic:specification).

## Godt at vide

- Et felt navngiver en indbygget egenskab (Name, Type, Storey, Class, Material, Mark), et tag (`tag:Fire rating`, eller dets navn), en egenskab (`Pset_WallCommon.FireRating`) eller bare en egenskabs navn (`NetSideArea`, `Width`). Et navn uden præfiks læser hvert elements eget sæt, mængdesæt først, så `Width` på en dør er dørens bredde, ikke en væggs tykkelse. Inde i `where` læser et navn uden præfiks det sæt, som de fleste af de valgte elementer har.
- Mængder er det, filens mængdesæt siger (BimCraft skriver dem for det, den tegner); enhederne kommer fra filens enhedsindstillinger.
- Feltordene (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) forbliver på engelsk i alle sprog. Eksempelskabelonerne er på engelsk.
- Tekst fra modellen bliver aldrig til formatering: et navn med et `*` eller `|` i udskrives, som det er.
- Gem en skabelon, du har ændret, med {{ui:Behold i denne browser}} (kun denne browser har den) eller {{ui:Download skabelonen}}.
- PDF-tekst bruger de standardskrifttyper, PDF har: et tegn uden for vesteuropæisk tekst udskrives som »?«, og statuslinjen siger, hvor mange.
- Skabeloner pr. fag ligger i Biblioteket (type Dokumentskabelon). Under Dokumenter fra modellen vælger du Fra biblioteket…, vælger en, og dens tekst og de tags, den læser, kommer med; redigér den, som du vil. At udgive din egen skabelon til Biblioteket er den samme upload som ethvert andet element. Ikke lavet endnu: beregninger ud over antal og totaler.
