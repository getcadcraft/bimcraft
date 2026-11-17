---
title: Mappa ellenőrzése sérült példányok, hiányzó hivatkozások és maradványok szempontjából
summary: A mappajelentésből megtalálja a csonka modellfájlokat, kiválasztja a legújabb teljes biztonsági mentést, látja, mely hivatkozások hiányoznak, és felfedezi a zár- és ideiglenes fájlokat.
keywords: állapotellenőrzés, sérült, hibás, hiányos, csonka, biztonsági mentés, hiányzó hivatkozások, külső hivatkozás hiányzik, auditálás, maradványok, zárfájlok, dwl, bak, átadás
from: 3025a539
---

## Mit fog csinálni

Ellenőrizze a projektmappát átadás előtt vagy a munka megkezdése előtt: minden modell teljes-e, melyik biztonsági mentés az utolsó jó, és minden csatolt fájl ott van-e?

## Lépések: sérült példányok

1. Nyissa meg a projektmappát. Lásd: [Teljes projektmappa megnyitása](topic:open-project-folder).
2. Olvassa el a mappanév alatti megjegyzéseket. A „2 fájl hiányos vagy olvashatatlan. Lásd alul a modelleket.” azt jelenti, hogy van mit megnéznie.
3. A **Modellek** részben nézze meg az **Állapot** oszlopot. A **Teljes** rendben van. A sárga „1 hiányos” azt jelenti, hogy az egyik példány hibás, de egy másik ép. A piros **Hiányos** azt jelenti, hogy nem találtak ép példányt.
4. Nyissa meg a **Minden … példány** lehetőséget a problémás modell alatt. Felsorolja a fő fájlt és minden sorszámozott biztonsági mentést, a legújabbal kezdve, mérettel, dátummal és állapottal.
5. Olvassa el a lista feletti megjegyzést, például: „Tower.rvt hiányos (183.2 MB, legalább 214.0 MB-nak kellene lennie). A kártya a legújabb teljes példányt mutatja: Tower.0012.rvt (2025. márc. 3.).”
6. Kattintson a kívánt példányra a megnyitásához. Csak a teljes példányok kattinthatók.

## Mit csinál a mappaellenőrzés

Minden modell minden példányának fejléce gyorsan ellenőrzésre kerül, példányonként 512 bájt, így nagy modellekből álló mappa is másodpercek alatt átnézhető. Az a fájl, amelynek saját indexe a végén túlmutat, a másolás, feltöltés vagy szinkronizálás közben csonkult. Egy felhőmeghajtón még „csak online” állapotú fájl ugyanígy néz ki.

Minden modell kártyáját a fő fájlból olvassa, ha az ép, egyébként a legújabb ép biztonsági mentésből.

## Lépések: hiányzó hivatkozások

1. Keresse a mappanév alatti megjegyzést: „*n* csatolt fájl nincs ebben a mappában.”
2. Görgessen a **Csatolt és hivatkozott fájlok** részhez. A hiányzó hivatkozások vannak legelöl.
3. Olvassa el minden hivatkozás **Hely** oszlopát:
   - **Ebben a mappában**: a modell által mentett útvonalon találta.
   - **Azonos nevű találat**: azonos nevű fájl van a mappa egy másik helyén. Ellenőrizze, hogy a helyes-e.
   - **Könyvtári fájl**: kulcsszó- vagy szerelvénykód-táblázat. Ezek minden számítógépen a programmal együtt érkeznek, ezért a mappában nem várhatók.
   - **Nincs ebben a mappában**: a mappában sehol nem található.
4. A **Használja** oszlopból olvassa ki, mely modellek hivatkoznak az egyes fájlokra.

A BimCraft a hivatkozást először a relatív útvonala alapján keresi, majd a mentett útvonal végének alapján (így a `\\server\jobs\Tower\Cad\X-Refs\site.dwg` az `X-Refs/site.dwg` helyen található meg, ha a `Cad` mappát választotta ki), végül a fájlnév alapján a mappában bárhol.

## Lépések: maradványok

1. Görgessen a jelentés végén lévő **Félretéve** részhez.
2. Olvassa el a három sort, amely megjelenhet:
   - Karbantartó mappák (`*_backup`, `*_log`, `Revit_temp`): nem olvassa be.
   - Zár-, napló- és biztonsági mentési maradványok: fájlok, például `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Ezeket az összeomlott programok hagyják hátra, vagy azok, amelyek a mappa másolásakor nyitva voltak. Általában biztonságosan törölhetők, ha senki nem tartja nyitva a fájlokat.
   - Egyéb fájlok: minden más, amit a BimCraft nem olvas be.

## Gyakori hibák

- **A sérült fő fájl törlése a jó biztonsági mentés mentése előtt.** Előbb másolja le a legújabb teljes biztonsági mentést, és csak utána foglalkozzon a sérült fájllal.
- **Az „Azonos nevű találat” vakon elfogadása.** Két különböző rajz is viselhet azonos nevet. Kétség esetén nyissa meg mindkettőt.
- **Azt hinni, hogy a hiányzó könyvtári fájl gond.** A kulcsszó- és szerelvénykód-táblázatok minden számítógépen a programmal együtt vannak.
- **A fájlszám böngészőnként eltér.** Firefoxban és Safariban a {{ui:Mappa megnyitása}} átad minden fájlt, a karbantartó mappák fájljait is, ezért a darabszám (és a 20 000 fájlos korlát) is beleszámítja őket. A mappa húzással történő megadásakor, ahogy Chrome-ban és Edge-ben, ezek kimaradnak. Egyébként a jelentés ugyanaz.
