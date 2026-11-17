---
title: Zidovi iz skupa planova (PDF ili skeniranje)
summary: Pretvorite stranice PDF-a ili skenirane crteže u zidove, vrata i prozore, po jedan nivo za svaku stranicu, sa stranicom sačuvanom ispod svake osnove.
keywords: pdf, planovi, skup planova, skeniranje, skenirani crtež, tiff, prenos, zidovi iz pdf-a, zidovi iz skeniranja, nivoi, stranice, razmera, vrata, prozori, smer otvaranja, podprozornik, podloga
from: b70d9db7
---

## Šta ćete uraditi

Započnite model od planova koje imate na papiru: PDF (nacrtan kao linije ili kao skeniranje unutar PDF-a) ili skeniranje (PNG, JPEG, TIFF sa jednom ili više stranica). Svaka stranica postaje zidovi, vrata i prozori jednog nivoa.

## Koraci

1. Uključite {{ui:Crtanje}}. Izaberite {{ui:Verzija}} › {{ui:Iz crteža…}}, zatim {{ui:Izaberi crtež…}} i izaberite PDF ili skeniranje.
2. **Stranice i nivoi.** Svaka stranica je navedena sa onim što jeste (**linije**, ili **slika (prenesena)**) i nivoom na koji ide: jedan od nivoa koje imate, **novi nivo iznad ostalih**, ili **izostavi ovu stranicu**. Stranice se usklađuju sa vašim nivoima redom; bilo koju od njih promenite.
3. **Razmera.** Za PDF, kažite kako je nacrtan (**1 : 100**, **1 : 50**…). Za sve ostalo, ili kad ne znate, izaberite **iz rastojanja koje znam**: kliknite dva kraja kote ili skale na pregledu, pa ukucajte stvarno rastojanje. Sve stranice koriste jednu razmeru.
4. Izaberite **tip zida** i **visinu novog nivoa**. Ostavite štiklirano **Zadrži svaku stranicu ispod osnove njenog nivoa** da vidite svaku stranicu kao tanke linije ispod njene osnove.
5. Linija ispod izbora kaže koliko će zidova, vrata i prozora napraviti, i na koliko nivoa. Kliknite {{ui:Napravi ih}}.

## Kako čita stranicu

- **Zidovi** nastaju iz parova paralelnih linija na rastojanju do 600 mm (dve strane zida); zid je debeo koliko je razmak. Šrafura i natpisi se izostavljaju.
- **Vrata i prozori.** Prekid u zidu (500 do 2600 mm) sa nacrtanim lukom otvaranja pored njega je vrata, okačena na jednom kraju prekida i otvaraju se na stranu luka. Prekid ili zid sa linijama podprozornika u njemu je prozor. Prekid bez ijednog od ta dva je vrata do 1300 mm, a iznad toga prozor.
- **Skeniranje** se prvo ispravlja ako je skenirano iskrivljeno (dijalog to kaže), pretvara u crno-belo, čisti od mrlja i prenosi; **stranica PDF-a koja je slika** prvo se crta, pa se obrađuje na isti način. Prenos nalazi centar svake linije i uklapa prave linije i lukove u njega; ne koristi mrežu ni obučeni model.
- **Prostorije** se prate same od zatvorenih petlji koje zidovi prave. Kad PDF ima tekst, prostorija dobija ime iz natpisa unutar nje (najvećeg; kota, razmera ili broj lista nije ime). Skeniranje nema tekst, pa njegove prostorije zadržavaju imena koja im program dodeli.
- **Sve pročitano sa stranice je označeno kao neproverено**: svaki zid, vrata, prozor i prostorija ima isprekidan okvir i „?” u osnovi dok ga ne proverite. Izaberite ono što ste proverili i koristite {{ui:Alatke}} › {{ui:Označi kao proveren}}. Videti [Označite elemente kao proverene ili proverene na terenu](topic:verification).

## Šta treba da vidite

- Zidovi, vrata, prozori i prostorije na svakom nivou, i novi nivoi, sve kao jedan korak: {{key:Mod+Z}} vraća sve.
- Svaka stranica kao tanke linije ispod osnove svog nivoa, navedena pod {{ui:Verzija}} › {{ui:Iz crteža…}} sa {{ui:Ukloni}}.

:::note
Ovo je ono što su linije dale, do tačnosti stranice. Skeniranje može izgubiti slab zid, spojiti dva zida koji leže vrlo blizu, ili naći zid u mrlji; luk otvaranja koji crtež ne prikazuje pretvara prekid u običnu vrata. Proverite svaki nivo prema stranici pre nego što mu se oslonite, i popravite ono što nije u redu alatima {{ui:Zid}}, {{ui:Vrata}} i {{ui:Prozor}}.
:::
