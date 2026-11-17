---
title: Dører og vinduer
summary: "Sett dører og vinduer inn i tegnede vegger: pek på en vegg, se svingen og avstandene til hjørnene, klikk; veggåpningen kutter seg selv ut."
keywords: dør, dører, vindu, vinduer, åpning, sving, hengsel, retning, snu, skyvedør, lommedør, garasjeport, dobbeltdør, utadslående vindu, enkelthengt vindu, dobbelthengt vindu, skyvevindu, fast vindu, vindusbenk, overstykke, foldedør, skapdør, franske dører, låvedør, sidelys, inngangsdør, vippevindu, panoramavindu, oppvindu
from: 4d8ac009
---

## Hva du skal gjøre

Sett dører og vinduer inn i vegger du har tegnet ([Tegn vegger](topic:draw-walls)). Pek på en vegg, så viser døren eller vinduet hvor det vil gå, hvilken vei det svinger, og hvor langt det er fra hvert hjørne. Klikk, så kutter åpningen seg ut av veggen, i planen og i 3D.

## Plasser en dør

1. Med {{ui:Tegn}} på klikker du på {{ui:Dør}} (eller trykker {{key:D}}).
2. Velg typen: **Enkel svingdør**, **Dobbel svingdør**, **Skyvedør**, **Lommedør**, **Garasjeport**, **Foldedør til skap**, **Franske dører**, **Låvedør (på veggen)** eller **Inngangsdør med sidelys**. Den vanlige størrelsen fyller inn **W** og **H**. Velg en annen fra størrelseslisten ved siden av, eller skriv inn andre, for eksempel `2'-8"` eller `800`. Listen tilbyr også dørfamiliene i denne modellen (se [Familier og deres størrelser](topic:families)).
3. Pek på en vegg. Dørsymbolet følger pekeren langs veggen, og avstanden fra hver ende av veggflaten vises i planen.
4. Døren svinger mot den siden av veggen pekeren står på. Trykk {{key:H}} (eller klikk på {{ui:Snu}}) for å sette hengslene i den andre enden.
5. Klikk. Døren er plassert, og verktøyet er på til den neste. Pek på midten av en vegg, så sentrerer døren seg selv.

For å plassere den i en nøyaktig avstand, pek på veggen nær hjørnet du måler fra, skriv inn avstanden (for eksempel `2'` eller `600`) og trykk {{key:Enter}}. Avstanden går fra den nærmeste enden av veggflaten til kanten av døren.

## Plasser et vindu

1. Klikk på {{ui:Vindu}} (eller trykk {{key:N}}).
2. Velg typen: **Fast vindu**, **Enkelthengt vindu**, **Dobbelthengt vindu**, **Utadslående vindu**, **Skyvevindu**, **Vippevindu**, **Panoramavindu** eller **Oppvindu**, og dets **W**, **H** og **Vindusbenk** (høyden på underkanten av vinduet over gulvet).
3. Pek på en vegg og klikk, eller skriv inn en avstand og trykk {{key:Enter}} som for dører. Et vindu sitter på veggens utside.

## Flytt, snu, slett

- Med {{ui:Velg}} på drar du en dør eller et vindu langs veggen. Dra det over på en annen vegg for å flytte det dit.
- {{key:Delete}} sletter de valgte dørene og vinduene; veggen lukkes igjen.
- Flytter eller sletter du en vegg, flyttes eller slettes det som er i den. Når starten på en vegg flyttes langs sin egen linje, beholder dørene og vinduene sin plass.
- {{ui:Angre}} og {{ui:Gjør om}} tar hver plassering, flytting eller sletting tilbake og fram.

## Hva som avvises

- **Det får ikke plass i veggen.** Døren eller vinduet er bredere enn veggen, eller ville stikke ut av enden. Prøv en mindre bredde eller en lengre vegg.
- **Det er høyere enn veggen.** Vindusbenken pluss høyden er over veggens topp.

## Hva som lagres

Hver dør eller hvert vindu er en IFC-dør eller et IFC-vindu med sin størrelse, betjening (for eksempel enkel sving venstre), sin størrelsestype (én type for hver størrelse i familien), `Pset_DoorCommon` eller `Pset_WindowCommon` og grunnmengder, og fyller en IFC-åpning i veggen. Veggens nettoareal på siden og volum utelater åpningen. Andre BIM-programmer åpner den som en dør i en vegg.

## Greit å vite

- Planen viser dører åpne i 90° med svingen sin, skyvedører som to paneler, lommedører som glir inn i veggen, garasjeporter som en stiplet linje over, og vinduer med karmen og glasslinjene.
- Bredden er karmens totale bredde; dørbladet er bredden minus de to karmstolpene.
- Å kopiere tegnede dører og vinduer er ikke bygget ennå: plasser et nytt.

## Nødutgangsvindu i kjeller og lysgrav

Velg **Nødutgang fra kjeller med lysgrav** i listen over vindustyper. Det starter som et utadslående vindu på 36 × 48 inch med en vindusbenk 36 inch over nivået. Lysgraven ligger på veggens utside, med minst 48 inch fri bredde, 36 inch utstikking, og en bunn 6 inch under vindusbenken. Den vises som stiplede linjer i planen og som tre sider uten topp i 3D. Lysgraven er en del av vinduets IFC-legeme, så lagring, flytting, endring av størrelse eller sletting av vinduet tar den med seg. Ved endring av størrelse beholdes minst 6 inch ved hver karmstolpe.

Dette er modelleringsstandarder, ikke en godkjenning av rømningskrav. Kontroller produsentens faktiske frie åpning, lokale krav, terreng, drenering og eventuell nødvendig stige hver for seg. Dybde og høyde på graven er forhåndsinnstilte mål; de følger ikke terrenget.
