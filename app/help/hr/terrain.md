---
title: Teren lokacije, platoa zgrade i popločenje
summary: Unesite teren u model iz geodetskih točaka, izohipsi, LAS / LAZ snimke, GeoTIFF-a, LandXML površine (CivilCraft) ili nekoliko visinskih kota; ukopajte platou zgrade s nagibima te iskopom / nasipom; postavite prilaze, staze i terase na teren; predajte ga CivilCraftu kao LandXML.
keywords: teren, tlo, lokacija, topografija, geodetska snimka, točke, PNEZD, izohipse, LAS, LAZ, LiDAR, GeoTIFF, DEM, kota, visinska kota, nagib, planiranje, platoa, platoa zgrade, iskop, nasip, zemljani radovi, nožica pokosa, pokos, prilaz, staza, terasa, popločenje, LandXML, CivilCraft
from: 208298d6
---

## Što ćete napraviti

Smjestite kuću na njezinu lokaciju. Teren postaje dio modela: prikazuje se u 3D, presijeca se u presjecima i pročeljima, a na tlocrtu se prikazuju izohipse. Pod kućom se ukopava platoa zgrade, prilazi i staze prate teren, a temelji se spuštaju zajedno s njim.

## Unos terena

1. Otvorite {{ui:Izgradnja}} i odaberite {{ui:Teren}}.
2. Ili:
   - **Otvori geodetsku datoteku…**: geodetske točke (PNEZD, PENZD ili jednostavno istok, sjever, kota; odvojene zarezom, tabulatorom ili razmakom), izohipse u DXF ili DWG (polilinije na svojoj visini, 3D polilinije), LAS ili LAZ snimku (zadržavaju se točke tla, razrijeđene na približno jednu po m²), GeoTIFF ili ASCII mrežu visina ili **LandXML** površinu kakvu izvozi CivilCraft (zadržavaju se njezine točke i trokuti; ako datoteka sadrži više površina, BimCraft pita koja je teren; jedinice dolaze iz datoteke). Najprije odaberite jedinice datoteke (LandXML ih navodi sam).
   - Ili upišite **Visinska kota** (od poda ove etaže, pa je `-1'` jedna stopa ispod nje) i kliknite točke na tlocrtu, promijenite kotu i kliknite još točaka, a zatim **Izradi teren**. Za početak su dovoljne tri točke.

Geodetske koordinate udaljene od modela (državna ravnina, UTM) premještaju se na kuću, a kote se postavljaju tako da je teren uz kuću oko 8" ispod prvog kata. **Podigni teren** u **Svojstvima** ispravlja to za bilo koji iznos.

## Platoa zgrade

1. Odaberite {{ui:Platoa zgrade}}.
2. Postavite **Rub** oko kuće, koliko **platoa leži ispod poda** (8" ispod ploče, više ispod puzajućeg prostora) i **Nagibe** prema postojećem terenu (`2:1` = dvije stope van za svaku stopu gore ili dolje).
3. Kliknite unutar kuće.

Teren se izravnava pod kućom i do ruba, zatim se nagibom diže u padinu (iskop) i spušta do niske strane (nasip) dok ne dođe do postojećeg terena. **Svojstva** terena i platoa daju volumene iskopa i nasipa. Pomaknete li zidove, platoa ih prati.

## Prilazi, staze i terase

Odaberite {{ui:Popločenje}}, izaberite **Šetnja**, **Prilaz** ili **Terasa** i kliknite kutove. Ponovno kliknite prvi kut, dvaput kliknite ili pritisnite {{key:Enter}} za završetak. Popločenje prati gotov teren; vrstu ili debljinu promijenite u **Svojstvima**.

## Temelji prate teren

Kad je teren u modelu, zidni temelji i temelji puzajućeg prostora prate ga: uz svaki zid temelj ostaje na svojoj dubini ispod terena izvana, a na mjestima gdje teren pada stepenuje se u cjelovitim koracima od 8" (vidi [Temelji ispod zidova](topic:foundations)).

## Predajte CivilCraftu

**LandXML za CivilCraft** (u retku Teren ili u **Svojstvima** terena) preuzima postojeći teren i gotovu razinu kao LandXML datoteku. Otvorite je u CivilCraftu za stvarno planiranje, odvodnju i zemljane radove.

## Dobro je znati

- Teren zahtijeva IFC4 model, kao i svaka nova zgrada.
- Izohipse se prikazuju na tlocrtu etaže terena u razmaku postavljenom u **Svojstvima** terena; svaka peta je deblja.
- Teren se sprema kao IFC element terena (zatvorena trokutasta površina, pa je presjeci mogu rezati); platoa i popločenje spremaju se zajedno s njim. Obrišite teren da biste počeli ispočetka: njegova platoa i popločenje odlaze s njim.
