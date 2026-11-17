---
title: Savjet za crtanje: neuobičajene veličine se prave, uz upozorenje
summary: BimCraft pravi ono što tražite. Veličina izvan uobičajene postaje upozorenje u Problemima; nikada vas ne zaustavlja u crtanju ili spašavanju.
keywords: savjet, upozorenje, problemi, odbijeno, neće da crta, preusko, premalo, minimum, granica, širina stepeništa, visina stepenika, gazište, stub, rampa, veličina vrata, linija mreže, visina nivoa, krovna kućica, spiralno stepenište, nagib podloge, kratak zid, bez prepreka
from: 20090130
---

## Šta ćete raditi

Nacrtajte veličinu koja nije uobičajena i vidite gdje vas BimCraft na to upozorava.

## Koraci

1. Nacrtajte ili promijenite element kako želite: na primjer stepenište široko 400 mm.
2. BimCraft ga pravi onako kako ste tražili.
3. Otvorite {{ui:Problemi}} na gornjoj traci. Pod **Savjet za crtanje** nalazi se upozorenje koje navodi element, veličinu koju ste zadali i uobičajeni raspon.
4. Kliknite upozorenje da odaberete element. Promijenite veličinu ako je to bila greška, ili je ostavite: upozorenje se može prihvatiti, sa ili bez razloga.

## Šta je savjet

Ovo se ranije odbijalo. Sada se pravi, svako uz upozorenje:

- **Stepeništa**: uža od 500 mm ili šira od 5 m; visine stepenika izvan 100 do 300 mm; gazišta izvan 150 do 600 mm.
- **Spiralna stepeništa**: stub izvan 40 do 400 mm; gazišta plića od 100 mm na liniji hoda.
- **Stubovi**: manji od 50 mm u presjeku ili niži od 300 mm.
- **Rampe**: šire od 300 mm su uobičajene; uže od 300 mm dobijaju upozorenje.
- **Vrata i prozori**: uži ili niži od 100 mm.
- **Linije mreže**: kraće od 100 mm.
- **Zidovi**: zid kraći od 50 mm, na primjer nakon odsijecanja.
- **Nivoi**: niži od 1 m ili viši od 100 m (nova zgrada, podijeljeni nivoi, visina nivoa).
- **Krovne kućice**: širina izvan 600 mm do 12 m, prednji zid izvan 300 mm do 4 m, previs veći od 1 m, zidovi izvan 50 do 400 mm.
- **Podloge zgrade**: nagibi strana izvan 1:1 do 10:1.

## Šta se još odbija

Odbija se samo ono što se ne može izgraditi ili pronaći, svako uz poruku koja kaže zašto:

- Veličina manja od 10 mm (zid manji od 1 mm): nema šta da se izgradi.
- Krovna kućica koja nije šira od dvostruke debljine svog zida: njena dva bočna zida bi se spojila.
- Podloga zgrade sa nagibima strana strmijim od 0.1:1 (to je potporni zid) ili blažim od 100:1 (teren bi se nastavljao bez kraja).
- Nešto što ne stane tamo gdje ste ga stavili, obris koji sam sebe siječe, ili element koji više nije u modelu.

## Korisno znati

- Savjet se računa iz modela, pa se ponovo pojavljuje kada kasnije otvorite datoteku, a nestaje kada se veličina ispravi.
- Provjere modela, paketi propisa i IDS provjere također samo navode ono što nađu. Ništa u {{ui:Problemi}} vas ne sprječava da crtate ili spašavate.
- Uobičajeni rasponi su opšta praksa, a ne građevinski propis. Za propis dodajte dodatak Građevinski propisi i izaberite svoje mjesto.

## Dalje

- [Provjerite model zbog čestih problema](topic:model-checks)
- [Stepeništa i ograde](topic:stairs-and-railings)
