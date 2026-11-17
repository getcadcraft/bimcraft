---
title: Se en DWG- eller DXF-tegning i 3D
summary: Bytt en tegnings modellrom til 3D for å se høyder, tykkelse, 3D-flater, nett og blokker, bane rundt den, klikke et objekt for å se egenskapene og se hva som ennå ikke er tegnet.
keywords: 3d, dwg, dxf, tegning, modellrom, bane, snitt, kutt, klipping, velg, markering, egenskaper, attributter, håndtak, høyde, tykkelse, ekstrudering, 3dface, polyface, nett, 3d-polylinje, blokker, visninger, perspektiv, parallell, utstrekning, acis, volumlegemer
from: a0c6cd17
---

## Hva du skal gjøre

Se en tegnings modellrom i 3D. Linjer og polylinjer står i sine virkelige høyder, objekter med tykkelse reiser seg som vegger, og 3D-flater, nett og 3D-blokker vises som overflater du kan gå rundt. Arkene forblir 2D.

## Trinn

1. Åpne en DWG eller DXF. Se [Vis en DWG- eller DXF-tegning](topic:view-dwg). Den åpnes i 3D med mindre {{ui:Innstillinger}} › {{ui:BimCraft}} › **Tegninger åpnes i** sier {{ui:Modell (2D)}}.
2. Fra 2D klikker du {{ui:3D}} i linjen over tegningen, eller trykker {{key:3}}.
3. Vent et øyeblikk første gang: statuslinjen sier «Bygger tegningen i 3D…», og deretter hvor mange linjer og flater den viser.
4. Bane, panorer og zoom (se tabellen under).
5. Klikk en visning i den andre linjen: {{ui:Iso}}, {{ui:Topp}}, {{ui:Bunn}}, {{ui:Front}}, {{ui:Bak}}, {{ui:Venstre}} eller {{ui:Høyre}}.
6. Klikk {{ui:Perspektiv}} for å veksle mellom en perspektivisk og en parallell visning.
7. Klikk {{ui:Utstrekning}} eller trykk {{key:F}} for å se hele tegningen igjen.
8. Klikk {{ui:3D}} igjen, trykk {{key:3}}, eller klikk {{ui:Modell}} eller en arkfane for å gå tilbake til 2D.

## Hva du bør se

- Modellrom i 3D, Z opp, i tegningens egne farger. Flater er et nyanse lysere enn kantene.
- Lag du slår av i {{ui:Layer}} forsvinner også fra 3D-visningen.
- Til høyre: antall linjer og flater, størrelsen på tegningen i X, Y og Z, **Bare i 2D-visningen** og **Ikke tegnet ennå**.

## Kutt den med et snittplan

Klikk {{ui:Snitt}} på 3D-linjen, eller trykk {{key:X}}. Linjen under den fungerer som for IFC-modeller (se [Klipp en IFC-modell med et snittplan](topic:section-plane)): kutt fra {{ui:Topp}}, {{ui:Front}} eller {{ui:Side}}, dra eller skriv inn forskyvningen — i tegningens egne enheter her — og {{ui:Snu}} for å beholde den andre siden. Det planet kutter bort, kan ikke velges. Går du tilbake til 2D, fjernes kuttet.

## Se et objekts egenskaper

Klikk et objekt i 3D-visningen. Det får valgfargen, og {{ui:Egenskaper}} viser hva filen sier om det: type, layer, farge, linjetype og håndtak, deretter egne data, for eksempel en linjes start, slutt og lengde, en sirkels senter og radius, et 3D-flates hjørner, eller en blokkreferanses blokk, innsettingspunkt, skala, rotasjon og attributtverdier.

- En blokkreferanse velges som helhet, og blokkene som er nøstet i den, også.
- Et klikk noen få piksler fra en linje velger linjen.
- Hold nede {{key:Mod}} og klikk for å velge flere objekter, eller for å ta ett ut; {{ui:Egenskaper}} teller dem da etter type.
- {{key:Esc}}, eller et klikk på tomt rom, fjerner valget.
- Objekter på lag du har slått av, kan ikke velges.

## Bevege seg rundt

:::mouse
| For å | Gjør dette |
|---|---|
| Bane | Dra med midtknappen, eller med venstreknappen |
| Panorer | Dra med høyreknappen, eller hold nede {{key:Shift}} og dra |
| Zoom | Rull hjulet; det zoomer mot det som er under pekeren |
| Se alt | {{ui:Utstrekning}} eller {{key:F}} |
| Se fra en side | Klikk en flate, kant eller hjørne på visningskuben nede til høyre |
:::

Visningskuben kan byttes ut med et aksesymbol, eller skjules, i {{ui:Innstillinger}}. Se [BimCraft-innstillinger](topic:settings).

:::mac mouse
På en styreplate: sveip med to fingre for å bane, hold nede {{key:Shift}} og sveip for å panorere, og klyp for å zoome.
:::

:::touch
Dra med én finger for å bane. Klyp med to fingre for å zoome, og flytt dem sammen for å panorere.
:::

## Hva som tegnes i 3D

| I tegningen | I 3D |
|---|---|
| Linjer, 3D-polylinjer | I sine virkelige høyder |
| Polylinjer, sirkler, buer, ellipser | I sitt eget plan, på sin høyde, vippet når tegningen vipper dem |
| Tykkelse på linjer, polylinjer, sirkler og buer | Vegger i den høyden; sirkler er lukket i topp og bunn |
| 3D-flater, polyface-nett, polygonnett | Skyggelagte overflater med sine synlige kanter |
| Blokker | Plassert, vendt og skalert i 3D, nøstede blokker også |
| Skraveringer | Konturene deres |
| Vanlig 2D-strektegning | Flatt, der den ble tegnet |

## Bare i 2D-visningen

Tekst, flerlinjetekst og synlige attributter for blokker tegnes i 3D, i sitt eget plan på sin egen høyde, og et klikk på dem velger dem. Brede polylinjer viser bredden sin som et flatt bånd. Flerpekere, bilder og skraveringsmønstre telles under **Bare i 2D-visningen**: se dem på fanen {{ui:Modell}} eller på arkene.

## Ikke tegnet ennå

Faste stoffer og flater lagret som ACIS-legemer (3D-volumlegemer, legemer, regioner og flater) og subdivision-nett listes under **Ikke tegnet ennå** med hvor mange det er. De hoppes over, og gjettes ikke på.

## Vanlige feil

- **Alt ser flatt ut.** Tegningen er 2D: linjene har ingen høyde. Klikk {{ui:Front}} for å sjekke; en flat tegning vises som en linje.
- **En faststoffmodell viser ingenting.** Faststoff laget med en faststoffmodellerer er ACIS-legemer, listet under **Ikke tegnet ennå**. Eksporter modellen som IFC eller som 3D-flater fra programmet som laget den.
- **Tegningen er en liten klynge midt i bildet.** Noe langt borte i modellrommet, for eksempel en gammel kopi av en plan, gjør utstrekningen stor. Zoom inn med hjulet der du vil se.

## Neste

- [Arbeid med layer og ark](topic:dwg-layers-sheets)
- [Klipp en IFC-modell med et snittplan](topic:section-plane)
