---
title: Stene in vrata iz skeniranja s telefonom ali laserjem
summary: Spremenite skeniranje prostora v predlagane stene, vrata in prostore, ki jih sprejmete enega za drugim.
keywords: skeniranje, skeniranje s telefonom, lidar, oblak točk, stene iz skeniranja, vrata iz skeniranja, skeniranje prostora, ply, e57, las, obj, predlagaj
from: a4ef0f10
---

## Kaj naredi

Ko je skeniranje odprto (oblak točk, kot so PLY, E57 ali LAS, ali mreža, kot je OBJ), BimCraft prereže skeniranje na višini tlorisa, ga poravna pravokotno na stavbo in išče dolge, tanke nize točk: to so stene. Reža, široka kot vrata, med dvema nizoma na isti črti postane ena stena z vrati v njej. Stene, ki zapirajo prostor, naredijo prostor.

Nič ni narisano, dokler ga ne sprejmete. Stene in vrata pridejo kot seznam predlogov (so spremembe v načinu Predlagaj): obdržite pravilne, zavrnite ostale, vse, kar obdržite, pa se nariše v enem koraku razveljavitve. Prostori se pojavijo sami.

## Kaj preveri

Stene, ki se ne zaprejo, nizi sten, krajši od debeline stene, in reža velikosti vrat brez stene okoli nje so prijavljeni kot težave s položajem, da lahko na tem mestu pogledate skeniranje.

## Neoverjeno, dokler ni preverjeno

Stene, vrata in prostori, ki jih sprejmete iz skeniranja, so označeni kot neoverjeni: črtkan okvir in "?" v tlorisu, dokler jih ne označite kot preverjene. Glejte [Označevanje elementov kot preverjenih ali potrjenih na terenu](topic:verification).

## Česa ne zmore

- Najde stene, ki tečejo v dveh pravokotnih smereh. Diagonalna ali ukrivljena stena ni najdena.
- Ena etaža naenkrat. Okna niso najdena (okno je le reža, če je rez na višini police).
- Preizkušeno je bilo na ustvarjenih skeniranjih prostorov in mrežah, še ne na skeniranjih z resničnega telefona. Kako dobro deluje na resničnem skeniranju (zdrs na dolgi poti, pohištvo ob stenah, steklo, odprta vrata) ni znano; prilagajanje na resničnih skeniranjih je naslednji korak. Vsak predlog preverite s skeniranjem, preden ga sprejmete.
