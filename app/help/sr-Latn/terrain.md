---
title: Teren na lokaciji, plato zgrade i popločavanje
summary: Unesi teren u model iz tačaka snimanja, izohipsi, LAS / LAZ skeniranja, GeoTIFF-a, LandXML površi (CivilCraft-ove) ili nekoliko visinskih kota; ukopaj plato zgrade u teren sa nagibima i iskopom / nasipom; postavi prilaze, šetnje i terase na njega; predaj ga CivilCraft-u kao LandXML.
keywords: teren, tlo, lokacija, topografija, snimanje, tačke, PNEZD, izohipse, LAS, LAZ, LiDAR, GeoTIFF, DEM, visinska kota, kota tačke, nivelacija, nivelisanje, plato, plato zgrade, iskop, nasip, zemljani radovi, izlaz na teren, nagib, prilaz, šetnja, terasa, popločavanje, LandXML, CivilCraft
from: 208298d6
---

## Šta ćeš uraditi

Smesti kuću na njen plac. Teren postaje deo modela: prikazan u 3D, presečen u presecima i izgledima, sa izohipsama na osnovi. Plato zgrade se ukopava u teren ispod kuće, prilazi i šetnje prate njegov oblik, a temelji se spuštaju zajedno sa njim.

## Unos terena

1. Otvori {{ui:Verzija}} i izaberi {{ui:Teren}}.
2. Ili:
   - **Otvori datoteku snimanja…**: tačke snimanja (PNEZD, PENZD ili prosto istočna koordinata, severna koordinata, kota; odvojene zarezom, tabulatorom ili razmakom), izohipse u DXF ili DWG (polilinije na svojoj koti, 3D polilinije), LAS ili LAZ skeniranje (zadržane tačke tla, proređene na oko jednu po kvadratnom metru), GeoTIFF ili ASCII mrežu visina, ili **LandXML** površ kakvu izvozi CivilCraft (njene tačke i trouglovi se zadržavaju; kad datoteka sadrži više površi, BimCraft pita koja je teren; njene jedinice dolaze iz datoteke). Najpre izaberi jedinice datoteke (LandXML ih navodi sam).
   - Ili unesi **Visinsku kotu tačke** (od poda ovog nivoa, pa je `-1'` stopa ispod njega) i klikni tačke na osnovi, promeni kotu i klikni još tačaka, zatim **Napravi teren**. Tri tačke su dovoljne za početak.

Koordinate snimanja daleko od modela (državna mreža, UTM) pomeraju se na kuću, a visine se podešavaju tako da je teren kod kuće oko 8" ispod prvog sprata. **Podigni teren** u **Svojstvima** ispravlja to za bilo koju vrednost.

## Plato zgrade

1. Izaberi {{ui:Plato zgrade}}.
2. Podesi **Marginu** oko kuće, koliko **plato leži ispod poda** (8" ispod ploče, više ispod prostora za puzanje) i **Nagibe** prema postojećem terenu (`2:1` = dva stopa u stranu za svaki stop uspona ili pada).
3. Klikni unutar kuće.

Teren se izravnava ispod kuće i do margine, zatim se uzdiže u brdo (iskop) i spušta do niže strane (nasip) dok ne stigne do postojećeg terena. **Svojstva** terena i plata daju zapremine iskopa i nasipa. Pomeri zidove, pa plato prati.

## Prilazi, šetnje i terase

Izaberi {{ui:Popločavanje}}, izaberi **Šetnju**, **Prilaz** ili **Terasu**, pa klikni uglove. Ponovo klikni prvi ugao, dvaput klikni ili pritisni {{key:Enter}} za kraj. Popločavanje prati gotov nivo terena; promeni mu vrstu ili debljinu u **Svojstvima**.

## Temelji prate nivo

Kad je teren u modelu, zidni temelji i temelji prostora za puzanje prate ga: uz svaki zid temelj ostaje na svojoj dubini ispod terena izvan zida i stepenasto se spušta u celim koracima od 8" tamo gde teren pada (vidi [Temelji ispod zidova](topic:foundations)).

## Predaj CivilCraft-u

**LandXML za CivilCraft** (u redu **Teren** ili u **Svojstvima** terena) preuzima postojeći teren i gotov nivo kao LandXML datoteku. Otvori je u CivilCraft-u za pravo nivelisanje, odvodnjavanje i zemljane radove.

## Dobro je znati

- Teren zahteva IFC4 model, kao svaka nova zgrada.
- Izohipse se prikazuju na osnovi nivoa terena, na razmaku postavljenom u **Svojstvima** terena; svaka peta je deblja.
- Teren se čuva kao IFC element terena (zatvorena trougaona površ, pa je preseci seku); plato i popločavanje se čuvaju zajedno sa njim. Obriši teren da počneš ispočetka: njegov plato i popločavanje idu sa njim.
