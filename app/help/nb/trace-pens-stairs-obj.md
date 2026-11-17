---
title: Spor en etasje, sett penner per visning, skisser en trapp, åpne en OBJ
summary: Vis en annen etasje stiplet under planen og rett den inn; gi vegger, dører og vinduer egen penn i én visning; tegn en gangelinje for å få en trapp; og åpne en Wavefront OBJ-nett.
keywords: sporreferanse, spøkelse, underlag, penn, linjevekt, linjetype, overstyring, trapp, skisse, repos, OBJ, nett, import, Wavefront
from: 333ebbde
---

## Spor en etasje

Velg {{ui:Spor}} i menyen {{ui:Bygg}}, og deretter en visning i listen: en annen etasjes plan, en etasjes himlingsplan eller en Henvisning (klippet til utsnittet). Veggene, søylene og gulvene vises stiplet under planen du tegner på. Flytt den ved å klikke et basispunkt på referansen og deretter hvor punktet skal, eller skriv inn X, Y og en vinkel (den dreier om sitt eget senter). {{ui:Tilbakestill}} setter den tilbake, {{ui:Skjul}} fjerner den. Den er bare en referanse: ingenting kan velges på den, den skrives ikke ut og lagres ikke i IFC. BimCraft husker den for hver etasje i denne nettleseren.

## Penner per visning

Velg {{ui:Penner}}. Si hva pennen er til: alle vegger, alle dører, alle vinduer, typen til det valgte elementet, eller de valgte elementene. Velg en vekt, en linje (heltrukket, stiplet, prikket) og en farge, og trykk deretter {{ui:Bruk}}. Endringen gjelder bare planen for denne etasjen. Et valg går foran en type, og en type går foran en hel kategori. {{ui:Fjern alle}} fjerner dem. De lagres i denne nettleseren. Kryss av for **Pennfarger i 3D** for å male fargepennene på modellen i 3D-visningen (en vekt eller et strek er en linjes egenskap, så bare fargen vises der); fjern krysset for å gå tilbake. {{ui:Skriv ut}} tegner dem på PDF-en av planen: vekten skaleres fra skjermen (standard veggpenn på 1,75 piksler er 0,5 mm), strekene forblir streker, og en farge skrives ut i sin verdi for papirtemaet.

## En trapp fra en skisse

Velg {{ui:Skisser trapp}} og klikk hjørnene på gangelinjen, første trinn først. Én linje er en rett trapp, to linjer som møtes i rett vinkel er en L, og tre linjer (opp, tvers, tilbake) er en U. Trykk {{key:L}} for å tegne et repos: klikk hjørnene og trykk {{key:Enter}}, og den korte siden setter trappens bredde. Trykk {{key:Enter}} for å plassere trappen. Hvert trinn beregnes ut fra lengden på linjen din og antall opptrinn høyden krever. Deretter er det en vanlig trapp: endre den i Egenskaper, så følger trappeåpningen og rekkverkene med.

Kryss av for **Lag som familie** i verktøyets rad (eller trykk {{key:F}}) før {{key:Enter}} for å plassere trappen som en familie i stedet (en rett, L- eller U-trapp). Den kommer inn som ett element og åpnes i familieredigereren med bredde, trinn, total høyde, trinnene i hvert løp og gapet i en U som parametere, slik at du kan legge til størrelser, et plansymbol eller hotspots. Trinn og opptrinnshøyde følger av disse. Den har ingen rekkverk eller trappeåpning: de hører til en vanlig trapp.

## Åpne en OBJ

Åpne en `.obj`-fil som alle andre filer. En OBJ har ingen enheter, så BimCraft leser meter med Y opp, slik de fleste programmer skriver den. Hvert objekt eller gruppe blir ett nettelement på én etasje, og du kan deretter se på, måle, skjære i snitt, plassere det i en modell og lagre det som IFC. Linjer, kurver og flater utelates, og statuslinjen sier det.

Et objekt som er nøyaktig et rett prisme (et lukket nett med to parallelle, like endeflater og flate sider i rett vinkel på dem: en plate, en stolpe, en veggblokk, en plate med hull) lagres i IFC som IFCs egen ekstruderte solid med sin kontur og dybde, ikke som en liste med trekanter. Andre programmer leser det som et ekte volum, det forblir lite, og dybden og konturen kan redigeres senere. Statuslinjen sier hvor mange objekter som ble beholdt på den måten. Alt som ikke er nøyaktig et prisme (en avsmalnende form, et nett med ett hjørne flyttet, et nett med et gap) forblir som trekanter. En STEP-fil leses på samme måte.
