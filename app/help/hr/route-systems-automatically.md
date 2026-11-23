---
title: Automatsko vođenje kanala, odvoda, vodovoda i rashladnih cijevi
summary: U provjeri sudara BimCraft pronalazi put oko otvorenog modela za kanale, odvodnju gravitacijom, hladnu i toplu vodu te parovne i višestruke rashladne cijevi, i crta dionice sa spojnicama u jednom koraku poništavanja. Pomoć pri crtanju: dimenzije, nagibi i provjere dolaze iz tablica u programu i brojeva koje upišete; ništa ovdje ne govori da projekt zadovoljava propis.
keywords: automatsko vođenje, autoroute, vođenje kanala, vođenje cijevi, odvodnja, sanitarna, gravitacija, stup, odzračnik, sifon, voda, topla voda, povratna petlja, recirkulacija, rashladno sredstvo, split, multi-split, VRF, ekvivalentna duljina, komplet grane, wye
from: 5841d513
---

## Što ćete raditi

Pustite BimCraft da izradi mrežu dionica između priključaka koji već stoje u modelu, oko zidova i greda, a zatim je provjerite prema brojevima koje vidite.

## Koraci

1. Otvorite model i provjeru sudara. Pod **Automatsko vođenje kanala** odaberite ventilacijsku jedinicu i njezine priključke, ili pod **Automatsko vođenje ostalih sustava** odaberite sustav.
2. **Sanitarna odvodnja gravitacijom.** Upišite položaj odvoda i, ako ih imate, položaje stupova. Označite **Vodi svaku etažu odjednom** da uzmete svaku etažu s instalacijskim elementima: odvodi svake etaže spajaju se na stup na svojoj razini, a stup ide od iznad najviše slavine do svog podnožja. Pritisnite {{ui:Vodi}}.
3. **Sifon do odzračnika.** Panel navodi udaljenost od svakog sifona do njegova odzračnika. Upišite najveću koju vaš propis dopušta u **Najveća udaljenost od sifona do odzračnika**; svaki instalacijski element koji je premašuje navodi se kao neizveden, s milimetrima preko. Označite **Odzračivanje kroz stup** kad instalacijski elementi nemaju vlastiti odzračni nastavak: udaljenost se tada mjeri do stupa. BimCraft ne donosi tablicu propisa za ovo: broj upisujete vi.
4. **Hladna i topla voda.** Odaberite izvor, upišite tlak na izvoru i tlak koji trebate na instalacijskom elementu. Označite **Topla voda**, odaberite toplu priključnicu grijača i označite **Povratna petlja** da završite povratni vod na priključku **hot-return** grijača ili na bilo kojem drugom priključku koji odaberete (taj završava 150 mm kraće, otvoren, da ga vi spojite).
5. **Split, multi-split i VRF.** Odaberite vanjsku jedinicu, označite unutarnje jedinice i upišite kapacitet svake. Upišite ograničenja iz podataka proizvođača. Upišite **ekvivalentnu duljinu** koljena i kompleta grane (vrijednosti proizvođača), pa se najduža i ukupna duljina provjeravaju prema ekvivalentnim duljinama.
6. Pritisnite {{ui:Vodi}}. Panel kaže koliko je dionica nacrtao i što nije mogao učiniti i zašto. {{ui:Poništi}} vraća sve u jednom koraku.

## Što biste trebali vidjeti

Cijevi s koljenima, T-komadima i reducirima; odvodi koji padaju barem za najmanji nagib za svoju veličinu; odzračni nastavci kod instalacijskih elemenata; rashladni vodovi kao par tekućine i plina koji na svakom zavoju skreće na isti način, s označenim kompletom grane tamo gdje grana izlazi iz magistrale.

## Dobro je znati

- Gdje odvod spaja drugi odvod, model crta T-komad. Plan naziva ta mjesta spojevima pod 45 stupnjeva (wye) da možete promijeniti spojnicu.
- Topla voda koristi vlastiti topli priključak instalacijskog elementa kad ga njegova obitelj ima, a priključak 100 mm pored hladnog kad ga nema.
- Rashladni vodovi počinju između dva priključka svake jedinice. Kad su dva priključka jedinice previše blizu za zavoj, par ostaje centriran između njih.
- Vodovodna mreža koristi krivulju potrošnje i brojeve trenja prikazane u izračunima; zamijenite ih vrijednostima svog propisa prije nego se oslonite na tlakove.
- Velike kuće mogu trajati pola minute ili duže, uglavnom zbog tople mreže.
- Ovo je pomoć pri crtanju. Kvalificirana osoba provjerava dimenzije, nagibe, odzračivanje i tlakove prema propisu koji vrijedi.

## Dalje

[Provjera sudara](topic:clash-check) · [Provjera cijevi i kanala u odnosu na konstrukciju](topic:mep-against-structure) · [Spojevi između cijevi i opreme](topic:mep-connections)
