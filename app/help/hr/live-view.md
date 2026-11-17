---
title: Pogled uživo
summary: Panel uz model koji ga prikazuje u izgledu u stvarnom vremenu, sa suncem, sjenama i odbijenim svjetlom, i prati svaku vašu promjenu; šetajte kroz njega i postavite doba dana i mjesec.
keywords: pogled uživo, stvarno vrijeme, realtime, render u stvarnom vremenu, šetnja, hodanje, prvo lice, prezentacija, klijent, drugi zaslon, drugi prozor, monitor, doba dana, sunce, godišnje doba, mjesec, sjene, ambijentalna okluzija, refleksije, odbijeno svjetlo, globalno osvjetljenje, webgpu, webgl
from: ea5c02bf
---

Pogled uživo prikazuje model u izgledu u stvarnom vremenu: nebo i sunce s položaja i datuma vaše lokacije, sunčane sjene, boje i materijale koje ste dali elementima, svjetiljke te svjetlo odbijeno od zidova i podova. Prati što radite: okrenete 3D prikaz, i on se okreće; promijenite model, i promjenu prikazuje trenutak poslije. Ništa se ne učitava na poslužitelj.

On crta istu scenu, boje, svjetiljke i sunce kao [Renderiraj sliku](topic:render); za gotovu sliku koristite to.

## Otvorite ga

1. Otvorite model i odaberite {{ui:Pogled uživo}} u alatnoj traci. Panel se otvara preko aplikacije, dolje desno.
2. Povucite njegovu naslovnu traku da ga pomaknete, a za promjenu veličine povucite njegov kut.
3. {{ui:Pogled uživo u novom prozoru}} (gumb pored njega) ili {{ui:Novi prozor}} u panelu premješta ga u vlastiti prozor, za drugi zaslon. Ako vaš preglednik blokira skočne prozore, otvara se kao panel.
4. {{ui:Zatvori}} ga zatvara.

## Upravljanje

| Upravljanje | Što radi |
|---|---|
| {{ui:Prati pogled}} | Uključeno: pogled uživo gleda kamo gleda 3D prikaz. Hodanje ga isključuje |
| {{ui:Šetnja}} | Šetnja kroz model (u nastavku) |
| {{ui:Gravitacija}} | Dok hodate: stojite na podovima i penjete se stubištem. Isključeno: letite |
| {{ui:Vrijeme}} | Sat u danu. Sunce se pomiče dok povlačite |
| {{ui:Mjesec}} | Mjesec, da vidite sunce zimi i ljeti |
| {{ui:Kvaliteta}} | {{ui:Za ovo računalo}}, ili {{ui:Niska}}, {{ui:Srednja}} ili {{ui:Visoka}} |

Redak pri dnu govori što crta prikaz (WebGPU ili WebGL 2), kvalitetu i odbijeno svjetlo.

## Šetnja kroz model

1. Okrenite 3D prikaz prema mjestu na kojem želite stajati i odaberite {{ui:Šetnja}}. Stojite na podu ispod očišta prikaza, visine 1.6 m.
2. Kliknite pogled uživo, zatim koristite {{key:W}} {{key:A}} {{key:S}} {{key:D}} ili tipke sa strelicama. Držite {{key:Shift}} za trčanje. Povucite za gledanje oko sebe.
3. Stepenice do 40 cm se penju (stubište); sve više je zid. Zidovi vas zaustavljaju i klizite uz njih.
4. S isključenom {{ui:Gravitacijom}} letite: {{key:E}} ide gore, {{key:Q}} dolje.
5. {{key:Esc}} zaustavlja šetnju.

## Odbijeno svjetlo

Svjetlo koje se s osunčanog zida odbija na pod, kao i tamnija unutrašnjost prostorije, izračunava se u pozadini na svakoj jezgri procesora. Dok radi, donji redak piše {{ui:Odbijeno svjetlo: 40 %}}; kad je gotovo, prikaz ga preuzima. Nakon promjene počinje ispočetka.

:::note
Ovo je aproksimacija za pogled uživo, a ne izrađena slika: sitni detalji između točaka dobivaju odbijeno svjetlo susjednih točaka.
:::

:::note
Preglednici se razlikuju. Gdje preglednik ima WebGPU, pogled uživo ga koristi; inače koristi WebGL 2 i izgleda isto. Bez oboje, panel to kaže.
:::
