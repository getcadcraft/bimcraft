---
title: Sammenlign to versjoner av en modell
summary: Åpne to versjoner av samme IFC-modell og se hvilke elementer som er lagt til, fjernet og endret, matchet etter GlobalId-ene deres, med en CSV-fil over hver endring.
keywords: sammenlign, diff, forskjell, versjoner, revisjon, endringer, endret, lagt til, fjernet, flyttet, globalid, guid, hva som endret seg
from: cfca6971
---

## Hva du gjør

Se hva som er endret mellom modellen du hadde og den du fikk tilsendt: hvilke elementer som er nye, hvilke som er borte, og hvilke som er flyttet eller har fått nye egenskapsverdier.

## Steg

1. Åpne den nyere versjonen, klikk deretter {{ui:Legg til en modell…}} og velg den eldre. Se [Se flere IFC-modeller samtidig](topic:several-models).
2. Åpne {{ui:Sammenlign versjoner}} i {{ui:Modeller}}.
3. Velg {{ui:Eldre versjon}} og {{ui:Nyere versjon}}.
4. Klikk {{ui:Sammenlign}}.
5. Klikk et element i en liste for å velge det og se egenskapene. Klikk {{ui:Last ned CSV}} for hver endring, egenskap for egenskap.
6. Klikk {{ui:Fjern}} for å gå tilbake til den vanlige visningen.

## Hva du ser

- **Lagt til**-elementer i blått, fra den nyere versjonen.
- **Fjernet**-elementer i rødt, fra den eldre versjonen.
- **Endret**-elementer i okker, fra den nyere versjonen, og hver sier hva som endret seg: egenskaper, en flytting med hvor langt, eller en ny form.
- Alt som er likt, er gjennomsiktig.

## Greit å vite

- Elementer matches etter GlobalId. Et program som gir elementer nye GlobalId-er ved hver eksport, gjør at alle elementer ser ut som fjernet og lagt til på nytt.
- Posisjoner sammenlignes der modellene står i scenen. Hvis én versjon er flyttet med vilje, rett dem opp først med {{ui:Flytt}} i {{ui:Modeller}}.
- En GlobalId som brukes to ganger i samme modell, utelates fra sammenligningen. [Sjekk en modell for vanlige problemer](topic:model-checks) finner disse.

## Neste

- [Saker og BCF-filer](topic:issues-bcf)
- [Legg sammen mengder etter egenskap](topic:quantity-totals)
