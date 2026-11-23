---
title: Automatski provedi zračne kanale, odvode, vodu i vodove rashladnog sredstva
summary: U provjeri kolizija, BimCraft pronalazi put kroz otvoreni model za zračne kanale, odvodnju gravitacijom, hladnu i toplu vodu te parove vodova rashladnog sredstva za split i višestruke sisteme, i crta vodove sa fitinzima u jednom koraku poništavanja. Pomoćno sredstvo za crtanje: veličine, nagibi i provjere dolaze iz tabela u programu i brojeva koje upišete; ništa ovdje ne tvrdi da dizajn zadovoljava propis.
keywords: automatsko provođenje, provedi kanale, provedi cijevi, odvodnja, sanitarno, gravitacija, vertikala, ventilacija, sifon, voda, topla voda, povratna petlja, rashladno sredstvo, split, višestruki split, VRF, ekvivalentna dužina, komplet za granu, Y-spoj
from: 5841d513
---

## Šta ćete raditi

Neka BimCraft izradi mrežu vodova između priključaka koji već stoje u modelu, zaobilazeći zidove i grede, a zatim je provjerite preko brojeva koje možete vidjeti.

## Koraci

1. Otvorite model i provjeru kolizija. Pod **Automatski provedi zračne kanale** izaberite ventilacijsku jedinicu i njene izlaze, ili pod **Automatski provedi ostale sisteme** izaberite sistem.
2. **Sanitarna odvodnja gravitacijom.** Upišite položaj odvoda i, ako ih imate, položaje vertikala. Označite **Provedi svaki sprat odjednom** da uzmete svaki sprat sa sanitarnim uređajima: odvodi svakog sprata spajaju se na vertikalu na svom nivou, a vertikala ide od iznad najviše slavine do svog podnožja. Pritisnite {{ui:Route}}.
3. **Sifon do ventila.** Panel navodi razdaljinu od svakog sifona do njegovog ventila. Upišite najveću koju vaš propis dozvoljava u **Najveća razdaljina od sifona do ventila**; svaki uređaj preko toga navodi se kao nije urađen, sa milimetrima viška. Označite **Ventilacija kroz vertikalu** kada uređaji nemaju vlastiti ventilacioni priključak: razdaljina se tada mjeri do vertikale. BimCraft ne isporučuje tabelu propisa za ovo: vi upisujete broj.
4. **Hladna i topla voda.** Izaberite izvor, upišite pritisak na izvoru i pritisak koji vam treba na uređaju. Označite **Topla voda**, izaberite topli priključak grijača, i označite **Povratna petlja** da završite povratni vod na priključku grijača **topli povrat**, ili na bilo kojem drugom priključku koji izaberete (taj završava 150 mm kratko, otvoren, da ga vi spojite).
5. **Podjela, višestruka podjela i VRF.** Izaberite vanjsku jedinicu, označite unutrašnje jedinice i upišite kapacitet svake. Upišite granice iz podataka proizvođača. Upišite **ekvivalentnu dužinu** koljena i kompleta za granu (vrijednosti proizvođača), pa se najduža i ukupna dužina provjeravaju po ekvivalentnim dužinama.
6. Pritisnite {{ui:Route}}. Panel kaže koliko je vodova nacrtano i šta nije moglo da se uradi i zašto. {{ui:Undo}} vraća sve u jednom koraku.

## Šta treba da vidite

Cijevi sa kolenima, T-komadima i redukcijama; odvodi koji padaju barem najmanjim nagibom za svoju veličinu; ventilacioni priključci na uređajima; vodovi rashladnog sredstva kao par tečne i gasne strane koji se na svakom uglu okreće na isti način, sa kompletom za granu označenim tamo gdje grana izlazi iz magistrale.

## Dobro je znati

- Tamo gdje se odvod spaja s drugim odvodom model crta T-komad. Osnova imenuje ta mjesta kao 45-stepenske Y-spojeve da biste mogli promijeniti fitinge.
- Topla voda koristi topli priključak samog uređaja kada njegova porodica ga ima, a priključak 100 mm pored hladnog kada nema.
- Vodovi rashladnog sredstva počinju između dva priključka svake jedinice. Kada su dva priključka jedne jedinice previše blizu za koljeno, par ostaje centriran između njih.
- Mreža vode koristi krivu potrošnje i vrijednosti trenja prikazane u proračunima; zamijenite ih vrijednostima vašeg propisa prije nego se oslonite na pritiske.
- Velike kuće mogu trajati pola minute ili duže, uglavnom zbog tople mreže.
- Ovo je pomoćno sredstvo za crtanje. Kvalifikovana osoba provjerava veličine, nagibe, ventilaciju i pritiske prema propisu koji se primjenjuje.

## Dalje

[Provjera kolizija](topic:clash-check) · [Provjera cijevi i kanala u odnosu na konstrukciju](topic:mep-against-structure) · [Veze između cijevi i opreme](topic:mep-connections)
