---
title: Pontfelhő-formátumok: mi nyílik meg, és mit kell exportálni
summary: Melyik lézeres letapogatási fájl nyílik meg a 3D-nézetben, melyik a szkennergyártó saját formátuma, és mit kell exportálni a szkenner szoftveréből, hogy a letapogatás itt megnyíljon.
keywords: pontfelhő, lézeres letapogatás, letapogatás, formátumok, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportálás, nem nyitható meg, nem olvasható
from: 1e985f01
---

## Mi nyílik meg itt

Ezeket a {{ui:Nyitott}} gombbal vagy az oldalra húzva nyissa meg (lásd a témakört: Pontfelhő megjelenítése a modell mellett):

| Formátum | Kiterjesztés | Mi kerül beolvasásra |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pontok, színek, intenzitás, LiDAR-osztályok, a koordinátarendszer. LAZ legfeljebb 1 GB. |
| E57 | `.e57` | Minden letapogatás a fájlban, mindegyik a saját pozíciójával elhelyezve; színek, vagy intenzitás, ha a fájlban nincsenek színek. A fájlban lévő képek kimaradnak (jelezve). Egyelőre legfeljebb 6 millió pont és 512 MB: a nagyobb letapogatásokat exportálja LAS vagy LAZ formátumban. |
| PLY | `.ply` | Szöveges és bináris (mindkét bájtsorrend): a csúcspontok x y z koordinátái, színei és intenzitása. A lapok kimaradnak (jelezve). |
| PCD | `.pcd` | Szöveges és bináris: x y z, összecsomagolt vagy külön színek, intenzitás. A tömörített PCD-fájlokat még nem olvassuk: mentse bináris vagy szöveges formában. |
| PTX | `.ptx` | Egy vagy több letapogatás, mindegyik a saját transzformációjával elhelyezve; a szkenner által nem mért pontok kimaradnak. Méter. |
| PTS, XYZ | `.pts`, `.xyz` | Szöveges: x y z, az intenzitással és a színekkel, ha az oszlopok megvannak. |

## Fájlok, amelyeket csak a szkenner szoftvere olvas

Néhány letapogatási fájl a szkennergyártó saját formátuma, nyilvános leírás és nyílt olvasó nélkül. A BimCraft nem tudja beolvasni; megnyitásakor egy kártya jelzi, mi ez és mit kell tenni. Exportálja a letapogatást a gyártó szoftveréből E57 vagy LAS (vagy PTX, PTS) formátumban, majd nyissa meg az exportált fájlt.

| Fájl | Kiterjesztés | Exportálja innen |
|---|---|---|
| ReCap-projekt | `.rcp` | ReCap: nyissa meg a projektet, és exportálja. A projekt csak a letapogatásaira mutat, ezért a `.rcp` önmagában történő másolása nem ad pontokat. |
| ReCap-letapogatás | `.rcs` | ReCap: nyissa meg azt a projektet, amelyhez a letapogatás tartozik, és exportálja. |
| FARO-letapogatás | `.fls` | FARO SCENE. |
| Leica-letapogatás | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-letapogatás | `.tzf` | Trimble RealWorks vagy Trimble Business Center. |
| Z+F-letapogatás | `.zfs` | Z+F LaserControl. |

:::tip
Ha az exportálás formátumot kér, a LAS vagy a LAZ őrzi meg mindazt, amit a BimCraft megjelenít (színeket, intenzitást, osztályokat és a koordinátarendszert), a legkisebb fájlban.
:::

## Miért nem olvashatók ezek a fájlok

Ezek a formátumok nincsenek közzétéve, és egyetlen módon olvashatók: az egyes gyártók saját szoftverkönyvtárával, a saját feltételei szerint. A BimCraft csak olyan formátumokat olvas, amelyeket a saját kódjával tud beolvasni a számítógépén, így a letapogatást a megnyitásához sehová nem kell elküldeni.
