---
title: Teren lokacije, građevinska podloga i popločanje
summary: Unesite teren u model iz tačaka geodetskog snimanja, izohipsi, LAS / LAZ skena, GeoTIFF-a, LandXML površine (CivilCraft-ove) ili nekoliko kota tačaka; ukopajte građevinsku podlogu kuće sa nagibima i iskopom / nasipom; postavite prilaze, staze i terase na njega; predajte ga CivilCraft-u kao LandXML.
keywords: teren, tlo, lokacija, topografija, geodetsko snimanje, tačke, PNEZD, izohipse, LAS, LAZ, LiDAR, GeoTIFF, DEM, kota, kota tačke, nagib, nivelacija, podloga, građevinska podloga, iskop, nasip, zemljani radovi, izlazak na teren, nagib, prilaz, staza, terasa, popločanje, LandXML, CivilCraft
from: 208298d6
---

## Šta ćete uraditi

Smjestite kuću na njenu lokaciju. Teren postaje dio modela: prikazuje se u 3D, presijeca se u presjecima i izgledima, a izohipse su na osnovi. Građevinska podloga se ukopava ispod kuće, prilazi i staze prate njen tok, a temelji se spuštaju zajedno s njom.

## Unos terena

1. Otvorite {{ui:Build}} i odaberite {{ui:Terrain}}.
2. Odaberite jedno od:
   - **Otvori datoteku geodetskog snimanja…**: tačke geodetskog snimanja (PNEZD, PENZD ili jednostavno istočna koordinata, sjeverna koordinata, kota; odvojene zarezom, tabulatorom ili razmakom), izohipse u DXF ili DWG (polilinije sa svojom kotom, 3D polilinije), LAS ili LAZ sken (zadržane tačke tla, proređene na otprilike jednu po kvadratnom metru), GeoTIFF ili ASCII mrežu kota, ili **LandXML** površinu kakvu izvozi CivilCraft (njene tačke i trouglovi se zadržavaju; kada datoteka sadrži više površina, BimCraft pita koja je teren; njene jedinice dolaze iz datoteke). Najprije odaberite jedinice datoteke (LandXML ih navodi sam).
   - Ili upišite **Kota tačke** (od poda ovog nivoa, pa je `-1'` jedna stopa ispod njega) i kliknite tačke na osnovi, promijenite kotu i kliknite još tačaka, pa **Napravi teren**. Tri tačke su dovoljne za početak.

Koordinate geodetskog snimanja daleko od modela (državna ravan, UTM) pomjeraju se na kuću, a kote se postavljaju tako da je teren kod kuće otprilike 8" ispod prvog sprata. **Podigni teren** u **Svojstvima** ispravlja to za bilo koji iznos.

## Građevinska podloga

1. Odaberite {{ui:Building pad}}.
2. Postavite **Margina** oko kuće, koliko **podloga leži ispod poda** (8" ispod betonske ploče, više ispod niskog podruma) i **Nagibe** prema postojećem terenu (`2:1` = dvije stope van za svaku stopu gore ili dolje).
3. Kliknite unutar kuće.

Teren se izravnava ispod kuće i do margine, zatim se nagiba prema brdu (iskop) i spušta prema niskoj strani (nasip) dok se ne sastane s postojećim terenom. **Svojstva** terena i podloge daju zapremine iskopa i nasipa. Pomjerite zidove, a podloga ide za njima.

## Prilazi, staze i terase

Odaberite {{ui:Paving}}, izaberite **Šetnja**, **Prilaz** ili **Terasa**, pa kliknite uglove. Ponovo kliknite prvi ugao, dvaput kliknite ili pritisnite {{key:Enter}} za završetak. Popločanje prati gotov nivo; promijenite mu vrstu ili debljinu u **Svojstvima**.

## Temelji prate teren

Kada je teren u modelu, temeljni zidovi i temelji niskog podruma prate ga: uz svaki zid temelj ostaje na svojoj dubini ispod terena izvana, a stepenasto se spušta u cijelim koracima od 8" tamo gdje teren pada (vidi [Temelji ispod zidova](topic:foundations)).

## Predaja CivilCraft-u

**LandXML za CivilCraft** (u redu Terrain, ili u **Svojstvima** terena) preuzima postojeći teren i gotov nivo kao LandXML datoteku. Otvorite je u CivilCraft-u za pravo nivelisanje, odvodnju i zemljane radove.

## Dobro je znati

- Teren zahtijeva IFC4 model, kao i svaki novi objekat.
- Izohipse se prikazuju na osnovi nivoa terena na razmaku postavljenom u **Svojstvima** terena; svaka peta je deblja.
- Teren se čuva kao IFC element terena (zatvorena trijangulirana površina, pa je presjeci mogu presjeći); podloga i popločanje se čuvaju s njim. Obrišite teren da počnete ispočetka — njegova podloga i popločanje idu s njim.
