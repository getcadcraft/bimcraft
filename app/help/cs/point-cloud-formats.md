---
title: Formáty mračen bodů: co se otevře a co exportovat
summary: Které soubory laserových skenů se otevřou v 3D pohledu, které jsou vlastním formátem výrobce skeneru a co exportovat ze softwaru skeneru, aby se sken zde otevřel.
keywords: mračno bodů, laserový sken, sken, formáty, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, export, nelze otevřít, nečte se
from: 1e985f01
---

## Co se zde otevře

Otevřete je přes {{ui:Otevřený}} nebo jejich přetažením na stránku (viz téma o zobrazení mračna bodů vedle modelu):

| Formát | Přípona | Co se načte |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: body, barvy, intenzita, třídy LiDARu, souřadnicový systém. LAZ až 1 GB. |
| E57 | `.e57` | Každý sken v souboru, každý umístěný podle své polohy; barvy, nebo intenzita, pokud soubor barvy nemá. Obrázky v souboru se vynechají (oznámí se). Zatím až 6 milionů bodů a 512 MB: větší skeny exportujte jako LAS nebo LAZ. |
| PLY | `.ply` | Textové i binární (obě pořadí bajtů): souřadnice x y z vrcholů, barvy a intenzita. Plochy se vynechají (oznámí se). |
| PCD | `.pcd` | Textové i binární: x y z, sbalené nebo oddělené barvy, intenzita. Komprimované soubory PCD se zatím nečtou: uložte je jako binární nebo textové. |
| PTX | `.ptx` | Jeden nebo více skenů, každý umístěný vlastní transformací; body, které skener nezměřil, se vynechají. Metry. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x y z, s intenzitou a barvami, pokud jsou ve sloupcích. |

## Soubory, které čte jen software skeneru

Některé soubory skenů jsou vlastním formátem výrobce skeneru bez zveřejněného popisu a bez otevřeného čtenáře. BimCraft je nemůže číst a při jejich otevření se zobrazí karta, která vysvětlí, o jaký soubor jde, a co dělat. Exportujte sken ze softwaru výrobce jako E57 nebo LAS (nebo PTX, PTS) a pak otevřete exportovaný soubor.

| Soubor | Přípona | Exportujte z |
|---|---|---|
| Projekt ReCap | `.rcp` | ReCap: otevřete projekt a exportujte ho. Projekt pouze odkazuje na své skeny, takže samotný `.rcp` bez nich nedá žádné body. |
| Sken ReCap | `.rcs` | ReCap: otevřete projekt, do kterého sken patří, a exportujte ho. |
| Sken FARO | `.fls` | FARO SCENE. |
| Sken Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Sken Trimble | `.tzf` | Trimble RealWorks nebo Trimble Business Center. |
| Sken Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Když se export zeptá na formát, LAS nebo LAZ zachová vše, co BimCraft zobrazuje (barvy, intenzitu, třídy a souřadnicový systém), v nejmenším souboru.
:::

## Proč se tyto soubory nečtou

Tyto formáty nejsou zveřejněny a jediný způsob, jak je číst, je softwarová knihovna každého výrobce za jeho vlastních podmínek. BimCraft čte jen formáty, které umí číst vlastním kódem na tomto počítači, takže sken nikdy nemusí být odeslán někam jinam, aby se otevřel.
