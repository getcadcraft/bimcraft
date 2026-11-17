---
title: Formáty mračien bodov: čo sa otvorí a čo exportovať
summary: Ktoré súbory laserového skenovania sa otvoria v 3D zobrazení, ktoré sú vlastným formátom výrobcu skenera a čo exportovať z programu skenera, aby sa sken tu otvoril.
keywords: mračno bodov, laserový sken, sken, formáty, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, nedá sa otvoriť, nečíta sa
from: 1e985f01
---

## Čo sa tu otvorí

Otvorte ich pomocou {{ui:Open}} alebo presunutím na stránku (pozri tému o zobrazení mračna bodov vedľa modelu):

| Formát | Prípona | Čo sa číta |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: body, farby, intenzita, triedy LiDAR, súradnicový systém. LAZ až do 1 GB. |
| E57 | `.e57` | Každý sken v súbore, umiestnený podľa svojej polohy; farby, alebo intenzita, keď súbor nemá farby. Obrázky v súbore sa vynechajú (oznámi sa). Zatiaľ až 6 miliónov bodov a 512 MB: väčšie skeny exportujte ako LAS alebo LAZ. |
| PLY | `.ply` | Text aj binárne (obe poradia bajtov): vrcholy x y z, farby a intenzita. Plochy sa vynechajú (oznámi sa). |
| PCD | `.pcd` | Text aj binárne: x y z, zbalené alebo oddelené farby, intenzita. Komprimované súbory PCD sa zatiaľ nečítajú: uložte ich ako binárne alebo textové. |
| PTX | `.ptx` | Jeden alebo viac skenov, každý umiestnený vlastnou transformáciou; body, ktoré skener nezmeral, sa vynechajú. Metre. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, s intenzitou a farbami, keď sú stĺpce prítomné. |

## Súbory, ktoré číta iba softvér skenera

Niektoré súbory skenov sú vlastným formátom výrobcu skenera, bez zverejneného popisu a bez otvoreného čítača. BimCraft ich nedokáže čítať a pri ich otvorení sa zobrazí karta, ktorá povie, čo je to za súbor a čo treba urobiť. Exportujte sken zo softvéru výrobcu ako E57 alebo LAS (alebo PTX, PTS) a potom otvorte exportovaný súbor.

| Súbor | Prípona | Exportujte z |
|---|---|---|
| Projekt ReCap | `.rcp` | ReCap: otvorte projekt a exportujte ho. Projekt len ukazuje na svoje skeny, takže samotná kópia `.rcp` nedá žiadne body. |
| Sken ReCap | `.rcs` | ReCap: otvorte projekt, do ktorého sken patrí, a exportujte ho. |
| Sken FARO | `.fls` | FARO SCENE. |
| Sken Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Sken Trimble | `.tzf` | Trimble RealWorks alebo Trimble Business Center. |
| Sken Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Keď export žiada formát, LAS alebo LAZ zachová všetko, čo BimCraft zobrazuje (farby, intenzitu, triedy a súradnicový systém), v najmenšom súbore.
:::

## Prečo sa tieto súbory nečítajú

Tieto formáty nie sú zverejnené a jediný spôsob, ako ich čítať, je knižnica softvéru každého výrobcu podľa jeho vlastných podmienok. BimCraft číta iba formáty, ktoré dokáže čítať vlastným kódom na vašom počítači, takže sken sa nikdy nemusí posielať nikam, aby sa otvoril.
