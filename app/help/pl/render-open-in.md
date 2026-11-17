---
title: Otwórz scenę w innym programie
summary: Zapisz scenę jako plik USD lub glTF dla dowolnego programu, który je czyta, albo otwórz ją z Studio w programie na tym komputerze.
keywords: otwórz w, usd, gltf, glb, eksport, program do renderowania, archviz, studio, usdview, wyślij, przekazanie, pakiet, folder unreal
from: 0a6559ee
---

Wybierz pozycję **Otwórz w** na liście Silnik okna {{ui:Renderuj}}, aby przenieść scenę do innego programu. Nic nie wraca do modelu.

## Plik dla dowolnego programu

- **Plik USD** zapisuje scenę jako `.usdc` (lub `.usdz`, gdy model zawiera obrazy): [ten sam plik co Zapisz jako USD](topic:usd), z materiałami, lampami i kamerami. Zachowuje powielone wystąpienia i dokładne wartości materiałów. Większość renderów, silników gier i przeglądarek odczytuje USD.
- **Plik glTF (.glb)** zapisuje lżejszy plik glTF 2.0 z materiałami, teksturami i lampami; zob. [Wysyłanie modelu do programu do renderowania](topic:model-for-rendering), co zawiera, a czego nie.

- **Folder projektu Unreal (.zip)** zapisuje folder, który zapisuje [Wysyłanie sceny do silnika gier](topic:render-unreal), dla projektu na dowolnym komputerze.

Wszystkie trzy działają w przeglądarce i w Studio.

## W Studio: otwórz w programie

Studio wyświetla listę programów znalezionych na tym komputerze, które mogą otworzyć scenę: usdview, jeśli jest na ścieżce wyszukiwania, oraz domyślny program komputera dla danego typu pliku. Wybierz jeden, wskaż USD lub glTF, jeśli program czyta oba, i kliknij {{ui:Renderuj}}. Studio zapisuje pakiet w nowym folderze w Dokumentach (`CadCraft hand-off`; nic nie jest nadpisywane, każde wysłanie ma własny folder), uruchamia na nim program, a potem podaje, gdzie są pliki.

| Program | Najlepiej odczytuje |
|---|---|
| usdview | USD |
| Program domyślny komputera | To, co komputer ma dla danego typu pliku |

Studio uruchamia tylko programy z tej stałej listy; nie uruchamia niczego, o co strona prosi po nazwie, i nigdy nie uruchamia programu objętego licencją GNU GPL (zob. [Rysowanie obrazu innym programem](topic:render-other-program#programs-cadcraft-never-runs)). Każdy program, który czyta USD lub glTF, otwiera plik z sekcji **Plik dla dowolnego programu** powyżej.

:::note
Twinmotion, Enscape i inne programy do wizualizacji nie są na tej liście: CadCraft nie został z nimi sprawdzony i nie składa żadnych deklaracji na ich temat. Plik glTF lub USD stąd jest drogą wejścia; zob. uwagi o [wtyczkowych rendererach](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
