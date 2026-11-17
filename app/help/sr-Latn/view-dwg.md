---
title: Pregled DWG ili DXF crteža
summary: Otvorite DWG ili DXF, krećite se po prostoru modela i listovima, čitajte koordinate i vidite šta još nije nacrtano.
keywords: dinamički blokovi, stanja vidljivosti, dwg, dxf, cad, crtež, 2d, pregled, prikaz, pomeranje, zumiranje, prostor modela, prostor papira, raspored, koordinate, otvori dwg
from: 4db3122a
---

## Šta ćete uraditi

Otvorite CAD crtež, vidite ga u 3D ili 2D, krećete se po njemu, prebacujete se između prostora modela i njegovih listova i čitate koordinate. BimCraft prikazuje DWG i DXF crteže; ne menja ih niti ih čuva. Da biste nešto promenili, kliknite {{ui:Uredi u CadCraft-u}} i crtež se otvara u CadCraft aplikaciji za izradu nacrta, u novom tabu.

## Koraci

1. Kliknite {{ui:Izaberi datoteku}} ili prevucite crtež na stranicu.
2. Izaberite `.dwg` ili `.dxf` datoteku.
3. Sačekajte dok statusna linija kaže „Čitam crtež…“. Veliki crteži traju nekoliko sekundi. Zatim kaže koliko je čitanje trajalo, „renderujem…“ dok se prva slika crta, i koliko je to trajalo.
4. Crtež se otvara u 3D, što je najbrže za prikaz velikog crteža (vidi [Pogledajte DWG ili DXF crtež u 3D](topic:dwg-in-3d)). Kliknite {{ui:Model}} za ravan 2D prikaz. Da crteže uvek otvara u 2D, postavite {{ui:Podešavanja}} › {{ui:BimCraft}} › **Crteži se otvaraju u** na {{ui:Model (2D)}}. Crtež bez ičega u prostoru modela, ili pregledač koji ne prikazuje 3D, otvara se u 2D.
5. Pogledajte kartice iznad crteža: prvo {{ui:Model}}, pa po jedna kartica za svaki list, redom kojim ih crtež ima.
6. Kliknite karticu lista da vidite taj list: papir, sa modelom prikazanim kroz njegove prozore pogleda.
7. Kliknite {{ui:Model}} da se vratite u prostor modela.
8. Pomerite pokazivač preko crteža i čitajte X i Y koordinate u uglu.

## Šta treba da vidite

- Crtež, uklopljen u prozor. Boje prate crtež; bele linije (boja 7) crtaju se bojom teme, a svetle boje se na svetloj temi potamne da ostanu čitljive.
- Panel {{ui:Crtež}} sa leve strane: datoteka, veličina, format (na primer „AutoCAD 2018 (AC1032)“), jedinice, brojevi entiteta i slojeva, broj listova, i povezani crteži i oprema kada ih ima.
- Spisak {{ui:Slojevi}} sa leve strane.
- Sa desne strane: kako se kretati, povezani crteži i slike, i **Još nije nacrtano**.

## Kretanje

:::mouse
| Za | Uradite ovo |
|---|---|
| Pomeranje | Prevucite bilo kojim dugmetom miša |
| Zumiranje | Pomerajte točkić; tačka ispod pokazivača ostaje na mestu |
| Uklapanje | Dvaput kliknite, pritisnite {{key:F}}, ili kliknite {{ui:Uklopi}} |
:::

:::mac mouse
Na touchpadu, pomeranje dvema prstima **zumira**, ne pomera. Štipanje takođe zumira. Za pomeranje kliknite i prevucite.
:::

:::touch
Prevucite jednim prstom za pomeranje. Zumiranje štipanjem za crteže još nije napravljeno: dodirnite {{ui:Uklopi}} da vidite ceo list, a za zumiranje koristite miš ili touchpad.
:::

## Dinamički blokovi

Dinamički blok se crta kako ga crtež prikazuje: svaki postavljeni blok u stanju vidljivosti u kojem je crtež sačuvan („Plan“ ili „Front“, „Single bowl“ ili „Double bowl“). Sa desne strane, **Dinamički blokovi** navodi svaki postavljen u prostoru modela: koliko je postavljeno, koja stanja prikazuju i sva stanja koja blok ima. U {{ui:3D}} kliknite postavljeni blok da vidite **Dinamički blok**, **Prikazano stanje** i **Druga stanja** u Svojstvima. BimCraft ne menja stanja.

## Još nije nacrtano

Neke vrste objekata se u ovoj verziji ne crtaju. Broje se pod **Još nije nacrtano** desno („Ovi delovi crteža se za sada preskaču, ne pogađaju se.“), pa znate da nešto nedostaje. Linije, polilinije, lukovi, krugovi, elipse, splajnovi, šrafure i pune ispune, tekst i višeredni tekst, blokovi sa atributima, kote, pokazne linije i višestruke pokazne linije, tablice, slike i prozori pogleda se crtaju. 3D lica, poliface mreže i poligonske mreže crtaju se kao njihove ivice gledano odozgo; prebacite na {{ui:3D}} da ih vidite kao površine.

Binarni DXF se ne otvara: BimCraft to kaže. Sačuvajte ga ponovo kao ASCII DXF ili kao DWG, iz programa u kojem je napravljen.

## Česte greške

- **Crtež izgleda prazno.** Neki slojevi mogu biti isključeni ili zamrznuti u samom crtežu; oni u {{ui:Slojevi}} počinju neobeleženi. Kliknite {{ui:Sve uključi}}. Ako status kaže „*ime* je prazan crtež: ne sadrži linije, tekst ni blokove.“, u njemu zaista nema ničega.
- **List pokazuje prazan okvir.** List se možda oslanja na povezane crteže. Vidi [Pronađi povezane crteže i slike](topic:dwg-linked-files).
- **Tekst izgleda malo drugačije.** BimCraft crta tekst uskim sans-serif fontom, a ne fontovima crteža, pa tekst može biti malo širi ili uži nego u programu u kojem je napravljen.
- **„*ime* nije moglo da se pročita. Možda je oštećen ili sačuvan u formatu koji čitač još ne obrađuje.“** Zagrada na kraju navodi kod formata datoteke. Sačuvajte ga iz programa u kojem je napravljen kao stariji DWG ili kao DXF, pa pokušajte ponovo.
- **Očekujete merenje, crtanje ili uređivanje.** BimCraft samo pregleda crteže. Kliknite {{ui:Uredi u CadCraft-u}} da otvorite istu datoteku u CadCraft aplikaciji za izradu nacrta, koja je uređuje i čuva kopiju kao DWG ili DXF. Vaša originalna datoteka se ne menja, a povezani crteži ostaju u BimCraftu. Dugme se prikazuje samo tamo gde je CadCraft otvoren za vas.

## Dalje

- [Pogledajte DWG ili DXF crtež u 3D](topic:dwg-in-3d)
- [Radite sa slojevima i listovima](topic:dwg-layers-sheets)
- [Proverite crtež u prikazu za štampu](topic:print-view)
