---
title: Punktwolkenformate: was sich öffnet und was zu exportieren ist
summary: Welche Laserscan-Dateien sich in der 3D-Ansicht öffnen, welche ein eigenes Format des Scanner-Herstellers sind und was Sie aus der Software des Scanners exportieren sollten, damit sich der Scan hier öffnet.
keywords: Punktwolke, Laserscan, Scan, Formate, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, Export, lässt sich nicht öffnen, nicht lesbar
from: 1e985f01
---

## Was hier geöffnet wird

Öffnen Sie diese mit {{ui:Offen}} oder indem Sie sie auf die Seite ziehen (siehe das Thema zum Anzeigen einer Punktwolke neben dem Modell):

| Format | Erweiterung | Was gelesen wird |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: Punkte, Farben, Intensität, LiDAR-Klassen, das Koordinatensystem. LAZ bis 1 GB. |
| E57 | `.e57` | Jeder Scan in der Datei, jeweils mit seiner Lage platziert; Farben oder, wenn die Datei keine Farben hat, Intensität. Bilder in der Datei werden ausgelassen (das wird angezeigt). Vorerst bis 6 Millionen Punkte und 512 MB: Größere Scans exportieren Sie als LAS oder LAZ. |
| PLY | `.ply` | Text und binär (beide Byte-Reihenfolgen): die x-, y- und z-Werte der Eckpunkte, Farben und Intensität. Flächen werden ausgelassen (das wird angezeigt). |
| PCD | `.pcd` | Text und binär: x, y, z, gepackte oder getrennte Farben, Intensität. Komprimierte PCD-Dateien werden noch nicht gelesen: Speichern Sie sie als binär oder als Text. |
| PTX | `.ptx` | Ein oder mehrere Scans, jeweils mit eigener Transformation platziert; Punkte, die der Scanner nicht gemessen hat, werden ausgelassen. Meter. |
| PTS, XYZ | `.pts`, `.xyz` | Text: x, y, z, mit Intensität und Farben, wenn die Spalten vorhanden sind. |

## Dateien, die nur die Software des Scanners lesen

Manche Scan-Dateien sind ein eigenes Format des Scanner-Herstellers, ohne veröffentlichte Beschreibung und ohne offenen Leser. BimCraft kann sie nicht lesen. Beim Öffnen erscheint eine Karte, die sagt, was es ist und was zu tun ist. Exportieren Sie den Scan aus der Software des Herstellers als E57 oder LAS (oder als PTX oder PTS) und öffnen Sie dann die exportierte Datei.

| Datei | Erweiterung | Exportieren aus |
|---|---|---|
| ReCap-Projekt | `.rcp` | ReCap: Öffnen Sie das Projekt und exportieren Sie es. Das Projekt verweist nur auf seine Scans; wenn Sie allein die `.rcp` kopieren, gibt es keine Punkte. |
| ReCap-Scan | `.rcs` | ReCap: Öffnen Sie das Projekt, zu dem der Scan gehört, und exportieren Sie es. |
| FARO-Scan | `.fls` | FARO SCENE. |
| Leica-Scan | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble-Scan | `.tzf` | Trimble RealWorks oder Trimble Business Center. |
| Z+F-Scan | `.zfs` | Z+F LaserControl. |

:::tip
Wenn der Export nach einem Format fragt, behalten LAS oder LAZ alles, was BimCraft zeigt (Farben, Intensität, Klassen und das Koordinatensystem), in der kleinsten Datei.
:::

## Warum diese Dateien nicht gelesen werden

Diese Formate sind nicht veröffentlicht. Der einzige Weg, sie zu lesen, ist die eigene Softwarebibliothek jedes Herstellers, unter deren eigenen Bedingungen. BimCraft liest nur Formate, die es mit eigenem Code auf Ihrem Computer lesen kann. So muss ein Scan zum Öffnen nie irgendwohin gesendet werden.
