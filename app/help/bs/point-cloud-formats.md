---
title: Formati oblaka tačaka: šta se otvara i šta izvesti
summary: Koje datoteke laserskog skeniranja se otvaraju u 3D prikazu, koje su vlastiti format proizvođača skenera i šta izvesti iz softvera skenera da se skeniranje ovdje otvori.
keywords: oblak tačaka, laserski sken, skeniranje, formati, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, izvoz, ne može se otvoriti, nije pročitano
from: 1e985f01
---

## Šta se ovdje otvara

Otvorite ove formate pomoću {{ui:Otvoren}} ili tako što ih prevučete na stranicu (vidi temu o prikazu oblaka tačaka pored modela):

| Format | Ekstenzija | Šta se čita |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: tačke, boje, intenzitet, LiDAR klase, koordinatni sistem. LAZ do 1 GB. |
| E57 | `.e57` | Svako skeniranje u datoteci, svako postavljeno prema svojoj pozi; boje, ili intenzitet kad datoteka nema boja. Slike u datoteci se izostavljaju (program to navodi). Za sada do 6 miliona tačaka i 512 MB: veća skeniranja izvezite kao LAS ili LAZ. |
| PLY | `.ply` | Tekstualni i binarni (oba redoslijeda bajtova): x y z koordinate vrhova, boje i intenzitet. Površi se izostavljaju (program to navodi). |
| PCD | `.pcd` | Tekstualni i binarni: x y z, spakovane ili odvojene boje, intenzitet. Kompresovane PCD datoteke se još ne čitaju: sačuvajte ih kao binarne ili tekstualne. |
| PTX | `.ptx` | Jedno ili više skeniranja, svako postavljeno vlastitom transformacijom; tačke koje skener nije izmjerio se izostavljaju. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, uz intenzitet i boje kad kolone postoje. |

## Datoteke koje čita samo softver skenera

Neke datoteke skeniranja su vlasnički format proizvođača skenera, bez objavljenog opisa i bez otvorenog čitača. BimCraft ih ne može čitati, a kad se jedna otvori, prikazuje se kartica koja kaže šta je i šta treba uraditi. Izvezite skeniranje iz softvera proizvođača kao E57 ili LAS (ili PTX, PTS), pa otvorite izvezenu datoteku.

| Datoteka | Ekstenzija | Izvezite iz |
|---|---|---|
| ReCap projekat | `.rcp` | ReCap: otvorite projekat i izvezite ga. Projekat samo upućuje na svoja skeniranja, pa kopiranje samog `.rcp` ne daje nijednu tačku. |
| ReCap skeniranje | `.rcs` | ReCap: otvorite projekat kome skeniranje pripada i izvezite ga. |
| FARO skeniranje | `.fls` | FARO SCENE. |
| Leica skeniranje | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble skeniranje | `.tzf` | Trimble RealWorks ili Trimble Business Center. |
| Z+F skeniranje | `.zfs` | Z+F LaserControl. |

:::tip
Kad izvoz traži format, LAS ili LAZ čuva sve što BimCraft prikazuje (boje, intenzitet, klase i koordinatni sistem) u najmanjoj datoteci.
:::

## Zašto se ove datoteke ne čitaju

Ti formati nisu objavljeni, a jedini način da se čitaju je biblioteka softvera svakog proizvođača, pod njegovim uslovima. BimCraft čita samo formate koje može čitati vlastitim kodom na vašem računaru, pa skeniranje nikad ne mora biti poslano nigdje da bi se otvorilo.
