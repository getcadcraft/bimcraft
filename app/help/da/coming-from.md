---
title: Når du kommer fra andre BIM- og tegneprogrammer
summary: Hvordan vaner fra BIM-modelleringsprogrammer til pc og fra DWG-visning svarer til BimCraft, og de forskelle, der driller folk.
keywords: skift, migrér, velkendt, BIM til pc, familie, parametre, projektbrowser, egenskabspalette, view cube, xref, lagstyring, forskelle, sammenlign
from: 2de629af
---

Hvis du kender Revit, vil det meste af BimCraft føles velkendt i ord og ukendt i omfang. Den vigtigste forskel: **denne version læser og inspicerer modeller og redigerer IFC-data. Den modellerer ikke som Revit endnu.** Du kan ikke tegne vægge, placere familier, lave visninger eller ark, eller gemme en projektfil. Det, du kan, er at åbne næsten enhver bygningsfil på en computer med en browser, se hvad der er i den, kontrollere en hel projektmappe og rette data i en IFC-model.

## Vaner, der svarer til

| Hvis du plejer | I BimCraft |
|---|---|
| Åbne en `.rvt` i Revit for at se modellen | BimCraft åbner `.rvt` som et filkort: version, projektoplysninger, links, forhåndsvisning. Til 3D-modellen eksportér IFC og åbn den. [Læs en projekt- eller familiefil](topic:read-rvt-file) |
| Tjekke, hvilken version en fil blev gemt i, før du åbner den | Kortet siger »gemt i Revit …« øverst, uden at opgradere eller ændre filen |
| Projektbrowseren | Ingen browser med visninger og ark. En IFC-model har listerne {{ui:Etager}} og {{ui:Elementer}}; en tegning har faneblade for ark |
| Egenskabspaletten | Panelet {{ui:Egenskaber}} til højre, for det element, du klikkede på. IFC-egenskabssæt i stedet for parametergrupper |
| Instans- og typeparametre | Instans-egenskabssæt og sæt markeret »(type)«. En ændring af en type gælder for hvert element af typen, som i Revit. [Ændr en typeegenskab for hvert element af en type](topic:type-vs-instance) |
| Rediger type | Ingen dialog: klik på en værdi i et »(type)«-sæt og skriv |
| Markere mange elementer, filtre, vælg alle instanser | Ét element ad gangen. Ikke lavet endnu |
| Visningskuben og navigationshjulet | En visningskube nederst til højre med fire knapper ({{ui:Tilpas}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}) og fri kredsning. Intet navigationshjul |
| Shift og midterknap-træk for at kredse, midterknap-træk for at panorere | Venstre træk kredser, højre træk (eller {{key:Shift}} og træk) panorerer, hjulet zoomer. Menustilen {{ui:BIM-bånd}} skifter til midterknap-panorering og {{key:Shift}} med midterknappen for at kredse. [Menuer, taster og mus](topic:menus-keys-and-mouse) |
| Gulvplaner, snit, snitbokse | Ét {{ui:Snit}}-plan ad gangen ({{key:X}}); ingen snitboks og ingen 2D-planer. [Skær en IFC-model med et snitplan](topic:section-plane) |
| Skjul i visning, isolér, synlighed/grafik | {{ui:Etager}} til og fra, {{ui:Zoner}} og {{ui:Kanter}}. Ingen skjulning pr. element endnu |
| Rum | IFC-zoner, skjult i første omgang. Klik på {{ui:Zoner}} |
| Gem, Gem som, synkronisér med central | {{ui:Gem som IFC}} downloader en ny IFC-fil. Originalen ændres aldrig. Ingen central model og ingen fælles arbejdsfil |
| Fortryd med {{key:Mod+Z}} | Virker på IFC-redigeringer, indtil du gemmer. [Ændr IFC-egenskaber og gem en redigeret kopi](topic:edit-ifc-properties) |
| Administrér links | Åbn projektmappen: hvert link kontrolleres og markeres **I denne mappe**, **Samme navn fundet**, **Biblioteksfil** eller **Ikke i denne mappe**. [Åbn en hel projektmappe](topic:open-project-folder) |
| Revision, eller at åbne en fil for at se, om den er beskadiget | Mappeoversigten kontrollerer hver kopi og backup for at være afkortet, på få sekunder. [Tjek en mappe for beskadigede kopier](topic:check-folder-health) |
| At vælge den rigtige fil fra en rodet mappe | Feltet {{ui:Start her}} foreslår én med begrundelser |

Hvis du for det meste åbner modeller for at kontrollere dem, som i et program til modelkontrol eller IFC-visning, så vælg menustilen {{ui:Fremviser}}: visnings- og kontrolværktøjerne kommer først, og byggeværktøjerne venter i én menu. Se [Menuer, taster og mus](topic:menus-keys-and-mouse).

## Fra visning af DWG-filer

Hvis du åbner DWG-filer i AutoCAD eller en DWG-fremviser:

| Hvis du plejer | I BimCraft |
|---|---|
| Model- og layoutfaner nederst | Faner over tegningen: {{ui:Model}} og én pr. ark |
| ZOOM Extents, dobbeltklik på hjulet | Dobbeltklik, {{key:F}} eller {{ui:Tilpas}} |
| Panorér med midterknappen | Træk med en hvilken som helst knap |
| Lagstyringen | Listen {{ui:Lag}}: sæt flueben for at vise, fjern det for at skjule, {{ui:Alle til}} og {{ui:Alle fra}} |
| Xref-styringen | **Eksterne tegninger** til højre, med **Vist** eller **Ikke fundet**, og {{ui:Tilføj eksterne tegninger…}} |
| Udskriftsforhåndsvisning | {{ui:Udskriftsvisning}} eller {{key:P}}: sort på hvid med linjetykkelser. Den udskriver ikke |
| Udtræk af blokattributter | Fanen {{ui:Udstyr}} til mærkede tegninger af serveringskøkkener, med {{ui:Download CSV}} |
| Mål, tegn, rediger, gem som | Ikke i BimCraft. CadCraft-tegneprogrammet tegner og redigerer |

## Forskelle, der driller folk

- **Det kører i browseren, og browseren er forsigtig med dine filer.** BimCraft kan kun læse filer og mapper, du giver det, ved at vælge dem eller trække dem ind. Det kan ikke åbne en fil af sig selv, og det kan ikke gemme over en. Hvert gem er en download.
- **Intet uploades.** Ordet »upload« i nogle browseres mappedialoger er browserens egen formulering. Filerne bliver på din computer.
- **IFC er modelformatet.** En projektfil åbnes som et kort, fordi dens 3D-indhold ikke er dokumenteret. Brug IFC som den måde, modeller kommer ind i BimCraft på.
- **Redigeringer er kopi-ved-skrivning.** Ændring af ét elements værdi ændrer aldrig dets naboer, selv når eksportøren delte værdien mellem dem. Typeegenskaber er den bevidste undtagelse.
- **Intet projekt, ingen visninger.** BimCraft viser én fil ad gangen og husker intet om den, når du lukker fanen, undtagen navnene på de seneste mapper i Chrome og Edge.
- **Mac-taster.** Hvor Revits Windows-genveje bruger Ctrl, bruger BimCraft's genveje {{key:Mod}}: Command på en Mac.
- **Dine musevaner.** Kredsning er venstre knap, ikke Shift og midterknappen, medmindre du vælger menustilen {{ui:BIM-bånd}} eller selv sætter knapperne i [Menuer, taster og mus](topic:menus-keys-and-mouse).

Se [Hvad der ikke er bygget endnu](topic:not-built-yet) for, hvad du i dag kan bruge i stedet.
