---
title: Puntwolkformate: wat oopmaak, en wat om uit te voer
summary: Watter laserskanderingslêers in die 3D-aansig oopmaak, watter 'n skanderervervaardiger se eie formaat is, en wat om uit die skanderer se sagteware uit te voer sodat die skandering hier oopmaak.
keywords: puntwolk, laserskandering, skandering, formate, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, uitvoer, kan nie oopmaak nie, nie gelees nie
from: 1e985f01
---

## Wat hier oopmaak

Maak hierdie oop met {{ui:Oop}} of deur hulle op die bladsy te laat val (sien die onderwerp oor om 'n puntwolk langs die model te wys):

| Formaat | Uitbreiding | Wat gelees word |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punte, kleure, intensiteit, LiDAR-klasse, die koördinaatstelsel. LAZ tot 1 GB. |
| E57 | `.e57` | Elke skandering in die lêer, elk geplaas volgens sy houding; kleure, of intensiteit wanneer die lêer geen kleure het nie. Prente in die lêer word weggelaat (BimCraft sê so). Tot 6 miljoen punte en 512 MB vir nou: voer groter skanderings as LAS of LAZ uit. |
| PLY | `.ply` | Teks en binêr (albei bytevolgordes): die hoekpunte se x y z, kleure en intensiteit. Vlakke word weggelaat (BimCraft sê so). |
| PCD | `.pcd` | Teks en binêr: x y z, gepakte of afsonderlike kleure, intensiteit. Saamgeperste PCD-lêers word nog nie gelees nie: stoor hulle as binêr of teks. |
| PTX | `.ptx` | Een of meer skanderings, elk geplaas deur sy eie transformasie; punte wat die skanderer nie gemeet het nie, word weggelaat. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Teks: x y z, met intensiteit en kleure wanneer die kolomme daar is. |

## Lêers wat net die skanderer se sagteware lees

Sommige skandeerlêers is 'n skanderervervaardiger se eie formaat, sonder gepubliseerde beskrywing en sonder 'n oop leser. BimCraft kan hulle nie lees nie, en as jy een oopmaak, wys dit 'n kaart wat sê wat dit is en wat om te doen. Voer die skandering uit vanaf die vervaardiger se sagteware as E57 of LAS (of PTX, PTS), maak dan die uitgevoerde lêer oop.

| Lêer | Uitbreiding | Voer dit uit vanaf |
|---|---|---|
| ReCap-projek | `.rcp` | ReCap: maak die projek oop en voer dit uit. Die projek wys net na sy skanderings, so om net die `.rcp` te kopieer gee geen punte nie. |
| ReCap-skandering | `.rcs` | ReCap: maak die projek waaraan die skandering behoort oop en voer dit uit. |
| FARO-skandering | `.fls` | FARO SCENE. |
| Leica-skandering | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skandering | `.tzf` | Trimble RealWorks of Trimble Business Center. |
| Z+F-skandering | `.zfs` | Z+F LaserControl. |

:::tip
Wanneer die uitvoer 'n formaat vra, hou LAS of LAZ alles wat BimCraft wys (kleure, intensiteit, klasse en die koördinaatstelsel) in die kleinste lêer.
:::

## Waarom hierdie lêers nie gelees word nie

Daardie formate is nie gepubliseer nie, en die enigste manier om hulle te lees is elke vervaardiger se eie sagteware-biblioteek, onder sy eie voorwaardes. BimCraft lees net formate wat dit met sy eie kode op jou rekenaar kan lees, so 'n skandering hoef nooit ergens gestuur te word om oop te maak nie.
