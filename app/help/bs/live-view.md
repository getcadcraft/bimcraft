---
title: Živi pregled
summary: Panel pored modela koji ga prikazuje u izgledu u stvarnom vremenu, sa suncem, sjenkama i odbijenom svjetlošću, i prati svaku vašu promjenu. Prošetajte kroz njega i postavite doba dana i mjesec.
keywords: živi pregled, stvarno vrijeme, realtime, render u stvarnom vremenu, šetnja, prolazak kroz, prvo lice, prezentacija, klijent, drugi ekran, drugi prozor, monitor, doba dana, sunce, sezona, mjesec, sjenke, ambijentalna okluzija, refleksije, odbijena svjetlost, globalno osvjetljenje, webgpu, webgl
from: ea5c02bf
---

Živi pregled prikazuje model u izgledu u stvarnom vremenu: nebo i sunce s mjesta i datuma vašeg lokaliteta, sunčeve sjenke, boje i materijale koje ste dodijelili elementima, svjetiljke i svjetlost odbijenu od zidova i podova. Prati šta radite: okrenete 3D pogled i on se okreće, promijenite model i on pokazuje promjenu nakon trenutka. Ništa se ne šalje na server.

Crta istu scenu, boje, svjetiljke i sunce kao [Renderuj sliku](topic:render). Za gotovu sliku koristite to.

## Otvorite ga

1. Otvorite model i izaberite {{ui:Živi pregled}} na alatnoj traci. Panel se otvara preko aplikacije, dolje desno.
2. Prevucite naslovnu traku da ga pomjerite, a povucite ugao da ga uvećate.
3. {{ui:Živi pregled u novom prozoru}} (dugme pored njega) ili {{ui:Novi prozor}} u panelu premješta ga u zaseban prozor, za drugi ekran. Ako pretraživač blokira iskačuće prozore, otvara se kao panel.
4. {{ui:Zatvori}} ga zatvara.

## Kontrole

| Kontrola | Šta radi |
|---|---|
| {{ui:Prati pogled}} | Uključeno: živi pregled gleda tamo gdje gleda 3D pogled. Šetnja ga isključuje |
| {{ui:Šetnja}} | Šetnja kroz model (dolje) |
| {{ui:Gravitacija}} | Dok šetate: stojite na podovima i penjete se stepenicama. Isključeno: letite |
| {{ui:Vrijeme}} | Sat u danu. Sunce se pomjera dok vučete |
| {{ui:Mjesec}} | Mjesec, da vidite sunce zimi i ljeti |
| {{ui:Kvalitet}} | {{ui:Za ovaj računar}}, ili {{ui:Nizak}}, {{ui:Srednji}} ili {{ui:Visok}} |

Red na dnu kaže šta crta pogled (WebGPU ili WebGL 2), kvalitet i odbijenu svjetlost.

## Šetnja kroz model

1. Okrenite 3D pogled prema mjestu na kojem želite stajati i izaberite {{ui:Šetnja}}. Stojite na podu ispod očne tačke pogleda, visine 1.6 m.
2. Kliknite živi pregled, pa koristite {{key:W}} {{key:A}} {{key:S}} {{key:D}} ili strelice. Držite {{key:Shift}} za trčanje. Prevucite da se osvrnete.
3. Stepenice do 40 cm se penju; sve što je više je zid. Zidovi vas zaustavljaju, a vi klizite uz njih.
4. Kad je {{ui:Gravitacija}} isključena, letite: {{key:E}} ide gore, {{key:Q}} dolje.
5. {{key:Esc}} prekida šetnju.

## Odbijena svjetlost

Svjetlost koja se odbija od zida osunčanog suncem na pod, kao i tamnija unutrašnjost prostorije, računa se u pozadini na svakom procesorskom jezgru. Dok radi, donji red kaže {{ui:Odbijena svjetlost: 40 %}}; kada je spremna, pogled je preuzima. Nakon promjene računanje počinje ponovo.

:::note
Ovo je aproksimacija za živi pregled, a ne renderovana slika: sitni detalji između tačaka dobijaju odbijenu svjetlost obližnjih tačaka.
:::

:::note
Pretraživači se razlikuju. Gdje pretraživač ima WebGPU, živi pregled ga koristi; inače koristi WebGL 2 i izgleda isto. Ako nema ni jedno ni drugo, panel to kaže.
:::
