---
title: Åbn en hel projektmappe
summary: Peg BimCraft på en projektmappe for at se alle modeller, deres sikkerhedskopier og links på én gang, og lad feltet Start her foreslå, hvilken fil du skal arbejde på.
keywords: mappe, katalog, projektmappe, netværksdrev, server, start her, hvilken fil, sikkerhedskopier, links, xrefs, seneste mapper, træk mappe
from: 16fbdce2
---

## Hvad du gør

Åbn en hel projektmappe, for eksempel den du fik udleveret til et job, og lad BimCraft sortere den: hvilke modeller der findes, hvilke kopier der er sikkerhedskopier, hvad der linker til hvad, hvilke filer der er beskadigede, og hvilken fil du mest sandsynligt vil åbne.

Kun de få kilobyte, hvert modelkort har brug for, læses, så en mappe på et netværksdrev eller en synkroniseret cloudmappe er fint.

## Trin

:::chromium
1. Klik på {{ui:Åbn en mappe}} til venstre (eller midt på den tomme skærm).
2. Vælg projektmappen i vinduet, der åbnes, og klik på **Vælg** (eller **Upload** eller **Åbn**, afhængigt af dit system).
3. Klik på **Vis filer**, når browseren spørger, om siden må vise filer. Det lader kun fanen læse mappen; intet uploades.
4. Vent, mens statuslinjen tæller: "Lister mappen: … filer", derefter "Kontrollerer Revit-filer: … af …".
:::

:::firefox
1. Klik på {{ui:Åbn en mappe}} til venstre (eller midt på den tomme skærm).
2. Vælg projektmappen i vinduet, der åbnes, og bekræft. Firefox kan bede dig bekræfte, at siden må læse mappens filer; de bliver stadig på din computer.
3. Vent, mens statuslinjen siger "Læser mappen: … filer", derefter "Kontrollerer Revit-filer: … af …".
:::

:::safari
1. Klik på {{ui:Åbn en mappe}} til venstre (eller midt på den tomme skærm).
2. Vælg projektmappen i vinduet, der åbnes, og klik på **Upload**. Ordet lyder sådan, men intet forlader din Mac: filerne overdrages blot til fanen.
3. Vent, mens statuslinjen siger "Læser mappen: … filer", derefter "Kontrollerer Revit-filer: … af …".
:::

Du kan også **trække mappen** fra {{pick:mac=Finder|windows=Stifinder|linux=din filhåndtering}} over på siden. En trukket mappe åbnes uden tilladelsesspørgsmål i alle browsere.

## Hvad du ser

Mappeoversigten fylder midten:

- Mappens navn, antal modeller, CAD-tegninger, IFC-modeller og filer samt den samlede størrelse.
- Røde eller gule noter, hvis nogle filer er ufuldstændige, eller nogle koblede filer mangler i mappen.
- Feltet {{ui:Start her}}: den fil, BimCraft foreslår, at du åbner, med begrundelserne.
- **Modeller**: én række pr. model, med dens sikkerhedskopier grupperet under sig.
- **Koblede og refererede filer**, **IFC-modeller**, **CAD-tegninger** og **Lagt til side**, når mappen har nogen.

Til venstre opsummerer panelet {{ui:Mappe}} det; **Problemer** siger "Ingen", når hver kopi er i orden.

## Brug feltet Start her

Feltet nævner én fil og siger hvorfor, for eksempel:

- "Nyeste gemte arbejde i denne mappe (3. mar. 2025)."
- "*Consultant.rvt* er koblet ind i andre modeller, så den er baggrund, ikke filen, du skal redigere."
- "*Tower.rvt* ser ud til at være det oplagte valg, men den er beskadiget; dens sidste gode kopi er fra …"
- "Dette er en central model: åbn den i Revit med "Create New Local" og arbejd i den lokale kopi."

1. Læs begrundelserne.
2. Klik på {{ui:Åbn dens kort}} for at læse den fils kort, eller {{ui:Vis den på listen}} for at finde dens række under **Modeller**.
3. Tjek med den, der sidst arbejdede på projektet, før du stoler på filen. Feltet siger det også: det er et bedste gæt ud fra navne, datoer og links.

## Åbn filer fra oversigten

1. Klik på en models navn for at åbne dens kort. Kortet kontrollerer hvert link mod mappen.
2. Klik på {{ui:Tilbage til}} og mappens navn øverst på kortet (eller {{ui:Tilbage til mappen}} til venstre) for at vende tilbage.
3. Klik på en IFC-fil under **IFC-modeller** for at åbne den i 3D.
4. Klik på en DWG- eller DXF-fil under **CAD-tegninger** for at åbne den i 2D. Dens koblede tegninger og billeder findes automatisk i mappen.

## Genåbn en mappe senere

:::chromium
Mapper, du har åbnet med {{ui:Åbn en mappe}} eller ved at trække dem, vises under {{ui:Seneste mapper}} til venstre. Klik på {{ui:Genåbn}} og mappens navn for at åbne den igen uden at vælge den. Efter en genstart af browseren spørger Chrome eller Edge en gang til; vælg "Tillad ved hvert besøg" for at stoppe spørgsmålet. Listen gemmes kun i denne browser og sendes aldrig nogen steder hen. Klik på × for at glemme en mappe.
:::

:::firefox safari
Denne browser kan ikke huske mapper mellem besøg. Vælg mappen igen med {{ui:Åbn en mappe}}, eller træk den ind.
:::

## Typiske fejl

- **At vælge en mappe, der er for stor.** Over 20.000 filer: "Denne mappe har mere end 20.000 filer. Vælg en mindre mappe, for eksempel ét projekt." Vælg projektmappen, ikke hele drevet.
- **At vælge den overordnede mappe for flere projekter.** Feltet {{ui:Start her}} vælger så på tværs af projekter. Vælg ét projekt.
- **Revits egne mapper ser ud til at blive ignoreret.** Mapperne `*_backup`, `*_log` og `Revit_temp` er rengøring og vises under **Lagt til side**, ikke læst.
- **At forvente, at en model åbnes i 3D fra sit kort.** En projektfil er kun et kort. Åbn dens IFC-eksport.
- **Telefoner og tablets.** Mange mobile browsere kan slet ikke vælge mapper. Brug en computer.

Se [Tjek en mappe for beskadigede kopier, manglende links og rester](topic:check-folder-health) og [Mappeoversigt: roller, statusser og links](topic:folder-roles).
