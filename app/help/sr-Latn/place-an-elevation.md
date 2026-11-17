---
title: Postavi visinsku kotu i otvori njen prikaz
summary: Postavi oznaku visinske kote na osnovu sprata, usmeri je ka pogledu, zatim pronađi njen crtež u pregledaču projekta, uredi u njemu i stavi ga na list. Koraci za rasporede sa trakom i za klasičan raspored.
keywords: visinska kota, prikaz visinske kote, oznaka visinske kote, kota izgleda, postavi visinsku kotu, nova visinska kota, napravi visinsku kotu, spoljašnji izgled, bočni prikaz, prednji prikaz, prikaz sa tačke, gde je moja visinska kota, otvori visinsku kotu, visinska kota na listu, okreni visinsku kotu, preimenuj visinsku kotu, severni izgled, poređaj prikaze, podeli prikaz, osnova i 3D jedan pored drugog
from: a7cfd2b9
---

## Šta ćete uraditi

Napravite sopstveni izgled: crtež zgrade viđene sa tačke koju izaberete, gledano u smeru koji izaberete. Potrebna su dva klika na osnovi sprata. Crtež se zatim prikazuje zajedno sa ostalim izgledima zgrade.

:::note
Četiri strane već postoje. Svaka zgrada ima izglede Sever, Istok, Jug i Zapad u {{ui:Project browser}} pod {{ui:Elevations}} bez postavljanja bilo čega. Postavite sopstveni kada želite pogled sa neke druge tačke: upravno na zakošeno krilo, iz dvorišta ili na jedan zid unutar prostorije.
:::

## Gde je alat

- Rasporedi sa trakom: {{ui:View}} › **Kreiraj** › {{ui:Elevation}}.
- Klasičan raspored: uključite {{ui:Draw}}, zatim {{ui:Build}} › {{ui:Elevation}}.
- Bilo koji stil menija: komanda se zove Visinska kota; paleta komandi je pronalazi, a komandna linija prima ELEVATION.

## Koraci

1. Izaberi {{ui:Elevation}}. Visinska kota se postavlja na osnovu sprata, pa ako ste bili u 3D prikazu, BimCraft prikazuje osnovu sprata na kojem ste bili. Pokazivač kaže **Klikni mesto na kome visinska kota stoji**.
2. Klikni mesto sa kog se pogled uzima. Za spoljašnji izgled, klikni van zgrade, malo podalje od zida koji želite da vidite.
3. Pokazivač sada kaže **Klikni kako izgleda**. Pomeri se ka zgradi: strelica pokazuje pravac, a kratka linija preko prvog klika je ivica sa koje se pogled gleda. Klikni.
4. Na osnovi se pojavljuje krug sa brojem i pokazivačem. To je oznaka visinske kote. Prva je 1, sledeća 2.
5. Pritisni Esc za kraj ili nastavi i postavi još jednu.

Postavljanje oznake je jedan korak: {{key:Mod+Z}} je vraća.

## Otvori crtež

Osnova ostaje ispred vas posle drugog klika. Crtež se nalazi u {{ui:Project browser}}:

1. Otvori {{ui:Elevations}}. Vaša je navedena posle četiri strane kao **Visinska kota 1**.
2. Klikni dugme olovke {{ui:Edit in this view}} u njenom redu da vidite crtež i radite u njemu: pomerate zidove, vrata, prozore i nivoe, dodajete napomene i kote. Pogledajte [Uređivanje u izgledima i presecima](topic:edit-in-elevations).
3. Klikni sam red da otvorite set crteža ili dodajte prikaz na sopstveni list. Pogledajte [Prikazi i listovi](topic:views-and-sheets).

U klasičnom rasporedu panel pregledača projekta je u levom panelu dok je {{ui:Draw}} uključeno. U rasporedima sa trakom to je kartica {{ui:Project Browser}} pod Svojstva.

## Šta prikaz pokazuje

- Sve ispred oznake, dokle sega zgrada. Ništa iza nje.
- Nivoe, sa njihovim nazivima i visinama.
- Ako oznaka stoji unutar zgrade, sve u čemu stoji biva presečeno, kao što to čini presek. Za čist spoljašnji izgled, stanite napolje.

## Promena

Izaberite oznaku na osnovi (kliknite njen krug alatom {{ui:Select}}). Svojstva imaju:

- {{ui:Label}}: njen broj ili naziv po vašem izboru, do 8 znakova.
- {{ui:Flip the view}}: gledanje u suprotnom smeru sa istog mesta.
- {{ui:Look as far as}}: koliko daleko ispred oznake pogled seže. 0 prikazuje sve.

Pritisnite Delete da uklonite oznaku i njen crtež. Opozovi ih vraća.

:::tip
Da vidite osnovu i 3D prikaz istovremeno dok radite, koristite {{ui:View}} › **Prozori** › {{ui:Tile Views}} u rasporedima sa trakom, ili {{ui:Split}} u klasičnom rasporedu. Klik na karticu prikaza vraća na jedan prikaz.
:::

## Ograničenja

- Oznaka se još ne može prevući niti okrenuti na osnovi. Obrišite je i postavite ponovo, ili koristite {{ui:Flip the view}}.
- U listi prikaza koje možete dodati na list, vaš izgled je naveden zajedno sa presecima.
- Oznake vrata i prozora crtaju se na četiri bočna izgleda, ne na onom koji ste postavili.

## U IFC-u

Oznaka se u datoteci čuva kao IfcAnnotation pod nazivom "Elevation 1", sa tipom objekta "Elevation marker", u nivou na kojem je postavljena. Drugi program je prikazuje kao napomenu; sam crtež BimCraft pravi iz modela svaki put.
