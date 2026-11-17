---
title: Projekt- vagy családfájl olvasása
summary: Egy .rvt, .rfa, .rte vagy .rft fájl megnyitása, és kiadásának, munkamegosztásának, projektadatainak, családparamétereinek, hivatkozásainak és előnézeti képének beolvasása a készítő program nélkül.
keywords: rvt, rfa, rte, rft, projektfájl, család, kiadás, verzió, melyik verzió, build, munkamegosztás, központi, projektadatok, előnézet, bélyegkép, hivatkozások
from: df3600e1
---

## Mit fog tenni

Tudja meg, mi van egy projekt- vagy családfájlban, anélkül hogy megnyitná a Revitben: melyik kiadás mentette, munkamegosztott-e, mik a projektadatai, és mire hivatkozik. Akkor hasznos, ha valaki másodmagával küld egy fájlt, és tudnia kell, melyik kiadásban nyissa meg.

## Lépések

1. Kattintson a {{ui:Fájl kiválasztása}} gombra.
2. Válasszon egy `.rvt`, `.rfa`, `.rte` vagy `.rft` fájlt.
3. Várjon egy pillanatot. Az állapotsor először „A fájl olvasása…” üzenetet mutat, majd „Megnyitva: *fájlnév*” szöveget.
4. Nézze meg a kártya tetejét: a fájlban tárolt előnézeti képet, a fájl fajtáját és a mentés kiadását, valamint a projekt nevét.
5. Görgessen le a kártya szakaszaihoz.

## Amit látnia kell

A középső kártya, a fájl tartalmától függően, az alábbi szakaszokkal:

| Szakasz | Amit megmutat |
|---|---|
| Fájl | Fájlnév, méret, fajta (projekt, projektsablon, család vagy családsablon), a kiadás és a build, amelyben mentették, a munkamegosztás, a központi modell elérési útja, hol és ki mentette utoljára, nyelvi beállítás és dokumentum-GUID |
| Projektadatok | A projekt saját mezői, például név, szám, megrendelő, cím és állapot. Az új projekt alapértelmezésén maradt mezők kimaradnak. |
| Család, Család: … | Családnál: a neve, a kategóriája, a kiadása, az utolsó frissítése és a paraméterei, csoportonként |
| Hivatkozott és csatolt fájlok | Minden hivatkozott modell, CAD-hivatkozás, kép és kulcsjegyzék-táblázat a mentett elérési útjával |

A bal oldali {{ui:Fájl}} panel megismétli a legfontosabb adatokat, és hozzáad egy **Beolvasva** sort: hogy a BimCraft a fájlnak mennyi részét olvasta be, általában egy többmegabájtos fájl körülbelül 40 KB-ját. A jobb oldali {{ui:Tulajdonságok}} panel jelzi, hogy az elemtulajdonságokhoz 3D-modell kell.

## Miért nincs 3D

A 3D-modell és a projektfájlon belüli elemek egy nem dokumentált formátumban vannak tárolva. A BimCraft csak a fájl dokumentált vagy egyértelműen olvasható részeit olvassa be: a fájlinformációt, a projektadatokat, a családadatokat, a hivatkozáslistát és az előnézeti képet. A többit nem találgatja. A modell 3D-ben és az elemtulajdonságok olvasásához exportáljon IFC-t abból a programból, amely a fájlt készítette. Lásd: [Projektfájl betöltése 3D-be IFC-n keresztül](topic:rvt-to-ifc).

## Gyakori hibák

- **3D-t várni.** Lásd fent.
- **A hivatkozások csak a mentett elérési utat mutatják.** A fájl önmagában megnyitva nem tudja ellenőrizni, léteznek-e a hivatkozások. Nyissa meg helyette azt a mappát, amelyben van, és a BimCraft minden hivatkozást megtaláltként vagy hiányzóként jelöl: [Egy teljes projektmappa megnyitása](topic:open-project-folder).
- **„Ez a fájl hiányos…”** A fájl félbemaradt a másolás, feltöltés vagy szinkronizálás közben. Egy felhőtárhelyen még „csak online” állapotú fájl is így jár. A BimCraft ettől függetlenül megnyitja, és csak a visszanyert részt mutatja: borostyánsárga figyelmeztetés a kártya tetején, a **Visszanyerve ebből a fájlból** szakasz, amely felsorolja azokat a részeket, amelyek minden bájtja a fájlban van, és a **Nincs a fájlban** szakasz a többinek. A hiányzó rész helyett semmi sincs kitöltve, így a kiadás, az előnézeti kép vagy a projektadatok hiányozhatnak, ha a levágás előtt tárolták őket. Ha a fájl tartalomjegyzéke is csonka, semmi sem nyitható meg. Másolja újra az eredetit, és nyissa meg újra a teljes fájlért.
- **„Ebben a fájlban nincs előnézeti kép”.** Egyes fájlokat előnézeti kép nélkül mentenek. Ez normális.
- **Véletlenül biztonsági mentést megnyitni.** A `Tower.0004.rvt` típusú nevű fájlok számozott mentések. A mappa megnyitása a modellükkel csoportosítja őket.
