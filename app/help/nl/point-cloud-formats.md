---
title: Puntenwolkformaten: wat opent en wat u exporteert
summary: Welke laserscanbestanden openen in de 3D-weergave, welke het eigen formaat van een scannerfabrikant zijn, en wat u uit de software van de scanner exporteert zodat de scan hier opent.
keywords: puntenwolk, laserscan, scan, formaten, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exporteren, kan niet openen, niet gelezen
from: 1e985f01
---

## Wat hier opent

Open deze met {{ui:Open}} of door ze op de pagina te slepen (zie het onderwerp over het tonen van een puntenwolk naast het model):

| Formaat | Extensie | Wat wordt gelezen |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punten, kleuren, intensiteit, LiDAR-klassen, het coördinatenstelsel. LAZ tot 1 GB. |
| E57 | `.e57` | Elke scan in het bestand, elk geplaatst via zijn positie; kleuren, of intensiteit wanneer het bestand geen kleuren heeft. Afbeeldingen in het bestand worden weggelaten (wordt gemeld). Voorlopig tot 6 miljoen punten en 512 MB: exporteer grotere scans als LAS of LAZ. |
| PLY | `.ply` | Tekst en binair (beide bytevolgordes): de x y z van de hoekpunten, kleuren en intensiteit. Vlakken worden weggelaten (wordt gemeld). |
| PCD | `.pcd` | Tekst en binair: x y z, samengestelde of afzonderlijke kleuren, intensiteit. Gecomprimeerde PCD-bestanden worden nog niet gelezen: sla ze op als binair of als tekst. |
| PTX | `.ptx` | Een of meer scans, elk geplaatst via zijn eigen transformatie; punten die de scanner niet heeft gemeten, worden weggelaten. Meters. |
| PTS, XYZ | `.pts`, `.xyz` | Tekst: x y z, met intensiteit en kleuren wanneer de kolommen er zijn. |

## Bestanden die alleen de software van de scanner leest

Sommige scanbestanden zijn het eigen formaat van een scannerfabrikant, zonder gepubliceerde beschrijving en zonder open lezer. BimCraft kan ze niet lezen; wanneer u er een opent, verschijnt een kaart die zegt wat het is en wat u moet doen. Exporteer de scan uit de software van de fabrikant als E57 of LAS (of PTX, PTS) en open daarna het geëxporteerde bestand.

| Bestand | Extensie | Exporteren vanuit |
|---|---|---|
| ReCap-project | `.rcp` | ReCap: open het project en exporteer het. Het project verwijst alleen naar zijn scans, dus alleen het `.rcp` kopiëren levert geen punten op. |
| ReCap-scan | `.rcs` | ReCap: open het project waartoe de scan behoort en exporteer het. |
| FARO-scan | `.fls` | FARO SCENE. |
| Leica-scan | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-scan | `.tzf` | Trimble RealWorks of Trimble Business Center. |
| Z+F-scan | `.zfs` | Z+F LaserControl. |

:::tip
Wanneer de export om een formaat vraagt, houdt LAS of LAZ alles wat BimCraft toont (kleuren, intensiteit, klassen en het coördinatenstelsel) in het kleinste bestand.
:::

## Waarom deze bestanden niet worden gelezen

Die formaten zijn niet gepubliceerd, en de enige manier om ze te lezen is de softwarebibliotheek van elke fabrikant, onder hun eigen voorwaarden. BimCraft leest alleen formaten die het met zijn eigen code op uw computer kan lezen, dus een scan hoeft nooit ergens naartoe te worden gestuurd om te kunnen openen.
