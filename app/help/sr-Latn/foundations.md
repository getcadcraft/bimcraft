---
title: Temelji ispod zidova
summary: Postavite ploču na tlu, zidove temelja sa pločom, puzajući prostor ili podrum ispod zgrade jednim klikom; temelji se dimenzionišu prema zidovima i broju spratova, a temelj prati zidove kad se oni pomere.
keywords: temelj, temeljna stopa, ploča na tlu, zadebljana ivica, monolitna ploča, zid temelja, puzajući prostor, podrum, zid podruma, mraz, beton, širina temelja
from: c0e20172
---

## Šta ćete uraditi

Dajte zgradi temelj koji odgovara njenim zidovima. BimCraft prati spoljašnju stranu zidova, dimenzioniše temeljne stope prema tipu zida i broju spratova koji na njima stoje, i ponovo pravi temelj kad god se zidovi promene.

## Postavite temelj

1. Na nivou čiji zidovi na njemu stoje (obično prvi) otvorite {{ui:Verzija}} i izaberite {{ui:Temelj}}.
2. Izaberite vrstu:
   - **Ploča na tlu**: betonska ploča debljine 4" čija je gornja površina pod, sa zadebljanom ivicom ispod zidova.
   - **Zidovi temelja i ploča**: zidovi temelja do poda na temeljnim stopama, sa pločom unutar njih.
   - **Puzajući prostor**: zidovi temelja koji staju ispod konstrukcije poda, na temeljnim stopama, bez ploče.
   - **Podrum**: punovisinski zidovi temelja na temeljnim stopama, sa pločom podruma, ispod konstrukcije poda.
3. Pokažite unutar zgrade: temeljne stope prikazuju se isprekidano, sa svojom veličinom. Kliknite.

Klikom na zgradu koja već ima temelj izabraćete ga, pa ga možete promeniti umesto da dodajete drugi.

## Promena

Izaberite temelj (kliknite unutar zgrade sa {{ui:Temelj}} ili kliknite bilo koji njegov deo u 3D prikazu ili stablu modela) i promenite ga u **Svojstvima**: vrstu, širinu i dubinu temeljne stope, koliko je donja strana stope duboko, debljinu zida, koliko ispod poda zidovi staju, visinu podruma i debljinu ploče. Svaka promena je jedan korak poništavanja.

Veličine označene sa **auto** dolaze iz zidova: stope široke 12", 15" ili 23" za jedan, dva ili tri sprata na ploči ili zidovima temelja; 18", 22" ili 27" preko puzajućeg prostora ili podruma; i 4" šire ispod zidova od opeke ili betona. Upišite veličinu da postavite sopstvenu; upišite `0` da se vratite na auto.

:::warning
Automatske veličine su označene podrazumevane vrednosti za tipične lake kuće, a ne inženjerski proračun. Projektant ili inženjer proverava temeljne stope, dubine i zidove prema tlu, dubini mraza i opterećenjima.
:::

## Šta se čuva

Temelj se čuva kao IFC sklop elemenata („Foundation”) sastavljen od temeljne stope (ili zadebljane ivice ploče), zida temelja i ploče, kako vrsta traži, sve od betona, svaki sa svojim količinama: dužinama, širinama, visinama, površinama i zapreminama, spremnim za predmere.

## Dobro je znati

- Pomerite, dodajte ili obrišite zidove i temelj ispod njih se pravi ponovo; nacrtate li zidove na nivou iznad, temeljne stope ispod se šire za dodatni sprat.
- {{key:Delete}} uklanja izabrani temelj sa svim njegovim delovima.
- Sa terenom mesta u modelu (videti [Tlo gradilišta, građevinska platforma i popločavanje](topic:terrain)), zidovi temelja i stope puzajućeg prostora spuštaju se s njim u koracima od 8".
- Temeljne stope ispod unutrašnjih zidova još nisu napravljene.
