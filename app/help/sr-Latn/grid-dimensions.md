---
title: Kotiranje mreže
summary: Prikazuje razmak između susednih linija mreže i ukupnu veličinu mreže na osnovi svakog nivoa, čuva se u IFC-u i prati mrežu kada se linije menjaju.
keywords: mreža, kotiranje mreže, kote, razmak, polja, ukupna veličina, oznake u krugu, mreža stubova, osnova, list
from: aaea5d08
---

## Šta ćete uraditi

Postavite razmak između linija mreže i ukupnu veličinu mreže na osnovama, iza oznaka u krugu, da listovi napravljeni od njih nose kote. Prvo vam treba mreža: pogledajte [Mreže i stubovi](topic:grids-and-columns).

## Koraci

1. Prikažite osnovu nivoa i kliknite {{ui:Mreža}} da uključite alat za mrežu. Pojavljuje se traka opcija mreže.
2. Štiklirajte {{ui:Kote}}. Razmak između susednih numerisanih linija i između susednih linija označenih slovima, kao i ukupna veličina u oba pravca, crtaju se na osnovi.
3. Izaberite drugi nivo: iste kote se prikazuju na njegovoj osnovi.
4. Pomerite jednu liniju, preimenujte je ili dodajte novu. Kote prate mrežu.
5. Odštiklirajte {{ui:Kote}} da ih ponovo uklonite.

## Napomene

- Svaka promena je jedan korak opoziva: {{key:Mod+Z}} je vraća.
- Podešavanje se čuva u IFC-u uz mrežu, a osnove postavljene na listove nose kote.
- Ako model nema mrežu koju možete menjati (mreža koja je došla u datoteci iz drugog programa ne može se menjati ovde), statusna linija kaže „Nema mreže za izmenu.”
