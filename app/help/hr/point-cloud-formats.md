---
title: Formati oblaka točaka: što se otvara i što izvesti
summary: Koje datoteke laserskog skeniranja se otvaraju u 3D pogledu, koje su vlastiti format proizvođača skenera i što izvesti iz softvera skenera da se skeniranje ovdje otvori.
keywords: oblak točaka, laserski sken, skeniranje, formati, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, izvoz, ne može se otvoriti, nije čitano
from: 1e985f01
---

## Što se ovdje otvara

Otvorite ove datoteke pomoću {{ui:Otvoreno}} ili povlačenjem na stranicu (vidi temu o prikazu oblaka točaka uz model):

| Format | Ekstenzija | Što se čita |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: točke, boje, intenzitet, LiDAR klase, koordinatni sustav. LAZ do 1 GB. |
| E57 | `.e57` | Svako skeniranje u datoteci, svako postavljeno prema svojoj pozi; boje, ili intenzitet kad datoteka nema boja. Slike u datoteci se izostavljaju (navedeno). Do 6 milijuna točaka i 512 MB za sada: veća skeniranja izvezite kao LAS ili LAZ. |
| PLY | `.ply` | Tekstualni i binarni (oba bajt-poretka): x y z koordinate vrhova, boje i intenzitet. Plohe se izostavljaju (navedeno). |
| PCD | `.pcd` | Tekstualni i binarni: x y z, pakirane ili zasebne boje, intenzitet. Komprimirane PCD datoteke se još ne čitaju: spremite ih kao binarne ili tekstualne. |
| PTX | `.ptx` | Jedno ili više skeniranja, svako postavljeno vlastitom transformacijom; točke koje skener nije izmjerio se izostavljaju. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, s intenzitetom i bojama kad su stupci prisutni. |

## Datoteke koje čita samo softver skenera

Neke datoteke skeniranja su vlastiti format proizvođača skenera, bez objavljenog opisa i bez otvorenog čitača. BimCraft ih ne može čitati, a kad ih otvorite, prikaže se kartica koja kaže što su i što učiniti. Izvezite skeniranje iz softvera proizvođača kao E57 ili LAS (ili PTX, PTS), zatim otvorite izvezenu datoteku.

| Datoteka | Ekstenzija | Izvezite iz |
|---|---|---|
| ReCap projekt | `.rcp` | ReCap: otvorite projekt i izvezite ga. Projekt samo upućuje na svoja skeniranja, pa kopiranje samog `.rcp` ne daje nikakve točke. |
| ReCap skeniranje | `.rcs` | ReCap: otvorite projekt kojem skeniranje pripada i izvezite ga. |
| FARO skeniranje | `.fls` | FARO SCENE. |
| Leica skeniranje | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skeniranje | `.tzf` | Trimble RealWorks ili Trimble Business Center. |
| Z+F skeniranje | `.zfs` | Z+F LaserControl. |

:::tip
Kad izvoz traži format, LAS ili LAZ čuva sve što BimCraft prikazuje (boje, intenzitet, klase i koordinatni sustav) u najmanjoj datoteci.
:::

## Zašto se ove datoteke ne čitaju

Ti formati nisu objavljeni, a jedini način da ih se čita je vlastita softverska biblioteka svakog proizvođača, pod njegovim uvjetima. BimCraft čita samo formate koje može čitati vlastitim kodom na vašem računalu, pa se skeniranje nikad ne mora slati nigdje da bi se otvorilo.
