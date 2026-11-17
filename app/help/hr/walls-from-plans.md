---
title: Zidovi iz skupa tlocrta (PDF ili skeniranje)
summary: Pretvorite stranice PDF-a ili skenirani crtež u zidove, vrata i prozore, jedna razina za svaku stranicu, uz stranicu zadržanu ispod svakog tlocrta.
keywords: pdf, tlocrti, skup tlocrta, skeniranje, skenirani crtež, tiff, ucrtavanje, zidovi iz PDF-a, zidovi iz skeniranja, razine, stranice, mjerilo, vrata, prozori, zamah, podprozornik, podloga
from: b70d9db7
---

## Što ćete učiniti

Pokrenite model iz tlocrta koje imate na papiru: PDF (nacrtan kao linije, ili skeniranje unutar PDF-a) ili skeniranje (PNG, JPEG, TIFF s jednom ili više stranica). Svaka stranica postaje zidovi, vrata i prozori jedne razine.

## Koraci

1. Uključite {{ui:Crtanje}}. Odaberite {{ui:Izgradnja}} › {{ui:Iz crteža…}}, zatim {{ui:Odaberi crtež…}} i odaberite PDF ili skeniranje.
2. **Stranice i razine.** Svaka stranica je navedena s time što je (**linijski crtež** ili **slika (ucrtana)**) i razinom na koju ide: jedna od vaših razina, **nova razina iznad ostalih**, ili **izostavi ovu stranicu**. Stranice se redom usklađuju s vašim razinama; promijenite bilo koju.
3. **Mjerilo.** Za PDF recite kako je nacrtan (**1 : 100**, **1 : 50**…). Za sve ostalo, ili kad ne znate, odaberite **iz udaljenosti koju poznajem**: kliknite dva kraja kote ili mjerila na pregledu, zatim upišite stvarnu udaljenost. Sve stranice koriste jedno mjerilo.
4. Odaberite **vrstu zida** i **visinu nove razine**. Ostavite označeno **Zadrži svaku stranicu ispod tlocrta njezine razine** da vidite svaku stranicu kao tanke linije ispod njezina tlocrta.
5. Redak ispod izbora kaže koliko će zidova, vrata i prozora napraviti i na koliko razina. Kliknite {{ui:Izradi ih}}.

## Kako se čita stranica

- **Zidovi** nastaju iz parova paralelnih linija razmaknutih do 600 mm (dvije plohe zida); zid je debljine tog razmaka. Šrafura i natpisi se izostavljaju.
- **Vrata i prozori.** Otvor u zidu (500 do 2600 mm) uz koji je nacrtan zamah vrata je vrata, s šarnirom na jednom kraju otvora i otvaranjem na stranu zamaha. Otvor ili zid s linijama podprozornika u sebi je prozor. Otvor bez oboje je vrata do 1300 mm, a iznad toga prozor.
- **Skeniranje** se prvo ispravlja ako je skenirano iskrivljeno (dijaloški okvir to kaže), pretvara se u crno-bijelo, čisti od mrlja i ucrtava. **PDF stranica koja je slika** prvo se crta, a zatim se obrađuje na isti način. Ucrtavanje pronalazi središte svake crte i prilagođava joj ravne linije i lukove; ne koristi mrežu ni trenirani model.
- **Prostorije** slijede same iz zatvorenih petlji koje zidovi tvore. Kad PDF ima tekst, prostorija dobiva naziv iz natpisa unutar nje (najvećeg; kota, mjerilo ili broj lista nisu naziv). Skeniranje nema tekst, pa njegove prostorije zadržavaju nazive koje im program dodijeli.
- **Sve pročitano sa stranice označeno je kao neprovjereno**: svaki zid, vrata, prozor i prostorija imaju isprekidani okvir i „?“ na tlocrtu dok ih ne provjerite. Odaberite ono što ste provjerili i upotrijebite {{ui:Alati}} › {{ui:Označi kao provjereno}}. Vidi [Označavanje elemenata kao provjerenih ili provjerenih na terenu](topic:verification).

## Što biste trebali vidjeti

- Zidovi, vrata, prozori i prostorije na svakoj razini, i sve nove razine, kao jedan korak: {{key:Mod+Z}} sve vraća.
- Svaka stranica kao tanke linije ispod tlocrta svoje razine, navedena pod {{ui:Izgradnja}} › {{ui:Iz crteža…}} s {{ui:Ukloni}}.

:::note
Ovo je ono što su linije dale, prema točnosti stranice. Skeniranje može izgubiti slab zid, spojiti dva zida koji leže vrlo blizu jedan drugome ili pronaći zid u mrlji; zamah koji crtež ne prikazuje pretvara otvor u običnu vrata. Provjerite svaku razinu prema stranici prije nego se oslonite na nju, i ispravite što je krivo alatima {{ui:Zid}}, {{ui:Vrata}} i {{ui:Prozor}}.
:::
