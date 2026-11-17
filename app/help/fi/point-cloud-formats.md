---
title: Pistepilviformaatit: mitkä avautuvat ja mitä viedä
summary: Mitkä laserskannaustiedostot avautuvat 3D-näkymässä, mitkä ovat skannerivalmistajan omia muotoja ja mitä viedä skannerin ohjelmistosta, jotta skannaus avautuu tässä.
keywords: pistepilvi, laserskannaus, skannaus, muodot, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, vienti, ei aukea, ei lue
from: 1e985f01
---

## Mitä täällä avautuu

Avaa nämä {{ui:Avoin}}-toiminnolla tai pudottamalla ne sivulle (katso aihe pistepilven näyttämisestä mallin rinnalla):

| Muoto | Pääte | Mitä luetaan |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: pisteet, värit, intensiteetti, LiDAR-luokat ja koordinaatisto. LAZ enintään 1 GB. |
| E57 | `.e57` | Jokainen skannaus tiedostossa, kukin asemansa mukaan sijoitettuna; värit tai intensiteetti, jos tiedostossa ei ole värejä. Kuvat tiedostossa jätetään pois (kerrotaan). Toistaiseksi enintään 6 miljoonaa pistettä ja 512 MB: vie suuremmat skannaukset LAS- tai LAZ-muodossa. |
| PLY | `.ply` | Teksti ja binääri (molemmat tavujärjestykset): kärkipisteiden x y z, värit ja intensiteetti. Pinnat jätetään pois (kerrotaan). |
| PCD | `.pcd` | Teksti ja binääri: x y z, yhdistetyt tai erilliset värit ja intensiteetti. Pakattuja PCD-tiedostoja ei vielä lueta: tallenna ne binäärinä tai tekstinä. |
| PTX | `.ptx` | Yksi tai useampi skannaus, kukin omalla muunnoksellaan sijoitettuna; pisteet, joita skanneri ei mitannut, jätetään pois. Metrejä. |
| PTS, XYZ | `.pts`, `.xyz` | Teksti: x y z, intensiteetti ja värit, kun sarakkeet ovat mukana. |

## Tiedostot, joita vain skannerin ohjelmisto lukee

Osa skannaustiedostoista on skannerivalmistajan omia muotoja, joista ei ole julkaistua kuvausta eikä avointa lukijaa. BimCraft ei voi lukea niitä, ja niiden avaaminen näyttää kortin, joka kertoo, mikä tiedosto on ja mitä tehdä. Vie skannaus valmistajan ohjelmistosta E57- tai LAS-muodossa (tai PTX- tai PTS-muodossa) ja avaa viety tiedosto.

| Tiedosto | Pääte | Vie se ohjelmasta |
|---|---|---|
| ReCap-projekti | `.rcp` | ReCap: avaa projekti ja vie se. Projekti vain osoittaa skannauksiinsa, joten pelkkä `.rcp`-tiedoston kopiointi ei anna pisteitä. |
| ReCap-skannaus | `.rcs` | ReCap: avaa projekti, johon skannaus kuuluu, ja vie se. |
| FARO-skannaus | `.fls` | FARO SCENE. |
| Leica-skannaus | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-skannaus | `.tzf` | Trimble RealWorks tai Trimble Business Center. |
| Z+F-skannaus | `.zfs` | Z+F LaserControl. |

:::tip
Kun vienti kysyy muotoa, LAS tai LAZ säilyttää kaiken, mitä BimCraft näyttää (värit, intensiteetin, luokat ja koordinaatiston), pienimmässä tiedostossa.
:::

## Miksi näitä tiedostoja ei lueta

Nämä muodot eivät ole julkaistuja, ja ainoa tapa lukea ne on kunkin valmistajan oma ohjelmistokirjasto sen omilla ehdoilla. BimCraft lukee vain muotoja, jotka se pystyy lukemaan omalla koodillaan tietokoneellasi, joten skannausta ei tarvitse koskaan lähettää mihinkään, jotta se avautuu.
