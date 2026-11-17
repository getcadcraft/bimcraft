---
title: Živi prikaz
summary: Panel pored modela koji ga prikazuje u prikazu u realnom vremenu, sa suncem, senkama i odbijenom svetlošću, i koji prati svaku vašu promenu. Prošetajte kroz njega i podesite doba dana i mesec.
keywords: živi prikaz, realno vreme, realtime, renderovanje u realnom vremenu, šetnja, prolazak, prvo lice, prezentacija, klijent, drugi ekran, drugi prozor, monitor, doba dana, sunce, sezona, mesec, senke, ambijentalna okluzija, refleksije, odbijena svetlost, globalno osvetljenje, webgpu, webgl
from: ea5c02bf
---

Živi prikaz prikazuje model u prikazu u realnom vremenu: nebo i sunce prema mestu i datumu vaše lokacije, senke od sunca, boje i materijale koje ste dali elementima, svetiljke i svetlost odbijenu od zidova i podova. Prati šta radite: okrenete 3D prikaz i on se okreće, promenite model i pokazuje promenu malo kasnije. Ništa se ne otprema.

On crta istu scenu, boje, svetiljke i sunce kao [Renderuj sliku](topic:render). Za gotovu sliku koristite to.

## Otvaranje

1. Otvorite model i izaberite {{ui:Živi prikaz}} na traci sa alatkama. Panel se otvara preko aplikacije, dole desno.
2. Prevucite njegovu naslovnu traku da ga pomerite, a povucite ugao da ga uvećate.
3. {{ui:Živi prikaz u novom prozoru}} (dugme pored njega) ili {{ui:Novi prozor}} u panelu premešta ga u sopstveni prozor, za drugi ekran. Ako pregledač blokira iskačuće prozore, otvara se kao panel.
4. {{ui:Zatvori}} ga zatvara.

## Kontrole

| Kontrola | Šta radi |
|---|---|
| {{ui:Prati pogled}} | Uključeno: živi prikaz gleda tamo gde gleda 3D prikaz. Šetnja ga isključuje |
| {{ui:Šetnja}} | Šetnja kroz model (dole) |
| {{ui:Gravitacija}} | Dok šetate: stojite na podovima i penjete se stepenicama. Isključeno: letite |
| {{ui:Vreme}} | Sat u danu. Sunce se pomera dok prevlačite |
| {{ui:Mesec}} | Mesec, da vidite sunce zimi i leti |
| {{ui:Kvalitet}} | {{ui:Za ovaj računar}}, ili {{ui:Niski}}, {{ui:Srednji}} ili {{ui:Visok}} |

Linija na dnu kaže šta crta prikaz (WebGPU ili WebGL 2), kvalitet i odbijenu svetlost.

## Šetnja kroz model

1. Okrenite 3D prikaz tamo gde želite da stojite i izaberite {{ui:Šetnja}}. Stojite na podu ispod tačke gledanja, visoki 1,6 m.
2. Kliknite živi prikaz, pa koristite {{key:W}} {{key:A}} {{key:S}} {{key:D}} ili strelice. Držite {{key:Shift}} da trčite. Prevucite da se osvrnete.
3. Uspon do 40 cm se savladava (stepenicama); sve što je više od toga je zid. Zidovi vas zaustavljaju, a vi kližete uz njih.
4. Sa isključenom {{ui:Gravitacija}} letite: {{key:E}} ide gore, {{key:Q}} dole.
5. {{key:Esc}} prekida šetnju.

## Odbijena svetlost

Svetlost koja se od zida obasjanog suncem odbija na pod, i tamnija unutrašnjost prostorije, računaju se u pozadini na svakom procesorskom jezgru. Dok radi, donja linija kaže {{ui:Odbijena svetlost: 40 %}}; kada je gotovo, prikaz je prihvata. Posle promene počinje ponovo.

:::note
Ovo je aproksimacija za živi prikaz, a ne renderovana slika: sitni detalji između tačaka dobijaju odbijenu svetlost obližnjih tačaka.
:::

:::note
Pregledači se razlikuju. Gde pregledač ima WebGPU, živi prikaz ga koristi; drugde koristi WebGL 2 i izgleda isto. Ako nema nijednog, panel to kaže.
:::
