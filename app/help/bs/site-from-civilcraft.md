---
title: Susjedne zgrade i parcela iz CivilCraft-a
summary: Uzmite zgrade i parcelu koje je CivilCraft-ova Adresa na gradilište pronašla oko adrese kao prijedloge, i dodajte one koje označite.
keywords: gradilište, adresa, parcela, susjedi, kontekst, civilcraft, ccsite, zgrade, obris gradilišta, prijedlog
from: 3be9407b
---

## Šta radi

U CivilCraft-u, Površina › Više › Adresa na gradilište pronalazi zgrade, parcelu, namjenu, zonu poplave i tlo oko adrese iz otvorenih podataka. Njegovo dugme "Pošalji u BimCraft kao prijedloge" (ili "Spasi gradilište kao datoteku", pa otvorite `.ccsite.json` ovdje) donosi ih u BimCraft. Ništa se ne dodaje dok to ne kažete.

## Kako se koristi

1. Pokrenite ili otvorite model. Tačka adrese nalazi se na ishodištu nivoa na kojem ste.
2. Okvir navodi svaku susjednu zgradu i parcelu s potvrdnim okvirom. Odznačite ono što ne želite.
3. Zgrade čiju visinu izvor nije dao koriste visinu upisanu na vrhu okvira. Zgrada koja je dala samo broj nivoa računa se kao 3 m po nivou, i okvir to kaže.
4. Pritisnite "Dodaj označene". Zgrade postaju zidovi oko svojih tlocrta, visoki koliko je navedeno, u jednom koraku poništavanja. Parcela postaje obris gradilišta, kao drugi korak poništavanja.

Namjena, zona poplave i tlo navedeni su samo radi informacije; nisu crtani.

## Šta treba znati

- Obrisi su onoliko dobri koliko i otvoreni podaci: OpenStreetMap i katastarski slojevi parcela uvelike se razlikuju od mjesta do mjesta. Provjerite ono što je bitno na geodetskom snimku.
- Pozicije su u metrima istočno i sjeverno od tačke adrese, na ravnoj aproksimaciji, tačne na nekoliko metara unutar nekoliko kilometara.
- Podaci nose licence svojih izvora (OpenStreetMap je ODbL); okvir prikazuje red s pripisom.
