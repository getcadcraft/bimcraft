---
title: Modell fra en skanning
summary: En kort veiledning fra en laserskanning til vegger: åpne punktskyen ved siden av en ny bygning, rett den inn mot et nivå, og tegn opp veggene på planen.
keywords: skanning, laserskanning, punktsky, slik den er bygget, eksisterende bygning, oppmåling, spor opp, skanning til BIM, modell fra skanning, snitt, innrett, rett vinkel, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Hva du skal gjøre

Tegn en eksisterende bygning fra laserskanningen: vegger der skanningen viser dem, på riktig nivå, i rett vinkel mot hverandre.

## Trinn

1. **En bygning å tegne i.** {{ui:Fil}} › {{ui:Ny bygning}}, med så mange etasjer som bygningen har (etasjer kan legges til senere, se [Tomten, bygningen på den og nivåene](topic:site-building-and-levels)). {{ui:Tegn}} slås på.
2. **Skanningen.** {{ui:Vis}} › {{ui:Punktsky}} og velg filen (LAS, LAZ, E57, PLY, PCD, PTX eller XYZ: se [Vis en punktsky ved siden av modellen](topic:point-clouds)). Skyen vises i 3D-visningen, og planen viser dens **snitt**: de skannede punktene 1200 mm (4 fot) over nivået, som prikker. Det er høyden der vegger, dører og vinduer er lettest å lese.
3. **Rett den inn mot nivået.** Åpne modellinjens {{ui:Skanning}}-meny og klikk {{ui:Rett gulvet inn mot dette nivået}}: skyen flyttes opp eller ned til gulvet den skannet, ligger på nivået som vises. Kontroller at snittet nå skjærer gjennom veggene.
4. **Rett vinkel mot bygningen.** {{ui:Skanning}} › {{ui:Drei den rettvinklet mot bygningen}} dreier skyen slik at veggene i snittet ligger langs planets akser. Vegger du tegner med {{key:Shift}} holdt inne, står da på linje med skanningen. Skyen dreies om midten av veggene den fant, slik at trær eller en nabos vegg som havnet i snittet ikke svinger skanningen bort. Rett inn gulvet først: da skjærer snittet gjennom veggene.
5. **Spor opp veggene.** Velg {{ui:Vegg}} og klikk langs prikkene: verktøyet fester seg til skannede punkter (festemerket er en liten diamant) og til vegger du har tegnet. En vegg tegnes på midtlinjen, så klikk midt mellom de to radene med prikker en vegg etterlater. Skriv tykkelsen ved å velge veggtypen først. Legg deretter til dører og vinduer der snittet viser hullene.
6. **Neste etasje.** Velg etasjen over i etasjelisten på planen: snittet følger nivåets snitthøyde. Rett gulvet inn mot det nivået på nytt bare hvis skanningens gulv ikke ligger der etasjene dine ligger.

## Hva du skal se

- Snittet endres når du bytter nivå, og et tykkere snitt ({{ui:Skanning}} › {{ui:Snitttykkelse}}) viser flere punkter der skanningen er tynn.
- {{ui:Skanning}} › {{ui:Angre innrettingen}} setter skyen tilbake der den sto da den ble åpnet. Innrettingen flytter skyen bare i visningen: den lagres ikke i IFC-filen, og vegger du har tegnet blir stående. Innrettingen følger skyen når du endrer {{ui:Plasser}} eller {{ui:Enheter}}, eller åpner en annen modell.
- {{ui:Skanning}} › {{ui:Vis snittet på planen}} skjuler eller viser prikkene.

:::tip
Store skanninger: planen tegner opptil 60 000 punkter av snittet, og 3D-visningen noen millioner punkter av hele skyen. Begge er plukket jevnt fordelt gjennom skanningen, slik at en stor fil forblir rask. For å spore opp i tegneappen i stedet, bruk {{ui:Spor i CadCraft}} på skylinjen.
:::
