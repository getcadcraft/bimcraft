---
title: Kotiranje mreže osi
summary: Prikaži razmak između susjednih linija mreže osi i ukupnu veličinu mreže na planu svake etaže; sprema se u IFC i prati mrežu kad se linije promijene.
keywords: mreža osi, kote mreže osi, kota, razmak, polja, ukupna veličina, oznake osi, stupna mreža, tlocrt, list
from: aaea5d08
---

## Što ćete učiniti

Postavite razmak između linija mreže osi i ukupnu veličinu mreže na planove, izvan oznaka osi, kako bi listovi napravljeni iz njih nosili kote. Prvo vam treba mreža osi: pogledajte [Mreže osi i stupovi](topic:grids-and-columns).

## Koraci

1. Prikažite plan etaže i kliknite {{ui:Mreža osi}} da uključite alat za mrežu. Prikazuje se traka s opcijama mreže osi.
2. Označite {{ui:Kote}}. Razmak između susjednih brojčanih linija i između susjednih slovnih linija te ukupna veličina u oba smjera crtaju se na planu.
3. Odaberite drugu etažu: iste kote prikazuju se i na njezinu planu.
4. Pomaknite liniju, preimenujte je ili dodajte novu. Kote prate mrežu.
5. Odznačite {{ui:Kote}} da ih ponovno uklonite.

## Napomene

- Svaka promjena je jedan korak poništavanja: {{key:Mod+Z}} je poništava.
- Postavka se sprema u IFC zajedno s mrežom, a planovi postavljeni na listove nose kote.
- Ako model nema mrežu koju možete mijenjati (mreža koja je došla u datoteci iz drugog programa ne može se ovdje mijenjati), statusni redak piše „Nema mreže osi za promjenu.“
