---
title: Temelji pod stenami
summary: Postavite temeljno ploščo na terenu, temeljne zidove s ploščo, plazilni prostor ali klet pod stavbo z enim klikom; temelji so dimenzionirani glede na zidove in število etaž, temelj pa se prilagodi, ko se zidovi premaknejo.
keywords: temelj, temeljna stopa, temeljna plošča na terenu, zadebeljen rob, monolitna plošča, temeljni zid, plazilni prostor, klet, kletni zid, zmrzal, beton, širina temeljne stope
from: c0e20172
---

## Kaj boste naredili

Dajte stavbi temelj, ki ustreza njenim zidovom. BimCraft sledi zunanjosti zidov, dimenzionira temeljne stope glede na tip zidu in na to, koliko etaž stoji na njih, in temelj naredi znova, kadar se zidovi spremenijo.

## Postavite temelj

1. Na nivoju, na katerem stojijo zidovi (običajno prvi), odprite {{ui:Zgradba}} in izberite {{ui:Temelj}}.
2. Izberite vrsto:
   - **Temeljna plošča na terenu**: betonska plošča debeline 4 in, katere zgornji rob so tla, z zadebeljenim robom pod zidovi.
   - **Temeljni zidovi in plošča**: temeljni zidovi do tal na temeljnih stopah, s ploščo znotraj njih.
   - **Plazilni prostor**: temeljni zidovi, ki se ustavijo pod ogrodjem tal, na temeljnih stopah, brez plošče.
   - **Klet**: temeljni zidovi polne višine na temeljnih stopah s kletno ploščo, pod ogrodjem tal.
3. Kliknite znotraj stavbe: temeljne stope so prikazane črtkano z njihovo velikostjo. Kliknite.

Klik na stavbo, ki že ima temelj, ga izbere, tako da ga lahko spremenite namesto da dodate drugega.

## Spremenite ga

Izberite temelj (kliknite znotraj stavbe z {{ui:Temelj}} ali kateri koli njegov del v 3D-pogledu ali drevesu modela) in ga spremenite v **Lastnostih**: vrsto, širino in globino temeljne stope, kako globoko je spodnji rob stope, debelino zidu, koliko pod tlemi se zidovi končajo, višino kleti in debelino plošče. Vsaka sprememba je en korak razveljavitve.

Velikosti, označene z **samodejno**, izhajajo iz zidov: stope so široke 12 in, 15 in ali 23 in za eno, dve ali tri etaže na plošči ali temeljnih zidovih, 18 in, 22 in ali 27 in nad plazilnim prostorom ali kletjo, in 4 in širše pod zidovi iz zidakov ali betona. Vpišite velikost, če želite lastno; vpišite `0`, da se vrnete na samodejno.

:::warning
Samodejne velikosti so označene privzete vrednosti za tipične lahke hiše, niso inženirski izračun. Projektant ali inženir preveri temeljne stope, globine in zidove glede na tla, globino zmrzovanja in obremenitve.
:::

## Kaj se shrani

Temelj se shrani kot sestav elementov IFC („Temelj“), sestavljen iz temeljne stope (ali zadebeljenega roba plošče), temeljnega zidu in plošče, kot zahteva njegova vrsta, vse iz betona, vsak s svojimi količinami: dolžinami, širinami, višinami, površinami in prostorninami, pripravljenimi za predizmere.

## Dobro je vedeti

- Premaknite, dodajte ali izbrišite zidove, in temelj pod njimi nastane znova; zarišete li zidove na nivoju nad njim, se temeljne stope pod njim razširijo za dodatno etažo.
- {{key:Delete}} odstrani izbrani temelj z vsemi njegovimi deli.
- Z zemljiščem mesta v modelu (glejte [Teren mesta, gradbena podlaga in tlakovanje](topic:terrain)) se temeljni zidovi in temeljne stope plazilnega prostora stopničasto spuščajo z njim v korakih po 8 in.
- Temeljne stope pod notranjimi zidovi še niso izdelane.
