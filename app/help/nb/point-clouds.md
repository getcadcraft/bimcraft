---
title: Vis en punktsky ved siden av modellen
summary: Åpne en laserskanning (LAS, LAZ, E57, PLY, PCD, PTX, PTS eller XYZ) i 3D-visningen alene eller sammen med en IFC-modell, fargelegg den, lag et tynt snitt gjennom den, mål til punktene og send den til tegneprogrammet for å tegne over de utførte linjene.
keywords: punktsky, laserskanning, skanning, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, som bygget, oppmåling, registrering, snitt, planskjæring, fang, mål, tegn over, skanning til bim
from: d0a3e740
---

## Hva du skal gjøre

Se på en laserskanning av en bygning ved siden av modellen: kontroller at det som er bygget samsvarer med prosjektet, mål mellom skannede punkter, og lag et tynt snitt for å lese av vegger, dører og søyler.

## Trinn

1. Åpne skyen: {{ui:Åpen}} en `.las`-, `.laz`-, `.e57`-, `.ply`-, `.pcd`-, `.ptx`-, `.pts`- eller `.xyz`-fil, eller slipp den på siden (se emnet om punktskyformater for hva hver av dem gir, og hva du skal eksportere fra en skanners egen programvare). Med en modell åpen blir skyen med i modellen i 3D-visningen; å åpne en sky lukker aldri modellen eller dens ulagrede endringer. Uten en modell åpnes skyen alene.
2. Punktskylinjen vises under verktøylinjen. Den sier hvor mange punkter som vises, og hvor mange filen har.
3. Velg {{ui:Farge etter}}: filens egne farger (når skanneren lagret dem), {{ui:Høyde}}, {{ui:Intensitet}}, {{ui:Klasse}} (LiDAR-klasser som bakke, vegetasjon og bygning) eller {{ui:Én farge}}. {{ui:Størrelse}} gjør punktene større eller mindre.
4. Klikk {{ui:Plan}} under {{ui:Snitt}} for å beholde bare et tynt bånd 1.2 m over det laveste punktet, sett ovenfra: vegger, døråpninger og søyler leses som en plantegning. {{ui:Front}} og {{ui:Side}} kutter loddrette bånd for fasader og snitt. Flytt båndet med {{ui:Ved}}, og endre {{ui:Tykkelse}} (meter). {{ui:Av}} viser hele skyen igjen.
5. Klikk {{ui:Mål}} i verktøylinjen. Pekeren fester seg til skyens punkter (etiketten sier «Punktsky»), slik at du kan måle fra vegg til vegg i snittet, eller fra et modellelement til skanningen. Et hjørne eller en kant i modellen innenfor rekkevidde vinner fortsatt.
6. Med {{ui:Mål}} › {{ui:Posisjon}} gir et skypunkt breddegrad og lengdegrad fra skyens eget koordinatsystem, når filen oppgir et.
7. {{ui:Skjul}} skjuler skyen en stund; {{ui:Fjern}} tar den ut. {{ui:Vis}} › {{ui:Punktsky}} skjuler eller viser linjen.

## Hvor skyen havner

{{ui:Plasser}} i linjen sier hvordan skyen stiller seg på linje med modellen:

- **Modellkoordinater**: skyens tall er modellens egne (en skanning registrert til prosjektets koordinater).
- **Kartkoordinater**: modellen har en kartkonvertering (IfcMapConversion), og skyen er i samme projiserte system: skyen plasseres gjennom den. Hvis de to angir ulike systemer, sier statuslinjen det.
- **Sentrert på modellen**: når ingen av dem plasserer skyen nær modellen, legges midten på modellens midte og det laveste punktet på modellens gulv. Velg et annet alternativ for å overstyre det.

Når filen ikke sier hvilke enheter den bruker, leser BimCraft meter og tilbyr {{ui:Enheter}} i linjen.

## Tegn opp de utførte linjene

Klikk {{ui:Tegn over i CadCraft}} for å sende skyen til tegneprogrammet i en ny fane. Den åpnes der under tegningen, hvor et planskjæring og objektfang lar deg tegne veggene over skanningen. Se emnet om punktskyer i CadCraft.

## Hvor mange punkter

En skanning kan ha hundrevis av millioner punkter. BimCraft leser hvert punkt én gang og beholder en jevn andel av dem å tegne: {{ui:Vis}} i linjen angir hvor mange (1, 2, 5 eller 10 millioner). Flere punkter krever mer minne og et raskere grafikkort. Tall per LiDAR-klasse gjelder alle punkter i filen.

:::note
Filene leses på denne datamaskinen; ingenting lastes opp. LAS 1.0–1.4 og LAZ leses (LAZ-filer opptil 1 GB, holdt i minnet mens de leses); E57-filer opptil 6 millioner punkter og 512 MB foreløpig (større skanninger: eksporter LAS eller LAZ); PLY, PCD og PTX leses fullt ut; tekstskyer er `x y z`, med farge (`r g b`)- og intensitetskolonner når de finnes.
:::

## Flere skanninger

Skanninger tatt fra ulike posisjoner kan registreres i ett koordinatsystem, forbedres med ICP og eksporteres som én LAS eller E57: se [Registrer flere skanninger til én](topic:register-scans).
