---
title: "Gardinsystemer: glasvægge på et gitter med sprosser"
summary: "Tegn et gardinsystem som en væg, eller læg det på en flade, og angiv derefter gitterlinjerne og sprosserne. Det gemmes som en IfcCurtainWall med sine ruder og sprosser."
keywords: gardinsystem, gardinvæg, gardingitter, sprosse, verglasning, butiksfacade, glasvæg, panel, rude, efter flade, flade, masse, gitterlinje, afstand, profil, tværsprosse, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Hvad du gør

Lav en glasvæg af ruder mellem sprosser, ændr hvor gitterlinjerne står, og vælg hvilke linjer der får en sprosse.

## Trin

1. Slå **Tegn** til, og åbn menuen **Byg** (i båndlayout: fanen Arkitektur).
2. Vælg **Gardinsystem**. I dens række angiver du toppen (niveauet over, eller en højde), en linje for hver given afstand langs den, en linje for hver given afstand op ad den (lad feltet være tomt for ingen), om den får sprosser, og sprosseprofilen.
3. Klik, hvor det starter og hvor det slutter, ligesom når du tegner en væg. Shift holder det kvadratisk.
4. For at ændre gitteret vælg **Gardingitter** og klik på systemet:
   - **Tilføj en linje**: en lodret linje placeres, hvor du klikker. For en vandret linje angiver du først dens højde i **Ved**.
   - **Flyt en linje**: klik på linjen, og klik derefter på, hvor den skal stå.
   - **Fjern en linje**: klik på linjen.
   - **Angiv efter afstand**: skriv afstanden i **Hver**, og klik derefter på systemet.
5. For at ændre sprosser vælg **Sprosse**, vælg hvad den arbejder på (den lodrette linje du klikker på, den vandrette linje i en højde, kanten, eller hver linje), vælg **Placér sprosser** eller **Fjern sprosser** og en profil, og klik derefter på systemet.
6. Vælg et system for at se alt i **Egenskaber**: hver gitterlinje med dens placering, et flueben for dens sprosse og en knap til at fjerne den; afstanden; kanten; profilen; rudetykkelsen.

## Efter flade

**Efter flade** laver et gardinsystem på en plan flade, du klikker på i 3D-visningen. Dens række har de samme gitter- og sprosseindstillinger.

- Det virker på enhver plan flade af ethvert element, 3D-visningen viser: en masse, en væg, et dæk, et tagplan, en søjle, et placeret element. Fladen kan være lodret, skrående eller vandret.
- Systemet tager fladens omrids. En gavl eller en anden underlig form skærer ruderne og sprosserne til den.
- Det kan i stedet lave en **væg** langs foden af en lodret flade, så høj som fladen. En væg her står altid lodret, så en skrå eller vandret flade kan ikke give en væg.
- Det laver ikke et tag. Et tag i BimCraft beregnes ud fra et niveaus omrids og en hældning, ikke fra en enkelt flade.
- En buet flade er mange små plane flader: ét klik tager en af dem.
- En flade med åbninger: systemet dækker fladens ydre omrids.

## Sådan måles det

- **Bruttoareal** er systemets omrids.
- **Glasareal** er ruderne, som de er lavet: hver rude mister en halv sprossebredde på en side med en gittersprosse og en hel bredde ved en kantsprosse.
- En lodret sprosse går igennem fra kant til kant. En vandret sprosse stopper ved hver lodret sprosse og ved kanten. Kantsprosser ligger inden for omridset; hvor to mødes, går den mest lodrette igennem. Samlinger skæres lige, ikke med gering.
- **Lister** har en liste **Gardinsystemer** med disse tal, når modellen har et.

## I IFC-filen

En IfcCurtainWall på sit niveau, bestående af én IfcPlate (gardinpanel) for hver rude og én IfcMember (sprosse) for hvert sprossestykke, hver med sin egen form, sit materiale og sine grundmængder.

## Godt at vide

- Enhver størrelse laves, som du beder om. Kun et omrids uden areal afvises, for der er intet at lave.
- Et system tegnet som en væg beholder den højde, det blev tegnet med. Flytter du et niveau senere, skal du angive højden igen i Egenskaber.
- Flyt-værktøjet flytter endnu ikke et gardinsystem. Slet det og tegn det igen, eller ændr dets gitter på stedet.
- Fortryd tager hvert trin tilbage: hele systemet, én gitterændring, én sprosseændring.
