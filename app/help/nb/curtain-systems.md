---
title: "Gardinveggsystemer: glassvegger på rutenett, med sprosser"
summary: Tegn et gardinveggsystem som en vegg, eller legg det på en flate, og angi deretter rutenettlinjene og sprossene. Det lagres som en IfcCurtainWall med glassfeltene og sprossene.
keywords: gardinveggsystem, gardinvegg, gardinrutenett, sprosse, glassing, butikkfront, glassvegg, panel, glassfelt, etter flate, flate, masse, rutenettlinje, avstand, profil, tverrsprosse, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Hva du skal gjøre

Lag en glassvegg av glassfelt mellom sprosser, endre hvor rutenettlinjene går, og velg hvilke linjer som får sprosser.

## Steg

1. Slå på {{ui:Tegn}} og åpne menyen **Bygg** (i båndoppsett: fanen Arkitektur).
2. Velg **Gardinveggsystem**. Angi i raden toppen (etasjen over, eller en høyde), en linje hver så mange langs den, en linje hver så mange opp den (la stå tomt for ingen), om den får sprosser, og sprosseprofilen.
3. Klikk der den starter og der den slutter, slik du tegner en vegg. Skift holder den rettvinklet.
4. For å endre rutenettet velger du **Gardinrutenett** og klikker på systemet:
   - **Legg til en linje**: En loddrett linje settes der du klikker. For en horisontal linje skriver du høyden i **Ved** først.
   - **Flytt en linje**: Klikk på linjen, og deretter der den skal.
   - **Fjern en linje**: Klikk på linjen.
   - **Sett etter avstand**: Skriv avstanden i **Hver**, og klikk deretter på systemet.
5. For å endre sprosser velger du **Sprosse**, velger hva den skal gjelde (den loddrette linjen du klikker på, den horisontale linjen i en høyde, kanten, eller alle linjer), velger **Plasser sprosser** eller **Fjern sprosser** og en profil, og klikker deretter på systemet.
6. Velg et system for å se alt om det i **Egenskaper**: hver rutenettlinje med plassering, en avkrysning for sprossen og en knapp for å fjerne den; avstanden; kanten; profilen; glasstykkelsen.

## Etter flate

**Etter flate** lager et gardinveggsystem på en plan flate du klikker på i 3D-visningen. Raden har de samme rutenett- og sprosseinnstillingene.

- Det virker på alle plane flater på alle elementer 3D-visningen viser: en masse, en vegg, et gulv, et takplan, en søyle, et plassert element. Flaten kan stå loddrett, skråne eller ligge flatt.
- Systemet følger flatens omriss. Gavl eller en annen uvanlig form kutter glassfeltene og sprossene til den.
- Det kan lage en **vegg** i stedet, langs foten av en loddrett flate og like høy som flaten. En vegg her står alltid loddrett, så en skrå eller flat flate kan ikke brukes.
- Det lager ikke et tak. Et tak i BimCraft beregnes ut fra et plans omriss og en takvinkel, ikke fra en enkelt flate.
- En buet flate er mange små plane flater: ett klikk tar én av dem.
- En flate med åpninger i seg: systemet dekker flatens ytre omriss.

## Slik måles det

- **Bruttoareal** er systemets omriss.
- **Glassareal** er glassfeltene slik de er laget: hvert glassfelt mister en halv sprossebredde på en side med rutenettsprosse og en hel bredde ved en kantsprosse.
- En loddrett sprosse går gjennom fra kant til kant. En horisontal sprosse stopper ved hver loddrett sprosse og ved kanten. Kantsprosser ligger innenfor omrisset; der to møtes, går den mest loddrette gjennom. Skjøtene kuttes rette, ikke i gjæring.
- **Lister** har en liste **Gardinveggsystemer** med disse tallene når modellen har et system.

## I IFC-filen

En IfcCurtainWall på sin etasje, satt sammen av én IfcPlate (gardinpanel) per glassfelt og én IfcMember (sprosse) per sprossestykke, hver med sin egen form, materiale og grunnmengder.

## Greit å vite

- Enhver størrelse lages slik du ber om. Bare et omriss uten areal avvises, fordi det ikke er noe å lage.
- Et system tegnet som en vegg beholder høyden den ble tegnet med. Flytter du en etasje senere, må du angi høyden på nytt i Egenskaper.
- Flytt-verktøyet flytter ikke et gardinveggsystem ennå. Slett det og tegn det på nytt, eller endre rutenettet på stedet.
- {{ui:Angre}} tar tilbake hvert steg: hele systemet, én rutenettendring, én sprosseendring.
