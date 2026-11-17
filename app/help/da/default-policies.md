---
title: "Standardpolitikker: angiv hvad en ny bygning starter med"
summary: "Angiv én gang hvilken vægtype, hvilke niveauer, første ark, LOD-tags, enheder og værktøj en ny bygning starter med, både for metriske og imperiale projekter, og del politikkerne på tværs af kontoret som en lille fil."
keywords: standard, standarder, standardpolitikker, politik, kontorstandard, kontorstandarder, skabelon, ny bygning, første vægtype, metrisk, murværk, LOD, udviklingsniveau, første ark, papir, målestok, niveauer, etagehøjde, niveaunavne, vægværktøj, enheder, del, eksport, import, json
from: 42379aa5
---

:::note
Disse er standarder for **nye** bygninger og **nye** ting. Et projekt, du allerede er begyndt på, ændres ikke.
:::

## Hvad du gør

Fortæl BimCraft, hvad en ny bygning skal starte med, så ingen på kontoret skal ændre de samme ting hver gang. Dette er et add-on: det er slukket, indtil du tænder det, og en politik, du ikke angiver, lader BimCraft's egen standard stå præcis, som den er.

## Trin

1. Åbn {{ui:Indstillinger}}, gå til {{ui:Add-ons}} og tænd {{ui:Standardpolitikker}}.
2. I Indstillinger åbnes fanen **BimCraft**, og du vælger {{ui:Standardpolitikker}} på listen til venstre.
3. Angiv de politikker, du vil have. Hver starter på **BimCraft's egen**, med hvad det er i parentes. En politik med en boks **Metrisk** og en boks **Imperial** tager én værdi for hver slags projekt; udfyld kun dem, du har brug for.
4. Der er ingen Gem-knap: hver ændring gemmes, så snart du laver den. En værdi, der ikke kan bruges, afvises med ord, og den gamle bliver stående.
5. Klik på {{ui:Ny bygning}}. Dialogen udfyldes ud fra dine politikker, og hver værdi, en politik angiver, står med **fra dine Standardpolitikker** ved siden af. Du kan stadig ændre dem alle, før du klikker på {{ui:Opret}}.

## Politikkerne

- **Enheder for en ny bygning**: enhederne skifter til denne ved Opret.
- **Antal niveauer**, **Niveaunavne** og **Niveauhøjde**. I et navn tæller `{n}` 1, 2, 3; `{n0}` tæller 0, 1, 2; `{nn}` og `{nn0}` gør det samme med to cifre. Så giver `Etage {nn0}` Etage 00, Etage 01, Etage 02.
- **Første vægtype**: det, vægværktøjet tegner først. Et metrisk kontor kan starte med Exterior masonry 300 mm, mens imperiale projekter bliver ved med Exterior 2×6.
- **LOD-tag på startvægtyperne**: udviklingsniveauet (LOD 100 til 500), de ni starttyper viser, hvor en type vises. Se [Byg vægkonstruktioner](topic:wall-assemblies).
- **LOD for en nyoprettet vægtype**: tagget, en ny type starter med i typeeditoren. Du kan ændre det dér.
- **Første ark**: dets papir, målestok, arknummer og navn (brug `{level}` for det laveste niveaus navn), eller ingen første ark overhovedet.
- **Annoteringsstørrelser på papir** (Indstillinger › Globalt › Standardpolitikker): kontorets højder, i millimeter som de udskrives, til noter, målsætningstekst, tags, rumnavne, bogstaver i gitterbobler, visningstitler og listetekst. En ny bygning tager dem ved Opret og beholder dem i sin fil. Se [Tegn i fuld størrelse, annotér efter målestok](topic:annotation-sizes).
- **Værktøj, der er aktivt efter Opret**: Vælg, som BimCraft gør af sig selv, eller Væg, så de første to klik på planen allerede tegner en væg.

## Listeopsætning: kontorstandarden

Under **Indstillinger › Globalt › Standardpolitikker**, under **Listeopsætning (kontorstandarden)**, angiver du, hvordan hver liste grupperes, om den har delsummer og en total, dens titel og skrivemåden (store eller små bogstaver) for dens kolonneoverskrifter. Hver liste, der ikke selv angiver det, tager dem, uanset hvem der har opsat den. Se [Opsæt, gem og eksportér en liste](topic:schedule-layouts).

## Del dem på tværs af kontoret

1. I Indstillinger åbnes fanen **Globalt**, og du vælger {{ui:Standardpolitikker}}.
2. Skriv **Kontornavn**, hvis du vil. Det skrives ind i filen.
3. Klik på {{ui:Gem til en fil}}. Du får en lille fil, der ender på `.ccdefaults.json`.
4. På en anden computer tænder du add-on'et, åbner samme sted og klikker på {{ui:Indlæs fra en fil}}. Filens politikker erstatter dem på den computer.

Fanen Globalt har også **Enhedssystem for et nyt projekt**, som gælder for hver app, der har add-on'et, og {{ui:Nulstil alle politikker}}. {{ui:Nulstil til BimCraft's egne standarder}} på fanen BimCraft rydder kun BimCraft's.

## Godt at vide

- Filen er almindelig, åben JSON: en liste over politiknavne og værdier. En politik, filen angiver, som denne version ikke kender, udelades og nævnes i meddelelsen; resten indlæses stadig.
- Politikkerne gemmes i denne browser, for hver CadCraft-app på denne computer. De gemmes ikke i bygningsfilen, og de synkroniseres ikke mellem computere: brug filen.
- LOD-tagget på en starttype kommer fra politikken på denne computer. En type, du laver som en kopi af en starttype, bærer sit tag i bygningsfilen.
- BimCraft har ingen præcisionsindstilling, så der er ingen præcisionspolitik her.
- En bygning startet fra en skabelon tager skabelonens egne niveauer og ark. Vægtypepolitikken og enhedspolitikken gælder stadig.
- Slår du add-on'et fra, er alt BimCraft's eget igen. Dine politikker gemmes, til du tænder det igen.
