---
title: Formati oblaka tačaka: šta se otvara i šta izvesti
summary: Koje datoteke laserskih skenova se otvaraju u 3D prikazu, koje su sopstveni format proizvođača skenera i šta izvesti iz softvera skenera da se sken ovde otvori.
keywords: oblak tačaka, laserski sken, sken, formati, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, izvoz, ne može da se otvori, nije pročitano
from: 1e985f01
---

## Šta se ovde otvara

Otvorite ih pomoću {{ui:Otvoren}} ili prevlačenjem na stranicu (pogledajte temu o prikazu oblaka tačaka pored modela):

| Format | Ekstenzija | Šta se čita |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: tačke, boje, intenzitet, LiDAR klase, koordinatni sistem. LAZ do 1 GB. |
| E57 | `.e57` | Svaki sken u datoteci, svaki postavljen prema svom položaju; boje, ili intenzitet kad datoteka nema boja. Slike u datoteci se izostavljaju (o tome se javlja poruka). Za sada do 6 miliona tačaka i 512 MB: veće skenove izvezite kao LAS ili LAZ. |
| PLY | `.ply` | Tekstualni i binarni (oba redosleda bajtova): x y z koordinate temena, boje i intenzitet. Površi se izostavljaju (o tome se javlja poruka). |
| PCD | `.pcd` | Tekstualni i binarni: x y z, spakovane ili odvojene boje, intenzitet. Kompresovane PCD datoteke se još ne čitaju: sačuvajte ih kao binarne ili tekstualne. |
| PTX | `.ptx` | Jedan ili više skenova, svaki postavljen sopstvenom transformacijom; tačke koje skener nije izmerio se izostavljaju. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Tekstualni: x y z, sa intenzitetom i bojama kad kolone postoje. |

## Datoteke koje čita samo softver skenera

Neke datoteke skenova su sopstveni format proizvođača skenera, bez objavljenog opisa i bez otvorenog čitača. BimCraft ih ne može pročitati, a kad ih otvorite, pojavi se kartica koja kaže šta su i šta treba uraditi. Izvezite sken iz softvera proizvođača kao E57 ili LAS (ili PTX, PTS), pa otvorite izvezenu datoteku.

| Datoteka | Ekstenzija | Izvezite iz |
|---|---|---|
| ReCap projekat | `.rcp` | ReCap: otvorite projekat i izvezite ga. Projekat samo upućuje na svoje skenove, pa samo kopiranje `.rcp` datoteke ne daje tačke. |
| ReCap sken | `.rcs` | ReCap: otvorite projekat kojem sken pripada i izvezite ga. |
| FARO sken | `.fls` | FARO SCENE. |
| Leica sken | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble sken | `.tzf` | Trimble RealWorks ili Trimble Business Center. |
| Z+F sken | `.zfs` | Z+F LaserControl. |

:::tip
Kad izvoz traži format, LAS ili LAZ čuva sve što BimCraft prikazuje (boje, intenzitet, klase i koordinatni sistem) u najmanjoj datoteci.
:::

## Zašto se ove datoteke ne čitaju

Ti formati nisu objavljeni, a jedini način da se čitaju je biblioteka softvera svakog proizvođača, pod njegovim uslovima. BimCraft čita samo formate koje može da čita sopstvenim kodom na vašem računaru, pa sken nikad ne mora da se šalje nigde da bi se otvorio.
