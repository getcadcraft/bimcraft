---
title: Kutt en IFC-modell med et snittplan
summary: Snitt den 3D-modellen fra toppen, forsiden eller siden, eller behold bare det som er inni en snittboks eller et volum av flere bokser med skrå flater, for å se inn. Flytt snittet ved å dra eller skrive, snu det, og velg hva snittet viser.
keywords: snitt, snittplan, snittboks, håndtak, dra, margin, valgboks, klippeboks, kutt, klipping, skive, plankutt, grunnriss, fasade, inni, interiør, snu, forskyvning, snittvolum, trappet snitt, L-formet, helling, skrått snitt, skrått plan, ekstra plan
from: 6315e71a
---

## Formål

Kutt gjennom en IFC-modell med ett plan for å se inn i den: ovenfra for en plan, eller forfra eller fra siden for et snitt gjennom bygningen.

## Trinn

1. Åpne en IFC-modell. Se [Åpne en IFC-modell og utforsk den i 3D](topic:open-ifc-model).
2. Klikk {{ui:Snitt}} i verktøylinjen, eller trykk {{key:X}}. Modellen kuttes på halv høyde, og en linje vises under verktøylinjen.
3. Velg hvor kuttet skal gjøres fra: {{ui:Topp}}, {{ui:Front}} eller {{ui:Side}}. Front og Side dreier også visningen, så snittet kan ses.
4. Flytt snittet: dra **Forskyvning**-glidebryteren, eller skriv inn en avstand i meter i boksen og trykk {{key:Enter}}. Millimeter kan også skrives, for eksempel `1200 mm`.
5. Klikk {{ui:Snu}} for å beholde den andre siden av snittet.
6. Klikk et element på snittet for å se egenskapene.
7. Klikk {{ui:Av}}, klikk {{ui:Snitt}} igjen, eller trykk {{key:X}} for å fjerne snittet.

## En snittboks

Klikk {{ui:Boks}} i samme linje for å beholde bare det som er inni en boks. Hver av {{ui:X}}, {{ui:Y}} og {{ui:Z}} har to glidebrytere: der boksen starter og der den slutter, i meter fra modellens kant. Verdiene vises ved siden av dem.

- {{ui:Boks rundt utvalget}} tilpasser boksen rundt elementene du valgte, og zoomer dit. Den lar 300 mm være igjen på hver side; endre det i {{ui:Innstillinger}} › BimCraft › {{ui:Klaring rundt utvalget}}.
- Med elementer valgt gjør {{ui:Vis}} › {{ui:Snittboks rundt utvalget}} eller {{key:Shift+X}} det samme i ett steg, selv når ingen snitt er på.
- **Håndtakene** på boksen flytter den med pekeren: dra en firkant midt på en flate for å flytte den flaten, en midt på en kant for å flytte de to flatene som møtes der, eller en i et hjørne for å flytte de tre. Glidebryterne følger med. I {{ui:Topp}} flytter et hjørne boksen i plan, og i {{ui:Front}} eller {{ui:Side}} flytter det boksen i fasade.
- {{ui:Hele modellen}} åpner boksen til hele modellen igjen.
- {{ui:Topp}}, {{ui:Front}} eller {{ui:Side}} går tilbake til ett plan.

## Et volum av flere bokser, skrå flater og ekstra plan

En boks er ikke alltid formen du trenger: et trappet snitt, en L-formet fløy eller et kutt langs en vegg som ikke står rett på rutenettet.

1. I {{ui:Boks}} klikk {{ui:Legg til en boks}}. Snittet beholder nå det som er inni **noen** av boksene, så to bokser gir et trappet eller L-formet volum. Listen ved siden av viser hvilken boks glidebryterne endrer ({{ui:Boks 1}}, {{ui:Boks 2}} …); {{ui:Fjern denne boksen}} tar bort den valgte. Et volum har opptil 8 bokser.
2. Åpne {{ui:Helling og plan}} for å forme den valgte boksen:
   - Velg en {{ui:Flate}} og skriv hvor langt den helles hver vei, i grader (opptil 80). Flaten dreies om midten; de andre flatene blir der glidebryterne plasserer dem. {{ui:Rett}} setter den tilbake.
   - {{ui:Legg til et plan}} kutter boksen med ett plan til. {{ui:Flater}} er retningen den avkuttede siden vender, i grader fra X mot Y; {{ui:Helling}} er hvor mye den dreies oppover (0 for et loddrett plan, 90 for et vannrett); {{ui:Forskyvning}} er hvor langt planet er fra midten av boksen, i meter. × fjerner det. En boks tar opptil 6 ekstra plan.
3. Der volumet kutter gjennom faste legemer, fylles snittflatene som før, også der to bokser møtes i et trinn.

:::tip
Hvis konturen forsvinner og ingenting er igjen, lar helningene eller planene ikke noe være inni den boksen; linjen sier det. Hell en flate tilbake, eller endre forskyvningen til et plan.
:::

## En bygning dreid i tomten

Mange modeller plasserer bygningen i en vinkel mot filens akser (ekte nord, delte koordinater). Når veggene står i en vinkel, starter et nytt snitt rettvinklet mot bygningen: {{ui:Front}}, {{ui:Side}} og boksen går langs sine egne vegger, og {{ui:Rettvinklet mot bygningen}} i snittlinjen er på. Klikk den for modellens akser, og igjen for å gå tilbake (statuslinjen sier hvor mye bygningen er dreid). Med **Innstillinger › BimCraft › En bygning dreid i tomten › Slik den er plassert i tomten** starter snitt og visninger i stedet på modellens akser. Se [Innstillinger](topic:settings).

## Resultat

- **Topp** beholder det som er under snittet, så du ser ned i rommene. Forskyvningen måles oppover fra bunnen av modellen.
- **Front** beholder det som er bak snittet, sett forfra; **Side** beholder det som er bak det, sett fra siden. Forskyvningen måles fra forsiden eller siden av modellen.
- En tynn, farget kontur viser hvor planet er.
- Der planet kutter gjennom en vegg, dekke eller annet fast legeme, fylles snittflaten i en mørk farge, som et tegnet snitt. {{ui:Fyll}} i linjen slår dette av og på.
- ViewCube nederst til høyre snur modellen, så snittet kan ses fra hvilken som helst side.
- Klikk plukker det du kan se: det som er kuttet bort, kan ikke velges.

## Vanlige feil

- **Ingenting endret seg.** Snittet kan være over taket eller utenfor modellen. Dra glidebryteren, eller skriv en mindre forskyvning.
- **Forskyvningen hoppet tilbake.** En avstand utenfor modellen flyttes til enden, og statuslinjen sier det.
- **En sak viser bare en del av volumet.** En sak (BCF) beholder én boks med sine skrå flater og plan: den første boksen i et volum. Statuslinjen sier det når saken lages.
- **Snittet er hult.** {{ui:Fyll}} i linjen er av: klikk den for å fylle snittflatene til vegger, dekker og andre faste legemer.
- **Et fylt snitt ser flekkete ut eller mangler en del.** Fylling krever lukkede volumer. Et element hvis form i filen ikke er lukket (et enkelt ark, bladverk på trær) blir ikke fylt, i stedet for malt over. Et element laget av deler i ulike farger (en ramme og glasset) fylles når delene slutter tett sammen.
- **Hvor er snittlinjen?** Den står øverst i 3D-visningen den kutter: på 3D-halvdelen i {{ui:Del}}, og under tegnelinjen i {{ui:Plan}} alene. I en kort visning ruller den.

## Neste

- [Vis og skjul etasjer, rom og kanter](topic:storeys-and-spaces)
- [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d) — tegninger i 3D har det samme snittplanet
