---
title: Formaty chmur punktów: co się otwiera i co wyeksportować
summary: Które pliki skanów laserowych otwierają się w widoku 3D, które są własnym formatem producenta skanera i co wyeksportować z oprogramowania skanera, aby skan otworzył się tutaj.
keywords: chmura punktów, skan laserowy, skan, formaty, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, eksport, nie można otworzyć, nie odczytano
from: 1e985f01
---

## Co się tu otwiera

Otwórz je przyciskiem {{ui:Otwarty}} albo przeciągając je na stronę (zobacz temat o wyświetlaniu chmury punktów obok modelu):

| Format | Rozszerzenie | Co jest odczytywane |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punkty, kolory, intensywność, klasy LiDAR, układ współrzędnych. LAZ do 1 GB. |
| E57 | `.e57` | Każdy skan w pliku, każdy umieszczony według swojej pozycji; kolory albo intensywność, gdy plik nie ma kolorów. Zdjęcia w pliku są pomijane (jest o tym informacja). Na razie do 6 milionów punktów i 512 MB: większe skany eksportuj jako LAS lub LAZ. |
| PLY | `.ply` | Tekstowy i binarny (obie kolejności bajtów): współrzędne x y z wierzchołków, kolory i intensywność. Ściany są pomijane (jest o tym informacja). |
| PCD | `.pcd` | Tekstowy i binarny: x y z, kolory spakowane lub osobne, intensywność. Skompresowane pliki PCD nie są jeszcze odczytywane: zapisz je jako binarne lub tekstowe. |
| PTX | `.ptx` | Jeden lub więcej skanów, każdy umieszczony według własnej transformacji; punkty, których skaner nie zmierzył, są pominięte. Metry. |
| PTS, XYZ | `.pts`, `.xyz` | Tekstowe: x y z, z intensywnością i kolorami, gdy są w kolumnach. |

## Pliki, które odczytuje tylko oprogramowanie skanera

Niektóre pliki skanów są własnym formatem producenta skanera, bez opublikowanego opisu i bez otwartego czytnika. BimCraft nie może ich odczytać, a ich otwarcie pokazuje kartę, która mówi, czym są i co zrobić. Wyeksportuj skan z oprogramowania producenta jako E57 lub LAS (albo PTX, PTS), a następnie otwórz wyeksportowany plik.

| Plik | Rozszerzenie | Wyeksportuj z |
|---|---|---|
| Projekt ReCap | `.rcp` | ReCap: otwórz projekt i wyeksportuj go. Projekt wskazuje tylko na swoje skany, więc samo skopiowanie `.rcp` nie daje żadnych punktów. |
| Skan ReCap | `.rcs` | ReCap: otwórz projekt, do którego należy skan, i wyeksportuj go. |
| Skan FARO | `.fls` | FARO SCENE. |
| Skan Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Skan Trimble | `.tzf` | Trimble RealWorks lub Trimble Business Center. |
| Skan Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Gdy eksport pyta o format, LAS lub LAZ zachowuje wszystko, co pokazuje BimCraft (kolory, intensywność, klasy i układ współrzędnych), w najmniejszym pliku.
:::

## Dlaczego tych plików nie odczytuje się

Te formaty nie są opublikowane, a jedynym sposobem ich odczytu jest biblioteka oprogramowania każdego producenta, na jego własnych warunkach. BimCraft odczytuje tylko formaty, które potrafi odczytać własnym kodem na Twoim komputerze, więc skan nigdy nie musi być wysyłany, aby go otworzyć.
