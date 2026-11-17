---
title: Teren na lokaciji, gradbena ploščad in tlakovanje
summary: Vnesite teren v model iz geodetskih točk, plastnic, oblaka točk LAS / LAZ, GeoTIFF, površine LandXML, ki jo izvozi CivilCraft, ali nekaj višinskih kot v točkah; vklešite gradbeno ploščad hiše z njenimi nakloni ter izkopom in nasipom; na teren položite dovozne poti, pešpoti in terase; predajte ga v CivilCraft kot LandXML.
keywords: teren, tla, lokacija, topografija, geodetska merjenja, točke, PNEZD, plastnice, LAS, LAZ, LiDAR, GeoTIFF, DEM, višina, višinska kota, naklon, planiranje, gradbena ploščad, izkop, nasip, zemeljska dela, dovozna pot, pešpot, terasa, tlakovanje, LandXML, CivilCraft
from: 208298d6
---

## Kaj boste naredili

Hišo postavite na njeno lokacijo. Teren postane del modela: prikazan je v 3D, prerezan v prerezih in pogledih, na tlorisu pa so plastnice. Vanj se vreže gradbena ploščad pod hišo, dovozne poti in pešpoti mu sledijo, temelji pa se spuščajo skupaj z njim.

## Vnos terena

1. Odprite {{ui:Zgradba}} in izberite {{ui:Teren}}.
2. Bodisi:
   - **Odprite geodetsko datoteko …**: geodetske točke (PNEZD, PENZD ali preprosto vzhodna, severna in višina; ločene z vejico, tabulatorjem ali presledkom), plastnice v DXF ali DWG (polilinije na svoji višini, 3D polilinije), skeniranje LAS ali LAZ (ohranjene točke tal, redčene na približno eno na kvadratni meter), GeoTIFF ali mrežo višin ASCII ali površino **LandXML**, kakršno izvozi CivilCraft (njene lastne točke in trikotniki ostanejo; če datoteka vsebuje več površin, BimCraft vpraša, katera je teren; enote so določene z datoteko). Najprej izberite enote datoteke (LandXML jih navede sam).
   - Ali vnesite **Višinska kota točke** (od tal te etaže, zato je `-1'` en čevelj pod njimi) in kliknite točke na tlorisu, spremenite višino in kliknite še več točk, nato **Naredi teren**. Za začetek zadostujejo tri točke.

Geodetske koordinate, daleč od modela (državna ravnina, UTM), se premaknejo na hišo, višine pa se nastavijo tako, da je teren pri hiši približno 8" pod prvo etažo. **Dvignite teren** v **Lastnostih** popravi to za poljubno vrednost.

## Gradbena ploščad

1. Izberite {{ui:Gradbena ploščad}}.
2. Nastavite **Odmik** okoli hiše, koliko je **ploščad pod tlemi** (8" pod ploščo, več pod plazilnim prostorom) in **Nakloni** do obstoječega terena (`2:1` = dva čevlja navzven za vsak čevelj navzgor ali navzdol).
3. Kliknite znotraj hiše.

Teren se zravna pod hišo in do odmika, nato se nagne navzgor v pobočje (izkop) in navzdol proti nižji strani (nasip), dokler ne doseže obstoječega terena. **Lastnosti** terena in ploščadi prikažejo prostornine izkopa in nasipa. Če premaknete stene, ploščad sledi.

## Dovozne poti, pešpoti in terase

Izberite {{ui:Tlakovanje}}, izberite **Pešpot**, **Dovozna pot** ali **Terasa** in kliknite vogale. Prvi vogal kliknite znova, dvokliknite ali pritisnite {{key:Enter}}, da končate. Tlakovanje sledi končnemu nivelmanu; vrsto ali debelino spremenite v **Lastnostih**.

## Temelji sledijo terenu

Ko je teren v modelu, se temeljni zidovi in temelji plazilnih prostorov prilagodijo nanj: ob vsaki steni temelj ostane na svoji globini pod terenom zunaj in se v korakih po 8" stopničasto zniža tam, kjer teren pada (glejte [Temelji pod stenami](topic:foundations)).

## Predajte v CivilCraft

**LandXML za CivilCraft** (v vrstici Teren ali v **Lastnostih** terena) prenese obstoječi teren in končni nivelman kot datoteko LandXML. Odprite jo v CivilCraft za pravo planiranje, odvodnjavanje in zemeljska dela.

## Dobro je vedeti

- Teren potrebuje model IFC4, kot vsaka nova stavba.
- Plastnice se na tlorisu etaže terena prikažejo v intervalu, nastavljenem v **Lastnostih** terena; vsaka peta je debelejša.
- Teren se shrani kot element terena IFC (zaprta trikotniška površina, zato ga prerezi režejo); ploščad in tlakovanje se shranita skupaj z njim. Če želite začeti znova, izbrišite teren; njegova ploščad in tlakovanje gresta z njim.
