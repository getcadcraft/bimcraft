---
title: Arealer og arealgrenser
summary: Mål brutto bygningsareal eller utleieareal innenfor grenselinjer du tegner eller henter fra veggene, og list arealene i en tabell.
keywords: areal, arealer, arealgrense, arealordning, brutto bygningsareal, bruttogulvareal, GFA, utleieareal, arealplan, arealtabell, velg vegger, ikke lukket
from: c79f96d2
---

## Hva du skal gjøre

Tegn grensene for en arealordning, plasser arealer innenfor dem, og les av summene.

## Hvor verktøyene er

- Båndoppsett: {{ui:Architecture}} › **Rom og areal** › {{ui:Area}} og {{ui:Area Boundary}}.
- Klassisk oppsett: Verktøylinjen Tegn › menyen {{ui:Rooms}}.

## Steg

1. Velg {{ui:Area Boundary}}. I raden velger du {{ui:Ordning}}: Brutto bygningsareal eller Utleieareal. Hver ordning har sine egne grenser.
2. Velg hvordan linjene lages i {{ui:Lag ved}}:
   - **Tegn**: klikk punkt for punkt.
   - **Velg vegger: midtlinje**: klikk en vegg, og midtlinjen er en grense.
   - **Velg vegger: flaten du klikker**: klikk en vegg på siden du vil ha; den flaten er grensen. For brutto bygningsareal klikker du utsiden av de ytre veggene.
3. Velg {{ui:Area}}. Velg samme ordning, skriv et navn, nummer eller type hvis du vil, og klikk inne i grensene.
4. Arealet måles med én gang. Velg det for å endre navn, nummer eller type i Egenskaper.

## Hva som følger hva

- En grense laget ved å velge en vegg følger den veggen: flytter du veggen, måles arealet på nytt i samme steg.
- En grense du tegnet, blir der du tegnet den.
- Flater på vegger som møtes i et hjørne, møtes der også, så fire valgte vegger lukker et areal uten hull.
- Arealgrenser vises i planen mens et rom- eller arealverktøy er i hånden, så de ikke roter til planen ellers.

## Hvis grensene ikke lukker seg

Arealet plasseres likevel. Det står **Ikke lukket** og måler ingenting før grensene lukker seg rundt det. Dette er et råd: ingenting blokkeres.

## Tabellen

Venstre panel › {{ui:Tabeller}} › **Arealer**: ordning, nummer, navn, type, etasje, areal og omkrets, med en sum. Et klikk på en rad velger arealet. {{ui:Last ned CSV}} gir samme tabell.

## I IFC-filen

Et areal er en IfcSpace uten kropp: PredefinedType GFA for brutto bygningsareal, USERDEFINED med ObjectType Rentable for utleie. Den har GrossFloorArea og GrossPerimeter, og ikke et nettoareal, så den ikke forveksles med et rom. En grense er en IfcVirtualElement.

## Ikke bygget ennå

- Egne ordninger (bare Brutto bygningsareal og Utleieareal).
- Fargefyll etter arealtype.
- Regler som plasserer grensen for deg, for eksempel «til glasslinjen».

## Se også

[Rom og romskillere](topic:rooms-and-separators), [Rom- og arealmerkelapper](topic:room-and-area-tags).
