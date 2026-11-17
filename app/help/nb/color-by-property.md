---
title: Fargelegg elementer etter en egenskap
summary: Mal hvert element etter verdien til én egenskap, for eksempel klasse, type, etasje, materiale, brannmotstand eller kostnad. Les forklaringen, klikk en verdi for bare å vise de elementene, og lagre fargene som et skjema til bruk i andre modeller.
keywords: farge, fargelegg, farge etter, forklaring, smart visning, utseende, egenskap, type, materiale, brannmotstand, filter, isoler, tema, verdier, skjema, fargeskjema, lagre farger, gjenbruk, team, json, fargeprøve
from: f081d343
---

## Hva du gjør

Se med et blikk hvordan en egenskap er fordelt over modellen: hvilke vegger som er ytre, hvilke materialer som brukes hvor, hvilke elementer som mangler brannmotstand. Hvert element får fargen til verdien sin, og forklaringen sier hva hver farge betyr og hvor mange elementer som har den.

## Steg

1. Åpne en IFC-modell.
2. Klikk fanen {{ui:Farge}} til høyre.
3. Velg en egenskap i listen. De første gjelder alle elementer ({{ui:Klasse}}, {{ui:Type}}, {{ui:Etasje}}, {{ui:Materiale}}, {{ui:Navn}}…); resten kommer fra modellens egenskapssett og mengdesett, under settets navn. Tallet etter hver er hvor mange elementer som har den.
4. Les forklaringen: en farge, verdien og hvor mange elementer som har den.
5. Klikk en verdi for bare å vise de elementene. Hold {{key:Mod}} og klikk for å legge til flere verdier. Trykk {{key:Shift+H}} for å vise alt igjen.
6. Klikk {{ui:Av}} for å gå tilbake til modellens egne farger.

## Hva du ser

- Opptil sju verdier får hver sin farge, den vanligste verdien først. Flere verdier enn det deler én grå farge og står oppført som **andre verdier**.
- Et tall med mange ulike verdier deles i seks like områder, fra lys (lav) til mørk (høy).
- Elementer uten egenskapen er blek grå og står oppført som **Ingen verdi**, slik at de fargelagte skiller seg ut.
- Fargene endrer seg med Papir og Modell, og beholdes mens du redigerer modellen.
- En types egenskap gjelder for alle elementer av den typen; når et element har sin egen verdi for samme egenskap, vinner dens egen verdi.

## Endre farger og behold dem som et skjema

- Klikk på fargeprøven til en verdi i forklaringen for å velge en annen farge til den. Modellen males om med en gang.
- {{ui:Lagre skjema}} laster ned fargene som en liten `.json`-fil oppkalt etter egenskapen, for eksempel `Class colors.json`.
- På en annen modell, eller på en kollegas datamaskin, klikk {{ui:Åpne skjema…}} og velg filen. Hver verdi i skjemaet får sin farge, slik at samme brannmotstand eller samme system har samme farge i hver modell.
- En verdi som skjemaet ikke har, males grå og står oppført som «ikke i skjemaet». Verdier i skjemaet som denne modellen ikke har, står oppført med 0, slik at du ser hele skjemaet.
- Et skjema beholder fargene sine i begge temaene. Når du velger en egenskap i listen, starter det fra de automatiske fargene igjen.

## Vanlige feil

- **«Denne modellen har ingen … verdier».** Skjemaet ble lagret for en egenskap denne modellen ikke har (et annet navn på egenskapssettet, for eksempel). Åpne et skjema laget for denne typen modell, eller velg en egenskap i listen.

- **En egenskap mangler i listen.** Ingen element med en form i modellen har den. Egenskaper til selve etasjene og rommene står ikke i listen.
- **Alt har samme farge.** Alle elementer har samme verdi, eller ingen: se på tallene i forklaringen.

## Neste

- [Skjul, isoler og se gjennom elementer](topic:hide-and-isolate)
- [Finn frem i modelltreet](topic:model-tree)
