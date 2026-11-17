---
title: Formati oblakov točk: kaj se odpre in kaj izvoziti
summary: Katere datoteke laserskega skeniranja se odprejo v 3D pogledu, katere so lastniški format proizvajalca skenerja in kaj izvoziti iz programske opreme skenerja, da se sken tukaj odpre.
keywords: oblak točk, lasersko skeniranje, sken, formati, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, izvoz, ni mogoče odpreti, ni prebrano
from: 1e985f01
---

## Kaj se tukaj odpre

Odprite jih z {{ui:Odprto}} ali s povleci in spusti na stran (glejte temo o prikazu oblaka točk ob modelu):

| Format | Končnica | Kaj se prebere |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: točke, barve, jakost, razredi LiDAR, koordinatni sistem. LAZ do 1 GB. |
| E57 | `.e57` | Vsak sken v datoteki, vsak postavljen po svoji drži; barve ali jakost, kadar datoteka nima barv. Slike v datoteki so izpuščene (sporočeno). Za zdaj do 6 milijonov točk in 512 MB: večje skene izvozite kot LAS ali LAZ. |
| PLY | `.ply` | Besedilo in binarno (obe vrstni redi bajtov): koordinate x y z oglišč, barve in jakost. Ploskve so izpuščene (sporočeno). |
| PCD | `.pcd` | Besedilo in binarno: x y z, zapakirane ali ločene barve, jakost. Stisnjene datoteke PCD še niso prebrane: shranite jih kot binarne ali besedilne. |
| PTX | `.ptx` | En ali več skenov, vsak postavljen s svojo transformacijo; točke, ki jih skener ni izmeril, so izpuščene. Metri. |
| PTS, XYZ | `.pts`, `.xyz` | Besedilo: x y z, z jakostjo in barvami, kadar so stolpci prisotni. |

## Datoteke, ki jih bere samo programska oprema skenerja

Nekatere datoteke skenov so lastniški format proizvajalca skenerja, brez objavljenega opisa in brez odprtega bralnika. BimCraft jih ne more brati; ob odpiranju se prikaže kartica, ki pove, kaj datoteka je in kaj storiti. Sken izvozite iz programske opreme proizvajalca kot E57 ali LAS (ali PTX, PTS) in nato odprite izvoženo datoteko.

| Datoteka | Končnica | Izvozite iz |
|---|---|---|
| Projekt ReCap | `.rcp` | ReCap: odprite projekt in ga izvozite. Projekt samo kaže na svoje skene, zato samo kopiranje `.rcp` ne da nobenih točk. |
| Sken ReCap | `.rcs` | ReCap: odprite projekt, ki mu sken pripada, in ga izvozite. |
| Sken FARO | `.fls` | FARO SCENE. |
| Sken Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Sken Trimble | `.tzf` | Trimble RealWorks ali Trimble Business Center. |
| Sken Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Ko izvoz zahteva format, LAS ali LAZ ohrani vse, kar BimCraft prikazuje (barve, jakost, razrede in koordinatni sistem), v najmanjši datoteki.
:::

## Zakaj teh datotek ni mogoče prebrati

Ti formati niso objavljeni, edini način branja pa je knjižnica programske opreme vsakega proizvajalca, pod njegovimi lastnimi pogoji. BimCraft bere samo formate, ki jih lahko prebere z lastno kodo na vašem računalniku, zato sken ni nikoli treba poslati nikamor, da ga odprete.
