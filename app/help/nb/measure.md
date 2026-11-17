---
title: Mål avstander, flateareal og posisjoner i 3D
summary: Mål mellom to punkter i en IFC-modell med fangst til hjørner og kanter, les forskjellen langs X, Y og Z, og mål arealet av en plan flate.
keywords: mål, måling, avstand, lengde, måltilsetning, areal, flateareal, fang, hjørne, kant, målebånd, linjal, klaring, posisjon, breddegrad, lengdegrad, bredde lengde, koordinater, georeferering, kartkonvertering, EPSG, oppmåling, øst, nord, WGS 84, datum
from: 5f430bba
---

## Hva du gjør

Kontroller en klaring, en veggs lengde eller størrelsen på en flate rett fra modellen, uten å åpne tegneprogrammet.

## Steg

1. Åpne en IFC-modell.
2. Klikk {{ui:Mål}} i verktøylinjen, eller trykk {{key:M}}. En linje åpnes nederst i visningen.
3. **En avstand:** med {{ui:Avstand}} valgt klikker du det første punktet, deretter det andre. Nær et hjørne fester pekeren seg til hjørnet, nær en kant til kanten. Den lille etiketten ved pekeren sier hvilken. Hvert par klikk gir én måling.
4. **En flates areal:** velg {{ui:Flateareal}} og klikk en flate. Hele den plane flaten lyser opp, og arealet vises.
5. **Rette linjer:** hold {{key:Shift}} mens du velger det andre punktet, eller trykk {{ui:Rett}} i linjen for å holde den. Linjen går da langs den ene aksen pekeren er nærmest (i en toppvisning langs X eller Y i planen, i andre visninger langs X, Y eller Z). Etiketten ved pekeren sier «rett langs en akse». {{key:M}} starter og stopper fortsatt Mål.
6. Klikk {{ui:Fjern}} for å fjerne målingene, eller {{ui:Ferdig}} (eller {{key:Esc}}) for å stoppe målingen.

## Hva du bør se

- En linje mellom de to punktene med lengden på, og i linjen lengden med hvor langt den går langs X, Y og Z (i modellens akser, Z opp). Alt vises i {{ui:Enheter}} valgt på verktøylinjen.
- Et flateareal i kvadratmeter, på flaten og i linjen.
- Etiketter blir på målingene mens du roterer, panorerer og zoomer.
- Mens du måler, velger ikke klikk elementer. Et snittplan eller en snittboks kutter fortsatt modellen, og du kan måle det den viser, inkludert snittflatene.

## Hvor et punkt er på jorden

Klikk {{ui:Posisjon}} i målelinjen, og klikk deretter et punkt på modellen. Det fester seg til hjørner og kanter, slik avstander gjør. Linjen viser:

- **breddegrad og lengdegrad**, i desimalgrader og i grader, minutter og sekunder, i WGS 84 til å begynne med;
- **kartkoordinatene** (øst og nord, skrevet i {{ui:Enheter}} valgt på verktøylinjen) i modellens eget kartsystem, for eksempel `EPSG:28356`;
- **høyden** og det vertikale datumet filen angir, og filens **eget datum** (for eksempel GDA94).

{{ui:Kopier}} legger alt på utklippstavlen på én linje. Endre systemet for breddegrad og lengdegrad under {{ui:Innstillinger}} › {{ui:BimCraft}} › {{ui:Posisjon}}: WGS 84 (som GPS og nettkart), filens eget datum, eller et annet vanlig datum som ETRS89 eller NAD83.

Dette krever en georeferert modell: en som er eksportert med kartkoordinater (en kartkonvertering til et projisert system med en EPSG-kode). En modell som bare har en breddegrad og lengdegrad for tomta, får en tilnærmet posisjon, beregnet ut fra tomtens punkt og dens sanne nord. Linjen sier fra om det. Med flere modeller åpne bruker hvert punkt georefereringen til sin egen modell.

:::note
Å gå mellom datum (for eksempel GDA94 til WGS 84) gjøres uten rutenettfiler, så det er riktig til noen meter. Statuslinjen sier hvor godt det er. Kartkoordinatene i seg selv er eksakte.
:::

## Vanlige feil

- **«…har ingen georeferering».** Filen har ingen kartkonvertering og ingen breddegrad og lengdegrad for tomta. Eksporter den på nytt med koordinatsystemet satt (felles koordinater / oppmålingspunkt i modelleringsverktøyet).
- **Kartkoordinater, men ingen breddegrad og lengdegrad.** Filen navngir kartsystemet sitt uten EPSG-kode, eller med en kode som ikke står i listen. Statuslinjen sier hvilken.

- **Punktet havner på flaten, ikke hjørnet.** Fangst ser på elementet under pekeren. Flytt nærmere hjørnet, eller zoom inn.
- **Arealet er mindre enn forventet.** Åpninger er utelatt, og en flate som bøyer seg, er flere flater: klikk hver.
- **{{key:Esc}} stoppet målingen.** Den første {{key:Esc}} fjerner en halvferdig avstand. Den andre stopper.

## Neste

- [Kutt en IFC-modell med et snittplan](topic:section-plane)
- [Skjul, isoler og gjør elementer gjennomsiktige](topic:hide-and-isolate)
