---
title: Saveti za crtanje: neuobičajene veličine se prave, uz upozorenje
summary: BimCraft pravi ono što tražite. Veličina van uobičajene postaje upozorenje u Problemima; ona vas nikada ne zaustavlja u crtanju ili čuvanju.
keywords: saveti, upozorenje, problemi, odbijeno, neće da crta, premalo, preusko, minimum, granica, širina stepeništa, visina stepenika, gazište, stub, rampa, veličina vrata, linija mreže, visina nivoa, krovna kućica, spiralno stepenište, nagib plata, kratak zid, bez blokada
from: 20090130
---

## Šta ćete uraditi

Nacrtajte veličinu koja nije uobičajena i vidite gde vas BimCraft o tome obaveštava.

## Koraci

1. Nacrtajte ili promenite element onako kako želite, na primer stepenište široko 400 mm.
2. BimCraft ga pravi onako kako ste tražili.
3. Otvorite {{ui:Problemi}} na gornjoj traci. Pod **Saveti za crtanje** nalazi se upozorenje koje navodi element, veličinu koju ste zadali i uobičajeni opseg.
4. Kliknite upozorenje da izaberete element. Promenite veličinu ako je bila greška, ili je ostavite: upozorenje se može prihvatiti, sa razlogom ili bez njega.

## Šta je savet

Ovo se nekada odbijalo. Sada se pravi, svako sa upozorenjem:

- **Stepeništa**: uža od 500 mm ili šira od 5 m; visine stepenika van 100 do 300 mm; gazišta van 150 do 600 mm.
- **Spiralna stepeništa**: stub van 40 do 400 mm; gazišta dublja od 100 mm na liniji hoda.
- **Stubovi**: uži od 50 mm u preseku ili niži od 300 mm.
- **Rampe**: uže od 300 mm.
- **Vrata i prozori**: uži ili niži od 100 mm.
- **Linije mreže**: kraće od 100 mm.
- **Zidovi**: zid kraći od 50 mm, na primer posle skraćivanja.
- **Nivoi**: niži od 1 m ili viši od 100 m (nova zgrada, podeljeni nivoi, visina nivoa).
- **Krovne kućice**: široke van 600 mm do 12 m, prednji zid van 300 mm do 4 m, previs veći od 1 m, zidovi van 50 do 400 mm.
- **Plato zgrade**: bočni nagibi van 1:1 do 10:1.

## Šta se i dalje odbija

Samo ono što se ne može napraviti ili pronaći, svako sa porukom koja kaže zašto:

- Veličina manja od 10 mm (zid manji od 1 mm): nema šta da se napravi.
- Krovna kućica koja nije šira od dvostruke debljine svog zida: njena dva bočna zida bi se spojila.
- Plato zgrade sa bočnim nagibima strmijim od 0.1:1 (to je potporni zid) ili blažim od 100:1 (nasip bi se nastavio bez kraja).
- Nešto što ne staje tamo gde ste ga stavili, kontura koja seče samu sebe, ili element koji više nije u modelu.

## Dobro je znati

- Savet se izračunava iz modela, pa se ponovo pojavljuje kada kasnije otvorite fajl, i nestaje kada se veličina ispravi.
- Provere modela, paketi propisa i IDS provere takođe samo navode ono što nađu. Ništa u {{ui:Problemi}} ne zaustavlja crtanje ili čuvanje.
- Uobičajeni opsezi su opšta praksa, a ne građevinski propis. Za propis dodajte dodatak Građevinski propisi i izaberite svoje mesto.

## Dalje

- [Proverite model zbog čestih problema](topic:model-checks)
- [Stepeništa i ograde](topic:stairs-and-railings)
