---
title: Temelji ispod zidova
summary: Postavite betonsku ploču na tlo, temeljne zidove s pločom, puzajući prostor ili podrum ispod zgrade jednim klikom; temelji se dimenzioniraju prema zidovima i broju etaža, a temelj prati zidove kada se pomaknu.
keywords: temelj, temeljni samac, betonska ploča na tlu, rubno zadebljanje, monolitna ploča, temeljni zid, puzajući prostor, podrum, zid podruma, mraz, beton, širina temelja
from: c0e20172
---

## Što ćete učiniti

Dajte zgradi temelj koji odgovara njezinim zidovima. BimCraft prati vanjsku stranu zidova, dimenzionira temeljne samce prema vrsti zida i broju etaža koje na njima stoje te ponovno izrađuje temelj kad god se zidovi promijene.

## Postavite temelj

1. Na razini čiji zidovi na njemu stoje (obično prvoj) otvorite {{ui:Izgradnja}} i odaberite {{ui:Temelj}}.
2. Odaberite vrstu:
   - **Ploča na tlu**: betonska ploča debljine 4" čija je gornja strana pod, s rubnim zadebljanjem ispod zidova.
   - **Temeljni zidovi i ploča**: temeljni zidovi do poda na temeljnim samcima, s pločom unutar njih.
   - **Puzajući prostor**: temeljni zidovi koji staju ispod konstrukcije poda, na temeljnim samcima, bez ploče.
   - **Podrum**: temeljni zidovi pune visine na temeljnim samcima, s podrumskom pločom, ispod konstrukcije poda.
3. Pokažite unutar zgrade: temeljni samci prikazuju se isprekidano s veličinom. Kliknite.

Klik na zgradu koja već ima temelj odabire ga, pa ga možete promijeniti umjesto da dodajete drugi.

## Promjena

Odaberite temelj (kliknite unutar zgrade s {{ui:Temelj}} ili kliknite bilo koji njegov dio u 3D prikazu ili stablu modela) i promijenite ga u **Svojstva**: vrstu, širinu i dubinu temeljnog samca, koliko je donja strana samca duboko, debljinu zida, koliko ispod poda zidovi staju, visinu podruma i debljinu ploče. Svaka promjena je jedan korak poništavanja.

Dimenzije označene **automatski** dolaze iz zidova: temeljni samci široki 12", 15" ili 23" za jednu, dvije ili tri etaže na ploči ili temeljnim zidovima, 18", 22" ili 27" preko puzajućeg prostora ili podruma, te 4" širi ispod zidova od zidarije ili betona. Upišite veličinu da postavite vlastitu; upišite `0` da se vratite na automatski.

:::warning
Automatske dimenzije su označene zadane vrijednosti za tipične lagane kuće, a ne inženjerski proračun. Projektant ili inženjer provjerava temeljne samce, dubine i zidove za tlo, dubinu smrzavanja i opterećenja.
:::

## Što se sprema

Temelj se sprema kao IFC sklop elemenata („Foundation”) sastavljen od temeljnog samca (ili rubnog zadebljanja ploče), temeljnog zida i ploče, prema potrebi vrste, svi od betona, svaki sa svojim količinama: duljinama, širinama, visinama, površinama i volumenima, spremnima za predmjer.

## Dobro je znati

- Pomaknite, dodajte ili izbrišite zidove i temelj ispod njih se ponovno izrađuje; nacrtajte zidove na razini iznad i temeljni samci ispod se proširuju za dodatnu etažu.
- {{key:Delete}} uklanja odabrani temelj sa svim njegovim dijelovima.
- Uz teren mjesta u modelu (vidi [Tlo lokacije, građevinska podloga i popločenje](topic:terrain)), temeljni zidovi i samci puzajućeg prostora spuštaju se s njim u koracima od 8".
- Temeljni samci ispod unutarnjih zidova još nisu izrađeni.
