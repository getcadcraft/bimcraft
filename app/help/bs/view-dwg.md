---
title: Pregledajte DWG ili DXF crtež
summary: Otvorite DWG ili DXF, krećite se po prostoru modela i listovima, čitajte koordinate i vidite šta još nije nacrtano.
keywords: dinamički blokovi, stanja vidljivosti, dwg, dxf, cad, crtež, 2d, pregled, pregledač, pomjeranje, zumiranje, prostor modela, prostor papira, raspored, koordinate, otvori dwg
from: 4db3122a
---

## Šta ćete raditi

Otvorite CAD crtež, vidite ga u 3D ili 2D, krećete se po njemu, prebacujete se između prostora modela i njegovih listova, i čitate koordinate. BimCraft prikazuje DWG i DXF crteže; ne uređuje ih i ne spašava. Da biste ga promijenili, kliknite {{ui:Edit in CadCraft}} i crtež se otvara u CadCraft aplikaciji za crtanje u novoj kartici.

## Koraci

1. Kliknite {{ui:Choose a file}} ili prevucite crtež na stranicu.
2. Izaberite `.dwg` ili `.dxf` datoteku.
3. Sačekajte dok statusna linija kaže "Čitanje crteža…". Veliki crteži traju nekoliko sekundi. Zatim kaže koliko je čitanje trajalo, "renderovanje…" dok se prva slika crta, i koliko je to trajalo.
4. Crtež se otvara u 3D, najbržem načinu prikaza velikog crteža (vidi [Pogledajte DWG ili DXF crtež u 3D](topic:dwg-in-3d)). Kliknite {{ui:Model}} za ravan 2D pogled. Da uvijek otvarate crteže u 2D, postavite {{ui:Settings}} › {{ui:BimCraft}} › **Crteži se otvaraju u** na {{ui:Model (2D)}}. Crtež bez ičega u prostoru modela, ili pregledač koji ne može prikazati 3D, otvara se u 2D.
5. Pogledajte kartice iznad crteža: {{ui:Model}} prva, zatim po jedna kartica za svaki list, redom iz samog crteža.
6. Kliknite karticu lista da vidite taj list: papir, s modelom prikazanim kroz njegove prozore pogleda.
7. Kliknite {{ui:Model}} da se vratite u prostor modela.
8. Pomjerite pokazivač preko crteža i čitajte X i Y koordinate u uglu.

## Šta treba da vidite

- Crtež, uklopljen u prozor. Boje prate crtež; bijele linije (boja 7) crtaju se bojom teme, a blijede boje se potamne na svijetloj temi da ostanu čitljive.
- Panel {{ui:Drawing}} lijevo: datoteka, veličina, format (na primjer "AutoCAD 2018 (AC1032)"), jedinice, broj entiteta i slojeva, broj listova, i povezani crteži i oprema kada ih ima.
- Lista {{ui:Layers}} lijevo.
- Desno: kako se kretati, povezani crteži i slike i **Još nije nacrtano**.

## Kretanje

:::mouse
| Za | Uradite ovo |
|---|---|
| Pomjeranje | Prevucite bilo kojim dugmetom miša |
| Zumiranje | Pomičite točkić; tačka ispod pokazivača ostaje na mjestu |
| Uklapanje | Dvostruki klik, pritisnite {{key:F}}, ili kliknite {{ui:Fit}} |
:::

:::mac mouse
Na trackpadu, skrolovanje s dva prsta **zumira**, ne pomjera. Stezanje također zumira. Za pomjeranje, kliknite i prevucite.
:::

:::touch
Prevucite jednim prstom za pomjeranje. Zumiranje stezanjem za crteže još nije izgrađeno: dodirnite {{ui:Fit}} da vidite cijeli list, a za zumiranje koristite miš ili trackpad.
:::

## Dinamički blokovi

Dinamički blok se crta onako kako ga crtež prikazuje: svaki postavljeni blok u stanju vidljivosti u kojem je crtež bio sačuvan ("Plan" ili "Front", "Single bowl" ili "Double bowl"). Desno, **Dinamički blokovi** navodi svaki postavljen u prostoru modela: koliko ih je postavljeno, stanja koja prikazuju i sva stanja koja blok ima. U {{ui:3D}}, kliknite postavljeni blok da vidite **Dinamički blok**, **Prikazano stanje** i **Druga stanja** u Svojstvima. BimCraft ne mijenja stanja.

## Još nije nacrtano

Neke vrste objekata se u ovoj verziji ne crtaju. Broje se pod **Još nije nacrtano** desno ("Ovi dijelovi crteža se za sada preskaču, a ne pogađaju se."), pa znate da nešto nedostaje. Linije, polilinije, lukovi, krugovi, elipse, splajnovi, šrafure i pune ispune, tekst i višelinijski tekst, blokovi s atributima, kote, vodilice i viševodilice, tabele, slike i prozori pogleda se crtaju. 3D površi, polyface mreže i poligonske mreže se crtaju kao njihove ivice viđene odozgo; prebacite na {{ui:3D}} da ih vidite kao površine.

Binarni DXF se ne otvara: BimCraft to kaže. Spasite ga ponovo kao ASCII DXF, ili kao DWG, iz programa koji ga je napravio.

## Česte greške

- **Crtež izgleda prazan.** Neki slojevi mogu biti isključeni ili zamrznuti u samom crtežu; u {{ui:Layers}} počinju odštiklirani. Kliknite {{ui:All on}}. Ako status kaže "*name* is an empty drawing: it holds no lines, text or blocks.", ništa nije u njemu.
- **List prikazuje prazan okvir.** List se možda oslanja na povezane crteže. Vidi [Pronađite povezane crteže i slike](topic:dwg-linked-files).
- **Tekst izgleda malo drugačije.** BimCraft crta tekst uskim sans-serif fontom, a ne fontovima crteža, pa tekst može biti malo širi ili uži nego u programu koji ga je napravio.
- **"*name* could not be read. It may be damaged, or saved in a format the reader does not handle yet."** Zagrada na kraju navodi kod formata datoteke. Spasite ga iz programa koji ga je napravio kao stariji DWG ili kao DXF, pa pokušajte ponovo.
- **Očekujete mjerenje, crtanje ili uređivanje.** BimCraft samo pregleda crteže. Kliknite {{ui:Edit in CadCraft}} da otvorite istu datoteku u CadCraft aplikaciji za crtanje, koja je uređuje i spašava kopiju kao DWG ili DXF. Vaša originalna datoteka se ne mijenja, a povezani crteži ostaju u BimCraft-u. Dugme se prikazuje samo tamo gdje vam je CadCraft otvoren.

## Dalje

- [Pogledajte DWG ili DXF crtež u 3D](topic:dwg-in-3d)
- [Radite sa slojevima i listovima](topic:dwg-layers-sheets)
- [Provjerite crtež u prikazu za štampu](topic:print-view)
