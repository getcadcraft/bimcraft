---
title: Temelji ispod zidova
summary: Postavite ploču na terenu, temeljne zidove s pločom, puzajući prostor ili podrum ispod zgrade jednim klikom; temeljne stope se dimenzionišu prema zidovima i broju spratova, a temelj prati zidove kad se oni pomjere.
keywords: temelj, temeljna stopa, ploča na terenu, zadebljana ivica, monolitna ploča, temeljni zid, puzajući prostor, podrum, zid podruma, mraz, beton, širina temeljne stope
from: c0e20172
---

## Šta ćete uraditi

Dajte zgradi temelj koji odgovara njenim zidovima. BimCraft prati vanjsku stranu zidova, dimenzioniše temeljne stope prema tipu zida i broju spratova koji stoje na njima, i ponovo pravi temelj kad se zidovi promijene.

## Postavite temelj

1. Na nivou čiji zidovi stoje na njemu (obično prvom) otvorite {{ui:Verzija}} i izaberite {{ui:Temelj}}.
2. Izaberite vrstu:
   - **Ploča na terenu**: betonska ploča debljine 4" čiji je gornji dio pod, sa zadebljanom ivicom ispod zidova.
   - **Temeljni zidovi i ploča**: temeljni zidovi do poda na temeljnim stopama, s pločom unutar njih.
   - **Puzajući prostor**: temeljni zidovi koji staju ispod konstrukcije poda, na temeljnim stopama, bez ploče.
   - **Podrum**: temeljni zidovi ppune visine na temeljnim stopama, s podrumskom pločom, ispod konstrukcije poda.
3. Pokažite unutar zgrade: temeljne stope prikazuju se isprekidano s veličinom. Kliknite.

Klikom na zgradu koja već ima temelj, on se odabere, pa ga možete promijeniti umjesto da dodajete drugi.

## Promjena

Odaberite temelj (kliknite unutar zgrade alatom {{ui:Temelj}}, ili kliknite bilo koji njegov dio u 3D prikazu ili stablu modela) i promijenite ga u **Svojstvima**: vrstu, širinu i dubinu temeljne stope, koliko je donja strana stope duboko, debljinu zida, koliko ispod poda zidovi staju, visinu podruma i debljinu ploče. Svaka promjena je jedan korak poništavanja.

Dimenzije označene **auto** dolaze od zidova: temeljne stope širine 12", 15" ili 23" za jedan, dva ili tri sprata na ploči ili temeljnim zidovima, 18", 22" ili 27" iznad puzajućeg prostora ili podruma, i 4" šire ispod zidova od zidarije ili betona. Upišite dimenziju da postavite svoju; upišite `0` da se vratite na auto.

:::warning
Automatske dimenzije su označene zadane vrijednosti za tipične lake kuće, a ne proračun. Projektant ili inženjer provjerava stope, dubine i zidove za tlo, dubinu mraza i opterećenja.
:::

## Šta se čuva

Temelj se čuva u IFC-u kao sklop elemenata ("Foundation") sastavljen od temeljne stope (ili zadebljane ivice ploče), temeljnog zida i ploče, kako vrsta traži, svi od betona, svaki sa svojim količinama: dužinama, širinama, visinama, površinama i zapreminama, spremnim za predmjer.

## Dobro je znati

- Pomjerite, dodajte ili obrišite zidove i temelj ispod njih se pravi ponovo; nacrtate li zidove na nivou iznad, temeljne stope ispod se proširuju za dodatni sprat.
- {{key:Delete}} briše odabrani temelj sa svim njegovim dijelovima.
- Kad je teren lokacije u modelu (pogledajte [Teren lokacije, građevinska podloga i popločavanje](topic:terrain)), temeljni zidovi i stope puzajućeg prostora spuštaju se s njim u koracima od 8".
- Temeljne stope ispod unutrašnjih zidova još nisu napravljene.
