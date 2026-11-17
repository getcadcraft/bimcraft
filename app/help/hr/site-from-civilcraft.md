---
title: Susjedne zgrade i katastarska čestica iz CivilCraft-a
summary: Uzmite zgrade i katastarsku česticu koje je Adresa na lokaciju u CivilCraftu pronašla oko adrese kao prijedloge, i dodajte one koje označite.
keywords: lokacija, adresa, katastarska čestica, susjedi, kontekst, civilcraft, ccsite, zgrade, obris lokacije, predloži
from: 3be9407b
---

## Što radi

U CivilCraftu, Površina › Više › Adresa na lokaciju pronalazi zgrade, katastarsku česticu, namjenu, zonu poplava i tlo oko adrese iz otvorenih podataka. Njegov gumb „Pošalji u BimCraft kao prijedloge“ (ili „Spremi lokaciju kao datoteku“, pa otvorite `.ccsite.json` ovdje) donosi ih u BimCraft. Ništa se ne dodaje dok to ne potvrdite.

## Kako se koristi

1. Pokrenite ili otvorite model. Adresna točka nalazi se u ishodištu razine na kojoj ste.
2. Dijaloški okvir navodi svaku susjednu zgradu i katastarsku česticu s potvrdnim okvirom. Odznačite ono što ne želite.
3. Zgrade čiju visinu izvor nije dao koriste visinu upisanu na vrhu okvira. Zgrada koja je dala samo broj etaža računa se s 3 m po etaži, a okvir to navodi.
4. Pritisnite „Dodaj označene“. Zgrade postaju zidovi oko svojih tlocrta, visoki koliko je navedeno, u jednom koraku poništavanja. Katastarska čestica postaje obris lokacije, kao drugi korak poništavanja.

Namjena, zona poplava i tlo navedeni su samo za informaciju; ne crtaju se.

## Što valja znati

- Obrisi su dobri koliko i otvoreni podaci: OpenStreetMap i lokalni slojevi katastarskih čestica znatno se razlikuju od mjesta do mjesta. Provjerite što je važno prema geodetskoj izmjeri.
- Položaji su metri istočno i sjeverno od adresne točke na ravnoj aproksimaciji, točni na nekoliko metara unutar nekoliko kilometara.
- Podaci nose licence svojih izvora (OpenStreetMap je ODbL); okvir prikazuje redak s navođenjem autora.
