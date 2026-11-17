---
title: Zidovi iz skupa planova (PDF ili sken)
summary: Pretvorite stranice PDF-a ili skenirane crteže u zidove, vrata i prozore, po jedan nivo za svaku stranicu, uz stranicu sačuvanu ispod svake osnove.
keywords: pdf, planovi, skup planova, sken, skenirani crtež, tiff, obrada, zidovi iz pdf-a, zidovi iz skena, nivoi, stranice, razmjera, vrata, prozori, zamah, prag, podloga
from: b70d9db7
---

## Šta ćete uraditi

Započnite model od planova koje imate na papiru: PDF (nacrtan linijama, ili sken unutar PDF-a) ili sken (PNG, JPEG, TIFF s jednom ili više stranica). Svaka stranica postaje zidovi, vrata i prozori jednog nivoa.

## Koraci

1. Uključite {{ui:Crtanje}}. Izaberite {{ui:Verzija}} › {{ui:Iz crteža…}}, zatim {{ui:Odaberi crtež…}} i izaberite PDF ili sken.
2. **Stranice i nivoi.** Svaka stranica je navedena s tim što je (**linijski crtež**, ili **slika (obrađena)**) i nivoom na koji ide: jednim od postojećih nivoa, **novim nivoom iznad ostalih**, ili **izostavi ovu stranicu**. Stranice se uparuju s vašim nivoima redom; bilo koju možete promijeniti.
3. **Razmjera.** Za PDF, navedite kako je nacrtan (**1 : 100**, **1 : 50**…). Za sve ostalo, ili kad ne znate, izaberite **iz razmaka koji poznajem**: kliknite dva kraja kote ili skale na pregledu, zatim upišite stvarnu udaljenost. Sve stranice koriste jednu razmjeru.
4. Izaberite **tip zida** i **visinu novog nivoa**. Ostavite označeno **Zadrži svaku stranicu ispod osnove njenog nivoa** da vidite svaku stranicu kao tanke linije ispod njene osnove.
5. Linija ispod izbora kaže koliko će zidova, vrata i prozora napraviti i na koliko nivoa. Kliknite {{ui:Napravi ih}}.

## Kako čita stranicu

- **Zidovi** nastaju iz parova paralelnih linija do 600 mm razmaka (dvije strane zida); zid je debljine tog razmaka. Šrafura i natpisi se izostavljaju.
- **Vrata i prozori.** Prekid u zidu (500 do 2600 mm) s nacrtanim zamahom vrata pored njega je vrata, sa šarkom na jednom kraju prekida i otvaranjem na stranu zamaha. Prekid ili zid s linijama praga u sebi je prozor. Prekid bez oboje je vrata do 1300 mm, a iznad toga prozor.
- **Sken** se prvo ispravlja ako je skeniran iskrivljen (dijalog to kaže), pretvara se u crno-bijelo, čisti od mrlja i obrađuje; **stranica PDF-a koja je slika** prvo se crta, zatim se obrađuje na isti način. Obrada nalazi središte svake linije i uklapa u nju prave linije i lukove; ne koristi mrežu niti obučeni model.
- **Prostorije** se prate same od zatvorenih petlji koje zidovi čine. Kad PDF ima tekst, prostorija dobija naziv iz natpisa unutar nje (najvećeg; kota, razmjera ili broj lista nije naziv). Sken nema tekst, pa njegove prostorije zadržavaju nazive koje im program dâ.
- **Sve što je pročitano sa stranice označeno je kao neprovjereno**: svaki zid, vrata, prozor i prostorija imaju isprekidani okvir i „?“ na osnovi dok ih ne provjerite. Izaberite ono što ste provjerili i koristite {{ui:Alati}} › {{ui:Označi kao provjereno}}. Vidi [Označite elemente kao provjerene ili provjerene na terenu](topic:verification).

## Šta treba da vidite

- Zidovi, vrata, prozori i prostorije na svakom nivou, i novi nivoi, kao jedan korak: {{key:Mod+Z}} sve vraća.
- Svaka stranica kao tanke linije ispod osnove njenog nivoa, navedena pod {{ui:Verzija}} › {{ui:Iz crteža…}} s {{ui:Ukloni}}.

:::note
Ovo je ono što su linije dale, s tačnošću stranice. Sken može izgubiti slab zid, spojiti dva zida koji leže vrlo blizu, ili naći zid u mrlji; zamah koji crtež ne prikazuje pretvara prekid u običnu vrata. Provjerite svaki nivo prema stranici prije nego se oslonite na njega, i popravite što nije tačno alatima {{ui:Zid}}, {{ui:Vrata}} i {{ui:Prozor}}.
:::
