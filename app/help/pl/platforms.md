---
title: Przeglądarki, urządzenia i pamięć
summary: Co różni BimCraft w Chrome, Edge, Firefox i Safari, na Macu, Windows i Linux, przy myszy, gładziku lub dotyku oraz jak duży plik może obsłużyć.
keywords: przeglądarka, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefon, dotyk, gładzik, pamięć, duże pliki, webgl, wydajność
from: fd8acba1
---

BimCraft działa w bieżących wersjach Chrome, Edge, Firefox i Safari, na Macu, Windows i Linux. Widok 3D wymaga WebGL, który ma każda bieżąca przeglądarka. Zobacz [Przeglądarki i komputery](common:browsers), czego aplikacje potrzebują ogólnie.

## Otwieranie folderu

| Przeglądarka | {{ui:Otwórz folder}} robi to | Przeciągnięcie folderu | {{ui:Ostatnie foldery}} |
|---|---|---|---|
| Chrome, Edge | Okno wyboru folderu przeglądarki, potem „Zezwolić tej witrynie na wyświetlanie plików?”: kliknij **Wyświetl pliki** | Otwiera się bez pytania | Tak, dla wybranych lub przeciągniętych folderów |
| Firefox | Systemowe okno wyboru folderu | Otwiera się bez pytania | Nie |
| Safari | Systemowe okno wyboru folderu, z przyciskiem **Prześlij** (nic nie jest przesyłane) | Otwiera się bez pytania | Nie |

Od strony technicznej: Chrome i Edge używają okna wyboru File System Access i mogą zapamiętać folder. Firefox i Safari używają starszego okna wyboru folderu, które przekazuje wszystkie pliki folderu naraz i nie może ich zapamiętać. Przeciągnięty folder jest odczytywany wpis po wpisie we wszystkich przeglądarkach.

:::chromium
Brave i niektóre inne przeglądarki oparte na Chromium wyłączają okno wyboru folderu. BimCraft wtedy używa systemowego okna wyboru folderu, a przeglądarka może zapytać „Przesłać *n* plików do tej witryny?”. Nic nie jest przesyłane; pliki trafiają tylko do karty. Przeciągnięcie folderu pozwala uniknąć tego pytania.
:::

## Mac, Windows i Linux

- Skróty {{key:Mod+S}} i {{key:Mod+Z}} to Command na Macu, a Ctrl na Windows i Linux.
- {{key:Ctrl+Shift+F}} (tryby ekranu) to Control na każdej platformie, także na Macu.
- Okna plików i folder pobrań są systemowe.

## Mysz, gładzik i dotyk

| Wejście | Widok 3D | Rysunek 2D |
|---|---|---|
| Mysz | Lewy przycisk i przeciągnięcie obraca, prawy przesuwa, kółko powiększa, kliknięcie wybiera | Dowolne przeciągnięcie przesuwa, kółko powiększa, dwukrotne kliknięcie dopasowuje |
| Gładzik | Kliknięcie i przeciągnięcie obraca; {{key:Shift}} lub {{key:Mod}} i przeciągnięcie przesuwa; przewijanie dwoma palcami lub uszczypnięcie powiększa | Kliknięcie i przeciągnięcie przesuwa; przewijanie dwoma palcami lub uszczypnięcie powiększa |
| Dotyk | Jeden palec obraca, dwa palce uszczypnięcie i przesunięcie, stuknięcie wybiera | Jeden palec przesuwa; jeszcze bez powiększania uszczypnięciem; stuknij {{ui:Dopasuj}} |

Na gładziku Maca kliknięcie prawym to kliknięcie dwoma palcami (lub kliknięcie z Control). Zobacz [Klawisze, myszy i gładziki](common:keys).

Tablety i telefony mogą otworzyć pojedyncze pliki i je obejrzeć, ale ekran jest mały, wiele przeglądarek mobilnych nie umie wybrać folderu, a duże modele mogą się nie zmieścić w ich pamięci. Najlepiej działa komputer.

## Duże pliki i pamięć

Wszystko, co czyta BimCraft, znajduje się w pamięci karty przeglądarki. Ile karta może zużyć, zależy bardziej od przeglądarki i komputera niż od BimCraft.

| Plik | Ile jest odczytywane | Czego się spodziewać |
|---|---|---|
| IFC | Cały plik i geometria 3D zbudowana z niego | Zależy to od komputera i przeglądarki; model o wielkości kilkuset megabajtów może być za dużo dla laptopa. Powyżej 1,5 mln trójkątów krawędzie są wyłączane |
| Pliki projektu i rodzin | Około 40 KB do 100 KB, niezależnie od rozmiaru | Nawet bardzo duże modele centralne otwierają się od razu, także z dysku sieciowego |
| DWG i DXF | Cały plik | Bardzo duże rysunki pokazują „Ten rysunek jest bardzo duży; pokazano tylko jego część.” |
| Foldery | Lista plików, plus kilka kilobajtów na model | Do 20 000 plików |

Jeśli karta zabraknie pamięci, przeglądarka pokazuje własną stronę błędu (w Chrome: „Ups!”). Zamknij inne karty, przeładuj BimCraft i spróbuj ponownie, albo użyj komputera z większą pamięcią.

## Powiązane

- [Tryb online i offline](topic:online-offline)
- [Rozwiązywanie problemów](topic:troubleshooting)
