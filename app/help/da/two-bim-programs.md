---
title: Arbejde mellem to BIM-programmer
summary: Send en model fra et BIM-program til et andet via IFC med BimCraft i midten, behold dens GlobalIds, egenskabssæt og klassifikationer, indstil begge programmer til de samme egenskaber, og se, hvad der kom tilbage.
keywords: ifc, rundrejse, interoperabilitet, globalid, guid, egenskabssæt, psets, klassifikationer, delte parametre, egenskabsmapping, oversætter, bcf, koordinering, udveksling
from: 9f224176
---

## Hvad du laver

Flyt en model mellem to BIM-programmer, fx fra Revit til Archicad og tilbage, via IFC, med BimCraft i midten til at kontrollere den, tilføje til den og rapportere, hvad der overlevede. Ingen af programmernes egne filformater læses: alt rejser som IFC.

## Hvad BimCraft bevarer

Når du ændrer en model i BimCraft og klikker på {{ui:Save as IFC}}, skrives hver linje, du ikke har ændret, tilbage præcis, som den var. Det betyder:

- **GlobalIds** forbliver de samme, og det andet program kan matche hvert element med det, det sendte.
- **Egenskabssæt** og deres værdier forbliver, bortset fra de værdier, du har ændret.
- **Klassifikationer** forbliver knyttet til deres elementer.

## Indstil begge programmer til de samme egenskaber

1. Åbn modellen i BimCraft (og projektpakken, hvis du har en: dens egenskabsgrupper tilføjes).
2. Åbn {{ui:Between two BIM programs}} i venstre panel.
3. Under **Egenskabsmapping** downloader du det, hvert program har brug for:
   - {{ui:Shared parameters}}: en fil med delte parametre. Indlæs den i Revit med Manage › Shared Parameters, og tilføj parametrene til de kategorier, der har brug for dem.
   - {{ui:IFC export property sets}}: en brugerdefineret egenskabssætfil. Vælg den i Revits IFC-eksportindstillinger under user-defined property sets, så den eksporterede IFC bærer det samme sæt og de samme egenskabsnavne.
   - {{ui:Mapping table (CSV)}}: hver egenskab med dens IFC-sæt og -navn, dens type og de tilsvarende navne i hvert program. Archicads mappingfiler er ikke et offentliggjort format, så indstil dens IFC-oversætter og egenskabshåndtering ud fra denne tabel manuelt.
   - {{ui:Mapping file}}: hele mappingen som én fil, der gemmes sammen med projektet.

Standardsæt (Pset_ og Qto_) udelades fra filen med delte parametre: begge programmer skriver dem ud fra deres egne data.

## Send modellen og hent den tilbage

1. Eksportér IFC fra det første program med GlobalIds bevaret (Revit: "Store the IFC GUID in an element parameter after export" slået til).
2. Åbn den i BimCraft, kontrollér den ({{ui:Model checks}}, {{ui:Clash check}}), tilføj emner ({{ui:Issues}}, BCF), ændr værdier, hvis du har brug for det, og klik på {{ui:Save as IFC}}.
3. Åbn den gemte IFC i det andet program, arbejd på den, og eksportér IFC derfra med GlobalIds bevaret (Archicads oversætter: "Global Unique Identifiers: Keep existing").
4. Tilbage i BimCraft: åbn den model, der blev sendt, og tilføj den, der kom tilbage ({{ui:Add a model}} under Modeller).
5. I {{ui:Between two BIM programs}} vælger du **Sendt** og **Kom tilbage**, og klikker på {{ui:Make the report}}.

## Læs rapporten

- **Elementer**: hvor mange der kom tilbage med det samme GlobalId, hvor mange der mangler, og hvor mange der er nye. Elementer med et nyt GlobalId vises som ét manglende og ét nyt: det andet program bevarede det ikke.
- **IFC-klasse ændret**: elementer, der kom tilbage som en anden slags element.
- **Egenskabsværdier bevaret**: andelen af værdier, der kom tilbage uændret. Listen nedenfor viser de egenskaber med flest ændrede eller manglende værdier.
- **Klassifikationer**: bevaret, ændret (samme system, anden kode) eller manglende.

{{ui:Download the report (CSV)}} giver hver egenskab med dens tællinger. For at se, hvilke elementer der flyttede sig eller ændrede form, brug {{ui:Compare versions}} på de samme to modeller.

:::note
BimCraft kører hverken det ene eller det andet program. Hvilke indstillinger der bærer en værdi med, afhænger af hvert programs IFC-indstillinger: rapporten viser, hvad der faktisk kom tilbage, så prøv en indstilling, eksportér igen og sammenlign.
:::

## Emner rejser som BCF

Emner, du rejser i BimCraft, eksporteres som BCF ({{ui:Issues}}), som begge programmer kan læse med deres BCF-værktøjer. Et spørgsmål om et element når dermed personen, der arbejder i det andet program, med sit synspunkt.

Se også [Åbn en projektpakke](topic:open-project-bundle), [Fra en projektfil til BimCraft via IFC](topic:rvt-to-ifc) og [Sammenlign to versioner af en model](topic:compare-versions).
