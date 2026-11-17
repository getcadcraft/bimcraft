---
title: Oznake prostorov in površin
summary: Postavite oznako s številko, imenom in površino na prostor ali površino. Oznaka sledi prostoru, njena velikost pa je določena z njeno višino na papirju.
keywords: oznaka, oznaka prostora, oznaka površine, označi prostor, označi površino, označi vse, označi vse neoznačene, nalepka, višina besedila, višina na papirju, opomba
from: 67059d8a
---

## Kaj boste naredili

Prostore in površine označite posamično ali naenkrat ter premaknete oznako tja, kjer je dobro čitljiva.

## Kje so orodja

- Postavitve s trakom: {{ui:Arhitektura}} › **Prostor in površina** › {{ui:Označi prostor}} in {{ui:Označi površino}}.
- Klasična postavitev: vrstica za risanje › meni {{ui:Prostori}}.
- Izbran prostor ali površina: Lastnosti › {{ui:Dodaj oznako}}.

## Koraki

1. Izberite {{ui:Označi prostor}} in kliknite v prostor, kjer naj bi bila oznaka.
2. Ali pritisnite {{ui:Označi vse neoznačene}} v vrstici: vsak prostor na tej etaži brez oznake dobi svojo, na sredini. To je en korak pri razveljavitvi.
3. Za premik oznake jo izberite z orodjem Izberi in jo povlecite. Lastnosti imajo {{ui:Vrni na sredino}}.
4. {{ui:Označi površino}} deluje enako za površine.

## Kaj oznaka naredi

- Prikaže številko, ime in površino v vaših enotah prikaza.
- Sledi svojemu prostoru: preimenujete prostor, premaknete steno, in besedilo oznake ter njen položaj se spremenita v istem koraku.
- Velikost je določena na papirju: {{ui:Višina besedila na papirju}} je v milimetrih (za začetek 2.5). Pri merilu pogleda 1:50 je oznaka 2.5 mm visoka 125 mm v modelu; pri 1:100 je 250 mm.
- Prostor z oznako prikaže oznako namesto svoje navadne oznake.
- Ko prostor ali površine ni več, gre oznaka z njim. Razveljavitev vrne oboje.

## V datoteki IFC

Oznaka je IfcAnnotation (ObjectType ROOMTAG ali AREATAG) z besedilom kot tekstovnim literalom in GlobalId elementa, ki ga imenuje. Besedilo v datoteki poda površino v kvadratnih metrih.

## Še ni izdelano

- Lastne oblike oznak in vodilna črta.
- Oznake na vratih, oknih in stenah so ločeno orodje (glejte slogi oznak na listih).

Glejte tudi [Prostori in ločilniki prostorov](topic:rooms-and-separators).
