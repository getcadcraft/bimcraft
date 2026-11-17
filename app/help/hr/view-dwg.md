---
title: Pregled DWG ili DXF crteža
summary: Otvorite DWG ili DXF, krećite se po prostoru modela i listovima, čitajte koordinate i vidite što još nije nacrtano.
keywords: dinamički blokovi, stanja vidljivosti, dwg, dxf, cad, crtež, 2d, pregled, preglednik, pomicanje, zumiranje, prostor modela, papirni prostor, layout, koordinate, otvori dwg
from: 4db3122a
---

## Što ćete napraviti

Otvorite CAD crtež, pogledajte ga u 3D ili 2D, krećite se po njemu, prebacujte se između prostora modela i njegovih listova te čitajte koordinate. BimCraft prikazuje DWG i DXF crteže; ne uređuje ih niti sprema. Za promjenu kliknite {{ui:Uredi u CadCraftu}} i crtež se otvara u CadCraft aplikaciji za crtanje u novoj kartici.

## Koraci

1. Kliknite {{ui:Odaberi datoteku}} ili povucite crtež na stranicu.
2. Odaberite `.dwg` ili `.dxf` datoteku.
3. Pričekajte dok statusni redak kaže „Čitanje crteža…”. Veliki crteži traju nekoliko sekundi. Zatim kaže koliko je čitanje trajalo, „iscrtavanje…” dok se crta prva slika i koliko je to trajalo.
4. Crtež se otvara u 3D, najbržem načinu za prikaz velikog crteža (vidi [Pogled DWG ili DXF crteža u 3D](topic:dwg-in-3d)). Kliknite {{ui:Model}} za ravni 2D prikaz. Da uvijek otvarate crteže u 2D, postavite {{ui:Postavke}} › {{ui:BimCraft}} › **Crteži se otvaraju u** na {{ui:Model (2D)}}. Crtež bez ičega u prostoru modela ili preglednik koji ne može prikazati 3D otvara se u 2D.
5. Pogledajte kartice iznad crteža: najprije {{ui:Model}}, zatim po jednu karticu za svaki list, redom kako je u samom crtežu.
6. Kliknite karticu lista da vidite taj list: papir, s modelom prikazanim kroz njegove viewporte.
7. Kliknite {{ui:Model}} da se vratite u prostor modela.
8. Pomaknite pokazivač preko crteža i čitajte koordinate X i Y u kutu.

## Što biste trebali vidjeti

- Crtež, prilagođen prozoru. Boje slijede crtež; bijele linije (boja 7) crtaju se bojom teme, a blijede boje se zatamne na svijetloj temi da ostanu čitljive.
- Ploča {{ui:Crtež}} lijevo: datoteka, veličina, format (npr. „AutoCAD 2018 (AC1032)”), jedinice, broj entiteta i slojeva, broj listova te povezani crteži i oprema kad ih ima.
- Popis {{ui:Slojevi}} lijevo.
- Desno: kako se kretati, povezani crteži i slike te **Još nije nacrtano**.

## Kretanje

:::mouse
| Za | Učinite ovo |
|---|---|
| Pomicanje prikaza (Pan) | Povucite bilo kojom tipkom miša |
| Zumiranje | Pomaknite kotačić; točka pod pokazivačem ostaje na mjestu |
| Prilagodi | Dvaput kliknite, pritisnite {{key:F}} ili kliknite {{ui:Prilagodi}} |
:::

:::mac mouse
Na trackpadu pomicanje dvama prstima **zumira**, ne pomiče. Stisak (pinch) također zumira. Za pomicanje kliknite i povucite.
:::

:::touch
Povucite jednim prstom za pomicanje. Zumiranje stiskom za crteže još nije izrađeno: dodirnite {{ui:Prilagodi}} da vidite cijeli list, a za zumiranje koristite miš ili trackpad.
:::

## Dinamički blokovi

Dinamički blok se crta onako kako ga crtež prikazuje: svaki postavljeni blok u stanju vidljivosti u kojem je crtež spremljen („Plan” ili „Front”, „Single bowl” ili „Double bowl”). Desno, **Dinamički blokovi** popisuje svaki postavljeni u prostoru modela: koliko ih je postavljeno, koja stanja prikazuju i sva stanja koja blok ima. U {{ui:3D}} kliknite postavljeni blok da vidite **Dinamički blok**, **Prikazano stanje** i **Druga stanja** u Svojstvima. BimCraft ne mijenja stanja.

## Još nije nacrtano

Neke vrste objekata se u ovoj izgradnji ne crtaju. Broje se pod **Još nije nacrtano** desno („Ovi dijelovi crteža se za sada preskaču, ne pogađa se.”), pa znate da nešto nedostaje. Crtaju se linije, polilinije, lukovi, kružnice, elipse, splineovi, šrafure i pune ispune, tekst i višeretčani tekst, blokovi s atributima, kote, vodilice i višestruke vodilice, tablice, slike i viewporti. 3D plohe, poligonske mreže (polyface) i mreže poligona crtaju se kao njihovi rubovi gledani odozgo; prebacite na {{ui:3D}} da ih vidite kao površine.

Binarni DXF se ne otvara: BimCraft to kaže. Spremite ga ponovno kao ASCII DXF ili kao DWG iz programa u kojem je nastao.

## Česte pogreške

- **Crtež izgleda prazan.** Neki slojevi mogu biti isključeni ili zamrznuti u samom crtežu; u {{ui:Slojevi}} započinju neoznačeni. Kliknite {{ui:Sve uključeno}}. Ako status kaže „*ime* je prazan crtež: ne sadrži linije, tekst ni blokove.”, u njemu ničega nema.
- **List prikazuje prazan okvir.** List se možda oslanja na povezane crteže. Vidi [Pronađi povezane crteže i slike](topic:dwg-linked-files).
- **Tekst izgleda malo drugačije.** BimCraft crta tekst užim bezserifnim fontom, a ne fontovima samoga crteža, pa tekst može biti malo širi ili uži nego u programu u kojem je nastao.
- **„*ime* nije moglo biti učitano. Možda je oštećeno ili spremljeno u formatu koji čitač još ne obrađuje.”** Zagrada na kraju navodi kod formata datoteke. Spremite ga iz programa u kojem je nastao kao stariji DWG ili kao DXF i pokušajte ponovno.
- **Očekujete mjerenje, crtanje ili uređivanje.** BimCraft samo pregledava crteže. Kliknite {{ui:Uredi u CadCraftu}} da otvorite istu datoteku u CadCraft aplikaciji za crtanje, koja je uređuje i sprema kopiju kao DWG ili DXF. Vaša izvorna datoteka se ne mijenja, a povezani crteži ostaju u BimCraftu. Gumb se pokazuje samo tamo gdje vam je CadCraft otvoren.

## Dalje

- [Pogled DWG ili DXF crteža u 3D](topic:dwg-in-3d)
- [Rad sa slojevima i listovima](topic:dwg-layers-sheets)
- [Provjera crteža u prikazu za ispis](topic:print-view)
