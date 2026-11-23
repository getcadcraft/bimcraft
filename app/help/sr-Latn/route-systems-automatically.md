---
title: Automatski vodi kanale, odvode, vodu i cevi rashladnog sredstva
summary: U proveri sudara BimCraft nalazi put kroz otvoreni model za kanale, odvod gravitacijom, hladnu i toplu vodu i parovodne cevi split i multi-split sistema, i crta vodove sa fitinzima u jednom koraku opozivanja. Pomoćno sredstvo za crtanje: dimenzije, nagibi i provere dolaze iz tabela u programu i brojeva koje unosite; ništa ovde ne tvrdi da projekat zadovoljava propis.
keywords: automatsko vođenje, autoroute, vođenje kanala, vođenje cevi, odvod, kanalizacija, gravitacija, stub, ventilacija, sifon, voda, topla voda, povratna petlja, cirkulacija, rashladno sredstvo, split, multi-split, VRF, ekvivalentna dužina, komplet grane, Y-komad
from: 5841d513
---

## Šta ćete raditi

Pustite BimCraft da rasporedi mrežu vodova između priključaka koji već stoje u modelu, oko zidova i greda, pa proverite rezultat prema brojevima koje vidite.

## Koraci

1. Otvorite model i proveru sudara. Pod **Automatski vodi kanale** izaberite jedinicu za obradu vazduha i njene terminale, ili pod **Automatski vodi ostale sisteme** izaberite sistem.
2. **Kanalizacija odvodom gravitacijom.** Unesite položaj izlaza i, ako ih imate, položaje stubova. Označite **Vodi svaki sprat odjednom** da uzmete svaki sprat koji ima instalacione elemente: odvodi svakog sprata spajaju se na stub na svom nivou, a stub ide od iznad najviše slavine do svog podnožja. Pritisnite {{ui:Vodi}}.
3. **Sifon do ventilacije.** Panel navodi razdaljinu od svakog sifona do njegove ventilacije. Unesite najveću koju vaš propis dozvoljava u **Najveća razdaljina od sifona do ventilacije**; svaki instalacioni element koji je prelazi navodi se kao neurađen, uz milimetre preko. Označite **Ventilacija kroz stub** kada instalacioni elementi nemaju sopstveni ventilacioni priključak: razdaljina se tada meri do stuba. BimCraft ne isporučuje tabelu propisa za ovo: vi unosite broj.
4. **Hladna i topla voda.** Izaberite izvor, unesite pritisak na izvoru i pritisak koji vam treba na instalacionom elementu. Označite **Topla voda**, izaberite topli priključak grejača i označite **Povratna petlja** da završite povratni vod na priključku **toplog povratka** grejača, ili na bilo kom drugom priključku koji izaberete (taj se završava 150 mm kraće, otvoren, da ga spojite).
5. **Split, multi-split i VRF.** Izaberite spoljnu jedinicu, označite unutrašnje jedinice i unesite kapacitet svake. Unesite ograničenja iz podataka vašeg proizvođača. Unesite **ekvivalentnu dužinu** kolena i kompleta grane (vrednosti proizvođača), pa se najduža i ukupna dužina proveravaju prema ekvivalentnim dužinama.
6. Pritisnite {{ui:Vodi}}. Panel kaže koliko je vodova nacrtao i šta nije mogao da uradi i zašto. {{ui:Opozovi}} vraća sve jednim korakom.

## Šta treba da vidite

Cevi sa kolenima, T-komadima i redukcijama; odvodi koji padaju bar za najmanji nagib za svoju veličinu; ventilacioni nastavci kod instalacionih elemenata; vodovi rashladnog sredstva kao par tečnosti i gasa koji skreće na isti način na svakom uglu, sa kompletom grane obeleženim tamo gde grana izlazi iz magistrale.

## Dobro je znati

- Gde se odvod spaja s drugim odvodom, model crta T-komad. Plan imenuje ta mesta kao Y-spojeve pod 45 stepeni da biste mogli da promenite fiting.
- Topla voda koristi sopstveni topli priključak instalacionog elementa kada ga njegova porodica ima, a priključak 100 mm pored hladnog kada ga nema.
- Vodovi rashladnog sredstva počinju između dva priključka svake jedinice. Kada su dva priključka jedinice previše blizu za koleno, par ostaje centriran između njih.
- Mreža vode koristi krivu potražnje i brojeve trenja prikazane u proračunima; zamenite ih brojevima vašeg propisa pre nego što se oslonite na pritiske.
- Velike kuće mogu da trebaju pola minuta ili više, uglavnom zbog tople mreže.
- Ovo je pomoćno sredstvo za crtanje. Kvalifikovano lice proverava dimenzije, nagibe, ventilaciju i pritiske prema propisu koji važi.

## Dalje

[Proveri sudare](topic:clash-check) · [Proveri cevi i kanale prema konstrukciji](topic:mep-against-structure) · [Veze između cevi i opreme](topic:mep-connections)
