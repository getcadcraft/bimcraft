---
title: Modellgrupper
summary: Gjør valgte elementer til én navngitt gruppe, plasser gruppen på nytt andre steder, og endre én kopi for å endre dem alle.
keywords: gruppe, modellgruppe, gruppering, opphev gruppe, forekomst, kopi, gjenta, typisk enhet, akse, leilighet, rediger gruppe, IfcGroup
from: 121c5027
---

## Hva du skal gjøre

Grupper en typisk akse, plasser den flere ganger, og endre alle kopiene ved å endre én.

## Hvor verktøyet er

- Båndoppsett: {{ui:Arkitektur}} › **{{ui:Modell}}** › {{ui:Modellgruppe}}.
- Klassisk oppsett: Tegn-verktøylinjen › menyen {{ui:Rom}} › Modellgruppe.

## Trinn

1. Med Velg, velg elementene: klikk ett, og Ctrl+klikk eller Shift+klikk de andre.
2. Velg {{ui:Modellgruppe}}. De blir en gruppe med en gang. Skriv et {{ui:Gruppenavn}} i feltet først for å navngi den, eller skriv et navn etterpå for å gi nytt navn.
3. Trykk {{ui:Plasser en til}} og klikk der kopien skal stå: nedre venstre hjørne går til klikket.
4. Endre en kopi: flytt en veggende, endre størrelse på en dør, slett en søyle. Alle andre kopier av gruppen endres i samme steg, og ett Angre tar alt tilbake.
5. Mens Modellgruppe er valgt som verktøy, plukker et klikk på et element hele gruppen.

## Andre ting du kan gjøre

- {{ui:Legg til de valgte}}: legg flere elementer til gruppen du plukket sist.
- {{ui:Opphev gruppe}}: denne kopien blir vanlige elementer igjen. De andre kopiene forblir en gruppe.
- Flytt en hel kopi med {{ui:Flytt}}: den er samme gruppe på et nytt sted; de andre flyttes ikke.
- Slett elementene i en kopi, så er kopien borte.

## Hva en gruppe kan inneholde

Vegger med sine dører og vinduer, søyler og tegnede gulv kan plasseres på nytt og holdes like. En gruppe kan også inneholde andre elementer, men da kan den ikke plasseres på nytt ennå; raden sier hvorfor.

Kopier flyttes; de dreies eller speiles ikke.

## I IFC

En gruppe er en IfcGroup med en IfcRelAssignsToGroup til sine medlemmer, som forblir vanlige vegger, søyler og gulv. Hver kopi av en gruppe har samme definisjons-ID.

## Ikke bygget ennå

- Dreying eller speiling av en kopi.
- Trapper, tak, romgulv og bibliotekselementer i en gruppe som plasseres på nytt.
- En veggs profil, skråstilling og veggåpninger føres ikke over til kopiene.
- Grupper inni grupper.

Se også [Flytt, innrett og fordel](topic:move-align-distribute).
