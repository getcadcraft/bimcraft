---
title: Wyświetlanie rysunku DWG lub DXF
summary: Otwórz DWG lub DXF, poruszaj się po przestrzeni modelu i arkuszach, odczytuj współrzędne i zobacz, czego jeszcze nie narysowano.
keywords: bloki dynamiczne, stany widoczności, dwg, dxf, cad, rysunek, 2d, widok, przeglądarka, przesuwanie, powiększanie, przestrzeń modelu, przestrzeń papieru, układ, współrzędne, otwórz dwg
from: 4db3122a
---

## Co zrobisz

Otworzysz rysunek CAD, zobaczysz go w 3D lub 2D, poruszysz się po nim, przełączysz się między przestrzenią modelu a jego arkuszami i odczytasz współrzędne. BimCraft pokazuje rysunki DWG i DXF; nie edytuje ich ani nie zapisuje. Aby coś zmienić, kliknij {{ui:Edytuj w CadCraft}}; rysunek otworzy się w aplikacji do kreślenia CadCraft, w nowej karcie.

## Kroki

1. Kliknij {{ui:Wybierz plik}} albo upuść rysunek na stronę.
2. Wybierz plik `.dwg` lub `.dxf`.
3. Poczekaj, aż wiersz stanu napisze "Odczytywanie rysunku…". Duże rysunki zajmują kilka sekund. Potem wiersz podaje, ile trwało odczytanie, a "renderowanie…" pojawia się, gdy rysowany jest pierwszy obraz, razem z tym, ile to trwało.
4. Rysunek otwiera się w 3D, najszybszym sposobie pokazania dużego rysunku (zobacz [Zobacz rysunek DWG lub DXF w 3D](topic:dwg-in-3d)). Kliknij {{ui:Model}}, aby przejść do płaskiego widoku 2D. Aby zawsze otwierać rysunki w 2D, ustaw {{ui:Ustawienia}} › {{ui:BimCraft}} › **Rysunki otwierają się w** na {{ui:Model (2D)}}. Rysunek bez niczego w przestrzeni modelu albo przeglądarka, która nie pokazuje 3D, otwiera się w 2D.
5. Spójrz na karty nad rysunkiem: najpierw {{ui:Model}}, potem po jednej karcie na arkusz, w kolejności, jaką ma rysunek.
6. Kliknij kartę arkusza, aby zobaczyć ten arkusz: papier z modelem pokazanym przez jego okna widokowe.
7. Kliknij {{ui:Model}}, aby wrócić do przestrzeni modelu.
8. Przesuń wskaźnik nad rysunek i odczytaj współrzędne X i Y w rogu.

## Co powinieneś zobaczyć

- Rysunek dopasowany do okna. Kolory są zgodne z rysunkiem; białe linie (kolor 7) rysują się kolorem tekstu motywu, a jasne kolory są przyciemniane w jasnym motywie, aby pozostały czytelne.
- Panel {{ui:Rysunek}} po lewej: plik, rozmiar, format (na przykład "AutoCAD 2018 (AC1032)"), jednostki, liczbę elementów i warstw, liczbę arkuszy, a także dołączone rysunki i wyposażenie, gdy są.
- Lista {{ui:Warstwy}} po lewej.
- Po prawej: jak się poruszać, dołączone rysunki i obrazy oraz **Jeszcze nie narysowano**.

## Poruszanie się

:::mouse
| Aby | Zrób to |
|---|---|
| Przesunąć | Przeciągnij dowolnym przyciskiem myszy |
| Powiększyć | Przewiń kółkiem; punkt pod wskaźnikiem pozostaje na miejscu |
| Dopasować | Kliknij dwukrotnie, naciśnij {{key:F}} albo kliknij {{ui:Dopasuj}} |
:::

:::mac mouse
Na gładziku przewijanie dwoma palcami **powiększa**, nie przesuwa. Szczypanie też powiększa. Aby przesunąć, kliknij i przeciągnij.
:::

:::touch
Przeciągnij jednym palcem, aby przesunąć. Powiększanie szczypaniem dla rysunków nie jest jeszcze zbudowane: stuknij {{ui:Dopasuj}}, aby zobaczyć cały arkusz, a do powiększania użyj myszy lub gładzika.
:::

## Bloki dynamiczne

Blok dynamiczny jest rysowany tak, jak pokazuje go rysunek: każdy umieszczony blok w stanie widoczności, z jakim rysunek został zapisany ("Rzut" lub "Przód", "Pojedyncza komora" lub "Podwójna komora"). Po prawej **Bloki dynamiczne** wypisuje każdy umieszczony w przestrzeni modelu: ile jest umieszczonych, jakie stany pokazują i jakie stany ma blok. W {{ui:3D}} kliknij umieszczony blok, aby zobaczyć we Właściwościach **Blok dynamiczny**, **Pokazany stan** i **Pozostałe stany**. BimCraft nie przełącza stanów.

## Jeszcze nie narysowano

Niektóre rodzaje obiektów nie są rysowane w tej wersji. Są liczone w **Jeszcze nie narysowano** po prawej ("Te części rysunku są na razie pomijane, nie zgadywane."), abyś wiedział, że czegoś brakuje. Linie, polilinie, łuki, okręgi, elipsy, splajny, kreskowania i wypełnienia bryłowe, tekst i tekst wieloliniowy, bloki z atrybutami, wymiary, odnośniki i wielokrotne odnośniki, tabele, obrazy i okna widokowe są rysowane. Ściany 3D, siatki wielościenne (polyface mesh) i siatki wielokątów (polygon mesh) są rysowane jako ich krawędzie widziane z góry; przełącz na {{ui:3D}}, aby zobaczyć je jako powierzchnie.

Plik DXF w postaci binarnej nie otwiera się: BimCraft o tym informuje. Zapisz go ponownie jako DXF ASCII albo jako DWG, w programie, który go utworzył.

## Częste błędy

- **Rysunek wygląda na pusty.** Niektóre warstwy mogą być wyłączone lub zamrożone w samym rysunku; zaczynają się odznaczone w {{ui:Warstwy}}. Kliknij {{ui:Włącz wszystkie}}. Jeśli stan mówi "*nazwa* to pusty rysunek: nie zawiera linii, tekstu ani bloków.", to nic w nim nie ma.
- **Arkusz pokazuje pustą ramkę.** Arkusz może polegać na dołączonych rysunkach. Zobacz [Znajdowanie dołączonych rysunków i obrazów](topic:dwg-linked-files).
- **Tekst wygląda trochę inaczej.** BimCraft rysuje tekst wąską bezszeryfową czcionką, a nie czcionkami rysunku, więc tekst może być nieco szerszy lub węższy niż w programie, który go utworzył.
- **"*nazwa* nie może zostać odczytany. Może być uszkodzony albo zapisany w formacie, którego czytnik jeszcze nie obsługuje."** Nawias na końcu podaje kod formatu pliku. Zapisz go w programie, który go utworzył, jako starszy DWG albo DXF, i spróbuj ponownie.
- **Oczekiwanie, że będziesz mierzyć, rysować lub edytować.** BimCraft tylko wyświetla rysunki. Kliknij {{ui:Edytuj w CadCraft}}, aby otworzyć ten sam plik w aplikacji do kreślenia CadCraft, która go edytuje i zapisuje kopię jako DWG lub DXF. Twój oryginalny plik nie zmienia się, a dołączone rysunki pozostają w BimCraft. Przycisk pojawia się tylko tam, gdzie CadCraft jest dla Ciebie otwarty.

## Dalej

- [Zobacz rysunek DWG lub DXF w 3D](topic:dwg-in-3d)
- [Praca z warstwami i arkuszami](topic:dwg-layers-sheets)
- [Sprawdzanie rysunku w widoku wydruku](topic:print-view)
