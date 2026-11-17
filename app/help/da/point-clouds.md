---
title: Vis en punktsky ved siden af modellen
summary: Åbn en laserscanning (LAS, LAZ, E57, PLY, PCD, PTX, PTS eller XYZ) i 3D-visningen alene eller sammen med en IFC-model, farvelæg den, skær et tyndt udsnit igennem den, mål til dens punkter, og giv den til tegneprogrammet for at spore as-built-linjer.
keywords: punktsky, laserscanning, scanning, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, opmåling, registrering, udsnit, planudsnit, fang, mål, spor, scan til BIM
from: d0a3e740
---

## Hvad du gør

Se en laserscanning af en bygning ved siden af dens model: kontrollér, at det, der blev bygget, stemmer med projektet, mål mellem scannede punkter, og skær et tyndt udsnit for at aflæse vægge, døre og søjler.

## Trin

1. Åbn punktskyen: {{ui:Åben}} en fil `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` eller `.xyz`, eller slip den på siden (se emnet om punktskyformater for, hvad hver enkelt giver, og hvad der skal eksporteres fra en scanners egen software). Når en model er åben, slutter punktskyen sig til modellen i 3D-visningen; åbning af en punktsky lukker aldrig modellen eller dens ikke-gemte ændringer. Uden en model åbnes punktskyen alene.
2. Punktsky-linjen vises under værktøjslinjen. Den siger, hvor mange punkter der vises, og hvor mange filen har.
3. Vælg {{ui:Farve efter}}: filens egne farver (når scanneren har gemt dem), {{ui:Højde}}, {{ui:Intensitet}}, {{ui:Klasse}} (LiDAR-klasser som terræn, vegetation og bygning) eller {{ui:Én farve}}. {{ui:Størrelse}} gør punkterne større eller mindre.
4. Klik på {{ui:Plan}} under {{ui:Udsnit}} for kun at beholde et tyndt bånd 1.2 m over det laveste punkt, set oppefra: vægge, dåbninger og søjler læses som en etageplan. {{ui:Front}} og {{ui:Side}} skærer lodrette bånd til facader og snit. Flyt båndet med {{ui:Ved}}, og skift {{ui:Tykkelse}} (meter). {{ui:Fra}} viser hele punktskyen igen.
5. Klik på {{ui:Mål}} i værktøjslinjen. Markøren fanger punkterne i punktskyen (feltet siger "Punktsky"), så du kan måle fra væg til væg i udsnittet, eller fra et modelelement til scanningen. Et modelhjørne eller en kant inden for rækkevidde vinder stadig.
6. Med {{ui:Mål}} › {{ui:Placering}} giver et punkt i punktskyen dets breddegrad og længdegrad fra punktskyens eget koordinatsystem, når filen angiver et.
7. {{ui:Skjul}} skjuler punktskyen et øjeblik; {{ui:Fjern}} tager den ud. {{ui:Vis}} › {{ui:Punktsky}} skjuler eller viser linjen.

## Hvor punktskyen placeres

{{ui:Placér}} i linjen siger, hvordan punktskyen flugter med modellen:

- **Modelkoordinater**: punktskyens tal er modellens egne (en scanning registreret i designets koordinater).
- **Kortkoordinater**: modellen har en kortkonvertering (IfcMapConversion), og punktskyen er i det samme projicerede system: punktskyen placeres gennem den. Hvis de to angiver forskellige systemer, siger statuslinjen det.
- **Centreret på modellen**: når ingen af dem placerer punktskyen nær modellen, lægges dens midte på modellens midte og dens laveste punkt på modellens gulv. Vælg et andet valg for at overskrive det.

Når filen ikke angiver sine enheder, læser BimCraft meter og tilbyder {{ui:Enheder}} i linjen.

## Spor as-built-linjerne

Klik på {{ui:Spor i CadCraft}} for at give punktskyen til tegneprogrammet i en ny fane. Den åbnes der under tegningen, hvor et planudsnit og objektfang lader dig tegne væggene over scanningen. Se CadCraft-emnet om punktskyer.

## Hvor mange punkter

En scanning kan indeholde hundreder af millioner punkter. BimCraft læser hvert punkt én gang og beholder en jævn andel af dem til tegning: {{ui:Vis}} i linjen angiver, hvor mange (1, 2, 5 eller 10 millioner). Flere punkter kræver mere hukommelse og et hurtigere grafikkort. Tællinger pr. LiDAR-klasse gælder for alle punkter i filen.

:::note
Filerne læses på denne computer; intet uploades. LAS 1.0–1.4 og LAZ læses (LAZ-filer op til 1 GB, holdt i hukommelse, mens de læses); E57-filer op til 6 millioner punkter og 512 MB for nu (større scanninger: eksportér LAS eller LAZ); PLY, PCD og PTX helt; tekstpunktskyer er `x y z`, med farve (`r g b`) og intensitetskolonner, når de findes.
:::

## Flere scanninger

Scanninger taget fra forskellige positioner kan registreres i én ramme, finjusteres med ICP og eksporteres som én LAS eller E57: se [Registrér flere scanninger til én](topic:register-scans).
