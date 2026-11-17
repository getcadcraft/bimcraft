---
title: Direktevisningen
summary: Et panel ved siden av modellen som viser den i sanntidsutseendet, med sol, skygger og indirekte lys, og som følger hver endring du gjør. Gå gjennom den, og still inn tidspunkt på døgnet og måneden.
keywords: direktevisning, sanntid, realtid, sanntidsrender, gjennomgang, gå, gå gjennom, førsteperson, presentasjon, kunde, andre skjerm, andre vindu, skjerm, tid på døgnet, sol, årstid, måned, skygger, omgivelsesokklusjon, refleksjoner, indirekte lys, global belysning, webgpu, webgl
from: ea5c02bf
---

Direktevisningen viser modellen i sanntidsutseendet: himmelen og solen fra stedets posisjon og dato, solens skygger, malingene og materialene du ga elementene, lamper, og lys som reflekteres fra vegger og gulv. Den følger det du gjør. Snur du 3D-visningen, snur den også. Endrer du modellen, viser den endringen et øyeblikk senere. Ingenting lastes opp.

Den tegner den samme scenen, malingene, lampene og solen som [Render bilde](topic:render). Til et ferdig bilde bruker du det.

## Åpne den

1. Åpne en modell og velg {{ui:Direktevisning}} i verktøylinjen. Panelet åpnes over appen, nederst til høyre.
2. Dra tittellinjen for å flytte det. Dra i hjørnet for å gjøre det større.
3. {{ui:Direktevisning i et nytt vindu}} (knappen ved siden av) eller {{ui:Nytt vindu}} i panelet flytter det til et eget vindu, for en andre skjerm. Hvis nettleseren blokkerer popup-vinduer, åpnes det som panel.
4. {{ui:Lukk}} lukker det.

## Kontrollene

| Kontroll | Hva den gjør |
|---|---|
| {{ui:Følg visningen}} | På: direktevisningen ser dit 3D-visningen ser. Gåing slår den av |
| {{ui:Gå}} | Gå gjennom modellen (nedenfor) |
| {{ui:Tyngdekraft}} | Under gåing: stå på gulv og gå i trapper. Av: fly |
| {{ui:Tid}} | Klokkeslett på døgnet. Solen beveger seg når du drar |
| {{ui:Måned}} | Måneden, slik at du kan se solen om vinteren og sommeren |
| {{ui:Kvalitet}} | {{ui:For denne datamaskinen}}, eller {{ui:Lav}}, {{ui:Middels}} eller {{ui:Høy}} |

Linjen nederst sier hva som tegner visningen (WebGPU eller WebGL 2), kvaliteten og det indirekte lyset.

## Gå gjennom modellen

1. Vend 3D-visningen dit du vil stå, og velg {{ui:Gå}}. Du står på gulvet under visningens øyepunkt, 1,6 m høy.
2. Klikk i direktevisningen, og bruk {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piltastene. Hold {{key:Shift}} for å løpe. Dra for å se rundt.
3. Trinn på opptil 40 cm klatres (trapper). Alt høyere er en vegg. Vegger stopper deg, og du glir langs dem.
4. Med {{ui:Tyngdekraft}} av flyr du: {{key:E}} går opp, {{key:Q}} ned.
5. {{key:Esc}} stopper gåingen.

## Indirekte lys

Lys som reflekteres fra en solbelyst vegg ned på gulvet, og den mørkere delen inne i et rom, beregnes i bakgrunnen på hver prosessorkjerne. Mens den jobber, sier nederste linje {{ui:Indirekte lys: 40 %}}. Når den er klar, tar visningen det inn. Etter en endring starter den på nytt.

:::note
Dette er en tilnærming for en direktevisning, ikke et renderet bilde: små detaljer mellom punktene får det indirekte lyset fra punktene nær dem.
:::

:::note
Nettlesere er ulike. Der nettleseren har WebGPU, bruker direktevisningen den. Ellers bruker den WebGL 2 og ser likt ut. Uten noen av dem sier panelet fra om det.
:::
