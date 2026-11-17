---
title: Susedne zgrade i parcela iz CivilCraft-a
summary: Uzmi zgrade i parcelu koje je CivilCraft-ova Adresa na lokaciju pronašla oko adrese kao predloge, i dodaj one koje štikliraš.
keywords: lokacija, adresa, parcela, komšije, kontekst, civilcraft, ccsite, zgrade, obris lokacije, predlog
from: 3be9407b
---

## Šta radi

U CivilCraft-u, Površina › Više › Adresa na lokaciju pronalazi zgrade, parcelu, namenu zemljišta, zonu poplave i zemljište oko adrese iz otvorenih podataka. Njegovo dugme „Pošalji u BimCraft kao predloge” (ili „Sačuvaj lokaciju kao datoteku”, pa otvori `.ccsite.json` ovde) donosi ih u BimCraft. Ništa se ne dodaje dok ti ne kažeš.

## Kako se koristi

1. Pokreni ili otvori model. Tačka adrese nalazi se u početnoj tački nivoa na kome si.
2. Okvir navodi svaku susednu zgradu i parcelu sa potvrdnim poljem. Odštikliraj ono što ne želiš.
3. Zgrade čiju visinu izvor nije dao koriste visinu upisanu na vrhu okvira. Zgrada za koju je dat samo broj nivoa računa se 3 m po nivou, i okvir to kaže.
4. Pritisni „Dodaj štiklirane”. Zgrade postaju zidovi oko svojih tlocrta, visoki koliko su navedeni, u jednom koraku opozivanja. Parcela postaje obris lokacije, kao drugi korak opozivanja.

Namena zemljišta, zona poplave i zemljište navedeni su samo kao informacija; ne crtaju se.

## Šta treba znati

- Obrisi su onoliko dobri koliko su otvoreni podaci: OpenStreetMap i slojevi katastarskih parcela se znatno razlikuju od mesta do mesta. Proveri ono što je važno sa geodetskim snimkom.
- Položaji su u metrima istočno i severno od tačke adrese, na ravnoj aproksimaciji, tačni do nekoliko metara unutar nekoliko kilometara.
- Podaci nose licence svojih izvora (OpenStreetMap je ODbL); okvir prikazuje red sa navođenjem autora.
