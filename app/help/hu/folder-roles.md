---
title: Mappajelentés: szerepek, állapotok és hivatkozások
summary: A mappajelentés minden címkéje, azok jelentése, valamint az, hogy a „Kezdje itt” javaslat hogyan kerül kiválasztásra.
keywords: mappajelentés, szerepek, állapot, teljes, hiányos, olvashatatlan, hivatkozott, háttér, kezdősablon, központi, család, csak biztonsági mentések, kezdje itt, hivatkozás állapota
from: b35bdd10
---

## Másolat állapota

A modell minden példánya, a főfájl és a sorszámozott biztonsági mentések egyaránt, fejléc-ellenőrzésen esik át.

| Címke | Jelentés |
|---|---|
| **Teljes** | A fájl fejléce és tartalomjegyzéke belefér a fájlba |
| **Hiányos** | A fájl rövidebb, mint a saját tartalomjegyzéke jelzi: másolás, feltöltés vagy szinkronizálás közben csonkult, vagy olyan felhőfájl, amely még „csak online” állapotban van |
| **Olvashatatlan** | A fájl nem érvényes összetett fájl, vagy nem sikerült beolvasni |

Az **Állapot** oszlopban a modell **Teljes** értéket mutat; borostyánsárga „*n* hiányos” jelzés jelenik meg, ha legalább egy példány hibás, de van ép is; piros **Hiányos** jelzés, ha egyetlen példány sem ép.

## Biztonsági mentések

A `Name.0001.rvt`, `Name.0002.rvt` és így tovább nevű fájlok a `Name.rvt` sorszámozott biztonsági mentései. A **Minden … példány** alatt a modelljük szerint csoportosítva, a legújabbal elöl jelennek meg. A kártya a főfájlból olvasódik, ha az teljes; ellenkező esetben a legújabb teljes biztonsági mentésből („legújabb teljes”).

## Szerepek

A modell neve alatt dőlt betűvel jelennek meg.

| Szerep | Jelentés |
|---|---|
| Hivatkozva a *másik modell* által: háttér | Egy másik modell a mappában ehhez kapcsolódik, így valószínűleg valaki másnak a háttérmodellje, például egy szaktervezőé |
| Kezdő vagy névtelen fájl | Olyan név, mint a Blank, Template, Default, Untitled vagy Project1: kiindulópont, vagy soha nem megfelelően elnevezett fájl |
| Központi modell | Többfelhasználós központi modell. A munka helyi másolatban történik, nem itt |
| Család (alkatrész) | Egy `.rfa` vagy `.rft` fájl: egy alkatrész, nem a projekt |
| Csak biztonsági mentések | A főfájl hiányzik, csak a sorszámozott biztonsági mentések maradtak meg |

## Hogyan kerül kiválasztásra a Kezdje itt

A BimCraft egy tapasztalt felhasználó gondolkodásmódját követi:

1. Jelöltek az olvasható projektfájlok (`.rvt`, `.rte`), amelyeket nem kapcsol össze másik modell, és amelyek nem kezdő fájlok.
2. A központi modellek és a csak biztonsági mentésekből álló modellek csak akkor számítanak, ha nincs jobb.
3. A jelöltek közül az nyer, amelyet legutoljára mentettek.

A doboz felsorolja az indokait, és figyelmeztet, ha az egyértelmű választásnak tűnő fájl sérült, ha más modellek háttérmodellek, és ha a kiválasztott modell központi modell. Ez legjobb becslés; ellenőrizze azt, aki utoljára dolgozott a projekten.

## Hivatkozás állapota

| Címke | Jelentés |
|---|---|
| **Ebben a mappában** | A mentett relatív útvonalon, vagy a mentett teljes útvonal végén, a mappán belül találva |
| **Azonos nevű fájl található** | Nem a saját útvonalán, de a mappában van egy azonos nevű fájl. Ellenőrizze, hogy a helyes-e |
| **Könyvtári fájl** | Kulcsszó- vagy összeállítási kódtábla. Ezek minden számítógépen a programmal együtt érkeznek |
| **Nincs ebben a mappában** | Sehol sincs a mappában |

A **Modellek** lap **Talált hivatkozások** oszlopa azt mutatja, hány hivatkozást találtak meg a modell hivatkozásai közül, a mappában várhatók közül (a könyvtári fájlokat nem számítjuk).

## Félretéve

| Sor | Jelentés |
|---|---|
| Revit karbantartó mappák (nem olvassuk be) | `*_backup`, `*_log` és `Revit_temp` mappák, valamint a rejtett mappák és a `__MACOSX` |
| Zárolási, napló- és biztonsági maradványok | `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` és `.slog` fájlok |
| Egyéb fájlok | Minden más (az első 40 név szerint felsorolva) |
